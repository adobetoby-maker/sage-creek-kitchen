'use client';

import { motion } from 'framer-motion';
import type { MenuItem, WineItem, CocktailItem } from '@/lib/menu';
import FoodCard from './FoodCard';
import WineCard from './WineCard';
import CocktailCard from './CocktailCard';

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
          return <CocktailCard key={item.id} item={item as CocktailItem} />;
        })}
      </div>
    </motion.div>
  );
}
