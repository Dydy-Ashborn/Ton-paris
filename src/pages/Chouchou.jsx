import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { httpsCallable } from 'firebase/functions'
import { useEffectif } from '../hooks/useEffectif'
import { useActus } from '../hooks/useActus'
import { usePreferences } from '../hooks/usePreferences'
import { useRafraichir } from '../hooks/useRafraichir'
import { actusDuJoueur, identifiantJoueur, trouverChouchou } from '../lib/joueur'
import { fonctions } from '../lib/firebase'
import NewsItem from '../components/NewsItem'
import './Chouchou.css'

/**
 * Vitrine du joueur "chouchou" choisi par l'utilisateur (voir le bouton ★
 * sur chaque ligne de l'Effectif) : portrait plein cadre, toutes les stats
 * déjà collectées depuis Maxifoot (voir functions/sources/maxifootFicheJoueur.js
 * et maxifootEffectif.js — rien de nouveau à scraper, l'Effectif les a déjà
 * toutes), et le flux d'actus PSG filtré aux articles qui le mentionnent
 * (voir lib/joueur.js).
 */
export default function Chouchou({ onOuvrirArticle }) {
  const { effectif, chargement: chargementEffectif } = useEffectif()
  const { actus, chargement: chargementActus } = useActus()
  const { preferences, enregistrer } = usePreferences()
  const navigue = useNavigate()
  const [photoEnEchec, setPhotoEnEchec] = useState(false)

  // trouverChouchou() ne matche jamais quand joueurChouchouId est
  // absent/falsy — voir lib/joueur.js pour le bug que cette garde corrige.
  const joueur = useMemo(
    () => trouverChouchou(effectif?.joueurs, preferences?.joueurChouchouId),
    [effectif, preferences]
  )

  // Logs de debug demandés explicitement (chouchou ne s'affichait pas
  // après sélection) : permet de voir en un coup d'œil, dans la console,
  // si le problème vient de la préférence enregistrée ou du rapprochement
  // avec l'effectif.
  useEffect(() => {
    console.debug('[Chouchou] état', {
      joueurChouchouId: preferences?.joueurChouchouId,
      nbJoueursEffectif: effectif?.joueurs?.length ?? 0,
      idsEffectif: (effectif?.joueurs || []).map(identifiantJoueur),
      joueurTrouve: joueur ? { nom: joueur.nom, id: identifiantJoueur(joueur) } : null
    })
  }, [preferences, effectif, joueur])

  const actusJoueur = useMemo(() => actusDuJoueur(actus, joueur), [actus, joueur])

  // BUG SIGNALÉ : "ça me remet sur effectif et rien n'a changé". L'écriture
  // Firestore réussissait probablement (le .then() ne navigue qu'après),
  // mais aucun retour visuel ne confirmait quoi que ce soit à
  // l'utilisateur — impossible de distinguer "ça a marché mais rien à
  // voir sur Effectif" d'un vrai échec silencieux. useRafraichir (même
  // pattern que Effectif.jsx) ajoute un toast succès/erreur systématique.
  const [retirerChouchouAction, retraitEnCours] = useRafraichir(
    () => enregistrer({ joueurChouchouId: null }),
    {
      libelleSucces: 'Chouchou retiré — choisis-en un nouveau depuis l’effectif.',
      libelleErreur: 'Impossible de retirer ce chouchou pour le moment, réessaie.'
    }
  )

  // Infos "riches" (contrat, sélections, carrière...) : scrapées à la
  // demande pour ce seul joueur (voir functions/detailsJoueur.js), pas
  // pour tout l'effectif — réponse à "encore plus d'info pour notre
  // chouchou uniquement". Mises en cache côté serveur 24h, donc pas de
  // re-fetch à chaque petit changement de préférences (favori, clubs
  // suivis...), seulement quand le joueur affiché change réellement.
  const [details, setDetails] = useState(null)
  const [detailsEnCours, setDetailsEnCours] = useState(false)
  const [detailsErreur, setDetailsErreur] = useState(false)
  const joueurId = joueur ? identifiantJoueur(joueur) : null

  useEffect(() => {
    setDetails(null)
    setDetailsErreur(false)
    if (!joueur?.lien || !joueurId) return

    setDetailsEnCours(true)
    httpsCallable(fonctions, 'recupererDetailsJoueur')({ joueurId, lien: joueur.lien })
      .then((resultat) => {
        console.debug('[Chouchou] détails reçus', resultat.data)
        setDetails(resultat.data)
      })
      .catch((e) => {
        console.error('[Chouchou] échec récupération détails', e)
        setDetailsErreur(true)
      })
      .finally(() => setDetailsEnCours(false))
  }, [joueurId, joueur?.lien])

  const chargement = chargementEffectif || chargementActus

  if (chargement) {
    return <p className="attente attente--marge">Chargement…</p>
  }

  if (!preferences?.joueurChouchouId || !joueur) {
    return (
      <section className="section">
        <div className="vide">
          <p className="vide__titre">Pas encore de chouchou</p>
          <p className="vide__texte">
            Choisis ton joueur préféré depuis l'effectif : appuie sur l'étoile ★ à côté de son nom.
          </p>
          <Link className="chouchou__lien-effectif" to="/effectif">Voir l'effectif →</Link>
        </div>
      </section>
    )
  }

  const afficherPhoto = joueur.photo && !photoEnEchec
  const matchsJoues = joueur.matchsJoues ?? 0
  const titularisations = joueur.titularisations ?? 0
  const buts = joueur.buts ?? 0
  const minutesJouees = joueur.minutesJouees ?? 0
  const cartonsJaunes = joueur.cartonsJaunes ?? 0
  const cartonsRouges = joueur.cartonsRouges ?? 0

  return (
    <>
      <div className="chouchou-hero">
        {joueur.numeroMaillot != null && (
          <span className="chouchou-hero__fantome" aria-hidden="true">{joueur.numeroMaillot}</span>
        )}

        <div className="chouchou-hero__portrait">
          {afficherPhoto ? (
            <img
              className="chouchou-hero__photo"
              src={joueur.photo}
              alt=""
              loading="eager"
              onError={() => setPhotoEnEchec(true)}
            />
          ) : (
            <div className="chouchou-hero__photo chouchou-hero__photo--vide" aria-hidden="true">
              {(joueur.nom || '?').charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        <div className="chouchou-hero__voile" aria-hidden="true" />

        <div className="chouchou-hero__texte">
          <span className="eyebrow chouchou-hero__badge">★ Ton chouchou</span>
          {joueur.poste && <p className="chouchou-hero__poste">{joueur.poste}</p>}
          <h1 className="chouchou-hero__nom display">{joueur.nomComplet || joueur.nom}</h1>
          <p className="chouchou-hero__meta">
            {[joueur.nationalite, joueur.age ? `${joueur.age} ans` : null, joueur.taille, joueur.poids]
              .filter(Boolean)
              .join(' · ')}
          </p>
        </div>
      </div>

      <section className="section chouchou-section">
        <div className="chouchou-stats">
          <div className="chouchou-stat">
            <span className="chouchou-stat__valeur">{matchsJoues}</span>
            <span className="chouchou-stat__cle">Match{matchsJoues > 1 ? 's' : ''}</span>
          </div>
          <div className="chouchou-stat">
            <span className="chouchou-stat__valeur">{titularisations}</span>
            <span className="chouchou-stat__cle">Titu.</span>
          </div>
          <div className="chouchou-stat chouchou-stat--accent">
            <span className="chouchou-stat__valeur">{buts}</span>
            <span className="chouchou-stat__cle">But{buts > 1 ? 's' : ''}</span>
          </div>
          <div className="chouchou-stat">
            <span className="chouchou-stat__valeur">{minutesJouees}'</span>
            <span className="chouchou-stat__cle">Minutes</span>
          </div>
        </div>

        {(cartonsJaunes > 0 || cartonsRouges > 0) && (
          <div className="chouchou-discipline">
            {cartonsJaunes > 0 && (
              <span className="chouchou-carton chouchou-carton--jaune">{cartonsJaunes} carton{cartonsJaunes > 1 ? 's' : ''} jaune{cartonsJaunes > 1 ? 's' : ''}</span>
            )}
            {cartonsRouges > 0 && (
              <span className="chouchou-carton chouchou-carton--rouge">{cartonsRouges} carton{cartonsRouges > 1 ? 's' : ''} rouge{cartonsRouges > 1 ? 's' : ''}</span>
            )}
          </div>
        )}

        <button
          className="chouchou-retirer"
          disabled={retraitEnCours}
          onClick={() => {
            console.debug('[Chouchou] retrait, retour vers effectif')
            retirerChouchouAction()
              .then(() => navigue('/effectif'))
              .catch((e) => console.error('[Chouchou] échec retrait', e)) // toast déjà affiché par useRafraichir
          }}
        >
          {retraitEnCours ? 'Retrait en cours…' : 'Changer de chouchou'}
        </button>
      </section>

      {detailsEnCours && !details && (
        <p className="attente" style={{ padding: '0 var(--pad-ecran)' }}>Chargement des infos détaillées…</p>
      )}

      {detailsErreur && !details && (
        <p className="chouchou-detail-erreur">Impossible de récupérer les infos détaillées pour le moment.</p>
      )}

      {details && (details.debutContrat || details.selectionsNationales != null) && (
        <section className="section chouchou-section chouchou-section--serree">
          <div className="section__tete">
            <h2 className="section__titre">Carte <em>d'identité</em></h2>
          </div>
          <div className="chouchou-identite">
            {details.debutContrat && (
              <div className="chouchou-identite__ligne">
                <span>Sous contrat</span>
                <strong>{details.debutContrat} → {details.finContrat || '?'}</strong>
              </div>
            )}
            {details.selectionsNationales != null && (
              <div className="chouchou-identite__ligne">
                <span>Sélections en équipe nationale</span>
                <strong>
                  {details.selectionsNationales} sél.
                  {details.butsSelection > 0 ? ` · ${details.butsSelection} but${details.butsSelection > 1 ? 's' : ''}` : ''}
                </strong>
              </div>
            )}
            {details.naissanceDetail && (
              <div className="chouchou-identite__ligne">
                <span>Naissance</span>
                <strong>{details.naissanceDetail.replace(/^Né[e]? le /i, '')}</strong>
              </div>
            )}
          </div>
        </section>
      )}

      {details?.bilanCompetitions?.length > 0 && (
        <section className="section chouchou-section chouchou-section--serree">
          <div className="section__tete">
            <h2 className="section__titre">Bilan par <em>compétition</em></h2>
          </div>
          <div className="chouchou-bilan-scroll">
            <table className="chouchou-bilan">
              <thead>
                <tr>
                  <th scope="col">Compétition</th>
                  <th scope="col">MJ</th>
                  <th scope="col">Titu.</th>
                  <th scope="col">Buts</th>
                  <th scope="col">Min.</th>
                </tr>
              </thead>
              <tbody>
                {details.bilanCompetitions.map((ligne) => (
                  <tr key={ligne.competition} className={ligne.total ? 'chouchou-bilan__total' : ''}>
                    <td>{ligne.competition}</td>
                    <td>{ligne.matchs}</td>
                    <td>{ligne.titularisations}</td>
                    <td>{ligne.buts}</td>
                    <td>{ligne.minutes}'</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {details?.carriere?.length > 0 && (
        <section className="section chouchou-section chouchou-section--serree">
          <div className="section__tete">
            <h2 className="section__titre">Sa <em>carrière</em></h2>
          </div>
          <ul className="chouchou-carriere">
            {details.carriere.map((saison, index) => (
              <li className="chouchou-carriere__ligne" key={`${saison.saison}-${index}`}>
                <div className="chouchou-carriere__saison">
                  <strong>{saison.saison}</strong>
                  <span>{saison.club}</span>
                </div>
                <div className="chouchou-carriere__stats">
                  <span>{saison.matchs} matchs</span>
                  <span>{saison.buts} but{saison.buts > 1 ? 's' : ''}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="section">
        <div className="section__tete">
          <h2 className="section__titre">Ses actus</h2>
        </div>

        {actusJoueur.length === 0 && (
          <p className="attente">Pas d'actu récente pour {joueur.nom}.</p>
        )}

        {actusJoueur.map((actu) => (
          <NewsItem key={actu.id} actu={actu} onOuvrir={onOuvrirArticle} />
        ))}
      </section>
    </>
  )
}
