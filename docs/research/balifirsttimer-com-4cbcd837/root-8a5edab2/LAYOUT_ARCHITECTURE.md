# Layout architecture

- App Router with one root landing page and a catch-all static route for data-backed inner pages.
- Main visual width: 1440px for hero; 1280–1380px for editorial sections.
- Mobile-first spacing: 20–24px gutters; 32px at tablet; 40–56px on desktop.
- Hero switches from stacked composition to a `0.92fr / 1.08fr` split at 1024px.
- Card grids use one column on mobile, two on tablet, and three or four on desktop depending on content density.
- Breakpoints follow Tailwind defaults, with the most important composition shift at 1024px.
- Sticky header is 74px mobile and 82px desktop. Content anchor offsets account for the header.

