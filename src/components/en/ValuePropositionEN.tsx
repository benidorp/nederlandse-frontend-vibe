import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText, Globe, Clock } from "lucide-react";
import nicoleProfile from "@/assets/nicole-profile.png";

const ValuePropositionEN = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about-me" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Legal Protection for Your Affiliate Business
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            As an affiliate marketer, you are legally required to have certain documents on your website. Without proper privacy policies, disclaimers, and terms & conditions, you risk heavy fines and legal issues.
          </p>
          <p className="text-lg text-muted-foreground">
            Our complete legal package provides everything you need to operate legally and professionally, fully compliant with GDPR/AVG and international legislation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={nicoleProfile} 
                  alt="Nicole Henderson - Legal Specialist" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-4">Nicole Henderson</h3>
                <p className="text-muted-foreground mb-4">
                  Legal Specialist for Affiliate & Online Businesses
                </p>
                <p className="text-muted-foreground">
                  With years of experience in internet law and affiliate marketing, I help online entrepreneurs protect their businesses. My legal documents are specifically designed for affiliate marketers and comply with all current legislation, including GDPR/AVG, ePrivacy Directive, and international guidelines.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">What's Included in the Package?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Complete Legal Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ GDPR/AVG Privacy Policy</li>
                  <li>✓ Affiliate Disclosure</li>
                  <li>✓ Terms & Conditions</li>
                  <li>✓ Cookie Policy</li>
                  <li>✓ Disclaimer</li>
                  <li>✓ Copyright Notice</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Fully Compliant</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ GDPR/AVG compliant</li>
                  <li>✓ FTC guidelines compliant</li>
                  <li>✓ ePrivacy Directive compliant</li>
                  <li>✓ International legislation</li>
                  <li>✓ Regular updates included</li>
                  <li>✓ Professional legal language</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Quick & Easy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Instant download after payment</li>
                  <li>✓ Easy to implement</li>
                  <li>✓ Copy & paste ready</li>
                  <li>✓ Clear instructions included</li>
                  <li>✓ No legal knowledge required</li>
                  <li>✓ Lifetime access</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Flexible Use</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ For unlimited websites</li>
                  <li>✓ All affiliate niches</li>
                  <li>✓ International use</li>
                  <li>✓ Easy customization</li>
                  <li>✓ Professional appearance</li>
                  <li>✓ One-time payment</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Ready to Protect Your Business?</CardTitle>
            <CardDescription className="text-lg">
              One-time payment of €79 for complete legal protection
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("pricing")}
              className="text-lg px-8"
            >
              Order Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ValuePropositionEN;
