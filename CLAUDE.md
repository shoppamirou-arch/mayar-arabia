@AGENTS.md

# Mayar Arabia — Contexto del Proyecto

## Qué es este proyecto

E-commerce de perfumería árabe premium con tienda física en Barcelona. Vende marcas como Lattafa, Afnan, Armaf, Rasasi y Maison Alhambra. El sitio está en español.

## Stack

- **Next.js 16.2.5** con App Router (versión con breaking changes — leer `node_modules/next/dist/docs/` antes de escribir código)
- **React 19** — usar solo APIs estables de React 19
- **TypeScript 5**
- **Tailwind CSS v4** — sintaxis distinta a v3: sin `tailwind.config.js` legacy, usar `tailwind.config.ts`
- **Framer Motion 12**
- **Lucide React 1.x**
- Sin base de datos — los datos están en `src/lib/data.ts`
- Sin pasarela de pago real — el checkout es simulado

## Estructura de páginas

| Ruta | Archivo |
|------|---------|
| `/` | `src/app/page.tsx` |
| `/tienda` | `src/app/tienda/page.tsx` |
| `/tienda/[slug]` | `src/app/tienda/[slug]/page.tsx` |
| `/checkout` | `src/app/checkout/page.tsx` |
| `/nosotros` | `src/app/nosotros/page.tsx` |
| `/contacto` | `src/app/contacto/page.tsx` |

## Componentes

- `src/components/Navbar.tsx` — fijo en top, cambia apariencia al hacer scroll, menú mobile
- `src/components/Footer.tsx` — footer del sitio
- `src/components/ProductCard.tsx` — tarjeta de producto con añadir al carrito y wishlist
- `src/components/CartDrawer.tsx` — drawer lateral del carrito

## Estado global

- `src/lib/CartContext.tsx` — Context para carrito + wishlist (en memoria, no persiste)
- El carrito vive en `CartProvider` que envuelve toda la app en `layout.tsx`

## Datos

Todos los productos, marcas y testimonios están en `src/lib/data.ts`. Para añadir productos, editar ese archivo. No hay API ni base de datos.

Tipos clave: `Product`, `Category` (`hombre | mujer | unisex`), `Scent` (`dulce | fresco | oriental | amaderado | floral`).

## Diseño / Design tokens

| Token | Valor |
|-------|-------|
| Negro principal | `#0F0F0F` |
| Dorado | `#C8A96B` |
| Dorado claro | `#D4B97A` |
| Fondo crema | `#FAF7F2` |
| Borde crema | `#EDE3D1` |

Fuentes via CSS variables:
- `var(--font-cinzel)` — titulares (Cinzel)
- `var(--font-cormorant)` — cuerpo elegante (Cormorant Garamond)
- `var(--font-inter)` — UI / labels (Inter)

Clase utilitaria global: `.gold-divider` — divisor dorado centrado.

## SEO

- `src/app/robots.ts` — robots.txt
- `src/app/sitemap.ts` — sitemap.xml
- `metadataBase` apunta a `https://mayarabia.com`

## Comandos

```bash
npm run dev    # Servidor de desarrollo
npm run build  # Build de producción
npm run lint   # ESLint
```
