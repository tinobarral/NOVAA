
const ADS = {
  banner: false,
  native: false,
  interstitial: false,
  popUnder: false,
  directLink: false
};

/*
  Catalogue:
  - titres actuellement visibles/indexés sur Movix au moment de la génération;
  - aucun flux vidéo, lecteur externe ou source de streaming;
  - aucune image ni synopsis de Movix n'est recopié.

  TMDB:
  Movix indique que ses métadonnées viennent de TMDB.
  Ce prototype laisse volontairement les images/synopsis hors-ligne.
  Pour un projet commercial, vérifie la licence TMDB adaptée avant usage.
*/

const items = [{"id": 1, "title": "Black Doves", "type": "Série", "year": 2024, "rating": 7.0, "genre": "À découvrir", "section": "Tendances", "tmdbQuery": "Black Doves"}, {"id": 2, "title": "The Greatest", "type": "Série", "year": 2026, "rating": 5.2, "genre": "À découvrir", "section": "Tendances", "tmdbQuery": "The Greatest"}, {"id": 3, "title": "VisionQuest", "type": "Série", "year": 2026, "rating": 8.7, "genre": "À découvrir", "section": "Tendances", "tmdbQuery": "VisionQuest"}, {"id": 4, "title": "L'impératrice remariée", "type": "Série", "year": 2026, "rating": 8.8, "genre": "À découvrir", "section": "Tendances", "tmdbQuery": "L'impératrice remariée"}, {"id": 5, "title": "Stick", "type": "Série", "year": null, "rating": null, "genre": "À découvrir", "section": "Tendances", "tmdbQuery": "Stick"}, {"id": 6, "title": "MobLand", "type": "Série", "year": null, "rating": null, "genre": "À découvrir", "section": "Tendances", "tmdbQuery": "MobLand"}, {"id": 7, "title": "Bass X Machina", "type": "Série", "year": null, "rating": null, "genre": "À découvrir", "section": "Tendances", "tmdbQuery": "Bass X Machina"}, {"id": 8, "title": "Un job mortel", "type": "Série", "year": 2026, "rating": 7.7, "genre": "À découvrir", "section": "Tendances", "tmdbQuery": "Un job mortel"}, {"id": 9, "title": "Anesthésie", "type": "Série", "year": null, "rating": null, "genre": "À découvrir", "section": "Tendances", "tmdbQuery": "Anesthésie"}, {"id": 10, "title": "All's Fair", "type": "Série", "year": null, "rating": null, "genre": "À découvrir", "section": "Tendances", "tmdbQuery": "All's Fair"}, {"id": 11, "title": "Akka: The Protectors", "type": "Série", "year": 2026, "rating": 6.3, "genre": "À découvrir", "section": "Nouveautés", "tmdbQuery": "Akka: The Protectors"}, {"id": 12, "title": "Nocturne", "type": "Série", "year": null, "rating": null, "genre": "À découvrir", "section": "Nouveautés", "tmdbQuery": "Nocturne"}, {"id": 13, "title": "L'amour sous couverture", "type": "Série", "year": null, "rating": null, "genre": "À découvrir", "section": "Nouveautés", "tmdbQuery": "L'amour sous couverture"}, {"id": 14, "title": "Crystal Lake", "type": "Série", "year": null, "rating": null, "genre": "À découvrir", "section": "Nouveautés", "tmdbQuery": "Crystal Lake"}, {"id": 15, "title": "Dragon Ball Super : Beerus", "type": "Série", "year": null, "rating": null, "genre": "À découvrir", "section": "Nouveautés", "tmdbQuery": "Dragon Ball Super : Beerus"}, {"id": 16, "title": "Avatar : Les Sept Refuges", "type": "Série", "year": null, "rating": null, "genre": "À découvrir", "section": "Nouveautés", "tmdbQuery": "Avatar : Les Sept Refuges"}, {"id": 17, "title": "Carrie", "type": "Série", "year": null, "rating": null, "genre": "À découvrir", "section": "Nouveautés", "tmdbQuery": "Carrie"}, {"id": 18, "title": "Marshals: A Yellowstone Story", "type": "Série", "year": null, "rating": null, "genre": "À découvrir", "section": "Nouveautés", "tmdbQuery": "Marshals: A Yellowstone Story"}, {"id": 19, "title": "Ça : Bienvenue à Derry", "type": "Série", "year": null, "rating": null, "genre": "À découvrir", "section": "Nouveautés", "tmdbQuery": "Ça : Bienvenue à Derry"}, {"id": 20, "title": "Wandance", "type": "Série", "year": null, "rating": null, "genre": "À découvrir", "section": "Nouveautés", "tmdbQuery": "Wandance"}, {"id": 21, "title": "Dexter: Resurrection", "type": "Série", "year": null, "rating": null, "genre": "À découvrir", "section": "Nouveautés", "tmdbQuery": "Dexter: Resurrection"}, {"id": 22, "title": "Avatar : La Légende de Korra", "type": "Série", "year": 2012, "rating": 8.2, "genre": "Animation", "section": "Animation", "tmdbQuery": "Avatar : La Légende de Korra"}, {"id": 23, "title": "Star Butterfly", "type": "Série", "year": 2015, "rating": 8.4, "genre": "Animation", "section": "Animation", "tmdbQuery": "Star Butterfly"}, {"id": 24, "title": "Les Simpson", "type": "Série", "year": 1989, "rating": 8.0, "genre": "Animation", "section": "Animation", "tmdbQuery": "Les Simpson"}, {"id": 25, "title": "Les Griffin", "type": "Série", "year": null, "rating": null, "genre": "Animation", "section": "Animation", "tmdbQuery": "Les Griffin"}, {"id": 26, "title": "Mob Psycho 100", "type": "Série", "year": null, "rating": null, "genre": "Animation", "section": "Animation", "tmdbQuery": "Mob Psycho 100"}, {"id": 27, "title": "Doraemon", "type": "Série", "year": null, "rating": null, "genre": "Animation", "section": "Animation", "tmdbQuery": "Doraemon"}, {"id": 28, "title": "Wakfu", "type": "Série", "year": null, "rating": null, "genre": "Animation", "section": "Animation", "tmdbQuery": "Wakfu"}, {"id": 29, "title": "One Piece", "type": "Série", "year": null, "rating": null, "genre": "Animation", "section": "Animation", "tmdbQuery": "One Piece"}, {"id": 30, "title": "South Park", "type": "Série", "year": null, "rating": null, "genre": "Animation", "section": "Animation", "tmdbQuery": "South Park"}, {"id": 31, "title": "American Dad!", "type": "Série", "year": null, "rating": null, "genre": "Animation", "section": "Animation", "tmdbQuery": "American Dad!"}, {"id": 32, "title": "Rick et Morty", "type": "Série", "year": null, "rating": null, "genre": "Animation", "section": "Animation", "tmdbQuery": "Rick et Morty"}, {"id": 33, "title": "Détective Conan", "type": "Série", "year": null, "rating": null, "genre": "Animation", "section": "Animation", "tmdbQuery": "Détective Conan"}, {"id": 34, "title": "BoJack Horseman", "type": "Série", "year": null, "rating": null, "genre": "Animation", "section": "Animation", "tmdbQuery": "BoJack Horseman"}, {"id": 35, "title": "Elena d'Avalor", "type": "Série", "year": null, "rating": null, "genre": "Animation", "section": "Animation", "tmdbQuery": "Elena d'Avalor"}, {"id": 36, "title": "Le Monde incroyable de Gumball", "type": "Série", "year": null, "rating": null, "genre": "Animation", "section": "Animation", "tmdbQuery": "Le Monde incroyable de Gumball"}, {"id": 37, "title": "Mentalist", "type": "Série", "year": 2008, "rating": 8.4, "genre": "Drame", "section": "Drame", "tmdbQuery": "Mentalist"}, {"id": 38, "title": "Flash", "type": "Série", "year": 2014, "rating": 7.7, "genre": "Drame", "section": "Drame", "tmdbQuery": "Flash"}, {"id": 39, "title": "Vampire Diaries", "type": "Série", "year": 2009, "rating": 8.3, "genre": "Drame", "section": "Drame", "tmdbQuery": "Vampire Diaries"}, {"id": 40, "title": "Les 100", "type": "Série", "year": null, "rating": null, "genre": "Drame", "section": "Drame", "tmdbQuery": "Les 100"}, {"id": 41, "title": "Monk", "type": "Série", "year": null, "rating": null, "genre": "Drame", "section": "Drame", "tmdbQuery": "Monk"}, {"id": 42, "title": "Dr. House", "type": "Série", "year": null, "rating": null, "genre": "Drame", "section": "Drame", "tmdbQuery": "Dr. House"}, {"id": 43, "title": "Orange Is the New Black", "type": "Série", "year": null, "rating": null, "genre": "Drame", "section": "Drame", "tmdbQuery": "Orange Is the New Black"}, {"id": 44, "title": "You", "type": "Série", "year": null, "rating": null, "genre": "Drame", "section": "Drame", "tmdbQuery": "You"}, {"id": 45, "title": "Columbo", "type": "Série", "year": null, "rating": null, "genre": "Drame", "section": "Drame", "tmdbQuery": "Columbo"}, {"id": 46, "title": "Sherlock", "type": "Série", "year": null, "rating": null, "genre": "Drame", "section": "Drame", "tmdbQuery": "Sherlock"}, {"id": 47, "title": "Supernatural", "type": "Série", "year": null, "rating": null, "genre": "Drame", "section": "Drame", "tmdbQuery": "Supernatural"}, {"id": 48, "title": "The Last Kingdom", "type": "Série", "year": null, "rating": null, "genre": "Drame", "section": "Drame", "tmdbQuery": "The Last Kingdom"}, {"id": 49, "title": "Vikings", "type": "Série", "year": null, "rating": null, "genre": "Drame", "section": "Drame", "tmdbQuery": "Vikings"}, {"id": 50, "title": "New York Unité Spéciale", "type": "Série", "year": null, "rating": null, "genre": "Drame", "section": "Drame", "tmdbQuery": "New York Unité Spéciale"}, {"id": 51, "title": "The Last of Us", "type": "Série", "year": null, "rating": null, "genre": "Drame", "section": "Drame", "tmdbQuery": "The Last of Us"}, {"id": 52, "title": "Flynn Carson et les Nouveaux Aventuriers", "type": "Série", "year": 2014, "rating": 7.2, "genre": "Comédie", "section": "Comédie", "tmdbQuery": "Flynn Carson et les Nouveaux Aventuriers"}, {"id": 53, "title": "How I Met Your Mother", "type": "Série", "year": 2005, "rating": 8.1, "genre": "Comédie", "section": "Comédie", "tmdbQuery": "How I Met Your Mother"}, {"id": 54, "title": "The Office", "type": "Série", "year": 2005, "rating": 8.6, "genre": "Comédie", "section": "Comédie", "tmdbQuery": "The Office"}, {"id": 55, "title": "Modern Family", "type": "Série", "year": null, "rating": null, "genre": "Comédie", "section": "Comédie", "tmdbQuery": "Modern Family"}, {"id": 56, "title": "Seinfeld", "type": "Série", "year": null, "rating": null, "genre": "Comédie", "section": "Comédie", "tmdbQuery": "Seinfeld"}, {"id": 57, "title": "The IT Crowd", "type": "Série", "year": null, "rating": null, "genre": "Comédie", "section": "Comédie", "tmdbQuery": "The IT Crowd"}, {"id": 58, "title": "You're the Worst", "type": "Série", "year": null, "rating": null, "genre": "Comédie", "section": "Comédie", "tmdbQuery": "You're the Worst"}, {"id": 59, "title": "La croisière s'amuse", "type": "Série", "year": null, "rating": null, "genre": "Comédie", "section": "Comédie", "tmdbQuery": "La croisière s'amuse"}, {"id": 60, "title": "Friends", "type": "Série", "year": null, "rating": null, "genre": "Comédie", "section": "Comédie", "tmdbQuery": "Friends"}, {"id": 61, "title": "Tulsa King", "type": "Série", "year": 2022, "rating": 8.3, "genre": "Crime", "section": "Crime", "tmdbQuery": "Tulsa King"}, {"id": 62, "title": "The Rookie : Le Flic de Los Angeles", "type": "Série", "year": 2018, "rating": 8.5, "genre": "Crime", "section": "Crime", "tmdbQuery": "The Rookie : Le Flic de Los Angeles"}, {"id": 63, "title": "Medium", "type": "Série", "year": 2005, "rating": 7.5, "genre": "Crime", "section": "Crime", "tmdbQuery": "Medium"}, {"id": 64, "title": "Person of Interest", "type": "Série", "year": null, "rating": null, "genre": "Crime", "section": "Crime", "tmdbQuery": "Person of Interest"}, {"id": 65, "title": "X-Files : Aux frontières du réel", "type": "Série", "year": null, "rating": null, "genre": "Crime", "section": "Crime", "tmdbQuery": "X-Files : Aux frontières du réel"}, {"id": 66, "title": "Esprits criminels", "type": "Série", "year": null, "rating": null, "genre": "Crime", "section": "Crime", "tmdbQuery": "Esprits criminels"}, {"id": 67, "title": "Bares für Rares", "type": "Série", "year": 2013, "rating": 7.5, "genre": "Documentaire", "section": "Documentaire", "tmdbQuery": "Bares für Rares"}, {"id": 68, "title": "Mayday : Dangers dans le ciel", "type": "Série", "year": 2003, "rating": 8.2, "genre": "Documentaire", "section": "Documentaire", "tmdbQuery": "Mayday : Dangers dans le ciel"}, {"id": 69, "title": "Panorama", "type": "Série", "year": 1953, "rating": 6.3, "genre": "Documentaire", "section": "Documentaire", "tmdbQuery": "Panorama"}, {"id": 70, "title": "Nature", "type": "Série", "year": null, "rating": null, "genre": "Documentaire", "section": "Documentaire", "tmdbQuery": "Nature"}, {"id": 71, "title": "Alien Theory", "type": "Série", "year": null, "rating": null, "genre": "Documentaire", "section": "Documentaire", "tmdbQuery": "Alien Theory"}, {"id": 72, "title": "Grands Reportages", "type": "Série", "year": null, "rating": null, "genre": "Documentaire", "section": "Documentaire", "tmdbQuery": "Grands Reportages"}, {"id": 73, "title": "Burgers and Co avec Guy FIERI", "type": "Série", "year": null, "rating": null, "genre": "Documentaire", "section": "Documentaire", "tmdbQuery": "Burgers and Co avec Guy FIERI"}, {"id": 74, "title": "This Old House", "type": "Série", "year": null, "rating": null, "genre": "Documentaire", "section": "Documentaire", "tmdbQuery": "This Old House"}, {"id": 75, "title": "MythBusters", "type": "Série", "year": null, "rating": null, "genre": "Documentaire", "section": "Documentaire", "tmdbQuery": "MythBusters"}, {"id": 76, "title": "Natural World", "type": "Série", "year": null, "rating": null, "genre": "Documentaire", "section": "Documentaire", "tmdbQuery": "Natural World"}, {"id": 77, "title": "Last Chance U", "type": "Série", "year": null, "rating": null, "genre": "Documentaire", "section": "Documentaire", "tmdbQuery": "Last Chance U"}, {"id": 78, "title": "Le mystère d'Oak Island", "type": "Série", "year": null, "rating": null, "genre": "Documentaire", "section": "Documentaire", "tmdbQuery": "Le mystère d'Oak Island"}, {"id": 79, "title": "Strip-Tease", "type": "Série", "year": null, "rating": null, "genre": "Documentaire", "section": "Documentaire", "tmdbQuery": "Strip-Tease"}, {"id": 80, "title": "Tracy Chapman - Austin City Limits Live", "type": "Série", "year": null, "rating": null, "genre": "Documentaire", "section": "Documentaire", "tmdbQuery": "Tracy Chapman - Austin City Limits Live"}, {"id": 81, "title": "Zone interdite", "type": "Série", "year": null, "rating": null, "genre": "Documentaire", "section": "Documentaire", "tmdbQuery": "Zone interdite"}, {"id": 82, "title": "True Detective", "type": "Série", "year": 2014, "rating": 8.3, "genre": "Mystère", "section": "Mystère", "tmdbQuery": "True Detective"}, {"id": 83, "title": "Garth Marenghi's Darkplace", "type": "Série", "year": 2004, "rating": 8.0, "genre": "Mystère", "section": "Mystère", "tmdbQuery": "Garth Marenghi's Darkplace"}, {"id": 84, "title": "Desperate Housewives", "type": "Série", "year": 2004, "rating": 7.9, "genre": "Mystère", "section": "Mystère", "tmdbQuery": "Desperate Housewives"}, {"id": 85, "title": "The Order", "type": "Série", "year": null, "rating": null, "genre": "Mystère", "section": "Mystère", "tmdbQuery": "The Order"}, {"id": 86, "title": "FROM", "type": "Série", "year": null, "rating": null, "genre": "Mystère", "section": "Mystère", "tmdbQuery": "FROM"}, {"id": 87, "title": "Supertrain", "type": "Série", "year": 1979, "rating": 5.6, "genre": "Action & Aventure", "section": "Action & Aventure", "tmdbQuery": "Supertrain"}, {"id": 88, "title": "Supercopter", "type": "Série", "year": 1984, "rating": 7.6, "genre": "Action & Aventure", "section": "Action & Aventure", "tmdbQuery": "Supercopter"}, {"id": 89, "title": "Doctor Who", "type": "Série", "year": 2005, "rating": 7.6, "genre": "Action & Aventure", "section": "Action & Aventure", "tmdbQuery": "Doctor Who"}, {"id": 90, "title": "Come Home Love: Lo and Behold", "type": "Série", "year": 2017, "rating": 5.4, "genre": "Famille", "section": "Famille", "tmdbQuery": "Come Home Love: Lo and Behold"}, {"id": 91, "title": "Les Jeunes Aventuriers", "type": "Série", "year": 2018, "rating": 6.0, "genre": "Famille", "section": "Famille", "tmdbQuery": "Les Jeunes Aventuriers"}, {"id": 92, "title": "Phinéas et Ferb", "type": "Série", "year": 2007, "rating": 7.9, "genre": "Famille", "section": "Famille", "tmdbQuery": "Phinéas et Ferb"}, {"id": 93, "title": "Teen Titans Go!", "type": "Série", "year": null, "rating": null, "genre": "Famille", "section": "Famille", "tmdbQuery": "Teen Titans Go!"}, {"id": 94, "title": "LEGO Ninjago : Les maîtres du Spinjitzu", "type": "Série", "year": null, "rating": null, "genre": "Famille", "section": "Famille", "tmdbQuery": "LEGO Ninjago : Les maîtres du Spinjitzu"}, {"id": 95, "title": "Souvenirs de Gravity Falls", "type": "Série", "year": null, "rating": null, "genre": "Famille", "section": "Famille", "tmdbQuery": "Souvenirs de Gravity Falls"}, {"id": 96, "title": "Running Man", "type": "Série", "year": 2010, "rating": 8.2, "genre": "Téléréalité", "section": "Téléréalité", "tmdbQuery": "Running Man"}, {"id": 97, "title": "Knowing Brothers", "type": "Série", "year": 2015, "rating": 7.4, "genre": "Téléréalité", "section": "Téléréalité", "tmdbQuery": "Knowing Brothers"}, {"id": 98, "title": "WWE NXT", "type": "Série", "year": 2010, "rating": 6.6, "genre": "Téléréalité", "section": "Téléréalité", "tmdbQuery": "WWE NXT"}, {"id": 99, "title": "Heart of the Beast", "type": "Film", "year": 2026, "rating": 7.4, "genre": "Aventure", "section": "Films", "tmdbQuery": "Heart of the Beast"}, {"id": 100, "title": "Dune: Part Two", "type": "Film", "year": 2024, "rating": null, "genre": "Science-fiction", "section": "Films", "tmdbQuery": "Dune: Part Two"}];

