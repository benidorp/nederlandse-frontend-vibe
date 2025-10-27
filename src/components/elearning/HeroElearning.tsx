import { Button } from "@/components/ui/button";
import { GraduationCap, Shield, CheckCircle } from "lucide-react";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

const HeroElearning = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/60 text-primary-foreground px-6 py-2 rounded-full mb-8 shadow-lg animate-fade-in">
            <GraduationCap className="w-5 h-5" />
            <span className="font-semibold">Legal Protection for Online Education</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent animate-fade-in leading-tight">
            Complete Legal Documents for Your E-Learning Platform
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Protect your online courses, instructors, and students with professionally crafted legal documents. 
            GDPR-compliant, ready to use, and trusted by educational platforms worldwide.
          </p>

          {/* USPs */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in">
            {[
              "Course Terms & Conditions",
              "Student Privacy Protection",
              "Intellectual Property Rights",
              "100% GDPR Compliant"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-card/50 backdrop-blur px-4 py-2 rounded-lg border border-primary/20 shadow-sm hover:shadow-md transition-all">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('pricing')}
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <Shield className="w-5 h-5 mr-2" />
              Protect Your Platform Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('services')}
              className="text-lg px-8 py-6 border-2 hover:bg-primary/5"
            >
              See What's Included
            </Button>
          </div>

          {/* Trust indicator */}
          <p className="mt-8 text-sm text-muted-foreground animate-fade-in">
            ⚡ Instant download • 🔒 Secure payment • ✅ Money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroElearning;
