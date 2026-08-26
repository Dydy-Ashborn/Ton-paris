import { onDocumentUpdated } from 'firebase-functions/v2/firestore'
import { logger } from 'firebase-functions/v2'
import { db, TENANT_ID } from './lib/admin.js'

const REGION = 'europe-west9'

// Lots de 400 : marge sous la limite Firestore de 500 écritures/batch — même
// convention que collecteCartesFut.js.
const TAILLE_LOT = 400

/**
 * "Se supprime quand je désactive le mode debug" (demandé en session) :
 * déclenché par la bascule MANUELLE de config('debug').actif dans la
 * console Firestore (même doc que functions/donneesTest.js, voir
 * packsFut.js/ouvrirPackFutDebug) — quand actif passe de true à false, vide
 * TOUTES les sous-collections collectionFutTest de TOUS les utilisateurs
 * (collectionGroup : le doc de debug est global au tenant, pas par uid, donc
 * potentiellement plusieurs joueurs ont testé pendant qu'il était actif).
 * Filtré sur le préfixe tenants/{TENANT_ID}/ : collectionGroup interroge
 * TOUTE la base Firestore du projet, pas seulement ce tenant (voir principe
 * d'isolation par tenant des instructions du projet) — sans ce filtre, un
 * autre tenant déployé sur la même base Firestore verrait sa propre
 * collectionFutTest vidée par erreur.
 */
export const nettoyerCollectionTestFut = onDocumentUpdated(
  { document: `tenants/${TENANT_ID}/config/debug`, region: REGION, memory: '256MiB' },
  async (evenement) => {
    const avant = evenement.data?.before?.data()
    const apres = evenement.data?.after?.data()
    if (!avant || !apres) return
    if (avant.actif !== true || apres.actif !== false) return

    const snap = await db.collectionGroup('collectionFutTest').get()
    const refsDuTenant = snap.docs
      .filter((d) => d.ref.path.startsWith(`tenants/${TENANT_ID}/`))
      .map((d) => d.ref)

    for (let i = 0; i < refsDuTenant.length; i += TAILLE_LOT) {
      const lot = db.batch()
      for (const ref of refsDuTenant.slice(i, i + TAILLE_LOT)) lot.delete(ref)
      await lot.commit()
    }

    logger.info('Collections test FUT vidées (mode debug désactivé)', { supprimees: refsDuTenant.length })
  }
)
