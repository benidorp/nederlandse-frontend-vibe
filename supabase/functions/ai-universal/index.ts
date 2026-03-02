import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// AES-GCM decryption matching manage-api-keys encryption
function getEncryptionKeyBytes(): Uint8Array {
  const secret = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "fallback-key";
  const raw = new TextEncoder().encode(secret);
  const key = new Uint8Array(32);
  for (let i = 0; i < 32; i++) {
    key[i] = raw[i % raw.length];
  }
  return key;
}

async function importKey(): Promise<CryptoKey> {
  const keyBytes = getEncryptionKeyBytes();
  return await crypto.subtle.importKey(
    "raw",
    keyBytes,
    { name: "AES-GCM" },
    false,
    ["decrypt"]
  );
}

async function decryptAESGCM(ciphertext: string): Promise<string> {
  const key = await importKey();
  const combined = Uint8Array.from(atob(ciphertext), c => c.charCodeAt(0));
  const iv = combined.slice(0, 12);
  const data = combined.slice(12);
  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    key,
    data
  );
  return new TextDecoder().decode(decrypted);
}

// Legacy XOR fallback for old keys not yet re-encrypted
function decryptLegacyXOR(ciphertext: string): string {
  const secret = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "fallback-key";
  const key = new TextEncoder().encode(secret);
  const data = Uint8Array.from(atob(ciphertext), c => c.charCodeAt(0));
  const decrypted = new Uint8Array(data.length);
  for (let i = 0; i < data.length; i++) {
    decrypted[i] = data[i] ^ key[i % key.length];
  }
  return new TextDecoder().decode(decrypted);
}

async function decryptApiKey(ciphertext: string): Promise<string> {
  try {
    return await decryptAESGCM(ciphertext);
  } catch {
    return decryptLegacyXOR(ciphertext);
  }
}

import { getCorsHeaders, handleCorsPreflightIfNeeded } from "../_shared/cors.ts";
import { validateContentInput, validateJobType, validateLanguage, validateDomain, validateStringField } from "../_shared/validation.ts";

// Provider configs
const PROVIDERS = {
  lovable: {
    url: "https://ai.gateway.lovable.dev/v1/chat/completions",
    getKey: () => Deno.env.get("LOVABLE_API_KEY"),
    models: {
      fast: "google/gemini-3-flash-preview",
      standard: "google/gemini-2.5-flash",
      powerful: "google/gemini-2.5-pro",
      cheapest: "google/gemini-2.5-flash-lite",
    },
  },
  openai: {
    url: "https://api.openai.com/v1/chat/completions",
    getKey: () => Deno.env.get("OPENAI_API_KEY"),
    models: {
      fast: "gpt-4o-mini",
      standard: "gpt-4o",
      powerful: "gpt-4o",
      cheapest: "gpt-4o-mini",
    },
  },
  claude: {
    url: "https://api.anthropic.com/v1/messages",
    getKey: () => null, // user-provided
    models: {
      fast: "claude-3-haiku-20240307",
      standard: "claude-3-sonnet-20240229",
      powerful: "claude-3-opus-20240229",
      cheapest: "claude-3-haiku-20240307",
    },
  },
  gemini: {
    url: "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
    getKey: () => Deno.env.get("GEMINI_API_KEY"),
    models: {
      fast: "gemini-2.5-flash-preview-05-20",
      standard: "gemini-2.5-flash-preview-05-20",
      powerful: "gemini-2.5-pro-preview-05-06",
      cheapest: "gemini-2.0-flash-lite",
    },
  },
};

// Cost per 1K tokens
const COST_MAP: Record<string, { input: number; output: number }> = {
  "gpt-4o-mini": { input: 0.00015, output: 0.0006 },
  "gpt-4o": { input: 0.0025, output: 0.01 },
  "gpt-3.5-turbo": { input: 0.0005, output: 0.0015 },
  "gpt-4": { input: 0.03, output: 0.06 },
  "google/gemini-3-flash-preview": { input: 0.0001, output: 0.0004 },
  "google/gemini-2.5-flash": { input: 0.0001, output: 0.0004 },
  "google/gemini-2.5-flash-lite": { input: 0.00005, output: 0.0002 },
  "google/gemini-2.5-pro": { input: 0.00125, output: 0.005 },
  "gemini-2.5-flash-preview-05-20": { input: 0.00015, output: 0.0006 },
  "gemini-2.5-pro-preview-05-06": { input: 0.00125, output: 0.005 },
  "gemini-2.0-flash-lite": { input: 0.00004, output: 0.00016 },
};