const palette = [
  ["#14181f","#8b5cf6"],["#1a1118","#ef4444"],["#071b22","#06b6d4"],
  ["#18130e","#f59e0b"],["#101724","#3b82f6"],["#1d1020","#ec4899"],
  ["#0e1c14","#22c55e"],["#161616","#a3a3a3"],["#10141c","#6366f1"],
  ["#1c1010","#f97316"],["#161122","#8b5cf6"],["#0d1920","#14b8a6"]
];

items.forEach((x,i)=>{
  const [a,b]=palette[i%palette.length];
  x.poster=`linear-gradient(160deg, ${a}, ${b})`;
  x.hero=`radial-gradient(circle at 74% 36%, ${b} 0%, ${a} 40%, #08080c 82%)`;
  x.desc = "Fiche catalogue sans flux vidéo. Les métadonnées détaillées peuvent être reliées à une source autorisée.";
});

const state = {
  query:"",
  type:"Tous",
  genre:"Tous",
  year:"Toutes",
  sort:"source",
  page:1,
  perPage:24,
  favorites:new Set(JSON.parse(localStorage.getItem("nova:favs")||"[]")),
};

function saveFavs(){ localStorage.setItem("nova:favs",JSON.stringify([...state.favorites])); }
function route(){ return location.hash.slice(1)||"/"; }
function go(path){ location.hash=path; }

