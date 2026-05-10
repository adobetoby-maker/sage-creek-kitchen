'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/menu', label: 'Menu' },
  { href: '/reservations', label: 'Reservations' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/wine', label: 'Wine' },
  { href: '/private-events', label: 'Private Events' },
  { href: '/journal', label: 'Journal' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-cormorant text-xl italic font-semibold tracking-wide"
          style={{ color: scrolled ? 'var(--color-charcoal)' : 'var(--color-cream)' }}
        >
          Sage Creek Kitchen
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors duration-200 hover:text-gold ${
                scrolled ? 'text-charcoal' : 'text-cream/90'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/reservations"
            className="bg-sage text-cream px-5 py-2 text-sm tracking-widest uppercase transition-colors duration-200 hover:bg-sage-dark"
          >
            Reserve a Table
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden flex flex-col gap-1.5 p-1 ${scrolled ? 'text-charcoal' : 'text-cream'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden bg-cream/98 backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-charcoal text-lg font-cormorant font-semibold tracking-wide py-2 border-b border-charcoal/10 hover:text-sage transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/reservations"
            className="mt-2 bg-sage text-cream text-center px-5 py-3 text-sm tracking-widest uppercase hover:bg-sage-dark transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Reserve a Table
          </Link>
        </nav>
      </div>
    </header>
  );
}
