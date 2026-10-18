# Discovery sections specification

## Overview
- Target files: `AllServicesSection.tsx`, `WholesaleBenefitsSection.tsx`, `InspirationCarouselSection.tsx`, `ProjectsGridSection.tsx`
- Screenshot: `docs/design-references/balifirsttimer-com-4cbcd837/root-8a5edab2/source-desktop-full.png`
- Interaction model: hover + click-driven carousel

## DOM structure
Experience directory grid; three-step process; horizontal destination cards; asymmetric culinary image mosaic.

## Computed styles
- Directory: 2 columns mobile, 3 tablet, 4 desktop where space allows.
- Carousel card width: 78vw mobile, 320–360px desktop; 16px gap; scroll snap.
- Gallery: 2 columns mobile, 4 columns desktop with selected cards spanning rows/columns.
- Images use object-cover and 0.5s scale transitions.

## States and behaviors
- Directory cards link to real inner pages when a detail page exists and to `/experiences` otherwise.
- Carousel previous/next buttons scroll by about one card width.
- Gallery is visual only; no fake lightbox unless fully keyboard accessible.

## Assets
All destination and culinary images under `public/sites/balifirsttimer-com-4cbcd837/root-8a5edab2/images/`.

## Text content
Activities include temples, beaches, water sports, ATV, rafting, surf, markets, shopping, hot springs, and family days. Process: tell us about the trip, receive a clear plan, arrive with the details handled.

## Responsive behavior
- No horizontal page overflow.
- Carousel remains swipeable on touch.