function header(){
  const r=route();
  return `
  <header class="header">
    <button class="ghost brand" onclick="go('/')">NOVA</button>
    <nav class="nav">
      <button onclick="go('/')" class="${r==='/'?'active':''}">Accueil</button>
      <button onclick="go('/catalogue')" class="${r==='/catalogue'?'active':''}">Catalogue</button>
      <button onclick="setType('Film')">Films</button>
      <button onclick="setType('Série')">Séries</button>
      <button onclick="showFavorites()">Ma liste</button>
    </nav>
    <div class="header-actions">
      <label class="search">⌕
        <input id="searchInput" placeholder="Rechercher..." value="${escapeHtml(state.query)}" oninput="searchNow(this.value)">
      </label>
      <button class="icon-btn" title="Profil">☺</button>
    </div>
  </header>`;
}

function adSlot(label){
  return `<div class="ad-slot">${label} — emplacement publicitaire désactivé</div>`;
}

function metaText(x){
  const bits=[];
  if(x.rating!=null) bits.push(`★ ${x.rating}`);
  if(x.year!=null) bits.push(x.year);
  bits.push(x.type);
  return bits.join(" · ");
}

function card(x){
  const fav=state.favorites.has(x.id);
  return `<article class="card" data-content-id="${x.id}" style="--poster:${x.poster}" onclick="openDetail(${x.id})">
    <div class="card-overlay">
      <div class="card-title">${x.title}</div>
      <div class="card-sub"><span>${metaText(x)}</span></div>
      <div class="card-actions">
        <button title="Voir la fiche" onclick="event.stopPropagation();openDetail(${x.id})">i</button>
        <button title="Ma liste" onclick="event.stopPropagation();toggleFav(${x.id})">${fav?"✓":"＋"}</button>
      </div>
    </div>
  </article>`;
}

