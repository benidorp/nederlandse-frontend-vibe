import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Model routing: simple tasks use 3.5, complex use 4
const MODEL_MAP: Record<string, string> = {
  translate: "gpt-3.5-turbo",
  meta_optimize: "gpt-3.5-turbo",
  alt_text: "gpt-3.5-turbo",
  internal_links: "gpt-3.5-turbo",
  blog: "gpt-4",
  code_generate: "gpt-4",
  page_improve: "gpt-4",
};

// Cost per 1K tokens (approximate)
const COST_MAP: Record<string, { input: number; output: number }> = {
  "gpt-3.5-turbo": { input: 0.0005, output: 0.0015 },
  "gpt-4": { input: 0.03, output: 0.06 },
};

function getSystemPrompt(jobType: string, language: string): string {
  const prompts: Record<string, string> = {
    translate: `You are a professional translator and SEO specialist. Translate the provided content to ${language}. Maintain HTML structure, SEO keywords, and natural readability. Never leave any English words untranslated unless they are brand names or technical terms. Return ONLY the translated content.`,
    blog: `You are an expert SEO content writer. Write a comprehensive, SEO-optimized blog article in ${language}. Include proper H1/H2/H3 structure, meta title (max 60 chars), meta description (max 160 chars), FAQ schema data, and suggested internal links. Return as JSON with fields: title, metaTitle, metaDescription, content (HTML), faqItems (array of {question, answer}), suggestedLinks (array of strings).`,
    meta_optimize: `You are an SEO meta tag specialist. Generate optimized meta tags for the given page content in ${language}. Return JSON with: metaTitle (max 60 chars), metaDescription (max 160 chars), ogTitle, ogDescription, twitterTitle, twitterDescription, keywords (array).`,
    alt_text: `You are an image SEO specialist. Generate descriptive, SEO-optimized alt text for images in ${language}. Return JSON array with: [{imageDescription, altText, title}].`,
    internal_links: `You are an internal linking strategist. Analyze the provided page content and suggest contextual internal links. Return JSON: {suggestions: [{anchorText, targetUrl, context, relevanceScore}]}.`,
    code_generate: `You are a web development expert. Generate clean, valid code based on the request. Support HTML, CSS, JSON-LD schema markup, and structured data. Return JSON: {code, language, description, validation}.`,
    page_improve: `You are a conversion rate optimization expert and SEO specialist. Analyze the page content in ${language} and provide improvements. Return JSON: {readabilityScore, keywordDensity, suggestions: [{type, current, improved, reason}], ctaImprovements: [{current, improved, reason}]}.`,
  };
  return prompts[jobType] || prompts.translate;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");
  if (!OPENAI_API_KEY) {
    return new Response(JSON.stringify({ error: "OPENAI_API_KEY not configured" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    const { jobType, content, language = "en", model: requestedModel, batchItems } = await req.json();

    if (!jobType || !content) {
      return new Response(JSON.stringify({ error: "jobType and content are required" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Check rate limiting - count jobs in last minute
    const oneMinuteAgo = new Date(Date.now() - 60000).toISOString();
    const { count: recentJobs } = await supabase
      .from("ai_jobs")
      .select("*", { count: "exact", head: true })
      .gte("created_at", oneMinuteAgo);

    const { data: rateSetting } = await supabase
      .from("ai_settings")
      .select("setting_value")
      .eq("setting_key", "rate_limit_per_minute")
      .single();

    const rateLimit = rateSetting?.setting_value?.limit || 20;
    if ((recentJobs || 0) >= rateLimit) {
      return new Response(JSON.stringify({ error: "Rate limit exceeded. Please wait." }), {
        status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Check daily token limit
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const { data: dailyUsage } = await supabase
      .from("ai_usage_logs")
      .select("total_tokens")
      .gte("created_at", todayStart.toISOString());

    const totalTokensToday = (dailyUsage || []).reduce((sum, log) => sum + log.total_tokens, 0);
    const { data: dailyLimitSetting } = await supabase
      .from("ai_settings")
      .select("setting_value")
      .eq("setting_key", "daily_token_limit")
      .single();

    const dailyLimit = dailyLimitSetting?.setting_value?.limit || 500000;
    if (totalTokensToday >= dailyLimit) {
      return new Response(JSON.stringify({ error: "Daily token limit reached." }), {
        status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const model = requestedModel || MODEL_MAP[jobType] || "gpt-3.5-turbo";
    const systemPrompt = getSystemPrompt(jobType, language);

    // Create job record
    const { data: job, error: jobError } = await supabase
      .from("ai_jobs")
      .insert({
        job_type: jobType,
        status: "processing",
        model,
        input_data: { content, language, batchItems },
      })
      .select()
      .single();

    if (jobError) {
      console.error("Job creation error:", jobError);
      return new Response(JSON.stringify({ error: "Failed to create job" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Call OpenAI
    const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: typeof content === "string" ? content : JSON.stringify(content) },
        ],
        temperature: jobType === "translate" ? 0.3 : 0.7,
        max_tokens: jobType === "blog" ? 4000 : 2000,
      }),
    });

    if (!openaiResponse.ok) {
      const errorText = await openaiResponse.text();
      console.error("OpenAI error:", openaiResponse.status, errorText);

      await supabase
        .from("ai_jobs")
        .update({ status: "failed", error_message: `OpenAI API error: ${openaiResponse.status}` })
        .eq("id", job.id);

      return new Response(JSON.stringify({ error: "OpenAI API error", details: errorText }), {
        status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const openaiData = await openaiResponse.json();
    const usage = openaiData.usage || {};
    const resultContent = openaiData.choices?.[0]?.message?.content || "";

    // Calculate cost
    const costs = COST_MAP[model] || COST_MAP["gpt-3.5-turbo"];
    const costUsd = ((usage.prompt_tokens || 0) / 1000) * costs.input + ((usage.completion_tokens || 0) / 1000) * costs.output;

    // Update job
    await supabase
      .from("ai_jobs")
      .update({
        status: "completed",
        output_data: { result: resultContent },
        tokens_used: usage.total_tokens || 0,
        cost_usd: costUsd,
        completed_at: new Date().toISOString(),
      })
      .eq("id", job.id);

    // Log usage
    await supabase.from("ai_usage_logs").insert({
      job_id: job.id,
      model,
      prompt_tokens: usage.prompt_tokens || 0,
      completion_tokens: usage.completion_tokens || 0,
      total_tokens: usage.total_tokens || 0,
      cost_usd: costUsd,
    });

    // Store generated content
    let parsedResult = resultContent;
    try {
      parsedResult = JSON.parse(resultContent);
    } catch {
      // Not JSON, use raw text
    }

    const contentTypeMap: Record<string, string> = {
      translate: "translation",
      blog: "blog",
      meta_optimize: "meta",
      alt_text: "alt_text",
      internal_links: "internal_links",
      code_generate: "code",
      page_improve: "page_improvement",
    };

    await supabase.from("ai_generated_content").insert({
      job_id: job.id,
      content_type: contentTypeMap[jobType] || "translation",
      title: typeof parsedResult === "object" && parsedResult?.title ? parsedResult.title : `${jobType} - ${language}`,
      language,
      content: typeof parsedResult === "string" ? parsedResult : JSON.stringify(parsedResult),
      metadata: { model, tokens: usage.total_tokens, cost: costUsd },
    });

    return new Response(
      JSON.stringify({
        success: true,
        jobId: job.id,
        result: parsedResult,
        usage: {
          promptTokens: usage.prompt_tokens || 0,
          completionTokens: usage.completion_tokens || 0,
          totalTokens: usage.total_tokens || 0,
          costUsd,
          model,
        },
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("ai-process error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
