import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact & Hours',
  description:
    'Find Sage Creek Kitchen at 845 Shoshone St N, Twin Falls, Idaho. Open Tuesday–Sunday for dinner, Saturday–Sunday for brunch.',
};

const hours = [
  { label: 'Dinner (Tue – Fri)', value: '5PM – 10PM' },
  { label: 'Dinner (Sat – Sun)', value: '5PM – 10PM' },
  { label: 'Brunch (Sat – Sun)', value: '10AM – 2PM' },
  { label: 'Monday', value: 'Closed', muted: true },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="py-24 bg-cream text-center">
        <div className="px-6">
          <p className="font-lato text-[11px] uppercase tracking-[0.25em] text-gold mb-5">
            Twin Falls, Idaho
          </p>
          <h1 className="font-cormorant text-4xl italic font-semibold text-charcoal mb-6">
            Find Us
          </h1>
          <p className="font-lato font-light text-charcoal/60 text-base max-w-md mx-auto leading-relaxed">
            We&apos;d love to hear from you. Reservations, events, general inquiries — reach out
            any time.
          </p>
        </div>
      </section>

      {/* Info Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Hours & Info */}
            <div>
              <h2 className="font-cormorant text-2xl font-semibold text-charcoal mb-8">
                Hours &amp; Info
              </h2>

              {/* Address */}
              <div className="flex gap-5 mb-8">
                <div className="w-px bg-gold/40 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-lato text-[11px] uppercase tracking-[0.15em] text-gold mb-2">
                    Address
                  </p>
                  <p className="font-lato font-light text-charcoal/70 text-sm leading-relaxed">
                    845 Shoshone St N
                    <br />
                    Twin Falls, ID 83301
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5 mb-8">
                <div className="w-px bg-gold/40 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-lato text-[11px] uppercase tracking-[0.15em] text-gold mb-2">
                    Phone
                  </p>
                  <a
                    href="tel:+12085550319"
                    className="font-lato font-light text-charcoal/70 text-sm hover:text-sage transition-colors duration-200"
                  >
                    (208) 555-0319
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-5 mb-8">
                <div className="w-px bg-gold/40 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="font-lato text-[11px] uppercase tracking-[0.15em] text-gold mb-3">
                    Hours
                  </p>
                  <ul className="space-y-2">
                    {hours.map((h) => (
                      <li key={h.label} className="flex justify-between text-sm font-lato">
                        <span className={`font-light ${h.muted ? 'text-charcoal/40' : 'text-charcoal/70'}`}>
                          {h.label}
                        </span>
                        <span className={`font-light ${h.muted ? 'text-charcoal/40' : 'text-charcoal/70'}`}>
                          {h.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Parking */}
              <div className="flex gap-5">
                <div className="w-px bg-gold/40 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-lato text-[11px] uppercase tracking-[0.15em] text-gold mb-2">
                    Parking
                  </p>
                  <p className="font-lato font-light text-charcoal/70 text-sm leading-relaxed">
                    Street parking on Shoshone St N, plus a nearby public lot one block east.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Map Placeholder */}
            <div className="flex flex-col">
              <h2 className="font-cormorant text-2xl font-semibold text-charcoal mb-8">
                Location
              </h2>
              <div className="flex-1 bg-charcoal/10 h-64 lg:h-full flex items-center justify-center min-h-48">
                <p className="font-lato text-[11px] uppercase tracking-[0.15em] text-charcoal/40 text-center px-4">
                  845 Shoshone St N
                  <br />
                  Twin Falls, ID 83301
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-cream">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-3xl font-semibold text-charcoal mb-4">
              Send Us a Message
            </h2>
            <p className="font-lato font-light text-charcoal/60 text-sm leading-relaxed">
              General inquiries, event questions, or just to say hello — we read everything.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-sage text-center">
        <div className="px-6">
          <h2 className="font-cormorant text-3xl italic font-semibold text-cream mb-5">
            Ready to Dine?
          </h2>
          <p className="font-lato font-light text-cream/80 text-sm mb-8 leading-relaxed">
            Reserve online or give us a call.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/reservations"
              className="inline-block bg-cream text-charcoal px-8 py-4 text-sm uppercase tracking-widest hover:bg-cream-dark transition-colors duration-200 font-lato"
            >
              Reserve a Table
            </Link>
            <a
              href="tel:+12085550319"
              className="font-lato text-sm text-cream/80 hover:text-cream transition-colors duration-200"
            >
              or call (208) 555-0319
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
