# Inner pages specification

## Overview
- Target files: `InnerPageTemplate.tsx`, `ContactDetailsSection.tsx`, `innerPageData.ts`
- Interaction model: static content with direct links

## DOM structure
Shared header, compact editorial hero with image, intro/highlights, two informative sections, related experience cards, contact panel, footer.

## Computed styles
- Hero max width 1380px; rounded image panel; 60/40 split desktop.
- Content max width 1280px; readable copy measures 55–70ch.
- Contact page uses a purpose-built WhatsApp panel instead of a dead form.

## States and behaviors
- All CTAs resolve to internal pages, telephone, or WhatsApp.
- Contact CTA uses environment-backed phone/WhatsApp values.

## Assets
Each page uses a real image extracted from the source website and a descriptive alt attribute.

## Text content
English, specific to first-time Bali visitors. Avoid unverifiable superlatives and fixed pricing. Safety notes for waterfall experiences include fitness matching, weather checks, and no children under eight.

## Responsive behavior
- Hero and content grids stack below 1024px.
- Related cards become horizontally scrollable or stack cleanly on mobile.