// Task -> model tier mapping
const TASK_TIER: Record<string, string> = {
  translate: "fast",
  meta_optimize: "fast",
  alt_text: "fast",
  internal_links: "fast",
  generate_faq: "fast",
  schema_markup: "fast",
  blog: "standard",
  code_generate: "standard",
  page_improve: "standard",
  create_page: "powerful",
  clone_page: "powerful",
  domain_generate: "powerful",
  fix_layout: "standard",
  workspace_chat: "standard",
};

function getSystemPrompt(jobType: string, language: string, extraContext?: any): string {
  const prompts: Record<string, string> = {
     translate: `You are a professional translator. Translate the provided HTML content to ${language}. 
CRITICAL RULES:
- Return ONLY the translated HTML content, nothing else
- Do NOT wrap output in markdown code blocks (\`\`\`html or \`\`\`)
- Do NOT add any explanation or commentary
- Preserve ALL HTML tags, classes, attributes, links, and images exactly as-is
- Only translate visible human-readable text (headings, paragraphs, button labels, alt text, placeholders)
- Do NOT translate class names, IDs, href URLs, src URLs, or any code
- The output must be valid HTML that can be directly inserted into a page`,
    blog: `You are an expert SEO content writer. Write a comprehensive, SEO-optimized blog article in ${language}. Include proper H1/H2/H3 structure. Return as JSON with fields: title, metaTitle, metaDescription, content (HTML), faqItems (array of {question, answer}), suggestedLinks (array).`,
    meta_optimize: `You are an SEO meta tag specialist. Generate optimized meta tags for the given page content in ${language}. Return JSON with: metaTitle (max 60 chars), metaDescription (max 160 chars), ogTitle, ogDescription, keywords (array).`,
    alt_text: `You are an image SEO specialist. Generate descriptive, SEO-optimized alt text in ${language}. Return JSON array: [{imageDescription, altText, title}].`,
    internal_links: `You are an internal linking strategist. Analyze content and suggest contextual internal links. Return JSON: {suggestions: [{anchorText, targetUrl, context, relevanceScore}]}.`,
    code_generate: `You are a web development expert. Generate clean, valid code. Return JSON: {code, language, description}.`,
    page_improve: `You are a CRO expert and SEO specialist. Analyze page content in ${language}. Return JSON: {readabilityScore, suggestions: [{type, current, improved, reason}]}.`,
    create_page: `You are a web page generator. Create a complete page in ${language}. Return JSON: {title, slug, metaTitle, metaDescription, htmlContent, headings: [{level, text}], internalLinks: [{text, url}]}.`,
    clone_page: `You are an expert page cloner and translator. You receive the COMPLETE HTML of a page. Your job is to produce an EXACT 1:1 clone with ONLY the visible text translated to ${language}.

STEP 1 — COPY: Take the ENTIRE HTML input as-is. Every single tag, class, id, data attribute, inline style, SVG, image, link, icon, button, form element — EVERYTHING must be preserved byte-for-byte.
STEP 2 — TRANSLATE: Walk through the copied HTML and translate ONLY visible human-readable text (headings, paragraphs, button labels, link text, alt attributes, aria-labels, title attributes, placeholder text). Do NOT touch any HTML tags, attribute names, class names, href values, src values, or any code.

ABSOLUTE RULES:
- The output HTML must have the EXACT same number of HTML elements as the input
- Every <img>, <svg>, <a>, <button>, <input>, <form>, <video>, <iframe> must appear in the output
- Every CSS class, inline style, and data-attribute must be preserved unchanged
- All href and src URLs must remain unchanged
- Do NOT add, remove, or restructure ANY HTML elements
- Do NOT simplify, minify, or reformat the HTML
- Do NOT convert to markdown
- Do NOT truncate or cut off the HTML — output the COMPLETE page
- The rendered output must be visually IDENTICAL to the original, only in ${language}

CRITICAL OUTPUT FORMAT:
- Return ONLY raw JSON (no markdown code blocks, no \`\`\`json wrapper, no explanation)
- The JSON must have these fields: title, slug (SEO-friendly in ${language}), metaTitle (max 60 chars), metaDescription (max 160 chars), htmlContent (the COMPLETE translated HTML, every single element)
- The htmlContent value must contain the full translated HTML ready for direct insertion into a page`,
    domain_generate: `You are a premium domain website generator specializing in expired domain monetization. Generate a complete website structure for domain "${extraContext?.domain}" in niche "${extraContext?.niche}" with keywords "${extraContext?.keywords}" in ${language}. Return JSON: {pages: [{title, slug, metaTitle, metaDescription, htmlContent, type}], blogStructure: [{title, slug}], internalLinks: [{from, to, anchorText}]}.`,
    generate_faq: `You are an FAQ generator. Create comprehensive FAQ items in ${language}. Return JSON: {faqItems: [{question, answer}]}.`,
    schema_markup: `You are a schema markup expert. Generate JSON-LD structured data. Return valid JSON-LD.`,
    fix_layout: `You are an HTML/CSS expert. Fix the layout issues in the provided HTML. Return the corrected HTML.`,
    workspace_chat: `You are an AI website assistant. Parse user commands and return structured actions. Supported actions: CREATE_PAGE, OPTIMIZE_SEO, ADD_LINKS, GENERATE_FAQ, TRANSLATE_PAGE, CLONE_PAGE, FIX_LAYOUT, GENERATE_BLOG. Return JSON: {actions: [{type, params}], explanation}.`,
  };
  return prompts[jobType] || prompts.translate;
}

