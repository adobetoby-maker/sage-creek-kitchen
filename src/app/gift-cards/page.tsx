import type { Metadata } from 'next';
import GiftCardForm from '@/components/gift-cards/GiftCardForm';

export const metadata: Metadata = {
  title: 'Gift Cards',
  description:
    'Give the gift of an Idaho dining experience. Sage Creek Kitchen gift cards available in denominations from $25 to $200.',
};

export default function GiftCardsPage() {
  return (
    <>
      {/* Header */}
      <section className="py-24 bg-cream text-center">
        <div className="px-6">
          <p className="font-lato text-[11px] uppercase tracking-[0.25em] text-gold mb-5">
            Give the Gift of Taste
          </p>
          <h1 className="font-cormorant text-4xl italic font-semibold text-charcoal mb-6">
            Give the Gift of an Idaho Experience
          </h1>
          <p className="font-lato font-light text-charcoal/60 text-base max-w-xl mx-auto leading-relaxed">
            Sage Creek Kitchen gift cards — perfect for any occasion. Processed within 1 business
            day and delivered by email or physical mail.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <GiftCardForm />
        </div>
      </section>

      {/* Info Note */}
      <section className="py-12 bg-cream text-center">
        <p className="font-lato font-light text-charcoal/60 text-sm max-w-lg mx-auto px-6 leading-relaxed">
          Gift cards processed within 1 business day, delivered by email or mail. For balance
          inquiries, call{' '}
          <a href="tel:+12085550319" className="text-sage hover:underline transition-colors">
            (208) 555-0319
          </a>
          .
        </p>
      </section>
    </>
  );
}
