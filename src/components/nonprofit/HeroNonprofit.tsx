import { Button } from "@/components/ui/button";
import { Heart, Shield, CheckCircle } from "lucide-react";
import nicoleWorking from "@/assets/nicole-working.png";
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({
    behavior: "smooth"
  });
};
const HeroNonprofit = () => {
  return <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/60 text-primary-foreground px-6 py-2 rounded-full mb-8 shadow-lg animate-fade-in">
                <Heart className="w-5 h-5" />
                <span className="font-semibold">Legal Protection for Charitable Organizations</span>
              </div>

              {/* Main heading */}
              <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent animate-fade-in leading-tight md:text-4xl">Essential Legal Documents for Non-Profit & Charity Websites: Donation Terms, Privacy Policy, Volunteer Agreements & GDPR Compliance</h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in">
                Protect your mission, donors, and volunteers with professionally crafted legal documents. 
                GDPR-compliant, donation-ready, and trusted by charities worldwide.
              </p>

              {/* USPs */}
              <div className="grid grid-cols-1 gap-3 mb-10 animate-fade-in">
                {["Donation Terms & Conditions", "Donor Privacy Protection", "Volunteer Agreements", "100% GDPR Compliant"].map((item, index) => <div key={index} className="flex items-center gap-2 bg-card/50 backdrop-blur px-4 py-2 rounded-lg border border-primary/20 shadow-sm hover:shadow-md transition-all">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="font-medium">{item}</span>
                  </div>)}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 animate-fade-in">
                <Button size="lg" onClick={() => scrollToSection('pricing')} className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                  <Shield className="w-5 h-5 mr-2" />
                  Protect Your Organization Now
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')} className="text-lg px-8 py-6 border-2 hover:bg-primary/5">
                  See What's Included
                </Button>
              </div>

              {/* Trust indicator */}
              <p className="mt-8 text-sm text-muted-foreground animate-fade-in">
                ⚡ Instant download • 🔒 Secure payment • ✅ Money-back guarantee
              </p>
            </div>

            {/* Right side - Nicole's photo */}
            <div className="relative animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
                <img src={nicoleWorking} alt="Nicole Henderson - Non-Profit Legal Specialist" className="relative rounded-3xl shadow-2xl w-full h-auto border-4 border-primary/20" />
                <div className="absolute bottom-4 left-4 bg-gradient-to-br from-card/98 via-primary/5 to-card/98 backdrop-blur-md rounded-xl px-5 py-3 border border-primary/40 shadow-2xl hover:shadow-primary/20 hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">Nicole Henderson</h3>
                  <p className="text-xs font-medium text-muted-foreground">Non-Profit Legal Specialist</p>
                  <p className="text-xs text-muted-foreground/80 mt-1 flex items-center gap-1">
                    <Shield className="w-3 h-3 text-primary" />
                    Protecting charities worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroNonprofit;