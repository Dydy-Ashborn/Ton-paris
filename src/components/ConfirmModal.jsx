import { useEffect } from 'react'
import './ConfirmModal.css'

export default function ConfirmModal({ ouvert, message, texteConfirmer = 'Confirmer', texteAnnuler = 'Annuler', onConfirm, onCancel }) {
  useEffect(() => {
    if (!ouvert) return
    const echap = (e) => { if (e.key === 'Escape') onCancel?.() }
    document.addEventListener('keydown', echap)
    return () => document.removeEventListener('keydown', echap)
  }, [ouvert, onCancel])

  if (!ouvert) return null

  return (
    <div className="modale" id="confirmModal" role="dialog" aria-modal="true" onClick={onCancel}>
      <div className="modale__boite" onClick={(e) => e.stopPropagation()}>
        <div className="modale__message">{message}</div>
        <div className="modale__actions">
          <button className="modale__bouton modale__bouton--annuler" onClick={onCancel}>{texteAnnuler}</button>
          <button className="modale__bouton modale__bouton--confirmer" onClick={onConfirm}>{texteConfirmer}</button>
        </div>
      </div>
    </div>
  )
}
