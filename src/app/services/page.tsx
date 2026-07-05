import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'LayeR by Laya | Premium Services',
  description: 'Discover luxury services services by Laya. Specializing in high-end beauty, editorial looks, and virtual consultations.',
  alternates: {
    canonical: 'https://layerbylaya.com/services',
  },
  openGraph: {
    images: [{ url: '/assets/images/enhanced/hero/home-hero.jpg' }]
  }
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Bridal Makeup Dubai',
      description: 'Luxury bridal styling in the UAE, tailored for the modern, elegant bride.',
      image: '/assets/images/enhanced/bridal/bridal-dubai-hero.jpg',
      href: '/bridal-makeup-dubai'
    },
    {
      title: 'Bridal Makeup Kerala',
      description: 'Culturally rich, refined bridal looks honoring traditions in Kerala.',
      image: '/assets/images/enhanced/bridal/bridal-kerala-hero.jpg',
      href: '/bridal-makeup-kerala'
    },
    {
      title: 'Party Makeup & Hair',
      description: 'Soft glam, full glam, and effortless hair textures for special events.',
      image: '/assets/images/enhanced/party/party-glam-hero.jpg',
      href: '/party-makeup-and-hair'
    },
    {
      title: 'Fashion & Editorial',
      description: 'High-fashion, campaign-ready artistry for shoots and portfolios.',
      image: '/assets/images/enhanced/editorial/fashion-editorial-hero.jpg',
      href: '/fashion-editorial-makeup'
    },
    {
      title: 'Commercial & Production',
      description: 'On-set makeup and grooming for TV, commercials, and corporate shoots.',
      image: '/assets/images/enhanced/commercial/commercial-shoot-hero.jpg',
      href: '/commercial-makeup-artist-dubai'
    },
    {
      title: 'Online Consultations',
      description: 'Global 1-on-1 virtual sessions for daily routines, kit audits, and makeup lessons.',
      image: '/assets/images/enhanced/online/online-consultation-hero.jpg',
      href: '/online-makeup-consultation'
    }
  ];

  return (
    <>
      <JsonLd pageSchema={{
        "@type": "Service",
        "url": "https://layerbylaya.com/services",
        "name": "LayeR Service: services"
      }} />
<div className="pt-24 min-h-screen bg-surface-container">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 text-center">
        <h1 className="text-5xl lg:text-7xl font-serif text-deep-espresso mb-8">Our Services</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-80 leading-relaxed font-light">
          Whether you're stepping in front of a camera, walking down the aisle, or redefining your daily routine from afar—our services are crafted to unveil your true layer.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="space-y-32">
          {services.map((svc, i) => (
            <div key={svc.title} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="relative aspect-[4/5] w-full lg:w-1/2 overflow-hidden group">
                <Link href={svc.href}>
                  <Image 
                    src={svc.image} 
                    alt={svc.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </Link>
              </div>
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-3xl lg:text-5xl font-serif text-deep-espresso mb-6">{svc.title}</h2>
                <p className="text-lg opacity-80 leading-relaxed font-light mb-8 max-w-lg mx-auto lg:mx-0">{svc.description}</p>
                <Link href={svc.href} className="inline-block px-10 py-4 border border-deep-espresso text-deep-espresso hover:bg-deep-espresso hover:text-blush-paper transition-all uppercase tracking-widest text-xs">
                  Explore Service
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
