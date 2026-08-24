import { onSchedule } from 'firebase-functions/v2/scheduler'
import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { logger } from 'firebase-functions/v2'
import { FieldValue } from 'firebase-admin/firestore'
import { db, chemins } from './lib/admin.js'
import { recupererClassementMaxifoot } from './sources/maxifootClassement.js'
import { pause } from './lib/http.js'

const REGION = 'europe-west9'
const PAUSE_ENTRE_COMPETITIONS = 2500 // scraping HTML : pas de quota API, mais on reste courtois avec le serveur

/**
 * Récupère toutes les compétitions configurées (config/competitions).
 *
 * La liste de compétitions suivies (5 grands championnats + C1) est
 * courte et bornée : on les récupère systématiquement, sans dépendre des
 * préférences utilisateur pour décider *quoi* aller chercher.
 */
async function competitionsARecuperer() {
  const configCompetitions = await db.doc(chemins.config('competitions')).get()
  return configCompetitions.exists ? configCompetitions.data().liste || [] : []
}

// Exporté (pas seulement utilisé en interne) : collecteResultatsMatchs.js
// s'en sert pour rafraîchir le classement juste après la fin d'un match
// d'un club suivi, plutôt que d'attendre le prochain passage des deux crons
// quotidiens ci-dessous (voir la fonction déclenchée dans ce fichier-là).
export async function collecterClassements() {
  const competitions = await competitionsARecuperer()
  if (competitions.length === 0) {
    logger.warn('Aucune compétition à récupérer.')
    return { competitions: 0, incidents: [] }
  }

  const incidents = []
  let reussites = 0

  for (const competition of competitions) {
    try {
      const { format, groupes, saison, saisonPrecedente } = await recupererClassementMaxifoot(competition.id)

      await db.doc(chemins.classement(competition.id)).set(
        {
          id: competition.id,
          libelle: competition.libelle,
          code: competition.code,
          format,
          groupes,
          saisonDemarree: groupes.length > 0 && groupes.some((g) => g.lignes.length > 0),
          // Saison affichée par Maxifoot et indicateur "ce n'est pas la
          // saison en cours" (cas de la Ligue des Champions avant le
          // démarrage de la phase de ligue mi-septembre : Maxifoot continue
          // d'afficher le classement final de la saison précédente faute de
          // vraie donnée pour la nouvelle). Voir maxifootClassement.js.
          saison: saison || null,
          saisonPrecedente: Boolean(saisonPrecedente),
          source: 'maxifoot',
          majLe: FieldValue.serverTimestamp()
        },
        { merge: true }
      )

      reussites++
    } catch (e) {
      incidents.push({ competition: competition.id, message: e.message })
    }

    await pause(PAUSE_ENTRE_COMPETITIONS)
  }

  await db.doc(chemins.journal('classements')).set(
    {
      source: 'maxifoot',
      type: 'classements',
      derniereTentative: FieldValue.serverTimestamp(),
      ...(reussites > 0
        ? { dernierSucces: FieldValue.serverTimestamp(), dernierNombre: reussites, enEchec: false }
        : { enEchec: true }),
      incidents: incidents.slice(0, 20)
    },
    { merge: true }
  )

  logger.info('Classements collectés', { competitions: reussites, incidents: incidents.length, detail: incidents })
  return { competitions: reussites, incidents }
}

/**
 * Deux passages quotidiens : après les matchs du soir et en fin de matinée,
 * ce qui couvre les rencontres de week-end en journée.
 */
export const collecteClassements = onSchedule(
  {
    schedule: '30 7,23 * * *',
    timeZone: 'Europe/Paris',
    region: REGION,
    memory: '256MiB',
    timeoutSeconds: 540,
    retryCount: 1
  },
  async () => {
    await collecterClassements()
  }
)

export const rafraichirClassements = onCall(
  { region: REGION, memory: '256MiB', timeoutSeconds: 300 },
  async (requete) => {
    if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi pour rafraîchir les classements.')

    const membre = await db.doc(chemins.utilisateur(requete.auth.uid)).get()
    if (!membre.exists) throw new HttpsError('permission-denied', "Ce compte n'appartient pas à l'équipe.")

    const resultat = await collecterClassements()
    return { ok: true, ...resultat }
  }
)
