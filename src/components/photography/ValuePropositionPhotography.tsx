import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";
import nicoleProfile from "@/assets/nicole-photography.png";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

const ValuePropositionPhotography = () => {
  return (
    <section id="about-me" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Legal Documents Are Essential for Photographers
            </h2>
            <p className="text-lg text-muted-foreground">
              As a professional photographer, you need proper legal protection for your business, your creative work, and your clients. 
              Whether you're shooting portraits, weddings, commercial work, or events, having the right legal documents in place protects you from liability and copyright issues.
            </p>
          </div>

          <Card className="mb-12 bg-card border-border">
            <CardHeader>
              <div className="flex items-center gap-4">
                <img 
                  src={nicoleProfile} 
                  alt="Nicole Henderson - Legal Specialist" 
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <CardTitle className="text-2xl text-foreground">About Nicole Henderson</CardTitle>
                  <CardDescription>Legal Specialist for Creative Professionals</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                With years of experience helping photographers and creative professionals protect their businesses, 
                I understand the unique legal challenges you face. From copyright protection to client contracts, 
                I've created comprehensive legal documents specifically tailored for photography businesses.
              </p>
              <p className="text-muted-foreground">
                These documents are designed to be easily customizable while providing maximum legal protection 
                for your photography business, your creative work, and your client relationships.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary bg-primary/5">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-foreground">Complete Legal Package for Photographers</CardTitle>
              </div>
              <CardDescription className="text-base">
                Everything you need to legally protect your photography business
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {[
                  "Terms & Conditions - specifically designed for photographers",
                  "Assignment Agreement (Offerte) - with templates and email examples",
                  "Privacy Policy - GDPR-compliant for photographers",
                  "Cookie Policy - complete GDPR compliance",
                  "Disclaimer - protect your photos and content",
                  "Quitclaim - legal coverage for agreements with subjects",
                  "Copyright Protection (Auteursrecht) - international coverage"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="font-semibold text-lg mb-3 text-foreground">Why Choose This Package?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Ready to use in minutes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">For all your photography websites</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">International coverage</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Easily customizable</span>
                  </div>
                </div>
              </div>

              <Card className="bg-card border-primary">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div>
                      <span className="text-4xl font-bold text-primary">€79</span>
                      <span className="text-muted-foreground ml-2">one-time payment</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Complete legal protection for your photography business. 
                      Use for unlimited websites. No recurring fees.
                    </p>
                    <Button 
                      size="lg" 
                      onClick={() => scrollToSection("pricing")}
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      Get Complete Package Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionPhotography;
