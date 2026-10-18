# Hero specification

## Overview
- Target file: `HeroSection.tsx`
- Screenshot: `docs/design-references/balifirsttimer-com-4cbcd837/root-8a5edab2/source-desktop-full.png`
- Interaction model: time-driven carousel plus click controls

## DOM structure
Ambient background, editorial copy column, primary and secondary CTAs, progress controls, three complementary skewed image panels, circular trust badge.

## Computed styles
- Min height: viewport minus header.
- Desktop grid: `0.92fr 1.08fr`; max width 1440px.
- H1: clamp 3rem to 7.25rem, line-height 0.88, tracking -0.075em, Libre Baskerville.
- Main image: 70% width / 77% height, polygon clip, large shadow.
- Palette: sand `#F4F0E6`, night `#071B24`, lagoon `#09B8C8`, leaf `#B8E63D`.

## States and behaviors
- 3 slides at 5.6 seconds: personal planning, waterfall hunting, culinary hunting.
- Active copy enters from y=24px with blur; image enters from x=26px with saturation shift.
- Explicit controls update the active slide and expose progress.
- Reduced motion leaves slide 1 static.

## Assets
- `hero-bali.jpg`, `sekumpul-waterfall.jpg`, `bali-brunch.jpg`, `monkey-forest-ubud.jpg`, `jungle-atv.jpg`.

## Text content
Core promise: first Bali trips planned with local knowledge, transparent communication, and a pace matched to the traveller.

## Responsive behavior
- Desktop: split copy/image.
- Mobile: copy first; image composition remains at least 520px tall with simplified proportions.

