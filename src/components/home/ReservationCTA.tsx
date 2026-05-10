'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { siteInfo } from '@/lib/siteInfo';

export default function ReservationCTA() {
  return (
    <section className="py-24 bg-sage">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-cormorant text-4xl italic font-semibold text-cream mb-5">
            Reserve Your Table
          </h2>
          <p className="font-lato font-light text-cream/80 text-lg mb-10">
            We recommend reservations, especially on weekends. Walk-ins welcomed based on
            availability.
          </p>
          <Link
            href="/reservations"
            className="inline-block bg-cream text-charcoal px-10 py-4 text-sm uppercase tracking-widest hover:bg-cream-dark transition-colors duration-200 mb-6"
          >
            Make a Reservation
          </Link>
          <p className="font-lato text-sm text-cream/60">
            Or call us at{' '}
            <a
              href={`tel:${siteInfo.phone.replace(/[^0-9+]/g, '')}`}
              className="hover:text-cream transition-colors duration-200"
            >
              {siteInfo.phone}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
