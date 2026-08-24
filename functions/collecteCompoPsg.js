import { onSchedule } from 'firebase-functions/v2/scheduler'
import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { onDocumentCreated } from 'firebase-functions/v2/firestore'
import { logger } from 'firebase-functions/v2'
import { FieldValue } from 'firebase-admin/firestore'
import { db, chemins, TENANT_ID } from './lib/admin.js'
import { envoyerUneFois } from './lib/push.js'
import { listerNewsPsg } from './sources/maxifootNews.js'
import { estBreveCompoPsg, estCompoOfficielle, scraperCompoPsg } from './sources/maxifootCompo.js'

const REGION = 'europe-west9'

/**
 * Compo PSG : Maxifoot publie deux brèves par match (voir maxifootCompo.js
 * pour le détail) — la "probable" le matin/la veille, puis l'"officielle"
 * environ une heure avant le coup d'envoi une fois les feuilles de match
 * connues. On les traite comme deux entités séparées, stockées dans deux
 * documents distincts (compoProbable/psg et compoOfficielle/psg) avec
 * chacune sa propre notif, plutôt que l'officielle n'écrase la probable
 * sans que l'utilisateur sache que le statut a changé.
 *
 * On repère les deux brèves parmi celles déjà listées par
 * news.maxifoot.fr (même flux que collecteMaxifootNews.js, pas de fetch
 * supplémentaire pour la liste elle-même).
 */
async function collecterUnType({ breve, cheminDoc, cle, titreNotif, joueursEffectif }) {
  if (!breve) return { trouvee: false }

  const existant = await db.doc(cheminDoc).get()
  const donneesExistantes = existant.exists ? existant.data() : null

  if (donneesExistantes?.lien === breve.lien) {
    return { trouvee: true, inchangee: true }
  }

  const compo = await scraperCompoPsg(breve.lien, joueursEffectif)
  if (!compo || compo.titulaires.length === 0) {
    return { trouvee: true, vide: true }
  }

  await db.doc(cheminDoc).set({
    titreBreve: breve.titre,
    lien: breve.lien,
    schema: compo.schema,
    titulaires: compo.titulaires,
    banc: compo.banc,
    collecteLe: FieldValue.serverTimestamp()
  })

  await notifierNouvelleCompo(cle, titreNotif, breve.titre)

  logger.info('Nouvelle compo PSG collectée', { type: cle, titre: breve.titre, schema: compo.schema })

  return { trouvee: true, nouvelle: true, joueurs: compo.titulaires.length }
}

/** Effectif déjà collecté (tenants/{tenant}/effectifs/psg), pour enrichir les titulaires de la compo (photo, id, poste précis). */
async function chargerEffectifPsg() {
  const doc = await db.doc(chemins.effectif('psg')).get()
  return doc.exists ? doc.data().joueurs || [] : []
}

async function collecter() {
  const [entrees, joueursEffectif] = await Promise.all([listerNewsPsg(), chargerEffectifPsg()])
  const breves = entrees.filter(estBreveCompoPsg)
  const breveProbable = breves.find((e) => !estCompoOfficielle(e))
  const breveOfficielle = breves.find(estCompoOfficielle)

  const [probable, officielle] = await Promise.all([
    collecterUnType({
      breve: breveProbable,
      cheminDoc: chemins.compoProbable('psg'),
      cle: 'compoProbable',
      titreNotif: 'Compo probable disponible',
      joueursEffectif
    }),
    collecterUnType({
      breve: breveOfficielle,
      cheminDoc: chemins.compoOfficielle('psg'),
      cle: 'compoOfficielle',
      titreNotif: 'Compo officielle disponible',
      joueursEffectif
    })
  ])

  return { probable, officielle }
}

/** Même pattern que notifications.js : un membre = ses préférences, un envoi déduplié par clé. */
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

async function notifierNouvelleCompo(reglageCle, titreNotif, titreBreve) {
  const membres = await membresAvecPreferences()
  // Clé stable par brève (pas par date d'envoi) : si la fonction est
  // relancée après un échec partiel, on ne double pas les notifs déjà
  // parties. Le préfixe (probable/officielle) évite toute collision entre
  // les deux types alors que le titre de brève ne diffère que d'un mot.
  const cle = `${reglageCle}_${titreBreve.toLowerCase().replace(/[^a-z0-9]+/g, '_').slice(0, 80)}`

  for (const { uid, preferences } of membres) {
    if (preferences.notifications?.[reglageCle] === false) continue

    await envoyerUneFois(uid, cle, {
      titre: titreNotif,
      corps: titreBreve,
      lien: '/compo',
      etiquette: 'compo_psg'
    })
  }
}

/**
 * La probable sort la veille/le matin, l'officielle environ une heure
 * avant le coup d'envoi : un cron toutes les 30 minutes couvre les deux
 * fenêtres sans bombarder Maxifoot le reste du temps.
 */
export const collecteCompoPsg = onSchedule(
  {
    schedule: '*/30 * * * *',
    timeZone: 'Europe/Paris',
    region: REGION,
    memory: '256MiB',
    timeoutSeconds: 120,
    retryCount: 1
  },
  async () => {
    try {
      await collecter()
    } catch (e) {
      logger.error('Collecte compo PSG échouée', { message: e.message })
    }
  }
)

/**
 * Déclenchement immédiat à la publication d'une brève compo, au lieu
 * d'attendre jusqu'à 30 min le prochain passage du cron ci-dessus — même
 * principe que notifActu dans notifications.js : onDocumentCreated sur la
 * collection `news`, qui se déclenche dès que collecteMaxifootNews.js
 * écrit le nouvel article. On ne relance pas collecter() pour CHAQUE actu
 * PSG créée (la grande majorité n'a rien à voir avec une compo) : le même
 * filtre de titre que collecter() (estBreveCompoPsg) sort immédiatement
 * pour les actus non concernées, avant tout scraping. collecter() reste
 * sûr à appeler plusieurs fois de suite (collecterUnType compare le lien
 * de la brève déjà en base et ne re-scrape/ne renotifie pas si inchangé),
 * donc pas de risque de doublon si ce déclencheur et le cron se
 * chevauchent.
 */
export const declencherCompoSurNouvelleActu = onDocumentCreated(
  {
    document: `tenants/${TENANT_ID}/news/{actuId}`,
    region: REGION,
    memory: '256MiB',
    timeoutSeconds: 120
  },
  async (evenement) => {
    const actu = evenement.data?.data()
    if (!actu || !estBreveCompoPsg(actu)) return

    try {
      await collecter()
    } catch (e) {
      logger.error('Collecte compo PSG (déclenchée par nouvelle actu) échouée', { message: e.message })
    }
  }
)

/** Rafraîchissement manuel depuis l'app. */
export const rafraichirCompoPsg = onCall(
  { region: REGION, memory: '256MiB', timeoutSeconds: 60 },
  async (requete) => {
    if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi pour rafraîchir la compo.')

    const membre = await db.doc(chemins.utilisateur(requete.auth.uid)).get()
    if (!membre.exists) throw new HttpsError('permission-denied', "Ce compte n'appartient pas à l'équipe.")

    try {
      const resultat = await collecter()
      return { ok: true, ...resultat }
    } catch (e) {
      logger.error('Rafraîchissement compo PSG échoué', { message: e.message })
      throw new HttpsError('unavailable', `Échec du scraping compo : ${e.message}`)
    }
  }
)
