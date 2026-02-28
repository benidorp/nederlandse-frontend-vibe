import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUniversalAI } from "@/hooks/useUniversalAI";
import { MessageSquare, Send, Loader2, Bot, User, Zap } from "lucide-react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  actions?: { type: string; params: any }[];
  timestamp: Date;
}

const QUICK_COMMANDS = [
  "Create 10 SEO pages for this domain",
  "Optimize all headings for SEO",
  "Add internal links to all pages",
  "Generate FAQ section",
  "Translate page to German",
  "Fix layout issues",
  "Generate blog post about SEO",
];

const AIWorkspaceChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const { processAI, isLoading } = useUniversalAI();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg: ChatMessage = { role: "user", content: input, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const res = await processAI("workspace_chat", input, "en");
    if (res?.result) {
      const parsed = typeof res.result === "object" ? res.result : { explanation: res.result };
      const assistantMsg: ChatMessage = {
        role: "assistant",
        content: parsed.explanation || JSON.stringify(parsed, null, 2),
        actions: parsed.actions || [],
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMsg]);

      // Auto-execute actions if configured
      if (parsed.actions?.length) {
        for (const action of parsed.actions) {
          await executeAction(action);
        }
      }
    }
  };

  const executeAction = async (action: { type: string; params: any }) => {
    const typeMap: Record<string, string> = {
      CREATE_PAGE: "create_page",
      OPTIMIZE_SEO: "meta_optimize",
      ADD_LINKS: "internal_links",
      GENERATE_FAQ: "generate_faq",
      TRANSLATE_PAGE: "translate",
      CLONE_PAGE: "clone_page",
      FIX_LAYOUT: "fix_layout",
      GENERATE_BLOG: "blog",
    };

    const jobType = typeMap[action.type];
    if (!jobType) return;

    const content = action.params?.content || action.params?.title || action.type;
    const lang = action.params?.language || "en";

    const result = await processAI(jobType as any, content, lang, {
      domain: action.params?.domain,
      niche: action.params?.niche,
      keywords: action.params?.keywords,
    });

    if (result) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `✅ Action executed: ${action.type}\nProvider: ${result.provider}\nTokens: ${result.usage.totalTokens}\nCost: $${result.usage.costUsd.toFixed(4)}`,
          timestamp: new Date(),
        },
      ]);
    }
  };

  return (
    <Card className="h-[700px] flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" /> AI Workspace Chat
        </CardTitle>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {QUICK_COMMANDS.map((cmd) => (
            <button
              key={cmd}
              onClick={() => setInput(cmd)}
              className="text-xs px-2.5 py-1 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col overflow-hidden">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2">
          {messages.length === 0 && (
            <div className="text-center text-muted-foreground py-20">
              <Bot className="h-12 w-12 mx-auto mb-3 opacity-30" />
              <p className="text-sm">Type a command or click a quick action above.</p>
              <p className="text-xs mt-1">AI will execute actions directly on your website.</p>
            </div>
          )}
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "assistant" && <Bot className="h-6 w-6 text-primary mt-1 shrink-0" />}
              <div
                className={`max-w-[80%] rounded-lg p-3 text-sm ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <pre className="whitespace-pre-wrap font-sans">{msg.content}</pre>
                {msg.actions && msg.actions.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {msg.actions.map((a, j) => (
                      <div key={j} className="flex items-center gap-1.5 text-xs">
                        <Zap className="h-3 w-3" />
                        <span className="font-mono">{a.type}</span>
                      </div>
                    ))}
                  </div>
                )}
                <span className="text-[10px] opacity-50 mt-1 block">
                  {msg.timestamp.toLocaleTimeString()}
                </span>
              </div>
              {msg.role === "user" && <User className="h-6 w-6 text-muted-foreground mt-1 shrink-0" />}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a command... e.g. 'Create 5 SEO pages for travel niche'"
            disabled={isLoading}
          />
          <Button onClick={handleSend} disabled={isLoading || !input.trim()}>
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIWorkspaceChat;
