# Bali First Timer

A responsive travel-planning and guided-experience website for first-time visitors to Bali.

The site presents custom itineraries, waterfall and culinary hunts, activity booking,
destination ideas and direct WhatsApp trip planning.

## Technology

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Local development

```bash
bun install
cp .env.example .env.local
bun run dev
```

The development server is available at `http://localhost:3000`.

## Verification

```bash
bun run check
```

This runs ESLint, TypeScript checks and the production build. All supported contact,
analytics and verification variables are documented in `.env.example`.

## Brand and sharing assets

Open Graph and Twitter cards are generated at 1200×630 for the homepage and every
inner page. Favicons include an editable SVG, a 16/32/48px ICO, PNG sizes, Apple
touch and Android icons (including a maskable version).

After updating the logo, `public/hero-bg.png`, page copy or production domain, run:

```bash
bun run brand:assets
```

The vector favicon master is `public/seo/brand-mark.svg`; social cards are saved
under `public/seo/og/`. Commit the generated assets along with the source changes.
