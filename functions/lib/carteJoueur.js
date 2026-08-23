/**
 * Génère une note globale + 6 stats façon FIFA Ultimate Team (PAC/SHO/PAS/
 * DRI/DEF/PHY) à partir des VRAIES données Maxifoot (matchs joués,
 * titularisations, buts, cartons, minutes, âge) — Maxifoot ne fournit pas
 * ce type de notation, donc rien ici n'est une valeur officielle EA, tout
 * est calculé. Objectif : des cartes visuellement cohérentes (un gardien
 * a un DEF/PHY élevés et un DRI faible, un attaquant prolifique a un SHO
 * élevé) plutôt qu'une simulation fidèle du jeu.
 *
 * Barème choisi : base à 60 pour tout joueur de l'effectif pro (déjà un
 * niveau Ligue 1/Champions League), ajustée par des bonus plafonnés pour
 * rester dans une fourchette réaliste (60-99) sans dépasser les cartes les
 * plus fortes du jeu réel.
 */

const BASE = 60

function borner(valeur) {
  return Math.max(40, Math.min(99, Math.round(valeur)))
}

/**
 * Ratio de titularisation (0 à 1) : un joueur qui débute presque tous les
 * matchs auxquels il participe est mieux noté partout qu'un remplaçant de
 * luxe qui entre peu — la seule proxy fiable de "niveau perçu" qu'offrent
 * les stats Maxifoot, en l'absence de notes de match individuelles.
 */
function ratioTitularisation(joueur) {
  if (!joueur.matchsJoues) return 0
  return Math.min(1, joueur.titularisations / joueur.matchsJoues)
}

/** Buts par match joué, plafonné : un seul but sur 2 matchs ne doit pas déjà saturer le SHO. */
function ratioButs(joueur) {
  if (!joueur.matchsJoues) return 0
  return Math.min(1, (joueur.buts / joueur.matchsJoues) * 2)
}

function statsGardien(joueur) {
  const forme = ratioTitularisation(joueur) * 15
  return {
    PAC: borner(BASE - 10 + forme * 0.2),
    SHO: borner(BASE - 25),
    PAS: borner(BASE - 5 + forme * 0.3),
    DRI: borner(BASE - 15 + forme * 0.2),
    DEF: borner(BASE + 10 + forme),
    PHY: borner(BASE + 5 + forme * 0.5)
  }
}

function statsDefenseur(joueur) {
  const forme = ratioTitularisation(joueur) * 20
  const discipline = joueur.cartonsRouges > 0 ? -4 : joueur.cartonsJaunes > 4 ? -2 : 0
  return {
    PAC: borner(BASE + forme * 0.4),
    SHO: borner(BASE - 15 + ratioButs(joueur) * 15),
    PAS: borner(BASE + forme * 0.3),
    DRI: borner(BASE - 5 + forme * 0.3),
    DEF: borner(BASE + 15 + forme + discipline),
    PHY: borner(BASE + 10 + forme * 0.5)
  }
}

function statsMilieu(joueur) {
  const forme = ratioTitularisation(joueur) * 20
  return {
    PAC: borner(BASE + forme * 0.4),
    SHO: borner(BASE + ratioButs(joueur) * 20 + forme * 0.2),
    PAS: borner(BASE + 12 + forme * 0.5),
    DRI: borner(BASE + 10 + forme * 0.4),
    DEF: borner(BASE + forme * 0.4),
    PHY: borner(BASE + 5 + forme * 0.3)
  }
}

function statsAttaquant(joueur) {
  const forme = ratioTitularisation(joueur) * 20
  return {
    PAC: borner(BASE + 8 + forme * 0.4),
    SHO: borner(BASE + 15 + ratioButs(joueur) * 20 + forme * 0.2),
    PAS: borner(BASE + forme * 0.3),
    DRI: borner(BASE + 12 + forme * 0.4),
    DEF: borner(BASE - 20),
    PHY: borner(BASE + forme * 0.3)
  }
}

const STATS_PAR_POSTE = {
  Gardien: statsGardien,
  Défenseur: statsDefenseur,
  Milieu: statsMilieu,
  Attaquant: statsAttaquant
}

/**
 * Pondération de la note globale par poste (mêmes poids que le jeu
 * d'origine, en simplifié) : un gardien est jugé sur DEF/PHY/PAS, un
 * attaquant sur SHO/DRI/PAC.
 */
const PONDERATION_GLOBALE = {
  Gardien: { DEF: 0.45, PHY: 0.25, PAS: 0.2, PAC: 0.1 },
  Défenseur: { DEF: 0.4, PHY: 0.25, PAC: 0.15, PAS: 0.1, DRI: 0.1 },
  Milieu: { PAS: 0.3, DRI: 0.25, DEF: 0.15, PAC: 0.15, PHY: 0.15 },
  Attaquant: { SHO: 0.35, DRI: 0.25, PAC: 0.25, PHY: 0.15 }
}

function noteGlobale(stats, poste) {
  const poids = PONDERATION_GLOBALE[poste] || PONDERATION_GLOBALE.Milieu
  const somme = Object.entries(poids).reduce((total, [cle, p]) => total + stats[cle] * p, 0)
  return borner(somme)
}

/**
 * Calcule stats + note globale pour un joueur de l'effectif (voir
 * maxifootEffectif.js pour la forme d'entrée). `poste` doit être l'un des
 * 4 groupes déjà utilisés dans l'app (Gardien/Défenseur/Milieu/Attaquant) —
 * retombe sur Milieu si absent/inconnu plutôt que de planter.
 */
export function genererCarte(joueur) {
  const poste = STATS_PAR_POSTE[joueur.poste] ? joueur.poste : 'Milieu'
  const stats = STATS_PAR_POSTE[poste](joueur)
  return { note: noteGlobale(stats, poste), stats }
}
