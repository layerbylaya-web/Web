import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import BookingForm from '@/components/BookingForm';
import { EditorialImage, FAQSection, InternalLinkSection, SectionIntro } from '@/components/PremiumSections';
import { breadcrumbSchema, commonFaqs, faqSchema, generatedImages, pageMetadata, siteUrl, whatsappLinks } from '@/lib/site';
import { siteContent } from '@/data/siteContent';

export const metadata: Metadata = pageMetadata({
  title: 'Contact LayeR by Laya',
  description: 'Contact LayeR by Laya for makeup and hair Dubai, bridal makeup Kerala, editorial beauty, commercial production, and online makeup consultation bookings.',
  path: '/contact',
  image: generatedImages.brandDetailOne,
});

const faqs = [
  {
    question: 'What should I send when I contact Laya?',
    answer: 'Share your event date, city, venue if known, service type, timing, outfit or reference images, and whether you need makeup, hair, or online consultation.',
  },
  {
    question: 'Can I inquire for both Dubai and Kerala?',
    answer: 'Yes. Use the specific WhatsApp inquiry route for UAE bridal, Kerala bridal, or general services so Laya can respond with the right availability context.',
  },
  ...commonFaqs,
];

export default function ContactPage() {
  return (
    <>
      <JsonLd pageSchema={[
        {
          '@type': 'ContactPage',
          url: `${siteUrl}/contact`,
          name: 'Contact LayeR by Laya',
          description: metadata.description,
        },
        faqSchema(faqs),
        breadcrumbSchema([{ name: 'Contact & Booking', path: '/contact' }]),
      ]} />
      <div className="luxury-gradient min-h-screen px-5 pb-20 pt-32 lg:px-12 lg:pt-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <EditorialImage
            src={generatedImages.brandDetailOne}
            alt="Editorial brand mood visual for contacting LayeR by Laya"
            aspect="aspect-[4/5]"
            objectPosition="center"
            priority
          />

          <div className="space-y-10">
            <div>
              <h1 className="text-balance font-serif text-5xl leading-tight text-deep-espresso md:text-7xl">
                {siteContent.contact.h1}
              </h1>
              <p className="mt-7 text-lg font-light leading-8 text-soft-espresso/78">
                {siteContent.contact.intro}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a href={whatsappLinks.general} target="_blank" rel="noopener noreferrer" className="whatsapp-pulse bg-deep-espresso px-6 py-5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-blush-paper transition-colors hover:bg-metallic-gold hover:text-deep-espresso">
                General WhatsApp
              </a>
              <a href={whatsappLinks.bridalDubai} target="_blank" rel="noopener noreferrer" className="border border-deep-espresso/25 px-6 py-5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-deep-espresso transition-colors hover:border-metallic-gold hover:text-deep-gold">
                UAE Bridal
              </a>
              <a href={whatsappLinks.bridalKerala} target="_blank" rel="noopener noreferrer" className="border border-deep-espresso/25 px-6 py-5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-deep-espresso transition-colors hover:border-metallic-gold hover:text-deep-gold">
                Kerala Bridal
              </a>
              <a href={whatsappLinks.online} target="_blank" rel="noopener noreferrer" className="border border-deep-espresso/25 px-6 py-5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-deep-espresso transition-colors hover:border-metallic-gold hover:text-deep-gold">
                Online Session
              </a>
            </div>

            <div className="border-t border-metallic-gold/25 pt-8 text-sm font-light leading-7 text-soft-espresso/76">
              <p>WhatsApp: +971 54 746 7995</p>
              <p>Based in Dubai and Kerala</p>
              <p>Available for selected destination and online bookings</p>
            </div>
          </div>
        </div>
      </div>

      <div className="gold-section-divider" aria-hidden="true" />
      <section id="book" className="champagne-mesh scroll-mt-24 px-5 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <SectionIntro
            title="Send a detailed enquiry"
            body="Date, location, event type, service needs, references, and timing help Laya respond with the most useful next step. Prefer chat? Every field below can also be sent straight to WhatsApp."
          />
          <div className="mt-12">
            <BookingForm />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <InternalLinkSection />
    </>
  );
}
