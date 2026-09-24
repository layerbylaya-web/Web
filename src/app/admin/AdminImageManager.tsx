'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { assetLibrary, blockedImageAssets, imageSlotGroups, type SiteImageSlot } from '@/data/siteImages';

function configSnippet(slot: SiteImageSlot, src: string, objectPosition: string, mobileObjectPosition: string) {
  return `{
  id: "${slot.id}",
  page: "${slot.page}",
  slot: "${slot.slot}",
  src: "${src}",
  alt: "${slot.alt}",
  type: "${slot.type}",
  objectPosition: "${objectPosition}",
  mobileObjectPosition: "${mobileObjectPosition}",
  ratio: "${slot.ratio}"${slot.status ? `,\n  status: "${slot.status}"` : ''}
}`;
}

function ImageSlotCard({ slot }: { slot: SiteImageSlot }) {
  const [draftSrc, setDraftSrc] = useState(slot.src);
  const [objectPosition, setObjectPosition] = useState(slot.objectPosition);
  const [mobileObjectPosition, setMobileObjectPosition] = useState(slot.mobileObjectPosition ?? slot.objectPosition);
  const [copied, setCopied] = useState(false);
  const isBlockedSource = blockedImageAssets.includes(draftSrc as (typeof blockedImageAssets)[number]);

  const snippet = useMemo(
    () => configSnippet(slot, draftSrc, objectPosition, mobileObjectPosition),
    [draftSrc, mobileObjectPosition, objectPosition, slot],
  );

  async function copySnippet() {
    await navigator.clipboard.writeText(snippet);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <article className="ornamental-corners grid gap-5 border border-dusty-rose-border/55 bg-white/52 p-5 shadow-[0_20px_70px_rgba(42,23,18,0.08)] backdrop-blur-md md:grid-cols-[180px_1fr]">
      <div className="space-y-3">
        <div className="editorial-frame relative aspect-[4/5] overflow-hidden bg-warm-ivory">
          <Image
            src={draftSrc}
            alt={slot.alt}
            fill
            sizes="180px"
            className="object-cover"
            style={{ objectPosition }}
          />
        </div>
        <p className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-deep-gold">{slot.type}</p>
      </div>

      <div className="min-w-0 space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-taupe">{slot.page}</p>
          <h2 className="mt-1 font-serif text-2xl text-deep-espresso">{slot.slot}</h2>
        </div>

        <dl className="grid grid-cols-1 gap-3 text-sm text-soft-espresso/78 sm:grid-cols-2">
          <div>
            <dt className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-muted-taupe">Ratio</dt>
            <dd>{slot.ratio}</dd>
          </div>
          <div>
            <dt className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-muted-taupe">Object position</dt>
            <dd>{objectPosition}</dd>
          </div>
          <div>
            <dt className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-muted-taupe">Mobile crop guidance</dt>
            <dd>{mobileObjectPosition}</dd>
          </div>
          <div>
            <dt className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-muted-taupe">Status</dt>
            <dd>{slot.status ?? 'active'}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-muted-taupe">Alt text</dt>
            <dd>{slot.alt}</dd>
          </div>
          {slot.notes && (
            <div className="sm:col-span-2">
              <dt className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-muted-taupe">Crop note</dt>
              <dd>{slot.notes}</dd>
            </div>
          )}
        </dl>

        <div className="grid gap-3">
          <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-deep-espresso">
            Replacement local path
            <input
              list="asset-library"
              value={draftSrc}
              onChange={(event) => setDraftSrc(event.target.value)}
              className="min-h-11 border border-dusty-rose-border bg-blush-paper px-3 text-sm font-normal normal-case tracking-normal outline-none transition focus:border-metallic-gold"
            />
          </label>
          <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-deep-espresso">
            Object position lab
            <input
              value={objectPosition}
              onChange={(event) => setObjectPosition(event.target.value)}
              placeholder="center 35%"
              className="min-h-11 border border-dusty-rose-border bg-blush-paper px-3 text-sm font-normal normal-case tracking-normal outline-none transition focus:border-metallic-gold"
            />
          </label>
          <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-deep-espresso">
            Mobile crop guidance
            <input
              value={mobileObjectPosition}
              onChange={(event) => setMobileObjectPosition(event.target.value)}
              placeholder="center 20%"
              className="min-h-11 border border-dusty-rose-border bg-blush-paper px-3 text-sm font-normal normal-case tracking-normal outline-none transition focus:border-metallic-gold"
            />
          </label>
        </div>
        {isBlockedSource && (
          <p className="border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-red-700">
            Blocked asset. Do not restore this path to any live slot.
          </p>
        )}

        <button
          type="button"
          onClick={copySnippet}
          className="inline-flex min-h-11 items-center justify-center bg-deep-espresso px-5 text-xs font-semibold uppercase tracking-[0.15em] text-blush-paper transition hover:bg-metallic-gold hover:text-deep-espresso"
        >
          {copied ? 'Copied config' : 'Copy updated config'}
        </button>
      </div>
    </article>
  );
}

