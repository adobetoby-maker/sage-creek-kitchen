'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-EMDwcQL2VPw?auto=format&fit=crop&w=1920&q=80"
          alt="Chef plating an elegant dish at Sage Creek Kitchen"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          className="text-gold uppercase tracking-[0.3em] text-sm mb-6 font-lato font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Farm to Table &middot; Twin Falls, Idaho
        </motion.p>

        <motion.h1
          className="font-cormorant text-6xl md:text-8xl italic font-semibold text-cream leading-none mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        >
          Idaho on a Plate.
        </motion.h1>

        <motion.p
          className="font-lato font-light text-xl text-cream/80 mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          Seasonal farm-to-table dining from the heart of Magic Valley
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
        >
          <Link
            href="/reservations"
            className="bg-sage text-cream px-8 py-3 text-sm uppercase tracking-widest hover:bg-sage-dark transition-colors duration-200"
          >
            Reserve a Table
          </Link>
          <Link
            href="/menu"
            className="border border-cream text-cream px-8 py-3 text-sm uppercase tracking-widest hover:bg-cream hover:text-charcoal transition-colors duration-200"
          >
            View Our Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
