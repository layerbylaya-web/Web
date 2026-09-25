# LayeR brand asset QA — 2026-09-25

## Source and design

- Social card: `public/social/layerbylaya-social-preview-v1.jpg`, 1200 × 630, 81 KB.
- Campaign portrait: existing `public/assets/images/generated/home/home-hero-luxury-01.webp`, already used on the LayeR site. It is campaign imagery, not a founder portrait or a portfolio claim.
- Official wordmark: existing `public/assets/brand/layer-logo.png`, cropped only to its transparent content bounds. Letterforms and gold finish are unchanged.
- Google Organization logo: `public/brand/layerbylaya-logo-google.png`, 512 × 512, 58 KB. The same square art is used for `src/app/icon.png` (512 × 512), `src/app/apple-icon.png` (180 × 180), and the 16/32/48 px `src/app/favicon.ico`.

## Visual checks

The social card was inspected at 1200 × 630, 600 × 315 and 300 × 157. The full wordmark, two-line headline and portrait remain visible at the smallest size. The small geography and service lines become secondary at 300 × 157, as intended. The composition keeps the model's face clear of text and avoids edge clipping. The square logo was inspected at 512 × 512 and 48 × 48; it remains recognizable on a light background. No fake portrait of Laya was used.

## Local technical checks

The local production server returned 200 for the social card, Organization logo, favicon, icon and Apple icon. The rendered homepage, About and portfolio HTML reference the 1200 × 630 social card with Open Graph width, height and alt text; Twitter metadata references the same image. Organization JSON-LD uses the stable square logo URL.

## Preview and production checks

The Vercel preview for commit `4b5d365` was Ready in `layer-web / layer-by-laya-web`. Its homepage exposed the expected Open Graph and Twitter tags, and the social image was opened and visually checked there. The About, portfolio, Dubai bridal, Kerala bridal and contact pages loaded with their apex canonical URLs.

Production deployment `7tZ9VJnY43kdyveCWwg8hFCuQk71` for the same commit is Ready. On `https://layerbylaya.com`, the favicon, 512 px icon, Apple icon, social card and Organization logo each return HTTP 200 with the expected image type. The live homepage HTML exposes the expected 1200 × 630 Open Graph image, title, description, alt text, Twitter large-image card and canonical apex URL. Social platform cache refresh and Google's search-result favicon change are asynchronous and cannot be claimed yet.
