import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Globe, Zap, FileText, Shield } from "lucide-react";
import nicoleWorking from "@/assets/nicole-working.png";
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({
    behavior: "smooth"
  });
};
const ValuePropositionElearning = () => {
  return <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Why Every E-Learning website Platform Needs Legal Protection</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Running an online education platform without proper legal documents is risky. Protect your courses, 
              your instructors, and your students with comprehensive legal coverage.
            </p>
          </div>

          {/* About Me Section with Photo */}
          <Card className="mb-12 overflow-hidden border-2 border-primary/20 shadow-2xl hover:shadow-3xl transition-all">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Photo */}
                <div className="relative h-full min-h-[400px]">
                  <img src={nicoleWorking} alt="Nicole Henderson working at her office" className="w-full h-full object-cover" />
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
                    Specialized in Legal Compliance for Educational Platforms
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    As a legal specialist in digital education and e-learning, I understand the unique challenges 
                    that educational platforms face. From course ownership rights to student data protection, 
                    from refund policies to instructor agreements - I have compiled a complete legal package 
                    that covers all your needs.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This package is used by educational platforms in more than 30 countries and provides complete 
                    legal protection according to the latest legislation, including GDPR compliance.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">500+ Platforms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">30+ Countries</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">10+ Years Experience</span>
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
                Complete E-Learning Legal Package
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {[{
                title: "Course Terms & Conditions",
                description: "Complete terms for course enrollment, access, completion, and certification"
              }, {
                title: "GDPR Privacy Policy",
                description: "Comprehensive privacy policy covering student data, learning analytics, and cookies"
              }, {
                title: "Refund & Cancellation Policy",
                description: "Clear refund conditions for courses, subscriptions, and early cancellations"
              }, {
                title: "Cookie Policy",
                description: "Complete cookie consent and tracking policy for your learning platform"
              }, {
                title: "Intellectual Property Policy",
                description: "Protection for course content, materials, and user-generated content"
              }, {
                title: "Implementation Guide",
                description: "Step-by-step instructions for implementing all documents on your platform"
              }].map((item, index) => <div key={index} className="flex gap-4 p-4 rounded-lg bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 hover:border-primary/40 transition-all">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-md">
                        <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>)}
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
                  Download immediately and implement on your platform within 30 minutes. No waiting, no lawyers needed.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-primary/20 hover:border-primary/40 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">For All Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  One-time investment covers unlimited courses, students, and instructors. Perfect for growing platforms.
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
                  GDPR-compliant and suitable for global student bases. Protect your platform worldwide.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Card - Premium styling */}
          <Card className="text-center bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/30 shadow-2xl">
            <CardContent className="pt-12 pb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Complete Legal Protection for Your E-Learning Platform
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Arrange all legal obligations for your educational platform. No monthly fees, no hassle with lawyers, 
                no risk of fines. Just all the documents you need, ready to use.
              </p>
              <Button size="lg" onClick={() => scrollToSection('pricing')} className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                Order Now
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                💡 Consider this: one hour with a lawyer already costs more
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ValuePropositionElearning;