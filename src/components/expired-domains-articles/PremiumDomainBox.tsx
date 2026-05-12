import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles, TrendingUp, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAdminRole } from "@/hooks/useAdminRole";

const MARKETPLACE_URL = "/expireddomainnames/en/buy-premium-domains-high-authority-seo-value";

/* ------------------------------------------------------------------ */
/* Featured domains — manage here. Add / remove / re-order freely.    */
/* ------------------------------------------------------------------ */
export interface FeaturedDomain {
  name: string;
  da: number;
  price: string;
  category: string;
  blurb: string;
}

export const FEATURED_DOMAINS: FeaturedDomain[] = [
  { name: "iaee.eu",            da: 31, price: "€695", category: "Business / EU", blurb: "Aged .eu authority brand with verified backlinks." },
  { name: "premiumdomains.eu",  da: 30, price: "€595", category: "Domains / SEO", blurb: "Exact-match brand for the EU domain market." },
  { name: "businessangels.eu",  da: 30, price: "€595", category: "Finance / VC",  blurb: "High-intent investor traffic and aged authority." },
  { name: "agedseodomains.com", da: 29, price: "€495", category: "SEO",           blurb: "Hand-picked aged backlink profile, clean history." },
  { name: "europeandomains.eu", da: 28, price: "€429", category: "Domains",       blurb: "Geo-relevant .eu with established link profile." },
];

/* ------------------------------------------------------------------ */
/* A/B variants                                                        */
/* ------------------------------------------------------------------ */
type VariantId = "A" | "B" | "C";

interface Variant {
  id: VariantId;
  badge: string;
  headline: (d: FeaturedDomain) => string;
  copy: (d: FeaturedDomain) => string;
  cta: string;
}

const VARIANTS: Variant[] = [
  {
    id: "A",
    badge: "Premium Expired Domain",
    headline: (d) => `Aged .com & .eu domains with real authority`,
    copy: () =>
      "Verified MOZ DA, clean backlink history and instant SEO power. Hand-picked premium expired domain names ready to transfer today.",
    cta: "View Premium Domains",
  },
  {
    id: "B",
    badge: "Featured Today",
    headline: (d) => `${d.name} — DA ${d.da} aged authority`,
    copy: (d) =>
      `${d.blurb} Skip the Google sandbox and launch on a domain with real link equity. Asking ${d.price}.`,
    cta: "See This Domain",
  },
  {
    id: "C",
    badge: "Limited Inventory",
    headline: () => `Buy a domain that already ranks`,
    copy: () =>
      "Real aged domains with verified DA, clean histories and fast registrar transfer. Stop building from zero — start with authority.",
    cta: "Browse the Marketplace",
  },
];

/* ------------------------------------------------------------------ */
/* Deterministic per-slug hash → consistent variant + featured pick   */
/* ------------------------------------------------------------------ */
const hashSlug = (s: string) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
};

const pickVariant = (slug: string): Variant => VARIANTS[hashSlug(slug) % VARIANTS.length];
const pickFeatured = (slug: string): FeaturedDomain =>
  FEATURED_DOMAINS[(hashSlug(slug) >>> 3) % FEATURED_DOMAINS.length];

/* ------------------------------------------------------------------ */
/* Click tracking (localStorage; admin-only visible counter)          */
/* ------------------------------------------------------------------ */
const STORAGE_KEY = "pdbox_clicks_v1";

interface ClickStore {
  total: number;
  byVariant: Record<VariantId, number>;
  byDomain: Record<string, number>;
}

const emptyStore = (): ClickStore => ({
  total: 0,
  byVariant: { A: 0, B: 0, C: 0 },
  byDomain: {},
});

const readStore = (): ClickStore => {
  if (typeof window === "undefined") return emptyStore();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyStore();
    const parsed = JSON.parse(raw);
    return { ...emptyStore(), ...parsed, byVariant: { ...emptyStore().byVariant, ...(parsed.byVariant || {}) } };
  } catch {
    return emptyStore();
  }
};

