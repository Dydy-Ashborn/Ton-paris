import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// Deux cibles de déploiement, deux racines différentes : Firebase Hosting sert
// ce site à la racine du domaine ("/", `npm run build` + `firebase deploy`),
// GitHub Pages le sert dans un sous-dossier ("/Ton-paris/", voir GH_PAGES=true
// dans le script `build:pages` de package.json — Source: "Deploy from a
// branch" pointée sur la branche `gh-pages` générée par `npm run deploy:pages`).
// Sans ce `base` correct, les fichiers JS/CSS générés sont référencés en
// chemins absolus depuis la racine du domaine ("/assets/...") au lieu du
// sous-dossier réel sur github.io → 404 sur tout → page blanche.
const BASE = process.env.GH_PAGES === 'true' ? '/Ton-paris/' : '/'

export default defineConfig({
  base: BASE,
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: "Ici c'est ton Paris",
        short_name: 'Ton Paris',
        description: "Les matchs de tes clubs, la chaîne de diffusion et l'actu du Paris Saint-Germain.",
        lang: 'fr',
        dir: 'ltr',
        start_url: BASE,
        scope: BASE,
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#050F24',
        theme_color: '#050F24',
        categories: ['sports', 'news'],
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
        navigateFallback: `${BASE}index.html`,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'google-fonts-stylesheets' }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 }
            }
          },
          {
            urlPattern: /^https:\/\/firestore\.googleapis\.com\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'firestore-data',
              networkTimeoutSeconds: 5,
              expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 6 }
            }
          }
        ]
      },
      devOptions: { enabled: true, type: 'module' }
    })
  ],
  server: { port: 5173 }
})
