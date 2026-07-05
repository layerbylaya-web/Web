import Hero from '@/components/Hero';
import Image from 'next/image';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'LayeR by Laya | Premium Bridal Dubai',
  description: 'Discover luxury bridal dubai services by Laya. Specializing in high-end beauty, editorial looks, and virtual consultations.',
  alternates: {
    canonical: 'https://layerbylaya.com/bridal-makeup-dubai',
  },
  openGraph: {
    images: [{ url: '/assets/images/ai-editorial/bridal-dubai-luxury.jpg' }]
  }
};

export default function BridalDubaiPage() {
  const whatsappBookLink = "https://wa.me/971547467995?text=Hi%20Laya%2C%20I%20am%20looking%20for%20bridal%20makeup%20and%20hair%20in%20UAE.%20Please%20share%20your%20bridal%20packages%20and%20availability.";

  return (
    <>
      <JsonLd pageSchema={{
        "@type": "Service",
        "url": "https://layerbylaya.com/bridal-makeup-dubai",
        "name": "LayeR Service: bridal makeup dubai"
      }} />
      <Hero 
        title="Bridal Makeup UAE"
        subtitle="Enduring Elegance"
        imageSrc="/assets/images/ai-editorial/bridal-dubai-luxury.jpg"
        imageAlt="Bridal Makeup Dubai"
        objectPosition="center 35%"
        ctaText="Book UAE Bridal"
        ctaLink={whatsappBookLink}
      />

      <section className="py-24 px-6 lg:px-12 bg-blush-paper">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-deep-espresso">
              Your Vision, Flawlessly Executed
            </h2>
            <p className="text-lg opacity-80 leading-relaxed font-light">
              From sophisticated civil ceremonies to grand hotel receptions, our UAE bridal services are designed to withstand the region's climate while maintaining a radiant, weightless finish. We specialize in both soft romantic glam and striking Arabic-inspired bridal artistry.
            </p>
          </div>
          <div className="lg:w-1/2 relative aspect-square w-full">
            <Image src="/assets/images/enhanced/bridal/bridal-engagement.jpg" alt="Engagement Look" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-surface-container">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-deep-espresso">The Bridal Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative aspect-[3/4] w-full group overflow-hidden">
               <Image src="/assets/images/enhanced/bridal/bridal-reception.jpg" alt="Reception Glam" fill className="object-cover" />
               <div className="absolute inset-0 bg-deep-espresso/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                 <h3 className="text-white font-serif text-2xl">Reception Glam</h3>
               </div>
            </div>
            <div className="relative aspect-[3/4] w-full group overflow-hidden hidden md:block">
               <Image src="/assets/images/enhanced/party/party-glam-hero.jpg" alt="Engagement & Henna" fill className="object-cover" />
               <div className="absolute inset-0 bg-deep-espresso/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                 <h3 className="text-white font-serif text-2xl">Engagement</h3>
               </div>
            </div>
            <div className="relative aspect-[3/4] w-full group overflow-hidden">
               <Image src="/assets/images/enhanced/editorial/beauty-closeup.jpg" alt="Bridal Details" fill className="object-cover" />
               <div className="absolute inset-0 bg-deep-espresso/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                 <h3 className="text-white font-serif text-2xl">Civil Ceremony</h3>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
