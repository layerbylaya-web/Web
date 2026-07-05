# SEO Design QA

Date: 2026-07-05

## SEO Requirements Checked

- Every redesigned route has one visible H1.
- Pages use unique metadata through shared `pageMetadata` helpers.
- Canonical URLs are generated per route.
- Open Graph images use local generated `.webp` assets.
- Service pages include FAQ content and JSON-LD FAQ schema.
- Service pages include service schema.
- Internal link sections connect services, portfolio, about, contact, FAQ, and related service pages.
- Copy keeps natural UAE, Dubai, Kerala, bridal, online consultation, makeup kit audit, hair styling, editorial, and commercial makeup keywords.

## H1 Route Audit

| Route | H1 |
| --- | --- |
| `/` | `Luxury makeup,softly layered.` |
| `/services` | `Makeup and hair services for UAE, Kerala, and online` |
| `/bridal-makeup-dubai` | `Bridal makeup artist Dubai` |
| `/bridal-makeup-kerala` | `Bridal makeup Kerala` |
| `/party-makeup-and-hair` | `Party makeup and hair` |
| `/fashion-editorial-makeup` | `Fashion and editorial makeup` |
| `/commercial-makeup-artist-dubai` | `Commercial makeup artist Dubai` |
| `/online-makeup-consultation` | `Online makeup consultation` |
| `/daily-makeup-consultation` | `Daily makeup consultation` |
| `/personal-makeup-kit-audit` | `Makeup kit audit online` |
| `/learn-your-own-makeup-online` | `Learn makeup online one to one` |
| `/portfolio` | `Real LayeR portfolio` |
| `/about-laya` | `About LayeR by Laya` |
| `/contact` | `Book LayeR by Laya` |
| `/faq` | `LayeR by Laya FAQ` |
| `/blog` | `Beauty journal` |

## Schema Coverage

- Organization schema remains in `src/components/JsonLd.tsx`.
- Service pages emit service schema.
- FAQ blocks emit FAQPage schema.
- Canonical metadata is centralized in `src/lib/site.ts`.

## Route QA

Local route audit covered 16 routes:

- Pass count: 16.
- Exactly one H1 on each route.
- No broken image references.
- No generated images in portfolio.

## Notes

- The preview is SSO-protected, so local route QA is the stronger evidence for anonymous render checks.
- Metadata and schema should be rechecked in Search Console after any future production deployment.
