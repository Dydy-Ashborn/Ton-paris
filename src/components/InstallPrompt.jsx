import { useEffect, useState } from 'react'
import './InstallPrompt.css'

const CLE_REFUS = 'tonparis.install.refuse'

function estInstallee() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true
}

function estIOS() {
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent) && !window.MSStream
}

export default function InstallPrompt() {
  const [evenement, setEvenement] = useState(null)
  const [visible, setVisible] = useState(false)
  const [ios, setIos] = useState(false)

  useEffect(() => {
    if (estInstallee() || sessionStorage.getItem(CLE_REFUS)) return

    if (estIOS()) {
      setIos(true)
      setVisible(true)
      return
    }

    const capture = (e) => {
      e.preventDefault()
      setEvenement(e)
      setVisible(true)
    }
    window.addEventListener('beforeinstallprompt', capture)

    const installee = () => setVisible(false)
    window.addEventListener('appinstalled', installee)

    return () => {
      window.removeEventListener('beforeinstallprompt', capture)
      window.removeEventListener('appinstalled', installee)
    }
  }, [])

  const installer = async () => {
    if (!evenement) return
    evenement.prompt()
    const { outcome } = await evenement.userChoice
    if (outcome === 'accepted') setVisible(false)
    setEvenement(null)
  }

  const refuser = () => {
    sessionStorage.setItem(CLE_REFUS, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <aside className="invite" role="complementary">
      <p className="invite__texte">
        <strong>Ajoute l'app à ton écran d'accueil.</strong>{' '}
        {ios
          ? "Appuie sur Partager, puis « Sur l'écran d'accueil ». C'est la condition pour recevoir les notifs de match."
          : 'Notifs des matchs et ouverture instantanée.'}
      </p>
      {!ios && (
        <button className="invite__action" onClick={installer}>Installer</button>
      )}
      <button className="invite__fermer" onClick={refuser} aria-label="Masquer l'invitation">×</button>
    </aside>
  )
}
