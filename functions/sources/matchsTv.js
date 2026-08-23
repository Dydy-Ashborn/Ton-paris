import * as cheerio from 'cheerio'
import { recupererHtml } from '../lib/http.js'
import { normaliserChaine, lireDateFrancaise, devinerAnnee, versISO } from '../lib/normalize.js'

export const NOM_SOURCE = 'matchs.tv'
const BASE = 'https://matchs.tv'

/**
 * Page club de matchs.tv : tableau { date | logos | match + compétition | chaînes }.
 * Les lignes de date servent d'en-tête et fixent le jour des lignes qui suivent.
 */
export async function scraperClub(slug) {
  const html = await recupererHtml(`${BASE}/club/${slug}/`)
  const $ = cheerio.load(html)
  const rencontres = []

  let dateCourante = null

  $('table tr').each((_, ligne) => {
    const $ligne = $(ligne)
    const cellules = $ligne.find('td')

    // Ligne d'en-tête de jour : une seule cellule contenant un lien /jour/...
    const lienJour = $ligne.find('a[href*="/jour/"]').first()
    if (lienJour.length && cellules.length <= 1) {
      dateCourante = lireDateFrancaise(lienJour.text())
      return
    }

    if (!dateCourante || cellules.length < 3) return

    const horaire = $(cellules[0]).text().trim()
    if (!/\d{1,2}\s*[h:]\s*\d{2}/.test(horaire)) return

    const celluleMatch = $(cellules[cellules.length - 2])
    const lienMatch = celluleMatch.find('a[href*="/match/"]').first()
    const libelle = lienMatch.text().trim()
    if (!libelle.includes('-')) return

    const [domicile, exterieur] = libelle.split('-').map((s) => s.trim())
    if (!domicile || !exterieur) return

    const competition = celluleMatch.find('a[href*="/competition/"]').first().text().trim() || null

    // Chaînes : les logos portent le nom dans l'attribut title.
    const chaines = []
    $(cellules[cellules.length - 1])
      .find('img')
      .each((_, img) => {
        const brut = $(img).attr('title') || $(img).attr('alt') || ''
        const propre = normaliserChaine(brut)
        if (propre && !chaines.includes(propre)) chaines.push(propre)
      })

    const annee = devinerAnnee(dateCourante.mois)
    const debutISO = versISO(annee, dateCourante.mois, dateCourante.jour, horaire)
    if (!debutISO) return

    rencontres.push({
      domicile,
      exterieur,
      competition,
      debutISO,
      chaines,
      url: lienMatch.attr('href') ? new URL(lienMatch.attr('href'), BASE).href : null
    })
  })

  return rencontres
}
