import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const ARTICLE_TOPICS = [
  { slug: "ultimate-guide-buying-expired-domain-names-seo", title: "The Ultimate Guide to Buying Expired Domain Names for SEO", keywords: "expired domain names, buy expired domains, SEO domains, domain authority", image: "/images/expired-domains-hero.png", description: "Comprehensive guide covering everything you need to know about purchasing expired domain names to boost your SEO strategy and website authority." },
  { slug: "how-expired-domains-boost-website-authority", title: "How Expired Domains Can Dramatically Boost Your Website Authority", keywords: "expired domains authority, domain authority boost, website authority, link equity", image: "/images/domain-authority-seo.png", description: "Learn how strategically acquiring expired domains can transfer authority and dramatically improve your website's search engine rankings." },
  { slug: "understanding-domain-authority-moz-scores-complete-guide", title: "Understanding Domain Authority and MOZ Scores: A Complete Guide", keywords: "domain authority, MOZ score, DA score, domain metrics, SEO metrics", image: "/images/domain-authority-seo.png", description: "Master domain authority metrics and MOZ scores to make informed decisions when evaluating and purchasing premium expired domains." },
  { slug: "premium-domain-investment-strategy-guide", title: "The Complete Guide to Premium Domain Name Investment Strategy", keywords: "premium domains, domain investment, domain portfolio, domain assets", image: "/images/premium-domain-investment.png", description: "Build a profitable domain investment portfolio with proven strategies for identifying, acquiring, and monetizing premium domain names." },
  { slug: "how-to-evaluate-expired-domain-before-purchasing", title: "How to Evaluate an Expired Domain Before Purchasing: Expert Checklist", keywords: "evaluate expired domain, domain due diligence, domain evaluation checklist", image: "/images/backlink-analysis-domains.png", description: "Step-by-step expert checklist for evaluating expired domains, covering backlinks, history, spam signals, and true SEO value assessment." },
  { slug: "backlink-analysis-guide-expired-domains", title: "Backlink Analysis: The Definitive Guide for Expired Domain Buyers", keywords: "backlink analysis, referring domains, link quality, expired domain backlinks", image: "/images/backlink-analysis-domains.png", description: "Master backlink analysis techniques to identify high-quality expired domains with genuine link equity and avoid toxic link profiles." },
  { slug: "seo-benefits-acquiring-high-authority-domains", title: "The SEO Benefits of Acquiring High-Authority Expired Domains", keywords: "SEO benefits, high authority domains, domain acquisition SEO, search rankings", image: "/images/domain-seo-strategy.png", description: "Discover the measurable SEO benefits of acquiring high-authority expired domains and how they can accelerate your search engine rankings." },
  { slug: "domain-flipping-complete-business-guide", title: "Domain Flipping: The Complete Business Guide to Profitable Trading", keywords: "domain flipping, domain trading, buy sell domains, domain profit", image: "/images/domain-flipping-business.png", description: "Learn the business of domain flipping from experts, covering sourcing, valuation, negotiation, and selling domains for maximum profit." },
  { slug: "how-search-engines-value-aged-domains", title: "How Search Engines Value Aged Domains: The Complete Analysis", keywords: "aged domains, domain age SEO, search engine domain value, old domains", image: "/images/domain-authority-seo.png", description: "Deep analysis of how Google and other search engines evaluate domain age and why aged domains often outperform newly registered alternatives." },
  { slug: "trust-flow-citation-flow-domain-valuation", title: "Trust Flow and Citation Flow: Essential Metrics for Domain Valuation", keywords: "trust flow, citation flow, Majestic metrics, domain valuation metrics", image: "/images/backlink-analysis-domains.png", description: "Understand Trust Flow and Citation Flow metrics from Majestic and learn how to use them for accurate expired domain valuation." },
  { slug: "building-premium-expired-domain-portfolio", title: "Building a Profitable Portfolio of Premium Expired Domains", keywords: "domain portfolio, premium domains portfolio, domain investment portfolio", image: "/images/premium-domain-investment.png", description: "Strategic guide to building and managing a diversified portfolio of premium expired domains for long-term investment returns." },
  { slug: "redirect-expired-domains-maximum-seo-value", title: "How to Redirect Expired Domains for Maximum SEO Value", keywords: "301 redirect domains, redirect expired domains, link juice transfer, SEO redirects", image: "/images/domain-seo-strategy.png", description: "Master the art of domain redirects to transfer maximum SEO value from expired domains to your money sites and boost rankings." },
  { slug: "pagerank-role-domain-valuation-explained", title: "PageRank and Its Role in Modern Domain Valuation Explained", keywords: "PageRank, domain valuation, Google PageRank, link authority", image: "/images/domain-authority-seo.png", description: "Explore the evolution of PageRank and how its principles still influence modern domain valuation and expired domain acquisition strategies." },
  { slug: "expired-domain-due-diligence-checklist", title: "The Ultimate Expired Domain Due Diligence Checklist", keywords: "domain due diligence, expired domain checklist, domain research, spam check", image: "/images/backlink-analysis-domains.png", description: "Complete due diligence checklist covering every aspect of expired domain evaluation, from Wayback Machine analysis to penalty detection." },
  { slug: "why-businesses-invest-premium-domain-names", title: "Why Smart Businesses Invest in Premium Domain Names", keywords: "premium domain names, business domain investment, brand domains, corporate domains", image: "/images/premium-domain-investment.png", description: "Discover why leading businesses invest heavily in premium domain names and how the right domain can impact brand perception and revenue." },
  { slug: "link-equity-expired-domains-authority-transfer", title: "Link Equity: How Expired Domains Transfer Authority to Your Website", keywords: "link equity, link juice, authority transfer, domain link value", image: "/images/domain-seo-strategy.png", description: "Technical deep-dive into how link equity flows from expired domains to your website and strategies to maximize authority transfer." },
  { slug: "find-hidden-gem-expired-domains-guide", title: "How to Find Hidden Gem Expired Domains Nobody Else Knows About", keywords: "find expired domains, hidden gem domains, domain discovery, undervalued domains", image: "/images/expired-domains-hero.png", description: "Advanced techniques and tools for discovering undervalued expired domains with exceptional metrics before the competition finds them." },
  { slug: "domain-name-strategies-digital-marketing-agencies", title: "Domain Name Strategies for Digital Marketing Agencies", keywords: "digital marketing domains, agency domain strategy, client domain management", image: "/images/domain-seo-strategy.png", description: "How digital marketing agencies can leverage expired and premium domains to deliver superior SEO results for their clients." },
  { slug: "referring-domains-importance-seo-success", title: "The Role of Referring Domains in SEO Success: Complete Analysis", keywords: "referring domains, unique referring domains, domain diversity, backlink sources", image: "/images/backlink-analysis-domains.png", description: "Understand why the number and quality of referring domains is one of the most critical ranking factors and how expired domains help." },
  { slug: "build-profitable-website-expired-domain", title: "How to Build a Profitable Website on an Expired Domain", keywords: "build website expired domain, monetize expired domain, expired domain website", image: "/images/domain-flipping-business.png", description: "Step-by-step guide to building a profitable website on an expired domain, from content strategy to monetization and traffic growth." },
  { slug: "google-stance-expired-domains-what-you-need-know", title: "Google's Stance on Expired Domains: What You Need to Know", keywords: "Google expired domains, Google domain policy, expired domains Google penalty", image: "/images/domain-authority-seo.png", description: "Comprehensive analysis of Google's official and unofficial stance on expired domains, including best practices to stay within guidelines." },
  { slug: "premium-domains-vs-new-domains-comprehensive-comparison", title: "Premium Domain Names vs New Domains: A Comprehensive Comparison", keywords: "premium vs new domains, domain comparison, premium domain advantages", image: "/images/premium-domain-investment.png", description: "Detailed comparison between premium expired domains and newly registered domains across SEO value, branding, cost, and ROI metrics." },
  { slug: "expired-domains-niche-website-building-guide", title: "How to Use Expired Domains for Niche Website Building", keywords: "niche websites, expired domain niche sites, niche SEO, micro niche domains", image: "/images/domain-seo-strategy.png", description: "Complete guide to building profitable niche websites using expired domains as a foundation for faster rankings and organic traffic." },
  { slug: "impact-domain-age-search-engine-rankings", title: "The Impact of Domain Age on Search Engine Rankings: Research and Data", keywords: "domain age SEO, old domain ranking, domain age factor, aged domain benefits", image: "/images/domain-authority-seo.png", description: "Data-driven analysis of how domain age impacts search engine rankings, with real-world case studies and statistical evidence." },
  { slug: "strategic-domain-acquisition-brand-protection", title: "Strategic Domain Acquisition for Brand Protection and Growth", keywords: "brand protection domains, defensive domain registration, brand domain strategy", image: "/images/premium-domain-investment.png", description: "How to strategically acquire domains to protect your brand identity, prevent cybersquatting, and support business expansion." },
  { slug: "expired-domains-content-marketing-strategies", title: "How Expired Domains Power Content Marketing Strategies", keywords: "content marketing domains, expired domains content, SEO content strategy", image: "/images/domain-seo-strategy.png", description: "Discover how expired domains can supercharge your content marketing strategy by providing built-in authority and established backlink profiles." },
  { slug: "domain-appraisal-valuation-complete-guide", title: "The Complete Guide to Domain Appraisal and Accurate Valuation", keywords: "domain appraisal, domain valuation, domain worth, domain pricing", image: "/images/domain-flipping-business.png", description: "Learn professional domain appraisal methods and valuation techniques used by experts to accurately price expired and premium domains." },
  { slug: "identify-spam-free-expired-domains-guide", title: "How to Identify Spam-Free Expired Domains: The Definitive Guide", keywords: "spam-free domains, clean expired domains, domain spam check, safe domains", image: "/images/backlink-analysis-domains.png", description: "Essential techniques to identify clean, spam-free expired domains and avoid purchasing domains with toxic histories or Google penalties." },
  { slug: "building-authority-sites-premium-expired-domains", title: "Building Authority Sites with Premium Expired Domains", keywords: "authority sites, premium expired domains, build authority website", image: "/images/expired-domains-hero.png", description: "Strategic guide to building high-authority websites using premium expired domains as the foundation for long-term organic traffic growth." },
  { slug: "future-domain-name-investing-seo-strategy", title: "The Future of Domain Name Investing and SEO Strategy", keywords: "future domain investing, domain market trends, SEO future, domain industry", image: "/images/domain-flipping-business.png", description: "Forward-looking analysis of domain name investing trends, emerging SEO strategies, and how the domain market is evolving." },
];

