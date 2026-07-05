import Image from 'next/image';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'LayeR by Laya | Premium Contact',
  description: 'Discover luxury contact services by Laya. Specializing in high-end beauty, editorial looks, and virtual consultations.',
  alternates: {
    canonical: 'https://layerbylaya.com/contact',
  },
  openGraph: {
    images: [{ url: '/assets/images/enhanced/hero/home-hero.jpg' }]
  }
};

export default function ContactPage() {
  const whatsappMainLink = "https://wa.me/971547467995?text=Hi%20Laya%2C%20I%20would%20like%20to%20book%20makeup%20or%20hair%20styling.%20Please%20share%20your%20availability%20and%20packages.";

  return (
    <>
      <JsonLd pageSchema={{
        "@type": "ContactPage",
        "url": "https://layerbylaya.com/contact",
        "name": "Contact LayeR by Laya"
      }} />
<div className="pt-24 min-h-screen bg-blush-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="relative aspect-[4/5] w-full hidden lg:block">
            <Image src="/assets/images/enhanced/hero/home-hero.jpg" alt="Contact LayeR" fill className="object-cover object-[center_20%]" />
          </div>

          <div className="space-y-12 lg:pl-8">
            <div>
              <h1 className="text-5xl lg:text-7xl font-serif text-deep-espresso mb-6">Let's Connect</h1>
              <p className="text-lg opacity-80 leading-relaxed font-light">
                Ready to unveil your true layer? Reach out via WhatsApp to discuss availability, rates, and detailed packages for bridal, editorial, or online consultations.
              </p>
            </div>

            <div className="space-y-6">
              <a 
                href={whatsappMainLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full text-center px-8 py-5 bg-deep-espresso text-blush-paper hover:bg-metallic-gold transition-colors uppercase tracking-widest text-sm"
              >
                Book via WhatsApp
              </a>
              <div className="grid grid-cols-2 gap-4">
                 <a href="https://wa.me/971547467995?text=Hi%20Laya%2C%20I%20am%20looking%20for%20bridal%20makeup%20and%20hair%20in%20UAE.%20Please%20share%20your%20bridal%20packages%20and%20availability." className="block text-center px-4 py-4 border border-deep-espresso/20 text-deep-espresso hover:border-metallic-gold hover:text-metallic-gold transition-colors text-xs uppercase tracking-widest">
                   UAE Bridal Inquiry
                 </a>
                 <a href="https://wa.me/971547467995?text=Hi%20Laya%2C%20I%20am%20looking%20for%20bridal%20makeup%20and%20hair%20in%20Kerala.%20Please%20share%20your%20bridal%20packages%20and%20availability." className="block text-center px-4 py-4 border border-deep-espresso/20 text-deep-espresso hover:border-metallic-gold hover:text-metallic-gold transition-colors text-xs uppercase tracking-widest">
                   Kerala Bridal Inquiry
                 </a>
              </div>
            </div>

            <div className="pt-8 border-t border-deep-espresso/10 space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-metallic-gold">Direct Contact</h3>
              <p className="text-sm font-light opacity-80">+971 54 746 7995</p>
              <p className="text-sm font-light opacity-80">Based in Dubai & Kerala</p>
              <p className="text-sm font-light opacity-80">Available Worldwide</p>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}
