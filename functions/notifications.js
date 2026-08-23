import { onSchedule } from 'firebase-functions/v2/scheduler'
import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { onDocumentCreated } from 'firebase-functions/v2/firestore'
import { logger } from 'firebase-functions/v2'
import { FieldValue } from 'firebase-admin/firestore'
import { db, chemins, TENANT_ID } from './lib/admin.js'
import { envoyerUneFois } from './lib/push.js'

const REGION = 'europe-west9'
const FENETRE_MS = 10 * 60 * 1000 // le cron passe toutes les 10 minutes

/** Charge tous les membres du tenant avec leurs préférences. */
async function membresAvecPreferences() {
  const utilisateurs = await db.collection(chemins.utilisateurs()).get()
  const membres = []

  for (const utilisateur of utilisateurs.docs) {
    const prefs = await utilisateur.ref.collection('prefs').doc('principal').get()
    if (!prefs.exists) continue

    const donnees = prefs.data()
    if (!donnees.onboardingTermine) continue

    membres.push({ uid: utilisateur.id, preferences: donnees })
  }

  return membres
}

/** Identifiants des clubs retenus par un utilisateur. */
function clubsDe(preferences) {
  const ids = new Set()
  if (preferences.clubFavori?.id) ids.add(preferences.clubFavori.id)
  for (const club of preferences.clubsSuivis || []) if (club.id) ids.add(club.id)
  return ids
}

function estConcerne(diffusion, preferences) {
  const suivis = clubsDe(preferences)
  return (diffusion.clubs || []).some((id) => suivis.has(id))
}

function libelleChaine(diffusion) {
  const nom = diffusion.chaines?.[0]?.nom
  if (!nom) return 'chaîne à confirmer'
  return diffusion.statut === 'a_verifier' ? `${nom} (à confirmer)` : nom
}

function heureParis(date) {
  return new Intl.DateTimeFormat('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Paris'
  }).format(date)
}

