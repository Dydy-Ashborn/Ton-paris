import { recupererHtml } from '../lib/http.js'

/**
 * Source Maxifoot.fr — fiche club PSG (une seule page contient tout :
 * actu, mercato, effectif, calendrier, chacun dans un <div id="div_xxx">
 * distinct, juste basculés par un onglet JS côté site). On ne fait donc
 * qu'UN SEUL fetch pour alimenter à la fois les actus et le mercato.
 *
 * Attention, HTML non valide par endroits (des <tr> jamais fermés avant
 * le <tr> suivant) : les regex ci-dessous sont écrites pour tolérer ça,
 * elles ne s'appuient jamais sur une fermeture de balise pour délimiter
 * un enregistrement, seulement sur le début du prochain marqueur connu.
 *
 * Test volontairement limité au PSG pour l'instant (proof of concept) :
 * si ça tient la route, on généralisera à d'autres clubs en paramétrant
 * l'URL de fiche par club (comme matchsTv/footmercato le font déjà).
 */

export const NOM_SOURCE = 'maxifoot'
const URL_FICHE_PSG = 'https://www.maxifoot.fr/club/paris-sg.115.htm'
const CLUB_ID_PSG = 'psg' // id interne du PSG dans config/clubs

function nettoyerTexte(html = '') {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&eacute;/g, 'é')
    .replace(/&egrave;/g, 'è')
    .replace(/&agrave;/g, 'à')
    .replace(/&ccedil;/g, 'ç')
    .replace(/&ecirc;/g, 'ê')
    .replace(/&ocirc;/g, 'ô')
    .replace(/&rsquo;/g, '’')
    .replace(/&quot;/g, '"')
    .replace(/&euro;/g, '€')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Identifiant stable dérivé du lien de l'article (même logique que le RSS). */
function identifiantDepuisLien(lien) {
  return lien
    .split('?')[0]
    .replace(/^https?:\/\//, '')
    .replace(/[^a-zA-Z0-9]/g, '_')
    .slice(0, 180)
}

/**
 * Parse le bloc actus de la fiche club. Structure réelle observée :
 * plusieurs <div id=actu_ongN> (un par tranche de dates), chacun
 * contenant une suite de <td class=tit>...<b>Titre</b></a>...</td>
 * <td class=ily>date relative</td> puis, plus loin dans le HTML (les
 * <tr> ne sont pas fermés proprement), un <td colspan=2 class=crp>
 * extrait</td> avant le prochain <td class=tit>.
 *
 * On ne capture donc pas ligne par ligne : on repère chaque titre, puis
 * on prend l'extrait comme "ce qui suit jusqu'au prochain titre ou la fin
 * du tableau".
 */
export function extraireActus(html) {
  const blocActu = html.match(/id="div_actu"[^>]*>([\s\S]*?)<a name="listej"/)
  if (!blocActu) return []

  const contenu = blocActu[1]
  const marqueurs = [...contenu.matchAll(
    /<td class=tit><a target=_blank href="([^"]+)"[^>]*><b>([\s\S]*?)<\/b><\/a>/g
  )]

  const articles = []

  for (let i = 0; i < marqueurs.length; i++) {
    const match = marqueurs[i]
    const [, lien, titreBrut] = match
    const debutSuite = match.index + match[0].length
    const finSuite = i + 1 < marqueurs.length ? marqueurs[i + 1].index : contenu.length
    const suite = contenu.slice(debutSuite, finSuite)

    const titre = nettoyerTexte(titreBrut)
    if (!titre) continue

    const extraitMatch = suite.match(/class=crp>([\s\S]*?)<\/td>/)

    articles.push({
      titre,
      resume: extraitMatch ? nettoyerTexte(extraitMatch[1]).slice(0, 280) || null : null,
      lien,
      image: null
    })
  }

  return articles
}

