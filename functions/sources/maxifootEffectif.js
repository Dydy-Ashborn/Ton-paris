import { recupererHtml } from '../lib/http.js'

const URL_FICHE_PSG = 'https://www.maxifoot.fr/club/paris-sg.115.htm'
const CLUB_ID_PSG = 'psg'

function nettoyerTexte(html) {
  return String(html)
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
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Extrait un nombre d'une cellule qui peut contenir des balises HTML
 * (ex: une image <img width="10" height="10">) : les balises doivent être
 * retirées AVANT de nettoyer les caractères non numériques, sinon des
 * attributs comme width="10" polluent le nombre extrait (ex: "1 tit."
 * avec une image dont les attributs contiennent "10" donnerait "110").
 */
function nombre(texte) {
  const sansBalises = String(texte).replace(/<[^>]+>/g, '')
  const valeur = parseInt(sansBalises.replace(/[^\d-]/g, ''), 10)
  return Number.isFinite(valeur) ? valeur : 0
}

/**
 * Parse l'attribut title du lien joueur, seule source sur cette page du nom
 * complet, de la date de naissance, de la taille et du poids — ex :
 * "Lucas Eugène Chevalier, né lé 06/11/2001 (24 ans), 1 m 89, 78 kg".
 * Champs manquants représentés par "-" (taille/poids) ou une date à
 * 00/00/0000 (jeunes tout juste intégrés, pas encore renseignés).
 */
function parserTitreJoueur(titre) {
  const m = titre.match(/^(.*?),\s*né lé (\d{2}\/\d{2}\/\d{4})\s*\(([^)]*)\),\s*([^,]*),\s*(.*)$/)
  if (!m) return { nomComplet: nettoyerTexte(titre), naissance: null, taille: null, poids: null }

  const [, nomComplet, naissance, , taille, poids] = m
  return {
    nomComplet: nettoyerTexte(nomComplet),
    naissance: naissance === '00/00/0000' ? null : naissance,
    taille: taille.trim() === '-' ? null : taille.trim(),
    poids: poids.trim() === '-' ? null : poids.trim()
  }
}

/**
 * Extrait l'effectif complet depuis le tableau "Stats des joueurs"
 * (id="listej0", premier des trois onglets de l'effectif — les deux
 * autres, "temps de jeu récent" et "infos des joueurs", sont redondants :
 * le nom complet, la date de naissance, la taille et le poids viennent
 * déjà de l'attribut title du lien joueur présent dans CE tableau, pas
 * besoin de parser les onglets CHAMP/CE séparément).
 *
 * Contrairement à la fiche mercato/actus du même club (voir
 * maxifootPsg.js), ce tableau est du HTML bien formé : les <tr> se
 * ferment normalement, un parseur classique par regex de <tr>...</tr>
 * suffit.
 *
 * Structure : une ligne d'en-tête de poste (<b>&nbsp;Poste</b> sur toute
 * la largeur) précède chaque groupe de joueurs, jusqu'au poste suivant.
 * Le groupe "Entraineur" est isolé du reste : pas de statistiques de
 * match pertinentes pour un entraîneur.
 */
export function extraireEffectif(html) {
  // Maxifoot alterne, selon la page voire selon la ligne, entre attributs
  // avec et sans guillemets (id=listej0 vs id="listej0", class=linkj vs
  // class="linkj"…) — déjà rencontré sur news.maxifoot.fr (voir
  // maxifootNews.js). D'où le `"?...?"` sur chaque attribut ci-dessous
  // plutôt qu'un `"([^"]*)"` qui suppose des guillemets.
  const tableMatch = html.match(/<table[^>]*id="?listej0"?[^>]*>([\s\S]*?)<\/table>/)
  if (!tableMatch) return { joueurs: [], entraineur: null }

  const lignes = [...tableMatch[1].matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)].map((m) => m[1])

  const joueurs = []
  let entraineur = null
  let poste = null

  for (const contenu of lignes) {
    const enteteposte = contenu.match(/<b>\s*&nbsp;\s*([^<]+)<\/b>/)
    if (enteteposte) {
      poste = nettoyerTexte(enteteposte[1])
      continue
    }

    // La ligne de l'entraîneur n'a pas class="linkj" (contrairement aux
    // joueurs) : on ne présume pas cette classe, seule la présence d'un
    // attribut title (nom complet, naissance, taille, poids) importe.
    const lienMatch = contenu.match(/<a[^>]*href="?([^"\s>]*)"?[^>]*title="([^"]*)"[^>]*>([\s\S]*?)<\/a>/)
    if (!lienMatch) continue

    const [, lienBrut, titre, nomAfficheBrut] = lienMatch
    const cellules = [...contenu.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((m) => m[1])
    if (cellules.length < 11) continue

    const nationaliteMatch = cellules[0].match(/alt="([^"]*)"/)
    const { nomComplet, naissance, taille, poids } = parserTitreJoueur(nettoyerTexte(titre))
    const lien = lienBrut && lienBrut !== 'javascript:void(0)' ? `https://www.maxifoot.fr${lienBrut}` : null

    const joueur = {
      id: lienBrut?.match(/-(\d+)\.htm/)?.[1] || null,
      lien,
      nom: nettoyerTexte(nomAfficheBrut),
      nomComplet,
      nationalite: nationaliteMatch ? nettoyerTexte(nationaliteMatch[1]) : null,
      naissance,
      taille,
      poids,
      age: nombre(cellules[2]),
      poste,
      matchsJoues: nombre(cellules[3]),
      titularisations: nombre(cellules[4]),
      buts: nombre(cellules[5]),
      cartonsJaunes: nombre(cellules[7]),
      cartonsRouges: nombre(cellules[8]),
      minutesJouees: nombre(cellules[10])
    }

    if (poste === 'Entraineur') {
      entraineur = {
        nom: joueur.nom,
        nomComplet,
        nationalite: joueur.nationalite,
        age: joueur.age,
        naissance,
        taille,
        poids
      }
    } else {
      joueurs.push(joueur)
    }
  }

  return { joueurs, entraineur }
}

export async function scraperEffectifPsg() {
  const html = await recupererHtml(URL_FICHE_PSG)
  return extraireEffectif(html)
}

export { URL_FICHE_PSG, CLUB_ID_PSG }
