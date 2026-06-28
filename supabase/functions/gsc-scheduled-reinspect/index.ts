// Scheduled re-inspection of FAIL/blocked URLs via Google Search Console.
// Triggered by pg_cron (daily). Authenticated with the CRON_SECRET header so
// no user session is required.
//
// Selection rules (per run):
//   1. Known FAIL/blocked/error rows older than 7 days  (priority A)
//   2. Sitemap URLs we have never inspected yet         (priority B)
//   3. PASS rows older than 30 days (light re-check)    (priority C)
//
// Rate-limit guard: caps each run at MAX_PER_RUN (default 80, well under
// Google's ~600/day site quota) and sleeps 150 ms between requests.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const SITE = "https://www.iaee.eu/";
const GW = "https://connector-gateway.lovable.dev/google_search_console";
const MAX_PER_RUN = 80;
const FAIL_REINSPECT_DAYS = 7;
const PASS_REINSPECT_DAYS = 30;

async function fetchXml(url: string) {
  const r = await fetch(url, { headers: { "User-Agent": "iaee-reinspect" } });
  if (!r.ok) throw new Error(`fetch ${url}: ${r.status}`);
  return r.text();
}
function extractTags(xml: string, tag: string) {
  const re = new RegExp(`<${tag}>([^<]+)</${tag}>`, "g");
  const out: string[] = [];
  let m;
  while ((m = re.exec(xml)) !== null) out.push(m[1].trim());
  return out;
}
async function collectSitemapUrls(): Promise<string[]> {
  const idx = await fetchXml(`${SITE}sitemap.xml`);
  const subs = extractTags(idx, "loc");
  const urls = new Set<string>();
  for (const sm of subs) {
    try {
      const xml = await fetchXml(sm);
      for (const u of extractTags(xml, "loc")) urls.add(u);
    } catch (_) { /* skip */ }
  }
  return [...urls];
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok");

  // Auth: shared secret from pg_cron, or admin JWT for manual trigger.
  const cronSecret = Deno.env.get("CRON_SECRET");
  const provided = req.headers.get("x-cron-secret");
  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

  let authorized = !!(cronSecret && provided && provided === cronSecret);
  if (!authorized) {
    const auth = req.headers.get("Authorization") ?? "";
    const supa = createClient(supabaseUrl, Deno.env.get("SUPABASE_ANON_KEY")!, {
      global: { headers: { Authorization: auth } },
    });
    const { data: u } = await supa.auth.getUser();
    if (u?.user) {
      const { data: isAdmin } = await supa.rpc("has_role", {
        _user_id: u.user.id,
        _role: "admin",
      });
      authorized = !!isAdmin;
    }
  }
  if (!authorized) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const LOVABLE = Deno.env.get("LOVABLE_API_KEY");
  const GSC_KEY = Deno.env.get("GOOGLE_SEARCH_CONSOLE_API_KEY");
  if (!LOVABLE || !GSC_KEY) {
    return new Response(JSON.stringify({ error: "GSC connector not configured" }), { status: 500 });
  }

  const admin = createClient(supabaseUrl, serviceKey);

  // Optional override via body { limit }.
  let limit = MAX_PER_RUN;
  try {
    const body = await req.json();
    if (Number.isFinite(body?.limit)) limit = Math.min(150, Math.max(1, body.limit));
  } catch (_) { /* no body */ }

  // Build candidate queue.
  const failCutoff = new Date(Date.now() - FAIL_REINSPECT_DAYS * 86400000).toISOString();
  const passCutoff = new Date(Date.now() - PASS_REINSPECT_DAYS * 86400000).toISOString();

  const { data: failRows } = await admin
    .from("gsc_inspection_results")
    .select("url")
    .or(`verdict.neq.PASS,error.not.is.null`)
    .lt("last_inspected_at", failCutoff)
    .order("last_inspected_at", { ascending: true })
    .limit(limit);

  const queue: string[] = (failRows ?? []).map((r) => r.url);

  if (queue.length < limit) {
    // Add never-inspected sitemap URLs.
    const sitemap = await collectSitemapUrls().catch(() => [] as string[]);
    const { data: known } = await admin
      .from("gsc_inspection_results")
      .select("url");
    const knownSet = new Set((known ?? []).map((r) => r.url));
    for (const u of sitemap) {
      if (queue.length >= limit) break;
      if (!knownSet.has(u) && !queue.includes(u)) queue.push(u);
    }
  }

  if (queue.length < limit) {
    const { data: passRows } = await admin
      .from("gsc_inspection_results")
      .select("url")
      .eq("verdict", "PASS")
      .lt("last_inspected_at", passCutoff)
      .order("last_inspected_at", { ascending: true })
      .limit(limit - queue.length);
    for (const r of passRows ?? []) if (!queue.includes(r.url)) queue.push(r.url);
  }

  const headers = {
    Authorization: `Bearer ${LOVABLE}`,
    "X-Connection-Api-Key": GSC_KEY,
    "Content-Type": "application/json",
  };

  let ok = 0, failed = 0;
  for (const u of queue) {
    try {
      const r = await fetch(`${GW}/v1/urlInspection/index:inspect`, {
        method: "POST",
        headers,
        body: JSON.stringify({ inspectionUrl: u, siteUrl: SITE }),
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) {
        await admin.from("gsc_inspection_results").upsert({
          url: u,
          site_url: SITE,
          error: data?.error?.message || `HTTP ${r.status}`,
          last_inspected_at: new Date().toISOString(),
        });
        failed++;
      } else {
        const idx = data?.inspectionResult?.indexStatusResult ?? {};
        await admin.from("gsc_inspection_results").upsert({
          url: u,
          site_url: SITE,
          verdict: idx.verdict ?? null,
          coverage_state: idx.coverageState ?? null,
          indexing_state: idx.indexingState ?? null,
          robots_txt_state: idx.robotsTxtState ?? null,
          page_fetch_state: idx.pageFetchState ?? null,
          google_canonical: idx.googleCanonical ?? null,
          user_canonical: idx.userCanonical ?? null,
          last_crawl_time: idx.lastCrawlTime ?? null,
          inspection_result_link: data?.inspectionResult?.inspectionResultLink ?? null,
          error: null,
          last_inspected_at: new Date().toISOString(),
        });
        ok++;
      }
    } catch (e) {
      await admin.from("gsc_inspection_results").upsert({
        url: u,
        site_url: SITE,
        error: (e as Error).message,
        last_inspected_at: new Date().toISOString(),
      });
      failed++;
    }
    await new Promise((r) => setTimeout(r, 150));
  }

  return new Response(
    JSON.stringify({ inspected: queue.length, ok, failed, ranAt: new Date().toISOString() }),
    { headers: { "Content-Type": "application/json" } },
  );
});
