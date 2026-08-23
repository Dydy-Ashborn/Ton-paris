import * as cheerio from 'cheerio'
import { recupererHtml } from '../lib/http.js'
import { normaliserChaine, lireDateFrancaise, devinerAnnee, versISO } from '../lib/normalize.js'

export const NOM_SOURCE = 'footmercato'
const BASE = 'https://www.footmercato.net'

/**
 * Page club de Foot Mercato : titres de jour (h2) puis liens /live/{id}-{equipeA}-vs-{equipeB}.
 * Les équipes et la chaîne sont portées par les balises img du lien.
 */
export async function scraperClub(slug) {
  const html = await recupererHtml(`${BASE}/programme-tv/club/${slug}`)
  const $ = cheerio.load(html)
  const rencontres = []

  let dateCourante = null

  $('h2, h3, a[href*="/live/"]').each((_, noeud) => {
    const $noeud = $(noeud)

    if (noeud.tagName === 'h2' || noeud.tagName === 'h3') {
      const lu = lireDateFrancaise($noeud.text())
      if (lu) dateCourante = lu
      else if (/aujourd/i.test($noeud.text())) dateCourante = dateDuJour(0)
      else if (/demain/i.test($noeud.text())) dateCourante = dateDuJour(1)
      return
    }

    if (!dateCourante) return

    const texte = $noeud.text().replace(/\s+/g, ' ').trim()
    const horaire = (texte.match(/(\d{1,2}):(\d{2})/) || [])[0]
    if (!horaire) return

    // Les deux premiers logos sont les équipes, les suivants sont les chaînes.
    const images = $noeud.find('img').toArray()
    const equipes = []
    const chaines = []

    for (const img of images) {
      const alt = ($(img).attr('alt') || '').trim()
      if (/^logo\s+/i.test(alt) && equipes.length < 2 && !/canal|bein|dazn|ligue 1\+|disney|equipe|rmc/i.test(alt)) {
        equipes.push(alt.replace(/^logo\s+/i, '').trim())
      } else {
        const propre = normaliserChaine(alt)
        if (propre && !chaines.includes(propre)) chaines.push(propre)
      }
    }

    if (equipes.length < 2) {
      // Repli : lire les équipes dans l'URL du lien.
      const href = $noeud.attr('href') || ''
      const correspondance = href.match(/\/live\/\d+-(.+?)-vs-(.+?)(?:$|\?)/)
      if (!correspondance) return
      equipes[0] = correspondance[1].replace(/-/g, ' ')
      equipes[1] = correspondance[2].replace(/-/g, ' ')
    }

    const annee = devinerAnnee(dateCourante.mois)
    const debutISO = versISO(annee, dateCourante.mois, dateCourante.jour, horaire)
    if (!debutISO) return

    rencontres.push({
      domicile: equipes[0],
      exterieur: equipes[1],
      competition: null,
      debutISO,
      chaines,
      url: $noeud.attr('href') ? new URL($noeud.attr('href'), BASE).href : null
    })
  })

  return rencontres
}

function dateDuJour(decalage) {
  const d = new Date()
  d.setUTCDate(d.getUTCDate() + decalage)
  return { jour: d.getUTCDate(), mois: d.getUTCMonth() + 1 }
}
