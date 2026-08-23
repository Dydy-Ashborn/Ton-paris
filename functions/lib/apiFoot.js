/**
 * Client Football-Data.org.
 * Le palier gratuit tolère environ 10 requêtes par minute :
 * une pause est intercalée entre chaque compétition.
 */
const BASE = 'https://api.football-data.org/v4'

export async function appelerApi(chemin, cle, { delaiMs = 12000 } = {}) {
  const controleur = new AbortController()
  const minuterie = setTimeout(() => controleur.abort(), delaiMs)

  try {
    const reponse = await fetch(`${BASE}${chemin}`, {
      signal: controleur.signal,
      headers: { 'X-Auth-Token': cle }
    })

    if (reponse.status === 429) throw new Error('Quota API atteint')
    if (reponse.status === 403) throw new Error('Compétition non incluse dans le palier gratuit')
    if (!reponse.ok) {
      // Le corps de la réponse football-data.org précise la vraie raison
      // (paramètre invalide, compétition inconnue…) : indispensable pour
      // diagnostiquer un 400, sinon impossible à distinguer d'un autre.
      const corps = await reponse.text().catch(() => '')
      throw new Error(`HTTP ${reponse.status} — ${corps.slice(0, 300)}`)
    }

    return await reponse.json()
  } finally {
    clearTimeout(minuterie)
  }
}

/** Extrait le tableau général d'une réponse standings. */
export function lireClassement(reponse) {
  const tables = reponse.standings || []

  // Championnat : une seule table de type TOTAL.
  const general = tables.find((t) => t.type === 'TOTAL' && !t.group)
  if (general) {
    return {
      format: 'championnat',
      groupes: [{ libelle: null, lignes: general.table.map(lireLigne) }]
    }
  }

  // Coupe d'Europe : phase de ligue unique ou plusieurs groupes.
  const groupes = tables
    .filter((t) => t.type === 'TOTAL')
    .map((t) => ({ libelle: t.group || t.stage || null, lignes: t.table.map(lireLigne) }))

  return { format: 'groupes', groupes }
}

function lireLigne(ligne) {
  return {
    position: ligne.position,
    equipe: ligne.team?.shortName || ligne.team?.name || '',
    nomComplet: ligne.team?.name || '',
    joues: ligne.playedGames ?? 0,
    gagnes: ligne.won ?? 0,
    nuls: ligne.draw ?? 0,
    perdus: ligne.lost ?? 0,
    marques: ligne.goalsFor ?? 0,
    encaisses: ligne.goalsAgainst ?? 0,
    difference: ligne.goalDifference ?? 0,
    points: ligne.points ?? 0,
    forme: ligne.form || null
  }
}
