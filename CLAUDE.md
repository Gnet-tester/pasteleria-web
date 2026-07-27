# Proyecto: Web Gisela Pastelería Natural

## Stack
- Astro + Tailwind — SEO/rendimiento máximo, mínimo JS enviado al cliente.
- E-commerce: Stripe Checkout embebido en las páginas de producto (evita montar WordPress/WooCommerce aparte).
- Panel de gestión (`/admin`) aparte, como pequeña app (Astro islands + Supabase/Postgres) para productos, pedidos y contenido.

## SEO / Indexación (checklist obligatorio en cada página)
- Metadata dinámica (title, description, canonical) vía `generateMetadata`.
- `sitemap.xml` y `robots.txt` autogenerados.
- JSON-LD: `LocalBusiness`, `Bakery`, `Product`, `Offer`, `BreadcrumbList`.
- Open Graph + Twitter Card en todas las páginas.
- Google Search Console + verificación por DNS en IONOS.
- Google Analytics 4 (gtag.js) + Google Tag Manager.
- Apple: soporte `apple-touch-icon`, `manifest.json` (PWA), Smart App Banner si aplica.
- Core Web Vitals: imágenes con `next/image`, lazy loading, fuentes optimizadas.
- Datos estructurados de horario, dirección y menú/productos para Google Business Profile.

## Control de versiones
- Git + GitHub, rama `main` protegida, ramas `feature/*`.
- GitHub Actions: build + deploy automático a IONOS al hacer push a `main` (vía FTP/SFTP action o Docker si IONOS lo permite).
- Commits en español, convención: `feat:`, `fix:`, `seo:`, `content:`.

## Dashboard de gestión
- Panel `/admin` protegido (NextAuth), para: productos, pedidos, textos/imágenes de la web, sin tocar código.
- Tú seguirás editando directo en VS Code para cambios estructurales; el dashboard es para el día a día (precios, fotos, stock).

## Reglas para Claude Code en este repo
- Antes de cualquier cambio: revisar impacto en SEO (metadata, sitemap).
- Todo componente nuevo con Tailwind, mobile-first.
- Nunca romper el build (`npm run build`) antes de commit.
- Mantener `README.md` con pasos de deploy a IONOS actualizados.
