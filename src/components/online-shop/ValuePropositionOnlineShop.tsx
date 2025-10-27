import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, FileText, RotateCcw, Truck, Cookie, BookOpen, Clock, Globe2, Check } from "lucide-react";
import nicoleProfile from "@/assets/nicole-profile.png";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({
    behavior: "smooth"
  });
};

const ValuePropositionOnlineShop = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Professional Legal Documents for Online Stores</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            All Legally Required Documents Your Webshop Needs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Running an online store means you're legally required to have certain legal documents on your website. 
            Without these documents, you risk high fines, legal disputes, and loss of customer trust.
          </p>
        </div>

        {/* About Me Section */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center">
              <div className="mx-auto md:mx-0">
                <img 
                  src={nicoleProfile} 
                  alt="Nicole Henderson - Legal specialist" 
                  className="rounded-full w-48 h-48 object-cover shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Nicole Henderson - Legal specialist</h3>
                <p className="text-muted-foreground mb-4 italic">Legal specialist specialized in clear, precise, and professional legal documents</p>
                <p className="text-foreground leading-relaxed">
                  Hello, I'm Nicole Henderson, a legal writer specializing in clear, accurate, and professional legal documents. 
                  I draft contracts, policies, and agreements for businesses, organizations, and individuals that protect your interests 
                  and ensure compliance, making legal paperwork simple and stress-free.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Package Intro */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Professional Legal Documents for Online Stores
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            To answer the many questions about legal requirements for webshops, I've developed high-quality legal documents 
            specifically for online stores. These documents are designed for both national and international use and provide 
            essential protection at a fraction of the usual cost. Get professional legal coverage at an affordable price—secure 
            your business today!
          </p>
        </div>

        {/* What You Get */}
        <Card className="mb-12 border-primary/20">
          <CardHeader className="text-center pb-6">
            <h3 className="text-2xl font-bold text-foreground">What You Get: The Complete Legal Package</h3>
            <p className="text-muted-foreground">
              Our complete package contains all legal documents specifically written for online stores. Not generic templates, 
              but professional texts that perfectly align with your e-commerce business model:
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">GDPR Privacy Policy</h4>
                  <p className="text-sm text-muted-foreground">
                    Fully compliant with European legislation, including customer data protection and secure payment handling
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
                  <RotateCcw className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Return & Refund Policy</h4>
                  <p className="text-sm text-muted-foreground">
                    Clear return procedures compliant with consumer protection laws and cooling-off period regulations
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Terms & Conditions</h4>
                  <p className="text-sm text-muted-foreground">
                    Protects you from liability claims and establishes clear customer expectations for online transactions
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Shipping Policy</h4>
                  <p className="text-sm text-muted-foreground">
                    Transparent shipping terms including delivery times, costs, and international shipping guidelines
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
                  <Cookie className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Cookie Policy</h4>
                  <p className="text-sm text-muted-foreground">
                    GDPR compliant explanation of tracking, analytics, and marketing cookies with consent mechanism
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Implementation Guide</h4>
                  <p className="text-sm text-muted-foreground">
                    Step-by-step instructions to integrate all documents correctly into your webshop platform
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto h-16 w-16 rounded-full bg-red-600 flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl mb-2">Ready in Minutes</CardTitle>
              <p className="text-muted-foreground text-sm">
                Download, fill in your business details, and place the documents on your webshop. No lawyer needed, no weeks of waiting.
              </p>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto h-16 w-16 rounded-full bg-red-600 flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl mb-2">For All Your Stores</CardTitle>
              <p className="text-muted-foreground text-sm">
                One purchase, unlimited use. Use these documents for all your current and future online stores and webshops!
              </p>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto h-16 w-16 rounded-full bg-red-600 flex items-center justify-center mb-4">
                <Globe2 className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl mb-2">International Use</CardTitle>
              <p className="text-muted-foreground text-sm">
                The templates are available for download in multiple languages for international use, so you can deploy them on all your webshops worldwide.
              </p>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Card */}
        <Card className="bg-primary text-primary-foreground border-primary">
          <CardContent className="p-8 text-center">
            <p className="text-primary-foreground/90 mb-4 text-lg">
              Fully compliant with GDPR and international legislation. Option to download in different languages for international use. 
              Complete protection for your online business.
            </p>
            <div className="mb-6">
              <p className="text-4xl font-bold text-primary-foreground mb-2">For only €79 one-time</p>
              <p className="text-primary-foreground/90">
                you arrange all legal obligations for all your webshops. No monthly fees, no hassle with lawyers, no risk of fines. 
                Just all the documents you need, ready to use.
              </p>
            </div>
            <Button 
              size="lg" 
              onClick={() => scrollToSection("pricing")}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8"
            >
              Order Now for €79
            </Button>
            <p className="text-sm text-primary-foreground/80 mt-4">
              💡 Consider this: one hour with a lawyer already costs more
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ValuePropositionOnlineShop;
