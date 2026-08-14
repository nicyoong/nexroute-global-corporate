# NexRoute Global — Corporate Website

A production-ready Next.js 14 corporate website for NexRoute Global, a B2B supply chain and logistics company.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion (scroll-triggered)
- **Linting:** ESLint 8 with Next.js config
- **Fonts:** Inter (body) + Sora (display) via next/font

## Design System

| Token | Value |
|-------|-------|
| Primary | `#0B1F3A` (deep navy) |
| Accent | `#F97316` (signal orange — CTAs only) |
| Surface | `#F8FAFC` (off-white background) |
| Surface Alt | `#F1F5F9` |
| Body Font | Inter |
| Display Font | Sora (400–800) |

Custom shadows: `soft`, `medium`, `large`, `accent`.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — 9 sections: Hero, Logos, Stats, Services, Network, How It Works, Industries, Testimonials, CTA |
| `/track` | Shipment tracking widget with validation, skeleton, and animated timeline |
| `/contact` | RFQ form with validation + 3 office addresses sidebar |
| `/services` | Services index listing all 6 services |
| `/services/[slug]` | Service detail pages (air-ocean-freight, warehousing-fulfillment, customs-brokerage, last-mile-delivery, cold-chain, consulting) |
| `/network` | Global network with 4 regional hubs and throughput stats |
| `/industries` | Industry verticals (Manufacturing, Healthcare, Retail & E-commerce, Automotive) |
| `/insights` | Blog/articles listing with categories |
| `/about` | Company story, leadership team, values, and CTA |

## Components

### UI (reusable)
- `Button` — primary / secondary / ghost variants, 3 sizes, icon support
- `Container` — max-w-7xl responsive wrapper
- `SectionHeading` — eyebrow + title + subtitle with alignment
- `Badge` — default / accent / success / outline
- `Card` — div / anchor / button with hover shadow

### Layout
- `TopBar` — phone, email, ISO cert, 24/7 operations
- `Navbar` — sticky, desktop links + CTA buttons, mobile slide-in drawer with scroll lock
- `Footer` — 4-column, newsletter, certifications, dynamic copyright

### Sections
- `Hero` — split layout, animated SVG shipping routes with pulsing hubs and moving dots
- `ClientLogos` — infinite scroll marquee (requestAnimationFrame)
- `Stats` — 4 metrics with staggered fade-in
- `Services` — 6 cards with icons, descriptions, "Learn more" links
- `GlobalNetwork` — SVG world map with pulsing hub markers + 4 regional hub cards
- `HowItWorks` — 4-step timeline on navy background
- `Industries` — 4 sector cards with icons
- `Testimonials` — 3 quote cards with star ratings
- `CTABand` — navy CTA with dual buttons
- `TrackingWidget` — input validation (NX-XXXXXX), loading skeleton, animated progress bar, 5-step timeline

## Accessibility

- Skip-to-content link
- Focus-visible rings (accent color, ring-offset)
- `aria-label` on all interactive elements
- `aria-expanded`, `aria-controls` on mobile menu
- `aria-invalid` / `aria-describedby` on form fields
- `prefers-reduced-motion` respected (all animations disabled)
- Semantic HTML (`<main>`, `<nav>`, `<section>`, `<article>`, `<address>`, `<blockquote>`, `<time>`)
- JSON-LD Organization schema in `<head>`

## SEO

- Metadata template in `layout.tsx` (title, description, Open Graph, Twitter cards)
- `metadataBase` set for absolute URLs
- `robots.txt` and `sitemap.xml` ready for deployment
- Canonical URL set
- Theme color meta tag

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## Architecture

```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout (fonts, SEO, skip-link, schema)
│   ├── page.tsx          # Homepage
│   ├── track/            # Tracking page
│   ├── contact/          # Contact / RFQ page
│   ├── services/         # Services index + [slug] detail
│   ├── network/          # Global network page
│   ├── industries/       # Industries page
│   ├── insights/         # Blog/articles page
│   ├── about/            # About page
│   └── globals.css       # Tailwind v4 + custom styles
├── components/
│   ├── ui/               # Reusable primitives
│   ├── layout/           # TopBar, Navbar, Footer
│   └── sections/         # Page sections
└── data/
    └── services.ts       # Service data (titles, descriptions, capabilities)
```

## Production Readiness Checklist

- [x] All pages have semantic HTML
- [x] TypeScript strict mode — no `any` types
- [x] Responsive at sm/md/lg/xl breakpoints
- [x] Focus-visible states on all interactive elements
- [x] prefers-reduced-motion respected
- [x] JSON-LD Organization schema
- [x] Open Graph + Twitter card metadata
- [x] No console errors (verified in build)
- [x] All copy is professional B2B logistics (zero lorem ipsum)
- [x] Build passes: 18 static routes generated

## License

Proprietary — NexRoute Global Inc.
