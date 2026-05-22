export default function Navbar({ cartCount, onCartOpen }) {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a href="#inicio" className="nav-logo">
          La <span>Peca</span> en la Pizza
        </a>
        <div className="nav-right">
          <div className="nav-links">
            <a href="#inicio">Inicio</a>
            <a href="#catalogo">Menu</a>
          </div>
          <button className="cart-btn" onClick={onCartOpen}>
            Carrito
            {cartCount > 0 && (
              <span className="cart-count">{cartCount > 99 ? '99+' : cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}
