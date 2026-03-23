import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useAIPreferences } from "@/hooks/useAIPreferences";
import { Settings, Key, Shield, Zap, Trash2, Check, Eye, EyeOff } from "lucide-react";

const PROVIDERS = [
  { id: "lovable", name: "Lovable AI", description: "Default — free credits included, no API key needed", icon: "🤖" },
  { id: "openai", name: "ChatGPT API", description: "OpenAI GPT models — requires API key", icon: "🧠" },
  { id: "claude", name: "Claude API", description: "Anthropic Claude — requires API key", icon: "🎭" },
  { id: "auto", name: "Auto (cheapest)", description: "Automatically select the cheapest available provider", icon: "⚡" },
];

const AISettingsTab = () => {
  const { preferences, apiKeys, loading, updatePreferences, saveApiKey, deleteApiKey } = useAIPreferences();
  const [newKeys, setNewKeys] = useState<Record<string, string>>({});
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({});

  if (loading) return <div className="text-center py-8 text-muted-foreground">Loading settings...</div>;

  return (
    <div className="space-y-6">
      {/* Provider Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Settings className="h-5 w-5 text-primary" /> AI Engine Selection</CardTitle>
          <CardDescription>Choose your default AI provider for all tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {PROVIDERS.map((p) => (
              <button
                key={p.id}
                onClick={() => updatePreferences({ default_provider: p.id })}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  preferences.default_provider === p.id
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{p.icon}</span>
                  <div className="flex-1">
                    <div className="font-medium flex items-center gap-2">
                      {p.name}
                      {preferences.default_provider === p.id && <Check className="h-4 w-4 text-primary" />}
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{p.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* API Keys */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Key className="h-5 w-5 text-primary" /> API Key Management</CardTitle>
          <CardDescription>Securely store your API keys — they are never exposed to the frontend</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {["openai", "claude", "custom"].map((provider) => {
            const existing = apiKeys.find((k) => k.provider === provider);
            return (
              <div key={provider} className="p-4 rounded-lg border bg-muted/30">
                <div className="flex items-center justify-between mb-2">
                  <Label className="font-medium capitalize">{provider === "custom" ? "Custom API" : provider} Key</Label>
                  {existing && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-green-600 font-medium">✓ Active</span>
                      <Button variant="ghost" size="sm" onClick={() => deleteApiKey(provider)}>
                        <Trash2 className="h-3.5 w-3.5 text-destructive" />
                      </Button>
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Input
                      type={showKeys[provider] ? "text" : "password"}
                      placeholder={existing ? "••••••••••••" : `Enter ${provider} API key`}
                      value={newKeys[provider] || ""}
                      onChange={(e) => setNewKeys({ ...newKeys, [provider]: e.target.value })}
                    />
                    <button
                      className="absolute right-2 top-2.5 text-muted-foreground"
                      onClick={() => setShowKeys({ ...showKeys, [provider]: !showKeys[provider] })}
                    >
                      {showKeys[provider] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  <Button
                    onClick={() => {
                      if (newKeys[provider]) {
                        saveApiKey(provider, newKeys[provider]);
                        setNewKeys({ ...newKeys, [provider]: "" });
                      }
                    }}
                    disabled={!newKeys[provider]}
                    size="sm"
                  >
                    Save
                  </Button>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Permissions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-primary" /> Permissions & Behavior</CardTitle>
          <CardDescription>Control how AI interacts with your content</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>AI can modify pages automatically</Label>
              <p className="text-xs text-muted-foreground">AI will create and edit pages without confirmation</p>
            </div>
            <Switch
              checked={preferences.auto_approve}
              onCheckedChange={(v) => updatePreferences({ auto_approve: v, manual_approval: !v, suggest_only: false })}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Suggest only mode</Label>
              <p className="text-xs text-muted-foreground">AI will only suggest changes, never apply them</p>
            </div>
            <Switch
              checked={preferences.suggest_only}
              onCheckedChange={(v) => updatePreferences({ suggest_only: v, auto_approve: false })}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Manual approval required</Label>
              <p className="text-xs text-muted-foreground">Review and approve each AI action</p>
            </div>
            <Switch
              checked={preferences.manual_approval}
              onCheckedChange={(v) => updatePreferences({ manual_approval: v })}
            />
          </div>
        </CardContent>
      </Card>

      {/* Cost & Fallback */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Zap className="h-5 w-5 text-primary" /> Cost Optimization & Fallback</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>⚡ Low Cost Mode</Label>
              <p className="text-xs text-muted-foreground">Use cheapest models, batch requests, compress prompts</p>
            </div>
            <Switch
              checked={preferences.low_cost_mode}
              onCheckedChange={(v) => updatePreferences({ low_cost_mode: v })}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>🔄 Automatic Fallback</Label>
              <p className="text-xs text-muted-foreground">If selected provider fails, automatically switch to Lovable AI</p>
            </div>
            <Switch
              checked={preferences.fallback_enabled}
              onCheckedChange={(v) => updatePreferences({ fallback_enabled: v })}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AISettingsTab;
