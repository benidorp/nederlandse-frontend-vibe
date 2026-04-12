import SEOHead from "@/components/seo/SEOHead";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import { Shield, Users, Globe, Award } from "lucide-react";

const About = () => {
  return (
    <>
      <SEOHead
        title="About IAEE - Professional Legal Documents for Websites"
        description="Learn about IAEE, the trusted provider of professional legal documents for websites. Over 10,000 businesses protected worldwide with GDPR-compliant templates in 40+ languages."
        canonical="https://www.iaee.eu/about"
        lang="en"
        robots="index, follow"
        ogType="website"
        breadcrumbs={[
          { name: "Home", url: "https://www.iaee.eu/" },
          { name: "About", url: "https://www.iaee.eu/about" },
        ]}
      />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <section className="py-20 md:py-32 bg-gradient-to-b from-primary/10 via-primary/5 to-background">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  About IAEE
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  We help online businesses protect themselves with professional, legally reviewed
                  documents that comply with international regulations.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-background">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  At IAEE, we believe every website owner deserves access to professional legal
                  protection without the high costs of hiring a lawyer. Our mission is to provide
                  affordable, high-quality legal document templates that are easy to customize and
                  legally sound across multiple jurisdictions.
                </p>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                  Whether you run an affiliate website, e-commerce store, photography business,
                  or any other type of online venture, we have the legal documents you need to
                  operate safely and compliantly. Our templates cover privacy policies, terms and
                  conditions, cookie policies, disclaimers, and more — all tailored to your
                  specific industry.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  <div className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card">
                    <Shield className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Legal Expertise</h3>
                      <p className="text-sm text-muted-foreground">
                        All documents are crafted and reviewed by legal professionals with expertise
                        in international data protection and digital commerce law.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card">
                    <Users className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">10,000+ Businesses</h3>
                      <p className="text-sm text-muted-foreground">
                        Trusted by thousands of businesses worldwide, from solo entrepreneurs to
                        established companies across every industry.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card">
                    <Globe className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">40+ Languages</h3>
                      <p className="text-sm text-muted-foreground">
                        Our legal documents are available in over 40 languages to serve businesses
                        operating in any market around the world.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card">
                    <Award className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">GDPR & CCPA Compliant</h3>
                      <p className="text-sm text-muted-foreground">
                        Every template is designed to comply with GDPR, CCPA, and other major
                        data protection regulations worldwide.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6">Premium Domain Names</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  In addition to legal documents, we offer a curated marketplace of premium expired
                  domain names with high domain authority and proven SEO value. These domains are
                  perfect for businesses looking to boost their online presence quickly with
                  established backlink profiles.
                </p>
              </div>
            </div>
          </section>
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default About;