/** Diffusions dont le coup d'envoi tombe dans un intervalle donné. */
async function diffusionsEntre(debut, fin) {
  const instantane = await db
    .collection(chemins.diffusions())
    .where('debut', '>=', debut)
    .where('debut', '<', fin)
    .get()

  return instantane.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

/**
 * Résumé du matin : un seul message groupé listant les matchs du jour,
 * plutôt qu'une notification par rencontre.
 */
export const notifMatin = onSchedule(
  {
    schedule: '0 9 * * *',
    timeZone: 'Europe/Paris',
    region: REGION,
    memory: '256MiB',
    timeoutSeconds: 300
  },
  async () => {
    const maintenant = new Date()
    const debut = new Date(maintenant)
    debut.setHours(0, 0, 0, 0)
    const fin = new Date(debut)
    fin.setDate(fin.getDate() + 1)

    const diffusions = await diffusionsEntre(debut, fin)
    if (diffusions.length === 0) return

    const membres = await membresAvecPreferences()

    for (const { uid, preferences } of membres) {
      if (preferences.notifications?.matinDuMatch === false) continue

      const concernes = diffusions
        .filter((d) => estConcerne(d, preferences))
        .sort((a, b) => a.debut.toMillis() - b.debut.toMillis())

      if (concernes.length === 0) continue

      const jour = debut.toISOString().slice(0, 10)

      const corps =
        concernes.length === 1
          ? `${concernes[0].domicile} – ${concernes[0].exterieur} à ${heureParis(concernes[0].debut.toDate())} sur ${libelleChaine(concernes[0])}.`
          : concernes
              .map((d) => `${heureParis(d.debut.toDate())} ${d.domicile} – ${d.exterieur} (${libelleChaine(d)})`)
              .join('\n')

      await envoyerUneFois(uid, `matin_${jour}`, {
        titre: concernes.length === 1 ? "Match aujourd'hui" : `${concernes.length} matchs aujourd'hui`,
        corps,
        lien: '/',
        etiquette: `matin_${jour}`
      })
    }

    logger.info('Résumé du matin envoyé', { membres: membres.length, matchs: diffusions.length })
  }
)

/**
 * Rappels rapprochés : une heure avant, puis au coup d'envoi.
 * Le cron passe toutes les dix minutes et ne lit que le cache déjà rempli.
 */
export const notifRappels = onSchedule(
  {
    schedule: '*/10 * * * *',
    timeZone: 'Europe/Paris',
    region: REGION,
    memory: '256MiB',
    timeoutSeconds: 300
  },
  async () => {
    const maintenant = Date.now()

    const fenetreHeureAvant = {
      debut: new Date(maintenant + 60 * 60 * 1000),
      fin: new Date(maintenant + 60 * 60 * 1000 + FENETRE_MS)
    }
    const fenetreCoupEnvoi = {
      debut: new Date(maintenant),
      fin: new Date(maintenant + FENETRE_MS)
    }

    const [avant, immediat] = await Promise.all([
      diffusionsEntre(fenetreHeureAvant.debut, fenetreHeureAvant.fin),
      diffusionsEntre(fenetreCoupEnvoi.debut, fenetreCoupEnvoi.fin)
    ])

    if (avant.length === 0 && immediat.length === 0) return

    const membres = await membresAvecPreferences()

    for (const { uid, preferences } of membres) {
      if (preferences.notifications?.uneHeureAvant !== false) {
        for (const diffusion of avant.filter((d) => estConcerne(d, preferences))) {
          await envoyerUneFois(uid, `avant_${diffusion.id}`, {
            titre: `${diffusion.domicile} – ${diffusion.exterieur} dans une heure`,
            corps: `${heureParis(diffusion.debut.toDate())} sur ${libelleChaine(diffusion)}.`,
            lien: '/matchs',
            etiquette: `match_${diffusion.id}`
          })
        }
      }

      if (preferences.notifications?.coupDEnvoi !== false) {
        for (const diffusion of immediat.filter((d) => estConcerne(d, preferences))) {
          await envoyerUneFois(uid, `envoi_${diffusion.id}`, {
            titre: 'Ça commence',
            corps: `${diffusion.domicile} – ${diffusion.exterieur} sur ${libelleChaine(diffusion)}.`,
            lien: '/matchs',
            etiquette: `match_${diffusion.id}`
          })
        }
      }
    }
  }
)

/**
 * Actualité : déclenchée à l'écriture d'un article.
 * Chacun ne reçoit que ce qui concerne ses clubs, selon son réglage.
 */
export const notifActu = onDocumentCreated(
  {
    document: `tenants/${TENANT_ID}/news/{actuId}`,
    region: REGION,
    memory: '256MiB'
  },
  async (evenement) => {
    const actu = evenement.data?.data()
    if (!actu) return

    // Un article publié il y a plus de six heures n'a plus rien d'une alerte.
    const publieLe = actu.publieLe?.toDate?.() || new Date(0)
    if (Date.now() - publieLe.getTime() > 6 * 60 * 60 * 1000) return

    const membres = await membresAvecPreferences()

    for (const { uid, preferences } of membres) {
      const reglages = preferences.notifications || {}
      const suivis = clubsDe(preferences)

      const concerne = (actu.clubs || []).some((id) => suivis.has(id))
      if (!concerne) continue

      const veutTout = reglages.touteActu === true
      const veutImportantes = reglages.actuImportante !== false

      if (!veutTout && !(veutImportantes && actu.importante)) continue

      await envoyerUneFois(uid, `actu_${evenement.params.actuId}`, {
        titre: actu.categorie || actu.source || 'Actu',
        corps: actu.titre,
        lien: '/',
        etiquette: `actu_${evenement.params.actuId}`
      })
    }
  }
)

/** Enregistrement d'un appareil pour les notifications. */
export const enregistrerAppareil = onCall({ region: REGION }, async (requete) => {
  if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi pour activer les notifications.')

  const membre = await db.doc(chemins.utilisateur(requete.auth.uid)).get()
  if (!membre.exists) throw new HttpsError('permission-denied', "Ce compte n'appartient pas à l'équipe.")

  const { jeton } = requete.data || {}
  if (!jeton || typeof jeton !== 'string') {
    throw new HttpsError('invalid-argument', "Jeton d'appareil manquant.")
  }

  // L'identifiant du document dérive du jeton : un même appareil ne crée pas de doublon.
  const id = jeton.slice(-64).replace(/[^a-zA-Z0-9_-]/g, '')

  await db.doc(chemins.jeton(requete.auth.uid, id)).set(
    {
      jeton,
      agent: requete.rawRequest?.headers?.['user-agent'] || null,
      majLe: FieldValue.serverTimestamp()
    },
    { merge: true }
  )

  return { ok: true }
})

/** Retrait d'un appareil, quand l'utilisateur coupe les notifications. */
export const retirerAppareil = onCall({ region: REGION }, async (requete) => {
  if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi pour modifier les notifications.')

  const { jeton } = requete.data || {}
  if (!jeton) throw new HttpsError('invalid-argument', "Jeton d'appareil manquant.")

  const id = jeton.slice(-64).replace(/[^a-zA-Z0-9_-]/g, '')
  await db.doc(chemins.jeton(requete.auth.uid, id)).delete()

  return { ok: true }
})

/** Purge hebdomadaire du journal d'envois. */
export const purgeEnvois = onSchedule(
  {
    schedule: '0 4 * * 1',
    timeZone: 'Europe/Paris',
    region: REGION,
    memory: '256MiB'
  },
  async () => {
    const membres = await db.collection(chemins.utilisateurs()).get()
    const limite = new Date()

    for (const membre of membres.docs) {
      const anciens = await membre.ref
        .collection('sentNotifications')
        .where('expireLe', '<', limite)
        .limit(400)
        .get()

      if (anciens.empty) continue

      const lot = db.batch()
      anciens.docs.forEach((doc) => lot.delete(doc.ref))
      await lot.commit()
    }
  }
)
