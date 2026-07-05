import Hero from '@/components/Hero';
import Image from 'next/image';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'LayeR by Laya | Premium Kit Audit',
  description: 'Discover luxury kit audit services by Laya. Specializing in high-end beauty, editorial looks, and virtual consultations.',
  alternates: {
    canonical: 'https://layerbylaya.com/personal-makeup-kit-audit',
  },
  openGraph: {
    images: [{ url: '/assets/images/enhanced/hero/home-hero.jpg' }]
  }
};

export default function KitAuditPage() {
  const whatsappBookLink = "https://wa.me/971547467995?text=Hi%20Laya%2C%20I%20would%20like%20to%20book%20an%20online%20makeup%20consultation.%20Please%20share%20available%20slots%20and%20pricing.";

  return (
    <>
      <JsonLd pageSchema={{
        "@type": "Service",
        "url": "https://layerbylaya.com/personal-makeup-kit-audit",
        "name": "LayeR Service: personal makeup kit audit"
      }} />
      <Hero 
        title="Personal Kit Audit"
        subtitle="Curate Your Arsenal"
        imageSrc="/assets/images/enhanced/online/kit-audit.jpg"
        imageAlt="Makeup Kit Audit"
        ctaText="Book Kit Audit"
        ctaLink={whatsappBookLink}
      />

      <section className="py-24 px-6 lg:px-12 bg-surface-container">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-deep-espresso">
              Eliminate the Noise
            </h2>
            <p className="text-lg opacity-80 leading-relaxed font-light">
              Stop buying products that don't suit you. We will go through your current makeup bag product by product via video call. We evaluate formulas, shades, and tools against your skin type and goals.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="bg-blush-paper p-6 flex-1 text-center border border-deep-espresso/10">
                <h4 className="uppercase tracking-widest text-xs text-metallic-gold mb-2">Keep</h4>
                <p className="text-sm font-light opacity-80">What perfectly matches your needs.</p>
              </div>
              <div className="bg-blush-paper p-6 flex-1 text-center border border-deep-espresso/10">
                <h4 className="uppercase tracking-widest text-xs text-metallic-gold mb-2">Replace</h4>
                <p className="text-sm font-light opacity-80">Curated recommendations to fill the gaps.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative aspect-square w-full">
             <Image src="/assets/images/enhanced/online/kit-audit.jpg" alt="Kit Layout" fill className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