function row(title,list){
  if(!list.length) return "";
  return `<section class="row">
    <div class="row-head"><h2>${title}</h2><button class="ghost" onclick="go('/catalogue')">Tout voir →</button></div>
    <div class="cards">${list.map(card).join("")}</div>
  </section>`;
}

function filtered(){
  let list=items.filter(x=>{
    const q=state.query.trim().toLowerCase();
    const okq=!q || [x.title,x.genre,x.type,x.section].join(" ").toLowerCase().includes(q);
    const okt=state.type==="Tous"||x.type===state.type;
    const okg=state.genre==="Tous"||x.genre===state.genre||x.section===state.genre;
    const oky=state.year==="Toutes"||String(x.year)===String(state.year);
    return okq&&okt&&okg&&oky;
  });
  if(state.sort==="rating") list.sort((a,b)=>(b.rating??-1)-(a.rating??-1));
  else if(state.sort==="new") list.sort((a,b)=>(b.year??0)-(a.year??0));
  else if(state.sort==="az") list.sort((a,b)=>a.title.localeCompare(b.title));
  else list.sort((a,b)=>a.id-b.id);
  return list;
}

function home(){
  const hero=items.find(x=>x.title==="Black Doves") || items[0];
  const trends=items.filter(x=>x.section==="Tendances").slice(0,12);
  const recent=items.filter(x=>x.section==="Nouveautés").slice(0,12);
  const animation=items.filter(x=>x.section==="Animation").slice(0,12);
  const drama=items.filter(x=>x.section==="Drame").slice(0,12);
  const films=items.filter(x=>x.type==="Film");

  return `<div class="shell">${header()}
    <main class="main">
      <section class="hero" style="--hero:${hero.hero}">
        <div class="hero-copy">
          <div class="kicker">Catalogue réel · sans flux</div>
          <h1>${hero.title}</h1>
          <div class="meta">
            ${hero.rating!=null?`<span class="badge">★ ${hero.rating}</span>`:""}
            ${hero.year!=null?`<span>${hero.year}</span>`:""}
            <span>${hero.type}</span>
          </div>
          <p>Cette version reprend les titres visibles dans le catalogue Movix, sans intégrer de lecteur ni de source vidéo.</p>
          <div class="actions">
            <button class="primary" onclick="openDetail(${hero.id})">Voir la fiche</button>
            <button class="secondary" onclick="go('/catalogue')">Explorer le catalogue</button>
          </div>
        </div>
      </section>

      <div class="content">
        ${adSlot("Banner")}
        ${row("Tendances",trends)}
        ${row("Nouveautés",recent)}
        ${row("Animation",animation)}
        ${row("Drame",drama)}
        ${row("Films vérifiés",films)}
        ${adSlot("Native / Sponsor")}
      </div>
    </main>
    <footer class="footer">NOVA — catalogue de référence sans aucun flux vidéo.</footer>
  </div>`;
}

