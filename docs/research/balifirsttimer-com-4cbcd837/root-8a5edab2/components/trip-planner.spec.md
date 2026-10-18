# Trip planner specification

## Overview
- Target file: `FinalCtaSection.tsx`
- Screenshot: `docs/design-references/balifirsttimer-com-4cbcd837/root-8a5edab2/source-desktop-full.png`
- Interaction model: click-driven form state and external WhatsApp link

## DOM structure
Heading/description column and planner card containing days select, traveller select, multi-select interest chips, and WhatsApp action.

## Computed styles
- Outer surface: lagoon-to-deep-ocean gradient, 2rem radius, white text.
- Planner card: translucent white panel with blur and 1px white border.
- Inputs/chips: minimum 44px target, rounded-full chips, strong focus ring.

## States and behaviors
- Days: 3, 5, 7, 10.
- Travellers: couple; family with children over 8; family with young children; friends; company trip.
- Interests toggle independently and expose `aria-pressed`.
- WhatsApp URL is computed from state without storing or submitting user data.

## Responsive behavior
- Two columns at 1024px; stacked below.

