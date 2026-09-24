# Local Lighthouse QA — 2026-09-24

Run against the local **production** build (`next start`, with `VERCEL_ENV=production`) after the final code pass. These are local lab results, not live-domain scores.

| Profile | Performance | Accessibility | Best Practices | SEO | LCP | CLS | TBT |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Desktop | 100 | 100 | 100 | 100 | 0.7 s | 0 | 0 ms |
| Mobile | 94 | 100 | 100 | 100 | 3.1 s | 0 | 20 ms |

Raw JSON reports and screenshots are in ignored local `qa-artifacts/world-class/`. Seven key routes were captured at 1440×1000 and 390×844. Browser checks found one H1, a canonical apex URL, no horizontal overflow, no JavaScript page errors, and no missing images after loading lazy media. The portfolio dialog opened, advanced with Arrow Right, closed with Escape, and returned focus to its trigger. Production-mode `/admin` returned 404. A valid booking payload returned the expected 503 fallback response because mail credentials are absent; no live message was sent.

Lighthouse scores can vary by device, network and deployment. Repeat on the deployed preview and live domain before treating these as production results.
