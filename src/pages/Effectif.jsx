import { useMemo, useState } from 'react'
import { httpsCallable } from 'firebase/functions'
import { Link, useNavigate } from 'react-router-dom'
import { useEffectif } from '../hooks/useEffectif'
import { useDebug } from '../hooks/useDebug'
import { useRafraichir } from '../hooks/useRafraichir'
import { usePreferences } from '../hooks/usePreferences'
import { fonctions } from '../lib/firebase'
import { identifiantJoueur, trouverChouchou, cheminPublic } from '../lib/joueur'
import CarteJoueurModal from '../components/CarteJoueurModal'
import './Effectif.css'

// Ordre d'affichage fixe, indépendant de l'ordre d'apparition en base
// (qui suit déjà cet ordre côté Maxifoot, mais autant ne pas en dépendre).
const ORDRE_POSTES = ['Gardien', 'Défenseur', 'Milieu', 'Attaquant']

// Onglets de filtre façon psg.fr/football-masculin/effectif — pluriel écrit
// en dur ici (affichage seulement) plutôt que dérivé de ORDRE_POSTES, qui
// reste au singulier pour matcher joueur.poste tel que scrapé.
const ONGLETS = [
  { poste: null, libelle: 'Tous' },
  { poste: 'Gardien', libelle: 'Gardiens de but' },
  { poste: 'Défenseur', libelle: 'Défenseurs' },
  { poste: 'Milieu', libelle: 'Milieux de terrain' },
  { poste: 'Attaquant', libelle: 'Attaquants' }
]

/**
 * Reproduit la mise en page grille de psg.fr (numéro en filigrane, photo
 * détourée, prénom/NOM, poste) habillée avec le langage visuel du reste de
 * l'app (navy/rouge, --font-display) plutôt que le blanc/noir du site
 * officiel — voir la décision prise en session, remplace l'ancienne liste
 * texte (une ligne par joueur, stats de match en bout de ligne).
 *
 * Étoile et carte : même principe que l'ancienne JoueurLigne (deux
 * <button> FRÈRES, jamais l'un imbriqué dans l'autre) pour éviter de
 * réintroduire le bug déjà corrigé où cliquer l'étoile ouvrait la fiche.
 */
