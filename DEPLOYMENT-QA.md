# Deployment QA

Date: 2026-07-05

## Deployment Target

- Team: `layer-web`
- Project: `layer-by-laya-web`
- Environment: Preview
- Preview URL: https://layer-by-laya-ni5iko83m-layer-web.vercel.app
- Deployment ID: `dpl_C7NeAo3BKtz3BFZh3Jgdyom7RGEC`
- Ready state: `READY`

## Commands Run

```bash
npm run lint
npm run build
vercel deploy
curl -I https://layer-by-laya-ni5iko83m-layer-web.vercel.app
```

## Vercel Result

`vercel deploy` completed successfully:

- URL: `https://layer-by-laya-ni5iko83m-layer-web.vercel.app`
- Inspector: `https://vercel.com/layer-web/layer-by-laya-web/C7NeAo3BKtz3BFZh3Jgdyom7RGEC`
- Ready state: `READY`

## Preview Access Check

`curl -I` returned:

- HTTP status: `302`
- Location: `https://vercel.com/sso-api?...`
- `x-robots-tag: noindex`

Interpretation: the preview is protected by Vercel team SSO. This is an access gate, not a failed deployment.

## Guardrails Confirmed

- Did not run `vercel --prod`.
- Did not deploy production.
- Did not connect or modify the final domain.
- Did not touch Cinema Machina.

## Active Source Guardrails

```bash
rg -n "kit-audit-luxury-01" src
rg -n "assets/images/generated|generated/" src/app/portfolio src/components/PortfolioGallery.tsx
```

Results:

- `kit-audit-luxury-01.webp`: no active source references.
- Generated images in portfolio code: no matches.
