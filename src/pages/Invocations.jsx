import { useMemo, useState } from 'react'
import { useCartesFut } from '../hooks/useCartesFut'
import { useRafraichir } from '../hooks/useRafraichir'
import './Invocations.css'

const LIBELLE_RARETE = { commune: 'Commune', rare: 'Rare', epique: 'Épique', legendaire: 'Légendaire' }
const ORDRE_RARETE_AFFICHAGE = ['legendaire', 'epique', 'rare', 'commune']

const LIBELLE_STAT = { pac: 'PAC', sho: 'TIR', pas: 'PAS', dri: 'DRI', def: 'DEF', phy: 'PHY' }

function CarteFutGrande({ carte, nouvelle }) {
  return (
    <div className={`carte-fut carte-fut--grande carte-fut--${carte.rarete}`}>
      {nouvelle && <span className="carte-fut__badge-nouvelle">Nouvelle</span>}
      <div className="carte-fut__entete">
        <span className="carte-fut__note">{carte.note}</span>
        <span className="carte-fut__position">{carte.position}</span>
      </div>
      <p className="carte-fut__nom">{carte.nom}</p>
      <p className="carte-fut__variante">{carte.variante?.replace(/_/g, ' ')}</p>
      {carte.stats && Object.keys(carte.stats).length > 0 && (
        <ul className="carte-fut__stats">
          {Object.entries(LIBELLE_STAT).map(([cle, libelle]) => (
            carte.stats[cle] != null && (
              <li key={cle}>
                <span>{libelle}</span>
                <strong>{carte.stats[cle]}</strong>
              </li>
            )
          ))}
        </ul>
      )}
    </div>
  )
}

function CarteFutMini({ carte }) {
  const possedee = carte.quantite > 0

  return (
    <div className={`carte-fut-mini carte-fut-mini--${carte.rarete}${possedee ? '' : ' carte-fut-mini--verrouillee'}`}>
      {possedee ? (
        <>
          <span className="carte-fut-mini__note">{carte.note}</span>
          <span className="carte-fut-mini__nom">{carte.nom}</span>
          {carte.quantite > 1 && <span className="carte-fut-mini__quantite">×{carte.quantite}</span>}
        </>
      ) : (
        <span className="carte-fut-mini__verrou" aria-hidden="true">?</span>
      )}
    </div>
  )
}

/**
 * Jeu d'invocation de cartes FUT — voir hooks/useCartesFut.js (lecture
 * catalogue/collection/état) et functions/invocationFut.js (tirage,
 * autoritaire côté serveur : cette page ne fait qu'afficher son résultat).
 *
 * Économie choisie en session ("les deux combinés") : 1 tirage gratuit par
 * jour, en plus achetable avec des étoiles gagnées par activité dans l'app
 * (voir App.jsx, bonus quotidien). Paliers de rareté choisis en session
 * ("note + variante combinées") : note EA FC de base, remontée d'un palier
 * si la carte est une variante spéciale/promo (voir calculerRarete côté
 * scraper).
 */
export default function Invocations() {
  const { collection, nombrePossedees, catalogue, etat, tirageGratuitDispo, coutTirageEtoiles, invoquer, chargement } = useCartesFut()
  const [derniereCarte, setDerniereCarte] = useState(null)
  const [reveleeVisible, setReveleeVisible] = useState(false)

  const [lancerInvocation, invocationEnCours] = useRafraichir(
    async () => {
      setReveleeVisible(false)
      const resultat = await invoquer()
      setDerniereCarte(resultat)
      // Un tick après le set : relance l'animation d'apparition même si
      // deux tirages successifs tombent sur une carte de même rareté (une
      // classe CSS qui ne change pas ne rejoue pas son animation).
      requestAnimationFrame(() => setReveleeVisible(true))
      return resultat
    },
    {
      libelleSucces: (resultat) =>
        `${resultat.nouvelle ? 'Nouvelle carte' : 'Doublon'} : ${resultat.carte.nom} (${LIBELLE_RARETE[resultat.carte.rarete]})`,
      libelleErreur: (e) => e?.message || 'Échec du tirage, réessaie.'
    }
  )

  const parRarete = useMemo(() => {
    const groupes = { legendaire: [], epique: [], rare: [], commune: [] }
    for (const carte of collection) groupes[carte.rarete]?.push(carte)
    return groupes
  }, [collection])

  const manqueEtoiles = Math.max(0, coutTirageEtoiles - (etat.soldeEtoiles || 0))

  return (
    <div className="invocations">
      <header className="invocations__tete">
        <h2 className="invocations__titre">Invocations</h2>
        <p className="invocations__solde">⭐ {etat.soldeEtoiles || 0}</p>
      </header>

      <section className="invocations__tirage">
        <div className={`invocations__zone-carte${invocationEnCours ? ' invocations__zone-carte--tirage' : ''}`}>
          {derniereCarte && reveleeVisible ? (
            <CarteFutGrande carte={derniereCarte.carte} nouvelle={derniereCarte.nouvelle} />
          ) : (
            <div className="invocations__dos" aria-hidden="true">
              <span>TP</span>
            </div>
          )}
        </div>

        <button
          type="button"
          className="invocations__bouton"
          onClick={() => lancerInvocation().catch(() => {})}
          disabled={invocationEnCours || chargement}
        >
          {invocationEnCours
            ? 'Invocation…'
            : tirageGratuitDispo
              ? 'Invoquer (tirage gratuit)'
              : `Invoquer (${coutTirageEtoiles} ⭐)`}
        </button>

        {!tirageGratuitDispo && manqueEtoiles > 0 && (
          <p className="invocations__aide">
            Tirage gratuit du jour déjà utilisé — il te manque {manqueEtoiles} ⭐ pour un tirage payant.
          </p>
        )}
      </section>

      <section className="invocations__collection">
        <div className="invocations__collection-tete">
          <h3 className="invocations__soustitre">Ta collection</h3>
          <span className="invocations__compteur">{nombrePossedees} / {catalogue.length}</span>
        </div>

        {chargement && <p className="attente">Chargement…</p>}

        {!chargement && catalogue.length === 0 && (
          <p className="attente">Aucune carte disponible pour le moment.</p>
        )}

        {!chargement && ORDRE_RARETE_AFFICHAGE.map((rarete) => (
          parRarete[rarete].length > 0 && (
            <div className="invocations__groupe" key={rarete}>
              <p className={`invocations__groupe-titre invocations__groupe-titre--${rarete}`}>
                {LIBELLE_RARETE[rarete]}
              </p>
              <div className="invocations__grille">
                {parRarete[rarete].map((carte) => (
                  <CarteFutMini key={carte.id} carte={carte} />
                ))}
              </div>
            </div>
          )
        ))}
      </section>
    </div>
  )
}
