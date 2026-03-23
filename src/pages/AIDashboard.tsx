import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Languages, FileText, Link2, Search, Image, Code, Sparkles, BarChart3, LogOut, Settings, MessageSquare, Globe, Copy, Activity, FileStack } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import AIUsageStats from "@/components/ai-dashboard/AIUsageStats";
import TranslateTab from "@/components/ai-dashboard/TranslateTab";
import BlogGeneratorTab from "@/components/ai-dashboard/BlogGeneratorTab";
import MetaOptimizerTab from "@/components/ai-dashboard/MetaOptimizerTab";
import AltTextTab from "@/components/ai-dashboard/AltTextTab";
import InternalLinksTab from "@/components/ai-dashboard/InternalLinksTab";
import CodeAssistantTab from "@/components/ai-dashboard/CodeAssistantTab";
import PageImproverTab from "@/components/ai-dashboard/PageImproverTab";
import AISettingsTab from "@/components/ai-dashboard/AISettingsTab";
import AIWorkspaceChat from "@/components/ai-dashboard/AIWorkspaceChat";
import DomainGeneratorTab from "@/components/ai-dashboard/DomainGeneratorTab";
import CloneTranslateTab from "@/components/ai-dashboard/CloneTranslateTab";
import ActivityLogTab from "@/components/ai-dashboard/ActivityLogTab";
import GeneratedPagesTab from "@/components/ai-dashboard/GeneratedPagesTab";

const AIDashboard = () => {
  const { user, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Universal AI Engine Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Multi-provider AI system — Lovable AI · OpenAI · Claude — {user?.email}
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={signOut}>
            <LogOut className="h-4 w-4" /> Sign Out
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="flex flex-wrap gap-1 h-auto p-1 bg-white/80 backdrop-blur border shadow-sm">
            <TabsTrigger value="overview" className="flex items-center gap-1.5 text-xs">
              <BarChart3 className="h-3.5 w-3.5" /> Overview
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center gap-1.5 text-xs">
              <MessageSquare className="h-3.5 w-3.5" /> AI Chat
            </TabsTrigger>
            <TabsTrigger value="domain" className="flex items-center gap-1.5 text-xs">
              <Globe className="h-3.5 w-3.5" /> Domain Gen
            </TabsTrigger>
            <TabsTrigger value="clone" className="flex items-center gap-1.5 text-xs">
              <Copy className="h-3.5 w-3.5" /> Clone
            </TabsTrigger>
            <TabsTrigger value="pages" className="flex items-center gap-1.5 text-xs">
              <FileStack className="h-3.5 w-3.5" /> Pages
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
            <TabsTrigger value="log" className="flex items-center gap-1.5 text-xs">
              <Activity className="h-3.5 w-3.5" /> Log
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-1.5 text-xs">
              <Settings className="h-3.5 w-3.5" /> Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview"><AIUsageStats /></TabsContent>
          <TabsContent value="chat"><AIWorkspaceChat /></TabsContent>
          <TabsContent value="domain"><DomainGeneratorTab /></TabsContent>
          <TabsContent value="clone"><CloneTranslateTab /></TabsContent>
          <TabsContent value="pages"><GeneratedPagesTab /></TabsContent>
          <TabsContent value="translate"><TranslateTab /></TabsContent>
          <TabsContent value="blog"><BlogGeneratorTab /></TabsContent>
          <TabsContent value="meta"><MetaOptimizerTab /></TabsContent>
          <TabsContent value="alt"><AltTextTab /></TabsContent>
          <TabsContent value="links"><InternalLinksTab /></TabsContent>
          <TabsContent value="code"><CodeAssistantTab /></TabsContent>
          <TabsContent value="improve"><PageImproverTab /></TabsContent>
          <TabsContent value="log"><ActivityLogTab /></TabsContent>
          <TabsContent value="settings"><AISettingsTab /></TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AIDashboard;
