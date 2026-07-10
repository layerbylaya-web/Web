import Hero from '@/components/Hero';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { EditorialImage, FAQSection, InternalLinkSection, SectionIntro, ServiceList } from '@/components/PremiumSections';
import { breadcrumbSchema, commonFaqs, faqSchema, generatedImages, pageMetadata, serviceSchema, whatsappLinks } from '@/lib/site';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = pageMetadata({
  title: 'Learn Makeup Online One to One',
  description: 'Learn makeup online one to one with LayeR by Laya through a guided live makeup session for technique correction, product use, and personal routine building.',
  path: '/learn-your-own-makeup-online',
  image: generatedImages.onlineSecondary,
});

const faqs = [
  {
    question: 'How is learn makeup online one to one different from a tutorial?',
    answer: 'Laya watches your actual application over video call and corrects hand placement, product amount, blending, color, and sequence in real time.',
  },
  {
    question: 'Do I apply the makeup myself during the session?',
    answer: 'Yes. You hold the brush and apply while Laya guides, pauses, corrects, and explains the why behind each step.',
  },
  {
    question: 'Can I focus on one specific look?',
    answer: 'Yes. The lesson can focus on daily makeup, event glam, skin prep, eyes, base, or a full routine depending on your goals.',
  },
  ...commonFaqs.slice(0, 1),
];

export default function LearnMakeupPage() {
  return (
    <>
      <JsonLd pageSchema={[
        breadcrumbSchema([{ name: 'Learn Your Own Makeup Online', path: '/learn-your-own-makeup-online' }]),
        serviceSchema({
          path: '/learn-your-own-makeup-online',
          name: 'Learn makeup online one to one',
          description: metadata.description || '',
          image: generatedImages.onlineSecondary,
        }),
        faqSchema(faqs),
      ]} />
      <Hero
        title={siteContent.learnMakeup.h1}
        subtitle="Guided by Laya, applied by you"
        description={siteContent.learnMakeup.intro}
        imageSrc={generatedImages.onlineSecondary}
        imageAlt="Online makeup lesson campaign visual"
        objectPosition="center"
        ctaText="Book Masterclass"
        ctaLink={whatsappLinks.online}
        secondaryCtaText="Kit Audit"
        secondaryCtaLink="/personal-makeup-kit-audit"
      />

      <section className="rose-gold-gradient px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="space-y-10">
            <SectionIntro
              align="left"
              title="Technique that belongs to your own face"
              body="The session is structured but personal. You learn how much product to use, where to place it, how to blend, and how to avoid the habits that make makeup feel heavy."
            />
            <ServiceList
              items={[
                { title: 'Prepare', body: 'Share your current products, skill level, references, and exact makeup goal.' },
                { title: 'Apply live', body: 'Work one step at a time while Laya corrects technique and placement.' },
                { title: 'Repeat', body: 'Leave with a clear order, product notes, and practice points for your next application.' },
              ]}
            />
          </div>
          <EditorialImage src={generatedImages.hairTwo} alt="Hair and accessory detail for complete self-styling direction" aspect="aspect-[4/5]" objectPosition="center" />
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <InternalLinkSection />
    </>
  );
}
