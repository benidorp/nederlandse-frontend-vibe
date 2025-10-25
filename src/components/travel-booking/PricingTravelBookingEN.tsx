import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const PricingTravelBookingEN = () => {
  const handleCheckout = () => {
    window.location.href = "https://buy.stripe.com/28o5mQcAE5Ik5IAaEE";
  };

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Pricing</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One-time payment, lifetime access to all documents
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <Card className="border-2 border-primary shadow-xl bg-card text-foreground">
            <CardHeader className="text-center">
              <div className="mb-4">
                <Badge className="bg-red-600 text-white hover:bg-red-700">Most Popular</Badge>
              </div>
              <CardTitle className="text-3xl">Complete Legal Package</CardTitle>
              <CardDescription className="text-lg">
                All essential legal documents for your travel booking platform
              </CardDescription>
              <div className="mt-4">
                <span className="text-5xl font-bold text-foreground">€97</span>
                <span className="text-muted-foreground ml-2">one-time</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Privacy Policy (GDPR compliant)",
                  "Terms and Conditions",
                  "Cancellation Policy",
                  "Disclaimer",
                  "Cookie Policy",
                  "Implementation Guide",
                  "Unlimited websites",
                  "Lifetime access",
                  "Free updates",
                  "Instant download"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base font-semibold text-muted-foreground mt-6">
                Secure payment via Stripe, automatically converted to your local currency.
              </p>
            </CardContent>
            <CardFooter>
              <Button 
                size="lg" 
                className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6"
                onClick={handleCheckout}
              >
                Get Started Now
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All prices exclude VAT where applicable. Payment processed securely by Stripe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingTravelBookingEN;
