'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6 },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7 },
};

const principles = [
  {
    title: 'Local Sourcing',
    body: 'Every ingredient sourced within 150 miles of our kitchen',
  },
  {
    title: 'Seasonal Rotation',
    body: "Our menu changes with Idaho's harvests, not with corporate calendars",
  },
  {
    title: 'Zero Waste',
    body: "We plan our menus backward from what's available, minimizing waste and maximizing flavor",
  },
];

const partners = [
  {
    name: 'Riverence',
    location: 'Filer & Twin Falls, ID',
    product: 'Idaho Rainbow Trout & Steelhead',
  },
  {
    name: 'Snake River Farms',
    location: 'Twin Falls, ID',
    product: 'American Wagyu Beef',
  },
  {
    name: "Kelley's Canyon Orchard",
    location: 'Filer, ID',
    product: 'Stone Fruits (cherries, peaches, apricots)',
  },
  {
    name: 'Peters Family Farms',
    location: 'Magic Valley, ID',
    product: 'Seasonal Vegetables',
  },
  {
    name: 'Purple Sage Farms',
    location: 'Middleton, ID',
    product: 'Certified Organic Herbs',
  },
  {
    name: 'Blue Rock Farm',
    location: 'Buhl, ID',
    product: 'Seasonal Produce',
  },
];

const team = [
  {
    name: 'Chef Elena Vasquez',
    role: 'Chef & Owner',
    bio: null,
  },
  {
    name: 'Marcus Thayer',
    role: 'Sous Chef',
    bio: 'Trained in Napa, joined Sage Creek in 2016',
  },
  {
    name: 'Isabelle Roy',
    role: 'Pastry Chef',
    bio: 'Paris-trained, relocated to Twin Falls for the local fruit',
  },
  {
    name: 'Jordan Kamali',
    role: 'Bar Manager',
    bio: 'Curates our Idaho wine program and seasonal cocktail menu',
  },
];

const timeline = [
  { year: '2012', event: 'Opened Sage Creek Kitchen at 845 Shoshone St N' },
  { year: '2016', event: 'First James Beard Award nomination, Marcus Thayer joins the team' },
  { year: '2019', event: 'Private dining room expansion (40 guests)' },
  { year: '2022', event: 'Launch of the Idaho wine program' },
  { year: '2023', event: 'Saturday & Sunday brunch added' },
];

