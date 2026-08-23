import { getMessaging } from 'firebase-admin/messaging'
import { logger } from 'firebase-functions/v2'
import { db, chemins } from './admin.js'

const CODES_JETON_MORT = [
  'messaging/registration-token-not-registered',
  'messaging/invalid-registration-token',
  'messaging/invalid-argument'
]

/** Charge les jetons d'appareil enregistrés pour un utilisateur. */
export async function jetonsDe(uid) {
  const instantane = await db.collection(chemins.jetons(uid)).get()
  return instantane.docs.map((doc) => ({ id: doc.id, jeton: doc.data().jeton })).filter((j) => j.jeton)
}

/**
 * Envoie une notification à tous les appareils d'un utilisateur.
 * Les jetons devenus invalides sont supprimés au passage.
 */
export async function envoyer(uid, { titre, corps, lien = '/', etiquette }) {
  const jetons = await jetonsDe(uid)
  if (jetons.length === 0) return { envoyes: 0, echecs: 0 }

  const messagerie = getMessaging()

  const reponse = await messagerie.sendEachForMulticast({
    tokens: jetons.map((j) => j.jeton),
    notification: { title: titre, body: corps },
    data: { lien, etiquette: etiquette || '' },
    webpush: {
      fcmOptions: { link: lien },
      notification: {
        icon: '/icons/icon-192.png',
        badge: '/icons/badge-72.png',
        tag: etiquette || undefined,
        renotify: false
      }
    }
  })

  const aSupprimer = []
  reponse.responses.forEach((resultat, index) => {
    if (resultat.success) return
    const code = resultat.error?.code
    if (CODES_JETON_MORT.includes(code)) aSupprimer.push(jetons[index].id)
    else logger.warn('Échec de notification', { uid, code })
  })

  for (const id of aSupprimer) {
    await db.doc(chemins.jeton(uid, id)).delete()
  }

  return { envoyes: reponse.successCount, echecs: reponse.failureCount }
}

/**
 * Garde-fou anti-doublon : une notification donnée n'est envoyée
 * qu'une seule fois par utilisateur, même si un cron repasse.
 */
export async function envoyerUneFois(uid, identifiantEnvoi, contenu) {
  const ref = db.doc(chemins.envoi(uid, identifiantEnvoi))

  const dejaEnvoyee = await db.runTransaction(async (transaction) => {
    const existante = await transaction.get(ref)
    if (existante.exists) return true

    transaction.set(ref, {
      envoyeeLe: new Date(),
      expireLe: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    })
    return false
  })

  if (dejaEnvoyee) return { envoyes: 0, echecs: 0, ignoree: true }

  return envoyer(uid, contenu)
}
