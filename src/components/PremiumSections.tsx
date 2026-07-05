import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, GoldLine, SlideUp, StaggerContainer, StaggerItem } from './AnimationWrappers';
import { FaqItem, internalLinks } from '@/lib/site';

export function EditorialImage({
  src,
  alt,
  aspect = 'aspect-[4/5]',
  objectPosition = 'center',
  priority = false,
  className = '',
  caption,
}: {
  src: string;
  alt: string;
  aspect?: string;
  objectPosition?: string;
  priority?: boolean;
  className?: string;
  caption?: string;
}) {
  return (
    <FadeIn className={`editorial-frame relative w-full overflow-hidden bg-warm-ivory ${aspect} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 48vw, 100vw"
        className="object-cover transition-transform duration-1000 hover:scale-105"
        style={{ objectPosition }}
      />
      <div className="pointer-events-none absolute inset-0 border border-white/60" />
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 bg-blush-paper/76 px-4 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-deep-espresso backdrop-blur-md">
          {caption}
        </div>
      )}
    </FadeIn>
  );
}

export function SectionIntro({
  title,
  body,
  align = 'center',
  label,
}: {
  title: string;
  body?: string;
  align?: 'center' | 'left';
  label?: string;
}) {
  return (
    <SlideUp className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-left'}>
      {label && (
        <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-deep-gold ${align === 'center' ? 'text-center' : ''}`}>
          {label}
        </p>
      )}
      <h2 className="text-balance font-serif text-4xl leading-tight text-deep-espresso md:text-5xl">
        {title}
      </h2>
      {body && (
        <p className="mt-6 text-base font-light leading-8 text-soft-espresso/78 md:text-lg">
          {body}
        </p>
      )}
      <GoldLine className={align === 'center' ? 'mx-auto mt-8 w-24' : 'mt-8 w-24'} />
    </SlideUp>
  );
}

export function FAQSection({
  faqs,
  title = 'Questions before you book',
}: {
  faqs: FaqItem[];
  title?: string;
}) {
  return (
    <section className="champagne-band px-5 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionIntro title={title} body="Clear expectations, careful styling, and calm booking guidance sit at the centre of the LayeR experience." />
        <div className="mt-14 space-y-5">
          {faqs.map((faq) => (
            <FadeIn key={faq.question} className="border-b border-dusty-rose-border/55 pb-7">
              <h3 className="font-serif text-2xl text-deep-espresso">{faq.question}</h3>
              <p className="mt-3 text-base font-light leading-7 text-soft-espresso/76">{faq.answer}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InternalLinkSection({
  title = 'Continue exploring LayeR',
  links = internalLinks,
}: {
  title?: string;
  links?: { label: string; href: string }[];
}) {
  return (
    <section className="bg-blush-paper px-5 py-14 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl border-y border-metallic-gold/25 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <h2 className="font-serif text-3xl text-deep-espresso">{title}</h2>
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border border-deep-espresso/18 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-deep-espresso transition-all hover:border-metallic-gold hover:text-deep-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceList({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {items.map((item, index) => (
        <StaggerItem key={item.title} className="ornamental-corners border-l border-metallic-gold/35 bg-white/34 px-6 py-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/48 hover:shadow-[0_24px_70px_rgba(42,23,18,0.12)]">
          <span className="mb-8 block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-deep-gold">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="font-serif text-2xl text-deep-espresso">{item.title}</h3>
          <p className="mt-3 text-sm font-light leading-6 text-soft-espresso/72">{item.body}</p>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

export function CampaignImageNote() {
  return (
    <p className="mx-auto mt-6 max-w-2xl text-center text-xs font-light uppercase tracking-[0.12em] text-muted-taupe">
      The portfolio presents selected real work, while service pages communicate the mood, finish, and level of detail clients can expect.
    </p>
  );
}
