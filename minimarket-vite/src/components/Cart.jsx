const IVA = 0.12

export default function Cart({ open, onClose, items, onAdd, onDec, onDel, onClear, onCheckout }) {
  if (!open) return null

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0)
  const iva      = subtotal * IVA
  const total    = subtotal + iva

  return (
    <>
      <div className="cart-overlay" onClick={onClose} />
      <aside className="cart-panel" role="dialog" aria-label="Carrito de compras">
        <div className="cart-head">
          <h2>Carrito ({items.reduce((s, i) => s + i.qty, 0)} items)</h2>
          <button className="cart-close" onClick={onClose} aria-label="Cerrar">x</button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty-msg">
            <p>Tu carrito esta vacio</p>
            <small>Agrega algo del menu</small>
          </div>
        ) : (
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-thumb">
                  <div className="item-thumb-placeholder" />
                </div>
                <div className="item-info">
                  <div className="item-name">{item.name}</div>
                  <div className="item-price">Q {item.price.toFixed(2)}</div>
                  <div className="item-sub">Sub: Q {(item.price * item.qty).toFixed(2)}</div>
                </div>
                <div className="qty-controls">
                  <button className="qty-btn" onClick={() => onDec(item.id)}>-</button>
                  <span className="qty-num">{item.qty}</span>
                  <button className="qty-btn" onClick={() => onAdd(item)}>+</button>
                  <button className="item-del" onClick={() => onDel(item.id)}>Eliminar</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div className="cart-foot">
            <div className="cart-totals">
              <div className="t-row"><span>Subtotal</span><span>Q {subtotal.toFixed(2)}</span></div>
              <div className="t-row"><span>IVA (12%)</span><span>Q {iva.toFixed(2)}</span></div>
              <div className="t-row grand">
                <span>Total</span>
                <span>Q {total.toFixed(2)}</span>
              </div>
            </div>
            <button className="checkout-btn" onClick={onCheckout}>
              Proceder al pago — Q {total.toFixed(2)}
            </button>
            <button className="clear-btn" onClick={onClear}>
              Vaciar carrito
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
