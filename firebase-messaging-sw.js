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

// BUG CORRIGÉ EN SESSION (même famille que le chemin d'enregistrement du SW
// dans useNotifications.js, et cheminPublic()/trouverLogo() côté app) :
// '/icons/...' en dur pointe à la racine du DOMAINE. Sur Firebase Hosting ça
// coïncide avec le vrai chemin, mais sur GitHub Pages ce fichier est servi
// depuis /Ton-paris/firebase-messaging-sw.js et les icônes doivent donc être
// demandées sous /Ton-paris/icons/... — pas d'import.meta.env ici (fichier
// JS brut, pas construit par Vite), donc la base est déduite du chemin du
// script lui-même (self.location), qui est toujours correct quel que soit
// le déploiement.
const BASE = self.location.pathname.replace(/firebase-messaging-sw\.js$/, '')

// Message 100% DATA depuis functions/lib/push.js (voir le commentaire
// là-bas — plus de champ `notification`, pour éviter que le navigateur
// affiche la notification tout seul EN PLUS de ce showNotification() ici,
// d'où le doublon signalé en session). On lit donc charge.data partout,
// jamais charge.notification (qui n'existe plus dans le payload).
messagerie.onBackgroundMessage((charge) => {
  const titre = charge.data?.titre || 'Ton Paris'
  const options = {
    body: charge.data?.corps || '',
    icon: `${BASE}icons/icon-192.png`,
    badge: `${BASE}icons/badge-72.png`,
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
