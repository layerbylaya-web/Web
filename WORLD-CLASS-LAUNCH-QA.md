# LayeR launch status — 2026-09-24

## Current state

**The custom domain is live, but the new launch commit is not deployed.** `https://layerbylaya.com` returns HTTPS 200 and `https://www.layerbylaya.com` returns a 308 redirect to the apex. The live HTML and sitemap are still from the previous production build.

| Item | Status |
| --- | --- |
| Launch commit | `3a489b3` on local `launch/layerbylaya-2026-09-24` |
| Git remote | `https://github.com/layerbylaya-web/Web.git` |
| Git push | **Blocked**: remote denied the machine's `cinemamachinaae` identity (403). No alternate Cinema Machina credential was used. |
| Vercel team/project | `layer-web / layer-by-laya-web`, verified in signed-in Vercel dashboard |
| Preview of launch commit | Not created; Git push and Vercel CLI auth are blocked |
| Production deployment of launch commit | Not performed |
| Primary domain / SSL | Apex attached to correct project; HTTPS works |
| www redirect | Valid 308 to apex, verified by dashboard and `curl` |
| Canonical / robots / sitemap | New local build verified. Public domain still serves previous versions. |
| Structured data | Local JSON-LD parses on 18 public routes; unsupported price/language/city data removed. Rich-result validation on deployed URLs remains. |
| Lighthouse desktop | Local 100 / 100 / 100 / 100 (P/A/BP/SEO) |
| Lighthouse mobile | Local 94 / 100 / 100 / 100 (P/A/BP/SEO) |
| Portfolio | Semantic real-asset gallery with filters, dialog, keyboard controls and swipe. Asset provenance awaits owner confirmation. |
| ObsidianUI | None installed; WebGL Art Gallery was evaluated and omitted to protect performance and accessibility. |
| Booking | Server validation + Resend path implemented. No credentials or inbox delivery test; FormSubmit fallback remains temporary. |
| Admin | Local image preview only; production route returns 404 until persistent storage and session auth are built. |
| Founder content | No verified founder portrait used; workspace image fills the reserved slot. Awards, training and client claims were not invented. |
| Search Console | Not authenticated or submitted. See `SEARCH-CONSOLE-LAUNCH.md`. |
| Local SEO | Guidance prepared; no business address, reviews or profile details invented. |

## Remaining launch gates

1. Authenticate GitHub as an account with write access to `layerbylaya-web/Web` and Vercel as the `layer-web` team, without using Cinema Machina credentials.
2. Confirm that the 12 portfolio files are Laya's real work and cleared for publication, including category labels.
3. Push the launch branch, inspect its Vercel preview, then deploy the verified commit to production. Verify live canonical, robots, sitemap, images, booking and `/admin` on that deployment.
4. Configure a verified Resend sender and recipient if form email is required; submit a consented real enquiry and confirm receipt. WhatsApp is the working alternative until then.
5. Verify the founder's approved portrait and any biographical claims before adding them. Complete Search Console and Business Profile setup with verified account access.

## Deferred polish

Original expertise-based articles, a persistent CMS, stronger lead abuse controls, verified portfolio tagging, and live-domain Lighthouse testing remain. The unused coming-soon journal is `noindex` and absent from the sitemap.
