# Codex Design Upgrade Prompt

## GOAL
Redesign the LayeR by Laya website to feel like the absolute best premium makeup artist and hair styling website in the UAE. It must combine luxury editorial visuals, soft gradient backgrounds, animated gold rules, rich image sections, and conversion-focused WhatsApp CTAs.

## INSTRUCTIONS
- **Use Generated AI Images:** Replace placeholder/weak imagery with the premium photorealistic AI images located in `/public/assets/images/generated/`. Reference `AI-IMAGE-INTEGRATION-MAP.md` for exact mapping, crops, and fallback logic.
- **Use Gradient Backgrounds:** Transition away from flat solid colors. Implement premium blush/champagne gradient sections that feel dynamic and luxurious.
- **Improve Animations:** Enhance scrolling animations (using Framer Motion or CSS) so images and typography slide and fade with elegant, 500ms+ timing. 
- **Rebuild Homepage:** Architect the homepage as a luxury editorial campaign, utilizing the new hero visuals and asymmetric layouts.
- **Service Pages:** Overhaul all service pages using the new generated images (Bridal Dubai, Bridal Kerala, Online Consultation, etc.).
- **Maintain Portfolio Authenticity:** The portfolio must ONLY use real Laya client images. Keep the portfolio "real-only". Do not mix generated campaign images into the actual portfolio galleries.
- **Improve SEO Copy:** Elevate the typography and localized copy (Dubai, Kerala) to match the new luxury aesthetic without breaking the organic keyword placement.
- **Maintain Performance:** Ensure Next.js Image components (`next/image`) are optimized (e.g., proper sizing, `priority` on above-the-fold heroes).
- **Deployment:** Deploy a preview ONLY (`vercel deploy`). Do NOT run `vercel --prod`.
