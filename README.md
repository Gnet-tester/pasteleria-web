# Gisela Pastelería Natural

Web de Gisela Pastelería Natural (Ponferrada, León), construida con Astro + Tailwind.

## 🚀 Estructura del proyecto

```text
/
├── public/                  # favicons, manifest.json, robots.txt
├── src/
│   ├── assets/              # logo, favicon, fotos, PDFs de referencia
│   ├── components/          # Header, Footer, Welcome, Reviews, MapSection, BCB...
│   │   └── pages/           # plantillas de página (HomePage, CartaPage, BcbPage, HistoriaPage)
│   ├── data/                # menu.ts (datos de la carta)
│   ├── i18n/                # ui.ts (diccionario), menu-translations.ts, utils.ts
│   ├── layouts/              # Layout.astro (SEO, preloader, scripts globales)
│   └── pages/                # rutas (es por defecto, /en, /de, /fr, /ko, /zh)
└── package.json
```

El sitio es estático (`output: "static"`) y multilingüe (es/en/de/fr/ko/zh) mediante el `i18n` de Astro.

## 🧞 Comandos

| Comando           | Acción                                       |
| :---------------- | :-------------------------------------------- |
| `npm install`      | Instala dependencias                          |
| `npm run dev`      | Servidor de desarrollo en `localhost:4321`    |
| `npm run build`    | Compila el sitio de producción en `./dist/`   |
| `npm run preview`  | Previsualiza el build localmente               |

## 🔑 Variables de entorno

Copia `.env.example` a `.env` y rellena los valores reales (nunca se suben a git):

- `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID` — reseñas de Google en build time (sección Opiniones e Historia).
- `STRIPE_SECRET_KEY`, `PUBLIC_STRIPE_PUBLISHABLE_KEY` — cuenta de Stripe (usada solo para crear los Payment Links, no en runtime del sitio).
- `PUBLIC_STRIPE_BCB_LINK_SENCILLO` / `_COMPLETO` / `_PREMIUM` — Payment Links de Stripe para los packs de BCB.

Si faltan estas variables el sitio sigue compilando: las reseñas muestran un mensaje de "próximamente" y los botones de BCB muestran "Próximamente" en vez del enlace de pago.

## 🚢 Despliegue a IONOS

El despliegue es automático: cada `push` a `main` dispara el workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), que:

1. Instala dependencias y compila el sitio (`npm run build`).
2. Sube el contenido de `dist/` por SFTP al hosting de IONOS.

### Secrets necesarios (GitHub → Settings → Secrets and variables → Actions)

**Conexión SFTP (obligatorios):**
- `SFTP_HOST`
- `SFTP_USERNAME`
- `SFTP_PASSWORD`
- `SFTP_PORT`

**Variables de entorno del build (opcionales, mismas que en `.env`):**
- `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID`
- `STRIPE_SECRET_KEY`, `PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `PUBLIC_STRIPE_BCB_LINK_SENCILLO`, `PUBLIC_STRIPE_BCB_LINK_COMPLETO`, `PUBLIC_STRIPE_BCB_LINK_PREMIUM`
- `PUBLIC_GA_MEASUREMENT_ID` (ID de medición de Google Analytics 4, formato `G-XXXXXXXXXX`)
- `PUBLIC_GTM_ID` (ID del contenedor de Google Tag Manager, formato `GTM-XXXXXXX`; opcional, si no se define se usa el contenedor por defecto del proyecto)

Si el dominio en IONOS no apunta a la raíz del espacio web, ajusta `server-dir` en `deploy.yml`.

## 👀 Más información

[Documentación de Astro](https://docs.astro.build)
