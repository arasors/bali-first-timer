# Editorial sections specification

## Overview
- Target files: `ServicesHighlightSection.tsx`, `ValueCtaSection.tsx`, `StatsSection.tsx`, `StorySection.tsx`
- Screenshot: `docs/design-references/balifirsttimer-com-4cbcd837/root-8a5edab2/source-desktop-full.png`
- Interaction model: static content plus scroll reveals and hover

## DOM structure
Three featured image cards; oversized statement panel; three metrics; split local-story section.

## Computed styles
- Section max width: 1280–1380px.
- Section padding: 80–120px desktop, 56–72px mobile.
- Feature card ratio: 4/5 with bottom gradient and raised copy panel.
- Statement panel: night background, 2rem radius, white text, ambient lagoon orb.
- Metrics: one column mobile, three columns desktop, thin `#D9E5E1` dividers.

## States and behaviors
- Cards lift 4px and images scale 1.04 on hover.
- Links move arrows 4px.
- Parent `ScrollReveal` handles one-time viewport entry.

## Assets
- `sekumpul-waterfall.jpg`, `bali-brunch.jpg`, `family-crater-lake.jpg`, `tirta-empul.jpg`.

## Text content
Featured services: Personal itinerary, Waterfall hunting, Culinary hunting. Metrics: 100% transparent, 1:1 planning, local Bali insight. Story emphasizes honest recommendations and first-timer-friendly pacing.

## Responsive behavior
- Feature cards stack below 768px.
- Statement and story layouts split at 1024px.

