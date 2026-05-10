'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  starters,
  mains,
  desserts,
  brunch,
  brunchCocktails,
  wineByGlass,
  bottleList,
  cocktails,
} from '@/lib/menu';
import MenuSection from './MenuSection';
import PrintButton from './PrintButton';

type Tab = 'dinner' | 'brunch' | 'wine';

const tabs: { id: Tab; label: string }[] = [
  { id: 'dinner', label: 'Dinner' },
  { id: 'brunch', label: 'Brunch' },
  { id: 'wine', label: 'Wine & Cocktails' },
];

const fadeVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

function DinnerTab() {
  return (
    <motion.div
      key="dinner"
      variants={fadeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <MenuSection title="Starters" items={starters} columns={2} />
      <hr className="border-charcoal/10 mb-12" />
      <MenuSection title="Mains" items={mains} columns={2} />
      <hr className="border-charcoal/10 mb-12" />
      <MenuSection title="Desserts" items={desserts} columns={2} />
    </motion.div>
  );
}

function BrunchTab() {
  return (
    <motion.div
      key="brunch"
      variants={fadeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <MenuSection title="Morning Plates" items={brunch} columns={2} />
      <hr className="border-charcoal/10 mb-12" />
      <MenuSection title="Brunch Cocktails" items={brunchCocktails} columns={2} />
    </motion.div>
  );
}

function WineTab() {
  return (
    <motion.div
      key="wine"
      variants={fadeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <MenuSection title="Wine by the Glass" items={wineByGlass} columns={2} wineShowGlass={true} />
      <hr className="border-charcoal/10 mb-12" />
      <MenuSection title="Bottle List" items={bottleList} columns={2} wineShowGlass={false} />
      <hr className="border-charcoal/10 mb-12" />
      <MenuSection title="Cocktails" items={cocktails} columns={2} />
    </motion.div>
  );
}

export default function MenuTabs() {
  const [activeTab, setActiveTab] = useState<Tab>('dinner');

  return (
    <>
      {/* Tab navigation */}
      <div className="sticky top-[64px] z-40 bg-cream border-b border-charcoal/10 print:hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div role="tablist" aria-label="Menu sections" className="flex justify-center gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`tabpanel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 text-sm tracking-wide transition-colors duration-200 font-lato ${
                  activeTab === tab.id
                    ? 'border-b-2 border-charcoal text-charcoal font-semibold'
                    : 'text-charcoal/50 hover:text-charcoal'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <section
        id={`tabpanel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="max-w-5xl mx-auto px-6 py-16"
      >
        <AnimatePresence mode="wait">
          {activeTab === 'dinner' && <DinnerTab key="dinner" />}
          {activeTab === 'brunch' && <BrunchTab key="brunch" />}
          {activeTab === 'wine' && <WineTab key="wine" />}
        </AnimatePresence>
      </section>

      {/* Print CTA — visible on all tabs */}
      <div className="flex justify-center pb-16 print:hidden">
        <PrintButton />
      </div>
    </>
  );
}
