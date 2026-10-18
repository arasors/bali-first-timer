# Site shell specification

## Overview
- Target files: `SiteHeader.tsx`, `SiteFooter.tsx`, `WhatsAppFab.tsx`
- Screenshot: `docs/design-references/balifirsttimer-com-4cbcd837/root-8a5edab2/source-desktop-full.png`
- Interaction model: sticky + click-driven mobile menu

## DOM structure
Sticky header with brand link, desktop nav, WhatsApp CTA, menu toggle; fixed full-screen mobile nav; footer with brand, experience links, company links, contact; fixed WhatsApp button.

## Computed styles
- Source header: 97px, sticky top 0, white, z-index 50.
- Adapted header: 74px mobile / 82px desktop, max width 1480px, `#FBFDFB` at 90% opacity with blur.
- Footer: deep `#071B24`, cloud text, lagoon/leaf accents, 4 columns at desktop.
- Logo: user-supplied transparent PNG; no recreated text logo.

## States and behaviors
- Route-aware active underline.
- Desktop links darken on hover; CTA lifts 2px.
- Mobile menu locks body scroll and closes on Escape, toggle, or link selection.
- Overlay enters with circular clip-path; links stagger by 45ms.

## Assets
- `/sites/balifirsttimer-com-4cbcd837/shared/logo.png`

## Text content
Navigation: Home, Experiences, Destinations, About, Contact. CTA: Plan my Bali trip. Contact channel: WhatsApp `+62 812-8380-8333`.

## Responsive behavior
- Desktop: full nav from 1024px.
- Mobile/tablet: menu button and full-screen navigation.

