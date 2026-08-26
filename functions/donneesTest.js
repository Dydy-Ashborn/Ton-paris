/**
 * Callables de TEST — permettent de vérifier visuellement l'affichage de
 * la compo (terrain + bench) et des scores en direct sans attendre qu'un
 * vrai match PSG ait lieu. Gated comme diagnosticEffectif.js : connexion
 * obligatoire + config/debug.actif à true (voir hooks/useDebug.js côté
 * client) — jamais exécutable ni visible en dehors du mode debug.
 *
 * injecterCompoTest/effacerCompoTest/injecterScoreTest/effacerScoreTest
 * n'envoient AUCUNE notification (ce sont des données fictives, notifier
 * dessus polluerait les vrais réglages de notif de l'utilisateur).
 * envoyerNotifTest (plus bas) fait l'inverse par construction : c'est SON
 * seul but, envoyer une vraie notif à l'appareil de l'utilisateur qui
 * clique, pour vérifier que la chaîne complète (jeton FCM enregistré →
 * Cloud Function → notification reçue) fonctionne, sans attendre un vrai
 * déclencheur (match, actu...).
 */
import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { FieldValue } from 'firebase-admin/firestore'
import { db, chemins } from './lib/admin.js'
import { extraireCompoPsg } from './sources/maxifootCompo.js'
import { scraperMatchsLive } from './sources/maxifootLive.js'
import { envoyer } from './lib/push.js'

const REGION = 'europe-west9'

async function verifierDebugActif(uid) {
  const membre = await db.doc(chemins.utilisateur(uid)).get()
  if (!membre.exists) throw new HttpsError('permission-denied', "Ce compte n'appartient pas à l'équipe.")

  const debug = await db.doc(chemins.config('debug')).get()
  if (!debug.exists || debug.data().actif !== true) {
    throw new HttpsError('failed-precondition', 'Mode debug désactivé (config/debug.actif).')
  }
}

/**
 * Ids réels des préférences de l'utilisateur qui déclenche le test — les
 * scénarios ne peuvent pas utiliser des ids en dur ('psg', 'om') car
 * useScoresDirect() côté client filtre matchFavori sur
 * preferences.clubFavori.id, l'id réel du catalogue choisi par
 * l'utilisateur, qui ne correspond pas forcément à ces libellés.
 */
async function idsClubsUtilisateur(uid) {
  const prefs = await db.doc(chemins.preferences(uid)).get()
  const donnees = prefs.exists ? prefs.data() : {}
  const favoriId = donnees.clubFavori?.id || null
  const autreId = (donnees.clubsSuivis || []).find((c) => c.id && c.id !== favoriId)?.id || null
  return { favoriId, autreId }
}

// Même format de texte que la vraie brève Maxifoot ("<b>Paris SG</b> : ...")
// passé tel quel à extraireCompoPsg(), pour que le jeu de test emprunte
// exactement le même chemin de parsing que la vraie collecte plutôt que de
// reconstruire {schema, titulaires, banc} à la main (qui pourrait diverger
// du vrai format sans qu'on s'en aperçoive).
const TEXTE_COMPO_4_3_3 =
  '<b>Paris SG</b> : Safonov - Hakimi, Marquinhos, Pacho, Digne - Zaïre-Emery, Vitinha, Neves - Doué, Dembélé, Kvaratskhelia.</p>'

const BANC_TEST = [
  'Chevalier', 'Beraldo', 'Lucas Hernandez', 'Ruiz', 'Lee',
  'Barcola', 'Ramos', 'Mayulu', 'Mbaye'
]

/** Écrit une compo de test dans compoProbable/psg ou compoOfficielle/psg. */
export const injecterCompoTest = onCall(
  { region: REGION, memory: '256MiB', timeoutSeconds: 30 },
  async (requete) => {
    if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi.')
    await verifierDebugActif(requete.auth.uid)

    const officielle = requete.data?.officielle === true
    const adversaire = requete.data?.adversaire || 'Rennes'

    // Même enrichissement photo/id/poste que la vraie collecte (voir
    // collecteCompoPsg.js), pour que le jeu de test montre aussi les
    // photos sur le terrain et ouvre la vraie fiche joueur au clic.
    const effectifDoc = await db.doc(chemins.effectif('psg')).get()
    const joueursEffectif = effectifDoc.exists ? effectifDoc.data().joueurs || [] : []

    const compo = extraireCompoPsg(TEXTE_COMPO_4_3_3, joueursEffectif)
    if (!compo) throw new HttpsError('internal', 'Échec de génération de la compo de test.')

    const cheminDoc = officielle ? chemins.compoOfficielle('psg') : chemins.compoProbable('psg')
    const titreBreve = `L1 : ${adversaire}-Paris SG, les compos${officielle ? '' : ' probables'} (TEST)`

    await db.doc(cheminDoc).set({
      titreBreve,
      lien: 'https://news.maxifoot.fr/donnee-de-test',
      schema: compo.schema,
      titulaires: compo.titulaires,
      banc: BANC_TEST,
      collecteLe: FieldValue.serverTimestamp(),
      test: true
    })

    return { ok: true, type: officielle ? 'officielle' : 'probable', joueurs: compo.titulaires.length }
  }
)

