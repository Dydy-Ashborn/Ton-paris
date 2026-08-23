import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import App from './App'

registerSW({
  onNeedRefresh() {
    // Mise à jour disponible : rechargement au prochain lancement, sans interrompre la session.
  },
  onOfflineReady() {
    // Coquille mise en cache, l'app s'ouvre hors ligne.
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
