import Hero from '@/components/Hero';
import Image from 'next/image';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'LayeR by Laya | Premium Daily Routine',
  description: 'Discover luxury daily routine services by Laya. Specializing in high-end beauty, editorial looks, and virtual consultations.',
  alternates: {
    canonical: 'https://layerbylaya.com/daily-makeup-consultation',
  },
  openGraph: {
    images: [{ url: '/assets/images/enhanced/hero/home-hero.jpg' }]
  }
};

export default function DailyConsultationPage() {
  const whatsappBookLink = "https://wa.me/971547467995?text=Hi%20Laya%2C%20I%20would%20like%20to%20book%20an%20online%20makeup%20consultation.%20Please%20share%20available%20slots%20and%20pricing.";

  return (
    <>
      <JsonLd pageSchema={{
        "@type": "Service",
        "url": "https://layerbylaya.com/daily-makeup-consultation",
        "name": "LayeR Service: daily makeup consultation"
      }} />
      <Hero 
        title="Daily Makeup Consultation"
        subtitle="Your Signature Look"
        description="Master a 15-minute routine tailored entirely to your skin type, bone structure, and lifestyle."
        imageSrc="/assets/images/ai-editorial/beauty-closeup-luxury.jpg"
        objectPosition="center 20%"
        priority={true}
        imageAlt="Daily Makeup Routine"
        ctaText="Book Consultation"
        ctaLink={whatsappBookLink}
      />

      <section className="py-24 px-6 lg:px-12 bg-blush-paper">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8 mb-24">
          <h2 className="text-4xl md:text-5xl font-serif text-deep-espresso">
            The 15-Minute Mastery
          </h2>
          <p className="max-w-2xl text-lg opacity-80 leading-relaxed font-light">
            Achieve a flawless, effortless look every single morning. We analyze your face virtually and design a realistic, high-impact routine tailored exclusively to your features and lifestyle.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-serif text-center mb-12 text-deep-espresso">The Routine Sequence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: '01', name: 'Skin Prep', desc: 'Hydration & Priming' },
              { step: '02', name: 'The Base', desc: 'Conceal & Perfect' },
              { step: '03', name: 'Structure', desc: 'Subtle Contour & Flush' },
              { step: '04', name: 'Eyes', desc: 'Definition & Lift' },
              { step: '05', name: 'Finish', desc: 'Lips & Setting' }
            ].map((item) => (
              <div key={item.step} className="bg-surface-container p-8 text-center flex flex-col items-center justify-center border border-deep-espresso/5 hover:border-metallic-gold/30 transition-colors">
                <span className="text-metallic-gold text-lg font-serif mb-4">{item.step}</span>
                <h4 className="text-deep-espresso uppercase tracking-widest text-xs mb-2 font-medium">{item.name}</h4>
                <p className="text-sm opacity-60 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