async function callProvider(
  provider: string,
  apiKey: string,
  model: string,
  systemPrompt: string,
  userContent: string,
  options: { temperature?: number; maxTokens?: number } = {}
) {
  const { temperature = 0.7, maxTokens = 4000 } = options;

  if (provider === "claude") {
    const resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model,
        max_tokens: maxTokens,
        system: systemPrompt,
        messages: [{ role: "user", content: userContent }],
        temperature,
      }),
    });
    if (!resp.ok) throw new Error(`Claude API error: ${resp.status}`);
    const data = await resp.json();
    return {
      content: data.content?.[0]?.text || "",
      usage: {
        prompt_tokens: data.usage?.input_tokens || 0,
        completion_tokens: data.usage?.output_tokens || 0,
        total_tokens: (data.usage?.input_tokens || 0) + (data.usage?.output_tokens || 0),
      },
    };
  }

  // OpenAI-compatible (Lovable AI, OpenAI, and Gemini)
  const url = provider === "lovable"
    ? "https://ai.gateway.lovable.dev/v1/chat/completions"
    : provider === "gemini"
    ? "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions"
    : "https://api.openai.com/v1/chat/completions";

  const resp = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userContent },
      ],
      temperature,
      max_tokens: maxTokens,
    }),
  });

  if (!resp.ok) {
    const status = resp.status;
    if (status === 429) throw new Error("RATE_LIMITED");
    if (status === 402) throw new Error("PAYMENT_REQUIRED");
    throw new Error(`API error: ${status}`);
  }

  const data = await resp.json();
  return {
    content: data.choices?.[0]?.message?.content || "",
    usage: data.usage || { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 },
  };
}

