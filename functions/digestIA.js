/**
 * Résumé quotidien du digest PSG, rédigé par une IA légère (Groq, palier
 * gratuit — pas de facturation liée, contrairement à Google AI Studio où
 * une clé peut se retrouver associée à un projet avec crédit prépayé).
 * Appelé à la demande depuis le client quand le digest doit s'ouvrir : le
 * résultat est mis en cache dans Firestore pour la journée, pour ne jamais
 * appeler le modèle deux fois sur le même lot d'articles.
 *
 * Reste strictement optionnel : si la clé n'est pas configurée ou si
 * l'appel échoue, le digest s'affiche quand même avec la liste des titres
 * (comportement d'avant), sans jamais bloquer l'utilisateur sur une
 * fonctionnalité annexe.
 */
import { onCall, HttpsError } from 'firebase-functions/v2/https'
import { defineSecret } from 'firebase-functions/params'
import { logger } from 'firebase-functions/v2'
import { FieldValue } from 'firebase-admin/firestore'
import { db, chemins, TENANT_ID } from './lib/admin.js'

const REGION = 'europe-west9'
const CLE_GROQ = defineSecret('CLE_GROQ')
// Les modèles Llama testés (llama-3.3-70b-versatile, llama-4-maverick)
// n'étaient pas accessibles avec cette clé (404 model_not_found) : la
// liste des modèles réellement autorisés (interrogée directement via
// /v1/models) ne contient aucun Llama, seulement des modèles OpenAI/Qwen
// et des modèles spécialisés (audio, modération). gpt-oss-120b est
// généraliste et confirmé accessible.
const MODELE = 'openai/gpt-oss-120b'
const MAX_ARTICLES = 12

/** Clé de cache : un résumé par jour et par lot d'articles (évite de reformuler si rien n'a changé). */
function cleCache(idsArticles, jourISO) {
  const empreinte = [...idsArticles].sort().join('|')
  return `${jourISO}_${Buffer.from(empreinte).toString('base64').slice(0, 40)}`
}

async function demanderResume(articles, cle) {
  const puces = articles
    .slice(0, MAX_ARTICLES)
    .map((a) => `- ${a.titre}${a.resume ? ` : ${a.resume}` : ''}`)
    .join('\n')

  const consigne =
    "Tu rédiges le résumé d'actualité du jour pour le Paris Saint-Germain (PSG) uniquement, " +
    "à destination d'un supporter pressé qui n'a pas suivi les actus. Les articles ci-dessous " +
    "peuvent parfois mentionner d'autres clubs en passant (adversaire, classement, transfert " +
    "croisé) : ignore tout ce qui ne concerne pas directement le PSG, ne résume que les points " +
    "qui parlent du club, de ses joueurs, de son staff ou de ses matchs. " +
    "Regroupe les articles ci-dessous par sujet (un même sujet peut correspondre à " +
    "plusieurs articles). Pour chaque sujet, écris une ligne de titre très courte (3 à 6 mots, " +
    "sans ponctuation finale) précédée de '## ', puis un paragraphe de 1 à 3 phrases en " +
    "français, ton naturel et factuel (pas de tournures publicitaires, pas de superlatifs " +
    "excessifs), sans rien inventer. Sépare chaque section par une ligne vide. Pas de liste à " +
    "puces à l'intérieur d'un paragraphe, pas de titre général en tête, 2 à 4 sections maximum " +
    "en regroupant les sujets proches.\n\n" +
    "Exemple de format attendu :\n" +
    "## Brunner buteur en Europe\n" +
    "Paris Brunner a marqué son premier but européen face au Gornik Zabrze...\n\n" +
    "## Match retour contre Rennes déplacé\n" +
    "Le PSG jouera finalement au Roazhon Park...\n\n" +
    puces

  const controleur = new AbortController()
  const minuterie = setTimeout(() => controleur.abort(), 15000)

  try {
    const reponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      signal: controleur.signal,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${cle}`
      },
      body: JSON.stringify({
        model: MODELE,
        messages: [{ role: 'user', content: consigne }],
        temperature: 0.4,
        // gpt-oss-120b est un modèle "reasoning" : il écrit d'abord un
        // raisonnement interne (champ `reasoning`) avant le texte final
        // (`content`). Avec un budget de tokens trop court, tout part dans
        // le raisonnement et `content` reste vide. `reasoning_effort: low`
        // réduit ce raisonnement au minimum, et max_tokens est monté par
        // sécurité pour laisser de la place au paragraphe final.
        reasoning_effort: 'low',
        max_tokens: 900
      })
    })

    if (!reponse.ok) {
      // Le corps de la réponse Groq contient la vraie raison (clé invalide,
      // quota, modèle retiré) : on la remonte telle quelle dans l'erreur
      // plutôt qu'un simple code HTTP, sinon impossible à diagnostiquer.
      const corps = await reponse.text().catch(() => '')
      throw new Error(`HTTP ${reponse.status} — ${corps.slice(0, 500)}`)
    }

    const donnees = await reponse.json()
    const message = donnees.choices?.[0]?.message
    // Repli sur `reasoning` si jamais `content` est encore vide malgré
    // reasoning_effort: low (modèle qui n'aurait pas respecté le réglage) :
    // mieux vaut un résumé imparfait que rien du tout.
    const texte = (message?.content?.trim()) || (message?.reasoning?.trim())
    if (!texte) throw new Error(`Réponse vide du modèle — ${JSON.stringify(donnees).slice(0, 500)}`)

    return texte
  } finally {
    clearTimeout(minuterie)
  }
}

export const genererDigest = onCall(
  { region: REGION, secrets: [CLE_GROQ], memory: '256MiB', timeoutSeconds: 30 },
  async (requete) => {
    if (!requete.auth) throw new HttpsError('unauthenticated', 'Connecte-toi pour générer le résumé.')

    const articles = requete.data?.articles
    if (!Array.isArray(articles) || articles.length === 0) {
      throw new HttpsError('invalid-argument', 'Aucun article à résumer.')
    }

    const jourISO = new Date().toISOString().slice(0, 10)
    const ids = articles.map((a) => a.id).filter(Boolean)
    const cle = cleCache(ids, jourISO)
    const refCache = db.doc(`tenants/${TENANT_ID}/digestResumes/${cle}`)

    const enCache = await refCache.get()
    if (enCache.exists) {
      return { resume: enCache.data().resume, depuisCache: true }
    }

    try {
      const resume = await demanderResume(articles, CLE_GROQ.value())

      await refCache.set({
        resume,
        nombreArticles: articles.length,
        genereLe: FieldValue.serverTimestamp()
      })

      return { resume, depuisCache: false }
    } catch (e) {
      const detail = `${e.name || 'Error'}: ${e.message || String(e)}`
      logger.warn('Résumé IA indisponible, repli sur la liste simple.', { detail })
      throw new HttpsError('unavailable', 'Résumé indisponible pour le moment.')
    }
  }
)
