import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, AlertTriangle } from "lucide-react";
import stripeLogo from "@/assets/stripe-logo.svg";

const includedItems = [
  "Client Service Agreement Template",
  "Terms of Service Document",
  "GDPR-Compliant Privacy Policy",
  "Liability Disclaimer",
  "Cookie Policy",
  "Implementation Guide & Instructions",
  "Unlimited Use for All Your Clients"
];

const PricingFreelancers = () => {
  return (
    <section id="pricing" className="py-16 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Special Offer</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Legal Protection Package
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to protect your freelance business and work professionally with clients worldwide. 
            One-time payment, lifetime access.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-primary shadow-lg">
            <CardHeader className="text-center pb-8">
              <div className="mb-4">
                <span className="text-5xl font-bold">€79</span>
                <span className="text-muted-foreground ml-2">one-time</span>
              </div>
              <CardTitle className="text-2xl">Freelancer Legal Protection Package</CardTitle>
              <CardDescription className="text-base">
                Complete set of professional legal documents for freelancers and independent contractors
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {includedItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t flex justify-center">
                <div 
                  className="[&_stripe-buy-button]:scale-125 [&_stripe-buy-button]:origin-center"
                  dangerouslySetInnerHTML={{
                    __html: `<stripe-buy-button
                      buy-button-id="buy_btn_1QbVzqP59jeztTKHgDXFhBCj"
                      publishable-key="pk_live_51QbVvSP59jeztTKHGPAUJfzp9zMVJPyakuwdpj8WmInPjVk1HzHDqbMZcmH2Yq7ktowv7RHC5sAbQR1c3WcJmLW800JELcR7Bv"
                    ></stripe-buy-button>`
                  }}
                />
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <img src={stripeLogo} alt="Stripe" className="h-6" />
                <span>Secure payment via Stripe</span>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Important:</strong> Due to the digital nature of this product, 
                    no returns are possible after download. All documents are delivered immediately after payment.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingFreelancers;