serve(async (req) => {
  const preflight = handleCorsPreflightIfNeeded(req);
  if (preflight) return preflight;
  const corsHeaders = getCorsHeaders(req);

  const authHeader = req.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
  const authClient = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: authHeader } },
  });

  const { data: { user }, error: userError } = await authClient.auth.getUser();
  if (userError || !user) {
    return new Response(JSON.stringify({ error: "Invalid authentication" }), {
      status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const userId = user.id;
  const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    const body = await req.json();
    const {
      jobType, content, language = "en",
      provider: requestedProvider,
      model: requestedModel,
      domain, niche, keywords,
      stream = false,
    } = body;

    if (!jobType || !content) {
      return new Response(JSON.stringify({ error: "jobType and content are required" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Validate jobType
    const jobTypeErr = validateJobType(jobType);
    if (jobTypeErr) {
      return new Response(JSON.stringify({ error: jobTypeErr }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Validate content
    const contentErr = validateContentInput(content);
    if (contentErr) {
      return new Response(JSON.stringify({ error: contentErr }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Validate language
    const langErr = validateLanguage(language);
    if (langErr) {
      return new Response(JSON.stringify({ error: langErr }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Validate domain, niche, keywords
    const domainErr = validateDomain(domain);
    if (domainErr) {
      return new Response(JSON.stringify({ error: domainErr }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const nicheErr = validateStringField(niche, "niche");
    if (nicheErr) {
      return new Response(JSON.stringify({ error: nicheErr }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const keywordsErr = validateStringField(keywords, "keywords", 1000);
    if (keywordsErr) {
      return new Response(JSON.stringify({ error: keywordsErr }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Rate limit check
    const oneMinuteAgo = new Date(Date.now() - 60000).toISOString();
    const { count: userRecentJobs } = await supabase
      .from("ai_jobs")
      .select("*", { count: "exact", head: true })
      .eq("user_id", userId)
      .gte("created_at", oneMinuteAgo);

    if ((userRecentJobs || 0) >= 10) {
      return new Response(JSON.stringify({ error: "Too many requests. Please wait a moment and try again." }), {
        status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Get user preferences
    const { data: prefs } = await supabase
      .from("user_ai_preferences")
      .select("*")
      .eq("user_id", userId)
      .single();

    const lowCostMode = prefs?.low_cost_mode || false;
    const fallbackEnabled = prefs?.fallback_enabled !== false;
    let provider = requestedProvider || prefs?.default_provider || "lovable";

    // Force clone_page and translate to use Gemini direct — faster, avoids OpenAI timeouts
    if (["clone_page", "translate"].includes(jobType) && provider !== "gemini") {
      // If user has Gemini key, prefer it; otherwise fall back to Lovable AI
      const geminiKey = Deno.env.get("GEMINI_API_KEY");
      if (geminiKey) {
        provider = "gemini";
      } else {
        provider = "lovable";
      }
    }

    // Determine model
    const tier = lowCostMode ? "cheapest" : (TASK_TIER[jobType] || "standard");
    const providerConfig = PROVIDERS[provider as keyof typeof PROVIDERS] || PROVIDERS.lovable;
    let model = requestedModel || providerConfig.models[tier as keyof typeof providerConfig.models] || providerConfig.models.standard;

    // Get API key
    let apiKey: string | null = null;
    if (provider === "lovable") {
      apiKey = Deno.env.get("LOVABLE_API_KEY") || null;
    } else if (provider === "openai") {
      const { data: userKey } = await supabase
        .from("user_ai_keys")
        .select("encrypted_api_key")
        .eq("user_id", userId)
        .eq("provider", "openai")
        .eq("is_active", true)
        .single();
      apiKey = userKey?.encrypted_api_key ? await decryptApiKey(userKey.encrypted_api_key) : (Deno.env.get("OPENAI_API_KEY") || null);
    } else if (provider === "claude") {
      const { data: userKey } = await supabase
        .from("user_ai_keys")
        .select("encrypted_api_key")
        .eq("user_id", userId)
        .eq("provider", "claude")
        .eq("is_active", true)
        .single();
      apiKey = userKey?.encrypted_api_key ? await decryptApiKey(userKey.encrypted_api_key) : null;
    } else if (provider === "gemini") {
      // First check user's own key, then env key
      const { data: userKey } = await supabase
        .from("user_ai_keys")
        .select("encrypted_api_key")
        .eq("user_id", userId)
        .eq("provider", "gemini")
        .eq("is_active", true)
        .single();
      apiKey = userKey?.encrypted_api_key ? await decryptApiKey(userKey.encrypted_api_key) : (Deno.env.get("GEMINI_API_KEY") || null);
    } else if (provider === "custom") {
      const { data: userKey } = await supabase
        .from("user_ai_keys")
        .select("encrypted_api_key")
        .eq("user_id", userId)
        .eq("provider", "custom")
        .eq("is_active", true)
        .single();
      apiKey = userKey?.encrypted_api_key ? await decryptApiKey(userKey.encrypted_api_key) : null;
      provider = "openai";
    }

    // Fallback logic
    if (!apiKey && fallbackEnabled) {
      console.log(`No key for ${provider}, falling back to lovable`);
      provider = "lovable";
      apiKey = Deno.env.get("LOVABLE_API_KEY") || null;
      model = PROVIDERS.lovable.models[tier as keyof typeof PROVIDERS.lovable.models] || PROVIDERS.lovable.models.standard;
    }

    if (!apiKey) {
      console.error("No API key available", { userId, provider });
      return new Response(JSON.stringify({ error: "Service configuration incomplete. Please check your settings." }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Estimate cost before generation
    const estimatedTokens = content.length / 4; // rough estimate
    const costs = COST_MAP[model] || { input: 0.001, output: 0.002 };
    const estimatedCost = (estimatedTokens / 1000) * costs.input + (estimatedTokens / 1000) * costs.output;

    const systemPrompt = getSystemPrompt(jobType, language, { domain, niche, keywords });
    const userContent = typeof content === "string" ? content : JSON.stringify(content);

    // Create job
    const { data: job, error: jobError } = await supabase
      .from("ai_jobs")
      .insert({
        job_type: jobType,
        status: "processing",
        model,
        provider,
        user_id: userId,
        input_data: { content: userContent.substring(0, 10000), language, domain, niche, keywords },
      })
      .select()
      .single();

    if (jobError) {
      console.error("Job creation error:", jobError);
      return new Response(JSON.stringify({ error: "Failed to create job" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Call AI provider
    let result;
    try {
      result = await callProvider(provider, apiKey, model, systemPrompt, userContent, {
        temperature: jobType === "translate" ? 0.3 : 0.7,
        maxTokens: jobType === "clone_page" ? 16384 : ["blog", "create_page", "domain_generate"].includes(jobType) ? 8000 : 4000,
      });
    } catch (err: any) {
      // Fallback on error
      if (fallbackEnabled && provider !== "lovable" && err.message !== "PAYMENT_REQUIRED") {
        console.log(`Provider ${provider} failed, falling back to lovable`);
        const fallbackKey = Deno.env.get("LOVABLE_API_KEY");
        if (fallbackKey) {
          const fallbackModel = PROVIDERS.lovable.models[tier as keyof typeof PROVIDERS.lovable.models];
          provider = "lovable";
          model = fallbackModel;
          result = await callProvider("lovable", fallbackKey, fallbackModel, systemPrompt, userContent, {
            temperature: jobType === "translate" ? 0.3 : 0.7,
            maxTokens: jobType === "clone_page" ? 16384 : ["blog", "create_page", "domain_generate"].includes(jobType) ? 8000 : 4000,
          });
        }
      }
      if (!result) {
        console.error("AI provider failed", { userId, provider, error: err.message });
        await supabase.from("ai_jobs").update({ status: "failed", error_message: err.message }).eq("id", job.id);
        const status = err.message === "RATE_LIMITED" ? 429 : err.message === "PAYMENT_REQUIRED" ? 402 : 503;
        return new Response(JSON.stringify({ error: status === 429 ? "Too many requests. Please wait a moment and try again." : status === 402 ? "Service quota exceeded. Please try again later." : "Request failed. Please try again." }), {
          status, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    const costUsd = ((result.usage.prompt_tokens || 0) / 1000) * costs.input + ((result.usage.completion_tokens || 0) / 1000) * costs.output;

    // Update job
    await supabase.from("ai_jobs").update({
      status: "completed",
      output_data: { result: result.content },
      tokens_used: result.usage.total_tokens || 0,
      cost_usd: costUsd,
      completed_at: new Date().toISOString(),
      provider,
      model,
    }).eq("id", job.id);

    // Log usage
    await supabase.from("ai_usage_logs").insert({
      job_id: job.id,
      user_id: userId,
      model,
      provider,
      prompt_tokens: result.usage.prompt_tokens || 0,
      completion_tokens: result.usage.completion_tokens || 0,
      total_tokens: result.usage.total_tokens || 0,
      cost_usd: costUsd,
    });

    // Parse result — strip markdown code blocks first
    let rawContent = result.content;
    // Remove ```json ... ``` or ```html ... ``` wrappers
    rawContent = rawContent.replace(/^```(?:json|html)?\s*\n?/i, "").replace(/\n?```\s*$/i, "").trim();
    
    let parsedResult: any = rawContent;
    try {
      parsedResult = JSON.parse(rawContent);
    } catch {
      // JSON.parse failed — try to extract htmlContent via regex for clone_page
      if (["clone_page", "create_page"].includes(jobType)) {
        const htmlMatch = rawContent.match(/"htmlContent"\s*:\s*"([\s\S]*?)"\s*\}$/);
        if (htmlMatch) {
          // Extract fields manually
          const titleMatch = rawContent.match(/"title"\s*:\s*"([^"]+)"/);
          const slugMatch = rawContent.match(/"slug"\s*:\s*"([^"]+)"/);
          const metaTitleMatch = rawContent.match(/"metaTitle"\s*:\s*"([^"]+)"/);
          const metaDescMatch = rawContent.match(/"metaDescription"\s*:\s*"([^"]+)"/);
          const htmlContent = htmlMatch[1]
            .replace(/\\n/g, "\n")
            .replace(/\\"/g, '"')
            .replace(/\\\\/g, "\\");
          parsedResult = {
            title: titleMatch?.[1] || "Untitled",
            slug: slugMatch?.[1] || "untitled",
            metaTitle: metaTitleMatch?.[1] || "",
            metaDescription: metaDescMatch?.[1] || "",
            htmlContent,
          };
        }
      }
    }

    // Auto-create page if applicable (skip clone_page — the toolbar handles that with proper slug)
    if (["create_page", "domain_generate"].includes(jobType) && typeof parsedResult === "object") {
      if (jobType === "domain_generate" && parsedResult.pages) {
        for (const page of parsedResult.pages) {
          await supabase.from("ai_generated_pages").insert({
            user_id: userId,
            title: page.title,
            slug: page.slug || page.title.toLowerCase().replace(/\s+/g, "-"),
            html_content: page.htmlContent || page.content || "",
            meta_title: page.metaTitle,
            meta_description: page.metaDescription,
            language,
            domain,
            niche,
            status: "draft",
            metadata: { jobId: job.id, provider, model, type: page.type },
          });
        }
      } else {
        await supabase.from("ai_generated_pages").insert({
          user_id: userId,
          title: parsedResult.title || "Untitled",
          slug: parsedResult.slug || "untitled",
          html_content: parsedResult.htmlContent || parsedResult.content || result.content,
          meta_title: parsedResult.metaTitle,
          meta_description: parsedResult.metaDescription,
          language,
          domain,
          niche,
          status: "draft",
          metadata: { jobId: job.id, provider, model },
        });
      }
    }

    // Store in generated content
    const contentTypeMap: Record<string, string> = {
      translate: "translation", blog: "blog", meta_optimize: "meta",
      alt_text: "alt_text", internal_links: "internal_links",
      code_generate: "code", page_improve: "page_improvement",
      create_page: "page", clone_page: "clone", domain_generate: "domain_site",
      generate_faq: "faq", schema_markup: "schema", fix_layout: "layout_fix",
      workspace_chat: "chat_action",
    };

    await supabase.from("ai_generated_content").insert({
      job_id: job.id,
      user_id: userId,
      content_type: contentTypeMap[jobType] || "other",
      title: typeof parsedResult === "object" && parsedResult?.title ? parsedResult.title : `${jobType} - ${language}`,
      language,
      content: typeof parsedResult === "string" ? parsedResult : JSON.stringify(parsedResult),
      metadata: { model, provider, tokens: result.usage.total_tokens, cost: costUsd },
    });

    return new Response(JSON.stringify({
      success: true,
      jobId: job.id,
      result: parsedResult,
      provider,
      model,
      estimatedCost,
      usage: {
        promptTokens: result.usage.prompt_tokens || 0,
        completionTokens: result.usage.completion_tokens || 0,
        totalTokens: result.usage.total_tokens || 0,
        costUsd,
        model,
        provider,
      },
    }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (e) {
    console.error("ai-universal error:", e);
    return new Response(JSON.stringify({ error: "An unexpected error occurred." }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
