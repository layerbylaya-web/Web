import Hero from '@/components/Hero';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import {
  CampaignImageNote,
  EditorialImage,
  FAQSection,
  InternalLinkSection,
  SectionIntro,
  ServiceList,
} from '@/components/PremiumSections';
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from '@/components/AnimationWrappers';
import BookingForm from '@/components/BookingForm';
import { brand, commonFaqs, faqSchema, generatedImages, pageMetadata, serviceSchema, whatsappLinks } from '@/lib/site';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = pageMetadata({
  title: 'Premium Makeup & Hair Styling by Laya',
  description: 'Premium makeup and hair styling by Laya for bridal, event, editorial, and camera-ready beauty across UAE, Kerala, and online clients worldwide.',
  path: '/',
  image: generatedImages.homeHero,
});

const homeFaqs = [
  {
    question: 'Do you provide makeup and hair in Dubai?',
    answer: 'Yes. LayeR offers premium makeup and hair Dubai services for bridal events, parties, editorial shoots, and commercial bookings across the UAE.',
  },
  {
    question: 'Do you provide bridal makeup in Kerala?',
    answer: 'Yes. Bridal makeup Kerala bookings can be discussed for Kottayam, Kochi, and selected destination ceremonies with early availability checks.',
  },
  {
    question: 'Can I book an online makeup consultation from another country?',
    answer: 'Yes. Online makeup consultation, daily makeup consultation, kit audit, and learn makeup online one to one sessions are available globally.',
  },
  ...commonFaqs.slice(0, 2),
];

