import type { Metadata } from 'next';
import ReservationForm from '@/components/reservations/ReservationForm';

export const metadata: Metadata = {
  title: 'Reservations',
  description:
    'Reserve your table at Sage Creek Kitchen. Farm-to-table dining in Twin Falls, Idaho. We recommend reservations, especially on weekends.',
};

const policyItems = [
  {
    heading: 'Table Policy',
    body: 'Tables are held for up to 15 minutes. Please call if you\'re running late.',
  },
  {
    heading: 'Dress Code',
    body: 'Smart casual. We want you to be comfortable.',
  },
  {
    heading: 'Cancellations',
    body: 'We request 24-hour notice for cancellations so we can accommodate other guests.',
  },
  {
    heading: 'Large Parties',
    body: 'For parties over 8, please call us directly at (208) 555-0319.',
  },
];

export default function ReservationsPage() {
  return (
    <>
      {/* Page header */}
      <div className="py-20 bg-cream text-center pt-36">
        <h1 className="font-cormorant text-5xl italic font-semibold text-charcoal mb-4">
          Reserve Your Table
        </h1>
        <p className="font-lato font-light text-charcoal/60 text-base max-w-xl mx-auto px-6 leading-relaxed">
          We recommend reservations, especially Friday through Sunday. Walk-ins welcome based on
          availability.
        </p>
      </div>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left column — What to Expect */}
            <div>
              <h2 className="font-cormorant text-4xl italic font-semibold text-charcoal mb-6">
                What to Expect
              </h2>
              <p className="font-lato font-light text-charcoal/70 text-base leading-relaxed mb-10">
                At Sage Creek Kitchen we pride ourselves on a relaxed yet refined dining experience.
                Each guest is welcomed as a friend, and each plate reflects the season&apos;s best
                from Magic Valley farms.
              </p>

              <div className="space-y-7">
                {policyItems.map((item) => (
                  <div key={item.heading} className="flex gap-5">
                    {/* Decorative vertical rule */}
                    <div className="w-px bg-gold/40 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-lato text-[11px] uppercase tracking-[0.15em] text-gold mb-1.5">
                        {item.heading}
                      </p>
                      <p className="font-lato font-light text-charcoal/70 text-sm leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours reminder */}
              <div className="mt-12 pt-8 border-t border-charcoal/10">
                <p className="font-lato text-[11px] uppercase tracking-[0.15em] text-charcoal/50 mb-4">
                  Hours
                </p>
                <ul className="space-y-2">
                  <li className="flex justify-between text-sm font-lato font-light text-charcoal/70">
                    <span>Dinner</span>
                    <span>Tue – Sun, 5PM – 10PM</span>
                  </li>
                  <li className="flex justify-between text-sm font-lato font-light text-charcoal/70">
                    <span>Brunch</span>
                    <span>Sat – Sun, 10AM – 2PM</span>
                  </li>
                  <li className="flex justify-between text-sm font-lato font-light text-charcoal/40">
                    <span>Monday</span>
                    <span>Closed</span>
                  </li>
                </ul>
                <p className="mt-6 text-sm font-lato font-light text-charcoal/60">
                  Questions?{' '}
                  <a
                    href="tel:+12085550319"
                    className="text-sage hover:underline transition-colors duration-200"
                  >
                    (208) 555-0319
                  </a>
                </p>
              </div>
            </div>

            {/* Right column — Reservation Form */}
            <div>
              <ReservationForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
