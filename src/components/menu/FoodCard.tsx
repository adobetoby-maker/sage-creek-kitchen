import type { MenuItem } from '@/lib/menu';
import DietaryBadge from './DietaryBadge';

interface FoodCardProps {
  item: MenuItem;
}

export default function FoodCard({ item }: FoodCardProps) {
  return (
    <div className="py-4 border-b border-charcoal/10 last:border-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-2 flex-wrap min-w-0">
          <span className="font-cormorant font-semibold text-lg leading-tight">{item.name}</span>
          {item.dietary.length > 0 && (
            <span className="flex items-center gap-1 flex-shrink-0 mt-0.5">
              {item.dietary.map((tag) => (
                <DietaryBadge key={tag} tag={tag} />
              ))}
            </span>
          )}
        </div>
        <span className="font-cormorant text-gold font-semibold text-lg flex-shrink-0">
          ${item.price}
        </span>
      </div>
      <p className="text-sm text-charcoal/60 font-lato mt-1 leading-relaxed">
        {item.description}
      </p>
      {item.seasonal && (
        <span className="inline-block mt-1.5 text-[11px] text-sage font-lato tracking-wide">
          ❧ seasonal
        </span>
      )}
    </div>
  );
}
