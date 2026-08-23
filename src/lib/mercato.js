// Calcule à partir d'une liste de fenêtres (voir hooks/useFenetresMercato —
// lues depuis Firestore config/fenetresMercato, alimentée par
// scripts/maj-fenetres-mercato.mjs). Plus de dates codées en dur ici :
// mettre à jour Firestore à chaque annonce LFP suffit, sans redéployer le
// front (voir MercatoTimer.jsx).

// Nombre de jours avant l'ouverture d'une fenêtre à partir duquel
// MercatoTimer affiche le teaser "bientôt" (voir MercatoTimer.jsx).
export const SEUIL_BIENTOT_JOURS = 30

/** Fenêtre en cours à l'instant donné, ou null si le mercato est fermé. */
export function fenetreActuelle(fenetres, maintenant) {
  return fenetres.find((f) => maintenant >= f.debut && maintenant <= f.fin) || null
}

/** Prochaine fenêtre à venir (pas encore ouverte), ou null si aucune n'est connue. */
export function prochaineFenetre(fenetres, maintenant) {
  return fenetres
    .filter((f) => f.debut > maintenant)
    .sort((a, b) => a.debut - b.debut)[0] || null
}

/** Décompose une durée en millisecondes en jours/heures/minutes/secondes (jamais négatif). */
export function decompose(msRestant) {
  const total = Math.max(0, Math.floor(msRestant / 1000))
  return {
    jours: Math.floor(total / 86400),
    heures: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    secondes: total % 60
  }
}
