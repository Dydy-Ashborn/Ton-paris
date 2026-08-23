import { useEffect, useMemo, useState } from 'react'
import { chargerClubs, chargerNations, chercher } from '../lib/catalogue'
import { usePreferences, MAX_CLUBS_SUIVIS } from '../hooks/usePreferences'
import { useAuth } from '../hooks/useAuth'
import './Onboarding.css'

const ETAPES = ['Ton club', 'Ta sélection', 'Tes clubs suivis', 'Tes notifs']

export default function Onboarding() {
  const { utilisateur } = useAuth()
  const { enregistrer } = usePreferences()

  const [etape, setEtape] = useState(0)
  const [clubs, setClubs] = useState([])
  const [nations, setNations] = useState([])
  const [recherche, setRecherche] = useState('')

  const [clubFavori, setClubFavori] = useState(null)
  const [nationFavorite, setNationFavorite] = useState(null)
  const [clubsSuivis, setClubsSuivis] = useState([])
  const [notifications, setNotifications] = useState({
    matinDuMatch: true,
    uneHeureAvant: true,
    coupDEnvoi: true,
    actuImportante: true,
    touteActu: false
  })
  const [envoi, setEnvoi] = useState(false)

  useEffect(() => {
    chargerClubs().then(setClubs)
    chargerNations().then(setNations)
  }, [])

  useEffect(() => { setRecherche('') }, [etape])

  const clubsFiltres = useMemo(() => chercher(clubs, recherche), [clubs, recherche])
  const nationsFiltrees = useMemo(() => chercher(nations, recherche), [nations, recherche])

  const suivisSansFavori = useMemo(
    () => clubsFiltres.filter((c) => c.id !== clubFavori?.id),
    [clubsFiltres, clubFavori]
  )

  const basculerSuivi = (club) => {
    setClubsSuivis((actuels) => {
      const dejaSuivi = actuels.some((c) => c.id === club.id)
      if (dejaSuivi) return actuels.filter((c) => c.id !== club.id)
      if (actuels.length >= MAX_CLUBS_SUIVIS) return actuels
      return [...actuels, club]
    })
  }

  const basculerNotif = (cle) => {
    setNotifications((n) => ({ ...n, [cle]: !n[cle] }))
  }

  const peutAvancer = () => {
    if (etape === 0) return Boolean(clubFavori)
    if (etape === 1) return Boolean(nationFavorite)
    return true
  }

  const terminer = async () => {
    setEnvoi(true)
    await enregistrer({
      clubFavori,
      nationFavorite,
      clubsSuivis,
      notifications,
      onboardingTermine: true
    })
  }

  const suivant = () => {
    if (etape < ETAPES.length - 1) setEtape(etape + 1)
    else terminer()
  }

  return (
    <div className="onb">
      <header className="onb__tete">
        <p className="onb__compteur">Étape {etape + 1} sur {ETAPES.length}</p>
        <div className="onb__jauge">
          {ETAPES.map((_, i) => (
            <span key={i} className={`onb__cran${i <= etape ? ' onb__cran--fait' : ''}`} />
          ))}
        </div>
      </header>

      <div className="onb__corps">
        {etape === 0 && (
          <>
            <h2 className="onb__titre">Quel est ton club ?</h2>
            <p className="onb__aide">Il ouvre ton accueil et passe avant tout le reste.</p>
            <input
              className="onb__recherche"
              type="search"
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
              placeholder="Chercher un club"
            />
            <ul className="onb__liste">
              {clubsFiltres.map((club) => (
                <li key={club.id}>
                  <button
                    className={`onb__choix${clubFavori?.id === club.id ? ' onb__choix--actif' : ''}`}
                    onClick={() => setClubFavori(club)}
                  >
                    <span className="onb__choix-nom">{club.nom}</span>
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}

        {etape === 1 && (
          <>
            <h2 className="onb__titre">Et ta sélection ?</h2>
            <p className="onb__aide">Ses matchs apparaîtront pendant les trêves internationales.</p>
            <input
              className="onb__recherche"
              type="search"
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
              placeholder="Chercher une sélection"
            />
            <ul className="onb__liste">
              {nationsFiltrees.map((nation) => (
                <li key={nation.id}>
                  <button
                    className={`onb__choix${nationFavorite?.id === nation.id ? ' onb__choix--actif' : ''}`}
                    onClick={() => setNationFavorite(nation)}
                  >
                    <span className="onb__choix-nom">{nation.nom}</span>
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}

        {etape === 2 && (
          <>
            <h2 className="onb__titre">Tu suis d'autres clubs ?</h2>
            <p className="onb__aide">
              {clubsSuivis.length} sur {MAX_CLUBS_SUIVIS} choisis. Tu peux aussi passer cette étape.
            </p>
            <input
              className="onb__recherche"
              type="search"
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
              placeholder="Chercher un club"
            />
            <ul className="onb__liste">
              {suivisSansFavori.map((club) => {
                const choisi = clubsSuivis.some((c) => c.id === club.id)
                const complet = clubsSuivis.length >= MAX_CLUBS_SUIVIS && !choisi
                return (
                  <li key={club.id}>
                    <button
                      className={`onb__choix${choisi ? ' onb__choix--actif' : ''}`}
                      onClick={() => basculerSuivi(club)}
                      disabled={complet}
                    >
                      <span className="onb__choix-nom">{club.nom}</span>
                      {choisi && <span className="onb__choix-marque">Suivi</span>}
                    </button>
                  </li>
                )
              })}
            </ul>
          </>
        )}

        {etape === 3 && (
          <>
            <h2 className="onb__titre">Qu'est-ce qu'on te signale ?</h2>
            <p className="onb__aide">Tu pourras changer ça à tout moment dans les réglages.</p>
            <ul className="onb__notifs">
              {[
                ['matinDuMatch', 'Le matin du match', 'Vers 9h, avec la chaîne'],
                ['uneHeureAvant', '1 heure avant', "Rappel avant le coup d'envoi"],
                ['coupDEnvoi', "Au coup d'envoi", 'Le match commence'],
                ['actuImportante', 'Actu importante', 'Mercato, blessure, groupe'],
                ['touteActu', "Toute l'actu", 'Chaque article publié']
              ].map(([cle, titre, detail]) => (
                <li className="onb__notif" key={cle}>
                  <div>
                    <p className="onb__notif-titre">{titre}</p>
                    <p className="onb__notif-detail">{detail}</p>
                  </div>
                  <button
                    className={`bascule${notifications[cle] ? ' bascule--on' : ''}`}
                    onClick={() => basculerNotif(cle)}
                    role="switch"
                    aria-checked={notifications[cle]}
                    aria-label={titre}
                  />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <footer className="onb__pied">
        {etape > 0 && (
          <button className="onb__retour" onClick={() => setEtape(etape - 1)}>Retour</button>
        )}
        <button className="onb__suivant" onClick={suivant} disabled={!peutAvancer() || envoi}>
          {envoi ? 'Un instant…' : etape === ETAPES.length - 1 ? `C'est parti, ${utilisateur?.displayName || ''}`.trim() : 'Continuer'}
        </button>
      </footer>
    </div>
  )
}
