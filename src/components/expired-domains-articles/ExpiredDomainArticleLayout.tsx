import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Globe2,
  BookOpen,
  Clock,
  Calendar,
  Quote,
  TrendingUp,
  Award,
  Lightbulb,
  Target,
  Zap,
} from "lucide-react";
import HeaderEN from "@/components/en/HeaderEN";
import FooterPremiumDomainsEN from "@/components/premium-domains/FooterPremiumDomainsEN";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ARTICLE_META, getRelatedArticles } from "@/content/expired-domain-articles";

const heroImg = "/images/article-hero-domains.jpg";
const authorityImg = "/images/article-section-authority.jpg";
const strategyImg = "/images/article-section-strategy.jpg";

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

const estimateReadingMinutes = (props: ExpiredDomainArticleProps) => {
  const all = [
    ...props.intro,
    ...props.conclusion,
    ...props.sections.flatMap((s) => [
      s.heading,
      ...(s.paragraphs ?? []),
      ...(s.bullets ?? []),
      ...(s.subsections?.flatMap((sub) => [sub.heading, ...sub.paragraphs]) ?? []),
    ]),
    ...props.faqs.flatMap((f) => [f.question, f.answer]),
  ].join(" ");
  const words = all.split(/\s+/).filter(Boolean).length;
  return Math.max(4, Math.round(words / 220));
};

/* ---------- Reusable visual blocks ---------- */

const KeyTakeaways = ({ items }: { items: string[] }) => (
  <aside className="my-10 overflow-hidden rounded-2xl border border-amber-200/70 bg-gradient-to-br from-amber-50 to-white p-6 shadow-sm md:p-8">
    <div className="mb-4 flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/15 text-amber-600">
        <Lightbulb className="h-5 w-5" />
      </div>
      <h2 className="text-lg font-semibold text-slate-900">Key Takeaways</h2>
    </div>
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((t, i) => (
        <li key={i} className="flex gap-3 text-slate-700">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
          <span className="text-sm leading-relaxed">{t}</span>
        </li>
      ))}
    </ul>
  </aside>
);

const PullQuote = ({ children }: { children: React.ReactNode }) => (
  <figure className="my-12 border-l-4 border-amber-500 bg-slate-50 px-6 py-6 md:px-8 md:py-8">
    <Quote className="mb-3 h-6 w-6 text-amber-500" />
    <blockquote className="text-xl font-medium leading-snug text-slate-900 md:text-2xl">
      {children}
    </blockquote>
  </figure>
);

const SectionImage = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
  <figure className="not-prose my-12">
    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={1280}
        height={768}
        className="h-auto w-full object-cover"
      />
    </div>
    {caption && (
      <figcaption className="mt-3 text-center text-sm italic text-slate-500">{caption}</figcaption>
    )}
  </figure>
);

