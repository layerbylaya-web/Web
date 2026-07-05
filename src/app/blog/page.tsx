import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'LayeR by Laya | Premium Blog',
  description: 'Discover luxury blog services by Laya. Specializing in high-end beauty, editorial looks, and virtual consultations.',
  alternates: {
    canonical: 'https://layerbylaya.com/blog',
  },
  openGraph: {
    images: [{ url: '/assets/images/enhanced/hero/home-hero.jpg' }]
  }
};

export default function BlogPage() {
  return (
    <>
      <JsonLd pageSchema={{
        "@type": "Service",
        "url": "https://layerbylaya.com/blog",
        "name": "LayeR Service: blog"
      }} />
<div className="pt-32 pb-24 min-h-screen bg-blush-paper flex items-center justify-center text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-5xl lg:text-7xl font-serif text-deep-espresso mb-8">Journal</h1>
        <p className="text-lg opacity-80 leading-relaxed font-light mb-12">
          Editorial insights, beauty philosophies, and behind-the-scenes stories coming soon.
        </p>
        <span className="inline-block px-8 py-3 border border-deep-espresso text-xs tracking-widest uppercase">
          Coming Soon
        </span>
      </div>
    </div>
    </>
  );
}
