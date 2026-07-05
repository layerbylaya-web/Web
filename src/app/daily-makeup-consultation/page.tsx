import Hero from '@/components/Hero';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { EditorialImage, FAQSection, InternalLinkSection, SectionIntro, ServiceList } from '@/components/PremiumSections';
import { commonFaqs, faqSchema, generatedImages, pageMetadata, serviceSchema, whatsappLinks } from '@/lib/site';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = pageMetadata({
  title: 'Daily Makeup Consultation',
  description: 'Premium daily makeup consultation by LayeR by Laya for a practical 15-minute routine, fresh skin, product guidance, and online one-to-one makeup coaching.',
  path: '/daily-makeup-consultation',
  image: generatedImages.editorialTwo,
});

const faqs = [
  {
    question: 'What do I learn in a daily makeup consultation?',
    answer: 'You learn a realistic routine for skin prep, base, brows, eyes, cheek, lip, and setting, adapted to your own products and lifestyle.',
  },
  {
    question: 'Can the session help if I only have 10 to 15 minutes?',
    answer: 'Yes. The routine is designed around your real morning timing, so the result feels polished without becoming a complicated artist routine.',
  },
  {
    question: 'Will Laya recommend new products?',
    answer: 'Only where needed. The session starts with what you own, then identifies practical gaps or better replacements.',
  },
  ...commonFaqs.slice(0, 1),
];

export default function DailyConsultationPage() {
  return (
    <>
      <JsonLd pageSchema={[
        serviceSchema({
          path: '/daily-makeup-consultation',
          name: 'Daily makeup consultation',
          description: metadata.description || '',
          image: generatedImages.editorialTwo,
        }),
        faqSchema(faqs),
      ]} />
      <Hero
        title={siteContent.daily.h1}
        subtitle="Your 15-minute signature"
        description={siteContent.daily.intro}
        imageSrc={generatedImages.editorialTwo}
        imageAlt="Editorial beauty close-up for daily makeup consultation"
        objectPosition="center 20%"
        ctaText="Book Daily Session"
        ctaLink={whatsappLinks.online}
        secondaryCtaText="Audit My Kit"
        secondaryCtaLink="/personal-makeup-kit-audit"
      />

      <section className="rose-gold-gradient px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="space-y-10">
            <SectionIntro
              align="left"
              title="A routine you can actually repeat"
              body="The goal is not more steps. It is better choices, cleaner technique, and a soft polished finish that feels right for work, school runs, calls, brunch, or travel."
            />
            <ServiceList
              items={[
                { title: 'Skin prep', body: 'Hydration, primer, and base strategy that fits your skin texture and climate.' },
                { title: 'Feature balance', body: 'Brows, eyes, cheeks, and lips taught in a sequence you can remember.' },
                { title: 'Product edit', body: 'Your current products stay central, with replacements suggested only where useful.' },
              ]}
            />
          </div>
          <EditorialImage
            src={generatedImages.kitAuditApproved}
            alt="Approved kit audit product image used as secondary daily makeup detail"
            aspect="aspect-[4/5]"
            objectPosition="center 32%"
          />
        </div>
      </section>

      <section className="bg-blush-paper px-5 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            title="The routine sequence"
            body="Each step is simplified, practiced, and documented so you can recreate it without guessing."
          />
          <ServiceList
            items={[
              { title: '01 Prep', body: 'Clean skin, hydrated base, primer decisions, and complexion placement.' },
              { title: '02 Define', body: 'Brows, eyes, mascara, and subtle lift based on your face shape.' },
              { title: '03 Finish', body: 'Cheeks, lips, setting, and the small details that make it look intentional.' },
            ]}
          />
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <InternalLinkSection />
    </>
  );
}
