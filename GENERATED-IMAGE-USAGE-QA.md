# Generated Image Usage QA

Date: 2026-07-05

Scope: Visual inspection of the 16 generated WebP images in `public/assets/images/generated/` before using them as hero or campaign imagery.

Inspection method:
- Opened each generated image directly for visual review.
- Checked faces, eyes, skin texture, jewelry, hands, cultural styling, and visible AI artifacts.
- Created temporary close-up crops outside the repo for hand/jewelry areas on bridal, consultation, and kit-audit images.

## Critical Hero Blockers

| Image | Verdict | Hero Use | Reason |
| --- | --- | --- | --- |
| `public/assets/images/generated/kit-audit/kit-audit-luxury-01.webp` | REGENERATE | Do not use as hero | Close-up hand anatomy is visibly AI-soft/blended, with unclear finger structure and prop-label artifacts. Regenerate before hero placement. |

## Image Usage Verdicts

| Image | Verdict | Hero Use | Notes |
| --- | --- | --- | --- |
| `public/assets/images/generated/home/home-hero-luxury-01.webp` | PASS | Approved | Clean face/eyes, plausible skin, jewelry, and jasmine styling. Suitable for homepage hero. |
| `public/assets/images/generated/home/home-hero-luxury-02.webp` | PASS | Approved | Clean editorial portrait with no visible hand issues. Suitable as secondary campaign image or hero alternate. |
| `public/assets/images/generated/bridal-dubai/bridal-dubai-luxury-01.webp` | PASS | Approved | No visible hand defects; bridal styling reads Dubai luxury suite. |
| `public/assets/images/generated/bridal-dubai/bridal-dubai-luxury-02.webp` | PASS | Approved with crop care | Hands are slightly soft but not clearly malformed; use crop that keeps hands secondary. |
| `public/assets/images/generated/bridal-kerala/bridal-kerala-luxury-01.webp` | PASS | Approved with crop care | Kerala bridal cues are strong; hands/jewelry pass close-up review but should not be over-cropped larger than source quality. |
| `public/assets/images/generated/bridal-kerala/bridal-kerala-luxury-02.webp` | PASS | Approved with crop care | Cultural styling is acceptable for warm ivory saree/veil direction; hands are acceptable in close-up. |
| `public/assets/images/generated/online-consultation/online-consultation-luxury-01.webp` | PASS | Approved with crop care | Remote consultation scene is usable; tiny product/screen text should remain background detail, not a focal crop. |
| `public/assets/images/generated/online-consultation/online-consultation-luxury-02.webp` | PASS | Approved with crop care | Face, eyes, and brush hand pass close-up review; avoid cropping tightly on laptop screen text. |
| `public/assets/images/generated/editorial/editorial-beauty-closeup-01.webp` | PASS | Approved | Close-up face and eye detail are clean enough for editorial campaign use. |
| `public/assets/images/generated/editorial/editorial-beauty-closeup-02.webp` | PASS | Approved | Skin, eyes, and jewelry read cleanly at source scale. |
| `public/assets/images/generated/hair/hair-styling-luxury-01.webp` | PASS | Approved | Hair accessory and face profile are clean; suitable for hair styling feature. |
| `public/assets/images/generated/hair/hair-styling-luxury-02.webp` | PASS | Approved | Hair accessory, skin, and profile pass visual review. |
| `public/assets/images/generated/kit-audit/kit-audit-luxury-01.webp` | REGENERATE | Do not use as hero | Bad/unclear hands and fake-looking prop label details are visible enough to undermine premium hero use. |
| `public/assets/images/generated/kit-audit/kit-audit-luxury-02.webp` | PASS | Approved with crop care | Hand holding brush is acceptable; visible brand props should be treated as background, not emphasized. |
| `public/assets/images/generated/brand-detail/brand-detail-luxury-01.webp` | PASS | Approved | Group portrait has plausible skin, eyes, and styling; suitable for supporting brand/editorial section. |
| `public/assets/images/generated/brand-detail/brand-detail-luxury-02.webp` | PASS | Approved with crop care | Face is usable; keep product smear/label details secondary. |

## Usage Rules

- Do not use `kit-audit-luxury-01.webp` as a hero image.
- Regenerate `kit-audit-luxury-01.webp` before any above-the-fold or primary service-page placement.
- Generated images remain editorial/campaign visuals only and must not be added to the real portfolio.
- Re-check final crops after implementation, especially any layout that enlarges hands, jewelry, laptop screens, or product labels.
