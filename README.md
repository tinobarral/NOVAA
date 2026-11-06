# NOVA — catalogue basé sur les titres visibles de Movix

Cette version contient 100 fiches de catalogue.

## Ce qui a été repris
- titres de séries visibles/indexés sur la page Séries de Movix au moment de la génération ;
- regroupements de sections/genres visibles ;
- année et note uniquement lorsqu'elles étaient explicitement visibles dans la source ;
- deux films indépendamment vérifiés comme présents : Heart of the Beast et Dune: Part Two.

## Ce qui n'est PAS repris
- aucun flux vidéo ;
- aucun lecteur externe ;
- aucun iframe ;
- aucun endpoint de streaming ;
- aucun code privé de Movix ;
- aucun synopsis long copié depuis Movix ;
- aucune affiche ou image protégée recopiée.

## Enrichissement des métadonnées
Movix indique lui-même que ses informations, saisons et dates viennent de TMDB.
Pour enrichir automatiquement posters, backdrops, synopsis, casting, saisons et épisodes,
connecte le projet à une source autorisée.

Attention : TMDB indique que son API développeur gratuite est destinée aux usages non commerciaux.
Pour un site monétisé, vérifie leurs conditions/licence commerciale avant intégration.

## Publicité
Les emplacements restent prévus dans le code et désactivés par défaut.


## Intégration TMDB sécurisée

La clé TMDB n'est PAS intégrée dans `app.js`.

Le frontend appelle `/api/tmdb`, une Cloudflare Pages Function qui lit la variable serveur :

`TMDB_API_KEY`

### Cloudflare Pages
Dans le projet Cloudflare :
1. Settings / Variables and Secrets
2. Ajouter un secret nommé `TMDB_API_KEY`
3. Coller une clé TMDB active
4. Redéployer le projet

Pour le développement local avec Wrangler :
1. Copier `.dev.vars.example` vers `.dev.vars`
2. Mettre la clé dans `.dev.vars`
3. Ne jamais commit `.dev.vars`

### Données récupérées
- titre
- synopsis FR
- année
- note
- genres
- durée / nombre de saisons
- poster
- backdrop
- casting

Aucune route vidéo TMDB n'est appelée et aucun flux de streaming n'est intégré.

### Attribution TMDB
TMDB exige l'attribution de son API et l'utilisation de son logo approuvé dans une section de crédits.
Le texte requis par TMDB doit aussi être affiché dans l'application :
"This product uses the TMDB API but is not endorsed or certified by TMDB."

### Usage commercial
TMDB indique que son API développeur gratuite est destinée aux usages non commerciaux.
Un projet dont l'objectif principal est de générer des revenus est considéré comme commercial par TMDB.
Avant de monétiser le site, il faut donc obtenir/valider la licence commerciale appropriée auprès de TMDB.
