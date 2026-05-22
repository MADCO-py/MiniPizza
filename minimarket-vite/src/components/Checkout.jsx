import { useState } from 'react'

const IVA = 0.12

function genOrderNum() {
  return 'ORD-' + Math.random().toString(36).slice(2, 8).toUpperCase()
}

function validate(f, items) {
  const e = {}
  if (!f.nombre.trim())    e.nombre    = 'El nombre es requerido'
  if (!f.email.trim())     e.email     = 'El email es requerido'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Formato de email invalido'
  if (!f.direccion.trim()) e.direccion = 'La direccion es requerida'
  if (!f.pago)             e.pago      = 'Selecciona un metodo de pago'
  if (items.length === 0)  e.cart      = 'El carrito esta vacio'
  return e
}

const PAYMENT_OPTS = [
  { value: 'tarjeta',       label: 'Tarjeta de credito / debito' },
  { value: 'transferencia', label: 'Transferencia bancaria'       },
  { value: 'contra',        label: 'Contra entrega'               },
]

export default function Checkout({ open, onClose, items, onSuccess }) {
  const [form,    setForm]    = useState({ nombre: '', email: '', direccion: '', pago: '' })
  const [errors,  setErrors]  = useState({})
  const [done,    setDone]    = useState(false)
  const [orderNum, setOrderNum] = useState('')
  const [loading, setLoading] = useState(false)

  if (!open) return null

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0)
  const iva      = subtotal * IVA
  const total    = subtotal + iva

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    setErrors(err => ({ ...err, [e.target.name]: undefined }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate(form, items)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => {
      setOrderNum(genOrderNum())
      setDone(true)
      setLoading(false)
    }, 1000)
  }

  const handleClose = () => {
    if (done) onSuccess()
    else onClose()
    setForm({ nombre: '', email: '', direccion: '', pago: '' })
    setErrors({})
    setDone(false)
    setOrderNum('')
  }

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && handleClose()}>
      <div className="modal" role="dialog">
        <div className="modal-head">
          <h2>{done ? 'Pedido Confirmado' : 'Finalizar Pedido'}</h2>
          <button className="cart-close" onClick={handleClose}>x</button>
        </div>

        {done ? (
          <div className="order-success">
            <div className="success-badge">OK</div>
            <h3>Gracias, {form.nombre.split(' ')[0]}!</h3>
            <div className="order-num">{orderNum}</div>
            <p className="success-meta">
              Confirmacion enviada a <strong>{form.email}</strong>
            </p>
            <div className="success-items">
              <h4>Resumen del pedido</h4>
              {items.map(i => (
                <div key={i.id} className="summary-row">
                  <span>{i.qty}x {i.name}</span>
                  <span>Q {(i.price * i.qty).toFixed(2)}</span>
                </div>
              ))}
              <div className="summary-row" style={{ fontWeight: 800, marginTop: 8, paddingTop: 8, borderTop: '1px solid var(--border)' }}>
                <span>Total pagado</span>
                <span style={{ color: 'var(--primary)' }}>Q {total.toFixed(2)}</span>
              </div>
            </div>
            <button className="continue-btn" onClick={handleClose}>
              Seguir comprando
            </button>
          </div>
        ) : (
          <form className="modal-body" onSubmit={handleSubmit} noValidate>

            {errors.cart && (
              <div className="cart-warn">{errors.cart}</div>
            )}

            <div className="form-section-label">Datos de contacto</div>

            <div className="form-group">
              <label className="form-label" htmlFor="nombre">Nombre completo</label>
              <input
                id="nombre"
                name="nombre"
                className={`form-input ${errors.nombre ? 'err' : ''}`}
                placeholder="Tu nombre completo"
                value={form.nombre}
                onChange={handleChange}
                autoComplete="name"
              />
              {errors.nombre && <div className="form-error">{errors.nombre}</div>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Correo electronico</label>
              <input
                id="email"
                name="email"
                type="email"
                className={`form-input ${errors.email ? 'err' : ''}`}
                placeholder="tu@correo.com"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
              {errors.email && <div className="form-error">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="direccion">Direccion de entrega</label>
              <textarea
                id="direccion"
                name="direccion"
                className={`form-textarea ${errors.direccion ? 'err' : ''}`}
                placeholder="Zona, colonia, calle y numero..."
                value={form.direccion}
                onChange={handleChange}
              />
              {errors.direccion && <div className="form-error">{errors.direccion}</div>}
            </div>

            <div className="form-section-label" style={{ marginTop: 20 }}>Metodo de pago</div>

            <div className="pay-options">
              {PAYMENT_OPTS.map(opt => (
                <label
                  key={opt.value}
                  className={`pay-option ${form.pago === opt.value ? 'sel' : ''}`}
                >
                  <input
                    type="radio"
                    name="pago"
                    value={opt.value}
                    checked={form.pago === opt.value}
                    onChange={handleChange}
                  />
                  {opt.label}
                </label>
              ))}
            </div>
            {errors.pago && <div className="form-error" style={{ marginTop: 6 }}>{errors.pago}</div>}

            <div className="form-section-label" style={{ marginTop: 20 }}>Resumen del pedido</div>

            <div className="order-summary-items">
              {items.map(i => (
                <div key={i.id} className="summary-row">
                  <span>{i.qty}x {i.name}</span>
                  <span>Q {(i.price * i.qty).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="summary-totals">
              <div className="st-row"><span>Subtotal</span><span>Q {subtotal.toFixed(2)}</span></div>
              <div className="st-row"><span>IVA 12%</span><span>Q {iva.toFixed(2)}</span></div>
              <div className="st-row grand">
                <span>Total</span>
                <span>Q {total.toFixed(2)}</span>
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Procesando...' : `Confirmar pedido — Q ${total.toFixed(2)}`}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
