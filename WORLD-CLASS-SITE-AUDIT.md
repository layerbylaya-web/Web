# Site audit — 2026-09-24

Scope: all 18 public routes, the local admin preview, images, metadata, booking, security, and the production build. Priority reflects launch risk, not a claim about ranking.

| Priority | Finding | Resolution / gate |
| --- | --- | --- |
| P0 | `layerbylaya.com` was unbound and HTTPS failed. | Connected to `layer-web/layer-by-laya-web`. Apex now returns 200 over HTTPS; `www` returns 308 to apex. |
| P0 | Installed Next.js 16.2.10 had critical/high production advisories. | Upgraded Next.js and matching ESLint config to 16.3.6. `npm audit --omit=dev` now reports zero vulnerabilities. |
| P1 | Form posted lead data directly to FormSubmit and treated HTTP 2xx as delivery. | Added validated server route with Resend when configured; FormSubmit remains an explicitly unverified fallback. Real inbox delivery still requires a test and mail credentials. |
| P1 | Portfolio was mouse-only; lightbox lacked keyboard and focus handling. | Gallery now has semantic buttons, filters, dialog, focus return, arrows, Escape, and swipe. |
| P1 | Admin was a local preview with HTTP Basic auth and no persistence. | Kept local preview, disabled `/admin` on production, documented CMS requirements. It is not a public editor. |
| P1 | Thin coming-soon blog was indexable; schema made unsupported price/language/city claims. | Blog is `noindex` and absent from sitemap; schema uses factual Organization/service data. |
| P2 | Mobile contact page led with a large image. | Booking heading and contact actions now appear first on mobile. |
| P2 | Focus visibility and contrast failures. | Added global focus ring, darkened small gold text, and corrected footer text. |
| P2 | Dev-only audit advisories remain. | Production audit is clean; review dev dependency advisories during routine maintenance. |
| P3 | Portfolio category provenance and real-work attribution are not independently verified. | Confirm image rights, creator attribution, and category tags before public promotion. |

ObsidianUI Art Gallery was evaluated against its current docs. It requires Three.js/WebGL and would add weight to an already functional editorial gallery. No ObsidianUI package or component was added.
