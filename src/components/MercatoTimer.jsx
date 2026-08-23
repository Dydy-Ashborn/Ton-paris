import { useHorlogeVivante } from '../hooks/useHorlogeVivante'
import { useFenetresMercato } from '../hooks/useFenetresMercato'
import { fenetreActuelle, prochaineFenetre, decompose, SEUIL_BIENTOT_JOURS } from '../lib/mercato'
import './MercatoTimer.css'

const EMOJI = { ete: '🔥', hiver: '❄️' }
const JOUR_MS = 24 * 60 * 60 * 1000

function Compteur({ jours, heures, minutes, secondes, compact = false }) {
  const pad = (n) => String(n).padStart(2, '0')
  return (
    <div className="mercato-timer__compte" aria-hidden="true">
      <span className="mercato-timer__bloc"><strong>{jours}</strong>j</span>
      <span className="mercato-timer__bloc"><strong>{pad(heures)}</strong>h</span>
      <span className="mercato-timer__bloc"><strong>{pad(minutes)}</strong>m</span>
      {!compact && <span className="mercato-timer__bloc"><strong>{pad(secondes)}</strong>s</span>}
    </div>
  )
}

/**
 * Bandeau événementiel affiché en haut de l'onglet Mercato :
 * - fenêtre ouverte → décompte en direct jusqu'à la fermeture (pulse rouge
 *   dans les dernières 24h) ;
 * - fenêtre fermée mais ouverture dans les SEUIL_BIENTOT_JOURS jours → teaser
 *   "bientôt" avec décompte jusqu'à l'ouverture ;
 * - sinon → rien (ne s'affiche pas le reste de l'année).
 * Calendrier lu depuis Firestore (voir useFenetresMercato) — entièrement
 * automatique : ajouter/modifier une saison dans Firestore suffit, aucun
 * redéploiement du front n'est nécessaire (voir
 * scripts/maj-fenetres-mercato.mjs).
 */
export default function MercatoTimer() {
  const maintenant = useHorlogeVivante(1000)
  const { fenetres } = useFenetresMercato()

  const ouverte = fenetreActuelle(fenetres, maintenant)

  if (ouverte) {
    const { jours, heures, minutes, secondes } = decompose(ouverte.fin - maintenant)
    const urgent = ouverte.fin - maintenant < JOUR_MS

    return (
      <div className={`mercato-timer mercato-timer--ouvert${urgent ? ' mercato-timer--urgent' : ''}`}>
        <span className="mercato-timer__badge">{EMOJI[ouverte.type]} Mercato ouvert</span>
        <p className="mercato-timer__titre display">{ouverte.libelle}</p>
        <p className="mercato-timer__sous">Ferme dans</p>
        <Compteur jours={jours} heures={heures} minutes={minutes} secondes={secondes} />
      </div>
    )
  }

  const prochaine = prochaineFenetre(fenetres, maintenant)
  if (!prochaine) return null

  const msAvant = prochaine.debut - maintenant
  if (msAvant > SEUIL_BIENTOT_JOURS * JOUR_MS) return null

  const { jours, heures, minutes } = decompose(msAvant)

  return (
    <div className="mercato-timer mercato-timer--bientot">
      <span className="mercato-timer__badge">{EMOJI[prochaine.type]} Bientôt</span>
      <p className="mercato-timer__titre display">{prochaine.libelle}</p>
      <p className="mercato-timer__sous">Ouvre dans</p>
      <Compteur jours={jours} heures={heures} minutes={minutes} compact />
    </div>
  )
}
