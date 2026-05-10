import type { DietaryTag } from '@/lib/menu';

const labelMap: Record<DietaryTag, string> = {
  gf: 'GF',
  v: 'V',
  vg: 'VG',
};

interface DietaryBadgeProps {
  tag: DietaryTag;
}

export default function DietaryBadge({ tag }: DietaryBadgeProps) {
  return (
    <span className="inline-block border border-gold/50 text-gold/70 text-[10px] px-1.5 py-0.5 rounded-sm leading-none">
      {labelMap[tag]}
    </span>
  );
}
