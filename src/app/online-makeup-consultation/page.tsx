import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'LayeR by Laya | Premium Online Consultation',
  description: 'Discover luxury online consultation services by Laya. Specializing in high-end beauty, editorial looks, and virtual consultations.',
  alternates: {
    canonical: 'https://layerbylaya.com/online-makeup-consultation',
  },
  openGraph: {
    images: [{ url: '/assets/images/ai-editorial/online-consultation-luxury.jpg' }]
  }
};

export default function OnlineConsultationPage() {
  const whatsappBookLink = "https://wa.me/971547467995?text=Hi%20Laya%2C%20I%20would%20like%20to%20book%20an%20online%20makeup%20consultation.%20Please%20share%20available%20slots%20and%20pricing.";

  const onlineServices = [
    {
      title: 'Daily Makeup Consultation',
      desc: 'Master a 15-minute routine tailored entirely to your skin type, bone structure, and lifestyle.',
      image: '/assets/images/enhanced/online/daily-routine.jpg',
      href: '/daily-makeup-consultation'
    },
    {
      title: 'Personal Kit Audit',
      desc: 'A ruthless, honest review of your current makeup bag. Keep what works, toss what doesn\'t.',
      image: '/assets/images/enhanced/online/kit-audit.jpg',
      href: '/personal-makeup-kit-audit'
    },
    {
      title: 'Learn Your Own Makeup',
      desc: 'A comprehensive step-by-step masterclass on your own face, guided live.',
      image: '/assets/images/enhanced/online/learn-makeup-clean.jpg',
      href: '/learn-your-own-makeup-online'
    }
  ];

  return (
    <>
      <JsonLd pageSchema={{
        "@type": "Service",
        "url": "https://layerbylaya.com/online-makeup-consultation",
        "image": "https://layerbylaya.com/assets/images/ai-editorial/online-consultation-luxury.jpg",
        "name": "LayeR Service: online makeup consultation"
      }} />
      <Hero 
        title="Online Consultations"
        subtitle="Global Expertise, Delivered Vertically"
        imageSrc="/assets/images/ai-editorial/online-consultation-luxury.jpg"
        imageAlt="Online Makeup Consultation"
        objectPosition="center center"
        ctaText="Book a Session"
        ctaLink={whatsappBookLink}
      />

      <section className="py-24 px-6 lg:px-12 bg-deep-espresso text-blush-paper">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Master Your Canvas</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80 font-light">
            No matter where you are in the world, gain access to professional techniques adapted exclusively for your features. No generic tutorials—just personalized, actionable guidance.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-24">
          {onlineServices.map((svc, i) => (
            <div key={svc.title} className={`flex flex-col lg:flex-row items-center gap-12 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="relative aspect-[4/5] w-full lg:w-1/2 overflow-hidden group">
                <Link href={svc.href}>
                  <Image src={svc.image} alt={svc.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </Link>
              </div>
              <div className="w-full lg:w-1/2 lg:px-8 space-y-6 text-center lg:text-left">
                <h3 className="text-3xl md:text-5xl font-serif text-metallic-gold mb-4">{svc.title}</h3>
                <p className="text-lg opacity-80 font-light mb-8">{svc.desc}</p>
                <Link href={svc.href} className="inline-block px-8 py-4 border border-metallic-gold text-metallic-gold hover:bg-metallic-gold hover:text-deep-espresso transition-all uppercase tracking-widest text-xs">
                  Discover {svc.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
