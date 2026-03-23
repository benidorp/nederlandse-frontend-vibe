import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export type AIJobType = "translate" | "blog" | "meta_optimize" | "alt_text" | "internal_links" | "code_generate" | "page_improve";

interface AIProcessResult {
  success: boolean;
  jobId: string;
  result: any;
  usage: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
    costUsd: number;
    model: string;
  };
}

export function useAIProcess() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const processAI = async (
    jobType: AIJobType,
    content: string,
    language: string = "en",
    model?: string
  ): Promise<AIProcessResult | null> => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("ai-process", {
        body: { jobType, content, language, model },
      });

      if (error) {
        toast({ title: "AI Error", description: error.message, variant: "destructive" });
        return null;
      }

      if (data?.error) {
        toast({ title: "AI Error", description: data.error, variant: "destructive" });
        return null;
      }

      toast({ title: "Success", description: `AI task completed. Tokens used: ${data.usage?.totalTokens || 0}` });
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
