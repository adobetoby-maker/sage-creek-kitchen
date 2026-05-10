import type { Metadata } from 'next';
import MenuTabs from '@/components/menu/MenuTabs';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Seasonal farm-to-table menu featuring Idaho Rainbow Trout, Snake River Wagyu, local produce and an Idaho wine program.',
};

export default function MenuPage() {
  return (
    <>
      {/* Page header */}
      <div className="py-24 bg-cream text-center">
        <h1 className="font-cormorant text-5xl italic text-charcoal mb-4">Our Menu</h1>
        <p className="text-charcoal/60 font-lato text-base max-w-xl mx-auto px-6 leading-relaxed">
          Our menu changes seasonally to reflect Idaho&apos;s finest ingredients.
          Menu items marked with ❧ are seasonal.
        </p>
        <p className="mt-4 text-[13px] text-charcoal/50 font-lato tracking-wide">
          <span className="inline-flex items-center gap-3">
            <span>
              <span className="inline-block border border-gold/50 text-gold/70 text-[10px] px-1.5 py-0.5 rounded-sm leading-none mr-1">GF</span>
              Gluten Free
            </span>
            <span aria-hidden="true">·</span>
            <span>
              <span className="inline-block border border-gold/50 text-gold/70 text-[10px] px-1.5 py-0.5 rounded-sm leading-none mr-1">V</span>
              Vegetarian
            </span>
            <span aria-hidden="true">·</span>
            <span>
              <span className="inline-block border border-gold/50 text-gold/70 text-[10px] px-1.5 py-0.5 rounded-sm leading-none mr-1">VG</span>
              Vegan
            </span>
          </span>
        </p>
      </div>

      {/* Tab navigation + tab content */}
      <MenuTabs />
    </>
  );
}