async function generateArticle(topic: any, adminClient: any, userId: string) {
  const fullSlug = `/expireddomainnames/en/${topic.slug}`;
  
  const { data: existing } = await adminClient
    .from("ai_generated_pages")
    .select("id")
    .eq("slug", fullSlug)
    .maybeSingle();

  if (existing) return { slug: fullSlug, status: "skipped" };

  const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

  const prompt = `Write a comprehensive, authoritative, SEO-optimized article about "${topic.title}". 
REQUIREMENTS:
- Minimum 3000 words of expert-level content
- Proper HTML with semantic tags
- H1 title at top, 8-10 H2 sections with H3 subsections
- Bullet points, numbered lists, comparison tables
- Professional yet accessible tone
- Keywords: ${topic.keywords}
- NO prices, dollar amounts, or specific years/dates
- FAQ section at bottom with 8+ questions (H2 question, p answer)
- Add internal links to /expireddomainnames/en/ where relevant
- Include: <img src="${topic.image}" alt="${topic.title}" class="w-full rounded-xl shadow-lg my-8" />
- Wrap in: <section class="py-12"><div class="container mx-auto px-4 max-w-4xl prose prose-lg">...</div></section>
- Make paragraphs detailed (4-6 sentences each)
Return ONLY HTML, no markdown code blocks.`;

  let html = "";
  
  try {
    if (GEMINI_API_KEY) {
      const r = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { maxOutputTokens: 16000, temperature: 0.7 },
          }),
        }
      );
      if (r.ok) {
        const d = await r.json();
        html = d.candidates?.[0]?.content?.parts?.[0]?.text || "";
      }
    }
    
    if (!html && LOVABLE_API_KEY) {
      const r = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: { Authorization: `Bearer ${LOVABLE_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [
            { role: "system", content: "Expert SEO writer for domain name industry." },
            { role: "user", content: prompt },
          ],
        }),
      });
      if (r.ok) {
        const d = await r.json();
        html = d.choices?.[0]?.message?.content || "";
      }
    }
  } catch (e: any) {
    return { slug: fullSlug, status: "error", reason: e.message };
  }

  if (!html) return { slug: fullSlug, status: "error", reason: "No AI response" };
  
  html = html.replace(/^```(?:html)?\s*\n?/i, "").replace(/\n?```\s*$/i, "").trim();

  const { error } = await adminClient.from("ai_generated_pages").insert({
    title: topic.title,
    slug: fullSlug,
    html_content: html,
    language: "en",
    meta_title: topic.title,
    meta_description: topic.description,
    status: "published",
    user_id: userId,
    niche: "premium-domains",
    metadata: { keywords: topic.keywords, image: topic.image },
  });

  return { slug: fullSlug, status: error ? "error" : "created", reason: error?.message };
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const adminClient = createClient(supabaseUrl, supabaseServiceKey);
    const userId = "119da7d1-b9ed-4a79-a108-ec950566394a";

    const { startIndex = 0, count = 1 } = await req.json().catch(() => ({}));
    const topic = ARTICLE_TOPICS[startIndex];
    
    if (!topic) {
      return new Response(JSON.stringify({ error: "No topic at index " + startIndex, total: ARTICLE_TOPICS.length }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Process single article synchronously
    const result = await generateArticle(topic, adminClient, userId);

    return new Response(JSON.stringify({ 
      success: true, 
      result,
      nextIndex: startIndex + 1,
      total: ARTICLE_TOPICS.length,
      remaining: ARTICLE_TOPICS.length - startIndex - 1,
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
