'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { wineByGlass } from '@/lib/menu';

const featured = wineByGlass.slice(0, 3);

export default function WineSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-LojEnIVaGkk?auto=format&fit=crop&w=1920&q=80"
          alt="Wine and food pairing at Sage Creek Kitchen"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-charcoal/75" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gold uppercase tracking-widest text-xs mb-4 font-lato">
            The Wine Program
          </p>
          <h2 className="font-cormorant text-5xl italic font-semibold text-cream mb-6">
            Curated for Idaho
          </h2>
          <p className="font-lato font-light text-cream/70 text-lg mb-14 max-w-2xl mx-auto">
            Our cellar celebrates the Snake River Valley AVA — Idaho&apos;s growing wine country on
            the same latitude as the Rh&ocirc;ne Valley.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featured.map((wine, i) => (
            <motion.div
              key={wine.id}
              className="border border-cream/20 p-6 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <p className="text-gold uppercase tracking-widest text-xs mb-2 font-lato">
                {wine.varietal}
              </p>
              <h3 className="font-cormorant text-xl font-semibold text-cream mb-1">{wine.name}</h3>
              <p className="text-cream/60 text-xs font-lato mb-3">
                {wine.producer} &bull; {wine.region}
              </p>
              <p className="text-gold font-cormorant text-lg">
                ${wine.glass} glass &bull; ${wine.bottle} bottle
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/wine"
            className="text-cream text-sm uppercase tracking-widest hover:text-gold transition-colors duration-200 border-b border-cream/40 pb-0.5"
          >
            Explore the Wine List &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
