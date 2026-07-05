'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-blush-paper/90 backdrop-blur-md border-b border-soft-blush-cream' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
        <Link href="/" className="relative z-10 flex items-center">
          <Image 
            src="/assets/brand/layer-logo.png" 
            alt="LayeR by Laya" 
            width={120} 
            height={40}
            className="w-auto h-8 lg:h-10 object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm tracking-widest uppercase hover:text-metallic-gold transition-colors">
              {link.name}
            </Link>
          ))}
          <a href={whatsappBookLink} target="_blank" rel="noopener noreferrer" className="ml-4 px-6 py-3 border border-deep-espresso hover:bg-deep-espresso hover:text-blush-paper transition-all text-sm tracking-widest uppercase">
            Book Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden relative z-10" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
          {mobileMenuOpen ? <X size={28} className="text-deep-espresso" /> : <Menu size={28} className="text-deep-espresso" />}
        </button>

        {/* Mobile Nav */}
        <div className={`fixed inset-0 bg-blush-paper flex flex-col justify-center items-center gap-8 transition-transform duration-500 ease-in-out lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-2xl font-serif hover:text-metallic-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={whatsappBookLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-8 px-8 py-4 bg-deep-espresso text-blush-paper text-sm tracking-widest uppercase"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
