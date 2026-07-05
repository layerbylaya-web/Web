import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { FAQSection, InternalLinkSection } from '@/components/PremiumSections';
import { SlideUp } from '@/components/AnimationWrappers';
import { commonFaqs, faqSchema, generatedImages, pageMetadata, siteUrl } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Beauty Journal',
  description: 'The LayeR by Laya beauty journal for future notes on bridal makeup Dubai, bridal makeup Kerala, online makeup consultation, and refined daily beauty.',
  path: '/blog',
  image: generatedImages.editorialOne,
});

const faqs = [
  {
    question: 'Is the LayeR beauty journal live yet?',
    answer: 'The journal is being prepared. For current service guidance, use the service pages or contact Laya through WhatsApp.',
  },
  {
    question: 'Will the journal include bridal and online makeup advice?',
    answer: 'Yes. Planned topics include bridal makeup Dubai, bridal makeup Kerala, daily makeup consultation, kit audit, and learn makeup online one to one guidance.',
  },
  ...commonFaqs.slice(0, 1),
];

export default function BlogPage() {
  return (
    <>
      <JsonLd pageSchema={[
        {
          '@type': 'Blog',
          url: `${siteUrl}/blog`,
          name: 'LayeR by Laya beauty journal',
          description: metadata.description,
        },
        faqSchema(faqs),
      ]} />
      <div className="luxury-gradient flex min-h-[72vh] items-center justify-center px-5 pb-20 pt-32 text-center lg:px-12 lg:pt-40">
        <SlideUp className="mx-auto max-w-3xl">
          <h1 className="text-balance font-serif text-5xl leading-tight text-deep-espresso md:text-7xl">
            Beauty journal
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg font-light leading-8 text-soft-espresso/78">
            Editorial notes on refined bridal beauty, daily makeup, kit editing, and online consultation are coming soon.
          </p>
          <span className="mt-10 inline-flex border border-deep-espresso/25 px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-deep-espresso">
            Coming soon
          </span>
        </SlideUp>
      </div>
      <FAQSection faqs={faqs} />
      <InternalLinkSection />
    </>
  );
}
