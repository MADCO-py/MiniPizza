export default function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} La Peca en la Pizza &mdash; Landing hecha con Next.js</p>
      <p style={{ marginTop: 6 }}>
        <a href="https://TU_USUARIO.github.io/minimarket-vite/" target="_blank" rel="noopener noreferrer">
          Visitar la tienda interactiva
        </a>
      </p>
    </footer>
  )
}
