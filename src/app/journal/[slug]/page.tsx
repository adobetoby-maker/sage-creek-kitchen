import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articles } from '@/lib/articles';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: 'Not Found' };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Safe: body content is authored in-codebase (articles.ts), never from user input.
// This is equivalent to rendering MDX or template strings — not untrusted content.
function ArticleBody({ html }: { html: string }) {
  // eslint-disable-next-line react/no-danger
  return (
    <div
      className="font-lato font-light text-charcoal/70 text-base leading-relaxed [&_p]:mb-5"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: content is static, authored in articles.ts
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-72 bg-charcoal overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://images.unsplash.com/photo-${article.imageId}?auto=format&fit=crop&w=1600&q=80`}
          alt={article.title}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
        <div className="absolute bottom-10 left-0 right-0 px-6 text-center">
          <p className="font-lato text-[11px] uppercase tracking-[0.2em] text-gold mb-3">
            {formatDate(article.date)} · {article.readTime}
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl italic font-semibold text-cream max-w-3xl mx-auto leading-tight">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            {/* Article body */}
            <article className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-10 pb-8 border-b border-charcoal/10">
                <div className="w-10 h-10 rounded-full bg-charcoal/8 flex items-center justify-center flex-shrink-0">
                  <span className="font-cormorant text-lg font-semibold text-charcoal/40">
                    {article.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-lato text-sm font-light text-charcoal">
                    By {article.author}
                  </p>
                  <p className="font-lato text-[11px] uppercase tracking-[0.1em] text-charcoal/40 mt-0.5">
                    {formatDate(article.date)} · {article.readTime}
                  </p>
                </div>
              </div>

              <ArticleBody html={article.body} />
            </article>

            {/* Sidebar */}
            <aside className="space-y-10 lg:sticky lg:top-24">
              {/* Reserve CTA */}
              <div className="bg-cream border border-charcoal/10 p-7 text-center">
                <div className="w-8 h-px bg-gold mx-auto mb-5" />
                <h3 className="font-cormorant text-xl italic font-semibold text-charcoal mb-3">
                  Join Us for Dinner
                </h3>
                <p className="font-lato font-light text-charcoal/60 text-sm leading-relaxed mb-6">
                  Experience the flavors behind our stories. Tuesday through Sunday, 5PM to 10PM.
                </p>
                <Link
                  href="/reservations"
                  className="inline-block bg-sage text-cream px-6 py-3 text-xs uppercase tracking-widest hover:bg-sage-dark transition-colors duration-200 font-lato w-full"
                >
                  Reserve a Table
                </Link>
              </div>

              {/* Related articles */}
              {related.length > 0 && (
                <div>
                  <p className="font-lato text-[11px] uppercase tracking-[0.15em] text-charcoal/40 mb-5">
                    Also in the Journal
                  </p>
                  <div className="space-y-5">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/journal/${r.slug}`}
                        className="group block border-b border-charcoal/10 pb-5 last:border-0 last:pb-0"
                      >
                        <p className="font-lato text-[10px] uppercase tracking-[0.1em] text-gold mb-1.5">
                          {formatDate(r.date)}
                        </p>
                        <p className="font-cormorant text-base font-semibold text-charcoal group-hover:text-sage transition-colors duration-200 leading-snug">
                          {r.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Back to Journal */}
      <section className="py-16 bg-cream text-center">
        <Link
          href="/journal"
          className="font-lato text-sm uppercase tracking-widest text-charcoal/60 hover:text-sage transition-colors duration-200"
        >
          Back to the Journal
        </Link>
      </section>
    </>
  );
}
