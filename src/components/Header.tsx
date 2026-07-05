'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { FadeIn } from './AnimationWrappers';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setPastHero(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Bridal', href: '/bridal-makeup-dubai' },
    { name: 'Online', href: '/online-makeup-consultation' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about-laya' },
    { name: 'Contact', href: '/contact' },
  ];

  const whatsappBookLink = "https://wa.me/971547467995?text=Hi%20Laya%2C%20I%20would%20like%20to%20book%20makeup%20or%20hair%20styling.%20Please%20share%20your%20availability%20and%20packages.";

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${isScrolled ? 'border-dusty-rose-border/45 bg-blush-paper/92 py-2 shadow-[0_14px_40px_rgba(42,23,18,0.08)] backdrop-blur-xl' : 'border-white/55 bg-blush-paper/72 py-3 lg:py-4 backdrop-blur-xl'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-12">
        <Link href="/" className="relative z-10 flex items-center" aria-label="LayeR by Laya Home">
          <Image 
            src="/assets/brand/layer-logo.png" 
            alt="LayeR by Laya" 
            width={160} 
            height={50}
            className={`w-auto object-contain transition-all duration-500 ${isScrolled ? 'h-9 lg:h-11' : 'h-10 lg:h-12'}`}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-[11px] font-semibold uppercase tracking-[0.16em] text-deep-espresso transition-colors hover:text-metallic-gold">
              {link.name}
            </Link>
          ))}
          <a href={whatsappBookLink} target="_blank" rel="noopener noreferrer" aria-label="Book Laya on WhatsApp" className="whatsapp-pulse ml-2 border border-deep-espresso bg-deep-espresso px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-blush-paper transition-all hover:border-metallic-gold hover:bg-metallic-gold hover:text-deep-espresso">
            Book WhatsApp
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="relative z-50 p-2 lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
          {mobileMenuOpen ? <X size={32} className="text-deep-espresso" /> : <Menu size={32} className="text-deep-espresso" />}
        </button>

        {/* Mobile Nav */}
        <div
          aria-hidden={!mobileMenuOpen}
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-champagne-light transition-all duration-500 ease-in-out lg:hidden ${mobileMenuOpen ? 'visible translate-y-0 opacity-100' : 'invisible pointer-events-none -translate-y-[120%] opacity-0'}`}
        >
          <FadeIn delay={0.2} className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-3xl font-serif text-deep-espresso hover:text-metallic-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={whatsappBookLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-pulse mt-8 bg-deep-espresso px-10 py-5 text-sm uppercase tracking-widest text-blush-paper"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book on WhatsApp
            </a>
          </FadeIn>
        </div>
      </div>
    </header>
    <a
      href={whatsappBookLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book Laya on WhatsApp"
      className={`whatsapp-pulse fixed bottom-4 left-4 right-4 z-40 bg-botanical-sage px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-[0_18px_45px_rgba(42,23,18,0.22)] transition-all duration-500 lg:hidden ${
        pastHero ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      Book Laya on WhatsApp
    </a>
    </>
  );
}