function cataloguePage(){
  const genres=["Tous",...new Set(items.flatMap(x=>[x.genre,x.section]))].filter(Boolean).sort();
  const years=["Toutes",...new Set(items.map(x=>x.year).filter(Boolean))].sort((a,b)=>b-a);
  const list=filtered();
  const maxPage=Math.max(1,Math.ceil(list.length/state.perPage));
  if(state.page>maxPage) state.page=maxPage;
  const start=(state.page-1)*state.perPage;
  const shown=list.slice(start,start+state.perPage);

  return `<div class="shell">${header()}
    <main class="catalogue-page">
      <div class="catalogue-head">
        <div>
          <div class="kicker">Contenus repris de la sélection visible</div>
          <h1>Catalogue</h1>
          <p>${list.length} fiches · aucune source vidéo intégrée.</p>
        </div>
      </div>

      <div class="catalogue-tools">
        <select onchange="setType(this.value)">
          <option value="Tous" ${state.type==="Tous"?"selected":""}>Films + séries</option>
          <option value="Film" ${state.type==="Film"?"selected":""}>Films</option>
          <option value="Série" ${state.type==="Série"?"selected":""}>Séries</option>
        </select>
        <select onchange="setGenre(this.value)">
          ${genres.map(g=>`<option value="${g}" ${state.genre===g?"selected":""}>${g}</option>`).join("")}
        </select>
        <select onchange="setYear(this.value)">
          ${years.map(y=>`<option value="${y}" ${String(state.year)===String(y)?"selected":""}>${y}</option>`).join("")}
        </select>
        <select onchange="setSort(this.value)">
          <option value="source" ${state.sort==="source"?"selected":""}>Ordre source</option>
          <option value="rating" ${state.sort==="rating"?"selected":""}>Note</option>
          <option value="new" ${state.sort==="new"?"selected":""}>Plus récents</option>
          <option value="az" ${state.sort==="az"?"selected":""}>A → Z</option>
        </select>
      </div>

      ${adSlot("Banner catalogue")}

      <div class="catalogue-grid">
        ${shown.map(card).join("") || `<div class="empty">Aucun résultat.</div>`}
      </div>

      <div class="pagination">
        <button class="secondary" onclick="changePage(-1)" ${state.page<=1?"disabled":""}>← Précédent</button>
        <span>Page ${state.page} / ${maxPage}</span>
        <button class="secondary" onclick="changePage(1)" ${state.page>=maxPage?"disabled":""}>Suivant →</button>
      </div>
    </main>
  </div>`;
}

