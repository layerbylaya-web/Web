import JsonLd from '@/components/JsonLd';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ImageStrip from '@/components/ImageStrip';

export const metadata: Metadata = {
  title: 'LayeR by Laya | Premium Home',
  description: 'Discover luxury home services by Laya. Specializing in high-end beauty, editorial looks, and virtual consultations.',
  alternates: {
    canonical: 'https://layerbylaya.com/',
  },
  openGraph: {
    images: [{ url: '/assets/images/enhanced/hero/home-hero.jpg' }]
  }
};

export default function Home() {
  const whatsappBookLink = "https://wa.me/971547467995?text=Hi%20Laya%2C%20I%20would%20like%20to%20book%20makeup%20or%20hair%20styling.%20Please%20share%20your%20availability%20and%20packages.";

  return (
    <>
      <JsonLd />
      {/* Editorial Hero */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center lg:items-end justify-start lg:justify-end overflow-hidden bg-deep-espresso">
        <div className="absolute inset-0 lg:w-[75%] lg:left-0 h-full z-0">
          <Image
            src="/assets/images/enhanced/hero/home-hero.jpg"
            alt="LayeR Editorial Beauty Portrait"
            fill
            priority
            className="object-cover object-center lg:object-[center_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso/60 lg:from-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-deep-espresso/20 lg:to-deep-espresso"></div>
        </div>
        
        <div className="relative z-10 w-full lg:w-[35%] px-8 pb-16 lg:pb-32 pt-32 lg:pt-0 lg:pr-16 text-left">
          <p className="text-xs tracking-[0.3em] uppercase text-metallic-gold mb-6 font-medium">
            The Sublime of Change
          </p>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.1]">
            Unveil Your<br/><i className="font-light italic text-metallic-gold">True</i> Layer.
          </h1>
          <a 
            href={whatsappBookLink}
            className="inline-block px-10 py-4 border border-metallic-gold text-metallic-gold hover:bg-metallic-gold hover:text-deep-espresso transition-all duration-300 uppercase tracking-widest text-xs"
          >
            Book Consultation
          </a>
        </div>
      </section>

      {/* Secondary Image Strip / Service Intro */}
      <section className="py-24 px-6 lg:px-12 bg-surface-container">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-deep-espresso">
              Mastering the Art of Subtle Transformation
            </h2>
            <p className="text-lg opacity-80 leading-relaxed font-light">
              LayeR is a premium makeup and hair styling studio based in Dubai and Kerala. 
              We specialize in creating flawless, enduring looks that enhance your natural features—whether for your wedding day, a high-fashion editorial, or a daily refinement.
            </p>
            <Link href="/about-laya" className="inline-block pb-2 border-b border-deep-espresso text-sm tracking-widest uppercase hover:text-metallic-gold hover:border-metallic-gold transition-all">
              Discover Our Philosophy
            </Link>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] w-full mt-8">
              <Image src="/assets/images/ai-editorial/bridal-dubai-luxury.jpg" alt="Bridal Campaign Detail" fill className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] w-full mb-8">
              <Image src="/assets/images/enhanced/editorial/beauty-closeup.jpg" alt="Editorial Texture" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* The LayeR Method */}
      <section className="py-24 px-6 lg:px-12 bg-deep-espresso text-blush-paper relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-5 relative aspect-[4/5] w-full">
            <Image src="/assets/images/ai-editorial/beauty-closeup-luxury.jpg" alt="The LayeR Method Macro Detail" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute inset-0 border border-metallic-gold/30 scale-95"></div>
          </div>
          <div className="lg:col-span-1 hidden lg:block"></div>
          <div className="lg:col-span-6 space-y-12">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-metallic-gold mb-4">Our Approach</p>
              <h2 className="text-4xl md:text-5xl font-serif text-white">The LayeR Method</h2>
            </div>
            <div className="space-y-8">
              <div className="border-l border-metallic-gold/30 pl-6">
                <h3 className="text-xl font-serif text-metallic-gold mb-2">1. Skin Analysis</h3>
                <p className="text-sm opacity-70 leading-relaxed font-light">Every masterpiece begins with the canvas. We assess texture, hydration, and undertones to select the perfect preparatory layers.</p>
              </div>
              <div className="border-l border-metallic-gold/30 pl-6">
                <h3 className="text-xl font-serif text-metallic-gold mb-2">2. The Base Architecture</h3>
                <p className="text-sm opacity-70 leading-relaxed font-light">Building coverage that looks like skin. We use micro-layering techniques to ensure longevity without heaviness.</p>
              </div>
              <div className="border-l border-metallic-gold/30 pl-6">
                <h3 className="text-xl font-serif text-metallic-gold mb-2">3. Sculpt & Sublime</h3>
                <p className="text-sm opacity-70 leading-relaxed font-light">Enhancing bone structure with light and shadow, finishing with color theory tailored to your specific aesthetic goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageStrip images={[
        { src: '/assets/images/enhanced/portfolio/portfolio-05.jpg', alt: 'Detail crop 1' },
        { src: '/assets/images/enhanced/portfolio/portfolio-09.jpg', alt: 'Detail crop 2' },
        { src: '/assets/images/enhanced/portfolio/portfolio-11.jpg', alt: 'Detail crop 3' }
      ]} />

      {/* Selected Works - Real Image Tiles */}
      <section className="py-24 px-6 lg:px-12 bg-blush-paper">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-deep-espresso mb-6">Selected Works</h2>
          <Link href="/portfolio" className="text-sm tracking-widest uppercase pb-1 border-b border-deep-espresso hover:text-metallic-gold hover:border-metallic-gold transition-all">
            View Full Portfolio
          </Link>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/portfolio" className="group relative aspect-[3/4] w-full overflow-hidden">
            <Image src="/assets/images/enhanced/portfolio/portfolio-01.jpg" alt="Portfolio Selection 1" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
          </Link>
          <Link href="/portfolio" className="group relative aspect-[3/4] w-full overflow-hidden mt-0 md:mt-8">
            <Image src="/assets/images/enhanced/portfolio/portfolio-02.jpg" alt="Portfolio Selection 2" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
          </Link>
          <Link href="/portfolio" className="group relative aspect-[3/4] w-full overflow-hidden mt-0 lg:-mt-8">
            <Image src="/assets/images/enhanced/portfolio/portfolio-03.jpg" alt="Portfolio Selection 3" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
          </Link>
          <Link href="/portfolio" className="group relative aspect-[3/4] w-full overflow-hidden mt-0 md:mt-8 lg:mt-0">
            <Image src="/assets/images/enhanced/portfolio/portfolio-04.jpg" alt="Portfolio Selection 4" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
          </Link>
        </div>
      </section>
    </>
  );
}
