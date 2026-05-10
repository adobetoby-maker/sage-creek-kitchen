'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function StorySection() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 items-center">
          {/* Image — 40% */}
          <motion.div
            className="relative lg:col-span-2 h-96 lg:h-[520px]"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://images.unsplash.com/photo-4NQEvxW2_4w?auto=format&fit=crop&w=900&q=80"
              alt="Chef Elena Vasquez cooking in the Sage Creek Kitchen"
              fill
              className="object-cover"
              unoptimized
            />
          </motion.div>

          {/* Content — 60% */}
          <motion.div
            className="lg:col-span-3 lg:pl-16 pt-10 lg:pt-0"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-gold uppercase tracking-widest text-xs mb-4 font-lato">Our Story</p>
            <h2 className="font-cormorant text-4xl font-semibold text-charcoal mb-6 leading-tight">
              Chef Elena Vasquez &amp; the Idaho Table
            </h2>
            <p className="font-lato font-light text-charcoal/75 leading-relaxed mb-8 max-w-lg">
              We source every ingredient within 150 miles of this kitchen. From Riverence&apos;s
              spring-water trout farms in the Magic Valley to Kelley&apos;s Canyon Orchard perched
              above the Snake River — every plate tells an Idaho story. Chef Elena Vasquez has spent
              12 years translating this land into food worth remembering.
            </p>
            <Link
              href="/our-story"
              className="text-sage text-sm uppercase tracking-widest hover:text-sage-dark transition-colors duration-200 border-b border-sage/40 pb-0.5"
            >
              Meet the Team &rarr;
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