/**
 * Parse un des trois tableaux mercato (officiels / en discussion /
 * rumeurs). Structure réelle par ligne <tr>...<span class=club1>...
 * <span class=j[vr]><a title="Nom, age ans, Poste" href=...>Nom</a></span>
 * ...<td>type<br><span>montant</span></td>...
 *
 * L'ordre des colonnes (club puis joueur, ou joueur puis club) change
 * selon qu'il s'agit d'une arrivée (jv) ou d'un départ (jr) : on ne
 * présume donc jamais l'ordre, on cherche club1 et j[vr] indépendamment
 * dans le HTML de la ligne.
 */
function extraireMouvements(html, idBloc) {
  // Le bloc voulu (ex: id=officiel0) va jusqu'au prochain <div id= de même niveau,
  // ou jusqu'à la fin de la table s'il n'y en a pas.
  const debut = html.indexOf(`id=${idBloc}`)
  if (debut === -1) return []

  const finTable = html.indexOf('</table>', debut)
  if (finTable === -1) return []

  const zone = html.slice(debut, finTable)
  const lignes = [...zone.matchAll(/<tr>([\s\S]*?)(?=<tr>|$)/g)]

  const mouvements = []

  for (const [, contenuLigne] of lignes) {
    const joueurMatch = contenuLigne.match(/class=j([vr])><a title="([^"]*)"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/)
    if (!joueurMatch) continue

    const [, lettreSens, titreJoueur, joueurLien, joueurNomBrut] = joueurMatch
    const sens = lettreSens === 'v' ? 'arrivee' : 'depart'

    // <span class=club1> ou <span class="club1 b1">, avec parfois un <a> à
    // l'intérieur (clubs ayant leur propre fiche mercato) et parfois du
    // texte direct. On prend tout le contenu du <span> jusqu'à sa fermeture,
    // sans dépendre de la présence ou non d'un <a>.
    const clubMatch = contenuLigne.match(/class="?club1[^">]*"?>([\s\S]*?)<\/span>/)

    // Type de transfert ("transf.", "prêt", "libre") suivi, optionnellement,
    // d'un montant entre <span>...</span> (ex : <span>45 M&euro;</span>).
    // &euro; n'est pas décodé avant ce stade, d'où le motif explicite.
    const montantMatch = contenuLigne.match(/>(transf\.|prêt|libre)(?:<br>)?(?:<span>([\d,]+\s*M(?:€|&euro;))<\/span>)?/i)

    mouvements.push({
      joueur: nettoyerTexte(joueurNomBrut),
      joueurDetail: titreJoueur || null,
      joueurLien,
      sens,
      clubAdverse: clubMatch ? nettoyerTexte(clubMatch[1]) : null,
      typeTransfert: montantMatch ? montantMatch[1].toLowerCase() : null,
      montant: montantMatch && montantMatch[2] ? nettoyerTexte(montantMatch[2]) : null
    })
  }

  return mouvements
}

export function extraireMercato(html) {
  const blocMercato = html.match(/id="div_mercato"[^>]*>([\s\S]*?)(?:id="?div_matcal|<a name=matcal)/)
  if (!blocMercato) return { officiels: [], enDiscussion: [], rumeurs: [] }

  const contenu = blocMercato[1]

  return {
    officiels: extraireMouvements(contenu, 'officiel0'),
    enDiscussion: extraireMouvements(contenu, 'incertain0'),
    rumeurs: extraireMouvements(contenu, 'rumeur0')
  }
}

/** Récupère la fiche PSG une seule fois, rend actus + mercato ensemble. */
export async function scraperFichePsg() {
  const html = await recupererHtml(URL_FICHE_PSG)
  return {
    actus: extraireActus(html),
    mercato: extraireMercato(html)
  }
}

export function articleVersDocument(article, sourceNom = 'Maxifoot') {
  return {
    titre: article.titre,
    resume: article.resume,
    image: article.image,
    lien: article.lien,
    source: sourceNom,
    sourceId: 'maxifoot-psg',
    clubs: [CLUB_ID_PSG],
    publieLe: new Date() // Maxifoot ne donne qu'une date relative ("il y a 2 j.") sur la fiche club, pas d'horodatage exact exploitable
  }
}

export { identifiantDepuisLien, CLUB_ID_PSG }
