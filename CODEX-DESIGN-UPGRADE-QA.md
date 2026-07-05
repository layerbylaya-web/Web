# Codex Design Upgrade QA

Date: 2026-07-05

Preview: https://layer-by-laya-dt57cd4fi-layer-web.vercel.app

## Scope Completed

- Redesigned the homepage first fold as a premium UAE beauty hero with visible logo, readable H1, primary generated model/beauty image, visible WhatsApp CTA, soft blush/champagne gradient background, and no generic dark overlay.
- Rebuilt the service, about, contact, FAQ, blog, and portfolio pages with image-led luxury layouts, glass panels, rose-gold rules, editorial image cards, and softer motion.
- Kept generated visuals as campaign/editorial/service imagery only.
- Kept the real portfolio limited to real LayeR portfolio exports.
- Used `next/image` for generated and portfolio imagery.

## Pages Changed

- `/`
- `/services`
- `/bridal-makeup-dubai`
- `/bridal-makeup-kerala`
- `/online-makeup-consultation`
- `/daily-makeup-consultation`
- `/personal-makeup-kit-audit`
- `/party-makeup-and-hair`
- `/fashion-editorial-makeup`
- `/commercial-makeup-artist-dubai`
- `/learn-your-own-makeup-online`
- `/about-laya`
- `/portfolio`
- `/contact`
- `/faq`
- `/blog`

## Component / System Changes

- Added `src/lib/site.ts` for shared generated image paths, metadata, FAQ, schema, WhatsApp, and internal-link helpers.
- Added `src/components/PremiumSections.tsx` for editorial image blocks, section intros, services, FAQs, internal links, and campaign-image notes.
- Updated `src/components/Hero.tsx` for split luxury heroes, visible CTAs, supporting campaign images, and no dark overlay.
- Updated `src/components/Header.tsx` for glass navigation, visible logo, desktop WhatsApp CTA, and mobile sticky WhatsApp CTA.
- Updated `src/components/AnimationWrappers.tsx` and `src/app/globals.css` for reveal, slow breath-scale, ambient gradient, gold rule draw, staggered service reveal, portfolio hover zoom, and 7-second WhatsApp pulse.
- Updated `src/components/PortfolioGallery.tsx` to preserve real-only portfolio photos.

## First-Fold QA

Desktop first fold verified locally at `http://localhost:3010/` with viewport `1440x900`:

- Logo visible and fully visible.
- H1 visible and fully visible: `Luxury makeup,softly layered.`
- Primary hero image uses `/assets/images/generated/home/home-hero-luxury-01.webp`.
- Header WhatsApp CTA and hero WhatsApp CTA visible and fully visible.
- Luxury gradient background present.
- No dark overlay detected.
- Console logs: none.

Mobile first fold verified locally at viewport `390x844`:

- Logo visible.
- H1 readable.
- Primary image visible.
- Sticky WhatsApp CTA visible.
- Soft gradient background present.
- No generic dark overlay.
- Console logs: none.

## Visual Contact Sheets

- Desktop: `qa-artifacts/design-upgrade/contact-sheet-desktop.jpg`
- Mobile: `qa-artifacts/design-upgrade/contact-sheet-mobile.jpg`

The contact sheets cover all 16 redesigned routes across desktop and mobile.

## Commands Run

```bash
npm run lint
npm run build
npm run start -- -p 3010
vercel deploy --yes
vercel ls layer-by-laya-web
curl -I https://layer-by-laya-dt57cd4fi-layer-web.vercel.app
```

## Results

- `npm run lint`: passed.
- `npm run build`: passed; 21 static pages generated.
- Local start: passed on `http://localhost:3010`.
- Route QA: 16 routes passed with exactly one visible H1 each, no broken images, and no generated images in portfolio.
- Vercel: latest deployment is `Ready`, `Preview`, project `layer-web/layer-by-laya-web`.
- Preview HTTP check returns Vercel team SSO protection (`302` to `vercel.com/sso-api`), not a build failure.

## Remaining Design Issues

- Preview is protected by Vercel SSO, so public anonymous preview smoke testing is blocked.
- Full Lighthouse was not run against the protected preview; local build and route/image QA passed.
- ImageMagick emitted contact-sheet title font warnings, but the contact-sheet images were created and visually inspected.
