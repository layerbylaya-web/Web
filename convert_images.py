import os

mapping = [
    ("/Users/sunnymacbookpro/.gemini/antigravity-ide/brain/61ce1b8b-9f50-4a9b-8626-a3a5cdf4ba02/home_hero_1_1783256219320.png", "/Volumes/LayeR/LayeR/layer-nextjs/public/assets/images/generated/home/home-hero-luxury-01.webp"),
    ("/Users/sunnymacbookpro/.gemini/antigravity-ide/brain/61ce1b8b-9f50-4a9b-8626-a3a5cdf4ba02/home_hero_2_1783256228765.png", "/Volumes/LayeR/LayeR/layer-nextjs/public/assets/images/generated/home/home-hero-luxury-02.webp"),
    ("/Users/sunnymacbookpro/.gemini/antigravity-ide/brain/61ce1b8b-9f50-4a9b-8626-a3a5cdf4ba02/bridal_dubai_1_1783256237746.png", "/Volumes/LayeR/LayeR/layer-nextjs/public/assets/images/generated/bridal-dubai/bridal-dubai-luxury-01.webp"),
    ("/Users/sunnymacbookpro/.gemini/antigravity-ide/brain/61ce1b8b-9f50-4a9b-8626-a3a5cdf4ba02/bridal_dubai_2_1783256247424.png", "/Volumes/LayeR/LayeR/layer-nextjs/public/assets/images/generated/bridal-dubai/bridal-dubai-luxury-02.webp"),
    ("/Users/sunnymacbookpro/.gemini/antigravity-ide/brain/61ce1b8b-9f50-4a9b-8626-a3a5cdf4ba02/bridal_kerala_1_1783256256605.png", "/Volumes/LayeR/LayeR/layer-nextjs/public/assets/images/generated/bridal-kerala/bridal-kerala-luxury-01.webp"),
    ("/Users/sunnymacbookpro/.gemini/antigravity-ide/brain/61ce1b8b-9f50-4a9b-8626-a3a5cdf4ba02/bridal_kerala_2_1783256265735.png", "/Volumes/LayeR/LayeR/layer-nextjs/public/assets/images/generated/bridal-kerala/bridal-kerala-luxury-02.webp"),
    ("/Users/sunnymacbookpro/.gemini/antigravity-ide/brain/61ce1b8b-9f50-4a9b-8626-a3a5cdf4ba02/online_consult_1_1783256275915.png", "/Volumes/LayeR/LayeR/layer-nextjs/public/assets/images/generated/online-consultation/online-consultation-luxury-01.webp"),
    ("/Users/sunnymacbookpro/.gemini/antigravity-ide/brain/61ce1b8b-9f50-4a9b-8626-a3a5cdf4ba02/online_consult_2_1783256285593.png", "/Volumes/LayeR/LayeR/layer-nextjs/public/assets/images/generated/online-consultation/online-consultation-luxury-02.webp"),
    ("/Users/sunnymacbookpro/.gemini/antigravity-ide/brain/61ce1b8b-9f50-4a9b-8626-a3a5cdf4ba02/editorial_beauty_1_1783256294873.png", "/Volumes/LayeR/LayeR/layer-nextjs/public/assets/images/generated/editorial/editorial-beauty-closeup-01.webp"),
    ("/Users/sunnymacbookpro/.gemini/antigravity-ide/brain/61ce1b8b-9f50-4a9b-8626-a3a5cdf4ba02/editorial_beauty_2_1783256304885.png", "/Volumes/LayeR/LayeR/layer-nextjs/public/assets/images/generated/editorial/editorial-beauty-closeup-02.webp"),
    ("/Users/sunnymacbookpro/.gemini/antigravity-ide/brain/61ce1b8b-9f50-4a9b-8626-a3a5cdf4ba02/hair_styling_1_1783256313737.png", "/Volumes/LayeR/LayeR/layer-nextjs/public/assets/images/generated/hair/hair-styling-luxury-01.webp"),
    ("/Users/sunnymacbookpro/.gemini/antigravity-ide/brain/61ce1b8b-9f50-4a9b-8626-a3a5cdf4ba02/hair_styling_2_1783256323719.png", "/Volumes/LayeR/LayeR/layer-nextjs/public/assets/images/generated/hair/hair-styling-luxury-02.webp"),
    ("/Users/sunnymacbookpro/.gemini/antigravity-ide/brain/61ce1b8b-9f50-4a9b-8626-a3a5cdf4ba02/kit_audit_1_1783256333946.png", "/Volumes/LayeR/LayeR/layer-nextjs/public/assets/images/generated/kit-audit/kit-audit-luxury-01.webp"),
    ("/Users/sunnymacbookpro/.gemini/antigravity-ide/brain/61ce1b8b-9f50-4a9b-8626-a3a5cdf4ba02/kit_audit_2_1783256342707.png", "/Volumes/LayeR/LayeR/layer-nextjs/public/assets/images/generated/kit-audit/kit-audit-luxury-02.webp"),
    ("/Users/sunnymacbookpro/.gemini/antigravity-ide/brain/61ce1b8b-9f50-4a9b-8626-a3a5cdf4ba02/brand_detail_1_1783256351249.png", "/Volumes/LayeR/LayeR/layer-nextjs/public/assets/images/generated/brand-detail/brand-detail-luxury-01.webp"),
    ("/Users/sunnymacbookpro/.gemini/antigravity-ide/brain/61ce1b8b-9f50-4a9b-8626-a3a5cdf4ba02/brand_detail_2_1783256359038.png", "/Volumes/LayeR/LayeR/layer-nextjs/public/assets/images/generated/brand-detail/brand-detail-luxury-02.webp")
]

for src, dest in mapping:
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    os.system(f"sips -s format webp '{src}' --out '{dest}'")
    print(f"Processed: {dest}")
