import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader2, AlertCircle, ExternalLink, RefreshCw } from "lucide-react";
import { Helmet } from "react-helmet";

interface SitemapInfo {
  path: string;
  isPending?: boolean;
  lastSubmitted?: string;
  lastDownloaded?: string;
  errors?: string;
  warnings?: string;
}

interface Report {
  site: string;
  generatedAt: string;
  summary: {
    submittedUrls: number;
    urlsWithImpressions90d: number;
    urlsWithoutImpressions90d: number;
  };
  note: string;
  sitemaps: SitemapInfo[];
  notIndexedUrls: string[];
}

interface InspectResult {
  url: string;
  verdict?: string;
  coverageState?: string;
  indexingState?: string;
  lastCrawlTime?: string;
  googleCanonical?: string;
  userCanonical?: string;
  inspectionResultLink?: string;
  error?: string;
}

const SeoIndexationReport = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [report, setReport] = useState<Report | null>(null);
  const [verifying, setVerifying] = useState(false);
  const [inspectResults, setInspectResults] = useState<InspectResult[] | null>(null);

  const run = async () => {
    setLoading(true);
    setError(null);
    setInspectResults(null);
    try {
      const { data, error } = await supabase.functions.invoke("gsc-indexation-report");
      if (error) throw error;
      if ((data as any).error) throw new Error((data as any).error);
      setReport(data as Report);
    } catch (e: any) {
      setError(e.message ?? String(e));
    } finally {
      setLoading(false);
    }
  };

  const verifyWithGSC = async () => {
    if (!report) return;
    setVerifying(true);
    setError(null);
    try {
      // Inspect up to 50 URLs per run (GSC API daily cap is ~600/day).
      const urls = report.notIndexedUrls.slice(0, 50);
      const { data, error } = await supabase.functions.invoke("gsc-url-inspect", {
        body: { urls, siteUrl: report.site },
      });
      if (error) throw error;
      if ((data as any).error) throw new Error((data as any).error);
      setInspectResults((data as any).results as InspectResult[]);
    } catch (e: any) {
      setError(e.message ?? String(e));
    } finally {
      setVerifying(false);
    }
  };

  useEffect(() => {
    run();
  }, []);


  return (
    <>
      <Helmet>
        <title>SEO Indexation Report | IAEE</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Search Console Indexation Report</h1>
          <Button onClick={run} disabled={loading} variant="outline" size="sm">
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>

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
                <div className="text-2xl font-bold text-primary">
                  {report.summary.urlsWithImpressions90d}
                </div>
              </Card>
              <Card className="p-4">
                <div className="text-sm text-muted-foreground">No impressions — likely not indexed</div>
                <div className="text-2xl font-bold text-destructive">
                  {report.summary.urlsWithoutImpressions90d}
                </div>
              </Card>
            </div>

            <Card className="p-4 bg-muted/40 text-sm">
              <strong>About this report:</strong> {report.note}
            </Card>

            <section>
              <h2 className="text-xl font-semibold mb-3">Sitemap submission status</h2>
              <Card className="p-0 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr className="text-left">
                      <th className="p-3">Sitemap</th>
                      <th className="p-3">Errors</th>
                      <th className="p-3">Warnings</th>
                      <th className="p-3">Last downloaded</th>
                    </tr>
                  </thead>
                  <tbody>
                    {report.sitemaps.map((s) => (
                      <tr key={s.path} className="border-t">
                        <td className="p-3 break-all">{s.path}</td>
                        <td className="p-3">{s.errors ?? "0"}</td>
                        <td className="p-3">{s.warnings ?? "0"}</td>
                        <td className="p-3 whitespace-nowrap">
                          {s.lastDownloaded ? new Date(s.lastDownloaded).toLocaleDateString() : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </section>

            <section>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold">
                  URLs likely not indexed ({report.notIndexedUrls.length})
                </h2>
                <Button onClick={verifyWithGSC} disabled={verifying || !report.notIndexedUrls.length} size="sm">
                  {verifying ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
                  Verify with GSC URL Inspection (top 50)
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Heuristic list (no impressions in 90d). Click "Verify" to call Search Console's URL Inspection API for the exact indexing verdict per URL.
              </p>
              <Card className="p-0 overflow-hidden">
                <ul className="divide-y max-h-[600px] overflow-y-auto">
                  {report.notIndexedUrls.map((u) => {
                    const inspect = `https://search.google.com/search-console/inspect?resource_id=${encodeURIComponent(
                      report.site,
                    )}&id=${encodeURIComponent(u)}`;
                    const ir = inspectResults?.find((r) => r.url === u);
                    return (
                      <li key={u} className="p-3 hover:bg-muted/30">
                        <div className="flex items-center gap-3">
                          <span className="flex-1 break-all text-sm">{u}</span>
                          <a
                            href={ir?.inspectionResultLink || inspect}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline text-xs flex items-center gap-1 shrink-0"
                          >
                            Inspect <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                        {ir && (
                          <div className="mt-2 flex flex-wrap gap-2 text-xs">
                            {ir.error ? (
                              <span className="px-2 py-0.5 rounded bg-destructive/10 text-destructive">
                                {ir.error}
                              </span>
                            ) : (
                              <>
                                <span
                                  className={`px-2 py-0.5 rounded ${
                                    ir.verdict === "PASS"
                                      ? "bg-green-500/15 text-green-700 dark:text-green-400"
                                      : "bg-destructive/10 text-destructive"
                                  }`}
                                >
                                  {ir.verdict || "—"}
                                </span>
                                {ir.coverageState && (
                                  <span className="px-2 py-0.5 rounded bg-muted">
                                    {ir.coverageState}
                                  </span>
                                )}
                                {ir.indexingState && ir.indexingState !== "INDEXING_ALLOWED" && (
                                  <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-700 dark:text-amber-400">
                                    {ir.indexingState}
                                  </span>
                                )}
                                {ir.googleCanonical && ir.userCanonical &&
                                  ir.googleCanonical !== ir.userCanonical && (
                                    <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-700 dark:text-amber-400">
                                      Canonical mismatch
                                    </span>
                                  )}
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

export default SeoIndexationReport;
