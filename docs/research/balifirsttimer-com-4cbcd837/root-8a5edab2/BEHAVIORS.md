# Behaviors

## Source site

- Header is sticky at `top: 0`, z-index 50.
- Highlight carousel duplicates its cards, advances about 0.6px per animation frame, wraps at half its scroll width, pauses on hover/touch, and resumes 2.5 seconds after touch interaction.
- Signature culinary track is a 26-second linear infinite marquee (18 seconds below 900px) and pauses on hover.
- Culinary gallery opens a keyboard-aware lightbox with previous, next, close, and backdrop-close behavior.
- Itinerary chips toggle independently; the CTA builds a WhatsApp message from days, traveller group, and selected interests.
- Contact form builds a WhatsApp message instead of submitting to a backend.
- Responsive rules observed at 900px and 600px; grids collapse and carousel cards become about 78vw.

## Adapted site

- Hero changes slide every 5.6 seconds; direct controls reset the visible slide. Motion stops for reduced-motion users.
- Skewed image panels float on long alternate animations and fade/slide when the active hero changes.
- Scroll reveals use IntersectionObserver once per section.
- Horizontal highlights use scroll snapping and accessible previous/next buttons.
- Planner chips are real buttons with pressed state. The final action opens a prefilled WhatsApp conversation; no form data is stored.
- Mobile navigation locks body scroll, closes on Escape or route selection, and reveals all links in a full-screen overlay.

