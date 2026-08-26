import { useCallback, useEffect, useState } from 'react'
import { getMessaging, getToken, deleteToken, isSupported, onMessage } from 'firebase/messaging'
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

  const activer = useCallback(async () => {
    if (!utilisateur) return
    setEnCours(true)
    console.log('[Notifications] activer() — début, uid =', utilisateur.uid)

    try {
      const permission = await Notification.requestPermission()
      console.log('[Notifications] permission navigateur :', permission)
      if (permission !== 'granted') {
        setEtat(permission === 'denied' ? 'refuse' : 'inactif')
        console.warn('[Notifications] permission refusée/ignorée, arrêt ici.')
        return
      }

      // BUG CORRIGÉ EN SESSION : chemin ABSOLU en dur ('/firebase-messaging-sw.js')
      // au lieu de préfixé par BASE_URL. Sur Firebase Hosting (BASE_URL='/') ça
      // coïncidait par hasard avec le bon chemin, donc jamais remarqué en test —
      // mais sur GitHub Pages (BASE_URL='/Ton-paris/', voir vite.config.js) le
      // fichier réel vit sous /Ton-paris/firebase-messaging-sw.js : ce chemin en
      // dur pointait vers la racine du domaine, où rien n'existe (404 ou, pire,
      // un tout autre site si un compte GitHub a un site personnel à la racine).
      // Le SW ne s'enregistrait alors jamais correctement, getToken() échouait,
      // et l'erreur était jusqu'ici silencieusement avalée par le catch ci-dessous
      // — d'où "j'ai activé, mais aucun appareil enregistré côté serveur". Même
      // principe que cheminPublic() dans lib/joueur.js et trouverLogo() dans
      // pages/Accueil.jsx.
      const cheminSw = `${import.meta.env.BASE_URL}firebase-messaging-sw.js`
      console.log('[Notifications] enregistrement du service worker :', cheminSw)
      const enregistrement = await navigator.serviceWorker.register(cheminSw)
      console.log('[Notifications] service worker enregistré, scope =', enregistrement.scope)

      const messagerie = getMessaging(app)

      console.log('[Notifications] demande du jeton FCM (VAPID présente :', Boolean(VAPID_PUBLIQUE), ')')
      const jeton = await getToken(messagerie, {
        vapidKey: VAPID_PUBLIQUE,
        serviceWorkerRegistration: enregistrement
      })

      if (!jeton) {
        console.warn('[Notifications] getToken() a renvoyé un jeton vide/null.')
        setEtat('inactif')
        return
      }

      console.log('[Notifications] jeton FCM obtenu (fin) :', jeton.slice(-16))
      console.log('[Notifications] appel de la Cloud Function enregistrerAppareil…')
      await httpsCallable(fonctions, 'enregistrerAppareil')({ jeton })
      console.log('[Notifications] appareil enregistré côté serveur avec succès.')
      setEtat('actif')
    } catch (e) {
      // ANCIEN COMPORTEMENT : erreur totalement avalée, aucune trace nulle part —
      // impossible de savoir POURQUOI l'activation échouait (permission web push
      // refusée, VAPID invalide, SW introuvable, callable qui jette...). Toujours
      // logué maintenant, avec le code d'erreur Firebase quand il existe (ex.
      // "messaging/failed-service-worker-registration",
      // "functions/permission-denied"...).
      console.error('[Notifications] activer() a échoué :', e?.code || e?.message || e, e)
      setEtat('inactif')
    } finally {
      setEnCours(false)
    }
  }, [utilisateur])

  // SIGNALÉ EN SESSION : après la correction du bug de chemin du service
  // worker dans activer() ci-dessus, le test de notif échouait TOUJOURS côté
  // serveur ("aucun appareil enregistré") pour un compte où la permission
  // navigateur était déjà 'granted' — logique, cette vérification passait
  // directement à l'état "actif" sans jamais rappeler activer(), donc le
  // correctif ne s'exécutait jamais pour ces comptes-là : la permission
  // navigateur reste accordée indéfiniment même si l'enregistrement du
  // jeton avait échoué en silence lors d'une tentative précédente (l'ancien
  // bug). Plutôt que de me fier à la seule permission navigateur, on
  // rappelle activer() en tâche de fond dès qu'elle est déjà 'granted' — un
  // appel à activer() est sans risque à répéter (getToken() renvoie le même
  // jeton s'il est encore valide, enregistrerAppareil()/set(merge:true) ne
  // duplique rien) et corrige silencieusement un enregistrement resté
  // orphelin, sans que l'utilisateur ait à désactiver/réactiver à la main.
  useEffect(() => {
    let annule = false

    async function verifier() {
      const supporte = await isSupported().catch(() => false)

      // Sur iOS, le push web n'existe que si la PWA est sur l'écran d'accueil.
      console.log('[Notifications] vérification initiale — support navigateur :', supporte, '| iOS :', iOS, '| installée :', installee, '| permission :', typeof Notification !== 'undefined' ? Notification.permission : 'API absente')

      if (!supporte || (iOS && !installee)) {
        if (!annule) setEtat('indisponible')
        return
      }

      if (Notification.permission === 'denied') {
        if (!annule) setEtat('refuse')
        return
      }

      if (Notification.permission === 'granted') {
        if (!annule) setEtat('actif')
        if (utilisateur) {
          console.log('[Notifications] permission déjà accordée — réenregistrement de confirmation en tâche de fond.')
          activer()
        }
        return
      }

      if (!annule) setEtat('inactif')
    }

    verifier()
    return () => { annule = true }
  }, [iOS, installee, utilisateur, activer])

  // SIGNALÉ EN SESSION : "ça me dit notif envoyée mais je reçois rien" —
  // rien à voir avec l'envoi (functions/lib/push.js réussissait bien,
  // resultat.envoyes > 0). En cause : FCM ne déclenche AUTOMATIQUEMENT
  // l'affichage d'une notification via le service worker
  // (firebase-messaging-sw.js, onBackgroundMessage) que si l'app est en
  // ARRIÈRE-PLAN (onglet/PWA pas au premier plan, ou fermée). Quand l'app
  // est ouverte et au premier plan — le cas de figure exact quand on teste
  // depuis Réglages — le message arrive quand même, mais SILENCIEUSEMENT,
  // via un événement JS différent (onMessage) qu'aucun code n'écoutait
  // nulle part dans l'app : le payload arrivait donc bien, sans jamais rien
  // afficher. On écoute maintenant ce canal et on affiche la notification
  // "à la main" via le service worker déjà enregistré (showNotification),
  // avec les mêmes icônes/tag que la version arrière-plan — comportement
  // cohérent que l'app soit ouverte ou non, et les boutons de test dans
  // Réglages redeviennent utilisables même en restant sur la page.
  //
  // SIGNALÉ ENSUITE EN SESSION : "ça me les envoie en double" — le payload
  // côté serveur (functions/lib/push.js) combinait un `notification` de
  // haut niveau ET un `webpush.notification`, ce qui faisait que le
  // navigateur affichait la notification tout seul depuis le payload
  // webpush EN PLUS du showNotification() explicite ici. Le payload est
  // maintenant 100% `data` (voir push.js) : on lit donc charge.data
  // partout, jamais charge.notification (qui n'existe plus).
  useEffect(() => {
    let annule = false
    let desabonner = null

    async function ecouterPremierPlan() {
      const supporte = await isSupported().catch(() => false)
      if (!supporte || annule) return

      const messagerie = getMessaging(app)
      desabonner = onMessage(messagerie, (charge) => {
        console.log('[Notifications] message reçu au premier plan :', charge)

        const titre = charge.data?.titre || 'Ton Paris'
        const options = {
          body: charge.data?.corps || '',
          icon: `${import.meta.env.BASE_URL}icons/icon-192.png`,
          badge: `${import.meta.env.BASE_URL}icons/badge-72.png`,
          tag: charge.data?.etiquette || undefined,
          data: { lien: charge.data?.lien || '/' }
        }

        navigator.serviceWorker.ready
          .then((enregistrement) => enregistrement.showNotification(titre, options))
          .catch((e) => console.error('[Notifications] échec de l’affichage manuel (premier plan) :', e))
      })
    }

    ecouterPremierPlan()
    return () => { annule = true; desabonner?.() }
  }, [])

  const desactiver = useCallback(async () => {
    setEnCours(true)
    console.log('[Notifications] desactiver() — début')

    try {
      const messagerie = getMessaging(app)
      const jeton = await getToken(messagerie, { vapidKey: VAPID_PUBLIQUE }).catch((e) => {
        console.warn('[Notifications] getToken() a échoué pendant la désactivation (sans gravité, on continue) :', e?.code || e?.message || e)
        return null
      })

      if (jeton) {
        console.log('[Notifications] retrait de l’appareil côté serveur…')
        await httpsCallable(fonctions, 'retirerAppareil')({ jeton })
        await deleteToken(messagerie).catch(() => {})
        console.log('[Notifications] appareil retiré.')
      } else {
        console.log('[Notifications] aucun jeton local à retirer.')
      }

      setEtat('inactif')
    } finally {
      setEnCours(false)
    }
  }, [])

  return { etat, enCours, activer, desactiver, iOS, installee }
}
