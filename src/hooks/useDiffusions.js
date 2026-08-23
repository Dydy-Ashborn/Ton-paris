import { useEffect, useState } from 'react'
import { collection, query, where, orderBy, limit, onSnapshot } from 'firebase/firestore'
import { db, chemins } from '../lib/firebase'

/**
 * Écoute les diffusions à venir. Le cache local Firestore fait que
 * l'app affiche le dernier programme connu même sans réseau.
 */
export function useDiffusions({ depuis = debutDuJour(), nombre = 60 } = {}) {
  const [diffusions, setDiffusions] = useState([])
  const [chargement, setChargement] = useState(true)
  const [erreur, setErreur] = useState(null)

  useEffect(() => {
    const requete = query(
      collection(db, chemins.diffusions()),
      where('debut', '>=', depuis),
      orderBy('debut', 'asc'),
      limit(nombre)
    )

    return onSnapshot(
      requete,
      (instantane) => {
        setDiffusions(
          instantane.docs.map((doc) => {
            const donnees = doc.data()
            return {
              id: doc.id,
              ...donnees,
              debutISO: donnees.debutISO || donnees.debut?.toDate?.().toISOString() || null
            }
          })
        )
        setChargement(false)
      },
      (e) => {
        setErreur(e)
        setChargement(false)
      }
    )
  }, [depuis.getTime(), nombre])

  return { diffusions, chargement, erreur }
}

export function debutDuJour() {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  return d
}

/** Minuit il y a `jours` jours (ex. debutDuJour(1) = hier minuit) — utile pour couvrir aussi le passé récent (voir Matchs.jsx, filtre "Hier"). */
export function debutDuJourMoins(jours) {
  const d = debutDuJour()
  d.setDate(d.getDate() - jours)
  return d
}
