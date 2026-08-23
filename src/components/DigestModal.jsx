import { useEffect, useState } from 'react'
import { httpsCallable } from 'firebase/functions'
import { fonctions } from '../lib/firebase'
import './DigestModal.css'

/**
 * Récap des actus PSG parues depuis la dernière visite, affiché une fois
 * par ouverture du jour. Le contenu est intégralement le résumé rédigé par
 * IA (Groq, palier gratuit), structuré en sections par sujet ('## titre'
 * suivi d'un paragraphe) : on parse ce format pour afficher chaque section
 * avec son propre titre plutôt qu'un bloc de texte brut. Si le résumé
 * échoue (quota dépassé, clé absente…), on affiche un message d'attente
 * discret plutôt que rien — pas de repli sur une liste de titres bruts.
 */

/** Découpe le texte '## Titre\nParagraphe' en sections { titre, texte }. */
function decouperSections(brut) {
  if (!brut) return []
  const blocs = brut.split(/\n(?=##\s)/).map((b) => b.trim()).filter(Boolean)

  return blocs.map((bloc) => {
    const correspond = bloc.match(/^##\s*(.+?)\s*\n([\s\S]*)$/)
    if (!correspond) return { titre: null, texte: bloc }
    return { titre: correspond[1].trim(), texte: correspond[2].trim() }
  })
}

export default function DigestModal({ ouvert, actus, onFermer, onOuvrirArticle }) {
  const [resume, setResume] = useState(null)
  const [resumeEnCours, setResumeEnCours] = useState(false)

  useEffect(() => {
    if (!ouvert) return
    const echap = (e) => { if (e.key === 'Escape') onFermer?.() }
    document.addEventListener('keydown', echap)
    return () => document.removeEventListener('keydown', echap)
  }, [ouvert, onFermer])

  useEffect(() => {
    if (!ouvert || actus.length === 0) {
      setResume(null)
      return
    }

    setResumeEnCours(true)
    setResume(null)

    const articles = actus.map((a) => ({ id: a.id, titre: a.titre, resume: a.resume || null }))

    httpsCallable(fonctions, 'genererDigest')({ articles })
      .then((reponse) => setResume(reponse.data?.resume || null))
      .catch(() => setResume(null))
      .finally(() => setResumeEnCours(false))
  }, [ouvert, actus])

  if (!ouvert) return null

  const sections = decouperSections(resume)

  return (
    <div className="digest" role="dialog" aria-modal="true" onClick={onFermer}>
      <div className="digest__boite" onClick={(e) => e.stopPropagation()}>
        <span className="digest__etiquette">Depuis ta dernière visite</span>
        <h2 className="digest__titre">Actus <em>PSG</em></h2>

        {resumeEnCours && (
          <p className="digest__resume digest__resume--attente">Résumé en préparation…</p>
        )}

        {!resumeEnCours && sections.length === 0 && (
          <p className="digest__resume digest__resume--attente">
            Résumé indisponible pour le moment, reviens plus tard.
          </p>
        )}

        {sections.length > 0 && (
          <div className="digest__resume">
            {sections.map((section, i) => (
              <div className="digest__section" key={i}>
                {section.titre && <h3 className="digest__section-titre">{section.titre}</h3>}
                <p className="digest__section-texte">{section.texte}</p>
              </div>
            ))}
          </div>
        )}

        <button className="digest__fermer" onClick={onFermer}>Vu, merci</button>
      </div>
    </div>
  )
}