function detail(id){
  const x=items.find(y=>y.id===id)||items[0];
  return `<div class="shell">${header()}
    <main>
      <section class="detail-hero" id="detailHero" style="--hero:${x.hero}">
        <div class="detail-wrap">
          <div class="poster" id="detailPoster" style="--poster:${x.poster}"></div>
          <div class="detail">
            <div class="kicker">${x.type} · ${x.section}</div>
            <h1>${x.title}</h1>
            <div class="meta">
              ${x.rating!=null?`<span class="badge">★ ${x.rating}</span>`:""}
              ${x.year!=null?`<span>${x.year}</span>`:""}
              <span>${x.genre}</span>
            </div>
            <p id="detailOverview">${x.desc}</p>
            <div class="actions">
              <button class="primary" onclick="toggleFav(${x.id})">${state.favorites.has(x.id)?"✓ Dans ma liste":"＋ Ma liste"}</button>
              <button class="secondary" onclick="go('/catalogue')">Retour au catalogue</button>
            </div>
          </div>
        </div>
      </section>

      <div class="detail-body">
        ${adSlot("Banner fiche")}
        <div class="panel">
          <h3 style="margin-top:0">Métadonnées</h3>
          <p><strong>Titre :</strong> ${x.title}</p>
          <p><strong>Type :</strong> ${x.type}</p>
          <p><strong>Section source :</strong> ${x.section}</p>
          <p><strong>Genre :</strong> ${x.genre}</p>
          <p><strong>Année :</strong> ${x.year ?? "À enrichir"}</p>
          <p><strong>Note :</strong> ${x.rating ?? "À enrichir"}</p>
          <p style="color:#aaa">Aucun flux vidéo, embed, iframe ou lecteur externe n'est inclus dans cette version.</p>
        </div>

        ${row("Contenus similaires",items.filter(i=>i.id!==x.id && (i.genre===x.genre || i.section===x.section)).slice(0,8))}
      </div>
    </main>
  </div>`;
}

