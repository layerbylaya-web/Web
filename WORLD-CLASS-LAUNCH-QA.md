# LayeR launch status — 2026-09-24

## Production result

**The new site is live at https://layerbylaya.com.** Commit `5d04255` was pushed with the `layerbylaya-web` GitHub account to `layerbylaya-web/Web` and fast-forwarded to `main`. Vercel built that exact commit as a Ready production deployment for `layer-web / layer-by-laya-web` (`EhNo5EiubwzEdS2a2ofmTQ4z1dPf`). Its protected preview (`6pEhq6icSNUznADzZ3kp7VCDMAY1`) was checked first in the signed-in LayeR Chrome profile.

| Item | Verified result |
| --- | --- |
| Primary domain / SSL | `https://layerbylaya.com` serves HTTPS 200 from the new build. |
| www redirect | `https://www.layerbylaya.com/` returns 308 to the apex. |
| Canonical | All 18 public routes return 200 with the correct apex canonical URL. A nonexistent route returns 404. |
| Robots / sitemap | Live `robots.txt` excludes `/admin` and `/api/`; live `sitemap.xml` lists canonical apex URLs. |
| Structured data | JSON-LD parsed on 18 routes in the local production build; live rich-result eligibility has not been checked in Google. |
| Assets | A portfolio image and favicon return 200; signed-in Chrome showed no broken images on checked preview pages. |
| Lighthouse desktop | **Live domain:** 100 / 100 / 100 / 100 (Performance / Accessibility / Best Practices / SEO). |
| Lighthouse mobile | **Live domain:** 97 / 100 / 100 / 100 (same order). Lab results vary by device and network. |
| Portfolio | Signed-in preview: 12-image gallery, bridal filter, image viewer and Escape close worked. Images existed in the previous public repository; authorship, rights and category labels still await owner confirmation. |
| ObsidianUI | No components installed. The WebGL Art Gallery was evaluated and omitted to protect performance and accessibility. |
| Booking | WhatsApp links are live. The validated Resend API route is present, but delivery credentials and an inbox test are absent. The existing FormSubmit fallback remains temporary and its delivery is unverified; the UI says so. |
| Admin | Live `/admin` returns 404 with `noindex, nofollow`. The local image preview has no production publishing capability. |
| Founder content | No unverified portrait, awards, training or client claims were added. |
| Search Console | Domain ownership verified with the LayeR Google account. The submitted sitemap now shows Success and 17 discovered pages. Homepage and Dubai bridal indexing requests were accepted; Google has not indexed them yet. See `SEARCH-CONSOLE-LAUNCH.md`. |
| Local SEO | Guidance prepared without inventing an address, reviews or profile details. |

## Remaining owner and account tasks

1. Confirm that the 12 existing portfolio files and their category labels represent Laya's work and are cleared for public use.
2. Configure a verified Resend sender and booking recipient if form email is required, then submit a consented enquiry and confirm inbox receipt. WhatsApp is the reliable contact path until then.
3. Review Search Console as Google processes the new property, inspect the remaining core URLs after brand assets deploy, and confirm the Google Business Profile details. Neither indexing nor rankings are guaranteed.
4. Supply an approved founder portrait and verified biography details before those are published.

## Deferred polish

Original expertise-based articles, a persistent CMS, stronger lead abuse controls and verified portfolio tagging remain. The coming-soon journal is `noindex` and absent from the sitemap.
