import Link from 'next/link'

const features = [
  { label: 'Catalogo',      title: '15 productos',         desc: 'Pizzas, pastas, canoas, burritos y bebidas.' },
  { label: 'Carrito',       title: 'Carrito inteligente',  desc: 'Agrega, elimina y ajusta cantidades. Persiste al recargar.' },
  { label: 'Busqueda',      title: 'Filtros avanzados',    desc: 'Busca por nombre, categoria, etiqueta y precio.' },
  { label: 'Pago',          title: 'Checkout simulado',    desc: 'Formulario con validacion y 3 metodos de pago.' },
  { label: 'Responsive',    title: 'Diseno responsive',    desc: 'Funciona en movil, tablet y escritorio.' },
  { label: 'Persistencia',  title: 'localStorage',         desc: 'El carrito no desaparece al recargar la pagina.' },
]

const diff = [
  { asp: 'Proposito',   vite: 'App interactiva de compras',   next: 'Pagina informativa del negocio' },
  { asp: 'Renderizado', vite: 'Client-Side (CSR)',             next: 'Server-Side / Hibrido (SSR)'   },
  { asp: 'Deploy',      vite: 'GitHub Pages (estatico)',       next: 'Local / Vercel'                },
  { asp: 'Router',      vite: 'Single page con scroll',        next: 'File-based routing de Next.js' },
  { asp: 'Estado',      vite: 'useState + localStorage',       next: 'Sin estado (informativa)'      },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>La <span>Peca</span> en la Pizza</h1>
        <p>Simulador de tienda online construido con React y Vite, publicado en GitHub Pages.</p>
        <a href="https://TU_USUARIO.github.io/minimarket-vite/" target="_blank" rel="noopener noreferrer" className="hero-btn">
          Ir a la tienda
        </a>
        <div className="hero-chips">
          <span className="hero-chip">React + Vite</span>
          <span className="hero-chip">CSS puro</span>
          <span className="hero-chip">15 productos</span>
          <span className="hero-chip">GitHub Pages</span>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Que tiene la tienda?</h2>
          <p className="section-sub">Todo lo que necesitas en un simulador de ecommerce</p>
          <div className="cards-grid">
            {features.map((f, i) => (
              <div key={i} className="info-card">
                <div className="card-label">{f.label}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray">
        <div className="container">
          <h2>Por que dos apps?</h2>
          <p className="section-sub">Vite para la tienda interactiva, Next.js para la landing informativa</p>
          <table>
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Tienda (Vite + React)</th>
                <th>Landing (Next.js)</th>
              </tr>
            </thead>
            <tbody>
              {diff.map((d, i) => (
                <tr key={i}>
                  <td>{d.asp}</td>
                  <td>{d.vite}</td>
                  <td>{d.next}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2>Listo para explorar?</h2>
          <p className="section-sub">Visita la tienda o conoce mas del proyecto</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://TU_USUARIO.github.io/minimarket-vite/" target="_blank" rel="noopener noreferrer"
               className="hero-btn">Ir a la tienda</a>
            <Link href="/about" className="hero-btn" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
              Acerca del proyecto
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
