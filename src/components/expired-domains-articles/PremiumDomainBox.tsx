import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAdminRole } from "@/hooks/useAdminRole";

const MARKETPLACE_URL = "/expireddomainnames/en/buy-premium-domains-high-authority-seo-value";

/* ------------------------------------------------------------------ */
/* A/B variants — copy only. All variants always link to the          */
/* marketplace (never to a single domain).                            */
/* ------------------------------------------------------------------ */
type VariantId = "A" | "B" | "C";

interface Variant {
  id: VariantId;
  badge: string;
  headline: string;
  copy: string;
  cta: string;
}

const FIXED_BADGE = "Premium Expired Domain Names";

const VARIANTS: Variant[] = [
  {
    id: "A",
    badge: FIXED_BADGE,
    headline: "Skip 2 years of SEO grind — buy a domain that already ranks",
    copy: "Hand-picked aged .com & .eu names with verified MOZ DA, clean backlink histories and instant trust. Inventory moves fast — most listings sell within 14 days.",
    cta: "See Today's Premium Domains →",
  },
  {
    id: "B",
    badge: FIXED_BADGE,
    headline: "Aged authority your competitors can't buy twice",
    copy: "Each premium expired domain in our marketplace has real backlinks from real sites — not PBNs. Launch on day one with the SEO equity others spend years building.",
    cta: "Browse the Marketplace →",
  },
  {
    id: "C",
    badge: FIXED_BADGE,
    headline: "One great domain is worth a thousand blog posts",
    copy: "Verified DA 28+, clean Wayback history, fast registrar transfer. Stop building from zero — claim a name that Google already trusts before someone else does.",
    cta: "View Available Domains →",
  },
];

const hashSlug = (s: string) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
};

const pickVariant = (slug: string): Variant => VARIANTS[hashSlug(slug) % VARIANTS.length];

/* ------------------------------------------------------------------ */
/* Click tracking (localStorage; admin-only visible counter)          */
/* ------------------------------------------------------------------ */
const STORAGE_KEY = "pdbox_clicks_v1";

interface ClickStore {
  total: number;
  byVariant: Record<VariantId, number>;
}

const emptyStore = (): ClickStore => ({
  total: 0,
  byVariant: { A: 0, B: 0, C: 0 },
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
interface Props {
  slug: string;
  placement?: "sidebar" | "mobile";
}

const PremiumDomainBox = ({ slug, placement = "sidebar" }: Props) => {
  const variant = pickVariant(slug);
  const { isAdmin } = useAdminRole();
  const [stats, setStats] = useState<ClickStore | null>(null);

  useEffect(() => {
    if (isAdmin) setStats(readStore());
  }, [isAdmin]);

  const handleClick = () => {
    const s = readStore();
    s.total += 1;
    s.byVariant[variant.id] = (s.byVariant[variant.id] || 0) + 1;
    writeStore(s);
    if (isAdmin) setStats(s);
  };

  // Identical blue styling on both placements
  const baseClass =
    "overflow-hidden rounded-2xl border-2 border-blue-300 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-5 shadow-md";
  const wrapperClass = placement === "mobile" ? `lg:hidden mb-8 ${baseClass}` : baseClass;

  return (
    <div className={wrapperClass} data-pdbox-variant={variant.id} data-pdbox-placement={placement}>
      <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
        <Sparkles className="h-3 w-3" /> {variant.badge}
      </div>

      <h3 className="mt-2 text-base font-bold text-navy-dark">{variant.headline}</h3>

      <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{variant.copy}</p>

      <ul className="mt-3 space-y-1 text-xs text-slate-700">
        <li className="flex gap-1.5"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" /> DA 28+ verified authority</li>
        <li className="flex gap-1.5"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" /> Real aged backlink profiles</li>
        <li className="flex gap-1.5"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" /> Fast secure registrar transfer</li>
      </ul>

      <Button asChild size="sm" className="mt-4 w-full bg-blue-600 text-white shadow-sm hover:bg-blue-700">
        <Link to={MARKETPLACE_URL} onClick={handleClick}>
          {variant.cta} <ArrowRight className="ml-1 h-4 w-4" />
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
            Total <b>{stats.total}</b> · this variant <b>{variant.id}</b>
          </div>
        </div>
      )}
    </div>
  );
};

export default PremiumDomainBox;
