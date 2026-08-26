import { useEffect, useState, useCallback } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { httpsCallable } from 'firebase/functions'
import { db, fonctions, chemins } from '../lib/firebase'

// Replis d'AFFICHAGE tant que config/pileOuFace n'a pas encore été lu (ou
// n'existe pas) — identiques aux valeurs par défaut côté serveur (voir
// functions/packsFut.js, PALIERS_MISE_PAR_DEFAUT / MULTIPLICATEUR_GAIN_PAR_DEFAUT)
// pour ne jamais afficher des paliers/un multiplicateur différents de ce qui
// sera réellement appliqué au clic.
const PALIERS_MISE_PAR_DEFAUT = [1, 5, 10, 25, 50]
const MULTIPLICATEUR_GAIN_PAR_DEFAUT = 1.9

/**
 * "Pile ou Maillot" — mini-jeu à mise à risque (voir functions/packsFut.js,
 * jouerPileOuFace). Le SOLDE n'est pas géré ici : il vit déjà dans
 * useCartesFut() (etat.soldeEtoiles), le même compteur pour tout le système
 * de packs — pages/Packs.jsx passe etat.soldeEtoiles en prop plutôt que de
 * dupliquer un onSnapshot dessus ici.
 *
 * Comme useCartesFut/useAmisFut : simple wrapper sans état enCours/erreur
 * interne, pages/Packs.jsx l'enveloppe avec useRafraichir (un seul endroit
 * qui gère ce pattern, pas deux).
 */
export function usePileOuFace() {
  const [config, setConfig] = useState({
    paliersMise: PALIERS_MISE_PAR_DEFAUT,
    multiplicateurGain: MULTIPLICATEUR_GAIN_PAR_DEFAUT
  })

  useEffect(() => {
    return onSnapshot(
      doc(db, chemins.configPileOuFace()),
      (instantane) => {
        const donnees = instantane.exists() ? instantane.data() : {}
        const paliers = Array.isArray(donnees.paliersMise) && donnees.paliersMise.length > 0
          ? donnees.paliersMise
          : PALIERS_MISE_PAR_DEFAUT
        setConfig({
          paliersMise: paliers,
          multiplicateurGain: typeof donnees.multiplicateurGain === 'number' ? donnees.multiplicateurGain : MULTIPLICATEUR_GAIN_PAR_DEFAUT
        })
      },
      () => setConfig({ paliersMise: PALIERS_MISE_PAR_DEFAUT, multiplicateurGain: MULTIPLICATEUR_GAIN_PAR_DEFAUT })
    )
  }, [])

  // `utiliserRelance` (25/08/2026, pouvoir 'main-chanceuse') — transmis tel
  // quel au serveur, qui seul décide si la relance est réellement
  // disponible (voir functions/packsFut.js, jouerPileOuFace) : ne débite
  // rien de plus côté serveur si utiliserRelance:true, la mise ayant déjà
  // été prélevée au coup perdu qu'on relance.
  const jouer = useCallback(async (mise, choix, { utiliserRelance = false } = {}) => {
    const resultat = await httpsCallable(fonctions, 'jouerPileOuFace')({ mise, choix, utiliserRelance })
    return resultat.data
  }, [])

  return {
    paliersMise: config.paliersMise,
    multiplicateurGain: config.multiplicateurGain,
    jouer
  }
}
