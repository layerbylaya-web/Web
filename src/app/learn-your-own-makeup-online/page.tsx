import Hero from '@/components/Hero';
import Image from 'next/image';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'LayeR by Laya | Premium Learn Makeup',
  description: 'Discover luxury learn makeup services by Laya. Specializing in high-end beauty, editorial looks, and virtual consultations.',
  alternates: {
    canonical: 'https://layerbylaya.com/learn-your-own-makeup-online',
  },
  openGraph: {
    images: [{ url: '/assets/images/enhanced/hero/home-hero.jpg' }]
  }
};

export default function LearnMakeupPage() {
  const whatsappBookLink = "https://wa.me/971547467995?text=Hi%20Laya%2C%20I%20would%20like%20to%20book%20an%20online%20makeup%20consultation.%20Please%20share%20available%20slots%20and%20pricing.";

  return (
    <>
      <JsonLd pageSchema={{
        "@type": "Service",
        "url": "https://layerbylaya.com/learn-your-own-makeup-online",
        "name": "LayeR Service: learn your own makeup online"
      }} />
      <Hero 
        title="Learn Your Own Makeup"
        subtitle="Empowered Artistry"
        imageSrc="/assets/images/ai-editorial/online-consultation-luxury.jpg"
        imageAlt="Masterclass Setup"
        ctaText="Book Masterclass"
        ctaLink={whatsappBookLink}
      />

      <section className="py-24 px-6 lg:px-12 bg-blush-paper">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8 mb-24">
          <h2 className="text-4xl md:text-5xl font-serif text-deep-espresso">
            Master Your Own Canvas
          </h2>
          <p className="max-w-2xl text-lg opacity-80 leading-relaxed font-light">
            A live, interactive 1-on-1 virtual masterclass where you hold the brush. We guide you step-by-step through a full face application, correcting techniques and explaining the 'why' behind every movement.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-l border-metallic-gold/30 pl-8 pb-8">
            <span className="text-4xl font-serif text-metallic-gold/20 block mb-4">01</span>
            <h3 className="text-xl font-serif text-deep-espresso mb-4">Preparation</h3>
            <p className="text-sm opacity-80 font-light leading-relaxed">Prior to the session, we evaluate your current skill level and identify the specific looks you want to master.</p>
          </div>
          <div className="border-l border-metallic-gold/30 pl-8 pb-8">
            <span className="text-4xl font-serif text-metallic-gold/20 block mb-4">02</span>
            <h3 className="text-xl font-serif text-deep-espresso mb-4">Live Session</h3>
            <p className="text-sm opacity-80 font-light leading-relaxed">A 90-minute guided application. You apply makeup to one side of your face while receiving real-time corrections and technique adjustments.</p>
          </div>
          <div className="border-l border-metallic-gold/30 pl-8 pb-8">
            <span className="text-4xl font-serif text-metallic-gold/20 block mb-4">03</span>
            <h3 className="text-xl font-serif text-deep-espresso mb-4">The Blueprint</h3>
            <p className="text-sm opacity-80 font-light leading-relaxed">Receive a detailed post-session face chart, product list, and step-by-step guide to ensure you can recreate the look effortlessly.</p>
          </div>
        </div>
      </section>
    </>
  );
}
