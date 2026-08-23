import { useEffect, useState } from 'react'
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore'
import { db, chemins } from '../lib/firebase'

/**
 * Flux d'actualité. L'app est éditorialement centrée sur le PSG : la
 * collecte (news.maxifoot.fr + Maxifoot fiche club, voir
 * collecteMaxifootNews.js et collecteMaxifootPsg.js côté serveur) ne stocke
 * déjà que des articles PSG, donc plus besoin de filtrer côté client selon
 * les clubs suivis par l'utilisateur — tout ce qui arrive ici est pertinent.
 */
export function useActus({ nombre = 60 } = {}) {
  const [actus, setActus] = useState([])
  const [chargement, setChargement] = useState(true)

  useEffect(() => {
    const requete = query(collection(db, chemins.actus()), orderBy('publieLe', 'desc'), limit(nombre))

    return onSnapshot(
      requete,
      (instantane) => {
        setActus(
          instantane.docs.map((doc) => {
            const donnees = doc.data()
            return {
              id: doc.id,
              ...donnees,
              publieLeISO: donnees.publieLe?.toDate?.().toISOString() || null
            }
          })
        )
        setChargement(false)
      },
      () => setChargement(false)
    )
  }, [nombre])

  return { actus, chargement }
}
