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
 *
 * SIGNALÉ EN SESSION ("ça fonctionne mais ça me les envoie en double") :
 * le payload combinait un `notification` de haut niveau ET un
 * `webpush.notification` — bug Firebase Web Push bien connu, ce doublon
 * fait que le navigateur affiche la notification tout seul directement
 * depuis le payload webpush (sans même exécuter le JS du service worker),
 * EN PLUS de notre propre code qui l'affiche aussi explicitement
 * (onBackgroundMessage côté SW, onMessage côté app — voir
 * firebase-messaging-sw.js et hooks/useNotifications.js) → deux
 * notifications pour un seul envoi. Message 100% DATA maintenant (aucun
 * champ `notification`/`webpush.notification`) : le navigateur n'a plus
 * rien à afficher tout seul, notre code est la SEULE source d'affichage,
 * dans les deux cas (premier plan / arrière-plan).
 */
export async function envoyer(uid, { titre, corps, lien = '/', etiquette }) {
  const jetons = await jetonsDe(uid)
  if (jetons.length === 0) return { envoyes: 0, echecs: 0 }

  const messagerie = getMessaging()

  const reponse = await messagerie.sendEachForMulticast({
    tokens: jetons.map((j) => j.jeton),
    data: { titre, corps, lien, etiquette: etiquette || '' }
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
