import Hero from '@/components/Hero';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { EditorialImage, FAQSection, InternalLinkSection, SectionIntro, ServiceList } from '@/components/PremiumSections';
import { breadcrumbSchema, commonFaqs, faqSchema, generatedImages, pageMetadata, serviceSchema, whatsappLinks } from '@/lib/site';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = pageMetadata({
  title: 'Personal Makeup Kit Audit Online',
  description: 'Makeup kit audit online by LayeR by Laya with a premium keep, remove, replace product review for formulas, shades, tools, and daily routine gaps.',
  path: '/personal-makeup-kit-audit',
  image: generatedImages.kitAuditApproved,
});

const faqs = [
  {
    question: 'What happens during a makeup kit audit online?',
    answer: 'Laya reviews your products and tools on video call, checks shade, formula, expiry, use case, and fit, then sorts them into keep, remove, and replace decisions.',
  },
  {
    question: 'Do I need to buy products before the audit?',
    answer: 'No. The audit starts with what you already own so you avoid unnecessary buying and understand what genuinely serves your face and routine.',
  },
  {
    question: 'Can the kit audit support bridal planning?',
    answer: 'Yes. It can identify what you can use for events, what belongs in a bridal touch-up kit, and what should be replaced before the wedding.',
  },
  ...commonFaqs.slice(0, 1),
];

export default function KitAuditPage() {
  return (
    <>
      <JsonLd pageSchema={[
        breadcrumbSchema([{ name: 'Personal Makeup Kit Audit', path: '/personal-makeup-kit-audit' }]),
        serviceSchema({
          path: '/personal-makeup-kit-audit',
          name: 'Makeup kit audit online',
          description: metadata.description || '',
          image: generatedImages.kitAuditApproved,
        }),
        faqSchema(faqs),
      ]} />
      <Hero
        title={siteContent.kitAudit.h1}
        subtitle="Keep, remove, replace"
        description={siteContent.kitAudit.intro}
        imageSrc={generatedImages.kitAuditApproved}
        imageAlt="Approved makeup kit audit campaign visual"
        objectPosition="center 32%"
        ctaText="Book Kit Audit"
        ctaLink={whatsappLinks.online}
        secondaryCtaText="Daily Routine"
        secondaryCtaLink="/daily-makeup-consultation"
      />

      <section className="rose-gold-gradient px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <EditorialImage
            src={generatedImages.kitAuditApproved}
            alt="Approved kit audit product image with hands and labels kept secondary"
            aspect="aspect-[4/5]"
            objectPosition="center 34%"
          />
          <div className="space-y-10">
            <SectionIntro
              align="left"
              title="A calm edit for the products you actually use"
              body="The audit turns a crowded bag into a clear routine. Products are reviewed by shade, texture, longevity, skin compatibility, and how often they serve your real life."
            />
            <ServiceList
              items={[
                { title: 'Keep', body: 'The formulas, shades, brushes, and staples that truly suit your skin and routine.' },
                { title: 'Remove', body: 'Expired, duplicate, wrong-tone, or high-effort products that create clutter.' },
                { title: 'Replace', body: 'A precise shopping note for gaps, with budget and use case considered.' },
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
