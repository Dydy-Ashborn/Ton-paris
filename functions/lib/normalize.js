/**
 * Normalisation des noms d'équipes et des chaînes.
 * Les deux sources écrivent différemment ("PSG" / "Paris Saint-Germain",
 * "Bein Sports 4" / "beIN Sports 4"), il faut une clé commune pour les rapprocher.
 */

// "fc" volontairement absent : plusieurs clubs suivis dans ce projet se
// distinguent justement par ce suffixe (Paris FC face à Paris/PSG/Paris
// Saint-Germain) — le retirer les rendait indiscernables l'un de l'autre
// (voir aussi src/lib/equipes.js, même correctif côté front).
const MOTS_PARASITES = [
  'cf', 'ac', 'as', 'sc', 'sv', 'rc', 'ss', 'ssc', 'afc', 'cfc',
  'club', 'football', 'calcio', 'de', 'du', 'des', 'le', 'la', 'les'
]

export function sansAccents(texte = '') {
  return texte
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

// Abréviations/variantes qu'une source peut employer à la place du nom
// complet, et qui ne se réduisent PAS à un sous-mot du nom complet une fois
// assemblées (ex. "sg" de "Paris SG" n'est pas une sous-chaîne de
// "parissaintgermain", donc jamais détecté par l'inclusion de memeEquipe
// sans cette étape).
// - sg : repéré via maxifoot-live.com, qui affiche "Paris SG" alors que le
//   catalogue local porte "Paris Saint-Germain" / alias "PSG" : sans ce
//   correctif, aucun match PSG n'était jamais reconnu comme concernant le
//   club suivi sur cette source.
// - rennais : BUG CORRIGÉ (signalé en session : "Rennes-PSG" resté sans
//   score dans l'onglet Matchs). tvBroadcasts (scrapeTv.js) stocke le nom
//   OFFICIEL "Stade Rennais FC", maxifoot-live.com le nom COURT "Rennes" —
//   contrairement à "Lille"/"LOSC Lille" ou "Brest"/"Stade Brestois" (le
//   nom court est un préfixe littéral du nom long), "Rennes" n'est PAS une
//   sous-chaîne de "rennais" (dérivé du gentilé, pas de la ville : renn-AIS
//   vs renn-ES) : memeEquipe('Rennes', 'Stade Rennais FC') rendait donc
//   FALSE, et collecteResultatsMatchs.js ne retrouvait jamais la diffusion
//   à compléter avec le score final.
const SYNONYMES_MOT = { sg: 'saintgermain', rennais: 'rennes' }

/** Clé stable pour comparer deux libellés d'équipe issus de sources différentes. */
export function cleEquipe(nom = '') {
  const base = sansAccents(nom)
    .replace(/[\u2019'`]/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .split(' ')
    .filter((mot) => mot && !MOTS_PARASITES.includes(mot))
    .map((mot) => SYNONYMES_MOT[mot] || mot)
    .join('')

  return base || sansAccents(nom).replace(/[^a-z0-9]+/g, '')
}

/** Vrai si deux libellés désignent vraisemblablement la même équipe. */
export function memeEquipe(a, b) {
  const ca = cleEquipe(a)
  const cb = cleEquipe(b)
  if (!ca || !cb) return false
  if (ca === cb) return true
  // Un libellé court est souvent contenu dans le long ("psg" dans "parissaintgermain").
  const [court, long] = ca.length <= cb.length ? [ca, cb] : [cb, ca]
  return court.length >= 4 && long.includes(court)
}

/** Nettoie un libellé de chaîne : casse, espaces, numéro de canal conservé. */
export function normaliserChaine(brut = '') {
  const texte = brut.replace(/\s+/g, ' ').trim()
  if (!texte) return null

  const table = [
    [/^logo\s+/i, ''],
    [/\bbein\s*sports?\b/i, 'beIN Sports'],
    [/\bcanal\s*\+\s*/i, 'Canal+ '],
    [/\bligue\s*1\s*\+/i, 'Ligue 1+'],
    [/\bdisney\s*\+/i, 'Disney+'],
    [/\bdazn\b/i, 'DAZN'],
    [/\bl[\u2019']?equipe\b/i, "L'Équipe"],
    [/\brmc\s*sport\b/i, 'RMC Sport'],
    [/\bapple\s*tv\b/i, 'Apple TV']
  ]

  let sortie = texte
  for (const [motif, remplacement] of table) sortie = sortie.replace(motif, remplacement)

  return sortie.replace(/\s+/g, ' ').trim()
}

/** Identifiant déterministe d'un match : date + les deux équipes triées. */
export function idMatch(dateISO, equipeA, equipeB) {
  const jour = dateISO.slice(0, 10)
  const cles = [cleEquipe(equipeA), cleEquipe(equipeB)].sort()
  return `${jour}_${cles[0]}_${cles[1]}`
}

/**
 * Construit une date ISO à partir d'un jour et d'un horaire "20h45" ou "20:45".
 * Les sources publient en heure de Paris.
 */
export function versISO(annee, mois, jour, horaire) {
  const correspondance = String(horaire).match(/(\d{1,2})\s*[h:]\s*(\d{2})/)
  if (!correspondance) return null

  const h = Number(correspondance[1])
  const m = Number(correspondance[2])

  // Décalage de Paris : +2 l'été, +1 l'hiver. Approximation par la date.
  const decalage = estHeureEte(annee, mois, jour) ? 2 : 1
  const utc = Date.UTC(annee, mois - 1, jour, h - decalage, m)
  return new Date(utc).toISOString()
}

function estHeureEte(annee, mois, jour) {
  const dernierDimanche = (m) => {
    const d = new Date(Date.UTC(annee, m, 0))
    return d.getUTCDate() - d.getUTCDay()
  }
  const debut = new Date(Date.UTC(annee, 2, dernierDimanche(3), 1))
  const fin = new Date(Date.UTC(annee, 9, dernierDimanche(10), 1))
  const courant = new Date(Date.UTC(annee, mois - 1, jour, 12))
  return courant >= debut && courant < fin
}

const MOIS = {
  janvier: 1, fevrier: 2, mars: 3, avril: 4, mai: 5, juin: 6,
  juillet: 7, aout: 8, septembre: 9, octobre: 10, novembre: 11, decembre: 12
}

/** Lit "samedi 22 août" ou "22 août" et rend { jour, mois }. */
export function lireDateFrancaise(texte = '') {
  const propre = sansAccents(texte)
  const correspondance = propre.match(/(\d{1,2})\s+([a-z]+)/)
  if (!correspondance) return null

  const jour = Number(correspondance[1])
  const mois = MOIS[correspondance[2]]
  if (!mois) return null

  return { jour, mois }
}

/** Devine l'année : si le mois est très en arrière, c'est l'année suivante. */
export function devinerAnnee(mois, reference = new Date()) {
  const moisReference = reference.getUTCMonth() + 1
  const annee = reference.getUTCFullYear()
  if (moisReference >= 10 && mois <= 3) return annee + 1
  if (moisReference <= 3 && mois >= 10) return annee - 1
  return annee
}
