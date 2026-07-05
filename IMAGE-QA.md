# Image QA Report

## Audit of Visual Assets

| File Path | Used On | Source | Real/Placeholder | Has Face | Safe Crop | Needs Replace? |
|-----------|---------|--------|------------------|----------|-----------|----------------|
| `/assets/brand/layer-logo.png` | `Header.tsx` | `Logo` folder | Real | No | Yes | No |
| `/assets/images/hero/home-hero.jpg` | `/` | Portfolio | Real | Yes | Yes (center_20%) | No |
| `/assets/images/bridal/bridal-kerala-hero.jpg` | `/bridal-makeup-kerala`, `/` | Portfolio | Real | Yes | Yes | No |
| `/assets/images/editorial/beauty-closeup.jpg` | `/`, `/fashion...` | Portfolio | Real | Yes | Yes | No |
| `/assets/images/hero/home-method-detail.jpg` | `/` | Portfolio | Real | No (Detail) | Yes | No |
| `/assets/images/online/online-consultation-hero.jpg` | `/online-makeup-consultation` | `Photo Exports/Gugu/IMG_3075.jpg` | Real | Yes | Yes | No |
| `/assets/images/online/daily-routine.jpg` | `/online-makeup-consultation` | `Photo Exports/Gugu/IMG_3080.jpg` | Real | Yes/Detail | Yes | No |
| `/assets/images/online/kit-audit.jpg` | `/online-makeup-consultation` | `Photo Exports/Gugu/IMG_4291.jpg` | Real | Yes/Detail | Yes | No |
| `/assets/images/online/learn-makeup.jpg` | `/online-makeup-consultation` | `1080 posts/brandstory.jpg` | Real | Yes | Yes | No |
| `/assets/images/about/laya-portrait.jpg` | `/about-laya` | `1080 posts/p1.jpg` | Real (Detail) | No (Detail) | Yes | **YES** (Waiting for real founder photo) |
| `/assets/images/portfolio/portfolio-*.jpg` (12 images) | `/portfolio` | `Photo Exports` | Real | Yes | Yes | No |
| `/assets/images/party/party-glam-hero.jpg` | `/party-makeup-and-hair` | Portfolio | Real | Yes | Yes | No |
| `/assets/images/commercial/commercial-shoot-hero.jpg`| `/commercial-makeup-artist-dubai`| Portfolio | Real | Yes | Yes | No |

## Analysis
- **Placeholder Elimination:** All gradient/ImageMagick generated placeholders were completely removed. Real photos from the `Gugu` shoot and `1080 posts` were repurposed to represent the online consultation services to maintain the luxury feel.
- **Founder Photo:** As requested, since the authenticity of the portrait in the About page could not be verified, it was replaced with a neutral brand detail image (`p1.jpg`). This image is marked as "Needs Replace" pending the client supplying the official headshot.
- **Cropping:** CSS object-positions (`object-cover` and occasionally `object-[center_20%]`) were used globally to guarantee faces are never inadvertently decapitated on extreme ultrawide aspect ratios.
