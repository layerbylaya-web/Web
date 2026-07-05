import Hero from '@/components/Hero';
import Image from 'next/image';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'LayeR by Laya | Premium Bridal Kerala',
  description: 'Discover luxury bridal kerala services by Laya. Specializing in high-end beauty, editorial looks, and virtual consultations.',
  alternates: {
    canonical: 'https://layerbylaya.com/bridal-makeup-kerala',
  },
  openGraph: {
    images: [{ url: '/assets/images/ai-editorial/bridal-kerala-luxury.jpg' }]
  }
};

export default function BridalKeralaPage() {
  const whatsappBookLink = "https://wa.me/971547467995?text=Hi%20Laya%2C%20I%20am%20looking%20for%20bridal%20makeup%20and%20hair%20in%20Kerala.%20Please%20share%20your%20bridal%20packages%20and%20availability.";

  return (
    <>
      <JsonLd pageSchema={{
        "@type": "Service",
        "url": "https://layerbylaya.com/bridal-makeup-kerala",
        "name": "LayeR Service: bridal makeup kerala"
      }} />
      <Hero 
        title="Bridal Makeup Kerala"
        subtitle="Cultural Radiance"
        imageSrc="/assets/images/ai-editorial/bridal-kerala-luxury.jpg"
        imageAlt="Bridal Makeup Kerala"
        objectPosition="center 25%"
        ctaText="Book Kerala Bridal"
        ctaLink={whatsappBookLink}
      />

      <section className="py-24 px-6 lg:px-12 bg-blush-paper">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-16 items-center">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-deep-espresso">
              Honoring Tradition with Modern Elegance
            </h2>
            <p className="text-lg opacity-80 leading-relaxed font-light">
              We bring luxury bridal artistry to Kerala, beautifully balancing cultural heritage with contemporary sophistication. From the intricate adornment of jasmine in your hair to the flawless finish that complements traditional gold jewelry and rich silk sarees, every detail is perfected.
            </p>
          </div>
          <div className="lg:w-1/2 relative aspect-[4/5] w-full">
            <Image src="/assets/images/ai-editorial/bridal-kerala-luxury.jpg" alt="Kerala Bridal Artistry" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-deep-espresso text-surface-container">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif text-white">Serving Kochi, Kottayam & Beyond</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80 font-light">
            Available for church weddings, temple ceremonies, and grand receptions across Kerala. We manage the styling timeline seamlessly so you can immerse yourself fully in your special day.
          </p>
          <a 
            href={whatsappBookLink}
            className="inline-block mt-8 px-10 py-4 bg-metallic-gold text-deep-espresso hover:bg-white transition-all uppercase tracking-widest text-sm"
          >
            Inquire Availability
          </a>
        </div>
      </section>
    </>
  );
}
