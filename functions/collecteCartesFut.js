import { onSchedule } from 'firebase-functions/v2/scheduler'
import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { logger } from 'firebase-functions/v2'
import { FieldValue } from 'firebase-admin/firestore'
import { db, chemins } from './lib/admin.js'
import { scraperCartesFutPsg, MOTIFS_CARTE_BASE_PAR_DEFAUT } from './sources/futbinCartesPsg.js'

const REGION = 'europe-west9'

/**
 * Écrit/actualise le catalogue de cartes FUT à partir d'un scraping FUTBIN.
 *
 * Repli défensif AU CŒUR de cette fonction : si le scraping renvoie 0
 * carte, on N'ÉCRASE RIEN. Une page FUTBIN vide n'est presque jamais le
 * signe qu'il n'y a plus de carte PSG — c'est bien plus probablement un
 * scraping cassé (voir l'avertissement dans sources/futbinCartesPsg.js :
 * FUTBIN est une appli dynamique, rien ne garantit qu'un simple fetch HTTP
 * serve le même contenu que la page une fois le JS exécuté). Un catalogue
 * vidé par erreur ferait disparaître les cartes déjà possédées par les
 * joueurs de la collection — bien pire qu'un catalogue simplement pas à
 * jour un jour de plus.
 *
 * Les cartes absentes du nouveau scraping mais déjà en base sont
 * désactivées (actif: false) plutôt que supprimées : un joueur peut déjà
 * en posséder un exemplaire dans sa collection (voir packsFut.js), sa
 * fiche doit rester affichable même si FUTBIN ne la liste plus.
 */
async function collecter({ urlPersonnalisee } = {}) {
  const configSnap = await db.doc(chemins.configPacksFut()).get()
  const config = configSnap.exists ? configSnap.data() : {}
  const motifsBase = config.motifsCarteBase || MOTIFS_CARTE_BASE_PAR_DEFAUT
  const url = urlPersonnalisee || config.urlFutbin || undefined

  const cartes = await scraperCartesFutPsg({ urlPersonnalisee: url, motifsBase, saison: config.saison })

  if (cartes.length === 0) {
    throw new Error(
      "0 carte trouvée sur FUTBIN — scraping probablement cassé (page dynamique non servie côté serveur), catalogue existant conservé tel quel."
    )
  }

  const existantesSnap = await db.collection(chemins.cartesFut()).get()
  const idsExistants = new Set(existantesSnap.docs.map((d) => d.id))
  const idsScrapes = new Set(cartes.map((c) => c.id))

  const nouvelles = cartes.filter((c) => !idsExistants.has(c.id))
  const desactivees = [...idsExistants].filter((id) => !idsScrapes.has(id))

  // Lots de 400 : marge sous la limite Firestore de 500 écritures/batch.
  const TAILLE_LOT = 400
  for (let i = 0; i < cartes.length; i += TAILLE_LOT) {
    const lot = db.batch()
    for (const carte of cartes.slice(i, i + TAILLE_LOT)) {
      lot.set(
        db.doc(chemins.carteFut(carte.id)),
        { ...carte, actif: true, majLe: FieldValue.serverTimestamp() },
        { merge: true }
      )
    }
    await lot.commit()
  }

  for (let i = 0; i < desactivees.length; i += TAILLE_LOT) {
    const lot = db.batch()
    for (const id of desactivees.slice(i, i + TAILLE_LOT)) {
      lot.set(db.doc(chemins.carteFut(id)), { actif: false, majLe: FieldValue.serverTimestamp() }, { merge: true })
    }
    await lot.commit()
  }

  await db.doc(chemins.journal('futbin-cartes-psg')).set(
    {
      source: 'futbin-cartes-psg',
      type: 'cartesFut',
      derniereTentative: FieldValue.serverTimestamp(),
      dernierSucces: FieldValue.serverTimestamp(),
      enEchec: false,
      nombreCartes: cartes.length,
      nouvelles: nouvelles.length,
      desactivees: desactivees.length
    },
    { merge: true }
  )

  logger.info('Collecte cartes FUT PSG terminée', {
    total: cartes.length,
    nouvelles: nouvelles.length,
    desactivees: desactivees.length
  })

  return { total: cartes.length, nouvelles: nouvelles.length, desactivees: desactivees.length }
}

// Une fois par jour : FUTBIN ajoute des cartes promo à un rythme irrégulier
// (souvent hebdomadaire), pas besoin d'un rythme plus serré. Heure décalée
// de collecteEffectifPsg.js (6h) pour ne pas cumuler deux scrapings lourds
// au même instant.
export const collecteCartesFut = onSchedule(
  { schedule: '0 7 * * *', timeZone: 'Europe/Paris', region: REGION, memory: '256MiB', timeoutSeconds: 120, retryCount: 1 },
  async () => {
    try {
      await collecter()
    } catch (e) {
      logger.error('Collecte cartes FUT PSG échouée', { message: e.message })
      await db.doc(chemins.journal('futbin-cartes-psg')).set(
        { source: 'futbin-cartes-psg', derniereTentative: FieldValue.serverTimestamp(), enEchec: true, erreur: e.message },
        { merge: true }
      )
    }
  }
)

export const rafraichirCartesFut = onCall(
  { region: REGION, memory: '256MiB', timeoutSeconds: 120 },
  async (requete) => {
    if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi pour rafraîchir.')

    const membre = await db.doc(chemins.utilisateur(requete.auth.uid)).get()
    if (!membre.exists) throw new HttpsError('permission-denied', "Ce compte n'appartient pas à l'équipe.")

    try {
      const resultat = await collecter({ urlPersonnalisee: requete.data?.urlPersonnalisee })
      return { ok: true, ...resultat }
    } catch (e) {
      logger.error('Rafraîchissement cartes FUT échoué', { message: e.message })
      throw new HttpsError('unavailable', `Échec du scraping cartes FUT : ${e.message}`)
    }
  }
)
