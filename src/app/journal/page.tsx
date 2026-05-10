import type { Metadata } from 'next';
import Link from 'next/link';
import { articles } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'Journal',
  description:
    "Stories from the Sage Creek Kitchen table — seasonal menus, producer profiles, and the people behind Idaho's farm-to-table movement.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function JournalPage() {
  return (
    <>
      {/* Header */}
      <section className="py-32 bg-cream text-center">
        <div className="px-6">
          <p className="font-lato text-[11px] uppercase tracking-[0.25em] text-gold mb-5">
            From Our Table
          </p>
          <h1 className="font-cormorant text-5xl italic font-semibold text-charcoal mb-6">
            The Journal
          </h1>
          <p className="font-lato font-light text-charcoal/60 text-lg max-w-xl mx-auto leading-relaxed">
            Stories about the producers, seasons, and ideas behind the food at Sage Creek Kitchen.
          </p>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/journal/${article.slug}`}
                className="group block border border-charcoal/10 overflow-hidden hover:border-sage/30 transition-colors duration-300"
              >
                {/* Image */}
                <div className="relative h-56 bg-charcoal/10 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://images.unsplash.com/photo-${article.imageId}?auto=format&fit=crop&w=800&q=80`}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-7">
                  <p className="font-lato text-[10px] uppercase tracking-[0.15em] text-gold mb-3">
                    {formatDate(article.date)} · {article.readTime}
                  </p>
                  <h2 className="font-cormorant text-2xl font-semibold text-charcoal mb-3 group-hover:text-sage transition-colors duration-200 leading-tight">
                    {article.title}
                  </h2>
                  <p className="font-lato font-light text-charcoal/60 text-sm leading-relaxed mb-5">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-lato text-[11px] uppercase tracking-[0.1em] text-charcoal/40">
                      By {article.author}
                    </span>
                    <span className="font-lato text-sm text-sage group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
