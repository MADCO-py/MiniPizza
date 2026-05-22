import { useState, useMemo } from 'react'
import { PRODUCTS, CATEGORIES } from '../data/products.js'

function stockInfo(s) {
  if (s === 0)  return { label: 'Sin stock',    cls: 'stock-out' }
  if (s <= 5)   return { label: `Solo ${s} disponibles`, cls: 'stock-low' }
  return              { label: `${s} disponibles`,        cls: 'stock-ok'  }
}

function CardImage({ src, alt }) {
  if (!src) return <div className="card-img-placeholder">{alt}</div>
  return (
    <img
      src={src}
      alt={alt}
      onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
    />
  )
}

export default function Catalog({ onAdd }) {
  const [search,   setSearch]   = useState('')
  const [category, setCategory] = useState('Todos')
  const [tag,      setTag]      = useState('')
  const [sort,     setSort]     = useState('default')

  const list = useMemo(() => {
    let r = [...PRODUCTS]
    if (search.trim()) {
      const q = search.toLowerCase()
      r = r.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))
    }
    if (category !== 'Todos') r = r.filter(p => p.category === category)
    if (tag)                   r = r.filter(p => p.tag === tag)
    if (sort === 'asc')        r.sort((a, b) => a.price - b.price)
    if (sort === 'desc')       r.sort((a, b) => b.price - a.price)
    return r
  }, [search, category, tag, sort])

  return (
    <section id="catalogo" className="catalog">
      <div className="container">
        <div className="catalog-header">
          <h2>Nuestro Menu</h2>
          <p>Encuentra exactamente lo que buscas</p>
        </div>

        <div className="filters">
          <div className="filter-row">
            <div className="search-wrap">
              <input
                type="text"
                placeholder="Buscar en el menu..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <select
              className="filter-select"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select
              className="filter-select"
              value={sort}
              onChange={e => setSort(e.target.value)}
            >
              <option value="default">Ordenar por precio</option>
              <option value="asc">Menor a mayor</option>
              <option value="desc">Mayor a menor</option>
            </select>
          </div>

          <div className="tag-row">
            {['', 'popular', 'nuevo', 'oferta'].map(t => (
              <button
                key={t}
                className={`tag-btn ${tag === t ? 'active' : ''}`}
                onClick={() => setTag(t)}
              >
                {t === '' ? 'Todos' : t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <p className="results-info">
          {list.length} producto{list.length !== 1 ? 's' : ''} encontrado{list.length !== 1 ? 's' : ''}
        </p>

        {list.length === 0 ? (
          <div className="empty-state">
            <h3>Sin resultados</h3>
            <p>Intenta con otra busqueda o categoria.</p>
          </div>
        ) : (
          <div className="product-grid">
            {list.map(p => {
              const { label, cls } = stockInfo(p.stock)
              return (
                <article key={p.id} className="product-card">
                  <div className="card-img-wrap">
                    <div className="card-img-placeholder" style={{ display: 'flex' }}>
                      {p.category}
                    </div>
                    {p.tag && (
                      <span className={`card-tag tag-${p.tag}`}>{p.tag}</span>
                    )}
                  </div>
                  <div className="card-body">
                    <div className="card-cat">{p.category}</div>
                    <div className="card-name">{p.name}</div>
                    <div className="card-desc">{p.description}</div>
                    <div className="card-meta">
                      <span className="card-price">Q {p.price.toFixed(2)}</span>
                      <span className={`card-stock ${cls}`}>{label}</span>
                    </div>
                    <button
                      className="add-btn"
                      onClick={() => onAdd(p)}
                      disabled={p.stock === 0}
                    >
                      {p.stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
