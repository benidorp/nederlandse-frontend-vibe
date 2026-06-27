// Admin-only edge function: verifies indexing status per URL via the Google
// Search Console URL Inspection API (real verdicts, not heuristics).
// POST { urls: string[], siteUrl?: string } -> { results: [{url, verdict, coverageState, indexingState, lastCrawlTime, robotsTxtState, pageFetchState, reason?}] }

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const GW = "https://connector-gateway.lovable.dev/google_search_console";
const DEFAULT_SITE = "https://www.iaee.eu/";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const GSC_KEY = Deno.env.get("GOOGLE_SEARCH_CONSOLE_API_KEY");
    if (!LOVABLE_API_KEY || !GSC_KEY) {
      return json({ error: "Search Console connector not configured" }, 500);
    }

    // Admin gate
    const auth = req.headers.get("Authorization") ?? "";
    const supa = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: auth } } },
    );
    const { data: userData } = await supa.auth.getUser();
    if (!userData?.user) return json({ error: "Unauthorized" }, 401);
    const { data: isAdmin } = await supa.rpc("has_role", {
      _user_id: userData.user.id,
      _role: "admin",
    });
    if (!isAdmin) return json({ error: "Forbidden" }, 403);

    const body = await req.json().catch(() => ({}));
    const urls: string[] = Array.isArray(body.urls) ? body.urls.slice(0, 50) : [];
    const siteUrl: string = body.siteUrl || DEFAULT_SITE;
    if (!urls.length) return json({ error: "Provide urls[]" }, 400);

    const headers = {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": GSC_KEY,
      "Content-Type": "application/json",
    };

    // GSC URL Inspection is rate-limited (~600/day, ~2000/min). Run sequentially with a small delay.
    const results: any[] = [];
    for (const u of urls) {
      try {
        const r = await fetch(`${GW}/v1/urlInspection/index:inspect`, {
          method: "POST",
          headers,
          body: JSON.stringify({ inspectionUrl: u, siteUrl }),
        });
        const data = await r.json().catch(() => ({}));
        if (!r.ok) {
          results.push({ url: u, error: data?.error?.message || `HTTP ${r.status}` });
        } else {
          const idx = data?.inspectionResult?.indexStatusResult ?? {};
          results.push({
            url: u,
            verdict: idx.verdict,                  // PASS | PARTIAL | FAIL | NEUTRAL
            coverageState: idx.coverageState,      // "Submitted and indexed", "Crawled - currently not indexed", ...
            indexingState: idx.indexingState,      // INDEXING_ALLOWED | BLOCKED_BY_META_TAG | BLOCKED_BY_ROBOTS_TXT
            robotsTxtState: idx.robotsTxtState,
            pageFetchState: idx.pageFetchState,
            lastCrawlTime: idx.lastCrawlTime,
            googleCanonical: idx.googleCanonical,
            userCanonical: idx.userCanonical,
            inspectionResultLink: data?.inspectionResult?.inspectionResultLink,
          });
        }
      } catch (e) {
        results.push({ url: u, error: (e as Error).message });
      }
      await new Promise((r) => setTimeout(r, 120));
    }

    const summary = {
      total: results.length,
      indexed: results.filter((r) => r.verdict === "PASS").length,
      notIndexed: results.filter((r) => r.verdict && r.verdict !== "PASS").length,
      errors: results.filter((r) => r.error).length,
    };

    return json({ siteUrl, summary, results });
  } catch (e) {
    return json({ error: (e as Error).message }, 500);
  }
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
