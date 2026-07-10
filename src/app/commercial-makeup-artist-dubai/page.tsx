import Hero from '@/components/Hero';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { EditorialImage, FAQSection, InternalLinkSection, SectionIntro, ServiceList } from '@/components/PremiumSections';
import { breadcrumbSchema, commonFaqs, faqSchema, generatedImages, pageMetadata, serviceSchema, whatsappLinks } from '@/lib/site';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = pageMetadata({
  title: 'Commercial Makeup Artist Dubai',
  description: 'Commercial makeup artist Dubai services by LayeR by Laya for campaign shoots, corporate video, TV, production makeup, male grooming, and continuity.',
  path: '/commercial-makeup-artist-dubai',
  image: generatedImages.brandDetailOne,
});

const faqs = [
  {
    question: 'Do you support commercial shoots and production days in Dubai?',
    answer: 'Yes. LayeR supports campaign shoots, interviews, corporate video, content production, and selected TV or commercial work in Dubai.',
  },
  {
    question: 'Can you handle male grooming as well as makeup?',
    answer: 'Yes. Male grooming can include anti-shine skin prep, complexion evening, brow tidy, lip conditioning, and hair polish for camera.',
  },
  {
    question: 'How do you manage touch-ups and continuity?',
    answer: 'Continuity is planned around the shot list, lighting, wardrobe changes, and production schedule so the final footage stays consistent.',
  },
  ...commonFaqs.slice(0, 1),
];

export default function CommercialPage() {
  return (
    <>
      <JsonLd pageSchema={[
        breadcrumbSchema([{ name: 'Commercial Makeup Artist Dubai', path: '/commercial-makeup-artist-dubai' }]),
        serviceSchema({
          path: '/commercial-makeup-artist-dubai',
          name: 'Commercial makeup artist Dubai',
          description: metadata.description || '',
          image: generatedImages.brandDetailOne,
        }),
        faqSchema(faqs),
      ]} />
      <Hero
        title={siteContent.commercial.h1}
        subtitle="Production-ready polish"
        description={siteContent.commercial.intro}
        imageSrc={generatedImages.brandDetailOne}
        imageAlt="Editorial brand campaign mood visual for commercial makeup services"
        objectPosition="center"
        ctaText="Book Production"
        ctaLink={whatsappLinks.production}
        supportingImageSrc={generatedImages.editorialOne}
        supportingImageAlt="Editorial beauty close-up for production makeup"
      />

      <section className="rose-gold-gradient px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <EditorialImage src={generatedImages.brandDetailTwo} alt="Blush and champagne production beauty direction detail" aspect="aspect-[4/5]" objectPosition="center" />
          <div className="space-y-10">
            <SectionIntro
              align="left"
              title="Quiet precision for the camera"
              body="Production makeup should support the talent, brand, lighting, and brief without distracting from the story. LayeR keeps the finish refined and consistent."
            />
            <ServiceList
              items={[
                { title: 'Female talent', body: 'HD-ready skin, soft structure, hair polish, and controlled touch-ups.' },
                { title: 'Male grooming', body: 'Natural skin evening, shine control, and tidy camera-ready grooming.' },
                { title: 'Continuity', body: 'Makeup and hair notes maintained across looks, scenes, and lighting changes.' },
              ]}
            />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <InternalLinkSection />
    </>
  );
}
