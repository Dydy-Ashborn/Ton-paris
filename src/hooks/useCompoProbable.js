import { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db, chemins } from '../lib/firebase'

const CLUB_ID_PSG = 'psg'

/**
 * Compo PSG (source Maxifoot) : deux documents distincts sont suivis en
 * parallèle, la probable (matin/veille) et l'officielle (~1h avant le
 * coup d'envoi, une fois les feuilles de match connues — voir
 * functions/collecteCompoPsg.js). Dès que l'officielle existe pour le
 * match à venir, elle prime sur la probable ; celle-ci reste toutefois
 * accessible séparément pour que l'app puisse indiquer explicitement
 * qu'une compo affichée n'est encore qu'une probabilité.
 */
export function useCompoProbable() {
  const [probable, setProbable] = useState(null)
  const [officielle, setOfficielle] = useState(null)
  const [chargementProbable, setChargementProbable] = useState(true)
  const [chargementOfficielle, setChargementOfficielle] = useState(true)

  useEffect(() => {
    return onSnapshot(
      doc(db, chemins.compoProbable(CLUB_ID_PSG)),
      (instantane) => {
        setProbable(instantane.exists() ? instantane.data() : null)
        setChargementProbable(false)
      },
      () => setChargementProbable(false)
    )
  }, [])

  useEffect(() => {
    return onSnapshot(
      doc(db, chemins.compoOfficielle(CLUB_ID_PSG)),
      (instantane) => {
        setOfficielle(instantane.exists() ? instantane.data() : null)
        setChargementOfficielle(false)
      },
      () => setChargementOfficielle(false)
    )
  }, [])

  const chargement = chargementProbable || chargementOfficielle

  // L'officielle ne prime sur la probable que si elle concerne le MÊME
  // match — sinon une officielle laissée en base après un match reste
  // affichée à tort une fois la probable du match suivant sortie (elle ne
  // se met à jour, elle, qu'à la prochaine officielle, ~1h avant le coup
  // d'envoi). On compare les deux titres de brève débarrassés du mot
  // "probables" : même adversaire/journée ⇒ même match.
  const memeMatch =
    officielle?.titreBreve &&
    probable?.titreBreve &&
    officielle.titreBreve.toLowerCase().replace(/\s*probables?\s*$/, '').trim() ===
      probable.titreBreve.toLowerCase().replace(/\s*probables?\s*$/, '').trim()

  const compo = officielle && (memeMatch || !probable) ? officielle : probable
  const estOfficielle = compo === officielle && Boolean(officielle)

  return { compo, estOfficielle, probable, officielle, chargement }
}
