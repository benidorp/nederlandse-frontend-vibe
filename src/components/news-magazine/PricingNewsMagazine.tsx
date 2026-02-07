import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, AlertTriangle } from "lucide-react";
import stripeLogo from "@/assets/stripe-logo.svg";
import StripeBuyButton from "@/components/StripeBuyButton";
const includedItems = ["GDPR Privacy Policy", "Editorial Policy & Guidelines", "Copyright & Content Policy", "Terms & Conditions", "Legal Disclaimer", "Cookie Policy", "Implementation Guide"];
const PricingNewsMagazine = () => {
  return <section id="pricing" className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Pricing</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Legal Package for News & Magazine Websites
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All essential legal documents for your publication. Download in your language – or multiple languages – and protect your news or magazine website internationally.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-primary shadow-xl">
            <CardHeader className="text-center pb-8">
              
              <CardTitle className="text-2xl">Complete Document Package</CardTitle>
              <CardDescription className="text-base">
                All essential legal documents for unlimited use
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {includedItems.map((item, index) => <div key={index} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>)}
              </div>

              <div className="pt-6 border-t flex justify-center">
                <StripeBuyButton />
              </div>

              <div className="flex items-center justify-center gap-2 mt-4">
                <img src={stripeLogo} alt="Stripe" className="h-5 w-5" />
                <p className="text-sm font-medium text-muted-foreground">
                  Secure payment via Stripe • Automatically converted to your local currency
                </p>
              </div>

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
        </div>
      </div>
    </section>;
};
export default PricingNewsMagazine;