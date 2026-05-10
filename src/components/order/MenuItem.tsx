'use client';

import type { MenuItem } from '@/lib/menu';
import DietaryBadge from '@/components/menu/DietaryBadge';

interface MenuItemCardProps {
  item: MenuItem;
  cartQuantity: number;
  onAdd: () => void;
  onRemove: () => void;
}

export default function MenuItemCard({ item, cartQuantity, onAdd, onRemove }: MenuItemCardProps) {
  return (
    <div className="flex gap-4 py-5 border-b border-charcoal/8 last:border-0">
      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-2 flex-wrap mb-1">
          <h3 className="font-cormorant text-lg font-semibold text-charcoal leading-tight">
            {item.name}
          </h3>
          {item.dietary.map((tag) => (
            <DietaryBadge key={tag} tag={tag} />
          ))}
          {item.seasonal && (
            <span className="inline-block text-[10px] px-1.5 py-0.5 rounded-sm leading-none border border-gold/40 text-gold/60">
              Seasonal
            </span>
          )}
        </div>
        <p className="font-lato font-light text-charcoal/60 text-sm leading-relaxed mb-2">
          {item.description}
        </p>
        <p className="font-cormorant text-lg text-gold font-semibold">
          ${item.price.toFixed(2)}
        </p>
      </div>

      {/* Cart controls */}
      <div className="flex-shrink-0 flex items-center">
        {cartQuantity === 0 ? (
          <button
            type="button"
            onClick={onAdd}
            aria-label={`Add ${item.name} to cart`}
            className="w-9 h-9 bg-sage text-cream flex items-center justify-center text-xl leading-none hover:bg-sage-dark transition-colors duration-200"
          >
            +
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onRemove}
              aria-label={`Remove one ${item.name} from cart`}
              className="w-8 h-8 border border-sage text-sage flex items-center justify-center text-lg leading-none hover:bg-sage hover:text-cream transition-colors duration-200"
            >
              −
            </button>
            <span className="font-lato text-sm font-normal text-charcoal w-5 text-center">
              {cartQuantity}
            </span>
            <button
              type="button"
              onClick={onAdd}
              aria-label={`Add another ${item.name} to cart`}
              className="w-8 h-8 bg-sage text-cream flex items-center justify-center text-lg leading-none hover:bg-sage-dark transition-colors duration-200"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
