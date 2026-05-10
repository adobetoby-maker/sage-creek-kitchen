'use client';

import { useActionState } from 'react';
import { motion } from 'framer-motion';
import WineCard from '@/components/menu/WineCard';
import CocktailCard from '@/components/menu/CocktailCard';
import { wineByGlass, bottleList, cocktails } from '@/lib/menu';
import { submitWineDinnerSignup, type WineDinnerState } from '@/app/wine/actions';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0 },
  transition: { duration: 0.6 },
};

const idahoProducers = [
  {
    name: 'Telaya Wine Co.',
    location: 'Boise, Idaho',
    description:
      'Old-World inspired wines from regionally grown fruit. Known for their Merlot, Syrah, and GSM blends.',
  },
  {
    name: 'Cinder Wines',
    location: 'Snake River Valley',
    description:
      'Celebrating the volcanic cinder soils of Idaho. Their Viognier and Tempranillo are Sage Creek Kitchen staples.',
  },
  {
    name: 'Holesinskey Vineyards',
    location: 'Hagerman Valley',
    description:
      'On the banks of the Snake River in Hagerman Valley — as local as it gets.',
  },
  {
    name: '3 Horse Ranch Vineyards',
    location: 'Eagle Foothills, Idaho',
    description:
      'Estate wines from the Eagle Foothills AVA, a sub-zone of the Snake River Valley.',
  },
];

const idahoBottles = bottleList.filter((w) =>
  w.region.toLowerCase().includes('idaho')
);
const pacificNWBottles = bottleList.filter(
  (w) =>
    (w.region.toLowerCase().includes('oregon') ||
      w.region.toLowerCase().includes('washington')) &&
    !w.region.toLowerCase().includes('idaho')
);
const europeBottles = bottleList.filter(
  (w) =>
    !w.region.toLowerCase().includes('idaho') &&
    !w.region.toLowerCase().includes('oregon') &&
    !w.region.toLowerCase().includes('washington')
);

const labelClass =
  'block text-[11px] font-lato uppercase tracking-[0.15em] text-charcoal/60 mb-1.5';
const inputClass =
  'w-full border border-cream/30 bg-sage-dark/20 px-4 py-3 text-cream text-sm font-lato font-light rounded-none focus:outline-none focus:border-cream/60 focus:ring-1 focus:ring-cream/20 transition-colors duration-200 placeholder:text-cream/40';

