# La Peca en la Pizza — Vite + React

Simulador de tienda online (pizzeria) construido con Vite + React 18 y CSS puro.

## Correr localmente

```bash
npm install
npm run dev
```

Abre: http://localhost:5173/minimarket-vite/

## Deploy a GitHub Pages

1. En `vite.config.js` cambia el `base` al nombre de tu repo:
   ```js
   base: '/NOMBRE-DE-TU-REPO/',
   ```

2. Sube el codigo a GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: tienda online inicial"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/NOMBRE-REPO.git
   git push -u origin main
   ```

3. En GitHub > Settings > Pages > Source: **GitHub Actions**

El workflow en `.github/workflows/deploy.yml` se ejecuta automaticamente.

## Funcionalidades

- 15 productos con ID, nombre, categoria, precio, imagen, descripcion, stock y etiqueta
- Filtro por nombre, categoria, etiqueta y orden de precio
- Carrito: agregar, eliminar, +/-, vaciar, subtotal por producto y total con IVA 12%
- Carrito persistente con `localStorage` y `useEffect`
- Checkout con validacion de campos, formato de email y carrito vacio
- Resumen de compra con numero de pedido al confirmar
- Notificaciones toast

## Estructura

```
minimarket-vite/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Catalog.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   └── Toasts.jsx
│   ├── data/
│   │   └── products.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
├── .gitignore
└── README.md
```
