import { useEffect, useMemo, useState } from "react";
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
  ListOrdered,
  X,
  ChevronRight,
  Menu,
  Minimize2,
  Smile,
  Layers3,
} from "lucide-react";
import HeaderEN from "@/components/en/HeaderEN";
import FooterPremiumDomainsEN from "@/components/premium-domains/FooterPremiumDomainsEN";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ARTICLE_META, getRelatedArticles } from "@/content/expired-domain-articles";

/* Image pool — varied, all deep-blue editorial style */
const IMAGE_POOL = [
  "/images/article-hero-blue-network.jpg",
  "/images/article-blue-authority.jpg",
  "/images/article-blue-global.jpg",
  "/images/article-blue-strategy.jpg",
  "/images/article-blue-trust.jpg",
  "/images/article-blue-growth.jpg",
  "/images/article-blue-commerce.jpg",
  "/images/article-blue-global-map.jpg",
  "/images/article-blue-handshake.jpg",
  "/images/article-blue-server-network.jpg",
  "/images/article-blue-laptop-clean.jpg",
  "/images/article-blue-growth-abstract.jpg",
];

/* Deterministic hash from slug → ensures each article has its own consistent image rotation */
const hashSlug = (s: string) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
};

const pickImages = (slug: string) => {
  const h = hashSlug(slug);
  const start = h % IMAGE_POOL.length;
  return [0, 1, 2, 3].map((i) => IMAGE_POOL[(start + i) % IMAGE_POOL.length]);
};

/* SEO-rich H3 subheading templates — rotate based on section index + slug hash */
const SUBHEAD_TEMPLATES = [
  "Why this matters for your domain investment in 2026",
  "Key signals serious buyers look at first",
  "How premium expired domains compare to fresh registrations",
  "What separates authority domains from average ones",
  "Common mistakes to avoid when evaluating domains",
  "Practical checklist for domain due diligence",
  "Long-term ROI considerations for premium domains",
  "How this impacts SEO rankings and indexing speed",
  "Best practices for branding and trust building",
  "What top domain investors do differently",
];

const HUMAN_NOTES = [
  "Simple rule: if a domain is hard to explain at a coffee table, customers will probably struggle too.",
  "A good premium domain should feel obvious, trustworthy, and just a little bit unfair to competitors.",
  "Think of the domain as the front door. If the front door looks solid, people step in faster.",
  "Do the boring checks first. They save exciting amounts of money later.",
  "When in doubt, choose clarity over cleverness. Google and humans both appreciate that.",
];

const EXAMPLE_TITLES = [
  "Real-world example",
  "Quick buyer scenario",
  "Practical takeaway",
  "Smart shortcut",
  "Easy way to remember it",
];

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

/* Split long copy into short, mobile-friendly reading blocks. */
const splitParagraph = (p: string): string[] => {
  const sentences = p.match(/[^.!?]+[.!?]+(\s|$)|[^.!?]+$/g)?.map((s) => s.trim()) || [p];
  const chunks: string[] = [];
  let current: string[] = [];
  let words = 0;

  sentences.forEach((sentence) => {
    const count = sentence.split(/\s+/).filter(Boolean).length;
    if (current.length && (words + count > 34 || current.length >= 2)) {
      chunks.push(current.join(" ").trim());
      current = [];
      words = 0;
    }
    current.push(sentence);
    words += count;
  });

  if (current.length) chunks.push(current.join(" ").trim());
  return chunks.filter(Boolean);
};

const scrollToAnchor = (id: string) => {
  const node = document.getElementById(id);
  if (!node) return;
  node.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", `#${id}`);
};

const keywordPhrase = (keyword: string) =>
  keyword
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 5)
    .join(" ");

/* ---------- Reusable visual blocks (deep-blue palette) ---------- */

