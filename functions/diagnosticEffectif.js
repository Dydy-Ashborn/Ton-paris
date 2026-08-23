/**
 * Callable TEMPORAIRE de diagnostic — à retirer une fois le problème
 * "0 joueur" élucidé (voir collecteEffectifPsg.js, journal
 * maxifoot-effectif-psg systématiquement à joueurs:0 en prod alors que le
 * parseur avait été validé sur un extrait HTML collé à la main).
 *
 * Fetch la page réelle depuis l'infra Cloud Functions (donc avec la même
 * IP/région que la vraie collecte, contrairement à un test en local qui
 * peut recevoir un contenu différent ou se faire bloquer différemment) et
 * renvoie des repères de structure + un extrait du HTML reçu, sans rien
 * écrire en base.
 */
import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { recupererHtml } from './lib/http.js'
import { extraireEffectif, URL_FICHE_PSG } from './sources/maxifootEffectif.js'

const REGION = 'europe-west9'

export const diagnosticEffectif = onCall(
  { region: REGION, memory: '256MiB', timeoutSeconds: 60 },
  async (requete) => {
    if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi.')

    try {
      const html = await recupererHtml(URL_FICHE_PSG)
      const { joueurs, entraineur } = extraireEffectif(html)

      const indexListej0 = html.indexOf('listej0')
      const autourListej0 = indexListej0 === -1 ? null : html.slice(Math.max(0, indexListej0 - 200), indexListej0 + 2500)

      return {
        ok: true,
        tailleHtml: html.length,
        contientDivListej: html.includes('div_listej'),
        contientListej0Guillemets: html.includes('id="listej0"'),
        contientListej0SansGuillemets: html.includes('id=listej0'),
        contientHrefGuillemets: html.includes('href="'),
        contientTitleGuillemets: html.includes('title="'),
        contientClassLinkjGuillemets: html.includes('class="linkj"'),
        contientClassLinkjSansGuillemets: html.includes('class=linkj'),
        contientPsg: html.includes('Paris Saint-Germain'),
        ressembleBlocage: /captcha|cloudflare|access denied|forbidden/i.test(html),
        titre: html.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.slice(0, 200) || null,
        joueursTrouves: joueurs.length,
        entraineurTrouve: entraineur?.nom || null,
        autourListej0
      }
    } catch (e) {
      return { ok: false, erreur: e.message }
    }
  }
)
