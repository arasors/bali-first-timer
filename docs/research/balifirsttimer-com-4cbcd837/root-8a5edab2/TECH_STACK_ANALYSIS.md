# Technical stack analysis

## Source

The current public page is a single static HTML document with inline CSS and JavaScript. It uses Google-hosted Inter, Poppins, and Libre Baskerville, base64-embedded images, requestAnimationFrame carousel movement, and direct WhatsApp links. No backend or form endpoint is present.

## Rebuild

- Next.js 16 App Router, React 19, strict TypeScript.
- Tailwind CSS v4 plus small scoped CSS animations.
- `next/image` with local assets extracted from the source page.
- Local WOFF2 copies of Inter and Libre Baskerville.
- Lucide React plus a small custom WhatsApp icon.
- Static data-backed inner routes and metadata.
- Environment-backed public business details with safe fallbacks.
- No database, authentication, payment, or server-side form submission.

