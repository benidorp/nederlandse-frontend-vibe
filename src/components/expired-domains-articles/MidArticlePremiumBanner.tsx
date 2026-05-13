import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles, TrendingUp, Clock, ShieldCheck } from "lucide-react";
import { useAdminRole } from "@/hooks/useAdminRole";

const MARKETPLACE_URL = "/expireddomainnames/en/buy-premium-domains-high-authority-seo-value";
const STORAGE_KEY = "pdbox_clicks_v1";

type VariantId = "A" | "B" | "C";

interface Variant {
  id: VariantId;
  eyebrow: string;
  headline: string;
  sub: string;
  cta: string;
}

const VARIANTS: Variant[] = [
  {
    id: "A",
    eyebrow: "Premium Expired Domain Names",
    headline: "Why build authority for 2 years when you can buy it today?",
    sub: "Every domain in our marketplace ships with verified MOZ DA, real aged backlinks and a clean Wayback history. Launch a brand Google already trusts.",
    cta: "Browse Today's Premium Domains",
  },
  {
    id: "B",
    eyebrow: "Premium Expired Domain Names",
    headline: "The .com or .eu you really want is probably already gone — unless you check now",
    sub: "Hand-picked aged domains with proven SEO equity. Most listings move within two weeks. Secure yours before a competitor does.",
    cta: "See What's Available",
  },
  {
    id: "C",
    eyebrow: "Premium Expired Domain Names",
    headline: "Skip the sandbox. Inherit the authority.",
    sub: "DA 28+, clean backlink profile, fast registrar transfer. The single best SEO shortcut you'll ever take — and a brandable name to match.",
    cta: "View the Marketplace",
  },
];

const hashSlug = (s: string) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
};
const pickVariant = (slug: string): Variant => VARIANTS[(hashSlug(slug) + 1) % VARIANTS.length];

interface ClickStore {
  total: number;
  byVariant: Record<string, number>;
  byPlacement?: Record<string, number>;
}
const readStore = (): ClickStore => {
  if (typeof window === "undefined") return { total: 0, byVariant: {} };
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}") as ClickStore;
  } catch {
    return { total: 0, byVariant: {} };
  }
};
const writeStore = (s: ClickStore) => {
  try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch {}
};

interface Props {
  slug: string;
}

const MidArticlePremiumBanner = ({ slug }: Props) => {
  const variant = pickVariant(slug);
  const { isAdmin } = useAdminRole();
  const [clicks, setClicks] = useState<number | null>(null);

  useEffect(() => {
    if (isAdmin) {
      const s = readStore();
      setClicks(s.byPlacement?.mid || 0);
    }
  }, [isAdmin]);

  const handleClick = () => {
    const s = readStore();
    s.total = (s.total || 0) + 1;
    s.byVariant = s.byVariant || {};
    s.byVariant[variant.id] = (s.byVariant[variant.id] || 0) + 1;
    s.byPlacement = s.byPlacement || {};
    s.byPlacement.mid = (s.byPlacement.mid || 0) + 1;
    writeStore(s);
    if (isAdmin) setClicks(s.byPlacement.mid);
  };

  return (
    <aside
      aria-label="Premium expired domain names marketplace"
      className="not-prose my-12 overflow-hidden rounded-2xl border-2 border-blue-300 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-3 shadow-md md:my-14 md:p-4"
      data-pdbox-variant={variant.id}
      data-pdbox-placement="mid"
    >
      <div className="overflow-hidden rounded-xl bg-white">
        <div className="flex items-center gap-3 bg-blue-600 px-5 py-4 text-white md:px-7">
          <Sparkles className="h-6 w-6 shrink-0" />
          <h2 className="text-lg font-bold tracking-tight md:text-xl">{variant.eyebrow}</h2>
        </div>

        <div className="grid gap-6 px-5 py-6 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:px-7 md:py-7">
          <div>
            <p className="text-lg font-bold leading-snug text-navy-dark md:text-xl">{variant.headline}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">{variant.sub}</p>

            <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /> Verified DA 28+ authority</li>
              <li className="flex items-start gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" /> Clean backlink &amp; Wayback history</li>
              <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" /> Fast secure registrar transfer</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /> New listings added every week</li>
            </ul>
          </div>

          <Link
            to={MARKETPLACE_URL}
            onClick={handleClick}
            className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-blue-700 md:self-center"
          >
            {variant.cta} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {isAdmin && clicks !== null && (
          <div className="border-t border-dashed border-blue-200 bg-blue-50/60 px-5 py-2 text-[10px] font-semibold uppercase tracking-wider text-blue-900 md:px-7">
            <span className="inline-flex items-center gap-1"><TrendingUp className="h-3 w-3" /> Admin · mid-article clicks: {clicks} · variant {variant.id}</span>
          </div>
        )}
      </div>
    </aside>
  );
};

export default MidArticlePremiumBanner;
