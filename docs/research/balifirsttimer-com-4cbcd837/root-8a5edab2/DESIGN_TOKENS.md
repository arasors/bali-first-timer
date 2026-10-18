# Design tokens

## Source observations

- Source body: Inter, 16px, 26.4px line height.
- Source headings: Libre Baskerville 700; the observed hero heading is 37.924px / 45.5088px at a 998px viewport.
- Source navy: `#0A1729`; supporting navy: `#10233F`.
- Source surfaces: `#FFFFFF`, `#F5F6F8`, border `#EBEDF0`.
- Source shell max width: 1160px with 28px gutters.
- Source header: 97px tall, sticky, white, z-index 50.
- Source section padding: 100px vertical on desktop.

## Adapted brand system

The Flora composition and motion language remains, but the user-supplied logo drives a tropical palette.

- Ink / night: `#071B24`
- Deep ocean: `#073747`
- Lagoon: `#09B8C8`
- Sky: `#4DDBF2`
- Palm: `#148451`
- Acid leaf: `#B8E63D`
- Sand: `#F4F0E6`
- Cloud: `#FBFDFB`
- Muted copy: `#5D6B69`
- Border: `#D9E5E1`
- WhatsApp: `#25D366`

Typography uses local Inter for navigation/body and local Libre Baskerville for editorial display headings. Headings use tight negative tracking, while labels use uppercase Inter with 0.16–0.22em tracking.

Motion uses `cubic-bezier(0.22, 1, 0.36, 1)`, 300–900ms transitions, 5.6s hero slides, and slower 12–18s ambient loops. Reduced-motion users receive static content.

