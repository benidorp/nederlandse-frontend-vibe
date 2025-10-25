import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const includedItems = [
  "Complete Terms & Conditions for Event/Ticketing",
  "GDPR-Compliant Privacy Policy",
  "Cookie Policy with Consent Management",
  "Comprehensive Liability Disclaimer",
  "Refund & Cancellation Policy",
  "Event Waiver & Release Forms",
  "Implementation Guide with Best Practices",
  "Lifetime Updates & Legal Changes",
  "Multi-language Support Available",
  "Instant Download - Ready in 5 Minutes"
];

const PricingEventTicketing = () => {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Legal Protection Package
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One-time payment for lifetime access to all documents and updates
          </p>
        </div>

        <Card className="max-w-2xl mx-auto border-2 border-primary/20 shadow-xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="mb-6 flex items-center justify-center gap-4">
                <img 
                  src="/logo.png" 
                  alt="Affiliate-docs Logo" 
                  className="h-16 w-auto"
                />
              </div>
              <div className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Most Popular
              </div>
              <div className="mb-4">
                <span className="text-6xl md:text-7xl font-bold text-foreground">€79</span>
                <span className="text-lg text-muted-foreground ml-2">one-time</span>
              </div>
              <p className="text-lg text-muted-foreground">Complete Event & Ticketing Legal Package</p>
            </div>

            <div className="space-y-3 mb-8">
              {includedItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <stripe-buy-button
                buy-button-id="buy_btn_1QpEHFRwsGb9F7ZELvpyoNDu"
                publishable-key="pk_live_51QpD4DRwsGb9F7ZEo4M7qZRpIztGgHwGoCpvh38h6ygK4SLQwi8Zg0W3BXX16F9yl4gqOwcNbCblZMmYpXqD1sCl00I59xnWqo"
              />
              <p className="text-xs text-muted-foreground mt-4">
                * Digital products are non-refundable after download
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PricingEventTicketing;
