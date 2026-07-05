import Hero from '@/components/Hero';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { EditorialImage, FAQSection, InternalLinkSection, SectionIntro, ServiceList } from '@/components/PremiumSections';
import { SlideUp } from '@/components/AnimationWrappers';
import { commonFaqs, faqSchema, generatedImages, pageMetadata, serviceSchema, whatsappLinks } from '@/lib/site';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = pageMetadata({
  title: 'Bridal Makeup Artist in Dubai',
  description: 'Premium bridal makeup artist Dubai services by LayeR by Laya for weddings, engagements, receptions, civil ceremonies, South Indian bridal makeup Dubai, and refined makeup and hair Dubai styling.',
  path: '/bridal-makeup-dubai',
  image: generatedImages.bridalDubaiHero,
});

const faqs = [
  {
    question: 'Do you provide bridal makeup and hair in Dubai?',
    answer: 'Yes. LayeR provides bridal makeup and hair Dubai services for civil ceremonies, hotel weddings, South Indian bridal makeup Dubai, receptions, and family events.',
  },
  {
    question: 'Can the look stay fresh through a long UAE wedding day?',
    answer: 'The base, skin prep, and setting approach are planned for UAE weather, photography, hugs, and long timelines while keeping the finish refined.',
  },
  {
    question: 'Is a trial available for Dubai bridal makeup?',
    answer: 'Trials can be discussed after the date, venue, outfit direction, and desired finish are shared through WhatsApp.',
  },
  ...commonFaqs.slice(0, 1),
];

export default function BridalDubaiPage() {
  return (
    <>
      <JsonLd pageSchema={[
        serviceSchema({
          path: '/bridal-makeup-dubai',
          name: 'Bridal makeup artist Dubai',
          description: metadata.description || '',
          image: generatedImages.bridalDubaiHero,
        }),
        faqSchema(faqs),
      ]} />
      <Hero
        title={siteContent.bridalDubai.h1}
        subtitle="UAE bridal suite artistry"
        description={siteContent.bridalDubai.intro}
        imageSrc={generatedImages.bridalDubaiHero}
        imageAlt="Luxury Dubai bridal makeup campaign visual"
        objectPosition="center 30%"
        ctaText="Book UAE Bridal"
        ctaLink={whatsappLinks.bridalDubai}
        secondaryCtaText="See Real Portfolio"
        secondaryCtaLink="/portfolio"
      />

      <section className="rose-gold-gradient px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <SlideUp className="space-y-8">
            <SectionIntro
              align="left"
              title="Suite-ready makeup for modern UAE brides"
              body="From soft romantic glam to structured Arabic-inspired definition, every layer is planned around the dress, jewelry, lighting, and wedding-day schedule."
            />
            <ServiceList
              items={[
                { title: 'Skin longevity', body: 'Hydration, primer, base, and setting are selected for real UAE event hours.' },
                { title: 'Hair with balance', body: 'Waves, buns, veils, and accessories are shaped around the makeup silhouette.' },
                { title: 'Photo discipline', body: 'Complexion, lashes, lips, and shine control are tuned for close-up and flash photography.' },
              ]}
            />
          </SlideUp>
          <EditorialImage
            src={generatedImages.bridalDubaiSecondary}
            alt="Secondary Dubai bridal campaign visual with hands kept secondary"
            aspect="aspect-[4/5]"
            objectPosition="center 28%"
          />
        </div>
      </section>

      <section className="bg-blush-paper px-5 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            title="Built for Dubai wedding timelines"
            body="Pre-wedding events, ceremony, portraits, reception, and touch-up planning are handled as one beauty system."
          />
          <ServiceList
            items={[
              { title: 'Civil ceremony', body: 'Fresh, polished, modern bridal makeup with hair that feels effortless and elevated.' },
              { title: 'South Indian bridal Dubai', body: 'Warm skin, defined eyes, jasmine or veil-aware hair, and jewelry-conscious balance.' },
              { title: 'Reception glam', body: 'More structure, stronger eyes, and long-wear lips for evening photography and movement.' },
            ]}
          />
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <InternalLinkSection />
    </>
  );
}
