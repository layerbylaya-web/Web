import Hero from '@/components/Hero';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { EditorialImage, FAQSection, InternalLinkSection, SectionIntro, ServiceList } from '@/components/PremiumSections';
import { commonFaqs, faqSchema, generatedImages, pageMetadata, serviceSchema, whatsappLinks } from '@/lib/site';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = pageMetadata({
  title: 'Fashion & Editorial Makeup Artist',
  description: 'Fashion makeup artist Dubai services by LayeR by Laya for beauty shoots, editorials, campaigns, model tests, creative productions, and camera-ready hair styling.',
  path: '/fashion-editorial-makeup',
  image: generatedImages.editorialOne,
});

const faqs = [
  {
    question: 'Do you work on fashion and editorial shoots in Dubai?',
    answer: 'Yes. LayeR supports beauty campaigns, model portfolios, editorial shoots, content shoots, and creative production days in Dubai.',
  },
  {
    question: 'Can the makeup be minimal or more experimental?',
    answer: 'Yes. The look can be barely-there luxury skin, graphic eyes, polished commercial beauty, or a more conceptual editorial direction.',
  },
  {
    question: 'Do you coordinate with photographers and stylists?',
    answer: 'Yes. Hair, skin, makeup, touch-up timing, and continuity can be planned around the shoot brief and production schedule.',
  },
  ...commonFaqs.slice(0, 1),
];

export default function EditorialPage() {
  return (
    <>
      <JsonLd pageSchema={[
        serviceSchema({
          path: '/fashion-editorial-makeup',
          name: 'Fashion and editorial makeup Dubai',
          description: metadata.description || '',
          image: generatedImages.editorialOne,
        }),
        faqSchema(faqs),
      ]} />
      <Hero
        title={siteContent.fashion.h1}
        subtitle="Campaign-ready beauty"
        description={siteContent.fashion.intro}
        imageSrc={generatedImages.editorialOne}
        imageAlt="Editorial beauty close-up campaign visual"
        objectPosition="center"
        ctaText="Book Editorial"
        ctaLink={whatsappLinks.production}
        supportingImageSrc={generatedImages.editorialTwo}
        supportingImageAlt="Second editorial beauty campaign visual"
      />

      <section className="rose-gold-gradient px-5 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            title="Beauty direction for the lens"
            body="Editorial work needs makeup that reads at distance, close-up, in motion, and under changing light. Every choice is made with the frame in mind."
          />
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-12">
            <EditorialImage src={generatedImages.editorialTwo} alt="Editorial makeup detail with clean skin and eyes" aspect="aspect-[4/5]" className="md:col-span-5" />
            <EditorialImage src={generatedImages.hairTwo} alt="Hair styling detail for editorial shoot" aspect="aspect-[16/10]" className="md:col-span-7 md:mt-20" />
            <EditorialImage src={generatedImages.brandDetailTwo} alt="Blush and champagne brand detail for editorial beauty direction" aspect="aspect-[16/9]" className="md:col-span-7" />
            <EditorialImage src={generatedImages.editorialOne} alt="Macro beauty close-up campaign visual" aspect="aspect-[4/5]" className="md:col-span-5 md:-mt-16" />
          </div>
        </div>
      </section>

      <section className="bg-blush-paper px-5 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            title="Creative production support"
            body="From clean luxury skin to stronger campaign statements, LayeR keeps continuity, touch-ups, and final frame quality in view."
          />
          <ServiceList
            items={[
              { title: 'Beauty campaign', body: 'Skin, eyes, lips, and hair polished for close-up campaign work.' },
              { title: 'Model portfolio', body: 'Versatile looks that show structure, freshness, and professional restraint.' },
              { title: 'Editorial concept', body: 'Creative detail with enough discipline to photograph cleanly.' },
            ]}
          />
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <InternalLinkSection />
    </>
  );
}
