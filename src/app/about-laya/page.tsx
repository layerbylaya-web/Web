import Image from 'next/image';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'LayeR by Laya | Premium About Laya',
  description: 'Discover luxury about laya services by Laya. Specializing in high-end beauty, editorial looks, and virtual consultations.',
  alternates: {
    canonical: 'https://layerbylaya.com/about-laya',
  },
  openGraph: {
    images: [{ url: '/assets/images/enhanced/hero/home-hero.jpg' }]
  }
};

export default function AboutPage() {
  return (
    <>
      <JsonLd pageSchema={{
        "@type": "Service",
        "url": "https://layerbylaya.com/about-laya",
        "name": "LayeR Service: about laya"
      }} />
<div className="pt-24 min-h-screen bg-surface-container">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] w-full">
            <Image src="/assets/images/enhanced/hero/home-method-detail.jpg" alt="Laya - Founder of LayeR" fill className="object-cover" />
          </div>
          <div className="space-y-8">
            <p className="text-xs tracking-[0.3em] uppercase text-metallic-gold mb-6 font-medium">
              The Founder
            </p>
            <h1 className="text-5xl lg:text-7xl font-serif text-deep-espresso">
              Meet Laya
            </h1>
            <p className="text-lg opacity-80 leading-relaxed font-light">
              Laya’s philosophy is rooted in the belief that makeup should never mask, but reveal. With extensive training and years of experience across luxury bridal, fashion editorials, and commercial productions in Dubai and Kerala, she has perfected the art of the 'sublime change'.
            </p>
            <p className="text-lg opacity-80 leading-relaxed font-light">
              Her signature approach—the LayeR Method—focuses on flawless skin architecture, creating radiant, enduring looks that photograph beautifully while remaining weightless in person.
            </p>
            
            <blockquote className="border-l border-metallic-gold/50 pl-6 my-8">
              <p className="text-2xl font-serif italic text-deep-espresso">
                "Beauty is not about changing who you are. It is about removing the noise to unveil the truest, most refined layer of yourself."
              </p>
            </blockquote>
            
            <div className="pt-8 border-t border-deep-espresso/10">
              <h3 className="text-xs uppercase tracking-widest text-metallic-gold mb-4">Credentials</h3>
              <ul className="space-y-2 text-sm font-light opacity-80">
                <li>Professional Artistry Certification</li>
                <li>International Editorial & Campaign Experience</li>
                <li>Bridal Expertise (UAE & India)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
