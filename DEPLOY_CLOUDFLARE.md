# Déploiement Cloudflare Pages — configuration corrigée

Structure attendue :

NOVA_cloudflare_pages_fixed/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── functions/
│   └── api/
│       └── tmdb.js
├── .gitignore
├── .dev.vars.example
└── README.md

## Git integration Cloudflare Pages

Configuration :
- Framework preset : None
- Build command : `exit 0`
- Build output directory : `public`
- Root directory : `/`
- Ne mets PAS `npx wrangler deploy` comme commande de déploiement.

Cloudflare Pages publiera `public/` et détectera automatiquement `functions/`.

## Si l'interface demande explicitement une Deploy command

Utilise :
`npx wrangler pages deploy public --project-name NOM_DE_TON_PROJET`

## Secret TMDB

Dans Cloudflare :
Settings -> Variables and Secrets

Créer :
TMDB_API_KEY = ta nouvelle clé

Puis redéployer.

## Test

`https://ton-site.pages.dev/api/tmdb?title=The%20Office&type=tv&year=2005`

Tu dois recevoir du JSON.