const writeStore = (s: ClickStore) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {}
};

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */
interface Props {
  slug: string;
  placement?: "sidebar" | "mobile";
}

const PremiumDomainBox = ({ slug, placement = "sidebar" }: Props) => {
  const variant = pickVariant(slug);
  const featured = pickFeatured(slug);
  const { isAdmin } = useAdminRole();
  const [stats, setStats] = useState<ClickStore | null>(null);

  useEffect(() => {
    if (isAdmin) setStats(readStore());
  }, [isAdmin]);

  const handleClick = () => {
    const s = readStore();
    s.total += 1;
    s.byVariant[variant.id] = (s.byVariant[variant.id] || 0) + 1;
    s.byDomain[featured.name] = (s.byDomain[featured.name] || 0) + 1;
    writeStore(s);
    if (isAdmin) setStats(s);
  };

  const target = variant.id === "B"
    ? `/domains/${featured.name.replace(/\./g, "-")}`
    : MARKETPLACE_URL;

  const wrapperClass =
    placement === "mobile"
      ? "lg:hidden mb-8 overflow-hidden rounded-2xl border-2 border-blue-300 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-5 shadow-md"
      : "overflow-hidden rounded-2xl border-2 border-blue-300 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-5 shadow-md";

  return (
    <div
      className={wrapperClass}
      data-pdbox-variant={variant.id}
      data-pdbox-domain={featured.name}
      data-pdbox-placement={placement}
    >
      <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
        <Sparkles className="h-3 w-3" /> {variant.badge}
      </div>

      <h3 className="mt-2 text-base font-bold text-navy-dark">
        {variant.headline(featured)}
      </h3>

      <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
        {variant.copy(featured)}
      </p>

      {/* Featured domain mini-card (always shown — dynamic) */}
      <div className="mt-3 rounded-xl border border-blue-200 bg-white/70 p-3">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate text-sm font-semibold text-navy-dark">{featured.name}</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700">
            <BarChart3 className="h-3 w-3" /> DA {featured.da}
          </span>
        </div>
        <div className="mt-1 flex items-center justify-between gap-2 text-[11px] text-slate-500">
          <span className="truncate">{featured.category}</span>
          <span className="font-semibold text-blue-700">{featured.price}</span>
        </div>
      </div>

      <ul className="mt-3 space-y-1 text-xs text-slate-700">
        <li className="flex gap-1.5"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" /> DA 28+ verified authority</li>
        <li className="flex gap-1.5"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" /> Real aged backlink profiles</li>
        <li className="flex gap-1.5"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" /> Fast secure registrar transfer</li>
      </ul>

      <Button
        asChild
        size="sm"
        className="mt-4 w-full bg-blue-600 text-white shadow-sm hover:bg-blue-700"
      >
        <Link to={target} onClick={handleClick}>
          {variant.cta} <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </Button>

      {/* Admin-only click stats — hidden from regular visitors */}
      {isAdmin && stats && (
        <div className="mt-3 rounded-lg border border-dashed border-blue-300 bg-blue-50/60 p-2 text-[10px] text-blue-900">
          <div className="flex items-center gap-1 font-semibold uppercase tracking-wider">
            <TrendingUp className="h-3 w-3" /> Admin · clicks
          </div>
          <div className="mt-1 grid grid-cols-3 gap-1 text-center">
            <span>A: <b>{stats.byVariant.A || 0}</b></span>
            <span>B: <b>{stats.byVariant.B || 0}</b></span>
            <span>C: <b>{stats.byVariant.C || 0}</b></span>
          </div>
          <div className="mt-1 text-center">
            Total <b>{stats.total}</b> · this variant <b>{variant.id}</b> · domain <b>{featured.name}</b>
          </div>
        </div>
      )}
    </div>
  );
};

export default PremiumDomainBox;
