# Admin and image management

`/admin` is an image-slot/crop preview. It does not upload assets, save edits, or persist data across a reload. Local access requires `ADMIN_USERNAME` and `ADMIN_PASSWORD`; production access is disabled at the proxy with a 404 until a real storage and session system exists. The page is `noindex` and excluded from the sitemap.

To make it a persistent editor, provide an approved storage/metadata service already owned by LayeR, such as Vercel Blob plus a metadata store or Supabase Storage/database. Build server-side upload, slot updates, image validation/derivatives, an authenticated HttpOnly session, login throttling, and an audit trail. No new paid service or credentials were created in this pass.

Do not present the current preview as a CMS to the site owner.
