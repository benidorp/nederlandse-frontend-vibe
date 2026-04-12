import SEOHead from "@/components/seo/SEOHead";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import { Shield, FileText, Scale, CheckCircle, Globe, Clock, Lock, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "GDPR Compliant Documents",
    description:
      "All our legal documents are fully compliant with GDPR, CCPA, and other international data protection regulations. Stay protected across all jurisdictions.",
  },
  {
    icon: FileText,
    title: "Industry-Specific Templates",
    description:
      "Get legal documents tailored to your exact website type — affiliate, e-commerce, photography, travel, nonprofit, streaming, and more.",
  },
  {
    icon: Scale,
    title: "Professionally Reviewed",
    description:
      "Every document is reviewed by legal professionals to ensure accuracy, completeness, and enforceability in your market.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description:
      "Legal documents available in 40+ languages so you can serve customers worldwide with locally compliant policies.",
  },
  {
    icon: Clock,
    title: "Ready in Minutes",
    description:
      "Download, customize with your business details, and publish. No waiting for lawyers — your documents are ready to use immediately.",
  },
  {
    icon: Lock,
    title: "Cookie & Privacy Policies",
    description:
      "Comprehensive cookie consent policies and privacy statements that keep you compliant with ePrivacy Directive and local cookie laws.",
  },
  {
    icon: Users,
    title: "Terms & Conditions",
    description:
      "Clear, enforceable terms of service that protect your business, define user responsibilities, and limit your liability.",
  },
  {
    icon: CheckCircle,
    title: "Regular Updates",
    description:
      "As regulations change, our templates are updated to reflect new requirements. Always stay ahead of compliance deadlines.",
  },
];

const Features = () => {
  return (
    <>
      <SEOHead
        title="Features - Professional Legal Documents for Websites | IAEE"
        description="Discover all features of IAEE legal document packages: GDPR compliance, industry-specific templates, multi-language support, and professional legal review. Protect your website today."
        canonical="https://www.iaee.eu/features"
        lang="en"
        robots="index, follow"
        ogType="website"
        breadcrumbs={[
          { name: "Home", url: "https://www.iaee.eu/" },
          { name: "Features", url: "https://www.iaee.eu/features" },
        ]}
      />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <section className="py-20 md:py-32 bg-gradient-to-b from-primary/10 via-primary/5 to-background">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Everything You Need to Legally Protect Your Website
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Comprehensive legal document packages designed for every website type.
                  GDPR-compliant, professionally reviewed, and available in 40+ languages.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-background">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl border border-border hover:border-primary/50 transition-colors bg-card"
                  >
                    <feature.icon className="w-10 h-10 text-primary mb-4" />
                    <h2 className="text-lg font-semibold mb-2">{feature.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-primary/5">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Why Choose IAEE Legal Documents?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Over 10,000 businesses trust our legal documents to protect their websites. From small
                  startups to established enterprises, our templates are designed to meet the needs of every
                  online business.
                </p>
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  View Pricing
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

export default Features;