function CarteJoueur({ joueur, chouchou, onOuvrir, onChoisirChouchou }) {
  const [photoEnEchec, setPhotoEnEchec] = useState(false)

  // photoListe (PSG.fr, voir scripts/maj-photos-effectif.mjs) uniquement —
  // PAS de repli sur photo (Maxifoot, functions/collecteEffectifPsg.js,
  // ex. https://photo.maxifoot.fr/phoj/...) : la carte repose sur une
  // détourure transparente (numéro géant en filigrane DERRIÈRE le joueur,
  // voir .effectif-carte__numero), incompatible avec la photo Maxifoot qui
  // est un cadrage plein cadre opaque. Tant que photoListe n'a pas été
  // importée pour ce joueur, on affiche le repli stylé (initiale sur fond
  // uni) plutôt qu'une photo qui casserait visuellement la carte.
  const source = joueur.photoListe ? cheminPublic(joueur.photoListe) : null
  const afficherPhoto = source && !photoEnEchec

  return (
    <li className="effectif-carte">
      <button
        type="button"
        className={`effectif-carte__etoile${chouchou ? ' effectif-carte__etoile--actif' : ''}`}
        onClick={() => onChoisirChouchou(joueur)}
        aria-label={chouchou ? 'Ton chouchou' : 'Choisir comme chouchou'}
        aria-pressed={chouchou}
      >
        {chouchou ? '★' : '☆'}
      </button>

      <button type="button" className="effectif-carte__ouvrir" onClick={() => onOuvrir(joueur)}>
        <div className="effectif-carte__visuel">
          {joueur.numeroMaillot != null && (
            <span className="effectif-carte__numero" aria-hidden="true">{joueur.numeroMaillot}</span>
          )}
          {afficherPhoto ? (
            <img
              className="effectif-carte__photo"
              src={source}
              alt=""
              loading="lazy"
              onError={() => setPhotoEnEchec(true)}
            />
          ) : (
            <div className="effectif-carte__photo effectif-carte__photo--vide" aria-hidden="true">
              {(joueur.nom || '?').charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <p className="effectif-carte__nom">{joueur.nom}</p>
        {joueur.poste && <p className="effectif-carte__poste">{joueur.poste}</p>}
      </button>
    </li>
  )
}

export default function Effectif() {
  const { effectif, chargement } = useEffectif()
  const { preferences, enregistrer } = usePreferences()
  const debug = useDebug()
  const navigue = useNavigate()
  const [joueurOuvert, setJoueurOuvert] = useState(null)
  const [diagnostic, setDiagnostic] = useState(null)
  const [posteActif, setPosteActif] = useState(null)

  const [rafraichir, rafraichissement] = useRafraichir(
    () => httpsCallable(fonctions, 'rafraichirEffectifPsg')(),
    {
      libelleSucces: "Effectif à jour.",
      libelleErreur: (e) => e?.message || "Le rafraîchissement a échoué."
    }
  )

  const [choisirChouchouAction] = useRafraichir(
    async (joueur) => {
      const id = identifiantJoueur(joueur)
      await enregistrer({ joueurChouchouId: id })
      return joueur
    },
    {
      libelleSucces: (joueur) => `★ ${joueur.nom} est maintenant ton chouchou.`,
      libelleErreur: 'Impossible de définir ce chouchou pour le moment, réessaie.'
    }
  )

  const [diagnostiquerBrut, diagnosticEnCours] = useRafraichir(
    async () => {
      const resultat = await httpsCallable(fonctions, 'diagnosticEffectif')()
      setDiagnostic(resultat.data)
      return resultat.data
    },
    { libelleSucces: 'Diagnostic terminé.', libelleErreur: 'Échec du diagnostic.' }
  )
  const diagnostiquer = () => diagnostiquerBrut().catch((e) => setDiagnostic({ ok: false, erreur: e.message }))

  // Masque les joueurs sans AUCUNE info identifiante à montrer (ni photo ni
  // numéro) — demandé en session. photoListe (pas joueur.photo Maxifoot,
  // jamais affiché sur la carte depuis le fix du repli opaque, voir plus
  // haut dans la session) : une carte ne montrant ni photo ni numéro ne
  // serait qu'une case grise avec une initiale, pas informative.
  const joueurVisible = (joueur) => joueur.photoListe || joueur.numeroMaillot != null

  const joueursTries = useMemo(() => {
    const joueurs = (effectif?.joueurs || []).filter(joueurVisible)
    const rang = (poste) => Math.max(0, ORDRE_POSTES.indexOf(poste))
    return [...joueurs].sort((a, b) => {
      const ecart = rang(a.poste) - rang(b.poste)
      if (ecart !== 0) return ecart
      return (a.numeroMaillot ?? 999) - (b.numeroMaillot ?? 999)
    })
  }, [effectif])

  const joueursAffiches = useMemo(
    () => (posteActif ? joueursTries.filter((j) => j.poste === posteActif) : joueursTries),
    [joueursTries, posteActif]
  )

  const chouchou = useMemo(
    () => trouverChouchou(effectif?.joueurs, preferences?.joueurChouchouId),
    [effectif, preferences]
  )

  const choisirChouchou = (joueur) => {
    choisirChouchouAction(joueur)
      .then(() => navigue('/chouchou'))
      .catch((e) => console.error('[Chouchou] échec enregistrement', e)) // toast déjà affiché par useRafraichir
  }

  if (chargement) {
    return <p className="attente attente--marge">Chargement de l'effectif…</p>
  }

  return (
    <section className="section">
      <div className="section__tete">
        <h2 className="section__titre">Effectif <em>PSG</em></h2>
      </div>

      {chouchou && (
        <Link className="effectif__bandeau-chouchou" to="/chouchou">
          ★ Ton chouchou : <strong>{chouchou.nom}</strong> — voir sa fiche →
        </Link>
      )}

      {effectif?.entraineur && (
        <p className="effectif__entraineur">
          Entraîneur : <strong>{effectif.entraineur.nom}</strong>
          {effectif.entraineur.nationalite ? ` · ${effectif.entraineur.nationalite}` : ''}
        </p>
      )}

      {joueursTries.length === 0 ? (
        <p className="attente">Effectif pas encore disponible.</p>
      ) : (
        <>
          <div className="onglets effectif-onglets">
            {ONGLETS.map(({ poste, libelle }) => (
              <button
                key={libelle}
                type="button"
                className={`onglets__item${posteActif === poste ? ' onglets__item--actif' : ''}`}
                onClick={() => setPosteActif(poste)}
              >
                {libelle}
              </button>
            ))}
          </div>

          {joueursAffiches.length === 0 ? (
            <p className="attente">Aucun joueur à ce poste.</p>
          ) : (
            <ul className="effectif-grille">
              {joueursAffiches.map((joueur) => (
                <CarteJoueur
                  key={identifiantJoueur(joueur)}
                  joueur={joueur}
                  chouchou={Boolean(preferences?.joueurChouchouId) && identifiantJoueur(joueur) === preferences.joueurChouchouId}
                  onOuvrir={setJoueurOuvert}
                  onChoisirChouchou={choisirChouchou}
                />
              ))}
            </ul>
          )}
        </>
      )}

      <button className="rafraichir" onClick={() => rafraichir().catch(() => {})} disabled={rafraichissement}>
        {rafraichissement ? 'Mise à jour en cours…' : "Rafraîchir l'effectif"}
      </button>

      {debug && (
        <>
          <button className="rafraichir" onClick={diagnostiquer} disabled={diagnosticEnCours} style={{ marginTop: 8 }}>
            {diagnosticEnCours ? 'Diagnostic en cours…' : 'Diagnostiquer'}
          </button>

          {diagnostic && (
            <pre
              style={{
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                fontSize: 11,
                color: 'var(--acier)',
                background: 'rgba(255,255,255,0.05)',
                padding: 12,
                marginTop: 8,
                maxHeight: 400,
                overflow: 'auto'
              }}
            >
              {JSON.stringify(diagnostic, null, 2)}
            </pre>
          )}
        </>
      )}

      <CarteJoueurModal joueur={joueurOuvert} onFermer={() => setJoueurOuvert(null)} />
    </section>
  )
}
