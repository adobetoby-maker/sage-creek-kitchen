import type { WineItem } from '@/lib/menu';

interface WineCardProps {
  item: WineItem;
  showGlass?: boolean;
}

export default function WineCard({ item, showGlass = false }: WineCardProps) {
  return (
    <div className="py-4 border-b border-charcoal/10 last:border-0">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <span className="font-cormorant font-semibold text-lg leading-tight block">
            {item.name}
          </span>
          <span className="text-charcoal/50 text-sm font-lato italic block mt-0.5">
            {item.varietal}
          </span>
        </div>
        <div className="flex-shrink-0 text-right">
          {showGlass && item.glass != null && (
            <span className="font-cormorant text-gold font-semibold text-base block">
              Glass ${item.glass}
            </span>
          )}
          <span className="font-cormorant text-charcoal/70 font-semibold text-base block">
            Bottle ${item.bottle}
          </span>
        </div>
      </div>
      <p className="text-sm text-charcoal/50 font-lato italic mt-1">
        {item.producer} · {item.region} · {item.vintage}
      </p>
    </div>
  );
}