export default function AdminImageManager() {
  const adminPreviewMode = process.env.NEXT_PUBLIC_ADMIN_PREVIEW === 'true' ? 'Preview review enabled' : 'Local/editor review mode';
  const dashboardSections = [
    'Hero Images',
    'Service Page Images',
    'Portfolio Images',
    'Generated Campaign Images',
    'Brand Detail Images',
    'Image Crop/Object Position Lab',
    'Mobile Crop Guidance',
    'Reserved Founder Slot Tracking',
    'Alt Text / SEO Image Notes',
  ];

  return (
    <div className="luxury-gradient min-h-screen px-5 pb-20 pt-28 lg:px-12 lg:pt-36">
      <datalist id="asset-library">
        {assetLibrary.map((asset) => (
          <option key={asset} value={asset} />
        ))}
      </datalist>

      <div className="mx-auto max-w-7xl">
        <div className="glass-panel px-6 py-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-deep-gold">Private admin</p>
          <h1 className="mt-4 font-serif text-5xl leading-tight text-deep-espresso md:text-7xl">Local Image Manager</h1>
          <p className="mt-6 max-w-3xl text-base font-light leading-8 text-soft-espresso/78 md:text-lg">
            Local image manager. Changes must be committed and deployed to go live. This dashboard previews local image paths,
            object-position values, alt text, image type labels, and copy-ready config entries for Rahul.
          </p>
          <p className="mt-4 max-w-3xl text-sm font-light leading-7 text-soft-espresso/70">
            No uploads or write operations are exposed here. Future CMS/storage connections can plug into the same
            `siteImages` structure for Sanity, Strapi, Payload CMS, Supabase storage, Vercel Blob, or Cloudinary.
          </p>
          <p className="mt-4 max-w-3xl text-sm font-light leading-7 text-soft-espresso/70">
            Governance guardrails: mobile crops are tracked separately, the founder portrait slot stays internal until a
            verified real portrait exists, and blocked assets remain excluded from reusable slot suggestions.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-taupe">
            {adminPreviewMode}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {dashboardSections.map((section, index) => (
              <div key={section} className="border border-metallic-gold/25 bg-white/36 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-deep-espresso">
                {String(index + 1).padStart(2, '0')} / {section}
              </div>
            ))}
          </div>
        </div>

        <section className="mt-12 space-y-4 border border-dusty-rose-border/55 bg-white/44 p-5 shadow-[0_20px_70px_rgba(42,23,18,0.06)] backdrop-blur-md">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-deep-gold">Blocked assets</p>
              <h2 className="mt-2 font-serif text-3xl text-deep-espresso">Do not reuse</h2>
            </div>
            <p className="text-xs font-light uppercase tracking-[0.16em] text-muted-taupe">{blockedImageAssets.length} blocked path</p>
          </div>
          <div className="grid gap-3">
            {blockedImageAssets.map((asset) => (
              <div key={asset} className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                <p className="font-semibold">{asset}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-red-700">Blocked pending replacement or removal</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 grid gap-10">
          {imageSlotGroups.map((group, index) => (
            <section key={group.group} className="space-y-5">
              <div className="flex flex-col gap-2 border-b border-metallic-gold/25 pb-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-deep-gold">
                    {String(index + 1).padStart(2, '0')} / {group.group.replace(/([A-Z])/g, ' $1')}
                  </p>
                  <h2 className="mt-2 font-serif text-3xl capitalize text-deep-espresso">
                    {group.group.replace(/([A-Z])/g, ' $1')} images
                  </h2>
                </div>
                <p className="text-xs font-light uppercase tracking-[0.16em] text-muted-taupe">{group.slots.length} slots</p>
              </div>
              <div className="grid gap-5">
                {group.slots.map((slot) => (
                  <ImageSlotCard key={slot.id} slot={slot} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <div className="mt-8 border-t border-metallic-gold/20 pt-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-botanical-sage">
          Build version: mobile-hero-finesse-v2
        </p>
      </div>
    </div>
  );
}
