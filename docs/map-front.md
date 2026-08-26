# Module front

React 18 + Vite, CSS vanilla avec variables. Aucune dépendance UI.

## Pages

**Connexion** — bascule connexion / inscription sur un seul écran. Le premier compte
créé devient admin du tenant. Traduit les codes d'erreur Firebase en français.

**Onboarding** — quatre étapes obligatoires au premier lancement : club favori,
sélection nationale, jusqu'à `MAX_CLUBS_SUIVIS` (2) clubs suivis en plus du favori
(facultatif), réglages de notification. Écrit tout en une fois à la validation
finale et bascule `onboardingTermine`.

**Accueil** — un bloc à la une sur le prochain match pertinent, la liste des matchs
du jour avec leur chaîne, un encart si deux affiches se chevauchent, puis le flux
d'actualité filtré. Permet de corriger une chaîne manquante via la modale.

**Matchs** — un seul jour affiché à la fois, piloté par le composant `NavDates`
(Hier / Aujourd'hui / Demain + jours suivants). Plus de filtre par club : tous les
matchs du jour sélectionné s'affichent (au maximum ~5 par jour). Un match terminé
affiche "Terminé" + le score final à la place de l'heure (voir MatchCard et
functions/collecteResultatsMatchs.js — tous les matchs, pas seulement les clubs
suivis). Bouton de rafraîchissement manuel des chaînes. Même modale de correction
qu'Accueil.

**Effectif** — effectif PSG groupé par poste (Gardien/Défenseur/Milieu/Attaquant),
stats par joueur (matchs, titularisations, buts, cartons, minutes). Étoile ★ sur
chaque ligne pour choisir son "chouchou" (`preferences.joueurChouchouId`) — bascule
directement vers la page Chouchou. Bandeau de rappel du chouchou actuel en tête de
page. Fiche détaillée d'un joueur au clic (CarteJoueurModal). Bouton de
rafraîchissement manuel, bouton de diagnostic caché derrière `config/debug.actif`.

**Chouchou** — vitrine plein cadre du joueur choisi dans Effectif : photo en fond,
numéro de maillot en filigrane géant, toutes les stats déjà collectées (aucun
scraping supplémentaire, les mêmes données que la fiche Effectif), puis le flux
d'actus PSG filtré aux articles qui le mentionnent (voir lib/joueur.js). État vide
avec lien vers Effectif si aucun chouchou choisi.

**Classement** — onglets par compétition, championnat du club favori en premier.
Gère les deux formats : tableau unique ou groupes séparés. Surligne le club favori
en rouge, les clubs suivis en gris.

**Réglages** — modification des clubs et de la sélection via un panneau glissant,
activation et réglage fin des notifications, déclaration des abonnements TV,
déconnexion avec confirmation.

**Mercato** — mouvements du PSG (officiels / en discussion / rumeurs), source
Maxifoot, bouton de rafraîchissement manuel. Bandeau `MercatoTimer` en tête de
page pendant les périodes de mercato (voir composant ci-dessous).

**Packs** — système de packs de cartes FUT (voir functions/packsFut.js).
Trois onglets : Ouvrir (tirage payant/gratuit + tirage de test illimité
derrière `config/debug.actif`, ouverture plein écran carte-par-carte
retournable façon Dokkan, dos "TP" partagé, halo/rayons + flash doré sur le
palier le plus rare) ; Collection (album façon Panini groupé par
saison/rareté, filtres rareté + doublons, clic sur une carte possédée =
vue agrandie via `CarteDetailModal`, envoi d'un double à un ami depuis
cette vue) ; Amis (code à 6 caractères, ajout mutuel). Visuels calés sur le
balisage FUTBIN réel (voir composant `CarteFut` et
functions/sources/futbinCartesPsg.js).

## Composants

**Splash** — écran de lancement animé. La bande du maillot balaie l'écran, les trois
lignes du titre montent en séquence. Dure toujours 3,5 s, même si les données arrivent
avant. La barre de progression boucle si le chargement traîne.

