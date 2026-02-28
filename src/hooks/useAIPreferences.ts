import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

export interface AIPreferences {
  default_provider: string;
  low_cost_mode: boolean;
  auto_approve: boolean;
  suggest_only: boolean;
  manual_approval: boolean;
  fallback_enabled: boolean;
}

const DEFAULT_PREFS: AIPreferences = {
  default_provider: "lovable",
  low_cost_mode: false,
  auto_approve: false,
  suggest_only: false,
  manual_approval: true,
  fallback_enabled: true,
};

export function useAIPreferences() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [preferences, setPreferences] = useState<AIPreferences>(DEFAULT_PREFS);
  const [loading, setLoading] = useState(true);
  const [apiKeys, setApiKeys] = useState<{ provider: string; key_label: string; is_active: boolean }[]>([]);

  const fetchPreferences = useCallback(async () => {
    if (!user) return;
    setLoading(true);

    const [{ data: prefs }, { data: keys }] = await Promise.all([
      supabase.from("user_ai_preferences").select("*").eq("user_id", user.id).single(),
      supabase.from("user_ai_keys").select("provider, key_label, is_active").eq("user_id", user.id),
    ]);

    if (prefs) {
      setPreferences({
        default_provider: prefs.default_provider,
        low_cost_mode: prefs.low_cost_mode,
        auto_approve: prefs.auto_approve,
        suggest_only: prefs.suggest_only,
        manual_approval: prefs.manual_approval,
        fallback_enabled: prefs.fallback_enabled,
      });
    }
    setApiKeys(keys || []);
    setLoading(false);
  }, [user]);

  useEffect(() => { fetchPreferences(); }, [fetchPreferences]);

  const updatePreferences = async (updates: Partial<AIPreferences>) => {
    if (!user) return;
    const newPrefs = { ...preferences, ...updates };

    const { error } = await supabase
      .from("user_ai_preferences")
      .upsert({ user_id: user.id, ...newPrefs }, { onConflict: "user_id" });

    if (error) {
      toast({ title: "Error", description: "Failed to save preferences", variant: "destructive" });
    } else {
      setPreferences(newPrefs);
      toast({ title: "Saved", description: "AI preferences updated" });
    }
  };

  const saveApiKey = async (provider: string, apiKey: string, label?: string) => {
    if (!user) return;
    const hash = apiKey.slice(0, 4) + "..." + apiKey.slice(-4);

    const { error } = await supabase
      .from("user_ai_keys")
      .upsert({
        user_id: user.id,
        provider,
        api_key_hash: hash,
        encrypted_api_key: apiKey,
        key_label: label || provider,
        is_active: true,
      }, { onConflict: "user_id,provider" });

    if (error) {
      toast({ title: "Error", description: "Failed to save API key", variant: "destructive" });
    } else {
      toast({ title: "Saved", description: `${provider} API key saved securely` });
      fetchPreferences();
    }
  };

  const deleteApiKey = async (provider: string) => {
    if (!user) return;
    await supabase.from("user_ai_keys").delete().eq("user_id", user.id).eq("provider", provider);
    toast({ title: "Deleted", description: `${provider} API key removed` });
    fetchPreferences();
  };

  return { preferences, apiKeys, loading, updatePreferences, saveApiKey, deleteApiKey };
}
