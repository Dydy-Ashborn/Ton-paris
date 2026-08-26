import { useEffect, useState, useCallback } from 'react'
import { collection, doc, getDoc, onSnapshot, query, updateDoc, where } from 'firebase/firestore'
import { db, chemins } from '../lib/firebase'
import { useAuth } from './useAuth'

/**
 * Cadeaux de carte reçus d'un ami, en attente d'ouverture (25/08/2026,
 * demandé en session : "quand il ouvre l'app ou qu'il est déjà dessus si
 * je lui envoie une carte je veux qu'il ait une pop up stylé plein écran
 * avec animation... il clique et le cadeau s'offre") — voir
 * functions/packsFut.js, envoyerCarteFut pour l'écriture du doc.
 *
 * Monté une seule fois, GLOBALEMENT dans App.jsx (pas dans pages/Packs.jsx)
 * — la popup doit apparaître quelle que soit la page où se trouve le
 * destinataire au moment de l'envoi, pas seulement s'il est déjà sur
 * l'onglet Packs.
 *
 * `onSnapshot` filtré sur `ouvertLe == null` : couvre à la fois "l'app est
 * déjà ouverte quand le cadeau arrive" (le listener réagit en direct) et
 * "l'app se rouvre après coup" (le premier instantané renvoie déjà le
 * cadeau en attente) — un seul mécanisme pour les deux cas, pas de logique
 * séparée "au montage" vs "en direct".
 *
 * La FICHE COMPLÈTE de la carte (nom, image, rareté...) n'est PAS dupliquée
 * dans le doc cadeau (voir chemins.cadeauFut, seuls carteId/deUid/dePseudo
 * y sont stockés) : elle est résolue ici via un getDoc ponctuel sur le
 * catalogue au moment où un cadeau apparaît, plutôt qu'un onSnapshot
 * permanent sur tout cartesFut() (déjà ouvert par ailleurs dans
 * useCartesFut.js si l'utilisateur est sur l'onglet Packs, mais ce hook-ci
 * doit rester léger et autonome puisqu'il tourne sur TOUTES les pages).
 */
export function useCadeauxFut() {
  const { utilisateur } = useAuth()

  // File d'attente plutôt qu'un seul cadeau : si plusieurs cartes arrivent
  // avant que le destinataire n'ouvre l'app, elles s'affichent une par une
  // (voir CadeauModal dans App.jsx) au lieu de se marcher dessus ou de n'en
  // montrer qu'une seule en silence.
  const [cadeaux, setCadeaux] = useState([])

  useEffect(() => {
    if (!utilisateur) {
      setCadeaux([])
      return
    }

    const q = query(collection(db, chemins.cadeauxFut(utilisateur.uid)), where('ouvertLe', '==', null))
    return onSnapshot(
      q,
      async (instantane) => {
        const bruts = instantane.docs.map((d) => ({ id: d.id, ...d.data() }))

        // Résout la fiche carte de chaque cadeau non encore résolu — en
        // parallèle, tolérant une carte introuvable (catalogue modifié
        // entre-temps) plutôt que de faire échouer tout l'affichage.
        const resolus = await Promise.all(
          bruts.map(async (cadeau) => {
            try {
              const carteSnap = await getDoc(doc(db, chemins.cartesFut(), cadeau.carteId))
              return { ...cadeau, carte: carteSnap.exists() ? { id: carteSnap.id, ...carteSnap.data() } : null }
            } catch {
              return { ...cadeau, carte: null }
            }
          })
        )

        setCadeaux(resolus)
      },
      () => setCadeaux([])
    )
  }, [utilisateur])

  // Marque le cadeau ouvert (voir firestore.rules : seul le champ ouvertLe
  // est autorisé en update côté client) — fait disparaître la popup, mais
  // ne supprime jamais le doc (garde un historique "cadeaux reçus").
  const marquerOuvert = useCallback(async (cadeauId) => {
    if (!utilisateur) return
    await updateDoc(doc(db, chemins.cadeauxFut(utilisateur.uid), cadeauId), { ouvertLe: new Date() })
  }, [utilisateur])

  return { cadeaux, marquerOuvert }
}
