import { useEffect, useMemo, useState } from 'react'
import { httpsCallable } from 'firebase/functions'
import { usePreferences } from '../hooks/usePreferences'
import { useClassements } from '../hooks/useClassements'
import { useRafraichir } from '../hooks/useRafraichir'
import { reconnaitreClub } from '../lib/equipes'
import { fonctions } from '../lib/firebase'
import './Classement.css'

export default function Classement() {
  const { preferences } = usePreferences()
  const { classements, chargement } = useClassements(preferences)
  const [choisi, setChoisi] = useState(null)

  const [rafraichir, rafraichissement] = useRafraichir(
    () => httpsCallable(fonctions, 'rafraichirClassements')(),
    { libelleSucces: 'Classement à jour.', libelleErreur: 'Échec de la mise à jour du classement.' }
  )

  useEffect(() => {
    if (!choisi && classements.length > 0) setChoisi(classements[0].id)
  }, [classements, choisi])

  const actif = useMemo(
    () => classements.find((c) => c.id === choisi) || classements[0] || null,
    [classements, choisi]
  )

  const favoriId = preferences?.clubFavori?.id

  if (chargement) {
    return <p className="attente attente--marge">Chargement des classements…</p>
  }

  if (classements.length === 0) {
    return (
      <section className="vide">
        <p className="vide__titre">Classement</p>
        <p className="vide__texte">Choisis un club favori pour voir son classement.</p>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="filtres">
        {classements.map((classement) => (
          <button
            key={classement.id}
            className={`filtres__item${actif?.id === classement.id ? ' filtres__item--actif' : ''}`}
            onClick={() => setChoisi(classement.id)}
          >
            {classement.libelle}
          </button>
        ))}
      </div>

      {actif?.saisonDemarree === false && (
        <p className="classement__journee">Saison pas encore commencée — classement à titre indicatif</p>
      )}

      {actif?.saisonPrecedente && (
        <p className="classement__journee classement__journee--alerte">
          Saison {actif.saison} (précédente) — la nouvelle saison n'a pas encore de classement chez la source
        </p>
      )}

      {!actif?.saisonPrecedente && actif?.saisonDemarree !== false && actif?.journee != null && (
        <p className="classement__journee">Journée {actif.journee}</p>
      )}

      {(actif?.groupes || []).map((groupe, index) => (
        <div className="classement__groupe" key={groupe.libelle || index}>
          {groupe.libelle && <h3 className="classement__titre-groupe">{groupe.libelle}</h3>}

          <table className="classement">
            <thead>
              <tr>
                <th scope="col" className="classement__rang"></th>
                <th scope="col" className="classement__club">Club</th>
                <th scope="col">J</th>
                <th scope="col">Diff</th>
                <th scope="col">Pts</th>
              </tr>
            </thead>
            <tbody>
              {groupe.lignes.map((ligne) => {
                const clubId = reconnaitreClub(ligne.nomComplet || ligne.equipe, preferences)
                const suivi = Boolean(clubId)
                const favori = clubId === favoriId

                return (
                  <tr
                    key={`${ligne.position}-${ligne.equipe}`}
                    className={favori ? 'classement__ligne--favori' : suivi ? 'classement__ligne--suivi' : ''}
                  >
                    <td className="classement__rang">{ligne.position}</td>
                    <td className="classement__club">{ligne.equipe}</td>
                    <td>{ligne.joues}</td>
                    <td>{ligne.difference > 0 ? `+${ligne.difference}` : ligne.difference}</td>
                    <td className="classement__points">{ligne.points}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ))}

      <button className="rafraichir" onClick={() => rafraichir().catch(() => {})} disabled={rafraichissement}>
        {rafraichissement ? 'Mise à jour en cours…' : 'Mettre à jour le classement'}
      </button>
    </section>
  )
}
