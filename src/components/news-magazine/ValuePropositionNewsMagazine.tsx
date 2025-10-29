import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Scale, Shield, Cookie, AlertTriangle, BookOpen, Clock, Globe, Infinity } from "lucide-react";
import nicoleProfile from "@/assets/lawyer-office.png";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({
    behavior: "smooth"
  });
};

const ValuePropositionNewsMagazine = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Why You Need This</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Legal Protection for News & Magazine Publishers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Running a news or magazine website without proper legal documents puts you at risk of GDPR fines up to €20 million, copyright lawsuits, and reader privacy violations. Protect your publication today.
          </p>
        </div>

        {/* About Me Section */}
        <div id="about-me" className="mb-20">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src={nicoleProfile} 
                    alt="Nicole Henderson - Legal Specialist" 
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">About Me</h3>
                  <p className="text-muted-foreground mb-4">
                    Hi, I'm Nicole Henderson, a legal specialist with over 15 years of experience in media law, digital publishing, and GDPR compliance. I've helped hundreds of news publishers and magazine websites navigate the complex legal landscape of online journalism.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    I created this complete legal package specifically for news and magazine publishers who need professional, compliant documents without the expensive lawyer fees. Every document is crafted to protect both your publication and your readers.
                  </p>
                  <p className="text-muted-foreground">
                    My mission is to make legal compliance accessible and affordable for every publisher, from independent bloggers to established magazines.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What You Get */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Complete Legal Package for News & Magazine Websites
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">GDPR Privacy Policy</h4>
                <p className="text-muted-foreground">
                  Fully compliant with EU regulations, covering reader data, analytics, subscriptions, and third-party integrations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Editorial Policy</h4>
                <p className="text-muted-foreground">
                  Professional guidelines covering journalistic standards, fact-checking, corrections, and editorial independence.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Copyright Policy</h4>
                <p className="text-muted-foreground">
                  Protect your original content, define usage rights, handle DMCA takedowns, and manage contributor agreements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Terms & Conditions</h4>
                <p className="text-muted-foreground">
                  Comprehensive terms covering content usage, subscriptions, commenting policies, and user-generated content.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Legal Disclaimer</h4>
                <p className="text-muted-foreground">
                  Protect against liability for opinions, third-party content, external links, and information accuracy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Cookie className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Cookie Policy</h4>
                <p className="text-muted-foreground">
                  Complete transparency about cookies, tracking, analytics, and advertising technologies used on your site.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Ready in Minutes</h4>
              <p className="text-muted-foreground">
                Download, customize with your publication details, and publish. No legal expertise required.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Infinity className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">For All Your Publications</h4>
              <p className="text-muted-foreground">
                One purchase, unlimited use. Use on multiple magazines, news sites, or publications.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">International Use</h4>
              <p className="text-muted-foreground">
                Available in multiple languages. Expand your reach globally with compliant documentation.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Card */}
        <Card className="bg-primary text-primary-foreground max-w-4xl mx-auto">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Complete Legal Protection for Just €79
            </h3>
            <p className="text-lg mb-6 opacity-90">
              One-time payment. Lifetime access. All documents included. Compare to €2,000+ in lawyer fees.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => scrollToSection("pricing")}
              className="text-lg px-8"
            >
              Get Started Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ValuePropositionNewsMagazine;
