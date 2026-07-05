# SEO Lighthouse QA

Date: 2026-07-05

Preview: https://layer-by-laya-ni5iko83m-layer-web.vercel.app

## Commands

```bash
npm run lint
npm run build
npx lighthouse http://localhost:3010 --only-categories=performance,accessibility,best-practices,seo --output=json --output-path=/tmp/layer-lighthouse.json --chrome-flags="--headless --no-sandbox"
```

## Results

- `npm run lint`: passed.
- `npm run build`: passed.
- Lighthouse local production build:
  - Performance: 91
  - Accessibility: 96
  - Best Practices: 100
  - SEO: 100

## Route SEO QA

Automated route sweep:

- Public routes checked: 16
- Pass count: 16
- Exactly one H1 per route: yes
- Removed public AI-disclaimer text absent: yes
- No `/admin` public links: yes
- Portfolio uses no generated image references: yes

## Admin Indexing QA

- `/admin` metadata: `noindex, nofollow`
- `robots.txt`: disallows `/admin` and `/admin/`
- `sitemap.xml`: no `/admin` match

## Image / Performance Notes

- Above-the-fold images use `next/image`.
- Generated assets use local `.webp`.
- No remote image URLs were added.
- No `/public` paths were added in active source code.
- Admin code is isolated to the `/admin` route and is not imported by public pages.
