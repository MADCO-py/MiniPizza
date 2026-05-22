# La Peca en la Pizza — Landing Next.js

Landing informativa del negocio ficticio, hecha con Next.js 14.

## Correr localmente

```bash
npm install
npm run dev
```

Abre: http://localhost:3000

## Paginas

| Ruta           | Descripcion                        |
|----------------|------------------------------------|
| `/`            | Hero, features, tabla comparativa  |
| `/about`       | Acerca del proyecto y stack        |
| `/categories`  | Las 6 categorias de productos      |

## Estructura

```
minimarket-next/
├── src/
│   ├── app/
│   │   ├── layout.jsx
│   │   ├── globals.css
│   │   ├── page.jsx
│   │   ├── about/page.jsx
│   │   └── categories/page.jsx
│   └── components/
│       ├── Navbar.jsx
│       └── Footer.jsx
├── next.config.js
├── package.json
├── .gitignore
└── README.md
```
