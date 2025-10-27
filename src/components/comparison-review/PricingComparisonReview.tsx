import { Badge } from "@/components/ui/badge";

const PricingComparisonReview = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Pricing</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Legal Package for Review Websites
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One-time investment for lifetime legal protection of your comparison and review platform
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border-2 border-primary/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Complete Legal Documents Package</h3>
              <p className="text-muted-foreground">Everything you need to protect your review website</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-foreground">Comprehensive Terms & Conditions for review platforms</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-foreground">GDPR & CCPA compliant Privacy Policy</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-foreground">FTC-compliant Affiliate Disclosure</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-foreground">Liability Disclaimer & Opinion Protection</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-foreground">User-Generated Content Policy</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-foreground">Cookie Policy with consent mechanisms</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-foreground">Advertising & Sponsorship Disclosure templates</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-foreground">Easy implementation guide included</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-foreground">Available in multiple languages</p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="text-4xl font-bold text-primary mb-2">€79</div>
              <p className="text-muted-foreground mb-6">One-time payment • Lifetime access • All documents included</p>
              
              <stripe-buy-button
                buy-button-id="buy_btn_1QZd3zP6r5mPIV8XTQxYSX1v"
                publishable-key="pk_live_51QZcpRP6r5mPIV8X3vsWaJYMXQCyxY4BHZY7I70yMTbgLBCCjAGD0yQlgfPtRu0W0CeVCTojk6zGZuOZOQlBhGhL00E2zQIJXF"
              >
              </stripe-buy-button>
              
              <p className="text-sm text-muted-foreground mt-4">
                Secure payment powered by Stripe • Instant download after purchase
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComparisonReview;
