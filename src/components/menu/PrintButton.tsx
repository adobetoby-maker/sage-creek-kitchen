'use client';

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="mt-8 border border-charcoal/30 text-charcoal/70 px-6 py-2.5 text-sm tracking-widest uppercase font-lato hover:border-charcoal hover:text-charcoal transition-colors duration-200"
    >
      Print Menu
    </button>
  );
}
