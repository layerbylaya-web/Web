import Hero from '@/components/Hero';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { EditorialImage, FAQSection, InternalLinkSection, SectionIntro, ServiceList } from '@/components/PremiumSections';
import { breadcrumbSchema, commonFaqs, faqSchema, generatedImages, pageMetadata, serviceSchema, whatsappLinks } from '@/lib/site';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = pageMetadata({
  title: 'Party Makeup & Hair Styling',
  description: 'Party makeup artist Dubai and makeup and hair Dubai services by LayeR by Laya for soft glam, full glam, polished waves, sleek buns, and event-ready beauty.',
  path: '/party-makeup-and-hair',
  image: generatedImages.hairOne,
});

const faqs = [
  {
    question: 'Can I book makeup and hair together for a Dubai event?',
    answer: 'Yes. Party makeup and hair can be booked together for birthdays, receptions, dinners, engagement events, and photoshoots.',
  },
  {
    question: 'Do you offer both soft glam and full evening glam?',
    answer: 'Yes. The finish can stay soft and luminous or move into stronger eyes, sculpting, and evening structure depending on the event.',
  },
  {
    question: 'Can hair styling be booked without makeup?',
    answer: 'Selected hair styling requests can be discussed through WhatsApp depending on date, location, and timing.',
  },
  ...commonFaqs.slice(0, 1),
];

export default function PartyMakeupPage() {
  return (
    <>
      <JsonLd pageSchema={[
        breadcrumbSchema([{ name: 'Party Makeup & Hair', path: '/party-makeup-and-hair' }]),
        serviceSchema({
          path: '/party-makeup-and-hair',
          name: 'Party makeup and hair Dubai',
          description: metadata.description || '',
          image: generatedImages.hairOne,
        }),
        faqSchema(faqs),
      ]} />
      <Hero
        title={siteContent.party.h1}
        subtitle="Soft glam to evening polish"
        description={siteContent.party.intro}
        imageSrc={generatedImages.hairOne}
        imageAlt="Luxury hair styling campaign visual"
        objectPosition="center"
        ctaText="Book Event Styling"
        ctaLink={whatsappLinks.general}
        supportingImageSrc={generatedImages.hairTwo}
        supportingImageAlt="Second luxury hair styling campaign visual"
      />

      <section className="rose-gold-gradient px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <EditorialImage src={generatedImages.hairTwo} alt="Hair accessory and bun styling detail" aspect="aspect-[3/4]" objectPosition="center" />
            <EditorialImage src={generatedImages.editorialTwo} alt="Evening makeup editorial detail" aspect="aspect-[3/4]" objectPosition="center" className="mt-12" />
          </div>
          <div className="space-y-10">
            <SectionIntro
              align="left"
              title="A full look, not separate services"
              body="Makeup and hair are shaped together so waves, updos, skin, lashes, lips, and accessories feel intentional from every angle."
            />
            <ServiceList
              items={[
                { title: 'Soft glam', body: 'Luminous skin, gentle definition, and polished hair for daytime or intimate events.' },
                { title: 'Evening glam', body: 'More eye structure, sculpting, and long-wear details for celebrations and flash photography.' },
                { title: 'Hair finish', body: 'Textured waves, sleek styling, low buns, accessory placement, and event-ready hold.' },
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
