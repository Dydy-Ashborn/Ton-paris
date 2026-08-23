import { nomAffichage } from './equipes'

/**
 * Détermine pour qui un match compte, et à quel point.
 * Chacun a son propre flux : le calcul ne prend en compte
 * que les préférences de l'utilisateur connecté.
 */
export const PRIORITES = {
  CLUB_FAVORI: 1,
  AFFICHE_CROISEE: 2,
  CLUB_SUIVI: 3,
  SELECTION: 4
}

const CHEVAUCHEMENT_MS = 105 * 60 * 1000 // un match dure environ 1h45

function idsSuivis(preferences) {
  const ids = new Set()
  if (preferences?.clubFavori?.id) ids.add(preferences.clubFavori.id)
  for (const club of preferences?.clubsSuivis || []) if (club.id) ids.add(club.id)
  return ids
}

/** Rend { priorite, motif } ou null si le match ne concerne pas l'utilisateur. */
export function evaluer(diffusion, preferences) {
  const suivis = idsSuivis(preferences)
  const concernes = (diffusion.clubs || []).filter((id) => suivis.has(id))

  if (concernes.length === 0) return null

  const favoriId = preferences?.clubFavori?.id

  if (favoriId && concernes.includes(favoriId)) {
    return { priorite: PRIORITES.CLUB_FAVORI, motif: 'Ton club' }
  }

  if (concernes.length >= 2) {
    return { priorite: PRIORITES.AFFICHE_CROISEE, motif: 'Deux clubs que tu suis' }
  }

  const club = (preferences?.clubsSuivis || []).find((c) => c.id === concernes[0])
  return { priorite: PRIORITES.CLUB_SUIVI, motif: `Tu suis ${club?.court || club?.nom || 'ce club'}` }
}

/**
 * Trie et annote une liste de diffusions pour un utilisateur donné.
 *
 * `clubs` (catalogue complet, voir lib/catalogue.js chargerClubs) est
 * optionnel — quand fourni, domicile/exterieur sont réécrits avec le nom
 * COURT du catalogue ("Rennes", "Paris SG") au lieu du libellé brut de la
 * source de diffusion (tvBroadcasts, souvent le nom officiel complet :
 * "Stade Rennais FC", "Paris Saint-Germain") — pour que le même club
 * s'affiche avec le même nom partout dans l'app, y compris dans le bandeau
 * live (déjà en noms courts, voir maxifootLive.js) que ces mêmes matchs
 * peuvent aussi alimenter. Fait ici, une seule fois, plutôt que dans chaque
 * écran qui consomme recommander() (Accueil, Matchs...).
 */
export function recommander(diffusions, preferences, clubs) {
  const retenues = []

  for (const diffusion of diffusions) {
    if (!diffusion.debutISO) continue
    const evaluation = evaluer(diffusion, preferences)
    if (!evaluation) continue

    const affichage = clubs
      ? { domicile: nomAffichage(diffusion.domicile, clubs), exterieur: nomAffichage(diffusion.exterieur, clubs) }
      : {}

    retenues.push({ ...diffusion, ...affichage, ...evaluation })
  }

  return retenues.sort((a, b) => {
    const instantA = Date.parse(a.debutISO)
    const instantB = Date.parse(b.debutISO)
    if (instantA !== instantB) return instantA - instantB
    return a.priorite - b.priorite
  })
}

/**
 * Repère les paires de matchs pertinents qui se chevauchent,
 * pour proposer de suivre les deux en parallèle.
 */
export function detecterChevauchements(matchsRecommandes) {
  const paires = []

  for (let i = 0; i < matchsRecommandes.length; i++) {
    for (let j = i + 1; j < matchsRecommandes.length; j++) {
      const a = matchsRecommandes[i]
      const b = matchsRecommandes[j]
      const ecart = Math.abs(Date.parse(a.debutISO) - Date.parse(b.debutISO))
      if (ecart < CHEVAUCHEMENT_MS) paires.push([a, b])
    }
  }

  return paires
}

export function memeJour(dateISO, reference = new Date()) {
  const d = new Date(dateISO)
  return (
    d.getFullYear() === reference.getFullYear() &&
    d.getMonth() === reference.getMonth() &&
    d.getDate() === reference.getDate()
  )
}

export function formaterHeure(dateISO) {
  return new Date(dateISO).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
}

export function formaterJour(dateISO) {
  return new Date(dateISO).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })
}

/**
 * Retrouve, parmi les matchs actuellement remontés par le bandeau live (voir
 * useScoresDirect — passer [matchFavori, ...autresMatchs].filter(Boolean)),
 * celui qui correspond à un match donné (diffusion) — par id de club
 * COMMUN, jamais par nom d'équipe : tvBroadcasts et maxifoot-live.com
 * n'utilisent pas la même convention de libellé (voir nomAffichage), alors
 * que l'id de club, lui, est partagé entre les deux sources. Rend `null` si
 * aucun club de ce match n'est actuellement dans le bandeau live — sert à
 * MatchCard pour afficher/mettre à jour le score EN DIRECT avant que le
 * résultat officiel (collecteResultatsMatchs.js) ne soit collecté.
 */
export function trouverMatchLive(match, matchsLive) {
  const clubsMatch = match.clubs || []
  return matchsLive.find((m) => (m.clubs || []).some((id) => clubsMatch.includes(id))) || null
}
