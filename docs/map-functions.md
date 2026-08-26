# Module Cloud Functions

Node 20, Cloud Functions Gen 2, région `europe-west9`.
Toutes les fonctions sont exportées explicitement depuis `index.js` :
un fichier oublié fait échouer le déploiement entier.

*Note : les sections ci-dessous hors "Scores en direct et résultats" (ajoutée
en cours de session) décrivent l'état du module avant l'ajout du mercato, de
l'effectif, de la compo et des scores/résultats — pas entièrement
resynchronisées avec ces ajouts.*

## Collecte des diffusions TV

**collecteQuotidienne** — cron à 7 h. Interroge deux sources pour chaque club retenu
par au moins un utilisateur, fusionne les résultats, écrit dans `tvBroadcasts`.

**rafraichirDiffusions** — appelable depuis l'app pour forcer une collecte immédiate.
Vérifie que l'appelant est membre du tenant.

**corrigerChaine** — enregistre une chaîne saisie à la main. Marque le document
`corrigeeManuellement`, ce qui le protège des collectes suivantes.

### Fonctionnement interne

`clubsASurveiller` lit le catalogue et les préférences de tous les utilisateurs
pour ne scraper que les clubs réellement suivis.

`collecterPourClub` interroge les deux sources avec une pause entre chaque appel,
et remonte les incidents sans interrompre le traitement.

`collecterDiffusions` orchestre l'ensemble, dédoublonne les matchs remontés par
plusieurs clubs, respecte les corrections manuelles, et écrit par lots.

`journaliser` alimente `scrapeLogs` pour repérer une source en panne avant
de s'en apercevoir un soir de match.

### Sources

**matchsTv** — parcourt le tableau de la page club. Les lignes d'en-tête fixent
le jour courant, les lignes suivantes portent horaire, affiche, compétition et chaînes.

**footmercato** — parcourt les titres de jour puis les liens de match. Extrait les
équipes depuis les attributs `alt` des logos, avec repli sur l'URL du lien.

### Fusion

`fusionner` rapproche les rencontres des deux sources par affiche et horaire
(tolérance de 90 minutes). Une chaîne vue par les deux sources est marquée confirmée,
une chaîne vue par une seule est marquée à vérifier, l'absence de chaîne donne
le statut manquant. Ces trois statuts correspondent aux trois traitements visuels
de la carte de match.

## Scores en direct et résultats

**collecteScoresDirect** — cron chaque minute, quasi gratuit hors fenêtre de match
(une seule lecture Firestore sur `tvBroadcasts`, aucun appel API tant qu'aucun club
suivi ne joue). Dans une fenêtre de match, interroge API-Football (un seul appel,
toutes compétitions, filtré ensuite aux clubs suivis via `memeEquipe`) et écrit
`live/scores`. Remplace l'ancien scraping `maxifoot-live.com` (coût/fragilité d'un
fetch HTML chaque minute 24h/24, voir decisions.md).

**rafraichirScoresDirect** — bouton manuel, passe par le même point de contrôle
de quota que le cron (`reserverUnAppel`).

**collecteResultatsSoir** (23h50) / **collecteResultatsMatin** (7h05, veille) —
complètent `tvBroadcasts` avec le score final (`termine`, `scoreDomicile`,
`scoreExterieur`) une fois un match fini, pour TOUS les matchs du jour et pas
seulement les clubs suivis (contrairement au live) : l'onglet Matchs affiche tous
les matchs sans filtre par club depuis cette session, "Hier" doit donc pouvoir
montrer un score quel que soit le club. Un appel API-Football par passage,
rapproché des documents `tvBroadcasts` par équipes (`memeEquipe`) sur une fenêtre
Firestore large (±quelques heures autour du jour visé, pour absorber un éventuel
décalage de fuseau côté runtime serveur — le filtrage précis vient ensuite du
rapprochement d'équipe, pas des bornes de la requête).

`reserverUnAppel` (collecteScoresDirect.js, exportée) — point de contrôle
centralisé UNIQUE du quota API-Football : live, résultats finaux et
rafraîchissement manuel y passent tous, sans logique de quota dupliquée
ailleurs. Bascule vers la clé suivante (`API_FOOTBALL_KEYS`) une fois la
précédente épuisée (90/jour de marge par clé), compteur remis à zéro chaque
jour dans `config/quotaApiFootball`.

**sources/apiFootballLive.js** — `recupererMatchsClubsDuJour` (filtré aux clubs
donnés, utilisé par le live) et `recupererTousLesMatchsDuJour` (non filtré,
utilisé par les résultats finaux) — un seul appel HTTP sous-jacent
(`GET /fixtures?date=...&timezone=Europe/Paris`) dans les deux cas.

## Actualités

Le flux RSS d'origine (CulturePSG, Foot Mercato, L'Équipe, RMC Sport,
`ingestionActus`/`rafraichirActus`/`fetchNews.js`) a été retiré : source
unique désormais, `news.maxifoot.fr` (voir `sources/maxifootNews.js`),
choisie pour sa fiabilité. Le Mercato structuré de l'onglet dédié reste
alimenté séparément par `collecteMaxifootPsg.js`/`sources/maxifootPsg.js`,
non concerné.

