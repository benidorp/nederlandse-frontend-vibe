// Pulls Search Console Search Analytics + sitemap submissions and returns
// a report of URLs that are submitted but show no impressions in the last
// 90 days (a strong signal they are not indexed).
//
// Note: Google Search Console's URL Inspection API is not exposed through
// the Lovable connector gateway, so the exact "Why pages aren't indexed"
// reason per URL must still be checked manually in GSC. This report
// surfaces the candidate list so the user knows which URLs to inspect.

import { getCorsHeaders, handleCorsPreflightIfNeeded } from "../_shared/cors.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const SITE = "https://www.iaee.eu/";
const SITE_ENC = encodeURIComponent(SITE);
const GW = "https://connector-gateway.lovable.dev/google_search_console";

async function gscFetch(path: string, init: RequestInit = {}) {
  const LOVABLE = Deno.env.get("LOVABLE_API_KEY");
  const GSC = Deno.env.get("GOOGLE_SEARCH_CONSOLE_API_KEY");
  if (!LOVABLE) throw new Error("LOVABLE_API_KEY not configured");
  if (!GSC) throw new Error("GOOGLE_SEARCH_CONSOLE_API_KEY not configured");
  const res = await fetch(`${GW}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${LOVABLE}`,
      "X-Connection-Api-Key": GSC,
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`GSC ${path} [${res.status}]: ${text.slice(0, 300)}`);
  return text ? JSON.parse(text) : {};
}

async function fetchXml(url: string): Promise<string> {
  const r = await fetch(url, { headers: { "User-Agent": "iaee-indexation-bot" } });
  if (!r.ok) throw new Error(`Failed to fetch ${url}: ${r.status}`);
  return await r.text();
}

function extractTags(xml: string, tag: string): string[] {
  const re = new RegExp(`<${tag}>([^<]+)</${tag}>`, "g");
  const out: string[] = [];
  let m;
  while ((m = re.exec(xml)) !== null) out.push(m[1].trim());
  return out;
}

async function collectAllSitemapUrls(): Promise<string[]> {
  const indexXml = await fetchXml(`${SITE}sitemap.xml`);
  const subSitemaps = extractTags(indexXml, "loc");
  const urls = new Set<string>();
  for (const sm of subSitemaps) {
    try {
      const xml = await fetchXml(sm);
      for (const u of extractTags(xml, "loc")) urls.add(u);
    } catch (e) {
      console.warn("skip sitemap", sm, e);
    }
  }
  return [...urls];
}

async function collectImpressionPages(): Promise<Set<string>> {
  const today = new Date();
  const start = new Date(today.getTime() - 90 * 86400000);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  const pages = new Set<string>();
  let startRow = 0;
  const rowLimit = 25000;
  // Single dimension=page; paginate.
  while (true) {
    const body = {
      startDate: fmt(start),
      endDate: fmt(today),
      dimensions: ["page"],
      rowLimit,
      startRow,
    };
    const data = await gscFetch(`/webmasters/v3/sites/${SITE_ENC}/searchAnalytics/query`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    const rows = data.rows ?? [];
    for (const r of rows) {
      const p = r.keys?.[0];
      if (p) pages.add(p);
    }
    if (rows.length < rowLimit) break;
    startRow += rowLimit;
    if (startRow > 100000) break;
  }
  return pages;
}

async function collectSitemapStatus() {
  const data = await gscFetch(`/webmasters/v3/sites/${SITE_ENC}/sitemaps`);
  return (data.sitemap ?? []).map((s: any) => ({
    path: s.path,
    isPending: s.isPending,
    lastSubmitted: s.lastSubmitted,
    lastDownloaded: s.lastDownloaded,
    errors: s.errors,
    warnings: s.warnings,
    contents: s.contents,
  }));
}

Deno.serve(async (req) => {
  const preflight = handleCorsPreflightIfNeeded(req);
  if (preflight) return preflight;
  const corsHeaders = getCorsHeaders(req);

  try {
    // Auth: must be signed in admin
    const auth = req.headers.get("Authorization");
    if (!auth) throw new Error("Unauthorized");
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: auth } } },
    );
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");
    const { data: isAdmin } = await supabase.rpc("has_role", {
      _user_id: user.id,
      _role: "admin",
    });
    if (!isAdmin) throw new Error("Forbidden: admin only");

    const [submitted, withImpressions, sitemaps] = await Promise.all([
      collectAllSitemapUrls(),
      collectImpressionPages(),
      collectSitemapStatus(),
    ]);

    const notIndexed = submitted.filter((u) => !withImpressions.has(u)).sort();
    const indexed = submitted.filter((u) => withImpressions.has(u));

    return new Response(
      JSON.stringify({
        site: SITE,
        generatedAt: new Date().toISOString(),
        summary: {
          submittedUrls: submitted.length,
          urlsWithImpressions90d: indexed.length,
          urlsWithoutImpressions90d: notIndexed.length,
        },
        note:
          "URLs with zero impressions over the last 90 days are likely not indexed. " +
          "Google's URL Inspection API is not available through the connector, so the " +
          "exact 'Why pages aren't indexed' reason (Crawled-currently not indexed, " +
          "Discovered-currently not indexed, Duplicate without user-selected canonical, " +
          "Excluded by noindex, Soft 404, etc.) must still be checked in Search Console " +
          "for each URL. Use this list as the inspection queue.",
        sitemaps,
        notIndexedUrls: notIndexed,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (e: any) {
    console.error(e);
    return new Response(JSON.stringify({ error: e.message ?? String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
