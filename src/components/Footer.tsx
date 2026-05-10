import Link from 'next/link';
import { siteInfo } from '@/lib/siteInfo';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-cormorant text-2xl italic font-semibold text-cream mb-2">
              Sage Creek Kitchen
            </p>
            <p className="text-sm tracking-widest uppercase text-gold/80">{siteInfo.tagline}</p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-cormorant text-lg font-semibold text-cream mb-4 tracking-wide">
              Hours
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-cream/50 uppercase tracking-wider text-xs block mb-0.5">Dinner</span>
                {siteInfo.hours.dinner}
              </li>
              <li className="mt-3">
                <span className="text-cream/50 uppercase tracking-wider text-xs block mb-0.5">Brunch</span>
                {siteInfo.hours.brunch}
              </li>
              <li className="mt-3 text-cream/40">{siteInfo.hours.closed}</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-cormorant text-lg font-semibold text-cream mb-4 tracking-wide">
              Navigate
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/menu', label: 'Menu' },
                { href: '/reservations', label: 'Reservations' },
                { href: '/our-story', label: 'Our Story' },
                { href: '/wine', label: 'Wine' },
                { href: '/private-events', label: 'Private Events' },
                { href: '/gift-cards', label: 'Gift Cards' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-cormorant text-lg font-semibold text-cream mb-4 tracking-wide">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>{siteInfo.address}</li>
              <li>
                <a
                  href={`tel:${siteInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-gold transition-colors duration-200"
                >
                  {siteInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteInfo.reservationsEmail}`}
                  className="hover:text-gold transition-colors duration-200"
                >
                  {siteInfo.reservationsEmail}
                </a>
              </li>
              <li className="pt-2 flex gap-4">
                <a
                  href={siteInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sage Creek Kitchen on Instagram"
                  className="hover:text-gold transition-colors duration-200 uppercase tracking-widest text-xs"
                >
                  Instagram
                </a>
                <a
                  href={siteInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sage Creek Kitchen on Facebook"
                  className="hover:text-gold transition-colors duration-200 uppercase tracking-widest text-xs"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/40">
          <p>&copy; {new Date().getFullYear()} Sage Creek Kitchen. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-gold transition-colors duration-200">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
