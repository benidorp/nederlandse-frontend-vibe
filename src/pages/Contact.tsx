import SEOHead from "@/components/seo/SEOHead";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <>
      <SEOHead
        title="Contact Us - IAEE Legal Documents & Premium Domains"
        description="Get in touch with IAEE for questions about legal documents, premium domain names, or custom requests. We are here to help protect your online business."
        canonical="https://www.iaee.eu/contact"
        lang="en"
        robots="index, follow"
        ogType="website"
        breadcrumbs={[
          { name: "Home", url: "https://www.iaee.eu/" },
          { name: "Contact", url: "https://www.iaee.eu/contact" },
        ]}
      />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <section className="py-20 md:py-32 bg-gradient-to-b from-primary/10 via-primary/5 to-background">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Contact Us
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Have a question about our legal documents or premium domains? We are happy to help.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-background">
            <div className="container">
              <div className="max-w-2xl mx-auto">
                <div className="p-8 rounded-xl border border-border bg-card">
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Whether you need help choosing the right legal document package, have questions
                    about our premium domain names, or need a custom solution for your business,
                    our team is here to assist you.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a
                          href="mailto:support@iaee.eu"
                          className="text-primary hover:underline"
                        >
                          support@iaee.eu
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          We typically respond within 24 hours on business days.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-border">
                    <h3 className="font-semibold mb-4">Common Questions</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm">Which legal documents do I need?</h4>
                        <p className="text-sm text-muted-foreground">
                          It depends on your website type. Browse our{" "}
                          <a href="/" className="text-primary hover:underline">
                            homepage
                          </a>{" "}
                          to find the package tailored for your industry.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Can I customize the documents?</h4>
                        <p className="text-sm text-muted-foreground">
                          Yes, all our templates are designed to be easily customized with your
                          business details. No legal expertise required.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Do you offer refunds?</h4>
                        <p className="text-sm text-muted-foreground">
                          Since our products are digital documents, we offer refunds on a case-by-case
                          basis. Please contact us if you have concerns.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default Contact;
