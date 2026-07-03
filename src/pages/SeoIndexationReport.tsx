import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Loader2, AlertCircle, ExternalLink, RefreshCw, RotateCw, ArrowUp, ArrowDown } from "lucide-react";
import { Helmet } from "react-helmet";

interface SitemapInfo {
  path: string;
  lastDownloaded?: string;
  errors?: string;
  warnings?: string;
}

interface Report {
  site: string;
  generatedAt: string;
  summary: { submittedUrls: number; urlsWithImpressions90d: number; urlsWithoutImpressions90d: number };
  note: string;
  sitemaps: SitemapInfo[];
  notIndexedUrls: string[];
}

interface InspectResult {
  url: string;
  verdict?: string;
  coverageState?: string;
  indexingState?: string;
  googleCanonical?: string;
  userCanonical?: string;
  inspectionResultLink?: string;
  error?: string;
}

interface BulkJob {
  id: string;
  status: string;
  total: number;
  processed: number;
  indexed: number;
  not_indexed: number;
  errors: number;
  error_message?: string | null;
  started_at: string;
  finished_at?: string | null;
}

interface ErroredRow { url: string; error: string | null; verdict: string | null; last_inspected_at: string }

interface Diff {
  counts: {
    current: { passed: number; warned: number; failed: number; total: number };
    previous: { passed: number; warned: number; failed: number; total: number } | null;
    deltaPassed: number | null; deltaFailed: number | null; deltaWarned: number | null;
  };
  improved: { url: string; from: string; to: string }[];
  regressed: { url: string; from: string; to: string; errors: string[]; warnings: string[] }[];
  newUrls: { url: string; status: string }[];
  stillFailing: { url: string; errors: string[] }[];
  removed: string[];
}

