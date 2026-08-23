import { memeEquipe, idMatch } from './normalize.js'

export const STATUTS = {
  CONFIRME: 'confirme',
  A_VERIFIER: 'a_verifier',
  MANQUANT: 'manquant'
}

const TOLERANCE_MS = 90 * 60 * 1000 // deux sources peuvent annoncer un horaire décalé

/**
 * Rapproche les rencontres des deux sources.
 * Une chaîne annoncée par les deux sources est confirmée ;
 * une chaîne vue par une seule est marquée à vérifier.
 */
export function fusionner(parSource) {
  const groupes = new Map()

  for (const [source, rencontres] of Object.entries(parSource)) {
    for (const rencontre of rencontres) {
      const existant = trouverGroupe(groupes, rencontre)

      if (existant) {
        existant.observations.push({ source, ...rencontre })
      } else {
        const id = idMatch(rencontre.debutISO, rencontre.domicile, rencontre.exterieur)
        groupes.set(id, {
          id,
          reference: rencontre,
          observations: [{ source, ...rencontre }]
        })
      }
    }
  }

  return [...groupes.values()].map(construireDiffusion)
}

function trouverGroupe(groupes, rencontre) {
  const instant = Date.parse(rencontre.debutISO)

  for (const groupe of groupes.values()) {
    const ref = groupe.reference
    const memeAffiche =
      (memeEquipe(ref.domicile, rencontre.domicile) && memeEquipe(ref.exterieur, rencontre.exterieur)) ||
      (memeEquipe(ref.domicile, rencontre.exterieur) && memeEquipe(ref.exterieur, rencontre.domicile))

    if (!memeAffiche) continue
    if (Math.abs(Date.parse(ref.debutISO) - instant) > TOLERANCE_MS) continue
    return groupe
  }

  return null
}

function construireDiffusion(groupe) {
  const { id, reference, observations } = groupe

  // Décompte des chaînes par source distincte.
  const votes = new Map()
  for (const observation of observations) {
    for (const chaine of observation.chaines) {
      const entree = votes.get(chaine) || { chaine, sources: new Set() }
      entree.sources.add(observation.source)
      votes.set(chaine, entree)
    }
  }

  const chaines = [...votes.values()]
    .map(({ chaine, sources }) => ({
      nom: chaine,
      sources: [...sources],
      statut: sources.size >= 2 ? STATUTS.CONFIRME : STATUTS.A_VERIFIER
    }))
    .sort((a, b) => b.sources.length - a.sources.length)

  const statut = chaines.length === 0
    ? STATUTS.MANQUANT
    : chaines.some((c) => c.statut === STATUTS.CONFIRME)
      ? STATUTS.CONFIRME
      : STATUTS.A_VERIFIER

  // Compétition : la première renseignée parmi les observations.
  const competition = observations.map((o) => o.competition).find(Boolean) || null

  return {
    id,
    domicile: reference.domicile,
    exterieur: reference.exterieur,
    debutISO: reference.debutISO,
    competition,
    chaines,
    statut,
    sources: [...new Set(observations.map((o) => o.source))],
    liens: observations.filter((o) => o.url).map((o) => ({ source: o.source, url: o.url }))
  }
}
