// Admin-only. Bulk re-inspects every premium-domain URL via the GSC URL
// Inspection API (rate-limited), which nudges Google to re-crawl pages whose
// schema/OG tags recently changed, and resubmits the two premium sitemaps so
// discovery restarts. Persists verdicts to gsc_inspection_results.
//
// POST { limit?: number, siteUrl?: string, delayMs?: number }
//   -> { site, submitted, sitemapsResubmitted, summary, results }

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const GW = "https://connector-gateway.lovable.dev/google_search_console";
const DEFAULT_SITE = "https://www.iaee.eu/";
const SITEMAPS = [
  "https://www.iaee.eu/sitemap-premium-domains.xml",
  "https://www.iaee.eu/sitemap-domain-products.xml",
];

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const GSC_KEY = Deno.env.get("GOOGLE_SEARCH_CONSOLE_API_KEY");
    if (!LOVABLE_API_KEY || !GSC_KEY) return json({ error: "Search Console connector not configured" }, 500);

    // Admin gate
    const auth = req.headers.get("Authorization") ?? "";
    const supaUser = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: auth } } },
    );
    const { data: userData } = await supaUser.auth.getUser();
    if (!userData?.user) return json({ error: "Unauthorized" }, 401);
    const { data: isAdmin } = await supaUser.rpc("has_role", { _user_id: userData.user.id, _role: "admin" });
    if (!isAdmin) return json({ error: "Forbidden" }, 403);

    const supa = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const body = await req.json().catch(() => ({}));
    const limit: number = Math.min(Math.max(Number(body.limit) || 200, 1), 500);
    const siteUrl: string = body.siteUrl || DEFAULT_SITE;
    const delayMs: number = Math.min(Math.max(Number(body.delayMs) || 200, 100), 2000);

    const headers = {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": GSC_KEY,
      "Content-Type": "application/json",
    };

    // 1) Collect URLs from both sitemaps
    const urls = new Set<string>();
    for (const sm of SITEMAPS) {
      try {
        const xml = await fetch(sm).then((r) => r.text());
        for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) urls.add(m[1].trim());
      } catch (_) { /* keep going */ }
    }
    const list = [...urls].slice(0, limit);

    // 2) Resubmit sitemaps (cheap re-crawl signal)
    const sitemapsResubmitted: { sitemap: string; ok: boolean; status: number }[] = [];
    for (const sm of SITEMAPS) {
      const feed = encodeURIComponent(sm);
      const site = encodeURIComponent(siteUrl);
      const r = await fetch(`${GW}/webmasters/v3/sites/${site}/sitemaps/${feed}`, { method: "PUT", headers });
      sitemapsResubmitted.push({ sitemap: sm, ok: r.ok, status: r.status });
    }

    // 3) Rate-limited URL Inspection (~2000/min, ~600/day cap; delayMs guards it)
    const results: any[] = [];
    for (const u of list) {
      try {
        const r = await fetch(`${GW}/v1/urlInspection/index:inspect`, {
          method: "POST", headers,
          body: JSON.stringify({ inspectionUrl: u, siteUrl }),
        });
        const data = await r.json().catch(() => ({}));
        if (!r.ok) {
          results.push({ url: u, error: data?.error?.message || `HTTP ${r.status}` });
        } else {
          const idx = data?.inspectionResult?.indexStatusResult ?? {};
          const row = {
            url: u,
            verdict: idx.verdict,
            coverage_state: idx.coverageState,
            indexing_state: idx.indexingState,
            robots_txt_state: idx.robotsTxtState,
            page_fetch_state: idx.pageFetchState,
            last_crawl_time: idx.lastCrawlTime ?? null,
            google_canonical: idx.googleCanonical,
            user_canonical: idx.userCanonical,
            inspection_result_link: data?.inspectionResult?.inspectionResultLink,
            last_inspected_at: new Date().toISOString(),
          };
          results.push(row);
          await supa.from("gsc_inspection_results").upsert(row, { onConflict: "url" });
        }
      } catch (e) {
        results.push({ url: u, error: (e as Error).message });
      }
      await new Promise((res) => setTimeout(res, delayMs));
    }

    const summary = {
      total: results.length,
      indexed: results.filter((r) => r.verdict === "PASS").length,
      notIndexed: results.filter((r) => r.verdict && r.verdict !== "PASS").length,
      errors: results.filter((r) => r.error).length,
    };

    return json({ site: siteUrl, submitted: list.length, sitemapsResubmitted, summary, results });
  } catch (e) {
    return json({ error: (e as Error).message }, 500);
  }
});

function json(b: unknown, status = 200) {
  return new Response(JSON.stringify(b), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}