const SeoIndexationReport = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [report, setReport] = useState<Report | null>(null);
  const [verifying, setVerifying] = useState(false);
  const [inspectResults, setInspectResults] = useState<InspectResult[] | null>(null);

  const [bulkStarting, setBulkStarting] = useState(false);
  const [job, setJob] = useState<BulkJob | null>(null);
  const pollRef = useRef<number | null>(null);

  const [errored, setErrored] = useState<ErroredRow[]>([]);
  const [retrying, setRetrying] = useState(false);

  const [diff, setDiff] = useState<{ current: any; previous: any; diff: Diff | null } | null>(null);

  const stopPolling = () => { if (pollRef.current) { clearInterval(pollRef.current); pollRef.current = null; } };

  const pollJob = (id: string) => {
    stopPolling();
    pollRef.current = window.setInterval(async () => {
      const { data } = await supabase.from("gsc_bulk_jobs").select("*").eq("id", id).maybeSingle();
      if (data) {
        setJob(data as BulkJob);
        if (data.status !== "running") { stopPolling(); loadErrored(); }
      }
    }, 2000);
  };

  const startBulk = async (urls?: string[]) => {
    setBulkStarting(true);
    setError(null);
    try {
      const { data, error } = await supabase.functions.invoke("gsc-bulk-reindex-premium", {
        body: urls ? { urls, limit: urls.length } : { limit: 200, delayMs: 200 },
      });
      if (error) throw error;
      if ((data as any).error) throw new Error((data as any).error);
      const jobId = (data as any).job_id;
      setJob({ id: jobId, status: "running", total: (data as any).total, processed: 0, indexed: 0, not_indexed: 0, errors: 0, started_at: new Date().toISOString() });
      pollJob(jobId);
    } catch (e: any) {
      setError(e.message ?? String(e));
    } finally {
      setBulkStarting(false);
    }
  };

  const loadErrored = async () => {
    const { data } = await supabase
      .from("gsc_inspection_results")
      .select("url, error, verdict, last_inspected_at")
      .or("error.not.is.null,verdict.neq.PASS")
      .order("last_inspected_at", { ascending: false })
      .limit(200);
    setErrored((data ?? []).filter((r: any) => r.error || (r.verdict && r.verdict !== "PASS")) as ErroredRow[]);
  };

  const retryErrored = async () => {
    if (!errored.length) return;
    setRetrying(true);
    try {
      const urls = errored.slice(0, 100).map((r) => r.url);
      await startBulk(urls);
    } finally { setRetrying(false); }
  };

  const loadDiff = async () => {
    try {
      const { data, error } = await supabase.functions.invoke("seo-report-store/diff", { method: "GET" as any });
      if (error) throw error;
      setDiff(data as any);
    } catch (_) { /* silent */ }
  };

  const run = async () => {
    setLoading(true); setError(null); setInspectResults(null);
    try {
      const { data, error } = await supabase.functions.invoke("gsc-indexation-report");
      if (error) throw error;
      if ((data as any).error) throw new Error((data as any).error);
      setReport(data as Report);
    } catch (e: any) { setError(e.message ?? String(e)); }
    finally { setLoading(false); }
  };

  const verifyWithGSC = async () => {
    if (!report) return;
    setVerifying(true); setError(null);
    try {
      const urls = report.notIndexedUrls.slice(0, 50);
      const { data, error } = await supabase.functions.invoke("gsc-url-inspect", { body: { urls, siteUrl: report.site } });
      if (error) throw error;
      if ((data as any).error) throw new Error((data as any).error);
      setInspectResults((data as any).results as InspectResult[]);
    } catch (e: any) { setError(e.message ?? String(e)); }
    finally { setVerifying(false); }
  };

  useEffect(() => { run(); loadErrored(); loadDiff(); return () => stopPolling(); }, []);

  const pct = job && job.total ? Math.round((job.processed / job.total) * 100) : 0;

  return (
    <>
      <Helmet>
        <title>SEO Indexation Report | IAEE</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <h1 className="text-3xl font-bold">Search Console Indexation Report</h1>
          <div className="flex gap-2">
            <Button onClick={() => startBulk()} disabled={bulkStarting || job?.status === "running"} size="sm">
              {(bulkStarting || job?.status === "running") ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
              Bulk re-inspect premium domains
            </Button>
            <Button onClick={run} disabled={loading} variant="outline" size="sm">
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          </div>
        </div>

        {/* Live bulk-job progress */}
        {job && (
          <Card className="p-4 mb-4">
            <div className="flex items-center justify-between mb-2 text-sm">
              <div>
                <strong>Bulk re-inspection</strong> —{" "}
                <span className={
                  job.status === "running" ? "text-primary" :
                  job.status === "completed" ? "text-green-600" :
                  "text-destructive"
                }>{job.status}</span>
                {" · "}
                {job.processed}/{job.total} URLs
                {" · "}✅ {job.indexed} · ❌ {job.not_indexed} · ⚠️ {job.errors}
              </div>
              <div className="text-muted-foreground text-xs">
                {new Date(job.started_at).toLocaleString()}
                {job.finished_at ? ` → ${new Date(job.finished_at).toLocaleTimeString()}` : ""}
              </div>
            </div>
            <Progress value={pct} className="h-2" />
            {job.error_message && <div className="text-destructive text-xs mt-2">{job.error_message}</div>}
          </Card>
        )}

        {/* Errored URLs — manual retry */}
        <Card className="p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm">
              <strong>URLs needing retry</strong> — {errored.length} URLs currently marked with an inspection error or a non-PASS verdict.
            </div>
            <div className="flex gap-2">
              <Button onClick={loadErrored} variant="outline" size="sm">
                <RefreshCw className="h-3 w-3 mr-1" /> Reload
              </Button>
              <Button onClick={retryErrored} disabled={retrying || !errored.length || job?.status === "running"} size="sm">
                <RotateCw className={`h-3 w-3 mr-1 ${retrying ? "animate-spin" : ""}`} />
                Retry top 100
              </Button>
            </div>
          </div>
          {errored.length > 0 && (
            <ul className="max-h-40 overflow-y-auto text-xs divide-y">
              {errored.slice(0, 20).map((r) => (
                <li key={r.url} className="py-1.5 flex items-center justify-between gap-2">
                  <span className="break-all">{r.url}</span>
                  <span className="text-destructive shrink-0">{r.error || r.verdict}</span>
                </li>
              ))}
              {errored.length > 20 && <li className="py-1.5 text-muted-foreground">…and {errored.length - 20} more</li>}
            </ul>
          )}
        </Card>

        {/* Latest-vs-previous SEO report diff */}
        {diff?.diff && diff.current && (
          <Card className="p-4 mb-4">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
              <div className="text-sm">
                <strong>Latest SEO/JSON-LD report diff</strong>
                {" · "}<span className="text-muted-foreground">
                  {new Date(diff.current.created_at).toLocaleString()}
                  {diff.previous ? ` vs. ${new Date(diff.previous.created_at).toLocaleString()}` : " (no previous run)"}
                </span>
              </div>
              <Button onClick={loadDiff} variant="outline" size="sm">
                <RefreshCw className="h-3 w-3 mr-1" /> Reload diff
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-3 text-sm">
              <DiffStat label="Passed" curr={diff.diff.counts.current.passed} delta={diff.diff.counts.deltaPassed} positiveIsGood />
              <DiffStat label="Warnings" curr={diff.diff.counts.current.warned} delta={diff.diff.counts.deltaWarned} />
              <DiffStat label="Failed" curr={diff.diff.counts.current.failed} delta={diff.diff.counts.deltaFailed} />
            </div>
            <div className="grid md:grid-cols-2 gap-3 text-xs">
              <DiffList title={`Improved (${diff.diff.improved.length})`} tone="good"
                items={diff.diff.improved.map((r) => `${r.url} — ${r.from} → ${r.to}`)} />
              <DiffList title={`Regressed (${diff.diff.regressed.length})`} tone="bad"
                items={diff.diff.regressed.map((r) => `${r.url} — ${r.from} → ${r.to}`)} />
              <DiffList title={`Still failing (${diff.diff.stillFailing.length})`} tone="bad"
                items={diff.diff.stillFailing.map((r) => r.url)} />
              <DiffList title={`New non-ok (${diff.diff.newUrls.length})`} tone="warn"
                items={diff.diff.newUrls.map((r) => `${r.url} — ${r.status}`)} />
            </div>
            {!diff.previous && (
              <p className="text-xs text-muted-foreground mt-3">
                Only one report stored so far. The next crawl run (via <code>scripts/seo-full-premium-check.mjs</code> with <code>SEO_REPORT_STORE_URL</code> and <code>SEO_REPORT_STORE_SECRET</code>) will produce a full diff.
              </p>
            )}
          </Card>
        )}

        {loading && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" /> Pulling sitemap URLs and Search Analytics…
          </div>
        )}

        {error && (
          <Card className="p-4 border-destructive bg-destructive/10 flex gap-3">
            <AlertCircle className="h-5 w-5 text-destructive shrink-0" />
            <div className="text-sm">{error}</div>
          </Card>
        )}

        {report && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="p-4">
                <div className="text-sm text-muted-foreground">Submitted URLs</div>
                <div className="text-2xl font-bold">{report.summary.submittedUrls}</div>
              </Card>
              <Card className="p-4">
                <div className="text-sm text-muted-foreground">With impressions (90d)</div>
                <div className="text-2xl font-bold text-primary">{report.summary.urlsWithImpressions90d}</div>
              </Card>
              <Card className="p-4">
                <div className="text-sm text-muted-foreground">No impressions — likely not indexed</div>
                <div className="text-2xl font-bold text-destructive">{report.summary.urlsWithoutImpressions90d}</div>
              </Card>
            </div>

            <Card className="p-4 bg-muted/40 text-sm"><strong>About this report:</strong> {report.note}</Card>

            <section>
              <h2 className="text-xl font-semibold mb-3">Sitemap submission status</h2>
              <Card className="p-0 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr className="text-left">
                      <th className="p-3">Sitemap</th><th className="p-3">Errors</th><th className="p-3">Warnings</th><th className="p-3">Last downloaded</th>
                    </tr>
                  </thead>
                  <tbody>
                    {report.sitemaps.map((s) => (
                      <tr key={s.path} className="border-t">
                        <td className="p-3 break-all">{s.path}</td>
                        <td className="p-3">{s.errors ?? "0"}</td>
                        <td className="p-3">{s.warnings ?? "0"}</td>
                        <td className="p-3 whitespace-nowrap">{s.lastDownloaded ? new Date(s.lastDownloaded).toLocaleDateString() : "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </section>

            <section>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold">URLs likely not indexed ({report.notIndexedUrls.length})</h2>
                <Button onClick={verifyWithGSC} disabled={verifying || !report.notIndexedUrls.length} size="sm">
                  {verifying ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
                  Verify with GSC URL Inspection (top 50)
                </Button>
              </div>
              <Card className="p-0 overflow-hidden">
                <ul className="divide-y max-h-[600px] overflow-y-auto">
                  {report.notIndexedUrls.map((u) => {
                    const inspect = `https://search.google.com/search-console/inspect?resource_id=${encodeURIComponent(report.site)}&id=${encodeURIComponent(u)}`;
                    const ir = inspectResults?.find((r) => r.url === u);
                    return (
                      <li key={u} className="p-3 hover:bg-muted/30">
                        <div className="flex items-center gap-3">
                          <span className="flex-1 break-all text-sm">{u}</span>
                          <a href={ir?.inspectionResultLink || inspect} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs flex items-center gap-1 shrink-0">
                            Inspect <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                        {ir && (
                          <div className="mt-2 flex flex-wrap gap-2 text-xs">
                            {ir.error ? (
                              <span className="px-2 py-0.5 rounded bg-destructive/10 text-destructive">{ir.error}</span>
                            ) : (
                              <>
                                <span className={`px-2 py-0.5 rounded ${ir.verdict === "PASS" ? "bg-green-500/15 text-green-700 dark:text-green-400" : "bg-destructive/10 text-destructive"}`}>{ir.verdict || "—"}</span>
                                {ir.coverageState && <span className="px-2 py-0.5 rounded bg-muted">{ir.coverageState}</span>}
                                {ir.indexingState && ir.indexingState !== "INDEXING_ALLOWED" && <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-700 dark:text-amber-400">{ir.indexingState}</span>}
                              </>
                            )}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </Card>
            </section>

            <div className="text-xs text-muted-foreground">
              Generated {new Date(report.generatedAt).toLocaleString()} for {report.site}
            </div>
          </div>
        )}
      </main>
    </>
  );
};

function DiffStat({ label, curr, delta, positiveIsGood }: { label: string; curr: number; delta: number | null; positiveIsGood?: boolean }) {
  const good = delta === null ? null : positiveIsGood ? delta >= 0 : delta <= 0;
  return (
    <div className="rounded border p-3">
      <div className="text-muted-foreground text-xs">{label}</div>
      <div className="text-xl font-semibold">{curr}</div>
      {delta !== null && (
        <div className={`text-xs flex items-center gap-1 ${good ? "text-green-600" : delta === 0 ? "text-muted-foreground" : "text-destructive"}`}>
          {delta > 0 ? <ArrowUp className="h-3 w-3" /> : delta < 0 ? <ArrowDown className="h-3 w-3" /> : null}
          {delta > 0 ? `+${delta}` : delta}
        </div>
      )}
    </div>
  );
}

function DiffList({ title, items, tone }: { title: string; items: string[]; tone: "good" | "bad" | "warn" }) {
  const color = tone === "good" ? "text-green-700 dark:text-green-400"
              : tone === "bad" ? "text-destructive"
              : "text-amber-700 dark:text-amber-400";
  return (
    <div className="rounded border p-3">
      <div className={`font-semibold mb-1.5 ${color}`}>{title}</div>
      {items.length === 0 ? (
        <div className="text-muted-foreground">—</div>
      ) : (
        <ul className="max-h-40 overflow-y-auto space-y-1">
          {items.slice(0, 50).map((s) => <li key={s} className="break-all">{s}</li>)}
          {items.length > 50 && <li className="text-muted-foreground">…and {items.length - 50} more</li>}
        </ul>
      )}
    </div>
  );
}

export default SeoIndexationReport;