/** Efface les documents de compo de test (probable + officielle). */
export const effacerCompoTest = onCall(
  { region: REGION, memory: '256MiB', timeoutSeconds: 30 },
  async (requete) => {
    if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi.')
    await verifierDebugActif(requete.auth.uid)

    for (const cheminDoc of [chemins.compoProbable('psg'), chemins.compoOfficielle('psg')]) {
      const doc = await db.doc(cheminDoc).get()
      if (doc.exists && doc.data().test === true) await db.doc(cheminDoc).delete()
    }

    return { ok: true }
  }
)

// Scénarios couvrant les cas d'affichage à vérifier : le club favori en
// direct (gros bandeau), un autre club suivi en direct (bandeau discret),
// et les deux en même temps. Générés dynamiquement avec les VRAIS ids de
// club de l'utilisateur qui déclenche le test (voir idsClubsUtilisateur) —
// des ids en dur ('psg', 'om') ne matchaient jamais preferences.clubFavori.id
// côté client, donc matchFavori restait toujours null.
function construireScenarios({ favoriId, autreId }) {
  const matchFavoriTest = { idBrut: 'test_1', domicile: 'Ton club', exterieur: 'Adversaire test', scoreDomicile: 2, scoreExterieur: 1, enCours: true, minute: 63, termine: false, competition: 'Ligue 1', clubs: favoriId ? [favoriId] : [] }
  const matchAutreTest = { idBrut: 'test_2', domicile: 'Autre club suivi', exterieur: 'Adversaire test 2', scoreDomicile: 0, scoreExterieur: 0, enCours: true, minute: 12, termine: false, competition: 'Ligue 1', clubs: autreId ? [autreId] : [] }
  const matchFavoriTermine = { ...matchFavoriTest, scoreDomicile: 3, enCours: false, minute: null, termine: true }

  return {
    favori: [matchFavoriTest],
    autre: [matchAutreTest],
    les_deux: [matchFavoriTest, matchAutreTest],
    termine: [matchFavoriTermine]
  }
}

/**
 * Écrit un jeu de scores live factice dans tenants/{tenant}/live/scores —
 * exactement le doc que lit useScoresDirect côté client.
 */
export const injecterScoreTest = onCall(
  { region: REGION, memory: '256MiB', timeoutSeconds: 30 },
  async (requete) => {
    if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi.')
    await verifierDebugActif(requete.auth.uid)

    const { favoriId, autreId } = await idsClubsUtilisateur(requete.auth.uid)
    if (!favoriId) {
      throw new HttpsError('failed-precondition', "Choisis d'abord un club favori dans Réglages pour tester le bandeau live.")
    }

    const scenario = requete.data?.scenario || 'favori'

    // Scénario spécial : au lieu d'un match fictif, scrape RÉELLEMENT
    // maxifoot-live.com (voir sources/maxifootLive.js) et affiche le
    // premier match en cours trouvé — n'importe lequel, pas seulement un
    // club suivi — sous l'étiquette du club favori. Sert à vérifier que le
    // scraper analyse toujours correctement le HTML actuel du site sans
    // attendre qu'un club suivi joue réellement (voir collecteScoresDirect.js
    // pour le même scraper utilisé en production).
    if (scenario === 'reel') {
      const tousLesMatchs = await scraperMatchsLive()
      const match = tousLesMatchs.find((m) => m.enCours) || tousLesMatchs[0]
      if (!match) {
        throw new HttpsError('failed-precondition', 'Aucun match trouvé sur maxifoot-live.com pour le moment.')
      }

      await db.doc(chemins.scoresDirect()).set({
        matchs: [{ ...match, clubs: [favoriId] }],
        testExpireLe: Date.now() + 10 * 60 * 1000,
        collecteLe: FieldValue.serverTimestamp(),
        test: true,
        source: 'maxifoot-live-test-reel'
      })

      return {
        ok: true,
        scenario,
        matchs: 1,
        match: `${match.domicile} ${match.scoreDomicile ?? '?'}-${match.scoreExterieur ?? '?'} ${match.exterieur}`,
        enCours: match.enCours
      }
    }

    const scenarios = construireScenarios({ favoriId, autreId })
    const matchs = scenarios[scenario]
    if (!matchs) {
      throw new HttpsError('invalid-argument', `Scénario inconnu : ${scenario}. Choix possibles : ${Object.keys(scenarios).join(', ')}, reel.`)
    }

    if (scenario === 'autre' && !autreId) {
      throw new HttpsError('failed-precondition', "Suis au moins un second club (en plus du favori) dans Réglages pour tester ce scénario.")
    }

    await db.doc(chemins.scoresDirect()).set({
      matchs,
      // Expiration courte : le cron collecteScoresDirect() tourne chaque
      // minute et écrirait sinon [] par-dessus dès son prochain passage
      // (aucun vrai match en cours pendant un test). Tant que ce champ est
      // dans le futur, le cron laisse le doc de test tel quel — voir le
      // garde-fou ajouté dans collecteScoresDirect.js.
      testExpireLe: Date.now() + 10 * 60 * 1000,
      collecteLe: FieldValue.serverTimestamp(),
      test: true
    })

    return { ok: true, scenario, matchs: matchs.length }
  }
)

