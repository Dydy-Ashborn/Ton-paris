import { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db, chemins } from '../lib/firebase'

/**
 * Calendrier des fenêtres de mercato, lu depuis Firestore
 * (config/fenetresMercato — voir scripts/maj-fenetres-mercato.mjs pour la
 * mise à jour annuelle). En temps réel : si le document est mis à jour
 * pendant que l'app est ouverte, MercatoTimer se recalcule tout seul, sans
 * rebuild ni redeploy du front.
 */
export function useFenetresMercato() {
  const [fenetres, setFenetres] = useState([])
  const [chargement, setChargement] = useState(true)

  useEffect(() => {
    return onSnapshot(
      doc(db, chemins.fenetresMercato()),
      (instantane) => {
        const brutes = instantane.exists() ? instantane.data().fenetres || [] : []
        setFenetres(
          brutes.map((f) => ({
            ...f,
            debut: f.debut?.toDate?.() || new Date(f.debut),
            fin: f.fin?.toDate?.() || new Date(f.fin)
          }))
        )
        setChargement(false)
      },
      () => setChargement(false)
    )
  }, [])

  return { fenetres, chargement }
}
