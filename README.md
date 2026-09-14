# Rajkamal offers demo

A standalone Next.js App Router frontend matching `rkp_page.svg`, with no site navigation or footer. Available at `/` and `/offers`.

## Run locally

Requires Node.js 20.9 or newer (Node.js 22 recommended).

```sh
npm ci
npm run dev
```

Open http://localhost:3000/offers.

```sh
npm run typecheck
npm run build
npm start
```

## Developer handoff

- `src/data/offers.ts`: campaign image, accessible banner description, category labels, artwork and optional destination URLs.
- `src/components/offers/`: page composition, campaign banner and reusable category cards.
- Tailwind utility classes in each component define layout, colors, glass effects and responsive states. `src/app/globals.css` only imports Tailwind; `postcss.config.mjs` enables its PostCSS plugin. The local Hindi font is loaded with `next/font/local` in the root layout.
- `public/assets/`: self-contained local images and Hindi font. No image host or font service required.

The layout scales up to 1000px, with one card per row below 600px, two columns from 600–899px, and three columns from 900px. The background starts as राजकमल, holds for one second, then visibly separates over 2.6 seconds. Scrolling spreads the five sticky letters farther, with gentle continuous drift. The animation pauses in hidden tabs and respects reduced motion. `ScrollBackdrop.tsx` contains the letter destinations and scroll response. Cards use a translucent gradient and backdrop blur for frosted glass. Reduced-motion preferences keep the word intact. Cards support keyboard focus, and the native modal supports Escape and focus restoration. Reduced-motion preferences are respected.

### Campaign artwork

The active banner is the supplied `public/assets/banner_for_offer.jpg`, rendered at its natural 4416 × 2018 aspect ratio. Change the campaign image and accessible description in `src/data/offers.ts`. The original reference SVG artwork remains available in `public/assets/`. The nine segment illustrations come from the supplied assets.

### Category destinations

The live offers page showed an empty state on inspection, so category URLs could not be verified. Until a category's `href` is set, its card opens a demo dialog with a link to the publisher's live collections page. Set each `href` to the real category URL to render ordinary navigation links instead. There is no backend, checkout, inventory or invented product catalogue.

### Sharing

Deploy this directory as a standard Next.js project (for example, import it into a Next.js-compatible host). No environment variables are required. Share the source and lockfile, excluding `node_modules` and `.next`; the recipient runs `npm ci`. Demo metadata disables search indexing.

Publisher artwork is supplied by the project owner. The bundled Noto font license is in `public/assets/FONT-LICENSE.txt`.
