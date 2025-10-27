import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Globe, Zap, FileText, Shield } from "lucide-react";
import nicoleProfile from "@/assets/nicole-nonprofit-clear.png";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

const ValuePropositionNonprofit = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Why Every Non-Profit Needs Legal Protection
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Running a charitable organization without proper legal documents puts your mission, donors, and volunteers at risk. 
              Protect everything you've built with comprehensive legal coverage.
            </p>
          </div>

          {/* About Me Section with Photo */}
          <Card className="mb-12 overflow-hidden border-2 border-primary/20 shadow-2xl hover:shadow-3xl transition-all">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Photo */}
                <div className="relative h-full min-h-[400px]">
                  <img 
                    src={nicoleProfile} 
                    alt="Nicole Henderson - Non-Profit Legal Specialist" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80"></div>
                </div>
                
                {/* Text Content */}
                <div className="p-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 rounded-full mb-6 shadow-lg">
                    <Shield className="w-5 h-5" />
                    <span className="font-semibold">About Me</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">
                    Nicole Henderson
                  </h3>
                  <p className="text-lg font-semibold text-primary mb-4">
                    Specialized in Non-Profit & Charity Law
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    As a legal specialist focused on charitable organizations and non-profits, I understand the unique 
                    challenges you face. From donor protection and fundraising compliance to volunteer agreements and 
                    grant requirements - I've created a complete legal package that covers all your needs while keeping 
                    costs low so more funds go to your mission.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This package is used by non-profit organizations in over 35 countries and provides complete 
                    legal protection according to the latest legislation, including GDPR compliance and charity regulations.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">400+ Organizations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">35+ Countries</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">12+ Years Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* What's included - Enhanced styling */}
          <Card className="mb-12 border-2 border-primary/30 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/60 text-primary-foreground">
              <CardTitle className="text-3xl flex items-center gap-3">
                <FileText className="w-8 h-8" />
                Complete Non-Profit Legal Package
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Donation Terms & Conditions",
                    description: "Complete terms for one-time donations, recurring giving, and major gifts"
                  },
                  {
                    title: "GDPR Privacy Policy",
                    description: "Comprehensive privacy policy covering donor data, volunteer information, and cookies"
                  },
                  {
                    title: "Volunteer Agreement",
                    description: "Clear agreements protecting both your organization and volunteers"
                  },
                  {
                    title: "Cookie Policy",
                    description: "Complete cookie consent and tracking policy for your website"
                  },
                  {
                    title: "Fundraising Disclosure",
                    description: "Transparent disclosure of how donations are used and managed"
                  },
                  {
                    title: "Implementation Guide",
                    description: "Step-by-step instructions for implementing all documents on your website"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 hover:border-primary/40 transition-all">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-md">
                        <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Benefits Grid - Extra styling */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center border-2 border-primary/20 hover:border-primary/40 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                  <Clock className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Ready in Minutes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Download immediately and implement on your website within 30 minutes. No waiting, no lawyers needed.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-primary/20 hover:border-primary/40 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">One-Time Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  One payment covers unlimited donors, volunteers, and campaigns. More funds for your mission.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-primary/20 hover:border-primary/40 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                  <Globe className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">International Use</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  GDPR-compliant and suitable for global fundraising. Protect your organization worldwide.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Card - Premium styling */}
          <Card className="text-center bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/30 shadow-2xl">
            <CardContent className="pt-12 pb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Complete Legal Protection for Your Non-Profit
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Arrange all legal obligations for your charitable organization. No monthly fees, no hassle with lawyers, 
                no risk of fines. Just all the documents you need, ready to use.
              </p>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('pricing')}
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                Order Now
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                💡 One hour with a lawyer costs more - invest in your mission instead
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionNonprofit;
