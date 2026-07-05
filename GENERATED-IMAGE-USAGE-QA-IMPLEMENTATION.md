# Generated Image Usage QA Implementation

Date: 2026-07-05

Source files reviewed:

- `CODEX-DESIGN-UPGRADE-PROMPT.md`
- `AI-IMAGE-INTEGRATION-MAP.md`
- `GENERATED-IMAGE-QA.md`
- `GENERATED-IMAGE-USAGE-QA.md`

Note: `AI-IMAGE-INTEGRATION-MAP.md` contains older `.jpg` placeholder names, while `GENERATED-IMAGE-QA.md`, `GENERATED-IMAGE-USAGE-QA.md`, and the implementation use the generated `.webp` assets.

## Critical Blocker

`public/assets/images/generated/kit-audit/kit-audit-luxury-01.webp` remains blocked.

Reason from usage QA: visibly AI-soft/blended hand anatomy and fake-looking prop-label details.

Implementation status:

- Not used in `src`.
- Not used in any active page/component code.
- Not used as hero.
- Not used in portfolio.

Verification command:

```bash
rg -n "kit-audit-luxury-01|/public/assets|ai-editorial" src
```

Result: no matches.

## Generated Images Used

| Image | Usage |
| --- | --- |
| `/assets/images/generated/home/home-hero-luxury-01.webp` | Homepage hero, default OG/schema image |
| `/assets/images/generated/home/home-hero-luxury-02.webp` | Homepage secondary campaign image, services metadata |
| `/assets/images/generated/editorial/editorial-beauty-closeup-01.webp` | Homepage LayeR Method, fashion/editorial hero and details, commercial support |
| `/assets/images/generated/editorial/editorial-beauty-closeup-02.webp` | Daily makeup hero/detail, fashion/editorial support, party support |
| `/assets/images/generated/hair/hair-styling-luxury-01.webp` | Homepage hair feature, party/hair hero, services card |
| `/assets/images/generated/hair/hair-styling-luxury-02.webp` | Party/hair support, fashion/editorial and learn-makeup support |
| `/assets/images/generated/brand-detail/brand-detail-luxury-01.webp` | Services/commercial/contact brand-detail sections |
| `/assets/images/generated/brand-detail/brand-detail-luxury-02.webp` | Homepage/about/fashion brand mood visuals; not presented as Laya |
| `/assets/images/generated/bridal-dubai/bridal-dubai-luxury-01.webp` | Bridal Dubai hero, homepage/services bridal Dubai features |
| `/assets/images/generated/bridal-dubai/bridal-dubai-luxury-02.webp` | Bridal Dubai secondary/homepage support with crop care |
| `/assets/images/generated/bridal-kerala/bridal-kerala-luxury-01.webp` | Bridal Kerala hero, homepage/services bridal Kerala features |
| `/assets/images/generated/bridal-kerala/bridal-kerala-luxury-02.webp` | Bridal Kerala secondary and online support with crop care |
| `/assets/images/generated/online-consultation/online-consultation-luxury-01.webp` | Online consultation hero, homepage/services online features |
| `/assets/images/generated/online-consultation/online-consultation-luxury-02.webp` | Online consultation secondary, learn makeup hero |
| `/assets/images/generated/kit-audit/kit-audit-luxury-02.webp` | Kit audit hero/secondary and daily/online service product support only |

## Crop-Care Rules Applied

- Kit audit uses only `kit-audit-luxury-02.webp`.
- Kit audit image is not cropped tightly on hand, brush, product labels, or props.
- Bridal Dubai secondary keeps hands secondary.
- Bridal Kerala images are not enlarged into tight hand/jewelry crops.
- Online consultation screen and tiny product text remain background details.
- Brand-detail visuals are treated as campaign mood, not as Laya portraits.

## Portfolio Authenticity

The portfolio remains real-only:

- `src/components/PortfolioGallery.tsx` references `/assets/images/portfolio/portfolio-XX.jpg`.
- `/portfolio` includes a note that campaign mood visuals across service pages are editorial concepts and real work is shown in the portfolio.
- Active portfolio scan found no generated image references.

Verification command:

```bash
rg -n "assets/images/generated|generated/" src/app/portfolio src/components/PortfolioGallery.tsx
```

Result: no matches.
