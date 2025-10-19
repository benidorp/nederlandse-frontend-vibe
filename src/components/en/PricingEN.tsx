import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingEN = () => {
  const includedItems = [
    "GDPR/AVG Privacy Policy",
    "Affiliate Disclosure (FTC Compliant)",
    "Terms & Conditions",
    "Cookie Policy",
    "Disclaimer",
    "Copyright Notice",
    "Implementation instructions",
    "Lifetime updates"
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Legal Protection for Your Affiliate Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One-time payment. No subscriptions. Unlimited use on all your websites.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-primary shadow-lg">
            <CardHeader className="text-center pb-8">
              <div className="mb-4">
                <span className="text-5xl font-bold">€79</span>
                <span className="text-muted-foreground ml-2">one-time</span>
              </div>
              <CardTitle className="text-2xl mb-2">Complete Legal Package</CardTitle>
              <CardDescription className="text-base">
                All essential legal documents for your affiliate website
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {includedItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base">{item}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="w-full text-lg py-6"
                onClick={() => scrollToSection("contact")}
              >
                Order Now
              </Button>

              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <p className="text-sm text-amber-800 dark:text-amber-200 font-medium mb-2">
                  ⚠️ Important Information
                </p>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  Because this is a digital product, no refunds are possible after purchase. You will receive instant access to all documents after payment.
                </p>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                <p>✓ Secure payment via trusted payment providers</p>
                <p>✓ Instant download after payment</p>
                <p>✓ Use on unlimited websites</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingEN;
