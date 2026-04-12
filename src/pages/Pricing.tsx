import SEOHead from "@/components/seo/SEOHead";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Single Document",
    price: "€29",
    description: "One professional legal document for your website.",
    features: [
      "Choose any single document",
      "GDPR compliant",
      "Customizable template",
      "Digital delivery",
      "1 language included",
    ],
    link: "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy",
  },
  {
    name: "Essential Package",
    price: "€79",
    description: "Complete legal protection for your website type.",
    popular: true,
    features: [
      "Privacy Policy",
      "Terms & Conditions",
      "Cookie Policy",
      "Disclaimer / Disclosure",
      "Industry-specific clauses",
      "GDPR & CCPA compliant",
      "Digital delivery",
    ],
    link: "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy",
  },
  {
    name: "Premium Domains",
    price: "From €99",
    description: "High-authority expired domain names with proven SEO value.",
    features: [
      "MOZ Domain Authority 20-50+",
      "Verified quality backlinks",
      "Instant transfer available",
      "SEO value preserved",
      "Full ownership transfer",
    ],
    link: "/expireddomainnames/en/buy-premium-domains-high-authority-seo-value",
  },
];

const Pricing = () => {
  return (
    <>
      <SEOHead
        title="Pricing - Legal Document Packages & Premium Domains | IAEE"
        description="Affordable legal document packages for every website type starting from €29. Complete GDPR-compliant protection packages from €79. Premium domain names from €99."
        canonical="https://www.iaee.eu/pricing"
        lang="en"
        robots="index, follow"
        ogType="website"
        breadcrumbs={[
          { name: "Home", url: "https://www.iaee.eu/" },
          { name: "Pricing", url: "https://www.iaee.eu/pricing" },
        ]}
      />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <section className="py-20 md:py-32 bg-gradient-to-b from-primary/10 via-primary/5 to-background">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Simple, Transparent Pricing
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Professional legal documents and premium domains at affordable prices.
                  No subscriptions, no hidden fees — pay once and own it forever.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-background">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {packages.map((pkg, index) => (
                  <Card
                    key={index}
                    className={`relative h-full ${pkg.popular ? "border-primary shadow-lg scale-105" : "border-border"}`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                        Most Popular
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-xl">{pkg.name}</CardTitle>
                      <CardDescription>{pkg.description}</CardDescription>
                      <div className="text-3xl font-bold text-primary mt-4">{pkg.price}</div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <a href={pkg.link}>
                        <Button
                          className="w-full"
                          variant={pkg.popular ? "default" : "outline"}
                        >
                          Get Started
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-primary/5">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Need Help Choosing?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Not sure which package is right for you? Contact us and we will help you find the
                  perfect legal protection for your website.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </section>
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default Pricing;
