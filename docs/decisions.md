# Décisions d'architecture

Ce qui a été tranché pendant la conception, et pourquoi.

## Pas d'API foot pour le calendrier

Les deux sites scrapés fournissent déjà équipes, date, compétition et chaîne.
Brancher Football-Data.org pour le calendrier aurait ajouté une dépendance,
un quota à gérer et un rapprochement de plus, sans rien apporter.
L'API ne sert que pour les classements, que le scraping ne donne pas.

## Deux sources de scraping plutôt qu'une

Une seule source suffirait à afficher une chaîne, mais rien ne permettrait de savoir
si elle est fiable. Avec deux sources, un accord vaut confirmation et un désaccord
vaut avertissement. C'est ce qui rend les trois états visuels de la carte de match
possibles et honnêtes.

## Transparence plutôt que vote majoritaire

Avec deux sources, un vote n'a pas de sens. Plutôt que d'arbitrer à l'aveugle,
l'app affiche ce qu'elle sait et le niveau de confiance associé. Pour deux utilisateurs,
une erreur occasionnelle signalée vaut mieux qu'une certitude fabriquée.
La correction manuelle complète le dispositif.

## Correction manuelle prioritaire

Une chaîne saisie à la main marque le document et survit aux collectes suivantes.
Les valeurs détectées continuent d'être enregistrées à côté, pour comparaison.
Sans ce mécanisme, le cron du lendemain écraserait la correction.

## Rien ne tourne en continu

Aucun serveur permanent. Des fonctions planifiées qui se réveillent, travaillent
quelques secondes et se rendorment. Le cron des rappels tourne toutes les dix minutes
mais ne fait qu'une lecture Firestore ciblée, sans appel réseau externe.

## L'app ne lit jamais une source externe

Tout passe par le cache Firestore. Cela protège les quotas, rend l'app utilisable
hors ligne grâce au cache local persistant, et fait qu'une source cassée n'empêche
jamais l'app de s'ouvrir.

## Flux personnels, données partagées

Chacun a son club favori, sa sélection et ses cinq clubs suivis. Mais le scraping,
les classements et l'actualité sont collectés une seule fois pour les deux.
Le filtrage se fait côté client à partir des préférences.

## Deux comptes séparés plutôt que des profils

Un vrai compte par personne, avec sa propre authentification. Plus propre que
des profils partagés, et indispensable pour que les notifications partent
au bon appareil.

## Structure multi-tenant maintenue

Un seul tenant aujourd'hui, mais l'arborescence `tenants/{tenantId}` est en place.
Le coût est nul et cela évite une migration si l'app s'ouvre un jour à d'autres duos.

## Résumé du matin groupé

Un message listant tous les matchs du jour plutôt qu'une notification par rencontre.
Un samedi chargé enverrait sinon cinq alertes en quelques secondes.

## CSS vanilla plutôt que Tailwind

L'identité visuelle est très typée : bleu nuit, italique condensée, parallélogrammes,
rouge en accent rare. Des tokens CSS expriment cela directement.
Tailwind aurait ajouté une couche de configuration sans bénéfice à cette échelle.

## Le splash dure toujours 3,5 secondes

Si les données arrivent plus vite, l'animation va quand même à son terme :
un splash qui disparaît en 300 ms produit un flash désagréable.
Si le chargement traîne, la barre boucle au lieu de rester figée.

## Deux service workers

Celui de Vite gère le cache hors ligne, celui de Firebase gère les notifications.
Firebase impose le nom `firebase-messaging-sw.js`, il ne peut pas être fusionné.
C'est la configuration standard, mais c'est la première piste à regarder
en cas de conflit d'enregistrement.

## iOS impose l'installation

Le push web n'existe dans Safari que pour une PWA installée sur l'écran d'accueil.
Le hook de notification détecte ce cas et l'explique dans les réglages,
plutôt que d'échouer en silence. C'est aussi pourquoi le bandeau d'installation
insiste davantage sur iOS.
