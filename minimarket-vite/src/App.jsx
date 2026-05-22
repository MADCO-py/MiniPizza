import { useState, useEffect, useCallback } from 'react'
import './styles/global.css'
import Navbar   from './components/Navbar.jsx'
import Hero     from './components/Hero.jsx'
import Catalog  from './components/Catalog.jsx'
import Cart     from './components/Cart.jsx'
import Checkout from './components/Checkout.jsx'
import Toasts   from './components/Toasts.jsx'

const CART_KEY = 'minimarket_cart'
let toastId = 0

function loadCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || [] }
  catch { return [] }
}

export default function App() {
  const [cart,         setCart]         = useState(loadCart)
  const [cartOpen,     setCartOpen]     = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [toasts,       setToasts]       = useState([])

  // Persist cart
  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart))
  }, [cart])

  const addToast = useCallback((msg, type = 'ok') => {
    const id = ++toastId
    setToasts(t => [...t, { id, msg, type }])
  }, [])

  const removeToast = useCallback(id => {
    setToasts(t => t.filter(x => x.id !== id))
  }, [])

  // Cart operations
  const addItem = useCallback(product => {
    setCart(prev => {
      const found = prev.find(i => i.id === product.id)
      if (found) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1 }]
    })
    addToast(`"${product.name}" agregado al carrito`)
  }, [addToast])

  const decItem = useCallback(id => {
    setCart(prev =>
      prev.map(i => i.id === id ? { ...i, qty: i.qty - 1 } : i).filter(i => i.qty > 0)
    )
  }, [])

  const delItem = useCallback(id => {
    setCart(prev => prev.filter(i => i.id !== id))
    addToast('Producto eliminado', 'err')
  }, [addToast])

  const clearCart = useCallback(() => {
    setCart([])
    addToast('Carrito vaciado', 'err')
  }, [addToast])

  const cartCount = cart.reduce((s, i) => s + i.qty, 0)

  const handleCheckout = () => { setCartOpen(false); setCheckoutOpen(true) }
  const handleSuccess  = () => {
    setCheckoutOpen(false)
    setCart([])
    addToast('Pedido confirmado. Gracias por tu compra.')
  }

  return (
    <>
      <Navbar
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
      />

      <main>
        <Hero onShop={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })} />
        <Catalog onAdd={addItem} />
      </main>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} La Peca en la Pizza &mdash; Simulador de tienda &middot;{' '}
          <a href="https://github.com/MADCO-py" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </footer>

      <Cart
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onAdd={addItem}
        onDec={decItem}
        onDel={delItem}
        onClear={clearCart}
        onCheckout={handleCheckout}
      />

      <Checkout
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        items={cart}
        onSuccess={handleSuccess}
      />

      <Toasts toasts={toasts} remove={removeToast} />
    </>
  )
}
