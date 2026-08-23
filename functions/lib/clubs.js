import { db, chemins } from './admin.js'

/**
 * Récupère la liste des clubs à surveiller : tous ceux référencés
 * dans le catalogue et retenus par au moins un utilisateur du tenant.
 * Factorisé depuis scrapeTv.js pour être partagé avec collecteScoresDirect.js
 * (même besoin : ne collecter que ce qui intéresse réellement quelqu'un).
 */
export async function clubsASurveiller() {
  const catalogue = await db.doc(chemins.config('clubs')).get()
  const clubs = catalogue.exists ? catalogue.data().liste || [] : []
  const parId = new Map(clubs.map((c) => [c.id, c]))

  const retenus = new Set()
  const utilisateurs = await db.collection(chemins.utilisateurs()).get()

  for (const utilisateur of utilisateurs.docs) {
    const prefs = await utilisateur.ref.collection('prefs').doc('principal').get()
    if (!prefs.exists) continue

    const donnees = prefs.data()
    if (donnees.clubFavori?.id) retenus.add(donnees.clubFavori.id)
    for (const club of donnees.clubsSuivis || []) if (club.id) retenus.add(club.id)
  }

  return [...retenus].map((id) => parId.get(id)).filter(Boolean)
}
