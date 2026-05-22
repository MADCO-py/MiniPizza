'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/',           label: 'Inicio'     },
  { href: '/about',      label: 'Acerca de'  },
  { href: '/categories', label: 'Categorias' },
]

export default function Navbar() {
  const path = usePathname()
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          La <span>Peca</span> en la Pizza
        </Link>
        <div className="nav-links">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={path === l.href ? 'active' : ''}>
              {l.label}
            </Link>
          ))}
          <a
            href="https://TU_USUARIO.github.io/minimarket-vite/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            Ir a la tienda
          </a>
        </div>
      </div>
    </nav>
  )
}
