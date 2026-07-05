import Link from 'next/link';

export default function Footer() {
  const whatsappBookLink = "https://wa.me/971547467995?text=Hi%20Laya%2C%20I%20would%20like%20to%20book%20makeup%20or%20hair%20styling.%20Please%20share%20your%20availability%20and%20packages.";

  return (
    <footer className="bg-deep-espresso text-surface-container py-16 px-6 lg:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
        {/* Brand */}
        <div className="flex flex-col items-start space-y-6">
          <h2 className="font-serif text-3xl text-metallic-gold">LayeR</h2>
          <p className="text-sm opacity-80 leading-relaxed max-w-sm">
            Premium makeup and hair styling services in Dubai and Kerala. We specialise in luxury bridal, editorial shoots, and personalised online beauty consultations.
          </p>
          <a href={whatsappBookLink} target="_blank" rel="noopener noreferrer" aria-label="Book Laya on WhatsApp" className="px-6 py-3 border border-metallic-gold text-metallic-gold hover:bg-metallic-gold hover:text-deep-espresso transition-all text-xs tracking-widest uppercase mt-4">
            Book on WhatsApp
          </a>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xs tracking-widest uppercase text-metallic-gold mb-2">Services</h3>
          <Link href="/bridal-makeup-dubai" className="text-sm opacity-80 hover:text-metallic-gold transition-colors">Bridal Makeup UAE</Link>
          <Link href="/bridal-makeup-kerala" className="text-sm opacity-80 hover:text-metallic-gold transition-colors">Bridal Makeup Kerala</Link>
          <Link href="/party-makeup-and-hair" className="text-sm opacity-80 hover:text-metallic-gold transition-colors">Party Makeup & Hair</Link>
          <Link href="/fashion-editorial-makeup" className="text-sm opacity-80 hover:text-metallic-gold transition-colors">Fashion & Editorial</Link>
          <Link href="/commercial-makeup-artist-dubai" className="text-sm opacity-80 hover:text-metallic-gold transition-colors">Commercial & Production</Link>
        </div>

        {/* More Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xs tracking-widest uppercase text-metallic-gold mb-2">Explore</h3>
          <Link href="/online-makeup-consultation" className="text-sm opacity-80 hover:text-metallic-gold transition-colors">Online Consultations</Link>
          <Link href="/portfolio" className="text-sm opacity-80 hover:text-metallic-gold transition-colors">Portfolio</Link>
          <Link href="/about-laya" className="text-sm opacity-80 hover:text-metallic-gold transition-colors">About Laya</Link>
          <Link href="/faq" className="text-sm opacity-80 hover:text-metallic-gold transition-colors">FAQ</Link>
          <Link href="/contact" className="text-sm opacity-80 hover:text-metallic-gold transition-colors">Contact</Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-60">
        <p>&copy; {new Date().getFullYear()} LayeR by Laya. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
      {/* build:mobile-hero-finesse-v2 */}
      <p className="max-w-7xl mx-auto mt-4 text-center text-[10px] opacity-30 tracking-widest">LayeR build: mobile-hero-finesse-v2</p>
    </footer>
  );
}
