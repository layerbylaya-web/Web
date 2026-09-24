'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { portfolioImages, type PortfolioCategory } from '@/data/portfolio';

type Filter = 'All' | PortfolioCategory;
const filters: Filter[] = ['All', 'Bridal', 'Fashion', 'Party', 'Commercial'];

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const visibleImages = activeFilter === 'All'
    ? portfolioImages
    : portfolioImages.filter((image) => image.category === activeFilter);
  const activeImage = activeIndex === null ? null : visibleImages[activeIndex];
  const isOpen = activeIndex !== null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !isOpen) return;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const closeLightbox = () => {
    dialogRef.current?.close();
    setActiveIndex(null);
    openerRef.current?.focus();
  };

  const move = (direction: -1 | 1) => {
    setActiveIndex((index) => index === null ? null : (index + direction + visibleImages.length) % visibleImages.length);
  };

  const handleDialogKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
    if (event.key !== 'Tab') return;
    const buttons = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('button:not([disabled])'));
    const first = buttons[0];
    const last = buttons[buttons.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  };

  return (
    <div className="w-full">
      <div role="group" aria-label="Filter portfolio images" className="mb-12 flex flex-wrap justify-center gap-x-6 gap-y-3 md:mb-16 md:gap-x-8">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={activeFilter === filter}
            onClick={() => { setActiveFilter(filter); setActiveIndex(null); }}
            className={`min-h-11 border-b px-1 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${activeFilter === filter ? 'border-deep-gold text-deep-gold' : 'border-transparent text-deep-espresso/70 hover:border-deep-espresso hover:text-deep-espresso'}`}
          >
            {filter}
          </button>
        ))}
      </div>

      <ul aria-label={`${activeFilter} portfolio images`} className="columns-1 gap-5 md:columns-2 lg:columns-3 lg:gap-8">
        {visibleImages.map((image, index) => (
          <li key={image.id} className="mb-8 break-inside-avoid lg:mb-10">
            <figure>
              <button
                type="button"
                aria-label={`View ${image.title} in gallery`}
                className="group relative block w-full overflow-hidden bg-warm-ivory text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-gold"
                onClick={(event) => { openerRef.current = event.currentTarget; setActiveIndex(index); }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={1200}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
                <span className="absolute bottom-0 left-0 bg-blush-paper/90 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.17em] text-deep-espresso">{image.category}</span>
              </button>
              <figcaption className="mt-3 border-b border-metallic-gold/25 pb-3 font-serif text-xl text-deep-espresso">{image.title}</figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label="Portfolio image viewer"
        aria-describedby="portfolio-image-caption"
        onCancel={(event) => { event.preventDefault(); closeLightbox(); }}
        onKeyDown={handleDialogKeyDown}
        className="fixed inset-0 m-auto h-[100dvh] max-h-none w-screen max-w-none bg-deep-espresso p-4 text-blush-paper backdrop:bg-deep-espresso/95 sm:p-8"
      >
        {activeImage && (
          <div className="mx-auto flex h-full max-w-6xl flex-col items-center justify-center gap-4">
            <div className="flex w-full items-center justify-between gap-4">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-blush-paper/75">{activeIndex! + 1} / {visibleImages.length} · {activeImage.category}</p>
              <button type="button" onClick={closeLightbox} autoFocus className="min-h-11 min-w-11 px-3 text-xs font-semibold uppercase tracking-widest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Close</button>
            </div>
            <div
              className="relative min-h-0 w-full flex-1 touch-pan-y"
              onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }}
              onTouchEnd={(event) => {
                const start = touchStartX.current;
                if (start !== null) {
                  const distance = event.changedTouches[0].clientX - start;
                  if (Math.abs(distance) > 50) move(distance > 0 ? -1 : 1);
                }
                touchStartX.current = null;
              }}
            >
              <Image src={activeImage.src} alt={activeImage.alt} fill sizes="100vw" className="object-contain" />
            </div>
            <div className="flex w-full items-center justify-between gap-4">
              <button type="button" onClick={() => move(-1)} aria-label="Previous portfolio image" className="min-h-11 px-3 text-xs font-semibold uppercase tracking-widest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">← Previous</button>
              <p id="portfolio-image-caption" aria-live="polite" className="text-center font-serif text-lg sm:text-2xl">{activeImage.title}</p>
              <button type="button" onClick={() => move(1)} aria-label="Next portfolio image" className="min-h-11 px-3 text-xs font-semibold uppercase tracking-widest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Next →</button>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
