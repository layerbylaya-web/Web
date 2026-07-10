import Link from 'next/link';
import { brand, whatsappLinks } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-deep-espresso text-surface-container py-16 px-6 lg:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
        {/* Brand */}
        <div className="flex flex-col items-start space-y-6">
          <h2 className="font-serif text-3xl text-metallic-gold">LayeR</h2>
          <p className="text-sm opacity-80 leading-relaxed max-w-sm">
            Premium makeup and hair styling by Laya. Luxury bridal, party, fashion, and editorial beauty across Dubai, the UAE, and Kerala — with personal online consultations worldwide.
          </p>
          <a href={whatsappLinks.general} target="_blank" rel="noopener noreferrer" aria-label="Book Laya on WhatsApp" className="px-6 py-3 border border-metallic-gold text-metallic-gold hover:bg-metallic-gold hover:text-deep-espresso transition-all text-xs tracking-widest uppercase mt-2">
            Book on WhatsApp
          </a>
        </div>

        {/* Services */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xs tracking-widest uppercase text-metallic-gold mb-2">Services</h3>
          <Link href="/bridal-makeup-dubai" className="text-sm opacity-80 hover:text-metallic-gold transition-colors">Bridal Makeup Dubai / UAE</Link>
          <Link href="/bridal-makeup-kerala" className="text-sm opacity-80 hover:text-metallic-gold transition-colors">Bridal Makeup Kerala</Link>
          <Link href="/party-makeup-and-hair" className="text-sm opacity-80 hover:text-metallic-gold transition-colors">Party Makeup & Hair</Link>
          <Link href="/fashion-editorial-makeup" className="text-sm opacity-80 hover:text-metallic-gold transition-colors">Fashion & Editorial</Link>
          <Link href="/commercial-makeup-artist-dubai" className="text-sm opacity-80 hover:text-metallic-gold transition-colors">Commercial & Production</Link>
        </div>

        {/* Online */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xs tracking-widest uppercase text-metallic-gold mb-2">Online — Worldwide</h3>
          <Link href="/online-makeup-consultation" className="text-sm opacity-80 hover:text-metallic-gold transition-colors">Online Makeup Consultation</Link>
          <Link href="/daily-makeup-consultation" className="text-sm opacity-80 hover:text-metallic-gold transition-colors">Daily Makeup Consultation</Link>
          <Link href="/learn-your-own-makeup-online" className="text-sm opacity-80 hover:text-metallic-gold transition-colors">Learn Your Own Makeup</Link>
          <Link href="/personal-makeup-kit-audit" className="text-sm opacity-80 hover:text-metallic-gold transition-colors">Makeup Kit Audit</Link>
        </div>

        {/* Explore + Contact */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xs tracking-widest uppercase text-metallic-gold mb-2">Explore</h3>
          <Link href="/portfolio" className="text-sm opacity-80 hover:text-metallic-gold transition-colors">Portfolio</Link>
          <Link href="/about-laya" className="text-sm opacity-80 hover:text-metallic-gold transition-colors">About Laya</Link>
          <Link href="/faq" className="text-sm opacity-80 hover:text-metallic-gold transition-colors">FAQ</Link>
          <Link href="/contact" className="text-sm opacity-80 hover:text-metallic-gold transition-colors">Contact & Booking</Link>
          <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:text-metallic-gold transition-colors">Instagram @layerbylaya</a>
          <p className="text-sm opacity-60 pt-2">WhatsApp: {brand.phoneDisplay}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-14 pt-6 border-t border-white/10 text-center text-xs opacity-60">
        <p>
          Serving Dubai, Abu Dhabi, Sharjah &middot; Kochi, Kottayam, Thiruvananthapuram, Thrissur, Kozhikode &middot; Destination weddings &middot; Online worldwide
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-60">
        <p>&copy; {new Date().getFullYear()} LayeR by Laya. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
