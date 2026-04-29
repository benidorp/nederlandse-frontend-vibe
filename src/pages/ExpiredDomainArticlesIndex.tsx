import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowRight, BookOpen, Search } from "lucide-react";
import HeaderEN from "@/components/en/HeaderEN";
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
    <div className="min-h-screen bg-white">
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
      <HeaderEN />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link to="/" className="hover:text-slate-900">Home</Link></li>
            <li aria-hidden>›</li>
            <li><Link to={MARKETPLACE_URL} className="hover:text-slate-900">Premium Domains</Link></li>
            <li aria-hidden>›</li>
            <li className="text-slate-700" aria-current="page">Articles</li>
          </ol>
        </nav>

        <div className="mb-8">
          <p className="text-sm uppercase tracking-wide text-amber-600">Premium Expired Domains</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Buyer Guides & Strategy Articles
          </h1>
          <p className="mt-3 max-w-3xl text-slate-700">
            {allArticles.length} deep, practical articles for entrepreneurs, marketers, SEO professionals
            and serious operators who want to understand — and benefit from — premium expired domain names.
          </p>
        </div>

        <div className="my-8 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white md:p-8">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-xl font-semibold">Ready to skip the theory?</h2>
              <p className="text-slate-300">Browse curated premium expired domains with real authority.</p>
            </div>
            <Button asChild size="lg" className="bg-amber-400 text-slate-900 hover:bg-amber-300">
              <Link to={MARKETPLACE_URL}>
                View Premium Domains <ArrowRight className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>

        <form onSubmit={onSearchSubmit} className="mb-6 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              type="search"
              placeholder="Search articles by topic or keyword…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button type="submit" variant="outline">Search</Button>
        </form>

        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setCategory("all")}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              activeCat === "all"
                ? "border-amber-500 bg-amber-50 text-amber-800"
                : "border-slate-200 text-slate-700 hover:border-amber-300"
            }`}
          >
            All <span className="ml-1 text-xs text-slate-500">({counts.all})</span>
          </button>
          {ARTICLE_CATEGORIES.filter((c) => counts[c.id]).map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                activeCat === c.id
                  ? "border-amber-500 bg-amber-50 text-amber-800"
                  : "border-slate-200 text-slate-700 hover:border-amber-300"
              }`}
            >
              {c.name} <span className="ml-1 text-xs text-slate-500">({counts[c.id]})</span>
            </button>
          ))}
        </div>

        <p className="mb-4 text-sm text-slate-500">
          Showing {visible.length} of {filtered.length} articles
          {activeCatName ? ` in ${activeCatName}` : ""}
          {query ? ` matching “${query}”` : ""}
        </p>

        {visible.length === 0 ? (
          <div className="rounded-xl border border-slate-200 p-10 text-center text-slate-600">
            No articles found. Try a different filter or search term.
          </div>
        ) : (
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((a) => (
              <li key={a.slug} className="group rounded-xl border border-slate-200 p-5 transition hover:border-amber-300 hover:shadow-sm">
                <Link to={`/expireddomainnames/en/articles/${a.slug}`} className="block h-full">
                  <div className="mb-2 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-amber-600">
                    <BookOpen className="h-3.5 w-3.5" /> {a.categoryName}
                  </div>
                  <h2 className="text-base font-semibold text-slate-900 group-hover:text-amber-700">
                    {a.h1}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm text-slate-600">{a.metaDescription}</p>
                  <span className="mt-3 inline-flex items-center text-sm font-medium text-amber-700">
                    Read article <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {totalPages > 1 && (
          <nav aria-label="Pagination" className="mt-10 flex items-center justify-center gap-2">
            <Button variant="outline" disabled={safePage === 1} onClick={() => goPage(safePage - 1)}>
              ← Previous
            </Button>
            <span className="px-4 text-sm text-slate-600">
              Page {safePage} of {totalPages}
            </span>
            <Button variant="outline" disabled={safePage === totalPages} onClick={() => goPage(safePage + 1)}>
              Next →
            </Button>
          </nav>
        )}
      </main>
      <FooterPremiumDomainsEN />
    </div>
  );
};

export default ExpiredDomainArticlesIndex;
