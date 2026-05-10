'use client';

import { motion } from 'framer-motion';
import type { MenuItem, WineItem, CocktailItem } from '@/lib/menu';
import FoodCard from './FoodCard';
import WineCard from './WineCard';

type SectionItem = MenuItem | WineItem | CocktailItem;

function isFoodItem(item: SectionItem): item is MenuItem {
  return 'dietary' in item;
}

function isWineItem(item: SectionItem): item is WineItem {
  return 'producer' in item;
}

interface MenuSectionProps {
  title: string;
  items: SectionItem[];
  columns?: 1 | 2;
  wineShowGlass?: boolean;
}

export default function MenuSection({
  title,
  items,
  columns = 2,
  wineShowGlass = false,
}: MenuSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="font-cormorant text-3xl font-semibold text-charcoal mb-6">{title}</h2>
      <div
        className={
          columns === 2
            ? 'grid grid-cols-1 md:grid-cols-2 gap-x-12'
            : 'grid grid-cols-1'
        }
      >
        {items.map((item) => {
          if (isWineItem(item)) {
            return <WineCard key={item.id} item={item} showGlass={wineShowGlass} />;
          }
          if (isFoodItem(item)) {
            return <FoodCard key={item.id} item={item} />;
          }
          // CocktailItem
          const cocktail = item as CocktailItem;
          return (
            <div key={cocktail.id} className="py-4 border-b border-charcoal/10 last:border-0">
              <div className="flex items-start justify-between gap-4">
                <span className="font-cormorant font-semibold text-lg leading-tight">
                  {cocktail.name}
                </span>
                <span className="font-cormorant text-gold font-semibold text-lg flex-shrink-0">
                  ${cocktail.price}
                </span>
              </div>
              <p className="text-sm text-charcoal/60 font-lato mt-1 leading-relaxed">
                {cocktail.description}
              </p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
