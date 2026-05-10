# Mayar Arabia

E-commerce de perfumería árabe premium. Tienda online con recogida en Barcelona.

**Marcas:** Lattafa · Afnan · Armaf · Rasasi · Maison Alhambra

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 + Framer Motion
- Sin backend — datos estáticos en `src/lib/data.ts`

## Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

```
src/
├── app/
│   ├── page.tsx              # Home
│   ├── tienda/               # Catálogo + página de producto
│   ├── checkout/             # Checkout (simulado)
│   ├── nosotros/             # Página about
│   ├── contacto/             # Contacto
│   ├── sitemap.ts            # SEO sitemap
│   └── robots.ts             # SEO robots
├── components/
│   ├── Navbar.tsx            # Navbar fija con scroll
│   ├── Footer.tsx
│   ├── ProductCard.tsx       # Tarjeta de producto
│   └── CartDrawer.tsx        # Drawer carrito lateral
└── lib/
    ├── data.ts               # Productos, marcas, testimonios
    └── CartContext.tsx       # Carrito + wishlist (React Context)
```

## Añadir productos

Editar el array `PRODUCTS` en `src/lib/data.ts`. Cada producto necesita `id`, `slug`, `name`, `brand`, `price`, `category`, `scent`, `ml`, `gradient`, notas olfativas, `longevity`, `sillage` y `rating`.

## Personalización

Los colores y fuentes están centralizados:

- **Dorado:** `#C8A96B` · **Negro:** `#0F0F0F` · **Crema:** `#FAF7F2`
- Fuentes: Cinzel (títulos), Cormorant Garamond (cuerpo), Inter (UI)

## Despliegue

Optimizado para Vercel. Actualizar `metadataBase` en `src/app/layout.tsx` con el dominio real antes de publicar.