const FeatureGrid = () => (
  <div className="not-prose my-12 grid gap-5 sm:grid-cols-3">
    {[
      { icon: TrendingUp, title: "Authority", text: "Verified MOZ DA & DR backed by real, organic backlink profiles." },
      { icon: ShieldCheck, title: "Trust", text: "Hand-vetted history. No spam, no penalties, full transparency." },
      { icon: Zap, title: "Speed to Rank", text: "Aged authority means faster indexing and quicker SERP traction." },
    ].map((f) => (
      <div
        key={f.title}
        className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-amber-300 hover:shadow-md"
      >
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-amber-400 transition group-hover:bg-amber-500 group-hover:text-white">
          <f.icon className="h-5 w-5" />
        </div>
        <h3 className="text-base font-semibold text-slate-900">{f.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{f.text}</p>
      </div>
    ))}
  </div>
);

const BuyCTA = () => (
  <div className="not-prose my-14 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 text-white shadow-2xl md:p-12">
    <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
      <div>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
          <Sparkles className="h-3.5 w-3.5" /> Curated Premium Inventory
        </div>
        <h3 className="text-2xl font-semibold leading-tight md:text-3xl">
          Find a domain worth building a real business on.
        </h3>
        <p className="mt-3 max-w-lg text-slate-300">
          Hand-picked premium expired domains with verified authority, clean backlink profiles, and
          instant credibility — ready to launch your next project.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-amber-400 text-slate-900 hover:bg-amber-300">
            <Link to={MARKETPLACE_URL}>
              View Available Domains <ArrowRight className="ml-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10">
            <Link to="/expireddomainnames/en/articles">Browse All Guides</Link>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 text-center text-xs">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <p className="text-2xl font-bold text-amber-400">125+</p>
          <p className="mt-1 text-slate-400">Expert Guides</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <p className="text-2xl font-bold text-amber-400">DA 25+</p>
          <p className="mt-1 text-slate-400">Authority</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <p className="text-2xl font-bold text-amber-400">100%</p>
          <p className="mt-1 text-slate-400">Vetted</p>
        </div>
      </div>
    </div>
  </div>
);

const TwoColumnBuyBanner = () => (
  <div className="not-prose my-12 grid gap-6 md:grid-cols-2">
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
        <ShieldCheck className="h-3.5 w-3.5" /> Verified Authority
      </div>
      <h3 className="text-xl font-semibold text-slate-900">Premium Expired Domains</h3>
      <p className="mt-2 text-slate-600">
        Hand-vetted expired domains with strong MOZ scores, real backlinks, and proven topical
        history. Ready to power your next project.
      </p>
      <Button asChild className="mt-5 w-full bg-slate-900 text-white hover:bg-slate-800">
        <Link to={MARKETPLACE_URL}>
          Browse Marketplace <ArrowRight className="ml-1" />
        </Link>
      </Button>
    </div>
    <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-amber-100/50 p-7 shadow-sm transition hover:shadow-md">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-200/70 px-3 py-1 text-xs font-medium text-amber-800">
        <Globe2 className="h-3.5 w-3.5" /> Brandable & SEO-Ready
      </div>
      <h3 className="text-xl font-semibold text-slate-900">Find Your Domain Today</h3>
      <p className="mt-2 text-slate-700">
        Skip months of waiting for organic authority. Choose from premium domains built to give
        serious operators an immediate edge.
      </p>
      <Button asChild className="mt-5 w-full bg-amber-500 text-white hover:bg-amber-600">
        <Link to={MARKETPLACE_URL}>
          Explore Premium Inventory <ArrowRight className="ml-1" />
        </Link>
      </Button>
    </div>
  </div>
);

/* ---------- Main layout ---------- */

const ExpiredDomainArticleLayout = (props: ExpiredDomainArticleProps) => {
  const {
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
  } = props;

  const canonical = `${SITE}/expireddomainnames/en/articles/${slug}`;
  const ARTICLES_INDEX = "/expireddomainnames/en/articles";
  const meta = ARTICLE_META[slug];
  const categoryId = meta?.categoryId;
  const categoryName = meta?.categoryName;
  const categoryUrl = categoryId ? `${ARTICLES_INDEX}?category=${categoryId}` : ARTICLES_INDEX;
  const related = getRelatedArticles(slug, 6);
  const tocItems = sections.map((s) => ({ id: slugify(s.heading), heading: s.heading }));
  const readingMin = estimateReadingMinutes(props);
  const publishedDate = "2026-04-15";

  // Build key takeaways from first sentences of first 4 sections
  const takeaways = sections
    .slice(0, 4)
    .map((s) => {
      const first = (s.paragraphs?.[0] || s.subsections?.[0]?.paragraphs?.[0] || s.heading).split(". ")[0];
      return first.length > 160 ? first.slice(0, 157) + "…" : first;
    });

  // Pick a meaningful pull quote from middle of article
  const pullQuoteCandidate =
    sections[Math.floor(sections.length / 2)]?.paragraphs?.[0] ??
    intro[intro.length - 1] ??
    "";
  const pullQuote =
    pullQuoteCandidate.length > 200
      ? pullQuoteCandidate.slice(0, 197).split(" ").slice(0, -1).join(" ") + "…"
      : pullQuoteCandidate;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: h1,
    description: metaDescription,
    keywords: primaryKeyword,
    articleSection: categoryName,
    datePublished: publishedDate,
    dateModified: publishedDate,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    author: { "@type": "Organization", name: "IAEE", url: SITE },
    publisher: {
      "@type": "Organization",
      name: "IAEE",
      logo: { "@type": "ImageObject", url: `${SITE}/logo.png` },
    },
    image: `${SITE}/images/article-hero-domains.jpg`,
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
      { "@type": "ListItem", position: 3, name: "Articles", item: `${SITE}${ARTICLES_INDEX}` },
      ...(categoryName
        ? [{ "@type": "ListItem", position: 4, name: categoryName, item: `${SITE}${categoryUrl}` }]
        : []),
      { "@type": "ListItem", position: categoryName ? 5 : 4, name: h1, item: canonical },
    ],
  };

  const midIndex = Math.max(1, Math.floor(sections.length / 2));
  const quarterIndex = Math.max(1, Math.floor(sections.length / 4));

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
        <meta property="og:image" content={`${SITE}/images/article-hero-domains.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <HeaderEN />

      {/* HERO */}
      <header className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-4 py-14 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-300">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="hover:text-amber-300">Home</Link></li>
              <li aria-hidden>›</li>
              <li><Link to={MARKETPLACE_URL} className="hover:text-amber-300">Premium Domains</Link></li>
              <li aria-hidden>›</li>
              <li><Link to={ARTICLES_INDEX} className="hover:text-amber-300">Articles</Link></li>
              {categoryName && (
                <>
                  <li aria-hidden>›</li>
                  <li><Link to={categoryUrl} className="hover:text-amber-300">{categoryName}</Link></li>
                </>
              )}
            </ol>
          </nav>

          {categoryName && (
            <Link
              to={categoryUrl}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-amber-300 transition hover:bg-amber-400/20"
            >
              <Award className="h-3.5 w-3.5" /> {categoryName}
            </Link>
          )}

          <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {h1}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-300">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-amber-400" />
              <time dateTime={publishedDate}>April 15, 2026</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-amber-400" />
              {readingMin} min read
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BookOpen className="h-4 w-4 text-amber-400" />
              By IAEE Editorial
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          {/* MAIN COLUMN */}
          <article className="min-w-0">
            {/* Lead / intro with dropcap */}
            <div className="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-slate-700 prose-p:text-lg">
              {intro.map((p, i) => (
                <p
                  key={`intro-${i}`}
                  className={
                    i === 0
                      ? "first-letter:float-left first-letter:mr-3 first-letter:text-6xl first-letter:font-bold first-letter:leading-none first-letter:text-amber-500"
                      : ""
                  }
                >
                  {p}
                </p>
              ))}
            </div>

            {takeaways.length >= 3 && <KeyTakeaways items={takeaways} />}

            <FeatureGrid />

            {/* Sections */}
            <div className="prose prose-slate max-w-none prose-headings:scroll-mt-24 prose-h2:mt-14 prose-h2:text-3xl prose-h2:font-bold prose-h2:tracking-tight prose-h2:text-slate-900 prose-h3:text-xl prose-h3:font-semibold prose-h3:text-slate-900 prose-p:leading-relaxed prose-p:text-slate-700 prose-li:text-slate-700 prose-strong:text-slate-900">
              {sections.map((section, i) => (
                <section key={section.heading} id={slugify(section.heading)} className="mb-2">
                  <div className="not-prose mb-4 mt-14 flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white shadow-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-amber-300 to-transparent" />
                  </div>
                  <h2>{section.heading}</h2>
                  {section.paragraphs?.map((p, j) => <p key={`s${i}-p${j}`}>{p}</p>)}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="my-6 space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-5">
                      {section.bullets.map((b, k) => (
                        <li key={`s${i}-b${k}`} className="flex gap-3 marker:text-amber-500">
                          <Target className="mt-1 h-4 w-4 shrink-0 text-amber-600" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.subsections?.map((sub, m) => (
                    <div key={`s${i}-sub${m}`}>
                      <h3>{sub.heading}</h3>
                      {sub.paragraphs.map((sp, n) => <p key={`s${i}-sub${m}-p${n}`}>{sp}</p>)}
                    </div>
                  ))}

                  {/* Inject visual blocks at strategic points */}
                  {i === quarterIndex - 1 && (
                    <SectionImage
                      src={authorityImg}
                      alt={`Authority signals visualization for ${primaryKeyword}`}
                      caption="Real authority compounds — backlinks, age, and topical history all matter."
                    />
                  )}
                  {i === midIndex - 1 && pullQuote && <PullQuote>"{pullQuote}"</PullQuote>}
                  {i === midIndex && <BuyCTA />}
                  {i === sections.length - 2 && (
                    <SectionImage
                      src={strategyImg}
                      alt={`Strategic value of ${primaryKeyword}`}
                      caption="A premium domain is a long-horizon brand asset, not a line-item expense."
                    />
                  )}
                </section>
              ))}
            </div>

            {/* FAQ */}
            <section id="faq" className="mt-16">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/15 text-amber-600">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900">Frequently Asked Questions</h2>
                  <p className="mt-1 text-slate-600">Quick answers to what buyers ask most often.</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <Accordion type="single" collapsible className="divide-y divide-slate-200">
                  {faqs.map((f, i) => (
                    <AccordionItem
                      key={`faq-${i}`}
                      value={`faq-${i}`}
                      className="border-b-0 px-6 first:pt-1 last:pb-1"
                    >
                      <AccordionTrigger
                        headingLevel="h3"
                        className="text-left text-base font-semibold text-slate-900 hover:no-underline data-[state=open]:text-amber-700"
                      >
                        {f.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-base leading-relaxed text-slate-700">
                        {f.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mt-16">
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 md:p-10">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900">The Bottom Line</h2>
                <div className="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-slate-700 prose-p:text-lg">
                  {conclusion.map((p, i) => <p key={`concl-${i}`}>{p}</p>)}
                  {closingHook && <p className="mt-4 text-lg font-semibold text-amber-700">{closingHook}</p>}
                </div>
              </div>
            </section>

            <TwoColumnBuyBanner />

            {/* Trust strip */}
            <div className="not-prose mt-12 grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:grid-cols-3">
              {[
                { icon: CheckCircle2, title: "Hand-vetted inventory", text: "Every domain reviewed for quality and history." },
                { icon: ShieldCheck, title: "Secure checkout", text: "Trusted payment providers and clean transfer support." },
                { icon: Sparkles, title: "Real authority signals", text: "MOZ DA, backlinks, and topical history disclosed." },
              ].map((t) => (
                <div key={t.title} className="flex items-start gap-3">
                  <t.icon className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.title}</p>
                    <p className="text-xs text-slate-600">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Related articles */}
            {related.length > 0 && (
              <aside className="mt-16">
                <div className="mb-6 flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-amber-600" />
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">Continue Reading</h2>
                  {categoryName && (
                    <Link
                      to={categoryUrl}
                      className="ml-auto text-sm font-medium text-amber-700 hover:underline"
                    >
                      More in {categoryName} →
                    </Link>
                  )}
                </div>
                <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((r) => (
                    <li key={r.slug} className="group">
                      <Link
                        to={`/expireddomainnames/en/articles/${r.slug}`}
                        className="block h-full rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md"
                      >
                        <p className="text-xs font-medium uppercase tracking-wider text-amber-600">
                          {r.categoryName}
                        </p>
                        <h3 className="mt-2 text-base font-semibold leading-snug text-slate-900 group-hover:text-amber-700">
                          {r.h1}
                        </h3>
                        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">
                          {r.metaDescription}
                        </p>
                        <span className="mt-3 inline-flex items-center text-sm font-medium text-amber-700">
                          Read article <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-200 pt-6 text-sm">
                  <Link to={ARTICLES_INDEX} className="font-medium text-amber-700 hover:underline">→ All Buyer Guides</Link>
                  <Link to={MARKETPLACE_URL} className="font-medium text-amber-700 hover:underline">→ Premium Domains Marketplace</Link>
                  <Link to="/expireddomainnames/en/premium-domains-legal-documents" className="font-medium text-amber-700 hover:underline">→ Legal Documents for Domain Buyers</Link>
                </div>
              </aside>
            )}
          </article>

          {/* SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {/* TOC */}
              <nav aria-label="Table of contents" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900">
                  <BookOpen className="h-4 w-4 text-amber-600" /> In This Article
                </h2>
                <ol className="space-y-2 text-sm">
                  {tocItems.map((t, i) => (
                    <li key={t.id}>
                      <a
                        href={`#${t.id}`}
                        className="flex gap-2 text-slate-600 transition hover:text-amber-700"
                      >
                        <span className="text-amber-500">{String(i + 1).padStart(2, "0")}</span>
                        <span className="line-clamp-2">{t.heading}</span>
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="#faq" className="flex gap-2 font-medium text-amber-700 hover:underline">
                      <span>★</span>
                      <span>FAQ</span>
                    </a>
                  </li>
                </ol>
              </nav>

              {/* Sidebar CTA */}
              <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-md">
                <Sparkles className="mb-2 h-5 w-5 text-amber-400" />
                <h3 className="text-lg font-semibold">Premium Domains</h3>
                <p className="mt-1.5 text-sm text-slate-300">
                  Hand-picked, authority-backed domains for serious operators.
                </p>
                <Button asChild size="sm" className="mt-4 w-full bg-amber-400 text-slate-900 hover:bg-amber-300">
                  <Link to={MARKETPLACE_URL}>
                    Browse Marketplace <ArrowRight className="ml-1" />
                  </Link>
                </Button>
              </div>

              {/* Trust signals */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900">Why IAEE</h3>
                <ul className="space-y-2.5 text-sm text-slate-600">
                  <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /> Verified MOZ DA & DR</li>
                  <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /> Clean backlink profiles</li>
                  <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /> Secure escrow available</li>
                  <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /> Transfer support included</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <FooterPremiumDomainsEN />
    </div>
  );
};

export default ExpiredDomainArticleLayout;
