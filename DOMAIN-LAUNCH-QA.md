# Domain launch QA — 2026-09-24

Vercel dashboard (signed-in LayeR browser session) shows `layerbylaya.com` attached to `layer-web / layer-by-laya-web` as a valid Production domain. It also shows `www.layerbylaya.com` as a valid 308 redirect to `layerbylaya.com`. Public checks confirm apex HTTPS 200 and `www` HTTPS 308 to the apex. Both hostnames have working TLS. Nameservers are Vercel DNS.

The custom domain currently serves the **previous production deployment**. The new local commit `3a489b3` contains the updated site but has not been pushed or deployed: GitHub rejected the push because the machine supplied a `cinemamachinaae` credential to the LayeR repository. Vercel CLI authentication is also invalid. Do not call the new site live until a correct LayeR GitHub/Vercel authorization is available and a preview plus production deployment have been checked.

Live `robots.txt` and `sitemap.xml` respond, but still reflect the previous build. The new local build emits canonical apex URLs, an updated sitemap, and `robots.txt` that excludes `/admin` and `/api/`.
