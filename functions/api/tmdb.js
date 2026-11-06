
function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": status === 200 ? "public, max-age=86400" : "no-store",
      ...extraHeaders
    }
  });
}

function cleanYear(value) {
  if (!value) return null;
  const n = Number(value);
  return Number.isInteger(n) && n >= 1880 && n <= 2100 ? n : null;
}

export async function onRequestGet(context) {
  const { request, env } = context;

  if (!env.TMDB_API_KEY) {
    return json({ error: "TMDB_API_KEY is not configured on the server." }, 500);
  }

  const url = new URL(request.url);
  const title = (url.searchParams.get("title") || "").trim();
  const type = url.searchParams.get("type") === "movie" ? "movie" : "tv";
  const year = cleanYear(url.searchParams.get("year"));

  if (!title || title.length > 160) {
    return json({ error: "Invalid title." }, 400);
  }

  const search = new URL(`https://api.themoviedb.org/3/search/${type}`);
  search.searchParams.set("api_key", env.TMDB_API_KEY);
  search.searchParams.set("query", title);
  search.searchParams.set("language", "fr-FR");
  search.searchParams.set("include_adult", "false");
  search.searchParams.set("page", "1");

  if (year) {
    search.searchParams.set(type === "movie" ? "year" : "first_air_date_year", String(year));
  }

  const searchRes = await fetch(search.toString(), {
    headers: { "accept": "application/json" }
  });

  if (!searchRes.ok) {
    return json({ error: "TMDB search failed." }, 502);
  }

  const searchData = await searchRes.json();
  const hit = Array.isArray(searchData.results) ? searchData.results[0] : null;

  if (!hit) {
    return json({ error: "No TMDB match.", title, type }, 404);
  }

  const detail = new URL(`https://api.themoviedb.org/3/${type}/${hit.id}`);
  detail.searchParams.set("api_key", env.TMDB_API_KEY);
  detail.searchParams.set("language", "fr-FR");
  detail.searchParams.set("append_to_response", "credits");

  const detailRes = await fetch(detail.toString(), {
    headers: { "accept": "application/json" }
  });

  if (!detailRes.ok) {
    return json({ error: "TMDB details failed." }, 502);
  }

  const d = await detailRes.json();
  const release = type === "movie" ? d.release_date : d.first_air_date;
  const runtime = type === "movie"
    ? (d.runtime ? `${d.runtime} min` : null)
    : (d.number_of_seasons ? `${d.number_of_seasons} saison${d.number_of_seasons > 1 ? "s" : ""}` : null);

  return json({
    tmdbId: d.id,
    title: type === "movie" ? d.title : d.name,
    originalTitle: type === "movie" ? d.original_title : d.original_name,
    overview: d.overview || "",
    year: release ? release.slice(0, 4) : null,
    rating: typeof d.vote_average === "number" ? d.vote_average : null,
    poster: d.poster_path ? `https://image.tmdb.org/t/p/w500${d.poster_path}` : null,
    backdrop: d.backdrop_path ? `https://image.tmdb.org/t/p/original${d.backdrop_path}` : null,
    genres: Array.isArray(d.genres) ? d.genres.map(g => g.name) : [],
    runtime,
    cast: Array.isArray(d.credits?.cast)
      ? d.credits.cast.slice(0, 12).map(p => ({
          name: p.name,
          character: p.character || "",
          profile: p.profile_path ? `https://image.tmdb.org/t/p/w185${p.profile_path}` : null
        }))
      : []
  });
}
