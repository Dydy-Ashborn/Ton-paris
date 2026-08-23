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
  journal: (id) => `tenants/${TENANT_ID}/scrapeLogs/${id}`
}
