# Local Lighthouse QA — 2026-09-24

Run against the local **production** build (`next start`, with `VERCEL_ENV=production`) after the final code pass. These are local lab results, not live-domain scores.

| Profile | Performance | Accessibility | Best Practices | SEO | LCP | CLS | TBT |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Desktop | 100 | 100 | 100 | 100 | 0.7 s | 0 | 0 ms |
| Mobile | 94 | 100 | 100 | 100 | 3.1 s | 0 | 20 ms |

Raw JSON reports and screenshots are in ignored local `qa-artifacts/world-class/`. Seven key routes were captured at 1440×1000 and 390×844. Browser checks found one H1, a canonical apex URL, no horizontal overflow, no JavaScript page errors, and no missing images after loading lazy media. The portfolio dialog opened, advanced with Arrow Right, closed with Escape, and returned focus to its trigger. Production-mode `/admin` returned 404. A valid booking payload returned the expected 503 fallback response because mail credentials are absent; no live message was sent.

The same build was audited again on `https://layerbylaya.com/` after production deployment. Live desktop scored **100 / 100 / 100 / 100** with 0.7 s LCP, 0 CLS and 0 ms TBT. Live mobile scored **97 / 100 / 100 / 100** with 2.7 s LCP, 0 CLS and 10 ms TBT. Scores can vary by device and network. The raw live JSON reports are in `/tmp/layer-live-desktop.json` and `/tmp/layer-live-mobile.json` on this machine.
