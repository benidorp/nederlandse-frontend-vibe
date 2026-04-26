import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Globe2 } from "lucide-react";
import HeaderEN from "@/components/en/HeaderEN";
import FooterPremiumDomainsEN from "@/components/premium-domains/FooterPremiumDomainsEN";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface ArticleSection {
  heading: string;
  paragraphs?: string[];
  subsections?: { heading: string; paragraphs: string[] }[];
  bullets?: string[];
}

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface ExpiredDomainArticleProps {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  intro: string[];
  sections: ArticleSection[];
  faqs: ArticleFAQ[];
  conclusion: string[];
  closingHook?: string;
}

const SITE = "https://www.iaee.eu";
const MARKETPLACE_URL = "/expireddomainnames/en/buy-premium-domains-high-authority-seo-value";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const BuyCTA = () => (
  <div className="my-12 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-white shadow-xl md:p-10">
    <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
          <Sparkles className="h-3.5 w-3.5" /> Curated Expired Domain Inventory
        </div>
        <h3 className="text-2xl font-semibold">Find a domain worth building a real business on.</h3>
        <p className="mt-2 text-slate-300">
          Hand-picked premium expired domains with verified authority, clean backlink profiles, and instant credibility.
        </p>
      </div>
      <Button asChild size="lg" className="bg-amber-400 text-slate-900 hover:bg-amber-300">
        <Link to={MARKETPLACE_URL}>
          View Available Domains <ArrowRight className="ml-1" />
        </Link>
      </Button>
    </div>
  </div>
);

const TwoColumnBuyBanner = () => (
  <div className="my-10 grid gap-6 md:grid-cols-2">
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
        <ShieldCheck className="h-3.5 w-3.5" /> Verified Authority
      </div>
      <h3 className="text-xl font-semibold text-slate-900">Premium Expired Domains</h3>
      <p className="mt-2 text-slate-600">
        Hand-vetted expired domains with strong MOZ scores, real backlinks, and proven topical history. Ready to power your next project.
      </p>
      <Button asChild className="mt-4 w-full bg-slate-900 text-white hover:bg-slate-800">
        <Link to={MARKETPLACE_URL}>
          Browse Marketplace <ArrowRight className="ml-1" />
        </Link>
      </Button>
    </div>
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-200/70 px-3 py-1 text-xs font-medium text-amber-800">
        <Globe2 className="h-3.5 w-3.5" /> Brandable & SEO-Ready
      </div>
      <h3 className="text-xl font-semibold text-slate-900">Find Your Domain Today</h3>
      <p className="mt-2 text-slate-700">
        Skip months of waiting for organic authority. Choose from premium domains built to give serious operators an immediate edge.
      </p>
      <Button asChild className="mt-4 w-full bg-amber-500 text-white hover:bg-amber-600">
        <Link to={MARKETPLACE_URL}>
          Explore Premium Inventory <ArrowRight className="ml-1" />
        </Link>
      </Button>
    </div>
  </div>
);