export default function OurStoryContent() {
  return (
    <>
      {/* Hero */}
      <section className="py-32 bg-cream text-center">
        <motion.div {...fadeUp} className="px-6">
          <p className="font-lato text-[11px] uppercase tracking-[0.25em] text-gold mb-5">
            Est. 2012 · Twin Falls, Idaho
          </p>
          <h1 className="font-cormorant text-5xl italic font-semibold text-charcoal mb-6">
            Our Story
          </h1>
          <p className="font-lato font-light text-charcoal/60 text-lg">
            Twelve years of Idaho on a plate.
          </p>
        </motion.div>
      </section>

      {/* Chef Bio */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Image placeholder */}
            <motion.div {...fadeIn}>
              <div
                className="bg-charcoal/10 flex items-center justify-center text-center px-6"
                style={{ aspectRatio: '3/4' }}
              >
                <p className="font-lato text-[11px] uppercase tracking-[0.15em] text-charcoal/40">
                  Chef Elena Vasquez
                </p>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div {...fadeUp}>
              <p className="font-lato text-[11px] uppercase tracking-[0.2em] text-gold mb-3">
                Chef &amp; Owner
              </p>
              <h2 className="font-cormorant text-4xl font-semibold text-charcoal mb-8">
                Elena Vasquez
              </h2>
              <p className="font-lato font-light text-charcoal/70 text-base leading-relaxed mb-6">
                Chef Elena Vasquez returned to her home state of Idaho after training in
                Portland&apos;s celebrated farm-to-table restaurant scene. She opened Sage Creek
                Kitchen in 2012 with a single conviction: that Idaho&apos;s extraordinary
                agricultural landscape — its spring-water trout farms, century-old orchards, and
                volcanic soil vineyards — deserved a restaurant worthy of it.
              </p>
              <p className="font-lato font-light text-charcoal/70 text-base leading-relaxed">
                Twelve years later, every plate still begins the same way: a walk through
                what&apos;s available this week, a conversation with a farmer, a decision made by
                what Idaho is offering today rather than what a menu says it should be.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="font-lato text-[11px] uppercase tracking-[0.2em] text-gold mb-3">
              Our Approach
            </p>
            <h2 className="font-cormorant text-3xl font-semibold text-charcoal">How We Cook</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, i) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-charcoal/10 p-8 text-center"
              >
                <div className="w-8 h-px bg-gold mx-auto mb-6" />
                <h3 className="font-cormorant text-xl font-semibold text-charcoal mb-4">
                  {principle.title}
                </h3>
                <p className="font-lato font-light text-charcoal/70 text-sm leading-relaxed">
                  {principle.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Producer Partners */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="font-lato text-[11px] uppercase tracking-[0.2em] text-gold mb-3">
              Farm to Table
            </p>
            <h2 className="font-cormorant text-3xl font-semibold text-charcoal">Our Partners</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex gap-5 p-6 border border-charcoal/10 bg-cream/30"
              >
                <div className="w-px bg-gold/40 flex-shrink-0" />
                <div>
                  <h3 className="font-cormorant text-lg font-semibold text-charcoal">
                    {partner.name}
                  </h3>
                  <p className="font-lato text-[11px] uppercase tracking-[0.1em] text-charcoal/40 mt-0.5 mb-2">
                    {partner.location}
                  </p>
                  <p className="font-lato font-light text-charcoal/70 text-sm">
                    {partner.product}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchen Team */}
      <section className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="font-lato text-[11px] uppercase tracking-[0.2em] text-gold mb-3">
              Behind the Pass
            </p>
            <h2 className="font-cormorant text-3xl font-semibold text-charcoal">The Team</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-charcoal/10 p-6 text-center"
              >
                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-full bg-charcoal/8 flex items-center justify-center mx-auto mb-4">
                  <span className="font-cormorant text-xl font-semibold text-charcoal/30">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-cormorant text-lg font-semibold text-charcoal">
                  {member.name}
                </h3>
                <p className="font-lato text-[11px] uppercase tracking-[0.12em] text-gold mt-1 mb-3">
                  {member.role}
                </p>
                {member.bio && (
                  <p className="font-lato font-light text-charcoal/60 text-xs leading-relaxed">
                    {member.bio}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="font-lato text-[11px] uppercase tracking-[0.2em] text-gold mb-3">
              Our Journey
            </p>
            <h2 className="font-cormorant text-3xl font-semibold text-charcoal">
              Twelve Years of Milestones
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical rule */}
            <div className="absolute left-16 top-0 bottom-0 w-px bg-charcoal/10 hidden sm:block" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-8 items-start"
                >
                  {/* Year */}
                  <div className="w-16 flex-shrink-0 text-right relative">
                    <span className="font-cormorant text-lg font-semibold text-gold">
                      {item.year}
                    </span>
                    {/* Dot */}
                    <div className="hidden sm:block absolute right-[-21px] top-1.5 w-3 h-3 rounded-full border-2 border-gold bg-white" />
                  </div>

                  {/* Event */}
                  <div className="flex-1 pt-0.5">
                    <p className="font-lato font-light text-charcoal/70 text-sm leading-relaxed">
                      {item.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-24 bg-sage text-center">
        <motion.div {...fadeUp} className="px-6">
          <h2 className="font-cormorant text-4xl italic font-semibold text-cream mb-6">
            Experience Idaho on a Plate
          </h2>
          <p className="font-lato font-light text-cream/80 text-sm mb-10 max-w-md mx-auto leading-relaxed">
            Join us for an evening celebrating the best of Magic Valley farms and the people who
            grow them.
          </p>
          <Link
            href="/reservations"
            className="inline-block bg-cream text-charcoal px-8 py-4 text-sm uppercase tracking-widest hover:bg-cream-dark transition-colors duration-200 font-lato"
          >
            Reserve Your Table
          </Link>
        </motion.div>
      </section>
    </>
  );
}
