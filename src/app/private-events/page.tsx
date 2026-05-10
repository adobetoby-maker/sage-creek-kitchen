import type { Metadata } from 'next';
import Link from 'next/link';
import EventsInquiryForm from '@/components/private-events/EventsInquiryForm';

export const metadata: Metadata = {
  title: 'Private Events',
  description:
    'Host your private event at Sage Creek Kitchen. Our private dining room accommodates up to 40 guests. Corporate dinners, wedding rehearsals, birthday celebrations, and wine dinners.',
};

const eventTypes = [
  { label: 'Corporate Dinners', icon: '◈' },
  { label: 'Wedding Rehearsals', icon: '◈' },
  { label: 'Birthday Celebrations', icon: '◈' },
  { label: 'Wine Dinners', icon: '◈' },
  { label: 'Full Restaurant Buyout', icon: '◈' },
];

const packages = [
  {
    name: '3-Course Prix Fixe',
    price: '$65',
    unit: 'per person',
    description:
      'Three courses from our seasonal menu, family-style sharing, included gratuity',
    cta: 'Inquire',
  },
  {
    name: 'Cocktail Reception',
    price: '$45',
    unit: 'per person',
    description:
      'Two-hour reception with passed appetizers and a curated cocktail selection',
    cta: 'Inquire',
  },
  {
    name: 'Full Restaurant Buyout',
    price: 'Contact',
    unit: 'for pricing',
    description:
      'Exclusive use of the full restaurant for up to 120 guests',
    cta: 'Inquire',
  },
];

const galleryPlaceholders = [
  'Private Dining Room Setup',
  'Intimate Table Setting',
  'Passed Appetizers',
  'Evening Reception',
];

export default function PrivateEventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-lGWmTzCyEB8?auto=format&fit=crop&w=2400&q=80)',
            backgroundColor: '#2C2C2C',
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-charcoal/65" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 pt-24 pb-20">
          <p className="font-lato text-[11px] uppercase tracking-[0.25em] text-gold mb-5">
            Private Events
          </p>
          <h1 className="font-cormorant text-5xl italic font-semibold text-cream leading-tight">
            Create an Unforgettable Evening
          </h1>
        </div>
      </section>

      {/* Capacity section */}
      <section className="py-24 bg-cream text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-cormorant text-3xl font-semibold text-charcoal mb-6">
            Our Private Dining Room
          </h2>
          <p className="font-lato font-light text-charcoal/70 text-base leading-relaxed">
            Our private dining room accommodates up to 40 guests — an intimate space perfectly
            suited for memorable evenings.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6 flex-wrap">
            <div className="text-center">
              <p className="font-cormorant text-4xl font-semibold text-charcoal">40</p>
              <p className="font-lato text-[11px] uppercase tracking-[0.15em] text-charcoal/50 mt-1">
                Max Guests (Private Room)
              </p>
            </div>
            <div className="w-px h-10 bg-charcoal/20 hidden sm:block" />
            <div className="text-center">
              <p className="font-cormorant text-4xl font-semibold text-charcoal">120</p>
              <p className="font-lato text-[11px] uppercase tracking-[0.15em] text-charcoal/50 mt-1">
                Max Guests (Full Buyout)
              </p>
            </div>
            <div className="w-px h-10 bg-charcoal/20 hidden sm:block" />
            <div className="text-center">
              <p className="font-cormorant text-4xl font-semibold text-charcoal">1 Day</p>
              <p className="font-lato text-[11px] uppercase tracking-[0.15em] text-charcoal/50 mt-1">
                Response Time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event types */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-lato text-[11px] uppercase tracking-[0.2em] text-gold text-center mb-10">
            We Host
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {eventTypes.map((type) => (
              <div
                key={type.label}
                className="text-center py-8 px-4 border border-charcoal/10 bg-cream/30 hover:border-sage/40 transition-colors duration-200"
              >
                <p className="font-lato text-[11px] uppercase tracking-[0.15em] text-charcoal/70 leading-relaxed">
                  {type.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-lato text-[11px] uppercase tracking-[0.2em] text-gold mb-3">
              Event Packages
            </p>
            <h2 className="font-cormorant text-3xl font-semibold text-charcoal">
              Choose Your Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-white border border-charcoal/10 p-8 flex flex-col"
              >
                <h3 className="font-cormorant text-2xl font-semibold text-charcoal mb-1">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1.5 mb-4">
                  <span className="font-cormorant text-3xl font-semibold text-sage">
                    {pkg.price}
                  </span>
                  <span className="font-lato text-xs text-charcoal/50">{pkg.unit}</span>
                </div>
                <p className="font-lato font-light text-charcoal/70 text-sm leading-relaxed flex-1 mb-6">
                  {pkg.description}
                </p>
                <a
                  href="#inquiry"
                  className="block text-center border border-charcoal/30 text-charcoal px-6 py-3 text-xs uppercase tracking-widest hover:border-sage hover:text-sage transition-colors duration-200 font-lato"
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo gallery placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-lato text-[11px] uppercase tracking-[0.2em] text-gold mb-3">
              Gallery
            </p>
            <h2 className="font-cormorant text-3xl font-semibold text-charcoal">
              The Space
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {galleryPlaceholders.map((label) => (
              <div
                key={label}
                className="aspect-[4/3] bg-charcoal/8 flex items-center justify-center border border-charcoal/10"
              >
                <p className="font-lato text-[11px] uppercase tracking-[0.15em] text-charcoal/30">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry section */}
      <section id="inquiry" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left */}
            <div>
              <p className="font-lato text-[11px] uppercase tracking-[0.2em] text-gold mb-4">
                Get In Touch
              </p>
              <h2 className="font-cormorant text-4xl italic font-semibold text-charcoal mb-6">
                Inquire About Your Event
              </h2>
              <p className="font-lato font-light text-charcoal/70 text-sm leading-relaxed mb-8">
                Tell us about your vision and we will craft the perfect evening for you and your
                guests. Our events coordinator will respond within one business day.
              </p>

              {/* Deposit note */}
              <div className="flex items-start gap-4 px-5 py-4 bg-cream border border-charcoal/10">
                <svg
                  className="w-4 h-4 text-gold flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
                <p className="font-lato text-sm font-light text-charcoal/70 leading-relaxed">
                  <span className="font-normal text-charcoal">Please note:</span> For events over
                  20 guests, we require a deposit and signed agreement.
                </p>
              </div>

              {/* Contact */}
              <div className="mt-8 pt-8 border-t border-charcoal/10">
                <p className="font-lato text-[11px] uppercase tracking-[0.15em] text-charcoal/50 mb-4">
                  Prefer to Call?
                </p>
                <a
                  href="tel:+12085550319"
                  className="font-cormorant text-2xl font-semibold text-charcoal hover:text-sage transition-colors duration-200"
                >
                  (208) 555-0319
                </a>
                <p className="font-lato text-sm font-light text-charcoal/50 mt-1">
                  Tue – Sun, 5PM – 10PM
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <EventsInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
