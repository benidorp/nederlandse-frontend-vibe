import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, Globe, Zap } from "lucide-react";
import nicoleProfile from "@/assets/nicole-profile.png";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const ValuePropositionTravelBookingEN = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-5xl">
        <div className="max-w-4xl mx-auto mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground">Professional Legal Documents for Travel & Booking Businesses</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            All Legally Required Documents Your Travel & Booking Website Needs
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            As a travel booking or hotel platform, you handle customer data, payments, and reservations. But did you know that you're legally required to have certain legal documents on your website? Without these documents, you risk high fines and legal issues.
          </p>
        </div>

        {/* About Me Section */}
        <Card className="mb-12 bg-card border-border">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img 
                src={nicoleProfile} 
                alt="Nicole Henderson - Legal specialist"
                className="w-32 h-32 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">About Me</h3>
                <p className="text-lg font-semibold text-foreground mb-2">Nicole Henderson - Legal specialist</p>
                <p className="text-muted-foreground mb-4">
                  Legal specialist specialized in clear, precise, and professional legal documents
                </p>
                <p className="text-muted-foreground">
                  Hello, I'm Nicole Henderson, a legal writer specializing in clear, accurate, and professional legal documents. I draft contracts, policies, and agreements for businesses, organizations, and individuals that protect your interests and ensure compliance, making legal paperwork simple and stress-free.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Legal Documents Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">Professional Legal Documents for Travel & Booking Businesses</h3>
          <p className="text-lg text-muted-foreground mb-8">
            To answer the many questions about legal requirements for travel and booking platforms, I've developed high-quality legal documents specifically for hotel and travel websites. These documents are designed for both national and international use and provide essential protection at a fraction of the usual cost. Get professional legal coverage at an affordable price—secure your business today!
          </p>

          {/* What You Get */}
          <Card className="mb-8 bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl">What You Get: The Complete Legal Package</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Our complete package contains all legal documents specifically written for travel booking and hotel websites. Not generic templates, but professional texts that perfectly align with your business model:
              </p>
              <div className="space-y-4">
                <div className="flex gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
                  <div className="h-6 w-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">GDPR Privacy Policy</h4>
                    <p className="text-muted-foreground">Fully compliant with European legislation, including cookie usage and data protection for customer bookings</p>
                  </div>
                </div>
                <div className="flex gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
                  <div className="h-6 w-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Cancellation Policy</h4>
                    <p className="text-muted-foreground">Clear terms for booking cancellations, refunds, and modifications, compliant with EU consumer protection laws</p>
                  </div>
                </div>
                <div className="flex gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
                  <div className="h-6 w-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Terms & Conditions</h4>
                    <p className="text-muted-foreground">Protects you from liability claims and regulates the relationship with customers and hotel partners</p>
                  </div>
                </div>
                <div className="flex gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
                  <div className="h-6 w-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Legal Disclaimer</h4>
                    <p className="text-muted-foreground">Limits your liability for booking information, pricing accuracy, and third-party services</p>
                  </div>
                </div>
                <div className="flex gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
                  <div className="h-6 w-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Cookie Policy</h4>
                    <p className="text-muted-foreground">GDPR compliant, explanation of tracking, analytics, and booking-related cookies</p>
                  </div>
                </div>
                <div className="flex gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
                  <div className="h-6 w-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Implementation Guide</h4>
                    <p className="text-muted-foreground">Step-by-step instructions to place everything correctly on your website</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Ready in Minutes</h3>
                <p className="text-muted-foreground">
                  Download, fill in your business details, and place the documents on your website. No lawyer needed, no weeks of waiting.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">For All Your Websites</h3>
                <p className="text-muted-foreground">
                  One purchase, unlimited use. Use these documents for all your current and future travel and booking websites!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">International Use</h3>
                <p className="text-muted-foreground">
                  The templates are available for download in multiple languages for international use, so you can deploy them on all your websites worldwide.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Final CTA Card */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">
                Fully compliant with GDPR and international legislation. Option to download in different languages for international use. Complete protection for your business.
              </h3>
              <p className="text-lg mb-6">
                For only €79 one-time you arrange all legal obligations for all your travel and booking websites. No monthly fees, no hassle with lawyers, no risk of fines. Just all the documents you need, ready to use.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => scrollToSection("pricing")}
                className="font-semibold"
              >
                Order Now for €79
              </Button>
              <p className="text-sm mt-4 opacity-90">
                💡 Consider this: one hour with a lawyer already costs more than €79
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionTravelBookingEN;
