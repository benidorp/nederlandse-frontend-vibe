import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle2 } from "lucide-react";

const CTABoxFreelancers = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container">
        <Card className="bg-primary text-primary-foreground shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="flex justify-center mb-4">
                <Shield className="h-16 w-16" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold">
                Protect Your Freelance Business Today
              </h2>
              
              <p className="text-lg text-primary-foreground/90">
                Get instant access to all professional legal documents you need. 
                One-time payment of just €79 for lifetime protection.
              </p>

              <div className="flex flex-wrap gap-4 justify-center my-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Ready in minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Unlimited use</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>GDPR compliant</span>
                </div>
              </div>

              <Button 
                size="lg" 
                onClick={() => scrollToSection("pricing")}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 h-auto"
              >
                Order Now - Just €79
              </Button>

              <p className="text-sm text-primary-foreground/80">
                Instant download after payment • No subscription • Money-back guarantee
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTABoxFreelancers;
