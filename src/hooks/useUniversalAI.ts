import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export type AITaskType =
  | "translate" | "blog" | "meta_optimize" | "alt_text"
  | "internal_links" | "code_generate" | "page_improve"
  | "create_page" | "clone_page" | "domain_generate"
  | "generate_faq" | "schema_markup" | "fix_layout"
  | "workspace_chat";

export type AIProvider = "lovable" | "openai" | "claude" | "custom" | "auto";

interface AIResult {
  success: boolean;
  jobId: string;
  result: any;
  provider: string;
  model: string;
  estimatedCost: number;
  usage: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
    costUsd: number;
    model: string;
    provider: string;
  };
}

interface ProcessOptions {
  provider?: AIProvider;
  model?: string;
  domain?: string;
  niche?: string;
  keywords?: string;
  stream?: boolean;
}

export function useUniversalAI() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const processAI = async (
    jobType: AITaskType,
    content: string,
    language: string = "en",
    options: ProcessOptions = {}
  ): Promise<AIResult | null> => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("ai-universal", {
        body: { jobType, content, language, ...options },
      });

      if (error) {
        toast({ title: "AI Error", description: error.message, variant: "destructive" });
        return null;
      }

      if (data?.error) {
        toast({ title: "AI Error", description: data.error, variant: "destructive" });
        return null;
      }

      toast({
        title: "Success",
        description: `Completed via ${data.provider}. Tokens: ${data.usage?.totalTokens || 0} | Cost: $${data.usage?.costUsd?.toFixed(4) || '0'}`,
      });
      return data;
    } catch (e) {
      toast({ title: "Error", description: "Failed to process AI request", variant: "destructive" });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { processAI, isLoading };
}
