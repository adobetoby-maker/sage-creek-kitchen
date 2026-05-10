'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { starters, mains } from '@/lib/menu';

// Pick 3 starters + 3 mains for preview
const previewItems = [
  ...starters.slice(0, 3),
  ...mains.filter((m) => m.featured).slice(0, 2),
  mains[4],
].slice(0, 6);

export default function MenuPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-cormorant text-4xl font-semibold text-charcoal">
            A Taste of the Menu
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-14">
          {previewItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex justify-between gap-6 border-b border-charcoal/8 pb-8"
            >
              <div className="flex-1">
                <h3 className="font-cormorant text-xl font-semibold text-charcoal mb-1">
                  {item.name}
                </h3>
                <p className="font-lato font-light text-sm text-charcoal/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <p className="text-gold font-cormorant text-xl font-semibold shrink-0">
                ${item.price}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/menu"
            className="text-sage text-sm uppercase tracking-widest hover:text-sage-dark transition-colors duration-200 border-b border-sage/40 pb-0.5"
          >
            Explore the Full Menu &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
