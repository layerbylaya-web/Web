import PortfolioGallery from '@/components/PortfolioGallery';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'LayeR by Laya | Premium Portfolio',
  description: 'Discover luxury portfolio services by Laya. Specializing in high-end beauty, editorial looks, and virtual consultations.',
  alternates: {
    canonical: 'https://layerbylaya.com/portfolio',
  },
  openGraph: {
    images: [{ url: '/assets/images/enhanced/hero/home-hero.jpg' }]
  }
};

export default function PortfolioPage() {
  return (
    <>
      <JsonLd pageSchema={{
        "@type": "ImageGallery",
        "url": "https://layerbylaya.com/portfolio",
        "name": "LayeR Portfolio"
      }} />
<div className="pt-32 pb-24 min-h-screen bg-blush-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-serif text-deep-espresso mb-8">Selected Works</h1>
          <p className="max-w-2xl mx-auto text-lg opacity-80 leading-relaxed font-light">
            A curation of our artistry across luxury bridal, fashion editorial, and commercial campaigns.
          </p>
        </div>
        
        <PortfolioGallery />
      </div>
    </div>
    </>
  );
}
