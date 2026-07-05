import Hero from '@/components/Hero';
import Image from 'next/image';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'LayeR by Laya | Premium Party Glam',
  description: 'Discover luxury party glam services by Laya. Specializing in high-end beauty, editorial looks, and virtual consultations.',
  alternates: {
    canonical: 'https://layerbylaya.com/party-makeup-and-hair',
  },
  openGraph: {
    images: [{ url: '/assets/images/enhanced/hero/home-hero.jpg' }]
  }
};

export default function PartyMakeupPage() {
  const whatsappBookLink = "https://wa.me/971547467995?text=Hi%20Laya%2C%20I%20would%20like%20to%20book%20makeup%20or%20hair%20styling.%20Please%20share%20your%20availability%20and%20packages.";

  return (
    <>
      <JsonLd pageSchema={{
        "@type": "Service",
        "url": "https://layerbylaya.com/party-makeup-and-hair",
        "name": "LayeR Service: party makeup and hair"
      }} />
      <Hero 
        title="Party Makeup & Hair"
        subtitle="Effortless Glamour"
        imageSrc="/assets/images/enhanced/party/party-glam-hero.jpg"
        imageAlt="Party Makeup and Hair Styling"
        ctaText="Book Event Styling"
        ctaLink={whatsappBookLink}
      />

      <section className="py-24 px-6 lg:px-12 bg-surface-container">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] w-full mt-12">
              <Image src="/assets/images/enhanced/party/hair-waves-detail.jpg" alt="Hair Texture Detail" fill className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] w-full mb-12">
              <Image src="/assets/images/enhanced/portfolio/portfolio-08.jpg" alt="Evening Glam" fill className="object-cover" />
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-deep-espresso">
              Camera-Ready for Every Occasion
            </h2>
            <p className="text-lg opacity-80 leading-relaxed font-light">
              Whether you desire a fresh, luminous soft glam or a structured, sultry Arabic-inspired look, we curate styles that make a statement. Paired with modern hair artistry—from sleek blowouts to textured waves—you'll arrive flawless and stay flawless all night.
            </p>
            <ul className="space-y-4 text-sm font-light uppercase tracking-widest opacity-80">
              <li className="flex items-center gap-4"><span className="w-8 h-[1px] bg-metallic-gold"></span> Soft Glam</li>
              <li className="flex items-center gap-4"><span className="w-8 h-[1px] bg-metallic-gold"></span> Full Evening Glam</li>
              <li className="flex items-center gap-4"><span className="w-8 h-[1px] bg-metallic-gold"></span> Textured Waves & Updos</li>
              <li className="flex items-center gap-4"><span className="w-8 h-[1px] bg-metallic-gold"></span> Photoshoot Prep</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