**collecteMaxifootNews** — cron toutes les dix minutes (délai de détection
court exigé côté produit : les brèves post-match tombent en rafale jusqu'à
minuit). Interroge les deux listes de `news.maxifoot.fr` ("INFOS 24h/24" et
"TRANSFERTS", même structure de page, seule l'URL diffère), filtre au PSG
côté code (le filtre du site est purement JS côté client), dédoublonne par
id. Pour chaque article réellement nouveau (jamais vu dans `news`) seulement,
second fetch sur la page de l'article pour la date exacte / le résumé /
l'image / le corps complet via son bloc JSON-LD — jamais pour tout le flux,
le volume PSG-filtré-et-nouveau restant naturellement faible à chaque
passage malgré la cadence élevée.

**rafraichirMaxifootNews** — même traitement (`collecter()`), déclenché
manuellement depuis l'app (bouton "rafraîchir" côté Actus). Vérifie que
l'appelant est membre du tenant.

`classer` (lib/classer.js) applique les règles stockées dans
`config/actualites` pour déterminer catégorie/importance — le rattachement
au club, lui, est déjà garanti en amont par le filtre PSG de
`listerNewsPsg()`, pas par `classer`. Aucune liste de mots-clés n'est codée
en dur dans le JavaScript.

## Classements

**collecteClassements** — cron à 7 h 30 et 23 h 30. Interroge Football-Data.org
pour les seules compétitions concernant les clubs suivis, plus la Ligue des Champions.
Sept secondes de pause entre chaque appel pour respecter le palier gratuit.

**rafraichirClassements** — déclenchement manuel.

`lireClassement` normalise les deux formats de réponse de l'API : tableau unique
pour un championnat, groupes séparés pour une coupe d'Europe.

## Notifications

**notifMatin** — cron à 9 h. Envoie un message unique groupant tous les matchs
du jour concernant l'utilisateur, plutôt qu'une notification par rencontre.

**notifRappels** — cron toutes les dix minutes. Compare l'heure courante aux matchs
en cache et envoie deux rappels : une heure avant et au coup d'envoi. Ne fait
aucun appel réseau externe, seulement une lecture Firestore ciblée.

**notifActu** — déclenchée à la création d'un article. Filtre selon les clubs
et les réglages de chaque utilisateur. Ignore les articles de plus de six heures.

**enregistrerAppareil** / **retirerAppareil** — gestion des jetons FCM.
L'identifiant du document dérive du jeton pour éviter les doublons.

**purgeEnvois** — cron du lundi. Nettoie le journal des notifications envoyées.

### Garde-fou anti-doublon

`envoyerUneFois` utilise une transaction Firestore : un rappel donné ne peut
jamais partir deux fois pour un même utilisateur, même si un cron rejoue
après une erreur. Les jetons devenus invalides sont supprimés automatiquement
à l'occasion de chaque envoi.

## Cartes FUT (packs)

**sources/futbinCartesPsg.js** — `extraireCartes` parse le balisage FUTBIN
(`.playercard-26-*`) : note, stats, couleurs, positions alternatives,
images fond/joueur/nation/ligue/club. Visuel joueur : sélecteur
`img.playercard-26-special-img, img.playercard-26-base-img` — les DEUX
seules classes réellement utilisées par FUTBIN pour le visuel joueur
(`-img` seul n'existe pas), confirmé sur l'export de session (185 cartes =
109 special-img + 76 base-img). Le sélecteur ne couvrait que
`-special-img` jusqu'à cette session : toute carte "normale" (non
spéciale/promo) restait donc sans photo joueur en jeu malgré un fond
correct. `calculerRarete` combine note + variante (une carte spéciale/promo
remonte d'un palier, plafonné à légendaire). Cartes féminines exclues
(`LIGUES_FEMININES`, avant le push pour ne jamais bloquer un id).
`scraperCartesFutPsg` = scraping serveur direct (best-effort, FUTBIN étant
une appli dynamique) ; en attendant sa confirmation en production, import
manuel via `scripts/tampermonkey-futbin-psg.user.js` (télécharge le HTML
déjà rendu, avec scroll auto pour charger tout le catalogue) puis
`scripts/importer-cartes-fut.mjs` (utilise `extraireCartes` — même chemin
d'extraction que le scraping automatique).

**collecteCartesFut.js** — écrit le catalogue (`actif:true`) depuis le
scraping serveur direct.

**packsFut.js** — `ouvrirPackFut` : tirage payant/gratuit (5 cartes par
défaut, `config/packsFut.cartesParPaquet`), transactionnel, paquet gratuit
du jour consommé en priorité sur les étoiles. `ouvrirPackFutDebug` : tirage
de test illimité, uniquement dans le catalogue `test:true` (jamais le vrai
catalogue), écrit dans `collectionFutTest(uid)` — sous-collection séparée
de `collectionFut(uid)`, vidée automatiquement pour tous les utilisateurs
par `nettoyageDebugFut.js` quand `config/debug.actif` repasse à false.
Gated sur ce même interrupteur que `donneesTest.js`. `genererCodeAmi` /
`ajouterAmiParCode` (écriture mutuelle) / `envoyerCarteFut` (transaction,
jamais le dernier exemplaire). `gagnerMonnaieFutQuotidien` crédite le bonus
d'activité quotidien, idempotent par jour calendaire Paris.

**scripts/seed-cartes-test.mjs** — amorce 4 cartes factices (une par
palier de rareté, `test:true`/`actif:false`). Leurs champs visuels
(`imageFond`/`imageJoueur`/`nation`/`ligue`/`club`) sont empruntés à une
vraie carte du catalogue (`actif:true`) de la même rareté au moment de
l'amorçage — repli sur n'importe quelle vraie carte si aucune de la
rareté exacte n'est encore scrapée — plutôt qu'une valeur en dur, pour que
les cartes de test aient toujours un visuel dès qu'au moins une vraie carte
est importée. Corrige "toujours pas de visuel sur les cartes de test"
(CarteFut.jsx ne rend le fond/joueur que si ces champs sont non-nuls).

## Bibliothèques partagées

**admin.js** — initialisation Firebase Admin et table centralisée des chemins
(inclut désormais `quotaApiFootball` et `fenetresMercato`, voir map-donnees.md).

**http.js** — récupération HTML avec délai maximal et une nouvelle tentative.

**normalize.js** — clés de comparaison d'équipes, normalisation des noms de chaînes,
lecture des dates françaises, conversion en ISO avec gestion de l'heure d'été.

**apiFoot.js** — client Football-Data.org avec messages d'erreur explicites
pour les cas quota atteint et compétition hors palier.

**push.js** — envoi FCM multicast, nettoyage des jetons morts, garde-fou anti-doublon.

## Scripts d'amorçage (scripts/*.mjs, hors Cloud Functions)

Lancés localement (`node scripts/<fichier>.mjs`), credential via
`applicationDefault()` (voir cle-service.json / `GOOGLE_APPLICATION_CREDENTIALS`).

**maj-fenetres-mercato.mjs** — pose/actualise `config/fenetresMercato`. À
relancer à chaque annonce LFP d'une nouvelle saison (éditer la liste FENETRES
en tête de fichier, puis relancer) — aucun redeploy du front nécessaire, voir
MercatoTimer côté front.
