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
  journaux: () => `tenants/${TENANT_ID}/scrapeLogs`,
  // Système de packs de cartes FUT — voir hooks/useCartesFut.js et
  // hooks/useAmisFut.js. Catalogue global au tenant (lecture seule côté
  // client, écrit par functions/collecteCartesFut.js), collection/état de
  // paquets propres à l'uid connecté. Les écritures de paquet/échange
  // passent TOUJOURS par les fonctions callable (ouvrirPackFut,
  // envoyerCarteFut..., jamais un set() direct côté client) : c'est elles
  // l'autorité sur les probabilités et le solde, pour qu'un client modifié
  // ne puisse pas s'auto-attribuer des cartes.
  cartesFut: () => `tenants/${TENANT_ID}/cartesFut`,
  collectionFut: (uid) => `tenants/${TENANT_ID}/users/${uid}/collectionFut`,
  etatPacksFut: (uid) => `tenants/${TENANT_ID}/users/${uid}/packsFut/etat`,
  // Lu en lecture seule pour AFFICHER le coût/la taille d'un paquet (voir
  // hooks/useCartesFut.js) — même doc que functions/packsFut.js lit côté
  // serveur pour DÉCIDER, donc jamais de décalage entre ce qui est montré
  // et ce qui sera réellement appliqué au clic. Même chemin que
  // config(doc) ci-dessus, exposé nommément pour rester cohérent avec
  // functions/lib/admin.js (chemins.configPacksFut).
  configPacksFut: () => `tenants/${TENANT_ID}/config/packsFut`,
  // Liste d'amis de l'uid connecté (voir hooks/useAmisFut.js) — écrite
  // mutuellement des deux côtés par le callable ajouterAmiParCode, jamais
  // en écriture directe côté client (voir firestore.rules). codesAmis
  // (index inversé code → uid) n'a PAS d'équivalent ici : il n'est jamais
  // lu côté client, seulement résolu côté serveur par ajouterAmiParCode.
  amis: (uid) => `tenants/${TENANT_ID}/users/${uid}/amis`,
  // Cadeaux de carte en attente d'ouverture (25/08/2026, voir
  // hooks/useCadeauxFut.js) — écrits uniquement par le callable
  // envoyerCarteFut (functions/packsFut.js), jamais en écriture directe côté
  // client à la création. `ouvertLe` (mis à jour par le CLIENT propriétaire,
  // seul champ écrivable — voir firestore.rules) fait disparaître la popup
  // une fois ouverte, sans supprimer le doc.
  cadeauxFut: (uid) => `tenants/${TENANT_ID}/users/${uid}/cadeauxFut`,
  // Mode debug (tirages de test illimités, voir hooks/useCartesFut.js) : PAS
  // de nouveau chemin ici, lu via config('debug') ci-dessus — le même doc
  // que donneesTest.js utilise déjà côté serveur pour ses propres outils de
  // debug visuel (voir functions/lib/admin.js).
  //
  // Mini-jeu "Pile ou Maillot" (voir hooks/usePileOuFace.js, callable
  // jouerPileOuFace) — lu en lecture seule pour AFFICHER les paliers de mise
  // et le multiplicateur de gain, même doc que functions/packsFut.js lit
  // côté serveur pour DÉCIDER (voir functions/lib/admin.js,
  // chemins.configPileOuFace). Le solde utilisé est etatPacksFut(uid)
  // ci-dessus, PAS de doc séparé : un seul et même compteur d'étoiles pour
  // tout le système de packs.
  configPileOuFace: () => `tenants/${TENANT_ID}/config/pileOuFace`
}
