import { onSchedule } from 'firebase-functions/v2/scheduler'
import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { logger } from 'firebase-functions/v2'
import { FieldValue } from 'firebase-admin/firestore'
import { db, chemins, TENANT_ID } from './lib/admin.js'
import { pause } from './lib/http.js'
import { fusionner } from './lib/fusion.js'
import { clubsASurveiller } from './lib/clubs.js'
import * as matchsTv from './sources/matchsTv.js'
import * as footmercato from './sources/footmercato.js'

const REGION = 'europe-west9'
const PAUSE_ENTRE_APPELS = 700 // on n'assomme pas les sources

/** Interroge les deux sources pour un club et rend les rencontres par source. */
async function collecterPourClub(club) {
  const parSource = {}
  const incidents = []

  if (club.slugMatchsTv) {
    try {
      parSource[matchsTv.NOM_SOURCE] = await matchsTv.scraperClub(club.slugMatchsTv)
    } catch (e) {
      incidents.push({ source: matchsTv.NOM_SOURCE, club: club.id, message: e.message })
    }
    await pause(PAUSE_ENTRE_APPELS)
  }

  if (club.slugFootmercato) {
    try {
      parSource[footmercato.NOM_SOURCE] = await footmercato.scraperClub(club.slugFootmercato)
    } catch (e) {
      incidents.push({ source: footmercato.NOM_SOURCE, club: club.id, message: e.message })
    }
    await pause(PAUSE_ENTRE_APPELS)
  }

  return { parSource, incidents }
}

/** Cœur du traitement, partagé par le cron et le rafraîchissement manuel. */
async function collecterDiffusions() {
  const clubs = await clubsASurveiller()
  if (clubs.length === 0) {
    logger.warn('Aucun club suivi : rien à collecter.')
    return { clubs: 0, matchs: 0, incidents: [] }
  }

  const tousIncidents = []
  const parIdentifiant = new Map()
  const reussitesParSource = {}

  for (const club of clubs) {
    const { parSource, incidents } = await collecterPourClub(club)
    tousIncidents.push(...incidents)

    for (const [source, rencontres] of Object.entries(parSource)) {
      reussitesParSource[source] = (reussitesParSource[source] || 0) + rencontres.length
    }

    for (const diffusion of fusionner(parSource)) {
      const existante = parIdentifiant.get(diffusion.id)
      // Un même match peut remonter via deux clubs suivis : on garde la version la mieux renseignée.
      if (!existante || diffusion.chaines.length > existante.chaines.length) {
        parIdentifiant.set(diffusion.id, { ...diffusion, clubs: [club.id] })
      } else if (!existante.clubs.includes(club.id)) {
        existante.clubs.push(club.id)
      }
    }
  }

  const diffusions = [...parIdentifiant.values()]
  let ecrites = 0

  for (let debut = 0; debut < diffusions.length; debut += 200) {
    const tranche = diffusions.slice(debut, debut + 200)

    // Une chaîne corrigée à la main fait autorité : la collecte ne l'écrase pas.
    const existantes = await Promise.all(
      tranche.map((diffusion) => db.doc(chemins.diffusion(diffusion.id)).get())
    )

    const lot = db.batch()

    tranche.forEach((diffusion, index) => {
      const precedente = existantes[index]
      const corrigee = precedente.exists && precedente.data().corrigeeManuellement === true

      const donnees = {
        domicile: diffusion.domicile,
        exterieur: diffusion.exterieur,
        debut: new Date(diffusion.debutISO),
        debutISO: diffusion.debutISO,
        competition: diffusion.competition,
        clubs: diffusion.clubs,
        liens: diffusion.liens,
        sources: diffusion.sources,
        collecteLe: FieldValue.serverTimestamp()
      }

      if (!corrigee) {
        donnees.chaines = diffusion.chaines
        donnees.statut = diffusion.statut
      } else {
        // On conserve la correction, mais on garde trace de ce que les sources annoncent.
        donnees.chainesDetectees = diffusion.chaines
      }

      lot.set(db.doc(chemins.diffusion(diffusion.id)), donnees, { merge: true })
      ecrites++
    })

    await lot.commit()
  }

  await journaliser(reussitesParSource, tousIncidents, clubs.length, ecrites)

  logger.info('Collecte terminée', { clubs: clubs.length, matchs: ecrites, incidents: tousIncidents.length })
  return { clubs: clubs.length, matchs: ecrites, incidents: tousIncidents }
}

