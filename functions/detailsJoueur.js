import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { logger } from 'firebase-functions/v2'
import { db, chemins } from './lib/admin.js'
import { scraperFicheJoueurDetaillee } from './sources/maxifootFicheJoueur.js'

const REGION = 'europe-west9'

// Ces infos (contrat, sélections, carrière...) changent rarement — pas
// besoin de rescrapper la fiche Maxifoot à chaque ouverture de la page
// Chouchou (voir src/pages/Chouchou.jsx). Un cache Firestore par joueur,
// pas d'enrichissement de tout l'effectif : demande explicite de l'user
// ("encore plus d'info pour notre chouchou UNIQUEMENT").
const DUREE_CACHE_MS = 24 * 60 * 60 * 1000

export const recupererDetailsJoueur = onCall(
  { region: REGION, memory: '256MiB', timeoutSeconds: 30 },
  async (requete) => {
    if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi.')

    const membre = await db.doc(chemins.utilisateur(requete.auth.uid)).get()
    if (!membre.exists) throw new HttpsError('permission-denied', "Ce compte n'appartient pas à l'équipe.")

    const { joueurId, lien } = requete.data || {}
    if (!joueurId || !lien) throw new HttpsError('invalid-argument', 'joueurId et lien requis.')

    const ref = db.doc(chemins.detailsJoueur(joueurId))
    const existant = await ref.get()
    if (existant.exists && Date.now() - (existant.data().majLe || 0) < DUREE_CACHE_MS) {
      return existant.data()
    }

    try {
      const details = await scraperFicheJoueurDetaillee(lien)
      const donnees = { ...details, majLe: Date.now() }
      await ref.set(donnees)
      return donnees
    } catch (e) {
      logger.error('Détails joueur (chouchou) : scraping échoué', { joueurId, message: e.message })
      // Un cache périmé vaut mieux qu'une page cassée.
      if (existant.exists) return existant.data()
      throw new HttpsError('unavailable', `Échec du scraping : ${e.message}`)
    }
  }
)
