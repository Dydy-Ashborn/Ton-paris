/**
 * Service worker dedie aux notifications.
 * Il coexiste avec celui genere par vite-plugin-pwa : Firebase impose ce nom de fichier.
 * Les valeurs sont publiques par nature, comme la configuration cote client.
 *
 * >>> REMPLACE LES SIX VALEURS CI-DESSOUS PAR CELLES DE TON PROJET FIREBASE <<<
 */
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js')

firebase.initializeApp({
  apiKey: "AIzaSyBQDetC-J1AfOD20h6cYLKHWACSxFSsWJI",
  authDomain: 'ton-paris.firebaseapp.com',
  projectId: 'ton-paris',
  storageBucket: 'ton-paris.firebasestorage.app',
  messagingSenderId: '669449450778',
  appId: '1:669449450778:web:732d76c1d2a5c5b4e228a3'
})

const messagerie = firebase.messaging()

messagerie.onBackgroundMessage((charge) => {
  const titre = charge.notification?.title || 'Ton Paris'
  const options = {
    body: charge.notification?.body || '',
    icon: '/icons/icon-192.png',
    badge: '/icons/badge-72.png',
    tag: charge.data?.etiquette || undefined,
    data: { lien: charge.data?.lien || '/' }
  }

  self.registration.showNotification(titre, options)
})

self.addEventListener('notificationclick', (evenement) => {
  evenement.notification.close()
  const lien = evenement.notification.data?.lien || '/'

  evenement.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((fenetres) => {
      // Une fenetre deja ouverte est reutilisee plutot que d'en ouvrir une seconde.
      for (const fenetre of fenetres) {
        if ('focus' in fenetre) {
          fenetre.navigate?.(lien)
          return fenetre.focus()
        }
      }
      return self.clients.openWindow(lien)
    })
  )
})
