import { recupererHtml } from '../lib/http.js'
import { memeEquipe } from '../lib/normalize.js'

export const NOM_SOURCE = 'Maxifoot Live'
const URL_LIVE = 'https://www.maxifoot-live.com/match-en-cours.php'
const URL_FINI = 'https://www.maxifoot-live.com/match-fini.php'

function nettoyerTexte(html) {
  return String(html)
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * La page liste TOUTES les rencontres en cours ou à venir dans la journée,
 * toutes compétitions/pays confondus, dans une grande table HTML. Chaque
 * ligne de match porte un id du type "IDMATCH_IDQUELQUECHOSE" et contient :
 *   - les deux noms d'équipe (liens)
 *   - deux spans de score, id="s1_<idmatch>" / id="s2_<idmatch>"
 *   - un état de match, ex. <div class="etat running">56</div> (minute en
 *     cours), ou "etat" seul seul seul (à venir) / "etat clos" (terminé)
 * L'attribut id du bloc englobant sert de clé technique par match.
 */
function extraireBlocsMatch(html) {
  // Chaque bloc ligne est délimité par le prochain id de la même forme —
  // on découpe large (jusqu'à la ligne suivante ou fin de table) plutôt que
  // de dépendre d'une structure de balise précise, plus fragile aux
  // changements mineurs de markup.
  const blocs = []
  const re = /id="(\d+)_(\d+)"[^>]*>([\s\S]*?)(?=id="\d+_\d+"|<\/table>)/g
  let m
  while ((m = re.exec(html)) !== null) {
    blocs.push({ idMatch: m[1], idBrut: `${m[1]}_${m[2]}`, contenu: m[3] })
  }
  return blocs
}

function extraireScore(contenu, idMatch, numero) {
  // Attributs tantôt cités, tantôt non (voir functions/lib/http.js et le
  // reste des sources Maxifoot pour ce même piège récurrent) : on tolère
  // les deux formes.
  const re = new RegExp(`id=["']?s${numero}_${idMatch}["']?[^>]*>([^<]*)<`, 'i')
  const m = contenu.match(re)
  if (!m) return null
  const texte = nettoyerTexte(m[1])
  if (texte === '' || texte === '-') return null
  const n = Number(texte)
  return Number.isFinite(n) ? n : null
}

function extraireEtat(contenu) {
  const m = contenu.match(/class=["']?etat(\s+running)?["']?[^>]*>([^<]*)</i)
  if (!m) return { enCours: false, minute: null, termine: false }

  const enCours = Boolean(m[1])
  const texte = nettoyerTexte(m[2])
  const termine = /term|fin|ft\b/i.test(texte)
  const minute = enCours ? (texte.match(/\d+/)?.[0] ? Number(texte.match(/\d+/)[0]) : null) : null

  return { enCours, minute, termine }
}

function extraireEquipes(contenu) {
  // Les noms d'équipe apparaissent comme texte de lien ; on prend les deux
  // premiers textes de lien non vides du bloc, dans l'ordre domicile/extérieur.
  const liens = [...contenu.matchAll(/<a[^>]*>([^<]+)<\/a>/gi)]
    .map((m) => nettoyerTexte(m[1]))
    .filter(Boolean)

  if (liens.length < 2) return null
  return { domicile: liens[0], exterieur: liens[1] }
}

function extraireCompetition(contenu) {
  // Meilleur effort : le premier attribut title ou texte de cellule "petit"
  // qui précède les équipes sert souvent de libellé de compétition. Non
  // bloquant si absent — le live-score reste exploitable sans ce champ.
  const m = contenu.match(/title=["']([^"']{2,60})["']/)
  return m ? nettoyerTexte(m[1]) : null
}

/** Parse la page complète et rend toutes les rencontres détectées. */
export function extraireMatchsLive(html) {
  const blocs = extraireBlocsMatch(html)
  const matchs = []

  for (const bloc of blocs) {
    const equipes = extraireEquipes(bloc.contenu)
    if (!equipes) continue

    const score1 = extraireScore(bloc.contenu, bloc.idMatch, 1)
    const score2 = extraireScore(bloc.contenu, bloc.idMatch, 2)
    const etat = extraireEtat(bloc.contenu)
    const competition = extraireCompetition(bloc.contenu)

    matchs.push({
      idBrut: bloc.idBrut,
      domicile: equipes.domicile,
      exterieur: equipes.exterieur,
      scoreDomicile: score1,
      scoreExterieur: score2,
      enCours: etat.enCours,
      minute: etat.minute,
      termine: etat.termine,
      competition
    })
  }

  return matchs
}

/**
 * Filtre les matchs de la page pour ne garder que ceux impliquant au moins
 * un des clubs passés en paramètre (libellés nom/court/alias confondus).
 */
export function filtrerMatchsClubs(matchs, libellesClubs) {
  return matchs.filter((match) =>
    libellesClubs.some((libelle) => memeEquipe(match.domicile, libelle) || memeEquipe(match.exterieur, libelle))
  )
}

export async function scraperMatchsLive() {
  const html = await recupererHtml(URL_LIVE)
  return extraireMatchsLive(html)
}

/**
 * Matchs terminés AUJOURD'HUI (heure du site, càd Europe/Paris en
 * pratique) : même structure de table que match-en-cours.php (mêmes id de
 * bloc, mêmes spans de score), seul l'état diffère ("Fini", classe
 * "etat finished") — extraireMatchsLive() gère déjà ce cas (le regex
 * d'état ne dépend pas de la valeur exacte de la classe, seulement de la
 * présence du mot "running", et /term|fin|ft\b/i matche "Fini").
 */
export async function scraperMatchsFinisDuJour() {
  const html = await recupererHtml(URL_FINI)
  return extraireMatchsLive(html)
}

/**
 * Matchs terminés un jour PASSÉ donné (dateISO au format YYYY-MM-DD,
 * voir cleJourLocal côté collecteResultatsMatchs.js) : même page que
 * match-fini.php mais pour une date antérieure, via l'URL
 * resultat-YYYY-MM-DD/index.php exposée par le sélecteur de date du site
 * (onglet "Finis" → flèche de date). Sert uniquement au passage cron du
 * matin (résultats de la veille) — jamais au jour courant, qui utilise
 * scraperMatchsFinisDuJour().
 */
export async function scraperMatchsFinisDate(dateISO) {
  const html = await recupererHtml(`https://www.maxifoot-live.com/resultat-${dateISO}/index.php`)
  return extraireMatchsLive(html)
}
