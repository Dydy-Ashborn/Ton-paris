import { useEffect, useMemo, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db, chemins } from '../lib/firebase'
import { fusionnerPhotosEffectif } from '../lib/joueur'

const CLUB_ID_PSG = 'psg'

/**
 * Effectif PSG : deux documents Firestore écoutés en parallèle et fusionnés
 * ici plutôt que côté serveur — deux sources avec des cycles de vie très
 * différents (voir lib/firebase.js, chemins.photosEffectif) :
 *  - effectif(clubId) : stats de match (Maxifoot), réécrit en entier chaque
 *    jour à 6h par le cron functions/collecteEffectifPsg.js ;
 *  - photosEffectif(clubId) : photos + bio (PSG.fr), écrit UNIQUEMENT à la
 *    main via scripts/maj-photos-effectif.mjs (voir l'userscript
 *    Tampermonkey associé), jamais par un cron.
 * Fusionner à l'écriture (dans le cron) écraserait ce doc manuel au prochain
 * passage ; fusionner ici, à la lecture, rend les deux sources
 * indépendantes l'une de l'autre — l'effectif reste utilisable même si les
 * photos PSG.fr n'ont jamais été importées (repli déjà géré par
 * fusionnerPhotosEffectif/CarteJoueurModal/Effectif).
 */
export function useEffectif() {
  const [effectifBrut, setEffectifBrut] = useState(null)
  const [photos, setPhotos] = useState(null)
  const [chargementEffectif, setChargementEffectif] = useState(true)
  const [chargementPhotos, setChargementPhotos] = useState(true)

  useEffect(() => {
    return onSnapshot(
      doc(db, chemins.effectif(CLUB_ID_PSG)),
      (instantane) => {
        setEffectifBrut(instantane.exists() ? instantane.data() : null)
        setChargementEffectif(false)
      },
      () => setChargementEffectif(false)
    )
  }, [])

  useEffect(() => {
    return onSnapshot(
      doc(db, chemins.photosEffectif(CLUB_ID_PSG)),
      (instantane) => {
        setPhotos(instantane.exists() ? instantane.data().joueurs || null : null)
        setChargementPhotos(false)
      },
      () => setChargementPhotos(false)
    )
  }, [])

  const effectif = useMemo(() => {
    if (!effectifBrut) return effectifBrut
    return { ...effectifBrut, joueurs: fusionnerPhotosEffectif(effectifBrut.joueurs, photos) }
  }, [effectifBrut, photos])

  return { effectif, chargement: chargementEffectif || chargementPhotos }
}