function render(){
  const r=route();
  const d=r.match(/^\/title\/(\d+)$/);
  let out;
  if(d) out=detail(Number(d[1]));
  else if(r==="/catalogue") out=cataloguePage();
  else out=home();
  document.getElementById("app").innerHTML=out;
  scheduleTmdbHydration();
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
}
function openDetail(id){ go(`/title/${id}`); }
function toggleFav(id){
  state.favorites.has(id)?state.favorites.delete(id):state.favorites.add(id);
  saveFavs(); render();
}
function searchNow(v){
  state.query=v; state.page=1;
  if(route()!=="/catalogue") go("/catalogue"); else render();
}
function setType(t){
  state.type=t; state.page=1;
  if(route()!=="/catalogue") go("/catalogue"); else render();
}
function setGenre(g){ state.genre=g; state.page=1; render(); }
function setYear(y){ state.year=y; state.page=1; render(); }
function setSort(s){ state.sort=s; state.page=1; render(); }
function changePage(delta){
  state.page=Math.max(1,state.page+delta); render();
  window.scrollTo({top:0,behavior:"smooth"});
}
function showFavorites(){
  state.query=""; state.type="Tous"; state.genre="Tous"; state.year="Toutes";
  go("/catalogue");
  setTimeout(()=>{
    const favIds=[...state.favorites];
    const grid=document.querySelector(".catalogue-grid");
    if(grid) grid.innerHTML=items.filter(x=>favIds.includes(x.id)).map(card).join("") || '<div class="empty">Ta liste est vide.</div>';
  },0);
}


const TMDB_CACHE_PREFIX = "nova:tmdb:";
const TMDB_CACHE_MS = 7 * 24 * 60 * 60 * 1000;

function tmdbCacheGet(id){
  try{
    const raw = localStorage.getItem(TMDB_CACHE_PREFIX + id);
    if(!raw) return null;
    const box = JSON.parse(raw);
    if(!box || Date.now() - box.savedAt > TMDB_CACHE_MS) return null;
    return box.data || null;
  }catch(_){ return null; }
}

