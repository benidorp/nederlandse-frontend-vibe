import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Languages, FileText, Link2, Search, Image, Code, Sparkles, BarChart3 } from "lucide-react";
import AIUsageStats from "@/components/ai-dashboard/AIUsageStats";
import TranslateTab from "@/components/ai-dashboard/TranslateTab";
import BlogGeneratorTab from "@/components/ai-dashboard/BlogGeneratorTab";
import MetaOptimizerTab from "@/components/ai-dashboard/MetaOptimizerTab";
import AltTextTab from "@/components/ai-dashboard/AltTextTab";
import InternalLinksTab from "@/components/ai-dashboard/InternalLinksTab";
import CodeAssistantTab from "@/components/ai-dashboard/CodeAssistantTab";
import PageImproverTab from "@/components/ai-dashboard/PageImproverTab";

const AIDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI SEO Automation Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Powered by OpenAI GPT-3.5 & GPT-4 — All processing runs server-side
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-4 lg:grid-cols-8 gap-1 h-auto p-1 bg-white/80 backdrop-blur border shadow-sm">
            <TabsTrigger value="overview" className="flex items-center gap-1.5 text-xs">
              <BarChart3 className="h-3.5 w-3.5" /> Overview
            </TabsTrigger>
            <TabsTrigger value="translate" className="flex items-center gap-1.5 text-xs">
              <Languages className="h-3.5 w-3.5" /> Translate
            </TabsTrigger>
            <TabsTrigger value="blog" className="flex items-center gap-1.5 text-xs">
              <FileText className="h-3.5 w-3.5" /> Blog
            </TabsTrigger>
            <TabsTrigger value="meta" className="flex items-center gap-1.5 text-xs">
              <Search className="h-3.5 w-3.5" /> Meta SEO
            </TabsTrigger>
            <TabsTrigger value="alt" className="flex items-center gap-1.5 text-xs">
              <Image className="h-3.5 w-3.5" /> Alt Text
            </TabsTrigger>
            <TabsTrigger value="links" className="flex items-center gap-1.5 text-xs">
              <Link2 className="h-3.5 w-3.5" /> Links
            </TabsTrigger>
            <TabsTrigger value="code" className="flex items-center gap-1.5 text-xs">
              <Code className="h-3.5 w-3.5" /> Code
            </TabsTrigger>
            <TabsTrigger value="improve" className="flex items-center gap-1.5 text-xs">
              <Sparkles className="h-3.5 w-3.5" /> Improve
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <AIUsageStats />
          </TabsContent>
          <TabsContent value="translate">
            <TranslateTab />
          </TabsContent>
          <TabsContent value="blog">
            <BlogGeneratorTab />
          </TabsContent>
          <TabsContent value="meta">
            <MetaOptimizerTab />
          </TabsContent>
          <TabsContent value="alt">
            <AltTextTab />
          </TabsContent>
          <TabsContent value="links">
            <InternalLinksTab />
          </TabsContent>
          <TabsContent value="code">
            <CodeAssistantTab />
          </TabsContent>
          <TabsContent value="improve">
            <PageImproverTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AIDashboard;
