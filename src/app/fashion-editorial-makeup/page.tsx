import Hero from '@/components/Hero';
import Image from 'next/image';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'LayeR by Laya | Premium Editorial',
  description: 'Discover luxury editorial services by Laya. Specializing in high-end beauty, editorial looks, and virtual consultations.',
  alternates: {
    canonical: 'https://layerbylaya.com/fashion-editorial-makeup',
  },
  openGraph: {
    images: [{ url: '/assets/images/enhanced/hero/home-hero.jpg' }]
  }
};

export default function EditorialPage() {
  const whatsappBookLink = "https://wa.me/971547467995?text=Hi%20Laya%2C%20I%20need%20makeup%20and%20hair%20styling%20for%20a%20shoot.%20Please%20share%20your%20availability%20for%20commercial%20or%20production%20work.";

  return (
    <>
      <JsonLd pageSchema={{
        "@type": "Service",
        "url": "https://layerbylaya.com/fashion-editorial-makeup",
        "name": "LayeR Service: fashion editorial makeup"
      }} />
      <Hero 
        title="Fashion & Editorial"
        subtitle="Campaign Ready"
        imageSrc="/assets/images/enhanced/editorial/fashion-editorial-hero.jpg"
        imageAlt="Fashion and Editorial Makeup Artistry"
        ctaText="Book Editorial"
        ctaLink={whatsappBookLink}
      />

      <section className="py-24 px-6 lg:px-12 bg-blush-paper">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8 mb-24">
          <h2 className="text-4xl md:text-6xl font-serif text-deep-espresso max-w-3xl">
            Artistry Without Boundaries
          </h2>
          <p className="text-lg opacity-80 leading-relaxed font-light max-w-2xl">
            From striking avant-garde concepts to the perfect minimal "no-makeup" makeup for luxury campaigns. We collaborate with photographers, stylists, and creative directors to craft visual narratives that command attention.
          </p>
        </div>

        {/* Asymmetric Editorial Gallery */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="md:col-span-5 relative aspect-[3/4] w-full">
            <Image src="/assets/images/ai-editorial/beauty-closeup-luxury.jpg" alt="Editorial Beauty Concept" fill className="object-cover" />
          </div>
          <div className="md:col-span-7 relative aspect-video w-full">
            <Image src="/assets/images/enhanced/editorial/beauty-closeup.jpg" alt="Macro Texture" fill className="object-cover" />
          </div>
          
          <div className="md:col-span-8 relative aspect-[16/9] w-full mt-12">
            <Image src="/assets/images/enhanced/portfolio/portfolio-03.jpg" alt="Fashion Story" fill className="object-cover object-top" />
          </div>
          <div className="md:col-span-4 relative aspect-[4/5] w-full mt-12">
            <Image src="/assets/images/enhanced/portfolio/portfolio-12.jpg" alt="Model Portrait" fill className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
