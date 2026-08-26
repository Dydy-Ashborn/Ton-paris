import { initializeApp, getApps } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

if (!getApps().length) initializeApp()

export const db = getFirestore()

export const TENANT_ID = process.env.TENANT_ID || 'ton-paris'

export const chemins = {
  config: (document) => `tenants/${TENANT_ID}/config/${document}`,
  utilisateurs: () => `tenants/${TENANT_ID}/users`,
  utilisateur: (uid) => `tenants/${TENANT_ID}/users/${uid}`,
  preferences: (uid) => `tenants/${TENANT_ID}/users/${uid}/prefs/principal`,
  jetons: (uid) => `tenants/${TENANT_ID}/users/${uid}/pushTokens`,
  jeton: (uid, id) => `tenants/${TENANT_ID}/users/${uid}/pushTokens/${id}`,
  envois: (uid) => `tenants/${TENANT_ID}/users/${uid}/sentNotifications`,
  envoi: (uid, id) => `tenants/${TENANT_ID}/users/${uid}/sentNotifications/${id}`,
  diffusions: () => `tenants/${TENANT_ID}/tvBroadcasts`,
  diffusion: (id) => `tenants/${TENANT_ID}/tvBroadcasts/${id}`,
  actus: () => `tenants/${TENANT_ID}/news`,
  actu: (id) => `tenants/${TENANT_ID}/news/${id}`,
  classements: () => `tenants/${TENANT_ID}/standings`,
  classement: (id) => `tenants/${TENANT_ID}/standings/${id}`,
  mercato: (clubId) => `tenants/${TENANT_ID}/mercato/${clubId}`,
  effectif: (clubId) => `tenants/${TENANT_ID}/effectifs/${clubId}`,
  compoProbable: (clubId) => `tenants/${TENANT_ID}/compoProbable/${clubId}`,
  compoOfficielle: (clubId) => `tenants/${TENANT_ID}/compoOfficielle/${clubId}`,
  scoresDirect: () => `tenants/${TENANT_ID}/live/scores`,
  quotaApiFootball: () => `tenants/${TENANT_ID}/config/quotaApiFootball`,
  fenetresMercato: () => `tenants/${TENANT_ID}/config/fenetresMercato`,
  detailsJoueur: (joueurId) => `tenants/${TENANT_ID}/detailsJoueurs/${joueurId}`,
  journaux: () => `tenants/${TENANT_ID}/scrapeLogs`,
  journal: (id) => `tenants/${TENANT_ID}/scrapeLogs/${id}`,
  // Système de packs de cartes FUT — voir sources/futbinCartesPsg.js
  // (scraping + calcul de rareté), collecteCartesFut.js (catalogue),
  // packsFut.js (ouverture de pack + amis/échange). Catalogue global au
  // tenant (partagé), collection/état/amis propres à chaque uid — même
  // séparation catalogue/possession que effectif(clubId) vs preferences(uid)
  // plus haut.
  cartesFut: () => `tenants/${TENANT_ID}/cartesFut`,
  carteFut: (id) => `tenants/${TENANT_ID}/cartesFut/${id}`,
  collectionFut: (uid) => `tenants/${TENANT_ID}/users/${uid}/collectionFut`,
  carteCollectionFut: (uid, id) => `tenants/${TENANT_ID}/users/${uid}/collectionFut/${id}`,
  etatPacksFut: (uid) => `tenants/${TENANT_ID}/users/${uid}/packsFut/etat`,
  configPacksFut: () => `tenants/${TENANT_ID}/config/packsFut`,
  // Amis (échange de cartes en double, façon cadeau — voir
  // envoyerCarteFut). codesAmis est un index INVERSE top-niveau
  // (code → uid) : une sous-collection sous users/{uid} ne permettrait pas
  // de retrouver un uid à partir d'un code saisi par un autre joueur.
  codesAmis: () => `tenants/${TENANT_ID}/codesAmis`,
  codeAmi: (code) => `tenants/${TENANT_ID}/codesAmis/${code}`,
  amis: (uid) => `tenants/${TENANT_ID}/users/${uid}/amis`,
  ami: (uid, amiUid) => `tenants/${TENANT_ID}/users/${uid}/amis/${amiUid}`,
  // Cadeaux de carte en attente d'ouverture (25/08/2026, demandé en session :
  // "quand il ouvre l'app ou qu'il est déjà dessus si je lui envoie une
  // carte je veux qu'il ait une pop up stylé plein écran... il clique et le
  // cadeau s'offre") — un doc PAR ENVOI (pas un seul doc réutilisé) sous
  // users/{uid}/cadeauxFut, écrit uniquement par envoyerCarteFut. `ouvertLe`
  // reste null tant que le destinataire n'a pas cliqué "ouvrir" côté client
  // (voir hooks/useCadeauxFut.js) — c'est CE champ qui fait disparaître la
  // popup, jamais une suppression du doc (garde un historique "cadeaux
  // reçus" exploitable plus tard sans coût supplémentaire).
  cadeauxFut: (uid) => `tenants/${TENANT_ID}/users/${uid}/cadeauxFut`,
  cadeauFut: (uid, id) => `tenants/${TENANT_ID}/users/${uid}/cadeauxFut/${id}`,
  // Tirages de test illimités (voir ouvrirPackFutDebug dans packsFut.js) —
  // gatés sur config('debug').actif, LE MÊME doc que donneesTest.js utilise
  // déjà pour ses propres outils de debug visuel (injecterCompoTest...) :
  // un seul interrupteur centralisé pour tout le mode debug de l'app,
  // jamais un doc séparé par fonctionnalité (voir principe "point de
  // contrôle centralisé" des instructions du projet). Bascule MANUELLE dans
  // la console Firestore uniquement, jamais depuis l'app. Les cartes tirées
  // en mode debug vont dans collectionFutTest(uid), séparée de
  // collectionFut(uid) : jamais mélangées à la vraie collection/album, et
  // nettoyageDebugFut.js vide TOUTES les collectionFutTest (tous users, via
  // collectionGroup) automatiquement quand debug repasse à false.
  collectionFutTest: (uid) => `tenants/${TENANT_ID}/users/${uid}/collectionFutTest`,
  carteCollectionFutTest: (uid, id) => `tenants/${TENANT_ID}/users/${uid}/collectionFutTest/${id}`,
  // Mini-jeu "Pile ou Maillot" (mise à risque, gain/perte d'étoiles, voir
  // jouerPileOuFace dans packsFut.js) — réutilise etatPacksFut(uid) pour le
  // SOLDE (même principe que ouvrirPackFut/gagnerMonnaieFutQuotidien : un
  // seul et même compteur d'étoiles pour tout le système de packs, jamais un
  // solde par fonctionnalité). configPileOuFace() suit exactement le même
  // pattern que configPacksFut() ci-dessus (doc config/*, repli sur des
  // valeurs par défaut en code si absent) pour les paliers de mise et la
  // marge maison, séparé de config/packsFut car conceptuellement une
  // fonctionnalité distincte (jeu de hasard vs ouverture de paquet), pas
  // juste une histoire de lisibilité du doc.
  configPileOuFace: () => `tenants/${TENANT_ID}/config/pileOuFace`
}
