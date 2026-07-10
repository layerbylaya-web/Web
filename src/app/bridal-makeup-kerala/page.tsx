import Hero from '@/components/Hero';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { EditorialImage, FAQSection, InternalLinkSection, SectionIntro, ServiceList } from '@/components/PremiumSections';
import { breadcrumbSchema, commonFaqs, faqSchema, generatedImages, pageMetadata, serviceSchema, whatsappLinks } from '@/lib/site';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = pageMetadata({
  title: 'Bridal Makeup Artist in Kerala',
  description: 'Premium bridal makeup artist Kerala and bridal makeup artist Kottayam services by LayeR by Laya for jasmine, gold, saree, veil, church wedding, and reception styling.',
  path: '/bridal-makeup-kerala',
  image: generatedImages.bridalKeralaHero,
});

const faqs = [
  {
    question: 'Do you take bridal makeup bookings in Kottayam and Kochi?',
    answer: 'Yes. LayeR accepts selected bridal makeup Kerala bookings across Kottayam, Kochi, and destination wedding locations depending on date and travel logistics.',
  },
  {
    question: 'Can you work with saree, veil, jasmine, and traditional gold styling?',
    answer: 'Yes. The look is planned around the saree tone, veil, jasmine, jewelry weight, ceremony lighting, and the bride’s preferred softness or definition.',
  },
  {
    question: 'Is Kerala bridal makeup different from UAE bridal makeup?',
    answer: 'The finish is adapted to climate, outfit, ceremony format, and cultural styling. Kerala bridal looks often need warmer ivory, jasmine, gold, and saree-aware balance.',
  },
  ...commonFaqs.slice(0, 1),
];

export default function BridalKeralaPage() {
  return (
    <>
      <JsonLd pageSchema={[
        breadcrumbSchema([{ name: 'Bridal Makeup Kerala', path: '/bridal-makeup-kerala' }]),
        serviceSchema({
          path: '/bridal-makeup-kerala',
          name: 'Bridal makeup Kerala and Kottayam',
          description: metadata.description || '',
          image: generatedImages.bridalKeralaHero,
        }),
        faqSchema(faqs),
      ]} />
      <Hero
        title={siteContent.bridalKerala.h1}
        subtitle="Jasmine, gold, and warm ivory"
        description={siteContent.bridalKerala.intro}
        imageSrc={generatedImages.bridalKeralaHero}
        imageAlt="Kerala bridal makeup campaign visual with jasmine and gold styling"
        objectPosition="center 22%"
        ctaText="Book Kerala Bridal"
        ctaLink={whatsappLinks.bridalKerala}
        secondaryCtaText="View Portfolio"
        secondaryCtaLink="/portfolio"
      />

      <section className="rose-gold-gradient px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <EditorialImage
            src={generatedImages.bridalKeralaSecondary}
            alt="Secondary Kerala bridal campaign visual with hands and jewelry kept secondary"
            aspect="aspect-[4/5]"
            objectPosition="center 18%"
          />
          <div className="space-y-10">
            <SectionIntro
              align="left"
              title="Tradition held with a lighter hand"
              body="The artistry supports the bride rather than overpowering her. Skin stays luminous, eyes are defined, lips are balanced, and hair works with jasmine, veil, and jewelry weight."
            />
            <ServiceList
              items={[
                { title: 'Ceremony glow', body: 'Warm, polished skin that sits naturally beside saree, veil, and gold.' },
                { title: 'Hair planning', body: 'Jasmine placement, buns, waves, or veil support shaped around the final silhouette.' },
                { title: 'Reception reset', body: 'A refined transition into evening photography with stronger structure if needed.' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-blush-paper px-5 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            title="Available for Kerala wedding moments"
            body="Church weddings, temple ceremonies, engagement, reception, and family events can be planned with a calm timeline and clear styling direction."
          />
          <ServiceList
            items={[
              { title: 'Kottayam brides', body: 'Bridal makeup artist Kottayam inquiries can be started through WhatsApp with date and venue.' },
              { title: 'Kochi weddings', body: 'Soft luxury styling for hotel suites, receptions, portraits, and destination functions.' },
              { title: 'Destination Kerala', body: 'Travel can be discussed early for selected wedding dates and multi-event bookings.' },
            ]}
          />
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <InternalLinkSection />
    </>
  );
}
