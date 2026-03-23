import { useParams, Link as RouterLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, ArrowLeft, ExternalLink, Shield, TrendingUp, Globe, BarChart3, Link, Zap, CheckCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FooterPremiumDomainsEN from "@/components/premium-domains/FooterPremiumDomainsEN";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import stripeLogo from "@/assets/stripe-logo.svg";
import { domainToSlug, getNumericPrice } from "@/data/premiumDomainsEN";
import type { PremiumDomain } from "@/data/premiumDomainsEN";

// We need to import domain data - using dynamic import pattern
// For now we'll import it directly from the EN page's exported data
// This will be refactored when we extract data to shared file

// Temporarily inline the domain lookup - will use lazy import
let cachedDomains: PremiumDomain[] | null = null;

const loadDomains = async (): Promise<PremiumDomain[]> => {
  if (cachedDomains) return cachedDomains;
  const mod = await import("./PremiumDomainsEN");
  cachedDomains = (mod as any).premiumDomains || [];
  return cachedDomains!;
};

import { useState, useEffect } from "react";

const DomainProductPage = () => {
  const { domainSlug } = useParams<{ domainSlug: string }>();
  const navigate = useNavigate();
  const [domain, setDomain] = useState<PremiumDomain | null>(null);
  const [allDomains, setAllDomains] = useState<PremiumDomain[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDomains().then(domains => {
      setAllDomains(domains);
      const found = domains.find(d => domainToSlug(d.name) === domainSlug);
      setDomain(found || null);
      setLoading(false);
    });
  }, [domainSlug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="animate-pulse text-amber-400 text-xl">Loading...</div>
      </div>
    );
  }

  if (!domain) {
    navigate("/expireddomainnames/en/buy-premium-domains-high-authority-seo-value");
    return null;
  }

  const numericPrice = getNumericPrice(domain.price);
  const canonicalUrl = `https://www.iaee.eu/domains/${domainToSlug(domain.name)}`;
  const marketplaceUrl = "https://www.iaee.eu/expireddomainnames/en/buy-premium-domains-high-authority-seo-value";

  // Find related domains (same category)
  const relatedDomains = allDomains
    .filter(d => d.category === domain.category && d.name !== domain.name)
    .slice(0, 4);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{`Buy ${domain.name} - Premium Domain | MOZ DA ${domain.mozScore} | IAEE`}</title>
        <meta name="description" content={`Buy ${domain.name} - ${domain.description} MOZ Domain Authority ${domain.mozScore}, ${domain.backlinks} backlinks, ${domain.linkingDomains} linking domains. Price: ${domain.price}. Immediately available.`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="product" />
        <meta property="og:title" content={`Buy ${domain.name} - Premium Expired Domain | DA ${domain.mozScore}`} />
        <meta property="og:description" content={`${domain.description} Price: ${domain.price}. ${domain.backlinks} backlinks from top authority sites.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://www.iaee.eu/images/premium-domains-logo.png" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="IAEE Premium Domains" />
        <meta property="product:price:amount" content={numericPrice} />
        <meta property="product:price:currency" content="EUR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Buy ${domain.name} - DA ${domain.mozScore} Premium Domain`} />
        <meta name="twitter:description" content={domain.description} />
        <meta name="twitter:image" content="https://www.iaee.eu/images/premium-domains-logo.png" />

        {/* JSON-LD Product Schema */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://www.iaee.eu/#organization",
              "name": "IAEE Premium Domains",
              "url": "https://www.iaee.eu",
              "logo": "https://www.iaee.eu/images/premium-domains-logo.png"
            },
            {
              "@type": "WebPage",
              "@id": `${canonicalUrl}/#webpage`,
              "url": canonicalUrl,
              "name": `Buy ${domain.name} - Premium Domain with High Authority`,
              "description": domain.description,
              "inLanguage": "en",
              "isPartOf": { "@id": "https://www.iaee.eu/#website" },
              "breadcrumb": { "@id": `${canonicalUrl}/#breadcrumb` }
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${canonicalUrl}/#breadcrumb`,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.iaee.eu"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Premium Domains",
                  "item": marketplaceUrl
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": domain.name,
                  "item": canonicalUrl
                }
              ]
            },
            {
              "@type": "Product",
              "@id": `${canonicalUrl}/#product`,
              "name": domain.name,
              "description": `${domain.description} Premium expired domain with MOZ Domain Authority ${domain.mozScore}, Page Authority ${domain.pageAuthority}, ${domain.linkingDomains} linking domains and ${domain.backlinks} total backlinks.`,
              "image": "https://www.iaee.eu/images/premium-domains-logo.png",
              "url": canonicalUrl,
              "sku": domain.name,
              "category": domain.category,
              "brand": {
                "@type": "Brand",
                "name": "IAEE Premium Domains"
              },
              "offers": {
                "@type": "Offer",
                "price": numericPrice,
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock",
                "url": domain.stripePaymentLink,
                "seller": {
                  "@type": "Organization",
                  "name": "IAEE Premium Domains"
                },
                "priceValidUntil": "2027-12-31",
                "itemCondition": "https://schema.org/NewCondition"
              },
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "MOZ Domain Authority",
                  "value": domain.mozScore
                },
                {
                  "@type": "PropertyValue",
                  "name": "Page Authority",
                  "value": domain.pageAuthority
                },
                {
                  "@type": "PropertyValue",
                  "name": "Linking Domains",
                  "value": domain.linkingDomains
                },
                {
                  "@type": "PropertyValue",
                  "name": "Total Backlinks",
                  "value": domain.backlinks
                }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": `What is the MOZ Domain Authority of ${domain.name}?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `${domain.name} has a MOZ Domain Authority of ${domain.mozScore} and a Page Authority of ${domain.pageAuthority}, with ${domain.linkingDomains} linking domains and ${domain.backlinks} total backlinks.`
                  }
                },
                {
                  "@type": "Question",
                  "name": `What backlinks does ${domain.name} have?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `${domain.name} has backlinks from top authority websites including ${domain.topBacklinks.slice(0, 3).join(", ")}. These high-quality backlinks provide significant SEO value.`
                  }
                },
                {
                  "@type": "Question",
                  "name": `How can I use ${domain.name} for SEO?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `You can use ${domain.name} by setting up a 301 redirect to your main website, which transfers the domain's authority and backlink value. Alternatively, you can build a new website directly on this domain to leverage its existing authority.`
                  }
                },
                {
                  "@type": "Question",
                  "name": `How do I buy ${domain.name}?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `You can buy ${domain.name} instantly for ${domain.price} via our secure Stripe payment. After payment, the domain transfer process begins immediately. You can also contact us for a custom offer.`
                  }
                }
              ]
            }
          ]
        })}</script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-amber-500/20">
          <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
            <RouterLink to="/expireddomainnames/en/buy-premium-domains-high-authority-seo-value" className="flex items-center gap-2 sm:gap-3">
              <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400" />
              <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                Premium Domains
              </span>
            </RouterLink>
            <RouterLink 
              to="/expireddomainnames/en/buy-premium-domains-high-authority-seo-value"
              className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium flex items-center gap-1"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Domains
            </RouterLink>
          </div>
        </header>

        {/* Breadcrumb */}
        <nav className="container mx-auto px-3 sm:px-4 py-3" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-slate-400">
            <li><RouterLink to="/" className="hover:text-amber-400 transition-colors">Home</RouterLink></li>
            <li>/</li>
            <li><RouterLink to="/expireddomainnames/en/buy-premium-domains-high-authority-seo-value" className="hover:text-amber-400 transition-colors">Premium Domains</RouterLink></li>
            <li>/</li>
            <li className="text-amber-400 font-medium">{domain.name}</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="relative py-8 sm:py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
          <div className="container mx-auto px-3 sm:px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Left: Domain Info */}
                <div>
                  <Badge className="mb-4 bg-amber-500/10 text-amber-400 border-amber-500/30 px-3 py-1.5 text-xs">
                    {domain.category}
                  </Badge>
                  
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                      {domain.name}
                    </span>
                  </h1>
                  
                  <p className="text-base sm:text-lg text-slate-300 mb-6 leading-relaxed">
                    {domain.description}
                  </p>

                  {/* Key Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-slate-800/60 rounded-lg p-3 border border-slate-700/50">
                      <div className="flex items-center gap-2 mb-1">
                        <BarChart3 className="h-4 w-4 text-amber-400" />
                        <span className="text-xs text-slate-400">MOZ DA</span>
                      </div>
                      <span className="text-2xl font-bold text-white">{domain.mozScore}</span>
                    </div>
                    <div className="bg-slate-800/60 rounded-lg p-3 border border-slate-700/50">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="h-4 w-4 text-emerald-400" />
                        <span className="text-xs text-slate-400">Page Authority</span>
                      </div>
                      <span className="text-2xl font-bold text-white">{domain.pageAuthority}</span>
                    </div>
                    <div className="bg-slate-800/60 rounded-lg p-3 border border-slate-700/50">
                      <div className="flex items-center gap-2 mb-1">
                        <Globe className="h-4 w-4 text-blue-400" />
                        <span className="text-xs text-slate-400">Linking Domains</span>
                      </div>
                      <span className="text-2xl font-bold text-white">{domain.linkingDomains}</span>
                    </div>
                    <div className="bg-slate-800/60 rounded-lg p-3 border border-slate-700/50">
                      <div className="flex items-center gap-2 mb-1">
                        <Link className="h-4 w-4 text-purple-400" />
                        <span className="text-xs text-slate-400">Total Backlinks</span>
                      </div>
                      <span className="text-2xl font-bold text-white">{domain.backlinks}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Purchase Card */}
                <div className="md:sticky md:top-24">
                  <Card className="bg-gradient-to-b from-slate-800/80 to-slate-900/80 border-amber-500/30 overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 p-6 text-center border-b border-amber-500/20">
                      <img 
                        src="/images/premium-domains-logo.png" 
                        alt={`Buy ${domain.name} - Premium Expired Domain with Backlinks High MOZ Authority & SEO Value`}
                        className="w-20 h-20 object-contain mx-auto mb-3"
                      />
                      <div className="text-3xl sm:text-4xl font-bold text-amber-400 mb-1">{domain.price}</div>
                      <p className="text-slate-400 text-sm">One-time payment • Immediate transfer</p>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                          <span>Instant domain transfer after payment</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                          <span>All backlinks and authority included</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                          <span>Secure payment via Stripe</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                          <span>Full ownership & DNS control</span>
                        </div>
                      </div>

                      <a
                        href={domain.stripePaymentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-lg py-6">
                          <Zap className="h-5 w-5 mr-2" />
                          Buy Now - {domain.price}
                        </Button>
                      </a>

                      <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                        <Shield className="h-3 w-3" />
                        <span>Secured by</span>
                        <img src={stripeLogo} alt="Stripe" className="h-4 opacity-60" />
                      </div>

                      <a
                        href={`mailto:support@iaee.eu?subject=Domain Inquiry: ${domain.name}&body=I am interested in ${domain.name} (${domain.price}).`}
                        className="block"
                      >
                        <Button variant="outline" className="w-full border-amber-500/30 text-amber-400 hover:bg-amber-500/10">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Contact for Custom Offer
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Backlinks Section */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Link className="h-5 w-5 text-amber-400" />
                Top Authority Backlinks
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {domain.topBacklinks.map((backlink, idx) => (
                  <div key={idx} className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold text-sm flex-shrink-0">
                      {idx + 1}
                    </div>
                    <span className="text-slate-200 text-sm font-medium">{backlink}</span>
                  </div>
                ))}
              </div>

              {/* Additional Stats */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-5">
                  <h3 className="text-sm font-medium text-slate-400 mb-2">Inbound Links</h3>
                  <p className="text-2xl font-bold text-white">{domain.inboundLinks}</p>
                </div>
                <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-5">
                  <h3 className="text-sm font-medium text-slate-400 mb-2">Followed Links</h3>
                  <p className="text-2xl font-bold text-white">{domain.followedLinks}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases (if available) */}
        {domain.useCases && domain.useCases.length > 0 && (
          <section className="py-8 sm:py-12">
            <div className="container mx-auto px-3 sm:px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-amber-400" />
                  Ideal Use Cases for {domain.name}
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {domain.useCases.map((useCase, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-slate-800/40 border border-slate-700/50 rounded-lg p-3">
                      <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-200 text-sm">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SEO Benefits Section */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-amber-400" />
                Why Buy {domain.name}?
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <Card className="bg-slate-800/40 border-slate-700/50">
                  <CardContent className="p-5">
                    <BarChart3 className="h-8 w-8 text-amber-400 mb-3" />
                    <h3 className="font-semibold text-white mb-2">High Authority Score</h3>
                    <p className="text-sm text-slate-400">With a MOZ DA of {domain.mozScore} and {domain.linkingDomains} linking domains, this domain provides immediate authority for your website.</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/40 border-slate-700/50">
                  <CardContent className="p-5">
                    <Link className="h-8 w-8 text-emerald-400 mb-3" />
                    <h3 className="font-semibold text-white mb-2">Quality Backlinks</h3>
                    <p className="text-sm text-slate-400">{domain.backlinks} backlinks from top-tier websites. These links transfer real SEO value through 301 redirects.</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/40 border-slate-700/50">
                  <CardContent className="p-5">
                    <Globe className="h-8 w-8 text-blue-400 mb-3" />
                    <h3 className="font-semibold text-white mb-2">Faster Rankings</h3>
                    <p className="text-sm text-slate-400">Skip months of link building. Use this domain's existing authority to rank faster in Google search results.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
                Frequently Asked Questions about {domain.name}
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem value="q1" className="bg-slate-800/40 border border-slate-700/50 rounded-lg px-4">
                  <AccordionTrigger className="text-white text-sm hover:text-amber-400">
                    What is the MOZ Domain Authority of {domain.name}?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400 text-sm">
                    {domain.name} has a MOZ Domain Authority of {domain.mozScore} and a Page Authority of {domain.pageAuthority}, with {domain.linkingDomains} linking domains and {domain.backlinks} total backlinks.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2" className="bg-slate-800/40 border border-slate-700/50 rounded-lg px-4">
                  <AccordionTrigger className="text-white text-sm hover:text-amber-400">
                    What backlinks does {domain.name} have?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400 text-sm">
                    {domain.name} has high-quality backlinks from: {domain.topBacklinks.join(", ")}. These authoritative backlinks provide significant SEO value when used with a 301 redirect.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3" className="bg-slate-800/40 border border-slate-700/50 rounded-lg px-4">
                  <AccordionTrigger className="text-white text-sm hover:text-amber-400">
                    How can I use {domain.name} for SEO?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400 text-sm">
                    You can set up a 301 redirect from {domain.name} to your main website, which transfers the domain's authority and backlink value. Alternatively, build a new website directly on {domain.name} to leverage its existing authority of DA {domain.mozScore}.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q4" className="bg-slate-800/40 border border-slate-700/50 rounded-lg px-4">
                  <AccordionTrigger className="text-white text-sm hover:text-amber-400">
                    How do I buy {domain.name}?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400 text-sm">
                    Click "Buy Now" to purchase {domain.name} for {domain.price} via secure Stripe payment. After payment, the domain transfer process begins immediately. You can also contact us at support@iaee.eu for a custom offer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Related Domains */}
        {relatedDomains.length > 0 && (
          <section className="py-8 sm:py-12">
            <div className="container mx-auto px-3 sm:px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  Related {domain.category} Domains
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {relatedDomains.map((rd) => (
                    <RouterLink
                      key={rd.name}
                      to={`/domains/${domainToSlug(rd.name)}`}
                      className="block bg-slate-800/40 border border-slate-700/50 rounded-lg p-4 hover:border-amber-500/30 transition-colors group"
                    >
                      <div className="text-amber-400 font-bold text-sm mb-1 group-hover:text-amber-300 transition-colors">{rd.name}</div>
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span>DA {rd.mozScore}</span>
                        <span>{rd.backlinks} links</span>
                      </div>
                      <div className="text-amber-400 font-semibold text-sm mt-2">{rd.price}</div>
                    </RouterLink>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Buy {domain.name}?
              </h2>
              <p className="text-slate-400 mb-6">
                Secure this premium domain with DA {domain.mozScore} and {domain.backlinks} backlinks for just {domain.price}.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={domain.stripePaymentLink} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-lg px-8 py-6">
                    <Zap className="h-5 w-5 mr-2" />
                    Buy Now - {domain.price}
                  </Button>
                </a>
                <RouterLink to="/expireddomainnames/en/buy-premium-domains-high-authority-seo-value">
                  <Button variant="outline" className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10 px-8 py-6">
                    View All Domains
                  </Button>
                </RouterLink>
              </div>
            </div>
          </div>
        </section>

        <FooterPremiumDomainsEN />
        <HiddenInternalLinks />
      </div>
    </>
  );
};

export default DomainProductPage;
