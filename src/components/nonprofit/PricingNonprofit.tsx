import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles, AlertTriangle } from "lucide-react";
import stripeLogo from "@/assets/stripe-logo.svg";
import StripeBuyButton from "@/components/StripeBuyButton";

const PricingNonprofit = () => {
  const features = [
    "Complete Donation Terms & Conditions",
    "GDPR-Compliant Privacy Policy",
    "Volunteer Agreement Template",
    "Cookie Policy",
    "Fundraising Disclosure Statement",
    "Implementation Guide & Checklist"
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/60 text-primary-foreground px-6 py-2 rounded-full mb-6 shadow-lg">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Simple Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Invest in Your Mission's Protection
            </h2>
            <p className="text-xl text-muted-foreground">
              One-time investment. No subscriptions. Lifetime access.
            </p>
          </div>

          {/* Pricing Card */}
          <Card className="border-4 border-primary/30 shadow-2xl bg-gradient-to-br from-card via-card to-primary/5">
            <CardHeader className="text-center pb-8 pt-8">
              <div className="mb-4">
                <div className="inline-block bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                  Most Popular
                </div>
              </div>
              <div className="mb-4">
                <span className="text-5xl font-bold text-primary">€79</span>
                <span className="text-muted-foreground ml-2">one-time</span>
              </div>
              <CardTitle className="text-2xl">Non-Profit Legal Package</CardTitle>
              <p className="text-muted-foreground">One-time payment • Instant access</p>
              <div className="flex justify-center mt-6">
                <img src="/images/iaee-logo.png" alt="IAEE - Essential Legal Documents" className="h-20 w-20 object-contain" loading="eager" />
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pb-8">
              {/* What's included */}
              <div className="space-y-4">
              {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mt-0.5 shadow-md">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Payment Section */}
              <div className="pt-6 border-t flex justify-center">
                <StripeBuyButton />
              </div>

              <div className="flex items-center justify-center gap-2 mt-4">
                <img src={stripeLogo} alt="Stripe" className="h-5 w-5" />
                <p className="text-sm font-medium text-muted-foreground">
                  Secure payment via Stripe • Automatically converted to your local currency
                </p>
              </div>

              {/* Warning */}
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                <div className="flex gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-0.5">Important: No Returns</h4>
                    <p className="text-xs text-muted-foreground">
                      Our products cannot be returned and we do not offer a money-back guarantee. 
                      This makes sense for digital documents that can easily be copied after download.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional info */}
          <div className="text-center mt-8 text-muted-foreground">
            <p className="text-sm">
              💡 Compare: One hour with a lawyer costs €150-300. This complete package saves you thousands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingNonprofit;
