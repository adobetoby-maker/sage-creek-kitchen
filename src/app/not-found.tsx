import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center text-center px-6 py-32">
      <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">404</p>
      <h1 className="font-cormorant text-5xl md:text-6xl italic text-charcoal mb-6">
        This table doesn&apos;t exist.
      </h1>
      <p className="text-charcoal/60 font-lato text-lg mb-10 max-w-md">
        But we have one for you. Let us set a place at Sage Creek Kitchen.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/reservations"
          className="bg-sage text-cream px-8 py-4 text-sm tracking-widest uppercase hover:bg-sage-dark transition-colors duration-200"
        >
          Reserve a Table
        </Link>
        <Link
          href="/"
          className="border border-charcoal text-charcoal px-8 py-4 text-sm tracking-widest uppercase hover:bg-charcoal hover:text-cream transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
