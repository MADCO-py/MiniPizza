import { useEffect, useState } from 'react'

export default function Toasts({ toasts, remove }) {
  return (
    <div className="toast-container">
      {toasts.map(t => <ToastItem key={t.id} toast={t} remove={remove} />)}
    </div>
  )
}

function ToastItem({ toast, remove }) {
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLeaving(true)
      setTimeout(() => remove(toast.id), 300)
    }, 2800)
    return () => clearTimeout(timer)
  }, [toast, remove])

  return (
    <div
      className={`toast ${toast.type === 'err' ? 'err' : ''}`}
      style={{ opacity: leaving ? 0 : 1, transition: 'opacity 0.3s' }}
    >
      {toast.msg}
    </div>
  )
}
