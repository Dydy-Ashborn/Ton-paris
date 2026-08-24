import { useEffect, useMemo, useState } from 'react'
import { httpsCallable } from 'firebase/functions'
import { usePreferences, MAX_CLUBS_SUIVIS } from '../hooks/usePreferences'
import { useAuth } from '../hooks/useAuth'
import { useNotifications } from '../hooks/useNotifications'
import { useDebug } from '../hooks/useDebug'
import { useRafraichir } from '../hooks/useRafraichir'
import { chargerClubs, chargerNations, chercher } from '../lib/catalogue'
import { fonctions } from '../lib/firebase'
import ConfirmModal from '../components/ConfirmModal'
import PanneauTest from '../components/PanneauTest'
import './Reglages.css'

const LIGNES_NOTIFS = [
  ['matinDuMatch', 'Le matin du match', 'Vers 9h, avec la chaîne'],
  ['uneHeureAvant', '1 heure avant', "Rappel avant le coup d'envoi"],
  ['coupDEnvoi', "Au coup d'envoi", 'Le match commence'],
  ['actuImportante', 'Actu importante', 'Mercato, blessure, groupe'],
  ['touteActu', "Toute l'actu", 'Chaque article publié']
]

export default function Reglages() {
  const { utilisateur, deconnexion } = useAuth()
  const { preferences, enregistrer } = usePreferences()
  const { etat, enCours, activer, desactiver, iOS, installee } = useNotifications(utilisateur)
  const debug = useDebug()

  // Bouton de test (mode debug uniquement) : envoie une VRAIE notification
  // push à cet appareil via functions/donneesTest.js (envoyerNotifTest) —
  // DEMANDÉ EN SESSION ("des boutons de test pour lancer des notifs, plus
  // simple") plutôt que d'écrire à la main un faux document dans Firestore
  // pour déclencher notifActu. Visible seulement quand un appareil est déjà
  // enregistré (etat === 'actif', voir plus bas) : sinon l'appel échoue de
  // toute façon (aucun jeton à qui envoyer, voir la garde-fou côté serveur).
  const [envoyerNotifTest, envoiNotifTestEnCours] = useRafraichir(
    () => httpsCallable(fonctions, 'envoyerNotifTest')(),
    {
      libelleSucces: 'Notif de test envoyée — regarde ton appareil.',
      libelleErreur: (e) => e?.message || "Échec de l'envoi de la notif de test."
    }
  )

  const [clubs, setClubs] = useState([])
  const [nations, setNations] = useState([])
  const [selecteur, setSelecteur] = useState(null)
  const [recherche, setRecherche] = useState('')
  const [deconnexionDemandee, setDeconnexionDemandee] = useState(false)

  useEffect(() => {
    chargerClubs().then(setClubs)
    chargerNations().then(setNations)
  }, [])

  useEffect(() => { setRecherche('') }, [selecteur])

  const suivis = preferences?.clubsSuivis || []

  const optionsSelecteur = useMemo(() => {
    if (selecteur === 'nation') return chercher(nations, recherche)
    const favoriId = preferences?.clubFavori?.id
    const liste = chercher(clubs, recherche)
    return selecteur === 'suivis' ? liste.filter((c) => c.id !== favoriId) : liste
  }, [selecteur, clubs, nations, recherche, preferences])

  const basculerNotif = (cle) => {
    enregistrer({
      notifications: { ...(preferences?.notifications || {}), [cle]: !preferences?.notifications?.[cle] }
    })
  }

  const choisir = (entree) => {
    if (selecteur === 'favori') {
      enregistrer({
        clubFavori: entree,
        clubsSuivis: suivis.filter((c) => c.id !== entree.id)
      })
      setSelecteur(null)
      return
    }

    if (selecteur === 'nation') {
      enregistrer({ nationFavorite: entree })
      setSelecteur(null)
      return
    }

    const deja = suivis.some((c) => c.id === entree.id)
    if (deja) {
      enregistrer({ clubsSuivis: suivis.filter((c) => c.id !== entree.id) })
    } else if (suivis.length < MAX_CLUBS_SUIVIS) {
      enregistrer({ clubsSuivis: [...suivis, entree] })
    }
  }

  return (
    <>
      <section className="section">
        <div className="section__tete"><h2 className="section__titre">Tes clubs</h2></div>

        <div className="etiquettes">
          <button className="etiquette etiquette--favori" onClick={() => setSelecteur('favori')}>
            {preferences?.clubFavori?.court || preferences?.clubFavori?.nom || 'Choisir'} · favori
          </button>

          {suivis.map((club) => (
            <button key={club.id} className="etiquette" onClick={() => setSelecteur('suivis')}>
              {club.court || club.nom}
            </button>
          ))}

          {suivis.length < MAX_CLUBS_SUIVIS && (
            <button className="etiquette etiquette--ajout" onClick={() => setSelecteur('suivis')}>
              + Ajouter ({MAX_CLUBS_SUIVIS - suivis.length} restants)
            </button>
          )}
        </div>

        <div className="etiquettes etiquettes--suite">
          <button className="etiquette etiquette--favori" onClick={() => setSelecteur('nation')}>
            {preferences?.nationFavorite?.nom || 'Choisir'} · sélection
          </button>
        </div>
      </section>

      <section className="section">
        <div className="section__tete"><h2 className="section__titre">Notifications</h2></div>

        {etat === 'indisponible' && (
          <p className="avis">
            {iOS && !installee
              ? "Ajoute d'abord l'app à ton écran d'accueil : sur iPhone, c'est la seule façon de recevoir les notifications."
              : 'Ce navigateur ne gère pas les notifications.'}
          </p>
        )}

        {etat === 'refuse' && (
          <p className="avis">
            Les notifications sont bloquées pour ce site. Réactive-les dans les réglages de ton navigateur.
          </p>
        )}

        {etat === 'inactif' && (
          <button className="bouton-plein" onClick={activer} disabled={enCours}>
            {enCours ? 'Activation…' : 'Activer les notifications'}
          </button>
        )}

        {etat === 'actif' && (
          <>
            <ul className="lignes">
              {LIGNES_NOTIFS.map(([cle, titre, detail]) => (
                <li className="ligne" key={cle}>
                  <div>
                    <p className="ligne__titre">{titre}</p>
                    <p className="ligne__detail">{detail}</p>
                  </div>
                  <button
                    className={`bascule${preferences?.notifications?.[cle] ? ' bascule--on' : ''}`}
                    onClick={() => basculerNotif(cle)}
                    role="switch"
                    aria-checked={Boolean(preferences?.notifications?.[cle])}
                    aria-label={titre}
                  />
                </li>
              ))}
            </ul>

            <button className="bouton-discret" onClick={desactiver} disabled={enCours}>
              Ne plus rien recevoir sur cet appareil
            </button>

            {debug && (
              <div style={{ marginTop: 12 }}>
                <PanneauTest
                  titre="Notifications de test"
                  actions={[
                    {
                      libelle: 'Envoyer une notif de test',
                      onClick: () => envoyerNotifTest().catch(() => {}),
                      enCours: envoiNotifTestEnCours
                    }
                  ]}
                />
              </div>
            )}
          </>
        )}
      </section>

      <section className="section">
        <div className="section__tete"><h2 className="section__titre">Ton compte</h2></div>
        <p className="avis avis--doux">{utilisateur?.email}</p>
        <button className="bouton-discret" onClick={() => setDeconnexionDemandee(true)}>
          Se déconnecter
        </button>
      </section>

      {selecteur && (
        <div className="selecteur" onClick={() => setSelecteur(null)}>
          <div className="selecteur__panneau" onClick={(e) => e.stopPropagation()}>
            <div className="selecteur__tete">
              <h3 className="selecteur__titre">
                {selecteur === 'favori' ? 'Ton club' : selecteur === 'nation' ? 'Ta sélection' : 'Tes clubs suivis'}
              </h3>
              <button className="selecteur__fermer" onClick={() => setSelecteur(null)} aria-label="Fermer">×</button>
            </div>

            <input
              className="selecteur__recherche"
              type="search"
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
              placeholder="Chercher"
              autoFocus
            />

            <ul className="selecteur__liste">
              {optionsSelecteur.map((entree) => {
                const actif =
                  selecteur === 'favori'
                    ? preferences?.clubFavori?.id === entree.id
                    : selecteur === 'nation'
                      ? preferences?.nationFavorite?.id === entree.id
                      : suivis.some((c) => c.id === entree.id)

                const complet = selecteur === 'suivis' && !actif && suivis.length >= MAX_CLUBS_SUIVIS

                return (
                  <li key={entree.id}>
                    <button
                      className={`selecteur__choix${actif ? ' selecteur__choix--actif' : ''}`}
                      onClick={() => choisir(entree)}
                      disabled={complet}
                    >
                      {entree.nom}
                      {actif && selecteur === 'suivis' && <span className="selecteur__marque">Retirer</span>}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}

      <ConfirmModal
        ouvert={deconnexionDemandee}
        message="Te déconnecter de cet appareil ?"
        texteConfirmer="Se déconnecter"
        onConfirm={() => { setDeconnexionDemandee(false); deconnexion() }}
        onCancel={() => setDeconnexionDemandee(false)}
      />
    </>
  )
}
