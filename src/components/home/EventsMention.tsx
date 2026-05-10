'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function EventsMention() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 items-center">
          {/* Content left — 60% */}
          <motion.div
            className="lg:col-span-3 lg:pr-16 pb-10 lg:pb-0"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold uppercase tracking-widest text-xs mb-4 font-lato">
              Private Dining
            </p>
            <h2 className="font-cormorant text-4xl font-semibold text-charcoal mb-6 leading-tight">
              Create an Unforgettable Evening
            </h2>
            <p className="font-lato font-light text-charcoal/75 leading-relaxed mb-8 max-w-lg">
              Our private dining room accommodates up to 40 guests. Perfect for corporate dinners,
              wine pairings, and intimate celebrations.
            </p>
            <Link
              href="/private-events"
              className="text-sage text-sm uppercase tracking-widest hover:text-sage-dark transition-colors duration-200 border-b border-sage/40 pb-0.5"
            >
              Inquire About Events &rarr;
            </Link>
          </motion.div>

          {/* Image right — 40% */}
          <motion.div
            className="relative lg:col-span-2 h-96 lg:h-[520px]"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Image
              src="https://images.unsplash.com/photo-4UXTxX_UyJw?auto=format&fit=crop&w=900&q=80"
              alt="Candlelit private dining table at Sage Creek Kitchen"
              fill
              className="object-cover"
              unoptimized
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
