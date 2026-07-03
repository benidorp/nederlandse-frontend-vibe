// Admin-only. Kicks off a background bulk re-inspection of all premium URLs,
// writing live progress to public.gsc_bulk_jobs so the UI can poll a progress
// bar. Also resubmits both premium sitemaps to trigger a re-crawl and persists
// per-URL verdicts to gsc_inspection_results.
//
// POST { limit?: number, siteUrl?: string, delayMs?: number, urls?: string[] }
//   -> { job_id }
//   The caller then polls the gsc_bulk_jobs row (RLS: admin-only).

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

// deno-lint-ignore no-explicit-any
declare const EdgeRuntime: any;

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
    const explicitUrls: string[] | undefined = Array.isArray(body.urls) ? body.urls : undefined;

    // Collect URLs up front so `total` is accurate before background work starts.
    let list: string[] = [];
    if (explicitUrls?.length) {
      list = explicitUrls.slice(0, limit);
    } else {
      const set = new Set<string>();
      for (const sm of SITEMAPS) {
        try {
          const xml = await fetch(sm).then((r) => r.text());
          for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) set.add(m[1].trim());
        } catch (_) { /* keep going */ }
      }
      list = [...set].slice(0, limit);
    }

    const { data: job, error: jobErr } = await supa
      .from("gsc_bulk_jobs")
      .insert({ status: "running", total: list.length })
      .select()
      .single();
    if (jobErr || !job) return json({ error: `Failed to create job: ${jobErr?.message}` }, 500);

    const headers = {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": GSC_KEY,
      "Content-Type": "application/json",
    };

    const work = (async () => {
      let processed = 0, indexed = 0, notIndexed = 0, errors = 0;
      // Resubmit sitemaps first (only when running the sitemap sweep).
      const sitemapsResubmitted: { sitemap: string; ok: boolean; status: number }[] = [];
      if (!explicitUrls?.length) {
        for (const sm of SITEMAPS) {
          try {
            const feed = encodeURIComponent(sm);
            const site = encodeURIComponent(siteUrl);
            const r = await fetch(`${GW}/webmasters/v3/sites/${site}/sitemaps/${feed}`, { method: "PUT", headers });
            sitemapsResubmitted.push({ sitemap: sm, ok: r.ok, status: r.status });
          } catch (_) {
            sitemapsResubmitted.push({ sitemap: sm, ok: false, status: 0 });
          }
        }
        await supa.from("gsc_bulk_jobs").update({ sitemaps_resubmitted: sitemapsResubmitted, updated_at: new Date().toISOString() }).eq("id", job.id);
      }

      for (const u of list) {
        try {
          const r = await fetch(`${GW}/v1/urlInspection/index:inspect`, {
            method: "POST", headers,
            body: JSON.stringify({ inspectionUrl: u, siteUrl }),
          });
          const data = await r.json().catch(() => ({}));
          if (!r.ok) {
            errors++;
            await supa.from("gsc_inspection_results").upsert({
              url: u, verdict: null, coverage_state: null, indexing_state: null,
              robots_txt_state: null, page_fetch_state: null, last_crawl_time: null,
              google_canonical: null, user_canonical: null, inspection_result_link: null,
              last_error: data?.error?.message || `HTTP ${r.status}`,
              last_inspected_at: new Date().toISOString(),
            }, { onConflict: "url" });
          } else {
            const idx = data?.inspectionResult?.indexStatusResult ?? {};
            const verdict = idx.verdict;
            if (verdict === "PASS") indexed++; else if (verdict) notIndexed++;
            await supa.from("gsc_inspection_results").upsert({
              url: u, verdict, coverage_state: idx.coverageState, indexing_state: idx.indexingState,
              robots_txt_state: idx.robotsTxtState, page_fetch_state: idx.pageFetchState,
              last_crawl_time: idx.lastCrawlTime ?? null,
              google_canonical: idx.googleCanonical, user_canonical: idx.userCanonical,
              inspection_result_link: data?.inspectionResult?.inspectionResultLink,
              last_error: null,
              last_inspected_at: new Date().toISOString(),
            }, { onConflict: "url" });
          }
        } catch (e) {
          errors++;
          await supa.from("gsc_inspection_results").upsert({
            url: u, last_error: (e as Error).message, last_inspected_at: new Date().toISOString(),
          }, { onConflict: "url" });
        }
        processed++;
        if (processed % 5 === 0 || processed === list.length) {
          await supa.from("gsc_bulk_jobs").update({
            processed, indexed, not_indexed: notIndexed, errors,
            updated_at: new Date().toISOString(),
          }).eq("id", job.id);
        }
        await new Promise((res) => setTimeout(res, delayMs));
      }

      await supa.from("gsc_bulk_jobs").update({
        processed, indexed, not_indexed: notIndexed, errors,
        status: "completed",
        finished_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }).eq("id", job.id);
    })().catch(async (e) => {
      await supa.from("gsc_bulk_jobs").update({
        status: "failed",
        error_message: (e as Error).message,
        finished_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }).eq("id", job.id);
    });

    if (typeof EdgeRuntime !== "undefined" && EdgeRuntime.waitUntil) EdgeRuntime.waitUntil(work);

    return json({ job_id: job.id, total: list.length });
  } catch (e) {
    return json({ error: (e as Error).message }, 500);
  }
});

function json(b: unknown, status = 200) {
  return new Response(JSON.stringify(b), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}