/** Vide le doc de scores live (retour à l'état "rien en cours"). */
export const effacerScoreTest = onCall(
  { region: REGION, memory: '256MiB', timeoutSeconds: 30 },
  async (requete) => {
    if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi.')
    await verifierDebugActif(requete.auth.uid)

    await db.doc(chemins.scoresDirect()).set({ matchs: [], collecteLe: FieldValue.serverTimestamp() })

    return { ok: true }
  }
)

// Un scénario par type RÉEL de notification (voir notifications.js) — texte
// figé sur un exemple plausible (match Paris SG-Marseille, actu mercato)
// plutôt que d'aller chercher un vrai match/une vraie actu en base : le but
// est de voir le RENDU exact (titre/corps/mise en forme) de chaque type sur
// l'appareil pour pouvoir le peaufiner, pas de tester la logique de
// sélection des matchs/actus (déjà couverte par injecterCompoTest/
// injecterScoreTest). DEMANDÉ EN SESSION : "tester chaque type de notif
// pour pouvoir les personnaliser ensuite" — un bouton par type dans
// Réglages (voir PanneauTest côté client), chacun passant son `type` ici.
// Formats copiés EXACTEMENT de notifications.js pour que le test reflète ce
// que l'utilisateur recevra vraiment :
//  - matin  → notifMatin(), cas un seul match (voir `corps` ligne ~103)
//  - avant  → notifRappels(), rappel "dans une heure" (ligne ~158)
//  - envoi  → notifRappels(), rappel "coup d'envoi" (ligne ~169)
//  - actu   → notifActu() (ligne ~213), titre = categorie/source, corps = titre de l'actu
const SCENARIOS_NOTIF_TEST = {
  matin: {
    titre: "Match aujourd'hui",
    corps: 'Paris SG – Marseille à 21:00 sur beIN Sports 1.',
    lien: '/'
  },
  avant: {
    titre: 'Paris SG – Marseille dans une heure',
    corps: '21:00 sur beIN Sports 1.',
    lien: '/matchs'
  },
  envoi: {
    titre: 'Ça commence',
    corps: 'Paris SG – Marseille sur beIN Sports 1.',
    lien: '/matchs'
  },
  actu: {
    titre: 'Mercato',
    corps: "Le PSG annonce la signature d'un nouveau crack estimé à 40M€.",
    lien: '/'
  }
}

/**
 * Envoie une VRAIE notification push à l'utilisateur qui appelle (ses
 * appareils enregistrés, voir enregistrerAppareil dans notifications.js) —
 * DEMANDÉ EN SESSION ("des boutons de test pour lancer des notifs, plus
 * simple") : évite d'avoir à écrire à la main un faux document dans
 * Firestore (tenants/{tenantId}/news/...) juste pour déclencher notifActu
 * et vérifier que la notif arrive bien sur l'appareil. envoyer() directement
 * (PAS envoyerUneFois) : pas de garde-fou anti-doublon ici, les boutons
 * doivent rester utilisables à volonté pour retester sans jamais être
 * bloqués par un identifiant déjà "envoyé".
 *
 * `type` (voir SCENARIOS_NOTIF_TEST ci-dessus) choisit LEQUEL des 4 formats
 * réels tester ; absent/inconnu → notif générique de test (comportement
 * d'origine, conservé pour vérifier juste que la chaîne bout-en-bout marche
 * sans se soucier du contenu).
 */
export const envoyerNotifTest = onCall(
  { region: REGION, memory: '256MiB', timeoutSeconds: 30 },
  async (requete) => {
    if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi.')
    await verifierDebugActif(requete.auth.uid)

    const type = requete.data?.type || 'generique'
    const scenario = SCENARIOS_NOTIF_TEST[type] || {
      titre: 'Notification de test',
      corps: 'Si tu vois ça, les notifications marchent sur cet appareil.',
      lien: '/'
    }

    const resultat = await envoyer(requete.auth.uid, { ...scenario, etiquette: `test_${type}` })

    if (resultat.envoyes === 0) {
      throw new HttpsError(
        'failed-precondition',
        "Aucun appareil enregistré — active d'abord les notifications dans Réglages."
      )
    }

    return { ...resultat, type }
  }
)