export default function WinePageContent() {
  const [state, formAction, isPending] = useActionState<WineDinnerState, FormData>(
    submitWineDinnerSignup,
    null
  );

  return (
    <>
      {/* Hero */}
      <section className="py-32 bg-cream text-center">
        <motion.div {...fadeUp} className="px-6">
          <p className="font-lato text-[11px] uppercase tracking-[0.25em] text-gold mb-5">
            The Wine Program
          </p>
          <h1 className="font-cormorant text-5xl italic font-semibold text-charcoal mb-6">
            Curated for Idaho
          </h1>
          <p className="font-lato font-light text-charcoal/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Our cellar celebrates the Snake River Valley AVA — Idaho&apos;s growing wine country on
            the same latitude as the Rhône Valley of France.
          </p>
        </motion.div>
      </section>

      {/* Idaho Wine Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-cormorant text-3xl font-semibold text-charcoal mb-6">
              Snake River Valley AVA
            </h2>
            <p className="font-lato font-light text-charcoal/70 text-base leading-relaxed max-w-3xl mx-auto">
              Established in 2007, the Snake River Valley AVA stretches across southwestern Idaho at
              2,700–3,000 feet elevation, where volcanic basalt soils and dramatic diurnal
              temperature swings — sometimes 50°F between day and night — produce wines of
              remarkable complexity. Over 50 wineries now call this region home.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {idahoProducers.map((producer, i) => (
              <motion.div
                key={producer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-charcoal/10 p-7"
              >
                <div className="w-8 h-px bg-gold mb-5" />
                <h3 className="font-cormorant text-xl font-semibold text-charcoal mb-1">
                  {producer.name}
                </h3>
                <p className="font-lato text-[11px] uppercase tracking-[0.12em] text-gold mb-3">
                  {producer.location}
                </p>
                <p className="font-lato font-light text-charcoal/70 text-sm leading-relaxed">
                  {producer.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wine by the Glass */}
      <section className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="font-lato text-[11px] uppercase tracking-[0.2em] text-gold mb-3">
              Current Pours
            </p>
            <h2 className="font-cormorant text-3xl font-semibold text-charcoal">
              Wine by the Glass
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12"
          >
            {wineByGlass.map((item) => (
              <WineCard key={item.id} item={item} showGlass />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottle List */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="font-lato text-[11px] uppercase tracking-[0.2em] text-gold mb-3">
              The Cellar
            </p>
            <h2 className="font-cormorant text-3xl font-semibold text-charcoal">Bottle List</h2>
          </motion.div>

          {/* Idaho */}
          {idahoBottles.length > 0 && (
            <motion.div {...fadeUp} className="mb-12">
              <h3 className="font-cormorant text-xl font-semibold text-charcoal mb-1 border-b border-charcoal/10 pb-3">
                Idaho
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                {idahoBottles.map((item) => (
                  <WineCard key={item.id} item={item} />
                ))}
              </div>
            </motion.div>
          )}

          {/* Pacific Northwest */}
          {pacificNWBottles.length > 0 && (
            <motion.div {...fadeUp} className="mb-12">
              <h3 className="font-cormorant text-xl font-semibold text-charcoal mb-1 border-b border-charcoal/10 pb-3">
                Pacific Northwest
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                {pacificNWBottles.map((item) => (
                  <WineCard key={item.id} item={item} />
                ))}
              </div>
            </motion.div>
          )}

          {/* Europe */}
          {europeBottles.length > 0 && (
            <motion.div {...fadeUp}>
              <h3 className="font-cormorant text-xl font-semibold text-charcoal mb-1 border-b border-charcoal/10 pb-3">
                Europe
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                {europeBottles.map((item) => (
                  <WineCard key={item.id} item={item} />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Wine Dinner Series */}
      <section className="py-24 bg-sage">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="font-lato text-[11px] uppercase tracking-[0.2em] text-cream/60 mb-3">
              Monthly Events
            </p>
            <h2 className="font-cormorant text-3xl font-semibold text-cream mb-6">
              Wine Dinner Series
            </h2>
            <p className="font-lato font-light text-cream/80 text-base leading-relaxed mb-10">
              Monthly wine dinners pairing Idaho wines with our seasonal menu. Join our mailing list
              to be the first to know.
            </p>

            {state?.success ? (
              <div className="bg-cream/10 border border-cream/20 px-6 py-5">
                <p className="font-cormorant text-xl italic text-cream">
                  You&apos;re on the list. We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form action={formAction} className="space-y-4 text-left">
                <div>
                  <label htmlFor="wd-name" className={`${labelClass} text-cream/60`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="wd-name"
                    name="name"
                    required
                    placeholder="Your name"
                    autoComplete="name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="wd-email" className={`${labelClass} text-cream/60`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="wd-email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    autoComplete="email"
                    className={inputClass}
                  />
                </div>
                {state?.error && (
                  <p className="text-sm font-lato text-red-300">{state.error}</p>
                )}
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-cream text-charcoal px-8 py-4 text-sm uppercase tracking-widest hover:bg-cream-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed font-lato"
                >
                  {isPending ? 'Joining…' : 'Join the Mailing List'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Cocktail Program Highlight */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="font-lato text-[11px] uppercase tracking-[0.2em] text-gold mb-3">
              The Bar
            </p>
            <h2 className="font-cormorant text-3xl font-semibold text-charcoal mb-4">
              Beyond Wine
            </h2>
            <p className="font-lato font-light text-charcoal/60 text-base max-w-xl mx-auto leading-relaxed">
              Bar Manager Jordan Kamali crafts seasonal cocktails using Idaho spirits and house-made
              syrups drawn from the same local producers that inspire our kitchen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12"
          >
            {cocktails.map((item) => (
              <CocktailCard key={item.id} item={item} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