export default function Home() {
  const services = [
    {
      title: 'Bridal Dubai',
      body: 'Luxury bridal makeup artist Dubai services for hotel suites, civil ceremonies, South Indian bridal makeup Dubai, and reception glam.',
      href: '/bridal-makeup-dubai',
      image: generatedImages.bridalDubaiHero,
    },
    {
      title: 'Bridal Kerala',
      body: 'Warm ivory, jasmine, saree, and gold-led bridal makeup Kerala styling for Kottayam, Kochi, and destination wedding days.',
      href: '/bridal-makeup-kerala',
      image: generatedImages.bridalKeralaHero,
    },
    {
      title: 'Online Beauty',
      body: 'Daily makeup consultation, makeup kit audit online, and learn makeup online one to one sessions tailored to your own face.',
      href: '/online-makeup-consultation',
      image: generatedImages.onlineHero,
    },
  ];

  return (
    <>
      <JsonLd pageSchema={[
        serviceSchema({
          path: '/',
          name: 'Premium makeup artist Dubai, Kerala and online consultation',
          description: metadata.description || '',
          image: generatedImages.homeHero,
        }),
        faqSchema(homeFaqs),
      ]} />
      <Hero
        title={siteContent.home.h1}
        subtitle="LayeR by Laya"
        description={`${siteContent.home.subheadline} ${siteContent.home.support}`}
        imageSrc={generatedImages.homeHero}
        imageAlt="Premium makeup and hair styling by Laya with jasmine bridal beauty detail"
        ctaText="Book on WhatsApp"
        ctaLink={whatsappLinks.general}
        secondaryCtaText="Explore Services"
        secondaryCtaLink="/services"
        supportingImageSrc={generatedImages.homeSecondary}
        supportingImageAlt="Secondary luxury beauty campaign visual"
        objectPosition="right center"
      />

      <section aria-label="Where LayeR works" className="border-y border-metallic-gold/25 bg-warm-ivory/70 px-5 py-6 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center">
          {[
            'On-location across Dubai & UAE',
            'Kerala bridal specialist',
            'Online consultations worldwide',
            'Makeup + hair by one artist',
          ].map((item) => (
            <span key={item} className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-deep-gold">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="rose-gold-gradient mesh-accent px-5 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <SlideUp className="space-y-8">
            <h2 className="text-balance font-serif text-4xl leading-tight text-deep-espresso md:text-5xl">
              A Dubai beauty brand with Kerala warmth and editorial precision.
            </h2>
            <p className="text-lg font-light leading-8 text-soft-espresso/78">
              LayeR by Laya creates makeup and hair that photographs beautifully, survives real event hours, and feels polished in person. Every look is built with skin architecture, balanced sculpting, and delicate hair integration rather than heavy template glam.
            </p>
            <Link href="/services" className="inline-flex border-b border-metallic-gold pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-deep-espresso transition-colors hover:text-deep-gold">
              Explore services
            </Link>
          </SlideUp>
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <EditorialImage src={generatedImages.homeSecondary} alt="Luxury campaign beauty image" aspect="aspect-[3/4]" objectPosition="center" className="mt-10" />
            <EditorialImage src={generatedImages.brandDetailTwo} alt="Blush and champagne LayeR brand detail for premium beauty direction" aspect="aspect-[3/4]" objectPosition="center" className="mb-10" />
          </div>
        </div>
      </section>

      <div className="gold-section-divider mb-0" aria-hidden="true" />
      <section className="blush-mesh px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <EditorialImage src={generatedImages.editorialOne} alt="Close-up editorial beauty detail for the LayeR Method" aspect="aspect-[4/5]" objectPosition="center" />
          <div className="space-y-12">
            <SectionIntro
              align="left"
              title="The LayeR Method"
              label="01 / Method"
              body="A refined sequence for luminous skin, balanced structure, and hair that belongs to the final silhouette."
            />
            <ServiceList
              items={[
                { title: 'Skin Architecture', body: 'Prep, hydration, base tone, and texture decisions are built around your actual skin.' },
                { title: 'Soft Sculpting', body: 'Light, shadow, lashes, lip tone, and brows are balanced so the face stays expressive.' },
                { title: 'Hair Integration', body: 'Waves, buns, jasmine, veils, and accessories are planned with the makeup rather than added later.' },
              ]}
            />
          </div>
        </div>
      </section>

      <div className="gold-section-divider" aria-hidden="true" />
      <section className="champagne-band px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            title="UAE, Kerala, and online beauty services"
            label="02 / Services"
            body="Choose the lane that matches your moment, then refine the look directly with Laya through WhatsApp."
          />
          <StaggerContainer className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <Link href={service.href} className="group card-lift block">
                  <div className="editorial-frame relative aspect-[4/5] overflow-hidden bg-warm-ivory">
                    <Image src={service.image} alt={`${service.title} campaign visual`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="pointer-events-none absolute inset-0 border border-white/60" />
                    <div className="absolute bottom-0 left-0 right-0 bg-blush-paper/76 px-4 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-deep-espresso backdrop-blur-md">
                      {String(services.indexOf(service) + 1).padStart(2, '0')} / {service.title}
                    </div>
                  </div>
                  <h3 className="mt-7 font-serif text-3xl text-deep-espresso">{service.title}</h3>
                  <p className="mt-3 text-sm font-light leading-6 text-soft-espresso/72">{service.body}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-blush-paper px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <SlideUp className="space-y-8">
            <h2 className="text-balance font-serif text-4xl leading-tight text-deep-espresso md:text-5xl">
              Bridal campaign direction for Dubai and Kerala.
            </h2>
            <p className="text-lg font-light leading-8 text-soft-espresso/78">
              Dubai brides need a polished suite-ready finish. Kerala brides need warmth, jasmine, gold, and saree-aware styling. Both need makeup and hair that holds under emotion, weather, photography, and long timelines.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/bridal-makeup-dubai" className="border border-deep-espresso px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-deep-espresso transition-colors hover:border-metallic-gold hover:text-deep-gold">Dubai bridal</Link>
              <Link href="/bridal-makeup-kerala" className="border border-deep-espresso/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-deep-espresso transition-colors hover:border-metallic-gold hover:text-deep-gold">Kerala bridal</Link>
            </div>
          </SlideUp>
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <EditorialImage src={generatedImages.bridalDubaiSecondary} alt="Dubai bridal editorial campaign visual" aspect="aspect-[3/4]" objectPosition="center 35%" className="mt-12" />
            <EditorialImage src={generatedImages.bridalKeralaHero} alt="Kerala bridal editorial campaign visual" aspect="aspect-[3/4]" objectPosition="center 25%" className="mb-12" />
          </div>
        </div>
      </section>

      <section className="rose-gold-gradient px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <EditorialImage src={generatedImages.hairOne} alt="Luxury hair styling waves and accessory detail" aspect="aspect-[3/4]" objectPosition="center" />
            <EditorialImage src={generatedImages.onlineHero} alt="Online makeup consultation campaign setup" aspect="aspect-[3/4]" objectPosition="center" className="mt-12" />
          </div>
          <SlideUp className="space-y-8">
            <h2 className="text-balance font-serif text-4xl leading-tight text-deep-espresso md:text-5xl">
              Hair styling and online consultation, treated with the same luxury eye.
            </h2>
            <p className="text-lg font-light leading-8 text-soft-espresso/78">
              From soft bridal waves to a practical daily makeup consultation, LayeR keeps the finish elegant, teachable, and personal. Online sessions cover routine design, kit audit, bridal look planning, and one-to-one makeup lessons.
            </p>
            <Link href="/online-makeup-consultation" className="inline-flex bg-deep-espresso px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-blush-paper transition-colors hover:bg-metallic-gold hover:text-deep-espresso">
              Plan online
            </Link>
          </SlideUp>
        </div>
      </section>

      <section className="bg-blush-paper px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl text-center">
          <SectionIntro
            title="Real portfolio, real LayeR work"
            label="03 / Portfolio"
            body="The portfolio presents selected real work, while service pages communicate the mood, finish, and level of detail clients can expect."
          />
          <CampaignImageNote />
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
            {['01', '02', '03', '04'].map((id, index) => (
              <FadeIn key={id} delay={index * 0.08} className={`relative aspect-[3/4] overflow-hidden bg-warm-ivory ${index === 1 || index === 3 ? 'md:mt-10' : ''}`}>
                <Link href="/portfolio" className="group block h-full w-full">
                  <Image src={`/assets/images/portfolio/portfolio-${id}.jpg`} alt={`Real LayeR portfolio preview ${id}`} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                </Link>
              </FadeIn>
            ))}
          </div>
          <Link href="/portfolio" className="mt-12 inline-flex border border-deep-espresso px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-deep-espresso transition-colors hover:border-metallic-gold hover:text-deep-gold">
            View real portfolio
          </Link>
        </div>
      </section>

      <div className="gold-section-divider" aria-hidden="true" />
      <section id="book" className="champagne-mesh scroll-mt-24 px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="space-y-10">
            <SectionIntro
              align="left"
              title="Begin your booking"
              label="04 / Booking"
              body="Share your date and moment. Laya replies personally with availability, packages, and honest guidance — whether your event is in Dubai, Kerala, or your consultation is online from anywhere in the world."
            />
            <ol className="space-y-6">
              {[
                { step: 'Enquire', body: 'Send the form or a WhatsApp message with your date, city, and service.' },
                { step: 'Consult', body: 'Laya reviews your outfit, skin, references, and timeline with you.' },
                { step: 'Your moment', body: 'A calm, camera-ready finish on the day — or a personal online session.' },
              ].map((item, i) => (
                <li key={item.step} className="flex gap-5">
                  <span className="font-serif text-3xl text-metallic-gold">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-serif text-xl text-deep-espresso">{item.step}</h3>
                    <p className="mt-1 text-sm font-light leading-6 text-soft-espresso/74">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="border-t border-metallic-gold/25 pt-6 text-sm font-light leading-7 text-soft-espresso/76">
              <p>WhatsApp: {brand.phoneDisplay}</p>
              <p>Dubai, UAE &middot; Kerala, India &middot; Online worldwide</p>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>

      <FAQSection faqs={homeFaqs} />
      <InternalLinkSection />

      <section className="bg-deep-espresso px-5 py-20 text-center text-blush-paper lg:px-12 lg:py-28">
        <SlideUp className="mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">Ready to build your LayeR look?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-8 text-blush-paper/78">
            Send your date, city, event type, and preferred finish. Laya will guide you toward the right bridal, party, hair, editorial, or online consultation option.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={whatsappLinks.general} target="_blank" rel="noopener noreferrer" className="whatsapp-pulse inline-flex bg-metallic-gold px-9 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-deep-espresso transition-colors hover:bg-blush-paper">
              Book on WhatsApp
            </a>
            <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex border border-blush-paper/35 px-9 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-blush-paper transition-colors hover:border-metallic-gold hover:text-metallic-gold">
              Follow @layerbylaya
            </a>
          </div>
        </SlideUp>
      </section>
    </>
  );
}
