export default function Hero({ onShop }) {
  return (
    <section id="inicio" className="hero">
      <h1>La <span>Peca</span> en la Pizza</h1>
      <p>
        Pizzas artesanales, pastas, canoas, burritos y bebidas.
        La autentica experiencia italiana en Guatemala.
      </p>
      <button className="hero-btn" onClick={onShop}>
        Ver el menu completo
      </button>
    </section>
  )
}
