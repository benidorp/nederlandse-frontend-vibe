import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const PricingTravelBookingEN = () => {
  return <section id="pricing" className="py-20 bg-background">
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
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {["Privacy Policy (GDPR compliant)", "Terms and Conditions", "Cancellation Policy", "Disclaimer", "Cookie Policy", "Implementation Guide", "Unlimited websites", "Lifetime access", "Free updates", "Instant download"].map((feature, index) => <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>)}
              </ul>
              
              <div className="pt-6 border-t flex justify-center mt-6">
                <div 
                  className="[&_stripe-buy-button]:scale-125 [&_stripe-buy-button]:origin-center"
                  dangerouslySetInnerHTML={{
                    __html: `<stripe-buy-button
                      buy-button-id="buy_btn_1SKm3dFXIgtr666GOD7ZP6da"
                      publishable-key="pk_live_51SK0ndFXIgtr666GrmKudtOsf3HHcaBw06Ei3x8LbGKOYQ3oZeIrmpMpTfoTBJ5c7tPyFfbRC7pugHMC0l6b3ZKP009fgyIrGc"
                    ></stripe-buy-button>`
                  }}
                />
              </div>

              <p className="text-base font-semibold text-center text-muted-foreground mt-6">
                Secure payment via Stripe, automatically converted to your local currency.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default PricingTravelBookingEN;