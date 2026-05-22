export const metadata = { title: 'Categorias — La Peca en la Pizza' }

const cats = [
  { name: 'Pizzas',         desc: 'Monster Pizza, Kanibal, Margarita, Vegetariana y mas.',  count: 7 },
  { name: 'Pastas',         desc: 'Lasagna y Espaguetti con salsas caseras.',                count: 2 },
  { name: 'Especialidades', desc: 'Carnitas de cerdo cocinadas a fuego lento.',              count: 1 },
  { name: 'Canoas',         desc: 'Pan artesanal relleno con ingredientes seleccionados.',   count: 2 },
  { name: 'Burritos',       desc: 'De pollo y de cerdo con lechuga, mayonesa y pina.',       count: 2 },
  { name: 'Bebidas',        desc: 'Bebidas naturales, gaseosas, cervezas y mas.',            count: 1 },
]

export default function Categories() {
  return (
    <>
      <section className="hero" style={{ padding: '56px 20px' }}>
        <h1>Nuestras <span>Categorias</span></h1>
        <p>6 categorias con 15 productos disponibles en la tienda.</p>
      </section>

      <section className="section">
        <div className="container">
          <h2>Todas las categorias</h2>
          <p className="section-sub">Explora cada una en la tienda interactiva</p>
          <div className="cards-grid">
            {cats.map((c, i) => (
              <div key={i} className="info-card" style={{ borderTop: '3px solid var(--primary)' }}>
                <div className="card-label">{c.count} producto{c.count !== 1 ? 's' : ''}</div>
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <a
              href="https://TU_USUARIO.github.io/minimarket-vite/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn"
            >
              Ver todos los productos en la tienda
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
