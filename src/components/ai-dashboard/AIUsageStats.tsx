import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { BarChart3, DollarSign, Zap, Clock } from "lucide-react";

interface UsageData {
  totalJobs: number;
  completedJobs: number;
  failedJobs: number;
  totalTokens: number;
  totalCost: number;
  todayTokens: number;
  todayCost: number;
  dailyLimit: number;
  monthlyLimit: number;
  monthlyTokens: number;
  recentJobs: any[];
}

const AIUsageStats = () => {
  const [usage, setUsage] = useState<UsageData>({
    totalJobs: 0, completedJobs: 0, failedJobs: 0,
    totalTokens: 0, totalCost: 0, todayTokens: 0, todayCost: 0,
    dailyLimit: 500000, monthlyLimit: 10000000, monthlyTokens: 0,
    recentJobs: [],
  });

  useEffect(() => {
    fetchUsage();
  }, []);

  const fetchUsage = async () => {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const monthStart = new Date();
    monthStart.setDate(1);
    monthStart.setHours(0, 0, 0, 0);

    const [jobsRes, todayLogsRes, monthLogsRes, settingsRes, recentRes] = await Promise.all([
      supabase.from("ai_jobs").select("status", { count: "exact" }),
      supabase.from("ai_usage_logs").select("total_tokens, cost_usd").gte("created_at", todayStart.toISOString()),
      supabase.from("ai_usage_logs").select("total_tokens, cost_usd").gte("created_at", monthStart.toISOString()),
      supabase.from("ai_settings").select("setting_key, setting_value"),
      supabase.from("ai_jobs").select("*").order("created_at", { ascending: false }).limit(10),
    ]);

    const jobs = jobsRes.data || [];
    const todayLogs = todayLogsRes.data || [];
    const monthLogs = monthLogsRes.data || [];
    const settings = settingsRes.data || [];

    const dailySetting = settings.find(s => s.setting_key === "daily_token_limit")?.setting_value as any;
    const monthlySetting = settings.find(s => s.setting_key === "monthly_token_limit")?.setting_value as any;
    const dailyLimit = dailySetting?.limit || 500000;
    const monthlyLimit = monthlySetting?.limit || 10000000;

    setUsage({
      totalJobs: jobs.length,
      completedJobs: jobs.filter(j => j.status === "completed").length,
      failedJobs: jobs.filter(j => j.status === "failed").length,
      totalTokens: monthLogs.reduce((s, l) => s + l.total_tokens, 0),
      totalCost: monthLogs.reduce((s, l) => s + Number(l.cost_usd), 0),
      todayTokens: todayLogs.reduce((s, l) => s + l.total_tokens, 0),
      todayCost: todayLogs.reduce((s, l) => s + Number(l.cost_usd), 0),
      dailyLimit, monthlyLimit,
      monthlyTokens: monthLogs.reduce((s, l) => s + l.total_tokens, 0),
      recentJobs: recentRes.data || [],
    });
  };

  const dailyPct = Math.min((usage.todayTokens / usage.dailyLimit) * 100, 100);
  const monthlyPct = Math.min((usage.monthlyTokens / usage.monthlyLimit) * 100, 100);

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Total Jobs</p>
                <p className="text-3xl font-bold">{usage.totalJobs}</p>
              </div>
              <BarChart3 className="h-8 w-8 text-blue-200" />
            </div>
            <p className="text-blue-100 text-xs mt-2">
              {usage.completedJobs} completed · {usage.failedJobs} failed
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Tokens Today</p>
                <p className="text-3xl font-bold">{usage.todayTokens.toLocaleString()}</p>
              </div>
              <Zap className="h-8 w-8 text-purple-200" />
            </div>
            <p className="text-purple-100 text-xs mt-2">
              of {usage.dailyLimit.toLocaleString()} daily limit
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Cost Today</p>
                <p className="text-3xl font-bold">${usage.todayCost.toFixed(4)}</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-200" />
            </div>
            <p className="text-green-100 text-xs mt-2">
              ${usage.totalCost.toFixed(4)} this month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Monthly Tokens</p>
                <p className="text-3xl font-bold">{usage.monthlyTokens.toLocaleString()}</p>
              </div>
              <Clock className="h-8 w-8 text-orange-200" />
            </div>
            <p className="text-orange-100 text-xs mt-2">
              of {usage.monthlyLimit.toLocaleString()} limit
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Limits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Daily Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={dailyPct} className="h-3" />
            <p className="text-xs text-muted-foreground mt-2">
              {usage.todayTokens.toLocaleString()} / {usage.dailyLimit.toLocaleString()} tokens ({dailyPct.toFixed(1)}%)
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Monthly Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={monthlyPct} className="h-3" />
            <p className="text-xs text-muted-foreground mt-2">
              {usage.monthlyTokens.toLocaleString()} / {usage.monthlyLimit.toLocaleString()} tokens ({monthlyPct.toFixed(1)}%)
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Jobs */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Jobs</CardTitle>
          <CardDescription>Last 10 AI processing tasks</CardDescription>
        </CardHeader>
        <CardContent>
          {usage.recentJobs.length === 0 ? (
            <p className="text-muted-foreground text-sm text-center py-8">No jobs yet. Start using AI tools above!</p>
          ) : (
            <div className="space-y-2">
              {usage.recentJobs.map((job) => (
                <div key={job.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 text-sm">
                  <div className="flex items-center gap-3">
                    <span className={`inline-block w-2 h-2 rounded-full ${
                      job.status === "completed" ? "bg-green-500" :
                      job.status === "failed" ? "bg-red-500" :
                      job.status === "processing" ? "bg-yellow-500" : "bg-gray-400"
                    }`} />
                    <span className="font-medium capitalize">{job.job_type.replace("_", " ")}</span>
                    <span className="text-muted-foreground">{job.model}</span>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <span>{job.tokens_used?.toLocaleString() || 0} tokens</span>
                    <span>${Number(job.cost_usd || 0).toFixed(4)}</span>
                    <span>{new Date(job.created_at).toLocaleTimeString()}</span>
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

export default AIUsageStats;
