import { useState } from 'react'
import { httpsCallable } from 'firebase/functions'
import { useCompoProbable } from '../hooks/useCompoProbable'
import { useEffectif } from '../hooks/useEffectif'
import { useRafraichir } from '../hooks/useRafraichir'
import { useDebug } from '../hooks/useDebug'
import { fonctions } from '../lib/firebase'
import PanneauTest from '../components/PanneauTest'
import CarteJoueurModal from '../components/CarteJoueurModal'
import './Compo.css'

export default function Compo() {
  const { compo, estOfficielle, chargement } = useCompoProbable()
  const { effectif } = useEffectif()
  const debug = useDebug()
  const [joueurOuvert, setJoueurOuvert] = useState(null)
  const [photosEnEchec, setPhotosEnEchec] = useState({})

  const [rafraichir, rafraichissement] = useRafraichir(
    () => httpsCallable(fonctions, 'rafraichirCompoPsg')(),
    {
      libelleSucces: (r) => (r?.data?.probable?.nouvelle || r?.data?.officielle?.nouvelle) ? 'Nouvelle compo trouvée.' : 'Rien de neuf pour le moment.',
      libelleErreur: 'Échec de la vérification de la compo.'
    }
  )

  // Boutons de test (mode debug uniquement, voir useDebug()) : injectent une
  // compo factice (mais réaliste — vrais noms, vrai schéma 4-3-3) via
  // functions/donneesTest.js, pour vérifier l'affichage terrain/banc sans
  // attendre qu'une vraie brève Maxifoot sorte. Aucune notif envoyée.
  const [injecterProbable, injectionProbableEnCours] = useRafraichir(
    () => httpsCallable(fonctions, 'injecterCompoTest')({ officielle: false }),
    { libelleSucces: 'Compo probable de test injectée.', libelleErreur: "Échec de l'injection." }
  )
  const [injecterOfficielle, injectionOfficielleEnCours] = useRafraichir(
    () => httpsCallable(fonctions, 'injecterCompoTest')({ officielle: true }),
    { libelleSucces: 'Compo officielle de test injectée.', libelleErreur: "Échec de l'injection." }
  )
  const [effacerTest, effacementEnCours] = useRafraichir(
    () => httpsCallable(fonctions, 'effacerCompoTest')(),
    { libelleSucces: 'Compo(s) de test effacée(s).', libelleErreur: "Échec de l'effacement." }
  )

  const panneauTest = debug && (
    <PanneauTest
      titre="Compo de test"
      actions={[
        { libelle: 'Injecter probable', onClick: () => injecterProbable().catch(() => {}), enCours: injectionProbableEnCours },
        { libelle: 'Injecter officielle', onClick: () => injecterOfficielle().catch(() => {}), enCours: injectionOfficielleEnCours },
        { libelle: 'Effacer', onClick: () => effacerTest().catch(() => {}), enCours: effacementEnCours, efface: true }
      ]}
    />
  )

  // Ouvre la vraie fiche joueur (même modale que dans l'Effectif) plutôt
  // qu'une mini-popup nom/ligne : on retrouve le joueur complet (stats,
  // nationalité, cartons...) via l'id enrichi côté serveur
  // (functions/sources/maxifootCompo.js), avec repli sur une recherche par
  // nom dans l'effectif si l'id manque (joueur non rapproché lors de la
  // collecte — transfert très récent, orthographe différente...).
  const ouvrirFicheJoueur = (titulaire) => {
    const joueurs = effectif?.joueurs || []
    const complet =
      (titulaire.joueurId && joueurs.find((j) => j.id === titulaire.joueurId)) ||
      joueurs.find((j) => j.nom === titulaire.nom)

    setJoueurOuvert(
      complet || {
        // Repli minimal si le joueur n'est vraiment pas dans l'effectif :
        // la modale reste utilisable, juste avec moins d'infos.
        nom: titulaire.nom,
        poste: titulaire.posteEffectif || titulaire.ligne,
        photo: titulaire.photo || null,
        numeroMaillot: titulaire.numeroMaillot ?? null
      }
    )
  }

  if (chargement) {
    return <p className="attente attente--marge">Chargement de la compo…</p>
  }

  if (!compo || (compo.titulaires || []).length === 0) {
    return (
      <section className="vide">
        <p className="vide__titre">Compo probable</p>
        <p className="vide__texte">Pas encore de compo probable annoncée pour le prochain match.</p>
        <button className="rafraichir" onClick={() => rafraichir().catch(() => {})} disabled={rafraichissement} style={{ marginTop: 16 }}>
          {rafraichissement ? 'Recherche en cours…' : 'Vérifier maintenant'}
        </button>
        {panneauTest}
      </section>
    )
  }

  return (
    <section className="section">
      <div className="section__tete">
        <h2 className="section__titre">Compo <em>{estOfficielle ? 'officielle' : 'probable'}</em></h2>
      </div>

      {!estOfficielle && (
        <p className="compo__etiquette compo__etiquette--probable">
          Pas encore confirmée — l'officielle sort en général vers l'heure qui précède le match.
        </p>
      )}

      {compo.titreBreve && <p className="compo__source">{compo.titreBreve}</p>}

      <div className="terrain">
        <div className="terrain__pelouse" aria-hidden="true">
          <div className="terrain__ligne-mediane" />
          <div className="terrain__rond-central" />
          <div className="terrain__surface terrain__surface--bas" />
          <div className="terrain__surface terrain__surface--haut" />
        </div>

        {compo.titulaires.map((joueur) => {
          const cle = joueur.joueurId || joueur.nom
          const afficherPhoto = joueur.photo && !photosEnEchec[cle]

          return (
            <button
              key={joueur.nom}
              className="terrain__joueur"
              style={{ left: `${joueur.x}%`, top: `${joueur.y}%` }}
              onClick={() => ouvrirFicheJoueur(joueur)}
            >
              {afficherPhoto ? (
                <img
                  className="terrain__pastille terrain__pastille--photo"
                  src={joueur.photo}
                  alt=""
                  loading="eager"
                  onError={() => setPhotosEnEchec((etat) => ({ ...etat, [cle]: true }))}
                />
              ) : (
                <span className="terrain__pastille">{initiales(joueur.nom)}</span>
              )}
              <span className="terrain__nom">{nomCourt(joueur.nom)}</span>
            </button>
          )
        })}
      </div>

      {compo.banc && compo.banc.length > 0 && (
        <div className="banc">
          <h3 className="banc__titre">Remplaçants</h3>
          <ul className="banc__liste">
            {compo.banc.map((nom) => (
              <li className="banc__joueur" key={nom}>
                {/* Le banc n'a que le nom brut (pas d'id/photo, contrairement
                    aux titulaires) : ouvrirFicheJoueur retrouve le joueur
                    complet dans l'effectif par ce nom, avec repli minimal
                    déjà géré si aucune correspondance. */}
                <button className="banc__bouton" onClick={() => ouvrirFicheJoueur({ nom })}>
                  {nom}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button className="rafraichir" onClick={() => rafraichir().catch(() => {})} disabled={rafraichissement}>
        {rafraichissement ? 'Mise à jour en cours…' : estOfficielle ? 'Vérifier une mise à jour' : "Vérifier si l'officielle est sortie"}
      </button>

      {panneauTest}

      <CarteJoueurModal joueur={joueurOuvert} onFermer={() => setJoueurOuvert(null)} />
    </section>
  )
}

function initiales(nom) {
  const parties = nom.split(/[\s-]+/).filter(Boolean)
  if (parties.length === 1) return parties[0].slice(0, 3).toUpperCase()
  return (parties[0][0] + parties[parties.length - 1][0]).toUpperCase()
}

function nomCourt(nom) {
  const parties = nom.split(/[\s-]+/).filter(Boolean)
  return parties[parties.length - 1]
}
