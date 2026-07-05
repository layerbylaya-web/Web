import Hero from '@/components/Hero';
import Image from 'next/image';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'LayeR by Laya | Premium Commercial',
  description: 'Discover luxury commercial services by Laya. Specializing in high-end beauty, editorial looks, and virtual consultations.',
  alternates: {
    canonical: 'https://layerbylaya.com/commercial-makeup-artist-dubai',
  },
  openGraph: {
    images: [{ url: '/assets/images/enhanced/hero/home-hero.jpg' }]
  }
};

export default function CommercialPage() {
  const whatsappBookLink = "https://wa.me/971547467995?text=Hi%20Laya%2C%20I%20need%20makeup%20and%20hair%20styling%20for%20a%20shoot.%20Please%20share%20your%20availability%20for%20commercial%20or%20production%20work.";

  return (
    <>
      <JsonLd pageSchema={{
        "@type": "Service",
        "url": "https://layerbylaya.com/commercial-makeup-artist-dubai",
        "name": "LayeR Service: commercial makeup artist dubai"
      }} />
      <Hero 
        title="Commercial & Production"
        subtitle="On-Set Expertise"
        imageSrc="/assets/images/enhanced/commercial/commercial-shoot-hero.jpg"
        imageAlt="Commercial Production Makeup Dubai"
        ctaText="Hire for Production"
        ctaLink={whatsappBookLink}
      />

      <section className="py-24 px-6 lg:px-12 bg-surface-container">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative aspect-[4/3] w-full">
            <Image src="/assets/images/enhanced/commercial/on-set-touchup.jpg" alt="On Set Touchup" fill className="object-cover" />
          </div>
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-deep-espresso">
              Seamless Continuity, Flawless Execution
            </h2>
            <p className="text-lg opacity-80 leading-relaxed font-light">
              We understand the pace and precision required on set. From high-definition television and corporate interviews to large-scale commercial productions, we provide efficient, camera-ready grooming and makeup that maintains continuity throughout long shooting days.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-deep-espresso/20">
              <div>
                <h3 className="text-xl font-serif text-deep-espresso mb-4">Female Talent</h3>
                <p className="text-sm opacity-80 font-light">HD-ready makeup, subtle contouring, and polished hair styling tailored to the creative brief.</p>
              </div>
              <div>
                <h3 className="text-xl font-serif text-deep-espresso mb-4">Male Grooming</h3>
                <p className="text-sm opacity-80 font-light">Anti-shine skin prep, natural complexion evening, and sharp, structured hair grooming.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
