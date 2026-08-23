const AGENT = 'Mozilla/5.0 (compatible; TonParisBot/1.0; +usage personnel)'

/**
 * Devine l'encodage d'une page à partir de l'en-tête HTTP Content-Type,
 * puis à défaut de la balise <meta charset> / <meta http-equiv=Content-Type>
 * dans le HTML lui-même. Nécessaire car `fetch().text()` ne regarde QUE
 * l'en-tête HTTP pour choisir le décodage (jamais la balise meta) et
 * retombe sur UTF-8 si l'en-tête ne précise rien — or plusieurs sites
 * scrapés (Maxifoot notamment) sont en ISO-8859-1 sans le déclarer dans
 * l'en-tête HTTP, seulement dans une balise meta. Décoder de tels octets
 * en UTF-8 corrompt tout caractère accentué en "�" (remplacement Unicode).
 */
function deviserEncodage(enTeteContentType, prefixeAscii) {
  const depuisEnTete = enTeteContentType?.match(/charset=([\w-]+)/i)?.[1]
  if (depuisEnTete) return depuisEnTete.toLowerCase()

  const depuisMeta = prefixeAscii.match(/<meta[^>]+charset=["']?([\w-]+)/i)?.[1]
  if (depuisMeta) return depuisMeta.toLowerCase()

  return 'utf-8'
}

/** Récupère une page HTML avec délai maximal et une seule nouvelle tentative. */
export async function recupererHtml(url, { delaiMs = 12000, tentatives = 2 } = {}) {
  let derniereErreur = null

  for (let essai = 1; essai <= tentatives; essai++) {
    const controleur = new AbortController()
    const minuterie = setTimeout(() => controleur.abort(), delaiMs)

    try {
      const reponse = await fetch(url, {
        signal: controleur.signal,
        headers: {
          'User-Agent': AGENT,
          Accept: 'text/html,application/xhtml+xml',
          'Accept-Language': 'fr-FR,fr;q=0.9'
        }
      })

      if (!reponse.ok) throw new Error(`HTTP ${reponse.status}`)

      const octets = await reponse.arrayBuffer()

      // Les balises meta sont toujours en ASCII pur : un sondage grossier
      // en Latin-1 sur le tout début du document suffit à les repérer,
      // quel que soit l'encodage réel du reste de la page.
      const prefixeAscii = new TextDecoder('iso-8859-1').decode(octets.slice(0, 2048))
      const encodage = deviserEncodage(reponse.headers.get('content-type'), prefixeAscii)

      try {
        return new TextDecoder(encodage).decode(octets)
      } catch {
        // Encodage annoncé mais non reconnu par TextDecoder : repli sur UTF-8
        // plutôt que de faire échouer toute la collecte pour un libellé exotique.
        return new TextDecoder('utf-8').decode(octets)
      }
    } catch (e) {
      derniereErreur = e
      if (essai < tentatives) await pause(800 * essai)
    } finally {
      clearTimeout(minuterie)
    }
  }

  throw derniereErreur
}

export function pause(ms) {
  return new Promise((r) => setTimeout(r, ms))
}
