import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { FournisseurAuth, useAuth } from './hooks/useAuth'
import { FournisseurPreferences, usePreferences } from './hooks/usePreferences'
import { FournisseurToasts, useToasts } from './hooks/useToasts'
import { useActus } from './hooks/useActus'
import { useDigestActus } from './hooks/useDigestActus'
import { pointerActiviteFut, recevoirBonusLancementFut } from './hooks/useCartesFut'
import { useCadeauxFut } from './hooks/useCadeauxFut'
import Splash from './components/Splash'
import InstallPrompt from './components/InstallPrompt'
import BottomNav from './components/BottomNav'
import ArticleModal from './components/ArticleModal'
import DigestModal from './components/DigestModal'
import CadeauModal from './components/CadeauModal'
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
import Packs from './pages/Packs'
import Reglages from './pages/Reglages'
import './styles/global.css'

function Application() {
  const { utilisateur, chargement: authEnCours, deconnexion } = useAuth()
  const { preferences, chargement: prefsEnCours } = usePreferences()
  const { notifier } = useToasts()
  const { actus } = useActus()
  const digest = useDigestActus(actus)
  // Cadeaux de carte FUT en attente d'ouverture (25/08/2026, voir
  // hooks/useCadeauxFut.js, components/CadeauModal.jsx) — montés ici
  // (racine de l'app authentifiée) et non dans pages/Packs.jsx : la popup
  // doit pouvoir s'afficher quelle que soit la page où se trouve le
  // destinataire au moment où un ami lui envoie une carte.
  const { cadeaux, marquerOuvert } = useCadeauxFut()
  const [splashFini, setSplashFini] = useState(false)
  const [articleOuvert, setArticleOuvert] = useState(null)

  const donneesPretes = !authEnCours && !prefsEnCours

  // Bonus d'activité quotidien du système de packs FUT (voir
  // hooks/useCartesFut.js, +30 étoiles par défaut depuis le 25/08/2026,
  // revu à la hausse — "1 étoile c'est pas assez") — pointé une fois l'app
  // réellement utilisable (onboarding déjà passé), jamais pendant
  // Connexion/Onboarding. Idempotent côté serveur (functions/packsFut.js
  // ne crédite qu'une fois par jour calendaire Europe/Paris) : sans risque de
  // le rappeler à chaque montage/re-render, donc pas besoin de garde locale
  // en plus. Échec silencieux — un bonus non crédité ne doit jamais bloquer
  // ni polluer l'ouverture de l'app (même logique que l'envoi d'e-mail
  // best-effort décrit dans les principes du projet).
  useEffect(() => {
    if (!donneesPretes || !utilisateur || !preferences?.onboardingTermine) return
    pointerActiviteFut().catch(() => {})
  }, [donneesPretes, utilisateur, preferences?.onboardingTermine])

  // Bonus de lancement (25/08/2026, 100 étoiles offertes une seule fois par
  // compte — voir hooks/useCartesFut.js, recevoirBonusLancementFut).
  // Idempotent côté serveur comme pointerActiviteFut juste au-dessus, donc
  // même absence de garde locale supplémentaire — mais CONTRAIREMENT au
  // bonus d'activité (silencieux), on affiche un toast UNIQUEMENT si
  // `credite` est vrai : sinon chaque connexion afficherait le message à
  // tort pour un compte qui a déjà touché son bonus. Échec silencieux si
  // l'appel lève (même principe best-effort que pointerActiviteFut).
  useEffect(() => {
    if (!donneesPretes || !utilisateur || !preferences?.onboardingTermine) return
    recevoirBonusLancementFut()
      .then((resultat) => {
        if (resultat?.data?.credite) {
          notifier(`Bienvenue ! +${resultat.data.montant} étoiles offertes`, { type: 'succes' })
        }
      })
      .catch(() => {})
  }, [donneesPretes, utilisateur, preferences?.onboardingTermine, notifier])

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
          <Route path="/packs" element={<Packs />} />
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

      <CadeauModal cadeaux={cadeaux} onOuvrir={marquerOuvert} />

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