/**
 * Journal de santé : permet de repérer une source qui ne renvoie plus rien
 * avant de s'en apercevoir un soir de match.
 */
async function journaliser(reussitesParSource, incidents, nbClubs, nbMatchs) {
  const maintenant = FieldValue.serverTimestamp()
  const lot = db.batch()

  for (const source of [matchsTv.NOM_SOURCE, footmercato.NOM_SOURCE]) {
    const rencontres = reussitesParSource[source] || 0
    const ref = db.doc(chemins.journal(source))

    lot.set(
      ref,
      {
        source,
        derniereTentative: maintenant,
        ...(rencontres > 0
          ? { dernierSucces: maintenant, dernierNombre: rencontres, enEchec: false }
          : { enEchec: true })
      },
      { merge: true }
    )
  }

  lot.set(
    db.doc(chemins.journal('_derniere_execution')),
    {
      terminee: maintenant,
      clubs: nbClubs,
      matchs: nbMatchs,
      incidents: incidents.slice(0, 20)
    },
    { merge: true }
  )

  await lot.commit()
}

/** Cron quotidien : une seule exécution, rien ne tourne entre-temps. */
export const collecteQuotidienne = onSchedule(
  {
    schedule: '0 7 * * *',
    timeZone: 'Europe/Paris',
    region: REGION,
    memory: '512MiB',
    timeoutSeconds: 540,
    retryCount: 1
  },
  async () => {
    await collecterDiffusions()
  }
)

/** Rafraîchissement manuel depuis l'app, quand une chaîne manque avant un match. */
export const rafraichirDiffusions = onCall(
  { region: REGION, memory: '512MiB', timeoutSeconds: 300 },
  async (requete) => {
    if (!requete.auth) {
      throw new HttpsError('unauthenticated', 'Connecte-toi pour rafraîchir le programme.')
    }

    const membre = await db.doc(chemins.utilisateur(requete.auth.uid)).get()
    if (!membre.exists) {
      throw new HttpsError('permission-denied', "Ce compte n'appartient pas à l'équipe.")
    }

    const resultat = await collecterDiffusions()
    return { ok: true, ...resultat }
  }
)

/** Correction manuelle d'une chaîne : elle prime sur les prochaines collectes. */
export const corrigerChaine = onCall(
  { region: REGION },
  async (requete) => {
    if (!requete.auth) {
      throw new HttpsError('unauthenticated', 'Connecte-toi pour corriger une chaîne.')
    }

    const membre = await db.doc(chemins.utilisateur(requete.auth.uid)).get()
    if (!membre.exists) {
      throw new HttpsError('permission-denied', "Ce compte n'appartient pas à l'équipe.")
    }

    const { matchId, chaine } = requete.data || {}
    if (!matchId || typeof chaine !== 'string' || !chaine.trim()) {
      throw new HttpsError('invalid-argument', 'Indique le match et le nom de la chaîne.')
    }

    await db.doc(chemins.diffusion(matchId)).set(
      {
        chaines: [{ nom: chaine.trim(), sources: ['manuel'], statut: 'confirme' }],
        statut: 'confirme',
        corrigeeManuellement: true,
        corrigeePar: requete.auth.uid,
        corrigeeLe: FieldValue.serverTimestamp()
      },
      { merge: true }
    )

    return { ok: true }
  }
)
