import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFunctions } from 'firebase/functions'
import { initializeFirestore, persistentLocalCache, persistentSingleTabManager } from 'firebase/firestore'

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

export const app = initializeApp(config)
export const auth = getAuth(app)
export const fonctions = getFunctions(app, 'europe-west9')

// Cache local : l'app s'ouvre et affiche le dernier programme connu même hors ligne.
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({ tabManager: persistentSingleTabManager() })
})

export const VAPID_PUBLIQUE = import.meta.env.VITE_FIREBASE_VAPID_KEY

export const TENANT_ID = import.meta.env.VITE_TENANT_ID || 'ton-paris'

// Chemins centralisés : aucune requête ne construit son chemin à la main.
export const chemins = {
  config: (doc) => `tenants/${TENANT_ID}/config/${doc}`,
  admin: (uid) => `tenants/${TENANT_ID}/admins/${uid}`,
  utilisateur: (uid) => `tenants/${TENANT_ID}/users/${uid}`,
  preferences: (uid) => `tenants/${TENANT_ID}/users/${uid}/prefs/principal`,
  jetons: (uid) => `tenants/${TENANT_ID}/users/${uid}/pushTokens`,
  matchs: () => `tenants/${TENANT_ID}/matches`,
  diffusions: () => `tenants/${TENANT_ID}/tvBroadcasts`,
  classements: () => `tenants/${TENANT_ID}/standings`,
  actus: () => `tenants/${TENANT_ID}/news`,
  mercato: (clubId) => `tenants/${TENANT_ID}/mercato/${clubId}`,
  effectif: (clubId) => `tenants/${TENANT_ID}/effectifs/${clubId}`,
  // Doc SÉPARÉ de effectif(clubId) ci-dessus, volontairement : ce dernier
  // est réécrit en entier (.set(), pas merge) chaque jour à 6h par le cron
  // Maxifoot (functions/collecteEffectifPsg.js) — y stocker les photos/bio
  // PSG.fr récupérées manuellement (voir scripts/maj-photos-effectif.mjs et
  // l'userscript Tampermonkey associé) se ferait écraser au prochain
  // passage du cron. Ce doc-ci n'est écrit QUE par ce script manuel, jamais
  // par un cron, et est fusionné côté client avec effectif(clubId) — voir
  // hooks/useEffectif.js.
  photosEffectif: (clubId) => `tenants/${TENANT_ID}/config/photosEffectif-${clubId}`,
  compoProbable: (clubId) => `tenants/${TENANT_ID}/compoProbable/${clubId}`,
  compoOfficielle: (clubId) => `tenants/${TENANT_ID}/compoOfficielle/${clubId}`,
  scoresDirect: () => `tenants/${TENANT_ID}/live/scores`,
  fenetresMercato: () => `tenants/${TENANT_ID}/config/fenetresMercato`,
  detailsJoueur: (joueurId) => `tenants/${TENANT_ID}/detailsJoueurs/${joueurId}`,
  journaux: () => `tenants/${TENANT_ID}/scrapeLogs`
}
