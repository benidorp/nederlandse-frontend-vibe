import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowRight, BookOpen } from "lucide-react";
import HeaderEN from "@/components/en/HeaderEN";
import FooterPremiumDomainsEN from "@/components/premium-domains/FooterPremiumDomainsEN";
import { Button } from "@/components/ui/button";
import { ARTICLES, ARTICLE_SLUGS } from "@/content/expired-domain-articles";

const SITE = "https://www.iaee.eu";
const MARKETPLACE_URL = "/expireddomainnames/en/buy-premium-domains-high-authority-seo-value";

const ExpiredDomainArticlesIndex = () => {
  const canonical = `${SITE}/expireddomainnames/en/articles`;
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <html lang="en" />
        <title>Premium Expired Domain Articles & Buyer Guides | IAEE</title>
        <meta
          name="description"
          content="In-depth English guides on buying premium expired domains: SEO value, brand strategy, evaluation tips and smart buyer advice for serious businesses."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Premium Expired Domain Articles & Buyer Guides | IAEE" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
      </Helmet>
      <HeaderEN />
      <main className="mx-auto max-w-5xl px-4 py-12">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-wide text-amber-600">Premium Expired Domains</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Buyer Guides & Strategy Articles
          </h1>
          <p className="mt-3 max-w-3xl text-slate-700">
            Deep, practical articles for entrepreneurs, marketers, SEO professionals and serious operators
            who want to understand — and benefit from — premium expired domain names.
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

        <ul className="grid gap-4 md:grid-cols-2">
          {ARTICLE_SLUGS.map((slug) => {
            const a = ARTICLES[slug];
            return (
              <li key={slug} className="group rounded-xl border border-slate-200 p-5 transition hover:border-amber-300 hover:shadow-sm">
                <Link to={`/expireddomainnames/en/articles/${slug}`} className="block">
                  <div className="mb-2 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-amber-600">
                    <BookOpen className="h-3.5 w-3.5" /> Guide
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-amber-700">
                    {a.h1}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-slate-600">{a.metaDescription}</p>
                  <span className="mt-3 inline-flex items-center text-sm font-medium text-amber-700">
                    Read article <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
      <FooterPremiumDomainsEN />
    </div>
  );
};

export default ExpiredDomainArticlesIndex;