const ExpiredDomainArticleLayout = ({
  slug,
  metaTitle,
  metaDescription,
  h1,
  primaryKeyword,
  intro,
  sections,
  faqs,
  conclusion,
  closingHook,
}: ExpiredDomainArticleProps) => {
  const canonical = `${SITE}/expireddomainnames/en/articles/${slug}`;
  const tocItems = sections.map((s) => ({ id: slugify(s.heading), heading: s.heading }));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: h1,
    description: metaDescription,
    keywords: primaryKeyword,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    author: { "@type": "Organization", name: "IAEE" },
    publisher: {
      "@type": "Organization",
      name: "IAEE",
      logo: { "@type": "ImageObject", url: `${SITE}/logo.png` },
    },
    image: `${SITE}/images/premium-domains-og.jpg`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Premium Domains", item: `${SITE}${MARKETPLACE_URL}` },
      { "@type": "ListItem", position: 3, name: h1, item: canonical },
    ],
  };

  const midIndex = Math.max(1, Math.floor(sections.length / 2));

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <html lang="en" />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${SITE}/images/premium-domains-og.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <HeaderEN />

      <main className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link to="/" className="hover:text-slate-900">Home</Link></li>
            <li aria-hidden>›</li>
            <li><Link to={MARKETPLACE_URL} className="hover:text-slate-900">Premium Domains</Link></li>
            <li aria-hidden>›</li>
            <li className="text-slate-700" aria-current="page">{h1}</li>
          </ol>
        </nav>

        <article>
          <header className="mb-8">
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{h1}</h1>
            <p className="mt-3 text-sm uppercase tracking-wide text-amber-600">Premium Expired Domains • Insights</p>
          </header>

          <div className="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-slate-700">
            {intro.map((p, i) => <p key={`intro-${i}`}>{p}</p>)}
          </div>

          <TwoColumnBuyBanner />

          <nav aria-label="Table of contents" className="my-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="mb-3 text-lg font-semibold text-slate-900">Table of Contents</h2>
            <ol className="space-y-2 text-slate-700">
              {tocItems.map((t, i) => (
                <li key={t.id} className="flex gap-3">
                  <span className="text-amber-600 font-medium">{String(i + 1).padStart(2, "0")}.</span>
                  <a href={`#${t.id}`} className="hover:text-amber-700 hover:underline">{t.heading}</a>
                </li>
              ))}
              <li className="flex gap-3">
                <span className="text-amber-600 font-medium">FAQ</span>
                <a href="#faq" className="hover:text-amber-700 hover:underline">Frequently Asked Questions</a>
              </li>
            </ol>
          </nav>

          <div className="prose prose-slate max-w-none prose-headings:scroll-mt-24 prose-h2:mt-12 prose-h2:text-2xl prose-h2:font-semibold prose-h2:text-slate-900 prose-h3:text-xl prose-h3:font-semibold prose-h3:text-slate-900 prose-p:leading-relaxed prose-p:text-slate-700">
            {sections.map((section, i) => (
              <section key={section.heading} id={slugify(section.heading)}>
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((p, j) => <p key={`s${i}-p${j}`}>{p}</p>)}
                {section.bullets && section.bullets.length > 0 && (
                  <ul>{section.bullets.map((b, k) => <li key={`s${i}-b${k}`}>{b}</li>)}</ul>
                )}
                {section.subsections?.map((sub, m) => (
                  <div key={`s${i}-sub${m}`}>
                    <h3>{sub.heading}</h3>
                    {sub.paragraphs.map((sp, n) => <p key={`s${i}-sub${m}-p${n}`}>{sp}</p>)}
                  </div>
                ))}
                {i === midIndex - 1 && <div className="not-prose"><BuyCTA /></div>}
              </section>
            ))}
          </div>

          <section id="faq" className="mt-14">
            <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
            <p className="mt-2 text-slate-600">Quick answers to the questions buyers ask most often about premium expired domains.</p>
            <Accordion type="single" collapsible className="mt-6">
              {faqs.map((f, i) => (
                <AccordionItem key={`faq-${i}`} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base font-medium text-slate-900">{f.question}</AccordionTrigger>
                  <AccordionContent className="text-slate-700 leading-relaxed">{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="mt-14">
            <h2 className="text-2xl font-semibold text-slate-900">Conclusion</h2>
            <div className="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-slate-700">
              {conclusion.map((p, i) => <p key={`concl-${i}`}>{p}</p>)}
              {closingHook && <p className="font-medium text-slate-900">{closingHook}</p>}
            </div>
          </section>

          <TwoColumnBuyBanner />

          <div className="mt-10 grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
              <div>
                <p className="text-sm font-semibold text-slate-900">Hand-vetted inventory</p>
                <p className="text-xs text-slate-600">Every domain reviewed for quality and history.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 text-emerald-600" />
              <div>
                <p className="text-sm font-semibold text-slate-900">Secure checkout</p>
                <p className="text-xs text-slate-600">Trusted payment providers and clean transfer support.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Sparkles className="mt-0.5 h-5 w-5 text-emerald-600" />
              <div>
                <p className="text-sm font-semibold text-slate-900">Real authority signals</p>
                <p className="text-xs text-slate-600">MOZ DA, backlinks, and topical history disclosed.</p>
              </div>
            </div>
          </div>

          <aside className="mt-10 rounded-xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Continue Reading</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-amber-700">
              <li><Link className="hover:underline" to={MARKETPLACE_URL}>→ Premium Expired Domains Marketplace</Link></li>
              <li><Link className="hover:underline" to="/expireddomainnames/en/premium-domains-legal-documents">→ Legal Documents for Domain Buyers</Link></li>
              <li><Link className="hover:underline" to="/expireddomainnames/en/articles">→ All Buyer Guides</Link></li>
              <li><Link className="hover:underline" to="/expireddomainnames/en/articles/smart-buyers-guide-to-expired-domain-names">→ The Smart Buyer’s Guide to Expired Domains</Link></li>
            </ul>
          </aside>
        </article>
      </main>

      <FooterPremiumDomainsEN />
    </div>
  );
};

export default ExpiredDomainArticleLayout;