const ReadableParagraphs = ({
  paragraphs,
  firstDropcap = false,
}: {
  paragraphs: string[];
  firstDropcap?: boolean;
}) => (
  <div className="not-prose space-y-4">
    {paragraphs.flatMap((p, i) =>
      splitParagraph(p).map((chunk, j) => (
        <p
          key={`${i}-${j}-${chunk.slice(0, 18)}`}
          className={`rounded-xl border border-sky-100 bg-white/95 p-4 text-[18px] leading-[1.75] text-slate-700 shadow-sm md:p-5 md:text-[20px] md:leading-[1.8] ${
            firstDropcap && i === 0 && j === 0
              ? "first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:leading-none first-letter:text-blue-600"
              : ""
          }`}
        >
          {chunk}
        </p>
      )),
    )}
  </div>
);

const FriendlyNote = ({ note }: { note: string }) => (
  <aside className="not-prose my-8 rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-blue-50 p-5 shadow-sm md:p-6">
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-700">
        <Smile className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-navy-dark">Plain-English tip</h3>
        <p className="mt-1 text-[16px] leading-relaxed text-slate-700 md:text-[17px]">{note}</p>
      </div>
    </div>
  </aside>
);

const ExampleBox = ({ title, keyword }: { title: string; keyword: string }) => (
  <aside className="not-prose my-8 overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm">
    <div className="border-b border-sky-100 bg-gradient-to-r from-blue-50 to-sky-50 px-5 py-3">
      <h3 className="flex items-center gap-2 text-lg font-bold text-navy-dark">
        <Layers3 className="h-5 w-5 text-blue-600" /> {title}
      </h3>
    </div>
    <div className="grid gap-0 md:grid-cols-3">
      {[
        ["Before", `A vague or forgettable domain makes ${keywordPhrase(keyword)} harder to trust.`],
        ["Better", "A clean premium domain says: yes, this is a serious business."],
        ["Result", "More clicks, easier recall, and fewer people asking: ‘wait, what was the website again?’"],
      ].map(([label, text]) => (
        <div key={label} className="border-t border-sky-100 p-5 md:border-l md:border-t-0 first:md:border-l-0">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600">{label}</p>
          <p className="mt-2 text-[16px] leading-relaxed text-slate-700">{text}</p>
        </div>
      ))}
    </div>
  </aside>
);

const KeyTakeaways = ({ items }: { items: string[] }) => (
  <aside className="my-10 overflow-hidden rounded-2xl border border-sky-300/60 bg-gradient-to-br from-sky-50 to-white p-6 shadow-sm md:p-8">
    <div className="mb-4 flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/15 text-blue-700">
        <Lightbulb className="h-5 w-5" />
      </div>
      <h2 className="text-lg font-semibold text-navy-dark">Key Takeaways</h2>
    </div>
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((t, i) => (
        <li key={i} className="flex gap-3 text-slate-700">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
          <span className="text-[15px] leading-relaxed">{t}</span>
        </li>
      ))}
    </ul>
  </aside>
);

const PullQuote = ({ children }: { children: React.ReactNode }) => (
  <figure className="my-10 border-l-4 border-sky-400 bg-gradient-to-r from-sky-50 to-white px-5 py-6 md:my-12 md:px-8 md:py-8">
    <Quote className="mb-3 h-6 w-6 text-sky-500" />
    <blockquote className="text-lg font-medium leading-snug text-navy-dark md:text-2xl">
      {children}
    </blockquote>
  </figure>
);

const SectionImage = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
  <figure className="not-prose my-10 md:my-12">
    <div className="overflow-hidden rounded-2xl border border-sky-200 shadow-lg ring-1 ring-blue-900/5">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        width={1280}
        height={768}
        sizes="(min-width: 1024px) 800px, (min-width: 640px) 90vw, 100vw"
        className="h-auto w-full object-cover"
      />
    </div>
    {caption && (
      <figcaption className="mt-3 text-center text-xs italic text-slate-500 md:text-sm">
        {caption}
      </figcaption>
    )}
  </figure>
);

