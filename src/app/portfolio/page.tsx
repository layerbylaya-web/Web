import PortfolioGallery from '@/components/PortfolioGallery';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { CampaignImageNote, FAQSection, InternalLinkSection } from '@/components/PremiumSections';
import { FadeIn, SlideUp } from '@/components/AnimationWrappers';
import { commonFaqs, faqSchema, pageMetadata, siteUrl, whatsappLinks } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Real Makeup Portfolio',
  description: 'Selected real LayeR by Laya portfolio photos showing bridal, fashion, party, and commercial makeup artistry with polished skin, hair detail, and camera-ready finish.',
  path: '/portfolio',
  image: '/assets/images/portfolio/portfolio-01.jpg',
});

const faqs = [
  {
    question: 'Can I use the portfolio to choose my look?',
    answer: 'Yes. The portfolio presents selected real work, while Laya recommends the final look based on your skin tone, outfit, event, lighting, and personal comfort.',
  },
  {
    question: 'Can I request a look based on the portfolio?',
    answer: 'Yes. Share the portfolio image, your event details, outfit, and beauty references through WhatsApp so Laya can advise what suits your face and timeline.',
  },
  ...commonFaqs.slice(1),
];

export default function PortfolioPage() {
  return (
    <>
      <JsonLd pageSchema={[
        {
          '@type': 'ImageGallery',
          url: `${siteUrl}/portfolio`,
          name: 'LayeR by Laya real portfolio',
          description: metadata.description,
        },
        faqSchema(faqs),
      ]} />
      <div className="luxury-gradient min-h-screen px-5 pb-20 pt-32 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <SlideUp className="mx-auto mb-16 max-w-3xl text-center">
            <h1 className="text-balance font-serif text-5xl leading-tight text-deep-espresso md:text-7xl">
              Real LayeR portfolio
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg font-light leading-8 text-soft-espresso/78">
              A selected gallery of LayeR beauty work across bridal, party, fashion, and commercial styling.
            </p>
            <CampaignImageNote />
          </SlideUp>

          <FadeIn delay={0.2}>
            <PortfolioGallery />
          </FadeIn>

          <SlideUp delay={0.4} className="mt-28 border-t border-metallic-gold/25 pt-16 text-center">
            <h2 className="font-serif text-4xl text-deep-espresso">Envision your look</h2>
            <p className="mx-auto mt-5 max-w-xl text-base font-light leading-7 text-soft-espresso/75">
              Send your event details and references to discuss bridal, editorial, party, or online consultation availability.
            </p>
            <a
              href={whatsappLinks.general}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-pulse mt-9 inline-flex bg-deep-espresso px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-blush-paper transition-colors hover:bg-metallic-gold hover:text-deep-espresso"
            >
              Start on WhatsApp
            </a>
          </SlideUp>
        </div>
      </div>

      <FAQSection faqs={faqs} />
      <InternalLinkSection />
    </>
  );
}
