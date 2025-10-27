import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Clock, Globe, CheckCircle2 } from "lucide-react";
import nicoleProfile from "@/assets/nicole-profile.png";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const ValuePropositionDropshipping = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Professional Legal Documents for Dropshipping Businesses</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            All Legally Required Documents Your Dropshipping Store Needs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            As a dropshipper, you sell products without holding inventory. But did you know you're still legally responsible 
            for customer protection, returns, and privacy compliance? Without proper legal documents, you risk high fines and legal disputes.
          </p>
        </div>

        {/* About Me Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={nicoleProfile} 
                  alt="Nicole Henderson - Legal specialist" 
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <CardTitle className="text-2xl">Nicole Henderson - Legal Specialist</CardTitle>
                  <CardDescription className="text-base">
                    Specialized in clear, precise, and professional legal documents
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Hello, I'm Nicole Henderson, a legal writer specializing in clear, accurate, and professional legal documents. 
                I draft contracts, policies, and agreements for businesses, organizations, and individuals that protect your 
                interests and ensure compliance, making legal paperwork simple and stress-free.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Professional Legal Documents Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Professional Legal Documents for Dropshipping Businesses
            </h3>
            <p className="text-lg text-muted-foreground">
              To address the many questions about legal requirements for dropshippers, I've developed high-quality legal documents 
              specifically for dropshipping stores. These documents are designed for both national and international use and provide 
              essential protection at a fraction of the usual cost. Get professional legal coverage at an affordable price—secure your business today!
            </p>
          </div>
        </div>

        {/* What You Get Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">What You Get: The Complete Legal Package</CardTitle>
              <CardDescription className="text-base">
                Our complete package contains all legal documents specifically written for dropshipping businesses. 
                Not generic templates, but professional texts that perfectly align with your dropshipping business model:
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1 drop-shadow-sm" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">GDPR Privacy Policy</h4>
                  <p className="text-sm text-muted-foreground">
                    Fully compliant with European legislation, including supplier data sharing and customer data protection
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Return & Refund Policy</h4>
                  <p className="text-sm text-muted-foreground">
                    Clear rules for returns and refunds, specifically adapted for dropshipping delivery times
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Terms & Conditions</h4>
                  <p className="text-sm text-muted-foreground">
                    Protects you from liability claims and clearly defines customer expectations regarding shipping times
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Shipping Policy</h4>
                  <p className="text-sm text-muted-foreground">
                    Transparent communication about delivery times and shipping costs for dropshipping orders
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Cookie Policy</h4>
                  <p className="text-sm text-muted-foreground">
                    GDPR compliant explanation of tracking and analytics cookies used on your store
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Implementation Guide</h4>
                  <p className="text-sm text-muted-foreground">
                    Step-by-step instructions to place everything correctly on your dropshipping store
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center bg-card/80 backdrop-blur">
            <CardHeader>
              <div className="mx-auto mb-4 h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-md">
                <Clock className="h-7 w-7 text-primary-foreground" />
              </div>
              <CardTitle>Ready in Minutes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Download, fill in your business details, and place the documents on your store. No lawyer needed, no weeks of waiting.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-card/80 backdrop-blur">
            <CardHeader>
              <div className="mx-auto mb-4 h-14 w-14 rounded-xl bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center shadow-md">
                <FileText className="h-7 w-7 text-secondary-foreground" />
              </div>
              <CardTitle>For All Your Stores</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                One purchase, unlimited use. Use these documents for all your current and future dropshipping stores!
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-card/80 backdrop-blur">
            <CardHeader>
              <div className="mx-auto mb-4 h-14 w-14 rounded-xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center shadow-md">
                <Globe className="h-7 w-7 text-accent-foreground" />
              </div>
              <CardTitle>International Use</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The templates are available for download in multiple languages for international use, 
                so you can deploy them on all your stores worldwide.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Card */}
        <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 shadow-lg">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Fully compliant with GDPR and international legislation. Option to download in different languages 
                for international use. Complete protection for your business.
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                For only <span className="text-2xl font-bold text-primary">€79 one-time</span> you arrange all legal 
                obligations for all your dropshipping stores. No monthly fees, no hassle with lawyers, no risk of fines. 
                Just all the documents you need, ready to use.
              </p>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('pricing')}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Order Now for €79
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                💡 Consider this: one hour with a lawyer already costs more
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ValuePropositionDropshipping;
