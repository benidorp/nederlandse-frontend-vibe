import SEOHead from "@/components/seo/SEOHead";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const posts = [
  {
    title: "Why Every Affiliate Website Needs Legal Documents in 2026",
    description:
      "FTC enforcement and GDPR fines are on the rise. Learn which legal documents are essential for affiliate marketers and how to stay compliant.",
    date: "2026-03-15",
    slug: "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy",
  },
  {
    title: "GDPR Compliance for E-Commerce: A Complete Guide",
    description:
      "Understand the GDPR requirements for online shops, including privacy policies, cookie consent, and data processing agreements.",
    date: "2026-03-01",
    slug: "/essential-legal-documents-ecommerce-website-terms-conditions-privacy-policy-return-policy-shipping-policy",
  },
  {
    title: "Photography Copyright Protection: Legal Documents You Need",
    description:
      "Protect your creative work with proper contracts, copyright notices, and licensing agreements for photography businesses.",
    date: "2026-02-20",
    slug: "/photography-legal-documents-terms-conditions-privacy-policy-contract-copyright-protection",
  },
  {
    title: "How Premium Domains Can Boost Your SEO Rankings",
    description:
      "Learn how expired premium domain names with high domain authority can give your website an instant SEO advantage.",
    date: "2026-02-10",
    slug: "/expireddomainnames/en/buy-premium-domains-high-authority-seo-value",
  },
  {
    title: "Legal Requirements for Dropshipping Businesses in Europe",
    description:
      "A comprehensive overview of the legal documents dropshipping businesses need to operate legally in the EU market.",
    date: "2026-01-25",
    slug: "/dropshipping-business-legal-protection-terms-conditions-privacy-policy-supplier-agreement-refund-policy",
  },
  {
    title: "VAT Calculator: Understanding International Tax Rates",
    description:
      "Our worldwide VAT calculator helps international businesses calculate taxes across 40+ countries. Learn how it works.",
    date: "2026-01-15",
    slug: "/vat-calculator-worldwide",
  },
];

const Blog = () => {
  return (
    <>
      <SEOHead
        title="Blog - Legal Tips & SEO Insights for Website Owners | IAEE"
        description="Expert articles on legal compliance, GDPR, website protection, premium domains, and SEO strategies for online businesses. Stay informed with IAEE."
        canonical="https://www.iaee.eu/blog"
        lang="en"
        robots="index, follow"
        ogType="website"
        breadcrumbs={[
          { name: "Home", url: "https://www.iaee.eu/" },
          { name: "Blog", url: "https://www.iaee.eu/blog" },
        ]}
      />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <section className="py-20 md:py-32 bg-gradient-to-b from-primary/10 via-primary/5 to-background">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Blog &amp; Resources
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Expert insights on legal compliance, website protection, and SEO strategies for
                  online businesses.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-background">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {posts.map((post, index) => (
                  <a href={post.slug} key={index} className="group">
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border hover:border-primary/50">
                      <CardHeader>
                        <time
                          dateTime={post.date}
                          className="text-xs text-muted-foreground"
                        >
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="leading-relaxed">
                          {post.description}
                        </CardDescription>
                        <span className="inline-block mt-4 text-sm font-medium text-primary group-hover:underline">
                          Read more →
                        </span>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default Blog;
