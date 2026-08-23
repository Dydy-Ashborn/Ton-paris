import { useEffect, useMemo, useState } from 'react'
import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore'
import { db, chemins } from '../lib/firebase'

/**
 * Classements disponibles, restreints aux compétitions qui concernent les
 * clubs de l'utilisateur (favori d'abord, puis clubs suivis), plus la
 * Ligue des Champions.
 *
 * Avant le début de saison (ou tant que la collecte n'est pas encore
 * passée), Firestore n'a pas encore de document pour un championnat, ou en
 * a un vide (`saisonDemarree: false`) : dans les deux cas on affiche quand
 * même le tableau, construit depuis le catalogue de clubs (config/clubs),
 * classé par ordre alphabétique avec tout le monde à 0 — plutôt que de
 * laisser la page vide en attendant la première vraie collecte.
 */
export function useClassements(preferences) {
  const [tous, setTous] = useState([])
  const [clubsCatalogue, setClubsCatalogue] = useState([])
  const [chargement, setChargement] = useState(true)

  useEffect(() => {
    return onSnapshot(
      collection(db, chemins.classements()),
      (instantane) => {
        setTous(instantane.docs.map((d) => ({ id: d.id, ...d.data() })))
        setChargement(false)
      },
      () => setChargement(false)
    )
  }, [])

  useEffect(() => {
    getDoc(doc(db, chemins.config('clubs'))).then((instantane) => {
      setClubsCatalogue(instantane.exists() ? instantane.data().liste || [] : [])
    })
  }, [])

  const classements = useMemo(() => {
    const favori = preferences?.clubFavori
    const suivis = preferences?.clubsSuivis || []
    const favoriChampionnat = favori?.championnat

    // Ordre d'affichage : championnat du favori, puis ceux des clubs
    // suivis (dans l'ordre où ils ont été ajoutés), puis C1. Un Set
    // préserve cet ordre d'insertion tout en dédupliquant.
    const ordre = new Set(
      [favoriChampionnat, ...suivis.map((c) => c.championnat), 'ligue-des-champions'].filter(Boolean)
    )

    const parId = new Map(tous.map((c) => [c.id, c]))

    return [...ordre].map((id) => parId.get(id) || repliDepuisCatalogue(id, clubsCatalogue))
  }, [tous, clubsCatalogue, preferences])

  return { classements, chargement }
}

const LIBELLES_CHAMPIONNAT = {
  'ligue-1': 'Ligue 1',
  liga: 'Liga',
  'serie-a': 'Serie A',
  bundesliga: 'Bundesliga',
  'premier-league': 'Premier League',
  'ligue-des-champions': 'Ligue des Champions'
}

/**
 * Tableau de repli quand aucun document de classement n'existe encore pour
 * ce championnat (jamais collecté, ou saison pas commencée) : tous les
 * clubs du catalogue pour ce championnat, triés par nom, à 0 partout.
 */
function repliDepuisCatalogue(championnatId, clubsCatalogue) {
  const clubs = clubsCatalogue
    .filter((c) => c.championnat === championnatId)
    .sort((a, b) => a.nom.localeCompare(b.nom))

  return {
    id: championnatId,
    libelle: LIBELLES_CHAMPIONNAT[championnatId] || championnatId,
    saisonDemarree: false,
    saison: null,
    saisonPrecedente: false,
    journee: null,
    groupes: [
      {
        libelle: null,
        lignes: clubs.map((club, index) => ({
          position: index + 1,
          equipe: club.court || club.nom,
          nomComplet: club.nom,
          joues: 0,
          gagnes: 0,
          nuls: 0,
          perdus: 0,
          marques: 0,
          encaisses: 0,
          difference: 0,
          points: 0,
          forme: null
        }))
      }
    ]
  }
}
