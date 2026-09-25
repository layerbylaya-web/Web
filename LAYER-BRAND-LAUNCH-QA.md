# LayeR brand launch QA — 2026-09-25

| Gate | Verified status |
| --- | --- |
| GitHub auth account | Dedicated `GH_CONFIG_DIR=~/.config/gh-layerbylaya` authenticated as `layerbylaya-web`; repository-only Git credential helper. No global auth switch was made for this brand update. |
| Chrome profile | `Layer`, signed into `layerbylaya@gmail.com` for Vercel and Google Search Console. The LayeR GitHub repository was checked read-only in this profile; Git push used the dedicated CLI context. |
| Git branch | `launch/layerbylaya-2026-09-24`, then fast-forwarded to `main` without force push. |
| Git commit | `4b5d3659be728b63fc2f6119b2c3c3dfca02e525` for the brand assets and metadata. |
| GitHub push | Branch and `main` both accepted by `https://github.com/layerbylaya-web/Web.git`; remote `main` resolves to the same commit. |
| Vercel team / project | `layer-web / layer-by-laya-web`; `.vercel/project.json` also identifies `layer-by-laya-web`. Preview and production deployments were Ready. |
| Production domain | `https://layerbylaya.com` serves the approved commit through production deployment `7tZ9VJnY43kdyveCWwg8hFCuQk71`. |
| Social preview image | `public/social/layerbylaya-social-preview-v1.jpg`, 1200 × 630, 82,503 bytes. Source and crop checks are in `SOCIAL-BRAND-ASSET-QA.md`. |
| Open Graph metadata | Live homepage has `og:title` = `LayeR by Laya | Premium Makeup & Hair Styling`, `og:site_name` = `LayeR by Laya`, apex `og:url`, branded `og:image`, width 1200, height 630 and descriptive alt. |
| Twitter metadata | Live homepage has `summary_large_image`, matching brand title and the same branded image URL. |
| Favicons | `src/app/favicon.ico` (16/32/48), `src/app/icon.png` (512) and `src/app/apple-icon.png` (180). Each production URL returns 200. Art derives from the existing official LayeR wordmark. |
| Organization logo asset | `public/brand/layerbylaya-logo-google.png`, 512 × 512. Production URL returns 200. |
| Google schema logo URL | Organization JSON-LD uses `https://layerbylaya.com/brand/layerbylaya-logo-google.png`; WebSite and Organization use `LayeR by Laya` with `LayeR` as alternate name. |
| Search Console | `layerbylaya.com` Domain property verified in the LayeR Google account through Vercel DNS TXT. Indexing and search appearance remain subject to Google crawling. |
| Sitemap | `https://layerbylaya.com/sitemap.xml` returns 200; submitted Search Console sitemap status is **Success**, with 17 discovered pages. |
| Homepage indexing request | After deployment, Google URL Inspection reported the homepage **indexed** and served over HTTPS. A recrawl request for the new brand assets was accepted into Google's priority crawl queue. |
| Remaining blockers | Search platforms may take days or weeks to refresh favicon and share previews. About, portfolio, Dubai bridal and Kerala bridal are queued but not confirmed indexed. Portfolio image rights/category labels and founder portrait are unconfirmed. Booking email credentials and real inbox delivery remain unverified; WhatsApp is available. |

## Validation

`npm run lint`, `npx tsc --noEmit`, and `npm run build` passed. The local production HTML and the Vercel preview exposed the expected metadata. The preview image was opened visually. Production returned 200 for the favicon, icon, Apple icon, social card, logo, robots and sitemap. Preview About, portfolio, Dubai bridal, Kerala bridal and contact pages loaded with apex canonical URLs. The production homepage HTML contained the expected Open Graph, Twitter, canonical and Organization logo values.

Search Console reports the homepage indexed. About, portfolio, Dubai bridal and Kerala bridal URL indexing requests were accepted. A homepage recrawl request was accepted after the brand deployment. See `SEARCH-CONSOLE-LAUNCH.md` for URL inspection details. Rich result display, social crawler caches and final search-result favicon display remain pending.
