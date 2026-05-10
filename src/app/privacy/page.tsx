import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for Sage Creek Kitchen. We respect your privacy and are committed to protecting your personal information.',
};

export default function PrivacyPage() {
  return (
    <>
      {/* Page header */}
      <div className="py-24 bg-cream text-center pt-36">
        <p className="font-lato text-[11px] uppercase tracking-[0.25em] text-gold mb-5">
          Legal
        </p>
        <h1 className="font-cormorant text-5xl italic font-semibold text-charcoal mb-4">
          Privacy Policy
        </h1>
        <p className="font-lato font-light text-charcoal/60 text-base max-w-xl mx-auto px-6 leading-relaxed">
          Last updated May 2025
        </p>
      </div>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-charcoal font-lato font-light text-charcoal/80 leading-relaxed space-y-8">

            <div>
              <h2 className="font-cormorant text-2xl font-semibold text-charcoal mb-3">
                Information We Collect
              </h2>
              <p className="text-base leading-relaxed">
                When you make a reservation, place a takeout order, submit a gift card request, or
                contact us, we collect the personal information you voluntarily provide — such as your
                name, email address, and phone number. We use this information solely to fulfill your
                request and communicate with you about it.
              </p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl font-semibold text-charcoal mb-3">
                How We Use Your Information
              </h2>
              <p className="text-base leading-relaxed">
                We use the information you provide to process reservations and orders, respond to
                inquiries, and send transactional emails (such as reservation confirmations). We do
                not sell, rent, or share your personal information with third parties for marketing
                purposes.
              </p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl font-semibold text-charcoal mb-3">
                Data Storage
              </h2>
              <p className="text-base leading-relaxed">
                Reservation and order data is stored securely. We retain records only as long as
                necessary to fulfill your request and comply with applicable law.
              </p>
            </div>

            <div>
              <h2 className="font-cormorant text-2xl font-semibold text-charcoal mb-3">
                Contact Us
              </h2>
              <p className="text-base leading-relaxed">
                If you have questions about this policy or your personal data, please contact us at{' '}
                <a
                  href="mailto:hello@sagecreekkitchen.com"
                  className="text-sage hover:underline transition-colors duration-200"
                >
                  hello@sagecreekkitchen.com
                </a>{' '}
                or call us at{' '}
                <a
                  href="tel:+12085550319"
                  className="text-sage hover:underline transition-colors duration-200"
                >
                  (208) 555-0319
                </a>
                .
              </p>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-charcoal/10">
            <Link
              href="/"
              className="font-lato text-sm uppercase tracking-widest text-sage hover:text-sage-dark transition-colors duration-200"
            >
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
