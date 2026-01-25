import { Crown, ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LegalFooterPremiumDomainsEN from "@/components/premium-domains/LegalFooterPremiumDomainsEN";
import FooterPremiumDomainsEN from "@/components/premium-domains/FooterPremiumDomainsEN";
import { SEOHead, PREMIUM_DOMAINS_LEGAL_HREFLANG, getLegalPageBreadcrumbs } from "@/components/seo";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

const PremiumDomainsLegalEN = () => {
  const breadcrumbItems = getLegalPageBreadcrumbs("en");
  
  return (
    <>
      <SEOHead
        title="Legal Documents Premium Domains | Terms and Conditions, Privacy, Disclaimer"
        description="Legal documents for premium domain name sales. Terms and conditions, privacy policy, disclaimer and cookie policy for purchasing expired domains with SEO value."
        canonical="https://iaee.eu/expireddomainnames/en/premium-domains-legal-documents"
        lang="en"
        robots="noindex, nofollow"
        hreflangLinks={PREMIUM_DOMAINS_LEGAL_HREFLANG}
        xDefaultUrl="https://iaee.eu/expireddomainnames/en/premium-domains-legal-documents"
        breadcrumbs={breadcrumbItems.map((item, i) => ({
          name: item.label,
          url: i === 0 ? "https://iaee.eu/expireddomainnames/en/buy-premium-domains-high-authority-seo-value" : "https://iaee.eu/expireddomainnames/en/premium-domains-legal-documents"
        }))}
        faqItems={[
          { question: "What are your terms and conditions?", answer: "Our terms cover domain sales, transfers, and refund policies for premium expired domains." },
          { question: "How do you handle privacy?", answer: "We collect minimal data and never share personal information with third parties." }
        ]}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
        {/* Header */}
        <header className="py-6 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link to="/expireddomainnames/en/buy-premium-domains-high-authority-seo-value" className="flex items-center gap-3">
                <Crown className="h-8 w-8 text-amber-400" />
                <span className="text-xl font-bold text-white">Premium Domains</span>
              </Link>
              <div className="flex items-center gap-3">
                <Link to="/expireddomainnames/en/buy-premium-domains-high-authority-seo-value">
                  <Button variant="outline" className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700">
                    <Home className="mr-2 h-4 w-4" />
                    Home
                  </Button>
                </Link>
                <Link to="/expireddomainnames/en/buy-premium-domains-high-authority-seo-value">
                  <Button variant="outline" className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Domains
                  </Button>
                </Link>
              </div>
            </div>
            <Breadcrumbs 
              items={breadcrumbItems} 
              homeLabel="Home" 
              homeHref="/expireddomainnames/en/buy-premium-domains-high-authority-seo-value"
              className="mt-4 text-slate-400"
            />
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Crown className="h-16 w-16 text-amber-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Legal Documents
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                All legal information regarding the sale of premium expired domain names. 
                Read our terms and conditions, privacy policy, disclaimer and cookie policy.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Documents Section */}
        <LegalFooterPremiumDomainsEN />

        {/* Additional Info */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Important Information</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    <strong className="text-amber-400">About Our Service:</strong> We offer premium expired domain names with existing domain authority and backlinks. These domains can provide valuable SEO benefits for your online projects.
                  </p>
                  <p>
                    <strong className="text-amber-400">No Guarantee:</strong> While we strive for quality domains, we cannot guarantee specific SEO results, rankings or retention of Domain Authority. Search engine algorithms and backlink profiles can change.
                  </p>
                  <p>
                    <strong className="text-amber-400">Final Sale:</strong> All domain sales are final. After transfer, you are fully responsible for the domain, including renewal, hosting and content.
                  </p>
                  <p>
                    <strong className="text-amber-400">Contact:</strong> For questions about our legal documents or domain sales, please contact us at{" "}
                    <a href="mailto:support@iaee.eu" className="text-amber-400 hover:underline">
                      support@iaee.eu
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <FooterPremiumDomainsEN />
      </div>
    </>
  );
};

export default PremiumDomainsLegalEN;
