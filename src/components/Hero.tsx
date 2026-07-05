import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { FadeIn, SlideUp, SlowScale } from './AnimationWrappers';

interface HeroProps {
  title: ReactNode | string;
  subtitle?: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  supportingImageSrc?: string;
  supportingImageAlt?: string;
  objectPosition?: string;
  priority?: boolean;
  imagePriority?: 'hero' | 'detail';
}

export default function Hero({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  supportingImageSrc,
  supportingImageAlt,
  objectPosition = "center",
  priority = true,
}: HeroProps) {
  return (
    <section className="luxury-gradient ambient-gradient relative flex min-h-[auto] items-start overflow-hidden px-5 pb-10 pt-20 sm:min-h-[auto] lg:min-h-[720px] lg:items-center lg:px-12 lg:pb-14 lg:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_26%,rgba(255,255,255,0.72),transparent_22rem)]" />
      <div className="relative z-10 w-full mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
        <div className="glass-panel order-1 max-w-2xl px-5 py-6 text-center lg:px-10 lg:py-10 lg:text-left">
          {subtitle && (
            <FadeIn delay={0.1}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-rose-wine">
                {subtitle}
              </p>
            </FadeIn>
          )}

          <SlideUp delay={0.2}>
            <h1 className="text-balance font-serif text-[2.1rem] leading-[1.05] text-deep-espresso sm:text-[2.6rem] md:text-5xl lg:text-[4.45rem] lg:leading-[0.98]">
              {title}
            </h1>
          </SlideUp>

          <SlideUp delay={0.35}>
            <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:mt-7 lg:justify-start">
              {ctaText && ctaLink && (
                <a
                  href={ctaLink}
                  target={ctaLink.startsWith('http') ? '_blank' : undefined}
                  rel={ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="whatsapp-pulse inline-flex min-h-12 items-center justify-center bg-deep-espresso px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-blush-paper transition-all duration-500 hover:bg-metallic-gold hover:text-deep-espresso"
                >
                  {ctaText}
                </a>
              )}
              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  href={secondaryCtaLink}
                  className="inline-flex min-h-12 items-center justify-center border border-deep-espresso/35 px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-deep-espresso transition-all duration-500 hover:border-metallic-gold hover:text-deep-gold"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          </SlideUp>

          {description && (
            <SlideUp delay={0.5}>
              <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-7 text-soft-espresso/78 md:text-[1.04rem] lg:mx-0 lg:mt-6">
                {description}
              </p>
            </SlideUp>
          )}

          <div className="hairline-gold mx-auto mt-5 lg:mx-0 lg:mt-6" />
        </div>

        <div className="order-2 mt-5 lg:mt-0">
          {/* Radial glow behind image */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 rounded-full bg-[radial-gradient(circle_at_50%_42%,rgba(201,144,46,0.22),transparent_70%)]" />
            <div className="editorial-frame relative mx-auto aspect-[4/5] min-h-[280px] w-full max-w-[520px] overflow-hidden bg-warm-ivory sm:min-h-[340px] lg:aspect-[5/6] lg:max-w-none lg:min-h-[0px]">
              <SlowScale className="h-full w-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority={priority}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition }}
                />
              </SlowScale>
              <div className="pointer-events-none absolute inset-0 border border-white/55" />
            </div>

            {supportingImageSrc && (
              <FadeIn delay={0.55} className="relative z-10 mx-auto -mt-20 hidden aspect-[3/4] w-44 overflow-hidden border border-white/70 bg-blush-paper shadow-[0_24px_55px_rgba(42,23,18,0.16)] lg:block">
                <Image
                  src={supportingImageSrc}
                  alt={supportingImageAlt || ''}
                  fill
                  sizes="176px"
                  className="object-cover"
                />
              </FadeIn>
            )}
          </div>
        </div>
      </div>
      {/* LayeR build: mobile-hero-finesse-v2 */}
    </section>
  );
}
