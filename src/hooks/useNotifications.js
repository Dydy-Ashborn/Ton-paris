import { useCallback, useEffect, useState } from 'react'
import { getMessaging, getToken, deleteToken, isSupported } from 'firebase/messaging'
import { httpsCallable } from 'firebase/functions'
import { app, fonctions, VAPID_PUBLIQUE } from '../lib/firebase'

/**
 * États possibles :
 * - indisponible : navigateur sans support, ou iOS hors écran d'accueil
 * - refuse : permission bloquée au niveau du navigateur
 * - inactif : support présent, pas encore activé
 * - actif : jeton enregistré côté serveur
 */
export function useNotifications(utilisateur) {
  const [etat, setEtat] = useState('verification')
  const [enCours, setEnCours] = useState(false)

  const installee =
    typeof window !== 'undefined' &&
    (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true)

  const iOS = typeof navigator !== 'undefined' && /iphone|ipad|ipod/i.test(navigator.userAgent)

  useEffect(() => {
    let annule = false

    async function verifier() {
      const supporte = await isSupported().catch(() => false)

      // Sur iOS, le push web n'existe que si la PWA est sur l'écran d'accueil.
      if (!supporte || (iOS && !installee)) {
        if (!annule) setEtat('indisponible')
        return
      }

      if (Notification.permission === 'denied') {
        if (!annule) setEtat('refuse')
        return
      }

      if (!annule) setEtat(Notification.permission === 'granted' ? 'actif' : 'inactif')
    }

    verifier()
    return () => { annule = true }
  }, [iOS, installee])

  const activer = useCallback(async () => {
    if (!utilisateur) return
    setEnCours(true)

    try {
      const permission = await Notification.requestPermission()
      if (permission !== 'granted') {
        setEtat(permission === 'denied' ? 'refuse' : 'inactif')
        return
      }

      const enregistrement = await navigator.serviceWorker.register('/firebase-messaging-sw.js')
      const messagerie = getMessaging(app)

      const jeton = await getToken(messagerie, {
        vapidKey: VAPID_PUBLIQUE,
        serviceWorkerRegistration: enregistrement
      })

      if (!jeton) {
        setEtat('inactif')
        return
      }

      await httpsCallable(fonctions, 'enregistrerAppareil')({ jeton })
      setEtat('actif')
    } catch (e) {
      setEtat('inactif')
    } finally {
      setEnCours(false)
    }
  }, [utilisateur])

  const desactiver = useCallback(async () => {
    setEnCours(true)

    try {
      const messagerie = getMessaging(app)
      const jeton = await getToken(messagerie, { vapidKey: VAPID_PUBLIQUE }).catch(() => null)

      if (jeton) {
        await httpsCallable(fonctions, 'retirerAppareil')({ jeton })
        await deleteToken(messagerie).catch(() => {})
      }

      setEtat('inactif')
    } finally {
      setEnCours(false)
    }
  }, [])

  return { etat, enCours, activer, desactiver, iOS, installee }
}
