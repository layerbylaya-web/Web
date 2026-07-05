import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { FAQSection, InternalLinkSection } from '@/components/PremiumSections';
import { commonFaqs, faqSchema, generatedImages, pageMetadata } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'FAQ',
  description: 'Frequently asked questions about LayeR by Laya bridal makeup Dubai, bridal makeup Kerala, makeup and hair Dubai, online consultation, daily makeup, and kit audit bookings.',
  path: '/faq',
  image: generatedImages.homeHero,
});

const faqs = [
  {
    question: 'Do you provide bridal makeup in Dubai?',
    answer: 'Yes. LayeR offers bridal makeup artist Dubai services for weddings, engagements, receptions, civil ceremonies, and South Indian bridal looks.',
  },
  {
    question: 'Do you provide bridal makeup in Kerala?',
    answer: 'Yes. Selected bridal makeup Kerala, bridal makeup artist Kerala, and bridal makeup artist Kottayam bookings can be discussed early by WhatsApp.',
  },
  {
    question: 'Can I book makeup and hair together?',
    answer: 'Yes. Makeup and hair can be planned as one complete look for bridal, party, editorial, commercial, and event bookings.',
  },
  {
    question: 'Do you travel for destination weddings?',
    answer: 'Selected destination bookings can be discussed early. Travel, accommodation, timing, and multi-event needs are reviewed before confirming availability.',
  },
  {
    question: 'How far in advance should I book bridal makeup?',
    answer: 'For Dubai and Kerala bridal dates, earlier is better. Share your date and location through WhatsApp as soon as the wedding timeline is clear.',
  },
  {
    question: 'Do you offer hair styling as well as makeup?',
    answer: 'Yes. LayeR offers makeup and hair styling for bridal, party, editorial, and selected production bookings.',
  },
  {
    question: 'How do online consultations work?',
    answer: 'Online consultations are one-to-one video sessions for daily routine, kit audit, bridal planning, or learning your own makeup with real-time correction.',
  },
  {
    question: 'Can you help me choose products for my skin tone?',
    answer: 'Yes. A makeup kit audit online reviews shades, formulas, tools, gaps, and replacements around your skin tone, skin type, budget, and routine.',
  },
  {
    question: 'Do you provide makeup for photoshoots and commercial productions?',
    answer: 'Yes. LayeR offers fashion makeup artist Dubai and commercial makeup artist Dubai support for campaigns, shoots, corporate video, and social content.',
  },
  {
    question: 'How do I book Laya on WhatsApp?',
    answer: 'Share your date, location, service, outfit or reference mood, timing, and any skin concerns so Laya can recommend the right next step.',
  },
  ...commonFaqs,
];

export default function FAQPage() {
  return (
    <>
      <JsonLd pageSchema={faqSchema(faqs)} />
      <div className="luxury-gradient px-5 pb-8 pt-32 text-center lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-balance font-serif text-5xl leading-tight text-deep-espresso md:text-7xl">
            LayeR by Laya FAQ
          </h1>
          <p className="mt-7 text-lg font-light leading-8 text-soft-espresso/78">
            Answers for Dubai, Kerala, online consultation, bridal bookings, product guidance, and makeup and hair services.
          </p>
        </div>
      </div>
      <FAQSection faqs={faqs} title="Frequently asked questions" />
      <InternalLinkSection />
    </>
  );
}
