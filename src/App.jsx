import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { FournisseurAuth, useAuth } from './hooks/useAuth'
import { FournisseurPreferences, usePreferences } from './hooks/usePreferences'
import { FournisseurToasts } from './hooks/useToasts'
import { useActus } from './hooks/useActus'
import { useDigestActus } from './hooks/useDigestActus'
import Splash from './components/Splash'
import InstallPrompt from './components/InstallPrompt'
import BottomNav from './components/BottomNav'
import ArticleModal from './components/ArticleModal'
import DigestModal from './components/DigestModal'
import ToastHost from './components/ToastHost'
import Connexion from './pages/Connexion'
import Onboarding from './pages/Onboarding'
import Accueil from './pages/Accueil'
import Matchs from './pages/Matchs'
import Compo from './pages/Compo'
import Classement from './pages/Classement'
import Effectif from './pages/Effectif'
import Chouchou from './pages/Chouchou'
import Mercato from './pages/Mercato'
import Reglages from './pages/Reglages'
import './styles/global.css'

function Application() {
  const { utilisateur, chargement: authEnCours, deconnexion } = useAuth()
  const { preferences, chargement: prefsEnCours } = usePreferences()
  const { actus } = useActus()
  const digest = useDigestActus(actus)
  const [splashFini, setSplashFini] = useState(false)
  const [articleOuvert, setArticleOuvert] = useState(null)

  const donneesPretes = !authEnCours && !prefsEnCours

  if (!splashFini) {
    return <Splash pret={donneesPretes} onTermine={() => setSplashFini(true)} />
  }

  if (!utilisateur) return <Connexion />

  if (preferences && !preferences.onboardingTermine) return <Onboarding />

  const initiale = (utilisateur.displayName || utilisateur.email || '?').charAt(0).toUpperCase()

  return (
    <div className="shell">
      <InstallPrompt />

      <header className="shell__header">
        <div className="marque">
          <h1 className="marque__logo">Ici c'est <em>ton</em> Paris</h1>
          <span className="marque__profil" aria-label="Profil">{initiale}</span>
        </div>
      </header>

      <main className="shell__main">
        <Routes>
          <Route path="/" element={<Accueil onOuvrirArticle={setArticleOuvert} />} />
          <Route path="/matchs" element={<Matchs />} />
          <Route path="/compo" element={<Compo />} />
          <Route path="/classement" element={<Classement />} />
          <Route path="/effectif" element={<Effectif />} />
          <Route path="/chouchou" element={<Chouchou onOuvrirArticle={setArticleOuvert} />} />
          <Route path="/mercato" element={<Mercato />} />
          <Route path="/reglages" element={<Reglages />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <div className="shell__fin" />
      </main>

      <BottomNav />

      <ArticleModal actu={articleOuvert} onFermer={() => setArticleOuvert(null)} />

      <DigestModal
        ouvert={digest.ouvert}
        actus={digest.actus}
        onFermer={digest.fermer}
        onOuvrirArticle={setArticleOuvert}
      />

      <ToastHost />
    </div>
  )
}

export default function App() {
  // `import.meta.env.BASE_URL` reflète le `base` défini dans vite.config.js au
  // moment du build : "/" sur Firebase Hosting (servi à la racine du domaine),
  // "/Ton-paris/" sur GitHub Pages (servi dans un sous-dossier, voir
  // `npm run build:pages`) — sans ce basename, les liens de BottomNav pointeraient
  // vers la racine du domaine github.io au lieu du sous-dossier réel une fois
  // déployé là-bas.
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <FournisseurToasts>
        <FournisseurAuth>
          <FournisseurPreferences>
            <Application />
          </FournisseurPreferences>
        </FournisseurAuth>
      </FournisseurToasts>
    </BrowserRouter>
  )
}