const FeatureGrid = () => (
  <div className="not-prose my-10 grid gap-4 sm:grid-cols-3 md:my-12 md:gap-5">
    {[
      { icon: TrendingUp, title: "Authority", text: "Verified MOZ DA & DR backed by real organic backlinks." },
      { icon: ShieldCheck, title: "Trust", text: "Hand-vetted history. Zero spam, zero penalties, full transparency." },
      { icon: Zap, title: "Speed to Rank", text: "Aged authority means faster indexing and quicker SERP traction." },
    ].map((f) => (
      <div
        key={f.title}
        className="group rounded-2xl border border-sky-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-lg md:p-6"
      >
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy-dark text-sky-300 transition group-hover:bg-blue-600 group-hover:text-white">
          <f.icon className="h-5 w-5" />
        </div>
        <h3 className="text-base font-semibold text-navy-dark">{f.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{f.text}</p>
      </div>
    ))}
  </div>
);

const BuyCTA = () => (
  <div className="not-prose my-12 overflow-hidden rounded-3xl border border-blue-700/30 bg-gradient-to-br from-navy-dark via-navy to-secondary p-7 text-white shadow-2xl md:my-14 md:p-12">
    <div className="grid gap-7 md:grid-cols-[1.4fr_1fr] md:items-center md:gap-8">
      <div>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-300/40 bg-sky-300/10 px-3 py-1 text-xs font-medium text-sky-200">
          <Sparkles className="h-3.5 w-3.5" /> Curated Premium Inventory
        </div>
        <h3 className="text-2xl font-semibold leading-tight md:text-3xl">
          Find a domain worth building a real business on.
        </h3>
        <p className="mt-3 max-w-lg text-sky-100/90">
          Hand-picked premium expired domains with verified authority, clean backlink profiles, and
          instant credibility — ready to launch your next project.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-sky-300 text-navy-dark hover:bg-sky-200">
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
        {[
          { v: "125+", l: "Expert Guides" },
          { v: "DA 25+", l: "Authority" },
          { v: "100%", l: "Vetted" },
        ].map((s) => (
          <div key={s.l} className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="text-xl font-bold text-sky-300 md:text-2xl">{s.v}</p>
            <p className="mt-1 text-sky-100/70">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TwoColumnBuyBanner = () => (
  <div className="not-prose my-12 grid gap-5 md:grid-cols-2 md:gap-6">
    <div className="rounded-2xl border border-sky-200 bg-white p-6 shadow-sm transition hover:shadow-md md:p-7">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-blue-800">
        <ShieldCheck className="h-3.5 w-3.5" /> Verified Authority
      </div>
      <h3 className="text-xl font-semibold text-navy-dark">Premium Expired Domains</h3>
      <p className="mt-2 text-slate-600">
        Hand-vetted expired domains with strong MOZ scores, real backlinks, and proven topical
        history. Ready to power your next project.
      </p>
      <Button asChild className="mt-5 w-full bg-navy-dark text-white hover:bg-navy">
        <Link to={MARKETPLACE_URL}>
          Browse Marketplace <ArrowRight className="ml-1" />
        </Link>
      </Button>
    </div>
    <div className="rounded-2xl border border-blue-300 bg-gradient-to-br from-sky-50 to-blue-100/60 p-6 shadow-sm transition hover:shadow-md md:p-7">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-200/70 px-3 py-1 text-xs font-medium text-blue-900">
        <Globe2 className="h-3.5 w-3.5" /> Brandable & SEO-Ready
      </div>
      <h3 className="text-xl font-semibold text-navy-dark">Find Your Domain Today</h3>
      <p className="mt-2 text-slate-700">
        Skip months of waiting for organic authority. Choose from premium domains built to give
        serious operators an immediate edge.
      </p>
      <Button asChild className="mt-5 w-full bg-blue-600 text-white hover:bg-blue-700">
        <Link to={MARKETPLACE_URL}>
          Explore Premium Inventory <ArrowRight className="ml-1" />
        </Link>
      </Button>
    </div>
  </div>
);

/* ---------- Mobile TOC (collapsible drawer) ---------- */

const MobileTOC = ({
  items,
  open,
  activeId,
  onClose,
  onSelect,
}: {
  items: { id: string; heading: string }[];
  open: boolean;
  activeId?: string;
  onClose: () => void;
  onSelect: (id: string) => void;
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Table of contents">
      <button className="absolute inset-0 w-full bg-navy-dark/65 backdrop-blur-sm" onClick={onClose} aria-label="Close table of contents overlay" />
      <div className="absolute bottom-0 left-0 right-0 max-h-[82vh] overflow-hidden rounded-t-3xl border-t border-sky-300/30 bg-white shadow-2xl animate-in slide-in-from-bottom">
        <div className="sticky top-0 z-10 border-b border-sky-100 bg-white p-5">
          <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-sky-200" aria-hidden />
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-navy-dark">
                <BookOpen className="h-4 w-4 text-blue-600" /> Article sections
              </h2>
              <p className="mt-1 text-xs text-slate-500">Tap a section to jump there. No treasure map required.</p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close table of contents"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-100 text-slate-500 transition hover:bg-sky-50 hover:text-blue-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        <ol className="max-h-[62vh] space-y-2 overflow-y-auto px-5 pb-8 pt-4 text-[15px]">
          {items.map((t, i) => {
            const active = activeId === t.id;
            return (
              <li key={t.id}>
                <button
                  type="button"
                  onClick={() => onSelect(t.id)}
                  className={`flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition ${
                    active ? "bg-blue-600 text-white shadow-md" : "text-slate-700 hover:bg-sky-50 hover:text-blue-700"
                  }`}
                >
                  <span className={`mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${active ? "bg-white/20 text-white" : "bg-sky-100 text-blue-700"}`}>
                    {i + 1}
                  </span>
                  <span className="leading-snug">{t.heading}</span>
                </button>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              onClick={() => onSelect("faq")}
              className={`flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left font-medium transition ${
                activeId === "faq" ? "bg-blue-600 text-white shadow-md" : "text-blue-700 hover:bg-sky-50"
              }`}
            >
              <span className={`mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${activeId === "faq" ? "bg-white/20 text-white" : "bg-blue-600 text-white"}`}>
                ★
              </span>
              <span>Frequently Asked Questions</span>
            </button>
          </li>
        </ol>
      </div>
    </div>
  );
};

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

  const [tocOpen, setTocOpen] = useState(false);
  const [mobileTocExpanded, setMobileTocExpanded] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  const canonical = `${SITE}/expireddomainnames/en/articles/${slug}`;
  const ARTICLES_INDEX = "/expireddomainnames/en/articles";
  const meta = ARTICLE_META[slug];
  const categoryId = meta?.categoryId;
  const categoryName = meta?.categoryName;
  const categoryUrl = categoryId ? `${ARTICLES_INDEX}?category=${categoryId}` : ARTICLES_INDEX;
  const related = getRelatedArticles(slug, 6);
  const enhancedFaqs = useMemo(
    () => [
      ...faqs,
      {
        question: `Is ${primaryKeyword} still worth considering in 2026?`,
        answer: `Yes — when the domain has a clean history, relevant authority, and a name people can remember without doing mental gymnastics. Think practical, not magical.`,
      },
      {
        question: `How do I choose the best domain for ${primaryKeyword}?`,
        answer: `Start with trust signals: short name, clean backlink profile, relevant history, no trademark risk, and a clear match with your business model. If it sounds like a real brand, you are on the right track.`,
      },
    ].slice(0, 8),
    [faqs, primaryKeyword],
  );
  const tocItems = useMemo(() => sections.map((s) => ({ id: slugify(s.heading), heading: s.heading })), [sections]);
  const activeTocLabel = tocItems.find((item) => item.id === activeId)?.heading || "Start reading";
  const readingMin = estimateReadingMinutes(props);
  const publishedDate = "2026-04-15";

  // Image rotation per article (deterministic)
  const [heroImg, midImg1, midImg2, midImg3] = pickImages(slug);
  const subheadStart = hashSlug(slug) % SUBHEAD_TEMPLATES.length;

  // Build key takeaways from first sentences of first 4 sections
  const takeaways = sections
    .slice(0, 4)
    .map((s) => {
      const first = (s.paragraphs?.[0] || s.subsections?.[0]?.paragraphs?.[0] || s.heading).split(". ")[0];
      return first.length > 160 ? first.slice(0, 157) + "…" : first;
    });

  // Pick a meaningful pull quote from middle of article
  const pullQuoteCandidate =
    sections[Math.floor(sections.length / 2)]?.paragraphs?.[0] ?? intro[intro.length - 1] ?? "";
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
    image: `${SITE}${heroImg}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: enhancedFaqs.map((f) => ({
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
  const threeQuarterIndex = Math.max(1, Math.floor((sections.length * 3) / 4));

  useEffect(() => {
    const ids = [...tocItems.map((item) => item.id), "faq"];
    const nodes = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0.05, 0.2, 0.5] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [tocItems]);

  const handleTocSelect = (id: string) => {
    setTocOpen(false);
    setMobileTocExpanded(false);
    window.setTimeout(() => scrollToAnchor(id), 20);
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <html lang="en" />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0a2540" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${SITE}${heroImg}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <HeaderEN />

      {/* HERO — deep blue, matches reference */}
      <header className="relative overflow-hidden border-b border-blue-900/20 bg-gradient-to-br from-navy-dark via-navy to-primary text-white">
        {/* subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(125,211,252,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden
        />
        {/* hero image right side, hidden on small screens */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-60 md:block"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "linear-gradient(to left, black 30%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to left, black 30%, transparent 100%)",
          }}
          aria-hidden
        />
        {/* mobile hero image strip */}
        <div className="relative md:hidden">
          <img
            src={heroImg}
            alt=""
            aria-hidden
            className="h-40 w-full object-cover opacity-50"
            width={1280}
            height={400}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-dark/60 to-navy-dark" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-10 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-5 text-xs text-sky-200/80 md:mb-6 md:text-sm">
            <ol className="flex flex-wrap items-center gap-1.5 md:gap-2">
              <li><Link to="/" className="hover:text-sky-300">Home</Link></li>
              <li aria-hidden>›</li>
              <li><Link to={MARKETPLACE_URL} className="hover:text-sky-300">Premium Domains</Link></li>
              <li aria-hidden>›</li>
              <li><Link to={ARTICLES_INDEX} className="hover:text-sky-300">Articles</Link></li>
              {categoryName && (
                <>
                  <li aria-hidden>›</li>
                  <li><Link to={categoryUrl} className="hover:text-sky-300">{categoryName}</Link></li>
                </>
              )}
            </ol>
          </nav>

          <div className="md:max-w-3xl">
            {categoryName && (
              <Link
                to={categoryUrl}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-300/40 bg-sky-300/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-sky-200 transition hover:bg-sky-300/20 md:mb-5 md:px-4 md:text-xs"
              >
                <Award className="h-3.5 w-3.5" /> {categoryName}
              </Link>
            )}

            <h1 className="text-[28px] font-bold leading-[1.15] tracking-tight md:text-5xl lg:text-6xl">
              {h1}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-sky-100/90 md:mt-6 md:text-lg">
              {intro[0]?.split(". ").slice(0, 2).join(". ").slice(0, 220)}…
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-sky-200/80 md:mt-6 md:gap-x-6 md:text-sm">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-sky-300" />
                <time dateTime={publishedDate}>April 15, 2026</time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-sky-300" />
                {readingMin} min read
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BookOpen className="h-4 w-4 text-sky-300" />
                By IAEE Editorial
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky mobile TOC trigger */}
      <div className="sticky top-16 z-30 border-b border-sky-200 bg-white/95 shadow-sm backdrop-blur lg:hidden">
        <div className="px-3 py-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTocOpen(true)}
              className="flex min-w-0 flex-1 items-center justify-between rounded-xl border border-sky-100 bg-white px-3 py-3 text-left text-sm font-semibold text-navy-dark shadow-sm"
              aria-label="Open full table of contents"
            >
              <span className="flex min-w-0 items-center gap-2">
                <ListOrdered className="h-4 w-4 shrink-0 text-blue-600" />
                <span className="truncate">{activeTocLabel}</span>
              </span>
              <Menu className="h-4 w-4 shrink-0 text-blue-600" />
            </button>
            <button
              onClick={() => setMobileTocExpanded((value) => !value)}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm"
              aria-label={mobileTocExpanded ? "Collapse table of contents" : "Expand quick table of contents"}
              aria-expanded={mobileTocExpanded}
            >
              {mobileTocExpanded ? <Minimize2 className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>
          </div>
          {mobileTocExpanded && (
            <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
              {[...tocItems, { id: "faq", heading: "FAQ" }].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleTocSelect(item.id)}
                  className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                    activeId === item.id ? "border-blue-600 bg-blue-600 text-white" : "border-sky-100 bg-white text-slate-700"
                  }`}
                >
                  {item.id === "faq" ? "FAQ" : `${index + 1}. ${item.heading}`}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <MobileTOC items={tocItems} open={tocOpen} activeId={activeId} onClose={() => setTocOpen(false)} onSelect={handleTocSelect} />

      <main className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] xl:gap-14">
          {/* MAIN COLUMN */}
          <article className="min-w-0 max-w-none">
            {/* Lead / intro with dropcap — broken into smaller blocks */}
            <ReadableParagraphs paragraphs={intro} firstDropcap />

            {takeaways.length >= 3 && <KeyTakeaways items={takeaways} />}

            <FeatureGrid />

            {/* Sections — improved typography, broken text, SEO H3 subheadings */}
            <div className="prose prose-slate max-w-none prose-headings:scroll-mt-32 prose-h2:mt-12 prose-h2:text-[28px] prose-h2:font-bold prose-h2:leading-tight prose-h2:tracking-tight prose-h2:text-navy-dark md:prose-h2:mt-16 md:prose-h2:text-[38px] prose-h3:mt-8 prose-h3:text-xl prose-h3:font-bold prose-h3:text-navy md:prose-h3:text-2xl prose-li:text-slate-700 prose-strong:text-navy-dark prose-a:text-blue-700 hover:prose-a:text-blue-800">
              {sections.map((section, i) => {
                const subhead = SUBHEAD_TEMPLATES[(subheadStart + i) % SUBHEAD_TEMPLATES.length];
                return (
                  <section key={section.heading} id={slugify(section.heading)} className="mb-2">
                    <div className="not-prose mb-4 mt-12 flex items-center gap-3 md:mt-16">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-navy-dark text-sm font-bold text-white shadow-md md:h-10 md:w-10">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-sky-300 via-blue-200 to-transparent" />
                    </div>
                    <h2>{section.heading}</h2>

                    {section.paragraphs?.map((p, j) => (
                      <div key={`s${i}-p${j}`} className="not-prose my-5">
                        {/* Inject SEO H3 subheading after first paragraph if section has 3+ paragraphs */}
                        {j === 1 && (section.paragraphs?.length || 0) >= 3 && (
                          <h3 className="mb-4 mt-8 text-xl font-bold leading-tight text-navy md:text-2xl">{subhead}</h3>
                        )}
                        <ReadableParagraphs paragraphs={[p]} />
                      </div>
                    ))}

                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="not-prose my-6 space-y-3 rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50/60 to-white p-5">
                        {section.bullets.map((b, k) => (
                          <li key={`s${i}-b${k}`} className="flex gap-3 text-[15px] leading-relaxed text-slate-700 md:text-base">
                            <Target className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.subsections?.map((sub, m) => (
                      <div key={`s${i}-sub${m}`} className="not-prose my-8">
                        <h3 className="mb-4 text-xl font-bold leading-tight text-navy md:text-2xl">{sub.heading}</h3>
                        <ReadableParagraphs paragraphs={sub.paragraphs} />
                      </div>
                    ))}

                    {/* Inject visual blocks at strategic points — varied images per article */}
                    {i === 0 && (
                      <FriendlyNote note={HUMAN_NOTES[(hashSlug(slug) + i) % HUMAN_NOTES.length]} />
                    )}
                    {i === 1 && (
                      <ExampleBox title={EXAMPLE_TITLES[hashSlug(slug) % EXAMPLE_TITLES.length]} keyword={primaryKeyword} />
                    )}
                    {i === quarterIndex - 1 && (
                      <SectionImage
                        src={midImg1}
                        alt={`Authority and trust signals for ${primaryKeyword}`}
                        caption="Real authority compounds — backlinks, age, and topical history all matter."
                      />
                    )}
                    {i === midIndex - 1 && pullQuote && <PullQuote>"{pullQuote}"</PullQuote>}
                    {i === midIndex && (
                      <>
                        <FriendlyNote note={HUMAN_NOTES[(hashSlug(slug) + i + 2) % HUMAN_NOTES.length]} />
                        <BuyCTA />
                      </>
                    )}
                    {i === midIndex + 1 && (
                      <SectionImage
                        src={midImg2}
                        alt={`Strategic insights for ${primaryKeyword}`}
                        caption="Smart domain decisions today shape brand equity for the next decade."
                      />
                    )}
                    {i === threeQuarterIndex && (
                      <SectionImage
                        src={midImg3}
                        alt={`Long-term value of ${primaryKeyword}`}
                        caption="A premium domain is a long-horizon brand asset, not a line-item expense."
                      />
                    )}
                  </section>
                );
              })}
            </div>

            {/* FAQ */}
            <section id="faq" className="mt-14 md:mt-16">
              <div className="mb-5 flex items-center gap-3 md:mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/10 text-blue-700">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-[26px] font-bold leading-tight tracking-tight text-navy-dark md:text-3xl">
                    Frequently Asked Questions
                  </h2>
                  <p className="mt-1 text-sm text-slate-600 md:text-base">
                    Quick answers to what serious domain buyers ask most often.
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-sky-200 bg-white shadow-sm">
                <Accordion type="single" collapsible className="divide-y divide-sky-100">
                  {enhancedFaqs.map((f, i) => (
                    <AccordionItem
                      key={`faq-${i}`}
                      value={`faq-${i}`}
                      className="border-b-0 px-5 first:pt-1 last:pb-1 md:px-6"
                    >
                      <AccordionTrigger
                        headingLevel="h3"
                        className="text-left text-[15px] font-semibold text-navy-dark hover:no-underline data-[state=open]:text-blue-700 md:text-base"
                      >
                        {f.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-[15px] leading-relaxed text-slate-700 md:text-base">
                        {f.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mt-14 md:mt-16">
              <div className="rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-6 md:p-10">
                <h2 className="mb-4 text-[26px] font-bold leading-tight tracking-tight text-navy-dark md:text-3xl">
                  The Bottom Line
                </h2>
                <div>
                  <ReadableParagraphs paragraphs={conclusion} />
                  {closingHook && (
                    <p className="mt-5 rounded-xl bg-blue-600/10 p-4 text-lg font-semibold leading-relaxed text-blue-700 md:text-xl">{closingHook}</p>
                  )}
                </div>
              </div>
            </section>

            <TwoColumnBuyBanner />

            {/* Trust strip */}
            <div className="not-prose mt-12 grid gap-4 rounded-2xl border border-sky-200 bg-sky-50/60 p-5 sm:grid-cols-3 md:p-6">
              {[
                { icon: CheckCircle2, title: "Hand-vetted inventory", text: "Every domain reviewed for quality and history." },
                { icon: ShieldCheck, title: "Secure checkout", text: "Trusted payment providers and clean transfer support." },
                { icon: Sparkles, title: "Real authority signals", text: "MOZ DA, backlinks, and topical history disclosed." },
              ].map((t) => (
                <div key={t.title} className="flex items-start gap-3">
                  <t.icon className="mt-0.5 h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-semibold text-navy-dark">{t.title}</p>
                    <p className="text-xs text-slate-600">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Related articles */}
            {related.length > 0 && (
              <aside className="mt-14 md:mt-16">
                <div className="mb-5 flex flex-wrap items-center gap-3 md:mb-6">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold tracking-tight text-navy-dark">Continue Reading</h2>
                  {categoryName && (
                    <Link
                      to={categoryUrl}
                      className="ml-auto text-sm font-medium text-blue-700 hover:underline"
                    >
                      More in {categoryName} →
                    </Link>
                  )}
                </div>
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
                  {related.map((r) => (
                    <li key={r.slug} className="group">
                      <Link
                        to={`/expireddomainnames/en/articles/${r.slug}`}
                        className="block h-full rounded-2xl border border-sky-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-lg"
                      >
                        <p className="text-xs font-medium uppercase tracking-wider text-blue-600">
                          {r.categoryName}
                        </p>
                        <h3 className="mt-2 text-base font-semibold leading-snug text-navy-dark group-hover:text-blue-700">
                          {r.h1}
                        </h3>
                        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">
                          {r.metaDescription}
                        </p>
                        <span className="mt-3 inline-flex items-center text-sm font-medium text-blue-700">
                          Read article <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-sky-200 pt-6 text-sm">
                  <Link to={ARTICLES_INDEX} className="font-medium text-blue-700 hover:underline">→ All Buyer Guides</Link>
                  <Link to={MARKETPLACE_URL} className="font-medium text-blue-700 hover:underline">→ Premium Domains Marketplace</Link>
                  <Link to="/expireddomainnames/en/premium-domains-legal-documents" className="font-medium text-blue-700 hover:underline">→ Legal Documents for Domain Buyers</Link>
                </div>
              </aside>
            )}
          </article>

          {/* SIDEBAR (desktop only) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {/* TOC */}
              <nav aria-label="Table of contents" className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm">
                <h2 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-navy-dark">
                  <BookOpen className="h-4 w-4 text-blue-600" /> In This Article
                </h2>
                <ol className="space-y-2 text-sm">
                  {tocItems.map((t, i) => (
                    <li key={t.id}>
                      <button
                        type="button"
                        onClick={() => handleTocSelect(t.id)}
                        className={`flex w-full gap-2 rounded-lg px-2 py-2 text-left transition ${
                          activeId === t.id ? "bg-blue-600 text-white shadow-sm" : "text-slate-600 hover:bg-sky-50 hover:text-blue-700"
                        }`}
                      >
                        <span className={activeId === t.id ? "text-white" : "text-blue-500"}>{String(i + 1).padStart(2, "0")}</span>
                        <span className="line-clamp-2">{t.heading}</span>
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      type="button"
                      onClick={() => handleTocSelect("faq")}
                      className={`flex w-full gap-2 rounded-lg px-2 py-2 text-left font-medium transition ${
                        activeId === "faq" ? "bg-blue-600 text-white shadow-sm" : "text-blue-700 hover:bg-sky-50"
                      }`}
                    >
                      <span>★</span>
                      <span>FAQ</span>
                    </button>
                  </li>
                </ol>
              </nav>

              {/* Sidebar CTA */}
              <div className="rounded-2xl border border-blue-700/30 bg-gradient-to-br from-navy-dark to-secondary p-6 text-white shadow-md">
                <Sparkles className="mb-2 h-5 w-5 text-sky-300" />
                <h3 className="text-lg font-semibold">Premium Domains</h3>
                <p className="mt-1.5 text-sm text-sky-100/80">
                  Hand-picked, authority-backed domains for serious operators.
                </p>
                <Button asChild size="sm" className="mt-4 w-full bg-sky-300 text-navy-dark hover:bg-sky-200">
                  <Link to={MARKETPLACE_URL}>
                    Browse Marketplace <ArrowRight className="ml-1" />
                  </Link>
                </Button>
              </div>

              {/* Trust signals */}
              <div className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm">
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-navy-dark">Why IAEE</h3>
                <ul className="space-y-2.5 text-sm text-slate-600">
                  <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" /> Verified MOZ DA & DR</li>
                  <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" /> Clean backlink profiles</li>
                  <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" /> Secure escrow available</li>
                  <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" /> Transfer support included</li>
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
