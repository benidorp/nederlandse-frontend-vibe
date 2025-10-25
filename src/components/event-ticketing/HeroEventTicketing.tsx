import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2 } from "lucide-react";

const HeroEventTicketing = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 text-primary">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Complete Legal Protection for Event Organizers</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Legal Documents for Event & Ticketing Platforms
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Protect your event business with professionally crafted legal documents. 
            GDPR-compliant templates for terms & conditions, privacy policy, refund policy, and liability disclaimers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={scrollToPricing} className="text-lg px-8">
              Get Complete Package - €79
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              "GDPR Compliant",
              "Ready to Use Templates",
              "Lifetime Updates"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 justify-center md:justify-start">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEventTicketing;