function tmdbCacheSet(id,data){
  try{
    localStorage.setItem(TMDB_CACHE_PREFIX + id, JSON.stringify({savedAt:Date.now(),data}));
  }catch(_){}
}

async function fetchTmdbMeta(item){
  const cached = tmdbCacheGet(item.id);
  if(cached) return cached;

  const params = new URLSearchParams({
    title: item.title,
    type: item.type === "Film" ? "movie" : "tv"
  });
  if(item.year) params.set("year", item.year);

  const res = await fetch("/api/tmdb?" + params.toString(), {
    headers: {"accept":"application/json"}
  });
  if(!res.ok) throw new Error("TMDB proxy " + res.status);

  const data = await res.json();
  tmdbCacheSet(item.id, data);
  return data;
}

function hydrateCardElement(el){
  if(el.dataset.hydrated === "1" || el.dataset.loading === "1") return;
  const id = Number(el.dataset.contentId);
  const item = items.find(x => x.id === id);
  if(!item) return;

  el.dataset.loading = "1";
  fetchTmdbMeta(item).then(meta=>{
    if(meta && meta.poster){
      el.style.backgroundImage = `url("${meta.poster}")`;
      el.style.backgroundSize = "cover";
      el.style.backgroundPosition = "center";
    }
    const sub = el.querySelector(".card-sub");
    if(sub && meta){
      const bits = [];
      if(meta.rating != null) bits.push("★ " + Number(meta.rating).toFixed(1));
      if(meta.year) bits.push(meta.year);
      bits.push(item.type);
      sub.textContent = bits.join(" · ");
    }
    el.dataset.hydrated = "1";
  }).catch(()=>{}).finally(()=>{
    el.dataset.loading = "0";
  });
}

function hydrateDetailPage(){
  const r = route();
  const m = r.match(/^\/title\/(\d+)$/);
  if(!m) return;

  const item = items.find(x => x.id === Number(m[1]));
  if(!item) return;

  fetchTmdbMeta(item).then(meta=>{
    if(!meta) return;

    const hero = document.getElementById("detailHero");
    const poster = document.getElementById("detailPoster");
    const overview = document.getElementById("detailOverview");

    if(hero && meta.backdrop){
      hero.style.backgroundImage =
        `linear-gradient(90deg,rgba(8,8,12,.96),rgba(8,8,12,.54) 52%,rgba(8,8,12,.12)),` +
        `linear-gradient(0deg,var(--bg),rgba(10,10,13,.08) 40%),url("${meta.backdrop}")`;
    }
    if(poster && meta.poster){
      poster.style.backgroundImage = `url("${meta.poster}")`;
      poster.style.backgroundSize = "cover";
      poster.style.backgroundPosition = "center";
    }
    if(overview && meta.overview){
      overview.textContent = meta.overview;
    }

    const panel = document.querySelector(".detail-body .panel");
    if(panel){
      const cast = (meta.cast || []).slice(0,8).map(x=>x.name).join(", ");
      const genres = (meta.genres || []).join(", ");
      panel.innerHTML = `
        <h3 style="margin-top:0">Métadonnées TMDB</h3>
        <p><strong>Titre :</strong> ${escapeHtml(meta.title || item.title)}</p>
        <p><strong>Type :</strong> ${escapeHtml(item.type)}</p>
        <p><strong>Genres :</strong> ${escapeHtml(genres || item.genre || "—")}</p>
        <p><strong>Année :</strong> ${escapeHtml(String(meta.year || item.year || "—"))}</p>
        <p><strong>Note :</strong> ${meta.rating != null ? Number(meta.rating).toFixed(1) : "—"}</p>
        ${meta.runtime ? `<p><strong>Durée :</strong> ${escapeHtml(meta.runtime)}</p>` : ""}
        ${cast ? `<p><strong>Casting :</strong> ${escapeHtml(cast)}</p>` : ""}
        <p style="color:#aaa">Aucun flux vidéo, embed, iframe ou lecteur externe n'est intégré.</p>
      `;
    }
  }).catch(()=>{});
}

function scheduleTmdbHydration(){
  hydrateDetailPage();

  const cards = [...document.querySelectorAll(".card[data-content-id]")];
  if(!cards.length) return;

  if("IntersectionObserver" in window){
    const obs = new IntersectionObserver(entries=>{
      for(const entry of entries){
        if(entry.isIntersecting){
          hydrateCardElement(entry.target);
          obs.unobserve(entry.target);
        }
      }
    }, {rootMargin:"250px"});
    cards.forEach(el=>obs.observe(el));
  } else {
    cards.slice(0,18).forEach(hydrateCardElement);
  }
}

window.addEventListener("hashchange",render);
render();