**InstallPrompt** — bandeau rouge d'invitation à installer la PWA. Capture
`beforeinstallprompt` sur Android, affiche des instructions manuelles sur iOS
où l'API n'existe pas. Masqué pour la session si refusé.

**BottomNav** — navigation principale (Accueil, Matchs, Compo, Classement,
Effectif, Mercato, Réglages). Chouchou n'y figure pas (barre déjà chargée à 7
entrées) : on y accède depuis l'étoile ★ de l'Effectif ou son bandeau de rappel.

**MatchCard** — carte de match. Trois traitements visuels selon la priorité
(club favori, affiche croisée, club suivi) et trois états de chaîne (confirmée,
à vérifier, absente). Souligne en rouge les chaînes auxquelles l'utilisateur est abonné,
et signale les matchs qu'il ne peut pas regarder. Un match terminé remplace le "vs"
par le score final et l'heure par "Terminé" (champs `termine`/`scoreDomicile`/
`scoreExterieur` sur le document tvBroadcasts, absents tant que non collectés).

**NavDates** — rangée de boutons de dates scrollable horizontalement (Hier /
Aujourd'hui / Demain + `nbJoursApres` jours suivants avec jour+date, ex. "mar 25"),
utilisée par Matchs pour filtrer sur un seul jour à la fois. La clé de jour de chaque
bouton est calculée à partir des composants locaux du `Date` (`getFullYear()` /
`getMonth()` / `getDate()`), jamais via `toISOString()` — un décalage UTC y avait
été introduit puis corrigé une première fois côté Matchs.jsx sans que ce composant
soit réellement mis à jour, ce qui causait le décalage d'un jour sur les trois
boutons ; à surveiller si la logique de clé de jour est retouchée ailleurs (doit
rester synchronisée avec `cleJourDepuisDate` dans Matchs.jsx).

**MercatoTimer** — bandeau événementiel de l'onglet Mercato. Décompte en
direct jusqu'à la fermeture pendant une fenêtre ouverte (pulse rouge dans les
dernières 24h), teaser d'ouverture imminente dans les `SEUIL_BIENTOT_JOURS`
(30) jours précédents, invisible sinon. Calendrier lu en direct depuis Firestore
(`config/fenetresMercato`, voir useFenetresMercato) — entièrement automatique,
aucun redéploiement du front nécessaire pour une nouvelle saison (voir
scripts/maj-fenetres-mercato.mjs).

**NewsItem** — entrée d'actualité avec date, catégorie, titre et source.
Les catégories importantes ressortent en rouge.

**ConfirmModal** — modale de confirmation réutilisable, remplace les alertes natives.
Ferme sur Échap ou clic sur le fond.

**CarteFut** — rendu fidèle d'une carte FUTBIN (voir
functions/sources/futbinCartesPsg.js pour l'extraction des champs), deux
tailles : "l" (détail, ouverture de paquet) et "s" (grille collection).
N'affiche fond/joueur QUE si `imageFond`/`imageJoueur` sont renseignés —
jamais d'icône cassée. Ces deux champs viennent du scraping FUTBIN réel, ou
sont empruntés à une vraie carte de la même rareté pour les 4 cartes de
test (voir scripts/seed-cartes-test.mjs). Partagé entre les onglets Ouvrir
et Collection de Packs.jsx.

**CarteDetailModal** (défini dans pages/Packs.jsx, pas un fichier séparé) —
vue agrandie d'une carte de l'album, ouverte au clic depuis l'onglet
Collection. Bouton "Envoyer à un ami" affiché seulement si un double est
disponible (délègue à `ModaleEnvoiCarte`, également dans Packs.jsx).

## Hooks

**useAuth** — contexte d'authentification. Expose l'utilisateur courant, la connexion,
l'inscription (qui crée aussi la fiche utilisateur et l'entrée admin si le tenant est vierge)
et la déconnexion. Persistance locale activée.

**usePreferences** — contexte des préférences de l'utilisateur connecté, écouté en temps réel.
Fusionne avec des valeurs par défaut. Expose une fonction d'enregistrement partiel.
Exporte aussi `MAX_CLUBS_SUIVIS` (point de contrôle centralisé unique pour la limite
de clubs suivis, hors favori — consommé par Onboarding et Réglages, actuellement 2).
`joueurChouchouId` (id effectif) stocke le joueur mis en avant sur la page Chouchou.

