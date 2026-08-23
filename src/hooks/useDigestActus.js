import { useEffect, useMemo, useState } from 'react'

const CLE_STOCKAGE = 'ton-paris:digest-derniere-visite'
const CLE_VU_LE = 'ton-paris:digest-vu-le'

/** localStorage peut lever (mode privé strict, storage désactivé) : on dégrade en silence. */
function lireStockage(cle) {
  try {
    return localStorage.getItem(cle)
  } catch {
    return null
  }
}

function ecrireStockage(cle, valeur) {
  try {
    localStorage.setItem(cle, valeur)
  } catch {
    // Pas de persistance possible : le digest pourra se redéclencher plus souvent, tant pis.
  }
}

/**
 * Digest quotidien des actus PSG, affiché une fois par ouverture du jour.
 * `actus` ne contient déjà que du PSG (l'app est éditorialement centrée
 * dessus, voir collecteMaxifootNews.js côté serveur) : pas de filtrage par club
 * favori ici, sinon un utilisateur dont le favori n'est pas le PSG ne
 * verrait jamais le digest. Ne stocke qu'un horodatage local (état
 * d'appareil, pas une donnée métier) — jamais dans Firestore, jamais partagé.
 */
export function useDigestActus(actus) {
  const [ouvert, setOuvert] = useState(false)
  const [derniereVisite, setDerniereVisite] = useState(null)

  useEffect(() => {
    const brut = lireStockage(CLE_STOCKAGE)

    if (!brut) {
      // Première visite jamais enregistrée : on amorce le repère 24h dans le
      // passé (et non "maintenant") pour que les articles déjà publiés
      // aujourd'hui déclenchent bien un premier digest, y compris après une
      // suppression manuelle de la clé en test. Amorcer sur "maintenant"
      // rendait le digest impossible à redéclencher : aucun article ne peut
      // jamais être publié dans la même milliseconde que l'amorçage.
      const hier = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
      ecrireStockage(CLE_STOCKAGE, hier)
      setDerniereVisite(new Date(hier))
      return
    }

    setDerniereVisite(new Date(brut))
  }, [])

  // Tout ce qui est tombé depuis la dernière visite connue. Sans historique
  // (première visite jamais enregistrée), on ne montre rien : pas de digest
  // géant à l'installation, juste le flux normal.
  const actusDepuisDerniereVisite = useMemo(() => {
    if (!derniereVisite) return []
    return actus.filter((actu) => {
      const date = actu.publieLeISO ? new Date(actu.publieLeISO) : null
      return date && date > derniereVisite
    })
  }, [actus, derniereVisite])

  useEffect(() => {
    if (derniereVisite === null) return // encore en cours de lecture du stockage
    if (actusDepuisDerniereVisite.length === 0) return

    const aujourdhui = new Date().toDateString()
    const dernierAffichage = lireStockage(CLE_VU_LE)

    if (dernierAffichage !== aujourdhui) setOuvert(true)
  }, [derniereVisite, actusDepuisDerniereVisite])

  const fermer = () => {
    setOuvert(false)
    const maintenant = new Date()
    ecrireStockage(CLE_STOCKAGE, maintenant.toISOString())
    ecrireStockage(CLE_VU_LE, maintenant.toDateString())
  }

  return { ouvert, actus: actusDepuisDerniereVisite, fermer }
}
