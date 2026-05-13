import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAdminRole } from "@/hooks/useAdminRole";

const MARKETPLACE_URL = "/expireddomainnames/en/buy-premium-domains-high-authority-seo-value";

const FIXED_BADGE = "Premium Expired Domain Names";

/* ------------------------------------------------------------------ */
/* Headline + body pools — slug-hashed for unique-feeling copy per     */
/* article. No ".com" mentions. Always emphasises 301-redirect value.  */
/* ------------------------------------------------------------------ */

const HEADLINES = [
  "Best Aged Domains for 301 Redirects — Instant SEO Authority",
  "Premium Expired Domains Built for 301 Redirects & Link Equity",
  "High-DA Expired Domains — The Smartest 301 Redirect Shortcut",
  "Hand-Picked Expired Domains: Perfect for 301 Redirect Boosts",
  "Aged Authority Domains — Ideal Targets for 301 Redirect SEO",
  "Top Expired Domains for 301 Redirects to Outrank Competitors",
  "Verified DA Expired Domains — Built for 301 Redirect Strategies",
  "Premium Aged Domains: The Cleanest 301 Redirect Fuel Available",
  "Expired Domains That Actually Pass Link Juice via 301 Redirects",
  "Buy Aged Authority Domains — Engineered for 301 Redirect Wins",
  "Curated Expired Domains for Powerful 301 Redirect SEO Boosts",
  "Real Backlink Equity — Expired Domains Ready for 301 Redirects",
];

const COPIES = [
  "Skip years of link building. Each listing has clean Wayback history, real referring domains and is ready to 301-redirect into your money site for an instant authority lift.",
  "Hand-picked aged .eu and other ccTLD domains with verified MOZ DA. Perfect targets to 301-redirect topical equity straight into your existing pages.",
  "Every domain is vetted for spam, manual penalties and PBN footprints — so your 301 redirect actually passes link equity instead of triggering filters.",
  "Why wait two years for backlinks? Acquire an aged domain today, set a clean 301 redirect, and inherit topical trust Google already recognises.",
  "Real aged backlink profiles, not PBNs. Use them as standalone brands or 301-redirect them into a related project for a measurable ranking jump.",
  "Topically relevant expired domains with DA 28+. The cleanest possible candidates for white-hat 301-redirect consolidation strategies.",
  "Inventory moves fast — most premium expired listings sell within 14 days. Lock in a domain that already ranks before a competitor 301-redirects it first.",
  "Verified authority, transparent metrics, fast registrar transfer. Built specifically for SEOs who run consolidation, rebrand or 301-redirect plays.",
];

const CTAS = [
  "See Today's Premium Domains →",
  "Browse the Marketplace →",
  "View Available Domains →",
  "Find a 301-Redirect Domain →",
  "Shop Aged Authority Domains →",
];

const hashSlug = (s: string) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
};

const pickFor = (slug: string) => {
  const h = hashSlug(slug);
  return {
    headline: HEADLINES[h % HEADLINES.length],
    copy: COPIES[(h >> 3) % COPIES.length],
    cta: CTAS[(h >> 6) % CTAS.length],
    variantId: ["A", "B", "C"][h % 3] as "A" | "B" | "C",
  };
};

/* ------------------------------------------------------------------ */
/* Click tracking (admin-only visible counter)                         */
/* ------------------------------------------------------------------ */
const STORAGE_KEY = "pdbox_clicks_v1";
type VariantId = "A" | "B" | "C";
interface ClickStore {
  total: number;
  byVariant: Record<VariantId, number>;
}
const emptyStore = (): ClickStore => ({ total: 0, byVariant: { A: 0, B: 0, C: 0 } });
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
  try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch {}
};

/* ------------------------------------------------------------------ */
interface Props {
  slug: string;
  placement?: "sidebar" | "mobile";
}

const PremiumDomainBox = ({ slug, placement = "sidebar" }: Props) => {
  const { headline, copy, cta, variantId } = pickFor(slug);
  const { isAdmin } = useAdminRole();
  const [stats, setStats] = useState<ClickStore | null>(null);

  useEffect(() => {
    if (isAdmin) setStats(readStore());
  }, [isAdmin]);

  const handleClick = () => {
    const s = readStore();
    s.total += 1;
    s.byVariant[variantId] = (s.byVariant[variantId] || 0) + 1;
    writeStore(s);
    if (isAdmin) setStats(s);
  };

  const baseClass =
    "overflow-hidden rounded-2xl border-2 border-blue-300 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-5 shadow-md";
  const wrapperClass = placement === "mobile" ? `lg:hidden mb-8 ${baseClass}` : baseClass;

  return (
    <div className={wrapperClass} data-pdbox-variant={variantId} data-pdbox-placement={placement}>
      <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
        <Sparkles className="h-3 w-3" /> {FIXED_BADGE}
      </div>

      <h3 className="mt-2 text-base font-bold text-navy-dark">{headline}</h3>

      <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{copy}</p>

      <ul className="mt-3 space-y-1 text-xs text-slate-700">
        <li className="flex gap-1.5"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" /> Best for 301 redirects &amp; link equity</li>
        <li className="flex gap-1.5"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" /> DA 28+ verified aged authority</li>
        <li className="flex gap-1.5"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" /> Clean Wayback &amp; backlink history</li>
        <li className="flex gap-1.5"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" /> Fast secure registrar transfer</li>
      </ul>

      <Button asChild size="sm" className="mt-4 w-full bg-blue-600 text-white shadow-sm hover:bg-blue-700">
        <Link to={MARKETPLACE_URL} onClick={handleClick}>
          {cta} <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </Button>

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
            Total <b>{stats.total}</b> · this variant <b>{variantId}</b>
          </div>
        </div>
      )}
    </div>
  );
};

export default PremiumDomainBox;