**useDiffusions** — écoute les diffusions à venir depuis une date de début
paramétrable (`depuis`, par défaut `debutDuJour()` = minuit local aujourd'hui).
`debutDuJourMoins(n)` recule ce point de départ de `n` jours (utilisé par Matchs
pour inclure "Hier"). Normalise la date Firestore en chaîne ISO (`debutISO`).

**useActus** — écoute le flux d'actualité et le filtre côté client selon les clubs
de l'utilisateur, en remontant le club favori en premier.

**useHorlogeVivante** — renvoie l'heure courante, rafraîchie à intervalle
régulier (1 s par défaut). Base de tout décompte en direct (voir MercatoTimer).

**useFenetresMercato** — écoute en temps réel `config/fenetresMercato` et
convertit les Timestamps Firestore en `Date`. Voir MercatoTimer et
scripts/maj-fenetres-mercato.mjs pour la mise à jour du calendrier.

**useEffectif** — effectif PSG (source Maxifoot), un seul document mis à jour
à chaque collecte. Utilisé par Effectif et Chouchou.

**useClassements** — écoute les classements et ne garde que les compétitions
concernant les clubs de l'utilisateur, plus la Ligue des Champions.

**useNotifications** — gère le cycle de vie des notifications : détection du support,
cas particulier iOS hors écran d'accueil, demande de permission, obtention du jeton FCM,
enregistrement et retrait côté serveur. Quatre états possibles : indisponible, refusé,
inactif, actif.

**useCartesFut** — catalogue (`actif:true`), collection possédée (jointe à
la quantité par carte) et état de paquets (solde d'étoiles, paquet gratuit
du jour) de l'utilisateur connecté. Expose `ouvrirPaquet` (callable
`ouvrirPackFut`) et `ouvrirPaquetDebug` (callable `ouvrirPackFutDebug`,
tirage de test illimité, bouton visible seulement si `modeDebug` — lu depuis
`config/debug.actif`). Utilisé par pages/Packs.jsx.

**useAmisFut** — code ami (génération/lecture), ajout d'un ami par code,
envoi d'une carte en double. Utilisé par pages/Packs.jsx (onglets Collection
et Amis).

## Bibliothèques

**firebase.js** — initialisation, cache local persistant, et table centralisée des
chemins Firestore. Aucune requête ne construit son chemin à la main.

**catalogue.js** — chargement mis en cache des clubs et nations depuis Firestore,
plus une recherche insensible aux accents.

**recommandation.js** — évalue si un match concerne l'utilisateur et à quel niveau
de priorité, trie les résultats, détecte les chevauchements horaires, et fournit
les formateurs de date en français.

**equipes.js** — rapprochement heuristique entre les libellés d'équipe de l'API
de classement et ceux du catalogue local, pour le surlignage.

**mercato.js** — calculs purs sur des fenêtres de mercato passées en paramètre
(fenêtre en cours, prochaine fenêtre, décompte) : plus de dates en dur ici,
lues depuis Firestore via useFenetresMercato (voir MercatoTimer).

**joueur.js** — `estActuDuJoueur`/`actusDuJoueur` : fait correspondre le nom
d'un joueur de l'effectif au texte (titre/résumé/corps) d'une actu, pour le
flux filtré de la page Chouchou. Recherche normalisée (accents/casse) simple,
différente de `memeJoueur` côté serveur (égalité entre deux noms, pas
recherche dans un texte).

## Conventions

- Tokens de couleur et de typographie dans `styles/tokens.css`, jamais de valeur en dur
- Nommage BEM sur les classes CSS
- Un fichier CSS par composant, importé depuis le composant
- Pas de `localStorage` pour les données métier : tout passe par Firestore
- `sessionStorage` uniquement pour le refus temporaire du bandeau d'installation
- Clé de jour LOCAL (filtres par date) : toujours reconstruire depuis
  `getFullYear()/getMonth()/getDate()`, jamais `toISOString()` (décale via UTC)
