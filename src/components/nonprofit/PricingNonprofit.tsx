import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const PricingNonprofit = () => {
  const features = [
    "Complete Donation Terms & Conditions",
    "GDPR-Compliant Privacy Policy",
    "Volunteer Agreement Template",
    "Cookie Policy",
    "Fundraising Disclosure Statement",
    "Implementation Guide & Checklist",
    "Lifetime Updates & Support",
    "Multi-Language Ready"
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Invest in Your Mission's Protection
            </h2>
            <p className="text-xl text-muted-foreground">
              One-time investment, lifetime protection for your charitable organization
            </p>
          </div>

          <Card className="border-2 border-primary/30 shadow-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-center py-12">
              <div className="mb-4">
                <span className="text-lg font-semibold">Complete Legal Package</span>
              </div>
              <CardTitle className="text-5xl md:text-6xl font-bold mb-4">
                €79
              </CardTitle>
              <p className="text-lg opacity-90">One-time payment • Lifetime access</p>
            </CardHeader>
            <CardContent className="pt-12 pb-12">
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                      </div>
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <stripe-buy-button
                  buy-button-id="buy_btn_1QYdMjP6OLyvLfi1Iw70oUdV"
                  publishable-key="pk_live_51QYdKoP6OLyvLfi1vk3GFDi2X7wS64l95G6KzIWgxXWYoSAm8RLXBIZwsqGnNlGnVrfpSZUbWI0v4xbVYi1c0Tjr00oIkxRxJr"
                >
                </stripe-buy-button>
                
                <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Instant Download</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Money-Back Guarantee</span>
                  </div>
                </div>

                <p className="mt-6 text-sm text-muted-foreground">
                  💡 More affordable than one hour with a lawyer
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingNonprofit;
