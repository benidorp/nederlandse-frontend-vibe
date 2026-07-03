// Stores SEO/JSON-LD crawl reports (from scripts/seo-full-premium-check.mjs)
// and returns a diff vs. the previous report so we can see which URLs went
// from warning/fail → ok (and vice versa).
//
// POST /store  { report, secret }   -> { id, diff, previous_id }
// GET  /diff                        -> { current, previous, diff }
// GET  /list?limit=20               -> { reports: [{id, created_at, passed, warned, failed, total}] }
//
// Auth:
// - store: shared secret (CRON_SECRET) so CI can post without a user JWT.
// - diff/list: admin JWT (RLS enforces).

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-cron-secret",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

type Rec = { url: string; status: number; errors: string[]; warnings: string[]; products?: number };
type Report = { total: number; passed: number; warned: number; failed: number; durationMs?: number; results: Rec[] };

function statusOf(r: Rec): "ok" | "warn" | "fail" {
  if (r.errors?.length) return "fail";
  if (r.warnings?.length) return "warn";
  return "ok";
}

function diffReports(curr: Report, prev: Report | null) {
  const prevMap = new Map<string, Rec>();
  (prev?.results ?? []).forEach((r) => prevMap.set(r.url, r));
  const improved: { url: string; from: string; to: string }[] = [];
  const regressed: { url: string; from: string; to: string; errors: string[]; warnings: string[] }[] = [];
  const newUrls: { url: string; status: string }[] = [];
  const stillFailing: { url: string; errors: string[] }[] = [];
  const currUrls = new Set<string>();

  for (const r of curr.results) {
    currUrls.add(r.url);
    const now = statusOf(r);
    const before = prevMap.get(r.url);
    if (!before) {
      if (now !== "ok") newUrls.push({ url: r.url, status: now });
      continue;
    }
    const was = statusOf(before);
    if (was !== now) {
      if ((was === "fail" && (now === "warn" || now === "ok")) || (was === "warn" && now === "ok")) {
        improved.push({ url: r.url, from: was, to: now });
      } else {
        regressed.push({ url: r.url, from: was, to: now, errors: r.errors, warnings: r.warnings });
      }
    } else if (now === "fail") {
      stillFailing.push({ url: r.url, errors: r.errors });
    }
  }
  const removed = (prev?.results ?? []).filter((r) => !currUrls.has(r.url)).map((r) => r.url);

  return {
    counts: {
      current: { passed: curr.passed, warned: curr.warned, failed: curr.failed, total: curr.total },
      previous: prev ? { passed: prev.passed, warned: prev.warned, failed: prev.failed, total: prev.total } : null,
      deltaPassed: prev ? curr.passed - prev.passed : null,
      deltaFailed: prev ? curr.failed - prev.failed : null,
      deltaWarned: prev ? curr.warned - prev.warned : null,
    },
    improved, regressed, newUrls, stillFailing, removed,
  };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  const url = new URL(req.url);
  const path = url.pathname.split("/").pop();

  const supa = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  try {
    if (req.method === "POST" && path === "store") {
      const body = await req.json();
      const secret = body?.secret || req.headers.get("x-cron-secret");
      if (secret !== Deno.env.get("CRON_SECRET")) return json({ error: "Unauthorized" }, 401);
      const report = body.report as Report;
      if (!report?.results) return json({ error: "Invalid report" }, 400);

      const { data: previous } = await supa
        .from("seo_reports").select("*").order("created_at", { ascending: false }).limit(1).maybeSingle();

      const { data: inserted, error } = await supa.from("seo_reports").insert({
        total: report.total, passed: report.passed, warned: report.warned, failed: report.failed,
        duration_ms: report.durationMs ?? null, results: report.results,
      }).select().single();
      if (error) return json({ error: error.message }, 500);

      const diff = diffReports(report, previous ? { ...previous, results: previous.results as Rec[] } as Report : null);
      return json({ id: inserted.id, previous_id: previous?.id ?? null, diff });
    }

    // Read endpoints — admin JWT.
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

    if (req.method === "GET" && path === "list") {
      const limit = Math.min(Number(url.searchParams.get("limit")) || 20, 100);
      const { data } = await supa
        .from("seo_reports")
        .select("id, created_at, total, passed, warned, failed, duration_ms")
        .order("created_at", { ascending: false }).limit(limit);
      return json({ reports: data ?? [] });
    }

    if (req.method === "GET" && path === "diff") {
      const { data: rows } = await supa
        .from("seo_reports").select("*").order("created_at", { ascending: false }).limit(2);
      if (!rows?.length) return json({ current: null, previous: null, diff: null });
      const curr = { ...rows[0], results: rows[0].results as Rec[] } as Report & { id: string; created_at: string };
      const prev = rows[1] ? { ...rows[1], results: rows[1].results as Rec[] } as Report & { id: string; created_at: string } : null;
      return json({
        current: { id: (rows[0] as any).id, created_at: (rows[0] as any).created_at, total: curr.total, passed: curr.passed, warned: curr.warned, failed: curr.failed },
        previous: prev ? { id: (rows[1] as any).id, created_at: (rows[1] as any).created_at, total: prev.total, passed: prev.passed, warned: prev.warned, failed: prev.failed } : null,
        diff: diffReports(curr, prev),
      });
    }

    return json({ error: "Not found" }, 404);
  } catch (e) {
    return json({ error: (e as Error).message }, 500);
  }
});

function json(b: unknown, status = 200) {
  return new Response(JSON.stringify(b), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}
