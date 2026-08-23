# Mise en route — Ton Paris

Guide complet, de zéro à l'app en ligne. Compte environ 1 h la première fois.

Tout ce qui doit être remplacé par une valeur à toi est signalé par ⚠️.

---

## Avant de commencer

Il te faut :

- **Node.js 20 ou plus** — vérifie avec `node -v`. Si absent : [nodejs.org](https://nodejs.org)
- **Un compte Google** pour Firebase
- **Une carte bancaire** — le plan Blaze est obligatoire (voir étape 2). À votre volume, la facture sera de 0 € ou quelques centimes par mois.

---

## Étape 1 — Créer le projet Firebase

1. Va sur [console.firebase.google.com](https://console.firebase.google.com)
2. **Ajouter un projet** → nomme-le `ton-paris` (ou ce que tu veux)
3. Google Analytics : **désactive**, tu n'en as pas besoin
4. Attends la création, puis **Continuer**

---

## Étape 2 — Passer au plan Blaze

Obligatoire : les Cloud Functions Gen 2 et les appels réseau sortants (scraping, API) n'existent pas sur le plan gratuit Spark.

1. En bas à gauche de la console, clique sur **Spark** → **Mettre à niveau**
2. Choisis **Blaze**, associe un compte de facturation
3. **Recommandé** : définis une alerte de budget à 5 € pour dormir tranquille

> À votre échelle — 2 utilisateurs, une poignée d'exécutions par jour — vous resterez dans les quotas gratuits mensuels de Blaze. La carte sert de garantie, pas de prélèvement automatique.

---

## Étape 3 — Activer l'authentification

1. Menu de gauche → **Créer** → **Authentication** → **Commencer**
2. Onglet **Sign-in method** → **E-mail/Mot de passe** → **Activer** → **Enregistrer**

Laisse "Lien e-mail" désactivé.

---

## Étape 4 — Créer la base Firestore

1. Menu de gauche → **Créer** → **Firestore Database** → **Créer une base de données**
2. **Mode production** (les règles du projet prennent le relais)
3. Emplacement : **`eur3 (europe-west)`** ou **`europe-west1`** ⚠️

> Le choix de région est **définitif**. Prends une région européenne : conformité RGPD et latence plus faible depuis la France.

---

## Étape 5 — Activer Cloud Messaging et générer la clé VAPID

1. Roue crantée en haut à gauche → **Paramètres du projet**
2. Onglet **Cloud Messaging**
3. Section **Configuration Web** → **Générer une paire de clés**
4. **Copie la clé publique** qui apparaît ⚠️ — tu en auras besoin à l'étape 8
BMbLRXdRv5SHMSa9gLR1ZvtGS4-9McmV-Qz-S2V6AO-DSFATHsg4EYLvOmwusUehxpeYrHVp5HPtkpRJUY5zEN0

---

## Étape 6 — Récupérer la configuration web

1. Toujours dans **Paramètres du projet**, onglet **Général**
2. Descends jusqu'à **Vos applications** → clique sur l'icône **`</>`** (Web)
3. Surnom : `Ton Paris` → **Enregistrer l'application** (ne coche pas Hosting ici)
4. Un bloc `firebaseConfig` s'affiche. **Garde cette page ouverte**, tu vas copier ces six valeurs deux fois.

Elles ressemblent à ça :
 const firebaseConfig = {
    apiKey: "AIzaSyBQDetC-J1AfOD20h6cYLKHWACSxFSsWJI",
    authDomain: "ton-paris.firebaseapp.com",
    projectId: "ton-paris",
    storageBucket: "ton-paris.firebasestorage.app",
    messagingSenderId: "669449450778",
    appId: "1:669449450778:web:732d76c1d2a5c5b4e228a3",
    measurementId: "G-GYHLT521G4"
  };

> Ces valeurs sont **publiques** par nature (elles finissent dans le code du navigateur). La sécurité repose sur les règles Firestore, pas sur leur secret.

---

## Étape 7 — Créer la clé API football

Pour les classements uniquement.

1. Va sur [football-data.org/client/register](https://www.football-data.org/client/register)
2. Inscris-toi (gratuit, pas de carte)
3. Tu reçois un **jeton d'API** par e-mail ⚠️ — garde-le pour l'étape 11

a53bc5888c65490db04c731239aee256

> Le palier gratuit couvre Ligue 1, Premier League, Liga, Serie A, Bundesliga et Ligue des Champions. Largement suffisant.

---

## Étape 8 — Configurer le projet en local

Ouvre le dossier du projet dans ton éditeur.

### 8a. Fichier `.env.local`

Copie `.env.example` en `.env.local` et remplis-le avec les valeurs de l'étape 6 + la clé VAPID de l'étape 5 :

```
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=ton-paris.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=ton-paris
VITE_FIREBASE_STORAGE_BUCKET=ton-paris.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abc...
VITE_FIREBASE_VAPID_KEY=BEl62iUYgUiv...
VITE_TENANT_ID=ton-paris
```

### 8b. Fichier `public/firebase-messaging-sw.js`

Ouvre-le et remplace les six `'A_REMPLACER'` par les **mêmes valeurs** que ci-dessus (sans la clé VAPID, elle ne va pas là).

Ce fichier ne peut pas lire les variables d'environnement — c'est un service worker, il tourne en dehors du build. D'où la duplication.

### 8c. Région

Si tu as choisi une région **autre que `europe-west1`** à l'étape 4, remplace `europe-west1` partout :

- `src/lib/firebase.js` → ligne `getFunctions(app, 'europe-west1')`
- `functions/scrapeTv.js`, `fetchNews.js`, `fetchStandings.js`, `notifications.js` → constante `REGION`

---

## Étape 9 — Installer et connecter la CLI

```bash
npm install -g firebase-tools
firebase login
```

Dans le dossier du projet :

```bash
firebase use --add
```

Choisis ton projet, alias `default`.

---

## Étape 10 — Installer les dépendances

```bash
npm install
cd functions && npm install && cd ..
cd scripts && npm install && cd ..
```

---

## Étape 11 — Enregistrer la clé API football

```bash
firebase functions:secrets:set CLE_API_FOOT
```

Colle le jeton de l'étape 7 quand c'est demandé, valide.

---

## Étape 12 — Déployer les règles Firestore

```bash
firebase deploy --only firestore:rules
```

À faire **avant** l'amorçage, sinon les scripts se heurtent aux règles par défaut.

---

## Étape 13 — Amorcer les catalogues

Il faut une clé de service pour que les scripts écrivent dans Firestore.

1. **Paramètres du projet** → onglet **Comptes de service** → **Générer une nouvelle clé privée**
2. Un fichier JSON se télécharge. Renomme-le `cle-service.json` et pose-le à la racine du projet.

> Ce fichier est **secret**. Il est déjà dans `.gitignore` — ne le commite jamais.

Puis :

```bash
export GOOGLE_APPLICATION_CREDENTIALS=./cle-service.json
export TENANT_ID=ton-paris

node scripts/seed-config.mjs
node scripts/seed-actus.mjs
node scripts/seed-competitions.mjs
```

Sur Windows PowerShell, remplace `export` par `$env:` :
```powershell
$env:GOOGLE_APPLICATION_CREDENTIALS="./cle-service.json"
$env:TENANT_ID="ton-paris"
```

Tu dois voir trois messages de confirmation. Vérifie dans la console Firestore que `tenants/ton-paris/config/` contient bien `clubs`, `nations`, `chaines`, `fluxActus`, `actualites`, `competitions`.

### ⚠️ Vérifie les flux RSS

Les URL de `scripts/seed-actus.mjs` ont été construites d'après les conventions habituelles de ces sites, **sans avoir pu être testées**. Ouvre chacune dans ton navigateur :

- Si tu vois du XML → le flux marche
- Si tu vois une erreur 404 → cherche le bon flux sur le site et corrige l'URL dans le script, puis relance `node scripts/seed-actus.mjs`

Un flux mort n'affiche aucune erreur visible dans l'app — l'actu sera simplement vide.

---

## Étape 14 — Générer les icônes

Lis `public/icons/LISEZ-MOI.txt` et produis les quatre PNG demandés.

**Sans ces fichiers, l'installation de la PWA échouera.** C'est la seule étape qui demande un outil externe.

---

## Étape 15 — Tester en local

```bash
npm run dev
```

Ouvre `http://localhost:5173`. Tu dois voir le splash, puis l'écran de connexion.

Crée ton compte : **tu deviens automatiquement admin du tenant** (le premier inscrit). Enchaîne sur l'onboarding.

À ce stade, les matchs et l'actu sont vides — les fonctions ne tournent pas encore.

---

## Étape 16 — Déployer les fonctions

```bash
firebase deploy --only functions
```

Le premier déploiement prend plusieurs minutes et peut demander d'activer des API Google Cloud — accepte.

> **Si le déploiement échoue en bloc** : c'est souvent qu'une fonction n'est pas exportée dans `functions/index.js`. Un seul fichier oublié fait tomber tout le déploiement.

---

## Étape 17 — Première collecte

Dans la console Firebase → **Functions**, tu vois tes fonctions. Pour lancer la collecte immédiatement sans attendre 7 h du matin :

Ouvre l'app, va dans **Matchs**, appuie sur **Mettre à jour les chaînes**.

Puis vérifie dans Firestore :

- `tenants/ton-paris/tvBroadcasts/` → doit contenir des matchs
- `tenants/ton-paris/scrapeLogs/` → indique si une source est en échec

### ⚠️ Si `tvBroadcasts` est vide

C'est le point le plus fragile du projet. Les sélecteurs de scraping ont été écrits d'après la structure des pages, mais **n'ont pas pu être testés en conditions réelles**.

Consulte les logs :

```bash
firebase functions:log --only rafraichirDiffusions
```

Puis ouvre `matchs.tv/club/psg/` et `footmercato.net/programme-tv/club/psg` dans ton navigateur, inspecte le HTML (F12), et ajuste les sélecteurs dans `functions/sources/matchsTv.js` et `functions/sources/footmercato.js`.

C'est du travail d'ajustement normal — prévois-le.

---

## Étape 18 — Déployer l'app

```bash
npm run build
firebase deploy --only hosting
```

Ton app est en ligne sur `https://ton-paris.web.app` ⚠️ (l'URL exacte s'affiche à la fin).

---

## Étape 19 — Installer sur vos téléphones

**Android / Chrome** : ouvre l'URL, un bandeau rouge propose l'installation.

**iPhone / Safari** : ouvre l'URL → bouton **Partager** → **Sur l'écran d'accueil**.

> Sur iPhone, **l'installation conditionne les notifications**. Le push web n'existe pas dans Safari en navigation normale, uniquement dans une PWA installée (iOS 16.4+). Sans ça, aucune notif ne partira jamais.

Ensuite : **Réglages** → **Activer les notifications** → accepte la demande du navigateur.

---

## Étape 20 — Ajouter Carlos

Il ouvre l'URL, crée son compte avec sa propre adresse, fait son onboarding. Ses clubs et son flux sont indépendants des tiens.

> Nuance sur les règles : dans la v1, le premier inscrit devient admin, les suivants sont utilisateurs simples. Comme n'importe qui connaissant l'URL peut créer un compte, garde-la entre vous ou ajoute une restriction plus tard.

---

## Récapitulatif des valeurs à remplacer

| Où | Quoi | Source |
|---|---|---|
| `.env.local` | 6 valeurs Firebase | Étape 6 |
| `.env.local` | `VITE_FIREBASE_VAPID_KEY` | Étape 5 |
| `public/firebase-messaging-sw.js` | Les 6 mêmes valeurs Firebase | Étape 6 |
| Secret Firebase | `CLE_API_FOOT` | Étape 7 |
| `src/lib/firebase.js` + les 4 fichiers functions | Région, si ≠ `europe-west1` | Étape 4 |
| `scripts/seed-actus.mjs` | URL des flux RSS, si cassées | Étape 13 |
| `public/icons/` | 4 fichiers PNG | Étape 14 |

---

## Les crons en place

| Fonction | Fréquence | Rôle |
|---|---|---|
| `collecteQuotidienne` | 7 h | Scraping des chaînes TV |
| `collecteClassements` | 7 h 30 et 23 h 30 | Classements via l'API |
| `ingestionActus` | toutes les 3 h | Flux RSS |
| `notifMatin` | 9 h | Résumé groupé du jour |
| `notifRappels` | toutes les 10 min | 1 h avant + coup d'envoi |
| `purgeEnvois` | lundi 4 h | Nettoyage du journal |

`notifRappels` tourne souvent mais ne fait qu'une lecture Firestore ciblée — pas de scraping, coût négligeable.

Pour modifier un horaire : change la ligne `schedule` dans le fichier concerné, puis redéploie.

---

## En cas de problème

| Symptôme | Piste |
|---|---|
| Le déploiement des fonctions échoue en entier | Une fonction non exportée dans `functions/index.js` |
| `tvBroadcasts` reste vide | Sélecteurs de scraping à ajuster — voir étape 17 |
| Aucune actu n'apparaît | URL de flux RSS invalide — vérifie `scrapeLogs` |
| Classements vides | Clé API absente, ou compétition hors palier gratuit (erreur 403) |
| Pas de notifications sur iPhone | La PWA n'est pas installée sur l'écran d'accueil |
| Chrome refuse d'installer la PWA | Icônes PNG manquantes dans `public/icons/` |
| Erreur de permission Firestore | Règles non déployées : `firebase deploy --only firestore:rules` |

Pour consulter les logs :

```bash
firebase functions:log
firebase functions:log --only collecteQuotidienne
```
