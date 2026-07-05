import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { CampaignImageNote, EditorialImage, FAQSection, InternalLinkSection, SectionIntro, ServiceList } from '@/components/PremiumSections';
import { commonFaqs, faqSchema, generatedImages, pageMetadata, serviceSchema } from '@/lib/site';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = pageMetadata({
  title: 'About Laya and the LayeR Method',
  description: 'About LayeR by Laya, a premium Dubai and Kerala makeup and hair styling brand built around refined skin, bridal detail, editorial beauty, and online consultation.',
  path: '/about-laya',
  image: generatedImages.brandDetailTwo,
});

const faqs = [
  {
    question: 'What makes Laya’s approach different?',
    answer: 'Every visual direction is curated to express the LayeR aesthetic: polished skin, refined structure, soft colour, intentional hair, and camera-ready finish.',
  },
  {
    question: 'What is the LayeR Method?',
    answer: 'It is Laya’s approach to building refined beauty through skin architecture, soft sculpting, color balance, and hair integration.',
  },
  ...commonFaqs,
];

export default function AboutPage() {
  return (
    <>
      <JsonLd pageSchema={[
        serviceSchema({
          path: '/about-laya',
          name: 'About LayeR by Laya',
          description: metadata.description || '',
          image: generatedImages.brandDetailTwo,
        }),
        faqSchema(faqs),
      ]} />
      <div className="luxury-gradient min-h-screen px-5 pb-20 pt-32 lg:px-12 lg:pt-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <EditorialImage
            src={generatedImages.brandDetailTwo}
            alt="Blush and champagne LayeR brand detail for premium makeup and hair styling"
            aspect="aspect-[4/5]"
            objectPosition="center"
            priority
          />
          <div className="space-y-8">
            <h1 className="text-balance font-serif text-5xl leading-tight text-deep-espresso md:text-7xl">
              {siteContent.about.h1}
            </h1>
            <p className="text-lg font-light leading-8 text-soft-espresso/78">
              {siteContent.about.intro}
            </p>
            <p className="text-lg font-light leading-8 text-soft-espresso/78">
              Across Dubai, Kerala, and online consultations, Laya’s signature method focuses on skin architecture, balanced definition, and hair that belongs to the full beauty story.
            </p>
            <CampaignImageNote />
          </div>
        </div>
      </div>

      <section className="rose-gold-gradient px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            title="The philosophy behind the finish"
            label="01 / Philosophy"
            body="Premium beauty does not need to be loud. It needs proportion, restraint, endurance, and enough softness to feel human in person."
          />
          <ServiceList
            items={[
              { title: 'Reveal', body: 'Makeup is used to clarify features, not replace them.' },
              { title: 'Refine', body: 'Texture, tone, lashes, lips, and hair are edited until the look feels balanced.' },
              { title: 'Endure', body: 'The finish is planned for ceremony, camera, weather, and real movement.' },
            ]}
          />
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <InternalLinkSection />
    </>
  );
}
