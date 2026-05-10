export default function HoursStrip() {
  return (
    <section className="py-12 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-around gap-8 text-center">
          <div>
            <p className="text-gold uppercase tracking-widest text-xs mb-2 font-lato">Dinner</p>
            <p className="font-cormorant text-xl text-cream">Tue &ndash; Sun, 5PM &ndash; 10PM</p>
          </div>
          <div className="hidden md:block w-px h-10 bg-cream/20" />
          <div>
            <p className="text-gold uppercase tracking-widest text-xs mb-2 font-lato">Brunch</p>
            <p className="font-cormorant text-xl text-cream">Sat &ndash; Sun, 10AM &ndash; 2PM</p>
          </div>
          <div className="hidden md:block w-px h-10 bg-cream/20" />
          <div>
            <p className="text-gold uppercase tracking-widest text-xs mb-2 font-lato">Location</p>
            <p className="font-cormorant text-xl text-cream">845 Shoshone St N, Twin Falls</p>
          </div>
        </div>
      </div>
    </section>
  );
}
