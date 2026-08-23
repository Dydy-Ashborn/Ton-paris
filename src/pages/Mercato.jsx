import { httpsCallable } from 'firebase/functions'
import { useMercato } from '../hooks/useMercato'
import { useRafraichir } from '../hooks/useRafraichir'
import { fonctions } from '../lib/firebase'
import MercatoTimer from '../components/MercatoTimer'
import './Mercato.css'

const SECTIONS = [
  { cle: 'officiels', titre: 'Officiels' },
  { cle: 'enDiscussion', titre: 'En discussion' },
  { cle: 'rumeurs', titre: 'Rumeurs' }
]

function MouvementLigne({ mouvement }) {
  const { joueur, joueurDetail, sens, clubAdverse, typeTransfert, montant } = mouvement

  // joueurDetail est du type "Prénom NOM, 21 ans, Attaquant" (title Maxifoot) :
  // on en tire juste l'âge et le poste pour un sous-titre plus lisible que le nom complet en capitales.
  const complement = joueurDetail
    ? joueurDetail.split(',').slice(1).join(',').trim()
    : null

  return (
    <li className={`mercato__ligne mercato__ligne--${sens}`}>
      <span className="mercato__sens" aria-hidden="true">{sens === 'arrivee' ? '↗' : '↘'}</span>
      <div className="mercato__corps">
        <p className="mercato__joueur">{joueur}</p>
        <p className="mercato__detail">
          {[complement, clubAdverse].filter(Boolean).join(' · ')}
        </p>
      </div>
      <div className="mercato__transfert">
        {typeTransfert && <span className="mercato__type">{typeTransfert}</span>}
        {montant && <span className="mercato__montant">{montant}</span>}
      </div>
    </li>
  )
}

export default function Mercato() {
  const { mercato, chargement } = useMercato()
  const [rafraichir, rafraichissement] = useRafraichir(
    () => httpsCallable(fonctions, 'rafraichirMaxifootPsg')(),
    { libelleSucces: 'Mercato à jour.', libelleErreur: 'Échec de la mise à jour du mercato.' }
  )

  if (chargement) {
    return <p className="attente attente--marge">Chargement du mercato…</p>
  }

  const total = SECTIONS.reduce((somme, { cle }) => somme + (mercato?.[cle]?.length || 0), 0)

  return (
    <>
      <MercatoTimer />

      <section className="section">
        <div className="section__tete">
          <h2 className="section__titre">Mercato <em>PSG</em></h2>
        </div>

        {total === 0 && (
          <p className="attente">Rien à signaler pour l'instant.</p>
        )}

        {SECTIONS.map(({ cle, titre }) => {
          const mouvements = mercato?.[cle] || []
          if (mouvements.length === 0) return null

          return (
            <div className="mercato__groupe" key={cle}>
              <h3 className="mercato__titre-groupe">{titre}</h3>
              <ul className="mercato__liste">
                {mouvements.map((mouvement, index) => (
                  <MouvementLigne key={`${cle}-${index}`} mouvement={mouvement} />
                ))}
              </ul>
            </div>
          )
        })}

        <button className="rafraichir" onClick={() => rafraichir().catch(() => {})} disabled={rafraichissement}>
          {rafraichissement ? 'Mise à jour en cours…' : 'Rafraîchir le mercato'}
        </button>
      </section>
    </>
  )
}
