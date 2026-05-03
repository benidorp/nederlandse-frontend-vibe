import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowRight, BookOpen, Search, Crown, Sparkles, TrendingUp, Shield } from "lucide-react";
import FooterPremiumDomainsEN from "@/components/premium-domains/FooterPremiumDomainsEN";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ARTICLE_CATEGORIES,
  ARTICLE_META,
  ARTICLE_SLUGS,
} from "@/content/expired-domain-articles";

const SITE = "https://www.iaee.eu";
const MARKETPLACE_URL = "/expireddomainnames/en/buy-premium-domains-high-authority-seo-value";
const PAGE_SIZE = 12;

const ExpiredDomainArticlesIndex = () => {
  const [params, setParams] = useSearchParams();
  const activeCat = params.get("category") || "all";
  const page = Math.max(1, parseInt(params.get("page") || "1", 10));
  const [query, setQuery] = useState(params.get("q") || "");

  const allArticles = useMemo(
    () => ARTICLE_SLUGS.map((s) => ARTICLE_META[s]).filter(Boolean),
    []
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: allArticles.length };
    for (const a of allArticles) c[a.categoryId] = (c[a.categoryId] || 0) + 1;
    return c;
  }, [allArticles]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allArticles.filter((a) => {
      if (activeCat !== "all" && a.categoryId !== activeCat) return false;
      if (q && !(a.h1.toLowerCase().includes(q) || a.primaryKeyword.toLowerCase().includes(q) || a.metaDescription.toLowerCase().includes(q))) return false;
      return true;
    });
  }, [allArticles, activeCat, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const visible = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  // Featured = first 3 of full list (stable hero picks)
  const featured = allArticles.slice(0, 3);

  const setCategory = (id: string) => {
    const next = new URLSearchParams(params);
    if (id === "all") next.delete("category"); else next.set("category", id);
    next.delete("page");
    setParams(next);
  };

  const goPage = (p: number) => {
    const next = new URLSearchParams(params);
    if (p <= 1) next.delete("page"); else next.set("page", String(p));
    setParams(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = new URLSearchParams(params);
    if (query.trim()) next.set("q", query.trim()); else next.delete("q");
    next.delete("page");
    setParams(next);
  };

  const canonical = `${SITE}/expireddomainnames/en/articles${activeCat !== "all" ? `?category=${activeCat}` : ""}`;
  const activeCatName = ARTICLE_CATEGORIES.find((c) => c.id === activeCat)?.name;

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: visible.map((a, i) => ({
      "@type": "ListItem",
      position: (safePage - 1) * PAGE_SIZE + i + 1,
      url: `${SITE}/expireddomainnames/en/articles/${a.slug}`,
      name: a.h1,
    })),
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Helmet>
        <html lang="en" />
        <title>{activeCatName ? `${activeCatName} Articles | Premium Expired Domains | IAEE` : "Premium Expired Domain Articles & Buyer Guides | IAEE"}</title>
        <meta
          name="description"
          content={`In-depth English guides on buying premium expired domains: SEO value, brand strategy, evaluation tips and smart buyer advice. ${allArticles.length}+ articles for serious buyers.`}
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Premium Expired Domain Articles & Buyer Guides | IAEE" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      {/* Branded Premium Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-amber-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to={MARKETPLACE_URL} className="flex items-center gap-3 min-w-0">
            <Crown className="h-7 w-7 text-amber-400" />
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
              Premium Domains
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link to={MARKETPLACE_URL} className="text-slate-300 hover:text-amber-400 transition-colors">Domains</Link>
            <Link to="/expireddomainnames/en/articles" className="text-amber-400">Blog</Link>
            <Button asChild className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold">
              <Link to={MARKETPLACE_URL}>View Inventory</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-amber-500/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/30 via-slate-950 to-slate-950" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-400">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link to="/" className="hover:text-amber-300">Home</Link></li>
                <li aria-hidden>›</li>
                <li><Link to={MARKETPLACE_URL} className="hover:text-amber-300">Premium Domains</Link></li>
                <li aria-hidden>›</li>
                <li className="text-amber-300" aria-current="page">Articles</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
                <Sparkles className="h-4 w-4" /> Premium Expired Domains Knowledge Hub
              </p>
              <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-br from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
                Buyer Guides &amp; Strategy Articles
              </h1>
              <p className="mt-5 text-lg text-slate-300 leading-relaxed">
                {allArticles.length} in-depth articles for entrepreneurs, marketers, SEO professionals
                and serious operators. Learn how to evaluate, negotiate and grow with premium expired
                domain names — across SEO, branding, investing and high-demand niches.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl">
                {[
                  { icon: BookOpen, label: "Articles", value: `${allArticles.length}+` },
                  { icon: TrendingUp, label: "Niches covered", value: "40+" },
                  { icon: Shield, label: "Updated for", value: "2026" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="rounded-xl border border-amber-500/20 bg-slate-900/40 p-4 backdrop-blur">
                    <Icon className="h-5 w-5 text-amber-400" />
                    <div className="mt-2 text-2xl font-bold text-amber-200">{value}</div>
                    <div className="text-xs uppercase tracking-wide text-slate-400">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured */}
        <section className="container mx-auto px-4 py-12 md:py-16 border-b border-slate-800/60">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Featured guides</h2>
            <span className="text-xs uppercase tracking-widest text-amber-400">Editor's picks</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((a) => (
              <Link
                key={a.slug}
                to={`/expireddomainnames/en/articles/${a.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/30 p-6 transition hover:border-amber-400/60 hover:shadow-[0_0_30px_-10px_rgba(251,191,36,0.4)]"
              >
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-amber-500/10 blur-2xl group-hover:bg-amber-500/20 transition" />
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-300">
                  <BookOpen className="h-3 w-3" /> {a.categoryName}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-amber-200 transition leading-snug">
                  {a.h1}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-slate-400">{a.metaDescription}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-amber-400">
                  Read article <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Filters + Search */}
        <section className="container mx-auto px-4 py-10">
          <form onSubmit={onSearchSubmit} className="mb-6 flex gap-2 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <Input
                type="search"
                placeholder="Search articles by topic, niche or keyword…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-9 bg-slate-900/60 border-slate-700 text-slate-100 placeholder:text-slate-500"
              />
            </div>
            <Button type="submit" className="bg-amber-500 text-slate-950 hover:bg-amber-400 font-semibold">
              Search
            </Button>
          </form>

          <div className="mb-8 flex flex-wrap gap-2">
            <button
              onClick={() => setCategory("all")}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                activeCat === "all"
                  ? "border-amber-400 bg-amber-500/15 text-amber-200"
                  : "border-slate-700 bg-slate-900/40 text-slate-300 hover:border-amber-500/50 hover:text-amber-200"
              }`}
            >
              All <span className="ml-1 text-xs opacity-70">({counts.all})</span>
            </button>
            {ARTICLE_CATEGORIES.filter((c) => counts[c.id]).map((c) => (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                  activeCat === c.id
                    ? "border-amber-400 bg-amber-500/15 text-amber-200"
                    : "border-slate-700 bg-slate-900/40 text-slate-300 hover:border-amber-500/50 hover:text-amber-200"
                }`}
              >
                {c.name} <span className="ml-1 text-xs opacity-70">({counts[c.id]})</span>
              </button>
            ))}
          </div>

          <p className="mb-5 text-sm text-slate-400">
            Showing {visible.length} of {filtered.length} articles
            {activeCatName ? ` in ${activeCatName}` : ""}
            {query ? ` matching "${query}"` : ""}
          </p>

          {visible.length === 0 ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-10 text-center text-slate-400">
              No articles found. Try a different filter or search term.
            </div>
          ) : (
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((a) => (
                <li key={a.slug}>
                  <Link
                    to={`/expireddomainnames/en/articles/${a.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-amber-500/50 hover:bg-slate-900/80 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-15px_rgba(251,191,36,0.35)]"
                  >
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-amber-300">
                      <BookOpen className="h-3 w-3" /> {a.categoryName}
                    </span>
                    <h3 className="mt-3 text-base font-semibold leading-snug text-slate-100 group-hover:text-amber-200 transition">
                      {a.h1}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm text-slate-400">{a.metaDescription}</p>
                    <span className="mt-auto pt-4 inline-flex items-center text-sm font-medium text-amber-400">
                      Read article <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {totalPages > 1 && (
            <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-3">
              <Button variant="outline" disabled={safePage === 1} onClick={() => goPage(safePage - 1)} className="border-slate-700 bg-slate-900/40 text-slate-200 hover:bg-slate-800">
                ← Previous
              </Button>
              <span className="px-4 text-sm text-slate-400">
                Page {safePage} of {totalPages}
              </span>
              <Button variant="outline" disabled={safePage === totalPages} onClick={() => goPage(safePage + 1)} className="border-slate-700 bg-slate-900/40 text-slate-200 hover:bg-slate-800">
                Next →
              </Button>
            </nav>
          )}
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 pb-16">
          <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/40 p-8 md:p-12">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to skip the theory?</h2>
                <p className="mt-2 text-slate-300">
                  Browse our curated catalog of premium expired domains with real authority, clean
                  backlink profiles and verified history.
                </p>
              </div>
              <Button asChild size="lg" className="bg-amber-400 text-slate-950 hover:bg-amber-300 font-semibold">
                <Link to={MARKETPLACE_URL}>
                  View Premium Domains <ArrowRight className="ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <FooterPremiumDomainsEN />
    </div>
  );
};

export default ExpiredDomainArticlesIndex;
