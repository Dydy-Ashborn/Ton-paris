import { memeEquipe } from '../lib/normalize.js'

export const NOM_SOURCE = 'API-Football'

const BASE_URL = 'https://v3.football.api-sports.io'

/**
 * Statuts "en cours" d'API-Football (code court renvoyé dans
 * fixtures[].fixture.status.short) — voir leur documentation "Match Status
 * Codes". On y ajoute HT (mi-temps) et les prolongations/tab pour ne pas
 * faire disparaître le match de l'écran pendant ces phases.
 */
const STATUTS_EN_COURS = new Set(['1H', 'HT', '2H', 'ET', 'BT', 'P', 'LIVE'])
const STATUTS_TERMINES = new Set(['FT', 'AET', 'PEN'])

/**
 * Interroge l'endpoint fixtures pour une date donnée (toutes compétitions,
 * un seul appel quel que soit le nombre de clubs suivis — voir
 * collecteScoresDirect.js pour le calcul de quota). `cle` est la clé API
 * API-Football (variable d'environnement API_FOOTBALL_KEY).
 */
async function appellerFixturesDuJour(dateISO, cle) {
  const url = `${BASE_URL}/fixtures?date=${dateISO}&timezone=Europe/Paris`

  const controleur = new AbortController()
  const minuterie = setTimeout(() => controleur.abort(), 10000)

  try {
    const reponse = await fetch(url, {
      signal: controleur.signal,
      headers: { 'x-apisports-key': cle }
    })

    if (!reponse.ok) throw new Error(`HTTP ${reponse.status}`)

    const corps = await reponse.json()

    // API-Football répond 200 même en cas de souci (clé invalide, quota
    // dépassé) : les erreurs remontent dans `errors` (objet ou tableau selon
    // le cas). On les traite comme un échec explicite plutôt que de renvoyer
    // silencieusement une liste vide qui masquerait le problème.
    const erreurs = corps.errors
    const aDesErreurs = erreurs && (Array.isArray(erreurs) ? erreurs.length > 0 : Object.keys(erreurs).length > 0)
    if (aDesErreurs) throw new Error(`API-Football: ${JSON.stringify(erreurs)}`)

    return corps.response || []
  } finally {
    clearTimeout(minuterie)
  }
}

function mapperStatut(statutCourt) {
  if (STATUTS_TERMINES.has(statutCourt)) return { enCours: false, termine: true }
  if (STATUTS_EN_COURS.has(statutCourt)) return { enCours: true, termine: false }
  return { enCours: false, termine: false } // à venir, reporté, annulé...
}

/** Convertit une entrée fixtures[] d'API-Football vers le format interne du live. */
function mapperMatch(entree) {
  const { fixture, teams, goals } = entree
  const { enCours, termine } = mapperStatut(fixture.status?.short)

  return {
    idBrut: `apifootball_${fixture.id}`,
    domicile: teams.home?.name || '',
    exterieur: teams.away?.name || '',
    scoreDomicile: goals.home,
    scoreExterieur: goals.away,
    enCours,
    minute: fixture.status?.elapsed ?? null,
    termine,
    competition: entree.league?.name || null
  }
}

/**
 * Récupère les matchs du jour (heure de Paris) et ne garde que ceux
 * impliquant au moins un des clubs passés en paramètre — même filtrage par
 * libellé que l'ancienne source maxifootLive.js (memeEquipe), pour rester
 * cohérent avec le catalogue local (functions/config clubs) sans avoir à
 * maintenir un mapping id-club → id-API-Football pour chacun des ~96 clubs
 * du catalogue.
 */
export async function recupererMatchsClubsDuJour({ dateISO, libellesClubs, cle }) {
  const tousLesMatchs = await appellerFixturesDuJour(dateISO, cle)

  return tousLesMatchs
    .map(mapperMatch)
    .filter((match) =>
      libellesClubs.some((libelle) => memeEquipe(match.domicile, libelle) || memeEquipe(match.exterieur, libelle))
    )
}

/**
 * Variante non filtrée de recupererMatchsClubsDuJour : renvoie TOUS les
 * matchs du jour, toutes compétitions et tous clubs confondus — utilisée
 * par collecteResultatsMatchs.js pour compléter les scores finaux de
 * l'onglet Matchs, qui n'est plus filtré par club suivi (voir Matchs.jsx).
 * Même coût qu'un appel filtré (un seul appel API par passage).
 */
export async function recupererTousLesMatchsDuJour({ dateISO, cle }) {
  const tousLesMatchs = await appellerFixturesDuJour(dateISO, cle)
  return tousLesMatchs.map(mapperMatch)
}
