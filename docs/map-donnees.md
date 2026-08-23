# Module données

Firestore, région européenne. Tout est sous `tenants/{tenantId}` :
un seul tenant aujourd'hui, mais l'architecture supporte l'ouverture
à d'autres duos sans refonte.

## Arborescence

```
tenants/{tenantId}/
  admins/{uid}                    fondateur du tenant
  users/{uid}                     fiche utilisateur
    prefs/principal               préférences, privées
    pushTokens/{id}               jetons FCM
    sentNotifications/{id}        journal anti-doublon, serveur uniquement
  config/clubs                    catalogue des clubs
  config/nations                  catalogue des sélections
  config/chaines                  chaînes déclarables en abonnement
  config/competitions             compétitions suivies pour les classements
  config/fluxActus                flux RSS
  config/actualites               règles de classement des articles
  config/quotaApiFootball         compteur quota API-Football (par clé, par jour)
  config/fenetresMercato          calendrier des fenêtres de mercato (voir map-front.md, MercatoTimer)
  tvBroadcasts/{matchId}          diffusions, partagées (+ score final une fois le match terminé)
  standings/{competitionId}       classements, partagés
  news/{articleId}                actualités, partagées
  mercato/{clubId}                mouvements mercato du club (officiels/en discussion/rumeurs)
  effectifs/{clubId}              effectif complet du club (joueurs, entraîneur)
  compoProbable/{clubId}          composition probable avant match
  compoOfficielle/{clubId}        composition officielle une fois publiée
  live/scores                     scores en direct des clubs suivis (voir functions/collecteScoresDirect.js)
  scrapeLogs/{sourceId}           santé des collectes
```

*Note : arborescence complétée avec les collections ajoutées en cours de
session (mercato/effectifs/compo/live/config additionnels) — les sections
narratives ci-dessous (hors celles touchées aujourd'hui) datent d'avant ces
ajouts et n'ont pas été entièrement resynchronisées.*

## Principe de séparation

Ce qui est **objectif** (calendrier, chaînes, classements, actualités) est stocké
une seule fois au niveau du tenant. Pas de duplication par utilisateur : le scraping
et les appels API se font une fois pour les deux.

Ce qui est **personnel** (préférences, jetons, journal d'envois) vit sous `users/{uid}`.
Le filtrage et la recommandation se font côté client à partir de ces préférences.

## Documents principaux

**prefs/principal** — club favori, sélection, clubs suivis (`MAX_CLUBS_SUIVIS`,
actuellement 2, hors favori — voir usePreferences.jsx), joueur chouchou
(`joueurChouchouId`), réglages de notification, abonnements TV, indicateur de
fin d'onboarding. Les clubs sont stockés en objet complet, pas en simple
identifiant, pour éviter une jointure à chaque affichage.

**tvBroadcasts/{matchId}** — identifiant déterministe construit à partir de la date
et des deux équipes normalisées, ce qui rend l'écriture idempotente entre deux collectes.
Contient les équipes, la date, la compétition, la liste des chaînes avec leur statut
et leurs sources, les clubs concernés, et le drapeau de correction manuelle. Complété
après coup par `termine`/`scoreDomicile`/`scoreExterieur` une fois le match fini (voir
functions/collecteResultatsMatchs.js — tous les matchs du jour, pas seulement les
clubs suivis).

**news/{articleId}** — identifiant dérivé du lien nettoyé de ses paramètres de suivi.
Contient titre, résumé, corps intégral (source Maxifoot), lien, source, date,
catégorie, indicateur d'importance, et les clubs rattachés.

**standings/{competitionId}** — format (championnat ou groupes), liste de groupes
contenant chacun ses lignes de classement, saison et journée courante.

**live/scores** — un seul document, remplacé à chaque collecte (pas d'historique) :
liste des matchs en cours ou récemment terminés des clubs suivis, avec score,
minute, statut. Voir functions/collecteScoresDirect.js.

**config/quotaApiFootball** — compteur de requêtes API-Football consommées par clé
et par jour, remis à zéro automatiquement au changement de jour. Point de contrôle
centralisé unique (`reserverUnAppel`, functions/collecteScoresDirect.js) : tout usage
de l'API (live, résultats finaux, rafraîchissement manuel) passe par ici.

**config/fenetresMercato** — `{ fenetres: [{type, saison, libelle, debut, fin}, ...] }`,
dates au format Timestamp Firestore. Alimenté par scripts/maj-fenetres-mercato.mjs,
lu en direct par MercatoTimer (voir map-front.md).

**scrapeLogs/{sourceId}** — dernière tentative, dernier succès, nombre d'éléments
récupérés, indicateur d'échec. Permet de repérer une source silencieusement cassée.

## Règles de sécurité

Trois fonctions d'aide : `membreDuTenant`, `estAdmin`, `cestMoi`.

- **config, tvBroadcasts, news, standings, scrapeLogs, mercato, effectifs,
  compoProbable, compoOfficielle, live** — lecture pour les membres,
  écriture interdite côté client. Seules les Cloud Functions écrivent, via le SDK Admin
  qui contourne les règles.
- **users/{uid}** — lecture et modification par son propriétaire ou un admin.
  Création réservée à soi-même.
- **prefs** — strictement privées à leur propriétaire.
- **pushTokens** — lisibles par leur propriétaire, écrits uniquement par le serveur.
- **sentNotifications** — totalement fermé côté client.
- **admins/{uid}** — création de sa propre entrée autorisée, modification et
  suppression interdites.

Tout le reste de la base est refusé par la règle finale.

### Limite connue

La règle `admins` autorise n'importe quel utilisateur authentifié à créer sa propre
entrée admin. À deux, c'est sans conséquence. Si l'app s'ouvre, il faudra déplacer
cette création dans une Cloud Function qui vérifie que le tenant n'a pas déjà
de fondateur.

### Rappel sur les suppressions

Dans une règle `delete`, `request.resource.data` est toujours nul.
Utiliser `resource.data` pour tester l'état du document avant suppression.

## Configuration en base plutôt qu'en dur

Tout ce qui varie selon le contexte vit dans `config/` : catalogues, mots-clés
de classement, flux RSS, compétitions, chaînes, quota API-Football, fenêtres de
mercato. Aucune de ces listes n'est écrite en dur dans le JavaScript, ni côté
front ni côté fonctions. Les scripts d'amorçage (`scripts/*.mjs`) servent
uniquement à poser/mettre à jour les valeurs.
