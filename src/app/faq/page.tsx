import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'LayeR by Laya | Premium FAQ',
  description: 'Discover luxury faq services by Laya. Specializing in high-end beauty, editorial looks, and virtual consultations.',
  alternates: {
    canonical: 'https://layerbylaya.com/faq',
  },
  openGraph: {
    images: [{ url: '/assets/images/enhanced/hero/home-hero.jpg' }]
  }
};

export default function FAQPage() {
  const faqs = [
    {
      q: 'Do you travel for destination weddings?',
      a: 'Yes, we are available for destination weddings globally. Travel and accommodation fees apply.'
    },
    {
      q: 'How far in advance should I book my bridal makeup?',
      a: 'We recommend booking 6 to 12 months in advance to secure your date, as our calendar fills quickly.'
    },
    {
      q: 'Do you offer hair styling as well as makeup?',
      a: 'Yes, we provide comprehensive makeup and hair styling packages for brides, parties, and commercial shoots.'
    },
    {
      q: 'How do online consultations work?',
      a: 'Online consultations are conducted via a high-quality 1-on-1 video call. We assess your features, analyze your current routine or kit, and provide real-time guidance and follow-up notes.'
    }
  ];

  return (
    <>
      <JsonLd pageSchema={{
        "@type": "FAQPage",
        "mainEntity": []
      }} />
<div className="pt-32 pb-24 min-h-screen bg-surface-container">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="text-5xl lg:text-7xl font-serif text-deep-espresso mb-16 text-center">FAQ</h1>
        
        <div className="space-y-12">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-deep-espresso/10 pb-8">
              <h3 className="text-2xl font-serif text-deep-espresso mb-4">{faq.q}</h3>
              <p className="text-lg opacity-80 leading-relaxed font-light">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
