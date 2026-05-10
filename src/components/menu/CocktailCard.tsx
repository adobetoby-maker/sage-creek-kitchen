import type { CocktailItem } from '@/lib/menu';

export default function CocktailCard({ item }: { item: CocktailItem }) {
  return (
    <div className="py-4 border-b border-charcoal/10 last:border-0">
      <div className="flex items-start justify-between gap-4">
        <span className="font-cormorant font-semibold text-lg leading-tight">{item.name}</span>
        <span className="font-cormorant text-gold font-semibold text-lg flex-shrink-0">
          ${item.price}
        </span>
      </div>
      <p className="text-sm text-charcoal/60 font-lato mt-1 leading-relaxed">{item.description}</p>
    </div>
  );
}
