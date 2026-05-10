'use client';

import { motion } from 'framer-motion';
import { mains } from '@/lib/menu';
import type { DietaryTag } from '@/lib/menu';

const featured = mains.filter((item) => item.featured);

const tagLabels: Record<DietaryTag, string> = {
  gf: 'GF',
  v: 'V',
  vg: 'VG',
};

export default function FeaturedDishes() {
  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="font-cormorant text-3xl text-center text-charcoal mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          Tonight&apos;s Features
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((dish, i) => (
            <motion.div
              key={dish.id}
              className="bg-white p-8 group cursor-default transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              {dish.seasonal && (
                <p className="text-gold uppercase tracking-widest text-xs mb-3 font-lato">Seasonal</p>
              )}
              <h3 className="font-cormorant text-2xl font-semibold text-charcoal mb-2">{dish.name}</h3>
              <p className="font-lato font-light text-sm text-charcoal/70 leading-relaxed mb-4">
                {dish.description}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-gold font-cormorant text-xl font-semibold">${dish.price}</p>
                {dish.dietary.length > 0 && (
                  <div className="flex gap-1.5">
                    {dish.dietary.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs border border-sage/40 text-sage/70 px-1.5 py-0.5 tracking-wide"
                      >
                        {tagLabels[tag]}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
