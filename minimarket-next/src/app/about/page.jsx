export const metadata = { title: 'Acerca de — La Peca en la Pizza' }

const stack = [
  { t: 'Frontend',     d: 'React 18 + Vite 5' },
  { t: 'Estilos',      d: 'CSS puro con variables CSS' },
  { t: 'Persistencia', d: 'localStorage con useEffect' },
  { t: 'Landing',      d: 'Next.js 14 App Router' },
  { t: 'Deploy',       d: 'GitHub Actions + GitHub Pages' },
  { t: 'Control',      d: 'Git + GitHub' },
]

export default function About() {
  return (
    <>
      <section className="hero" style={{ padding: '56px 20px' }}>
        <h1>Acerca de <span>La Peca</span></h1>
        <p>Proyecto academico de simulador de tienda online.</p>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
            <div>
              <h2>Que es?</h2>
              <p className="section-sub">El proyecto completo</p>
              <p style={{ color: 'var(--text-muted)', marginBottom: 14, lineHeight: 1.8 }}>
                La Peca en la Pizza es un simulador de pizzeria construido como proyecto academico.
                Permite explorar un catalogo de productos, filtrar por categoria y etiqueta,
                gestionar un carrito de compras y simular un proceso de pago completo.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                El proyecto tiene dos partes: la app principal con Vite + React publicada en
                GitHub Pages, y esta landing informativa con Next.js.
              </p>
            </div>
            <div className="stats-grid">
              <div className="stat-box"><strong>15</strong><span>Productos</span></div>
              <div className="stat-box"><strong>6</strong><span>Categorias</span></div>
              <div className="stat-box"><strong>2</strong><span>Apps</span></div>
              <div className="stat-box"><strong>100%</strong><span>CSS puro</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray">
        <div className="container">
          <h2>Stack tecnologico</h2>
          <p className="section-sub">Herramientas utilizadas en el desarrollo</p>
          <div className="cards-grid">
            {stack.map((s, i) => (
              <div key={i} className="info-card">
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
