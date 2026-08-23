import { useEffect, useMemo, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db, chemins } from '../lib/firebase'

const DUREE_AFFICHAGE_TERMINE_MS = 30 * 60 * 1000 // 30 min après la fin détectée

/**
 * Scores en direct des clubs suivis (source Maxifoot Live, voir
 * functions/collecteScoresDirect.js). AUCUNE notification n'est liée à ce
 * flux — c'est volontaire, un score poussé spoilerait le match pour
 * quelqu'un qui le regarde en léger différé ; l'utilisateur ne le voit
 * donc que s'il ouvre l'app.
 *
 * Le match du club favori (s'il joue) est mis en avant séparément des
 * autres matchs de clubs suivis, pour que l'accueil puisse l'afficher en
 * grand quand il existe et ne montrer qu'un second match plus discret sinon.
 */
export function useScoresDirect(preferences) {
  const [matchsBruts, setMatchsBruts] = useState([])
  const [chargement, setChargement] = useState(true)

  useEffect(() => {
    return onSnapshot(
      doc(db, chemins.scoresDirect()),
      (instantane) => {
        setMatchsBruts(instantane.exists() ? instantane.data().matchs || [] : [])
        setChargement(false)
      },
      () => setChargement(false)
    )
  }, [])

  // Un match terminé depuis plus de 30 min disparaît de l'affichage même
  // si la source le liste encore — évite de garder le bandeau live occupé
  // par un match fini depuis longtemps (voir termineDetecteLe, stampé côté
  // serveur dans collecteScoresDirect.js).
  const matchs = useMemo(
    () =>
      matchsBruts.filter((m) => {
        if (!m.termine) return true
        if (!m.termineDetecteLe) return true
        return Date.now() - m.termineDetecteLe < DUREE_AFFICHAGE_TERMINE_MS
      }),
    [matchsBruts]
  )

  const favoriId = preferences?.clubFavori?.id

  const matchFavori = useMemo(
    () => (favoriId ? matchs.find((m) => (m.clubs || []).includes(favoriId)) : null),
    [matchs, favoriId]
  )

  const autresMatchs = useMemo(
    () => matchs.filter((m) => m !== matchFavori),
    [matchs, matchFavori]
  )

  return {
    matchFavori,
    autresMatchs,
    aDesMatchsEnDirect: matchs.length > 0,
    chargement
  }
}
