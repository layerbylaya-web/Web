# Domain launch QA — 2026-09-24

`layerbylaya.com` is attached to the correct Vercel project, `layer-web / layer-by-laya-web`, and serves the new production deployment of commit `5d04255`. The Vercel deployment is Ready. The apex returns HTTPS 200; `www.layerbylaya.com` returns a permanent 308 redirect to the apex. Both hostnames have working TLS.

Live verification found apex canonical URLs on all 18 public routes, a 404 on an unknown route, and a 404 with `noindex, nofollow` on `/admin`. `robots.txt` allows public pages and excludes `/admin` and `/api/`. `sitemap.xml` lists canonical apex URLs. The checked portfolio asset and favicon return 200.

The build was pushed through the `layerbylaya-web` GitHub account to `https://github.com/layerbylaya-web/Web.git`. No Cinema Machina project, Vercel team or credential was used for the successful deployment.
