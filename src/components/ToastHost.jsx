import { useToasts } from '../hooks/useToasts'
import './ToastHost.css'

/** Affiche la pile de toasts au-dessus de la nav du bas. Monté une seule fois dans App.jsx. */
export default function ToastHost() {
  const { toasts, retirer } = useToasts()

  if (toasts.length === 0) return null

  return (
    <div className="toasts" role="status" aria-live="polite">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast toast--${toast.type}`}
          onClick={() => retirer(toast.id)}
        >
          <span className="toast__puce" aria-hidden="true">{toast.type === 'erreur' ? '!' : '✓'}</span>
          <span className="toast__texte">{toast.message}</span>
        </div>
      ))}
    </div>
  )
}
