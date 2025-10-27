import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const PricingElearning = () => {
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
              Complete Legal Protection
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
              <CardTitle className="text-3xl mb-4">E-Learning Legal Package</CardTitle>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                Contact for Price
              </div>
              <p className="text-muted-foreground">One-time payment • Instant access</p>
            </CardHeader>
            <CardContent className="space-y-6 pb-8">
              {/* What's included */}
              <div className="space-y-4">
                {[
                  "Complete Course Terms & Conditions",
                  "GDPR-Compliant Privacy Policy for Students",
                  "Refund & Cancellation Policy",
                  "Intellectual Property Protection Policy",
                  "Instructor Agreement Terms",
                  "Certificate & Accreditation Policy",
                  "Cookie & Tracking Policy",
                  "Implementation Guide with Step-by-Step Instructions",
                  "Email Templates for Student Communication",
                  "Lifetime Access - No Recurring Fees",
                  "Use for Unlimited Courses & Students",
                  "30-Day Money-Back Guarantee"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mt-0.5 shadow-md">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Payment Section */}
              <div className="pt-6">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all text-lg py-6"
                  onClick={() => window.location.href = 'mailto:info@iaee.eu?subject=E-Learning Legal Package Bestelling'}
                >
                  Bestel Nu - Contact voor Prijs
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  📧 We sturen u direct alle informatie en betaalopties
                </p>
              </div>

              {/* Trust badges */}
              <div className="pt-6 border-t border-primary/20">
                <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                  <span>✅ Instant Download</span>
                  <span>🔒 Secure Payment</span>
                  <span>💯 Money-Back Guarantee</span>
                  <span>🌍 International Use</span>
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

export default PricingElearning;
