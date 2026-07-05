# Admin Dashboard QA

Date: 2026-07-05

Preview: https://layer-by-laya-ni5iko83m-layer-web.vercel.app/admin

## Admin Path

- Route: `/admin`
- Purpose: private local/editor image manager for Rahul.
- Public nav: not linked.
- Sitemap: excluded.
- Robots: disallowed.
- Metadata: `noindex, nofollow`.

## Security / Limitation

- Protected by Next `src/proxy.ts` Basic Auth.
- Password source: `ADMIN_PASSWORD`.
- Local fallback password: `local-only-password`.
- `.env.example` documents:

```bash
NEXT_PUBLIC_ADMIN_PREVIEW=false
ADMIN_PASSWORD=local-only-password
```

Limitations:

- The dashboard does not write files.
- It does not expose upload controls.
- It does not expose upload secrets.
- It is a local/editor preview tool; changes must be committed and deployed to go live.

Visible admin note:

`Local image manager. Changes must be committed and deployed to go live.`

## Admin Sections

The dashboard includes:

- Hero Images
- Service Page Images
- Portfolio Images
- Generated Campaign Images
- Brand Detail Images
- Image Crop/Object Position Lab
- Alt Text / SEO Image Notes

## Image Config Structure

Created:

- `src/data/siteImages.ts`
- `src/data/siteContent.ts`

`siteImages.ts` defines image slots with:

- page
- slot
- current path
- alt text
- type
- recommended ratio
- objectPosition
- crop notes

Types include:

- `real-portfolio`
- `generated-campaign`
- `brand-detail`

The admin UI displays current image previews, replacement path fields, object-position fields, image type labels, recommended ratios, alt text, crop notes, and copy-ready config snippets.

## QA Results

Local production server:

- `/admin` unauthenticated: `401`
- `/admin` authenticated with local password: `200`
- Admin H1: `Local Image Manager`
- Required admin sections: present
- Copy buttons: 28
- Editable inputs: 56
- Meta robots: `noindex, nofollow`

## Future CMS Ready

The config architecture can later connect to:

- Sanity
- Strapi
- Payload CMS
- Supabase storage
- Vercel Blob
- Cloudinary

No paid third-party CMS was implemented.
