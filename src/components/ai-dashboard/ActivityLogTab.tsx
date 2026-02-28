import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Activity, RefreshCw, FileText, DollarSign, Cpu, Clock } from "lucide-react";

interface LogEntry {
  id: string;
  job_type: string;
  status: string;
  model: string;
  provider: string;
  tokens_used: number;
  cost_usd: number;
  created_at: string;
  completed_at: string | null;
}

const ActivityLogTab = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [totals, setTotals] = useState({ jobs: 0, tokens: 0, cost: 0 });

  const fetchLogs = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("ai_jobs")
      .select("id, job_type, status, model, provider, tokens_used, cost_usd, created_at, completed_at")
      .order("created_at", { ascending: false })
      .limit(50);

    const entries = (data || []) as LogEntry[];
    setLogs(entries);
    setTotals({
      jobs: entries.length,
      tokens: entries.reduce((s, e) => s + (e.tokens_used || 0), 0),
      cost: entries.reduce((s, e) => s + Number(e.cost_usd || 0), 0),
    });
    setLoading(false);
  };

  useEffect(() => { fetchLogs(); }, []);

  const getProviderBadge = (provider: string) => {
    const colors: Record<string, string> = {
      lovable: "bg-green-100 text-green-800",
      openai: "bg-blue-100 text-blue-800",
      claude: "bg-purple-100 text-purple-800",
    };
    return colors[provider] || "bg-muted text-muted-foreground";
  };

  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      completed: "bg-green-500",
      failed: "bg-red-500",
      processing: "bg-yellow-500",
      pending: "bg-gray-400",
    };
    return colors[status] || "bg-gray-400";
  };

  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <FileText className="h-8 w-8 text-primary" />
            <div>
              <p className="text-2xl font-bold">{totals.jobs}</p>
              <p className="text-xs text-muted-foreground">Total Jobs</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <Cpu className="h-8 w-8 text-primary" />
            <div>
              <p className="text-2xl font-bold">{totals.tokens.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Tokens Used</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <DollarSign className="h-8 w-8 text-primary" />
            <div>
              <p className="text-2xl font-bold">${totals.cost.toFixed(4)}</p>
              <p className="text-xs text-muted-foreground">Total Cost</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Log Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2"><Activity className="h-5 w-5 text-primary" /> Activity Log</CardTitle>
              <CardDescription>Complete history of all AI operations</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={fetchLogs} disabled={loading}>
              <RefreshCw className={`h-4 w-4 mr-1 ${loading ? "animate-spin" : ""}`} /> Refresh
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {logs.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">No activity yet</p>
          ) : (
            <div className="space-y-2">
              {logs.map((log) => (
                <div key={log.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 text-sm">
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${getStatusBadge(log.status)}`} />
                    <span className="font-medium capitalize">{log.job_type.replace(/_/g, " ")}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded ${getProviderBadge(log.provider || "lovable")}`}>
                      {log.provider || "lovable"}
                    </span>
                    <span className="text-xs text-muted-foreground">{log.model}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{(log.tokens_used || 0).toLocaleString()} tokens</span>
                    <span>${Number(log.cost_usd || 0).toFixed(4)}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {new Date(log.created_at).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ActivityLogTab;
