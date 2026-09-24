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
    <section className="luxury-gradient ambient-gradient relative overflow-hidden px-5 pb-12 pt-24 lg:min-h-[760px] lg:px-12 lg:pb-16 lg:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_57%_24%,rgba(255,255,255,0.72),transparent_24rem)]" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <div className="order-1 max-w-2xl text-left lg:py-12">
          {subtitle && (
            <FadeIn delay={0.1}>
              <p className="editorial-kicker mb-4">
                {subtitle}
              </p>
            </FadeIn>
          )}

          <SlideUp delay={0.2}>
            <h1 className="text-balance max-w-[12ch] font-serif text-[2.55rem] leading-[0.98] text-deep-espresso sm:text-5xl md:text-6xl lg:text-[4.8rem] lg:leading-[0.94]">
              {title}
            </h1>
          </SlideUp>

          {description && (
            <SlideUp delay={0.3}>
              <p className="mt-5 max-w-xl text-sm font-light leading-6 text-soft-espresso/78 sm:text-base sm:leading-7 lg:mt-7 lg:text-[1.04rem]">
                {description}
              </p>
            </SlideUp>
          )}

          <SlideUp delay={0.35}>
            <div className="mt-6 flex flex-col items-stretch gap-3 min-[430px]:flex-row min-[430px]:items-center lg:mt-8">
              {ctaText && ctaLink && (
                <a
                  href={ctaLink}
                  target={ctaLink.startsWith('http') ? '_blank' : undefined}
                  rel={ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="whatsapp-pulse inline-flex min-h-12 items-center justify-center bg-deep-espresso px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-blush-paper transition-all duration-500 hover:bg-metallic-gold hover:text-deep-espresso"
                >
                  {ctaText}
                </a>
              )}
              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  href={secondaryCtaLink}
                  className="inline-flex min-h-12 items-center justify-center border border-deep-espresso/35 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-deep-espresso transition-all duration-500 hover:border-metallic-gold hover:text-deep-gold"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          </SlideUp>

          <div className="hairline-gold mt-6" />
        </div>

        <div className="order-2 lg:mt-0">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-7 bg-[radial-gradient(circle_at_50%_42%,rgba(201,144,46,0.2),transparent_68%)]" />
            <div className="editorial-frame relative mx-auto aspect-[4/5] min-h-[300px] w-full max-w-[560px] overflow-hidden bg-warm-ivory sm:min-h-[380px] lg:aspect-[6/5] lg:max-w-none lg:min-h-0">
              <SlowScale className="h-full w-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  loading={priority ? 'eager' : 'lazy'}
                  fetchPriority={priority ? 'high' : undefined}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition }}
                />
              </SlowScale>
              <div className="pointer-events-none absolute inset-0 border border-white/55" />
              <div className="caption-ribbon absolute bottom-4 left-4 px-4 py-3 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-deep-espresso sm:bottom-6 sm:left-6">
                UAE · Kerala · Online
              </div>
            </div>

            {supportingImageSrc && (
              <FadeIn delay={0.55} className="relative z-10 ml-auto -mt-24 mr-8 hidden aspect-[3/4] w-40 overflow-hidden border border-white/70 bg-blush-paper shadow-[0_24px_55px_rgba(42,23,18,0.16)] lg:block">
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
    </section>
  );
}
