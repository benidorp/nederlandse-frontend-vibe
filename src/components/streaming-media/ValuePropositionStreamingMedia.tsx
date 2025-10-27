import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, FileCheck } from "lucide-react";
import nicoleProfile from "@/assets/nicole-working.png";

const ValuePropositionStreamingMedia = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
              Professional Legal Documents for Streaming & Media Platforms
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              All Legally Required Documents Your Streaming Platform Needs
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              As a streaming platform owner or content creator, you share videos, music, or live broadcasts. But did you know that you're 
              <strong> legally required</strong> to have specific legal documents on your platform? 
              Without these documents, you risk copyright claims, DMCA takedowns, and serious legal issues.
            </p>
            
            <div id="about-me" className="mt-10 p-8 bg-secondary/30 rounded-xl border border-border shadow-sm text-foreground">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">About Me</h3>
                <div className="flex justify-center my-4">
                  <img 
                    src={nicoleProfile} 
                    alt="Nicole Henderson - Legal specialist for media creators" 
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                  />
                </div>
                <p className="text-2xl font-bold text-primary mb-2">Nicole Henderson</p>
                <p className="text-lg text-muted-foreground font-medium">
                  Legal specialist specialized in clear, precise, and professional legal documents
                </p>
              </div>
              
              <div className="space-y-4 text-left max-w-3xl mx-auto">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Hello, I'm Nicole Henderson, a legal writer specializing in clear, accurate, and professional legal documents. I draft contracts, policies, and agreements for businesses, organizations, and individuals that protect your interests and ensure compliance, making legal paperwork simple and stress-free.
                </p>
                
                <div className="pt-4">
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    Professional Legal Documents for Streaming & Media Platforms
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    To answer the many questions about legal requirements for streaming platforms, I've developed high-quality legal documents specifically for media websites. These documents are designed for both national and international use and provide essential protection at a fraction of the usual cost. Get professional legal coverage at an affordable price—secure your platform today!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8 border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                What You Get: The Complete Legal Package
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Our complete package contains <strong>all legal documents specifically written for streaming and media platforms</strong>. 
                Not generic templates, but professional texts that perfectly align with your content distribution model:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">GDPR Privacy Policy</h4>
                    <p className="text-sm text-muted-foreground">Fully compliant with European legislation, including user data and viewing analytics</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Content License Agreement</h4>
                    <p className="text-sm text-muted-foreground">Clear terms for content creators uploading to your platform</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Terms & Conditions</h4>
                    <p className="text-sm text-foreground/80">Protects you from liability and regulates platform usage</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">DMCA Policy</h4>
                    <p className="text-sm text-foreground/80">Copyright protection and takedown procedures</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Cookie Policy</h4>
                    <p className="text-sm text-foreground/80">GDPR compliant, explanation of streaming analytics and tracking</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Implementation Guide</h4>
                    <p className="text-sm text-foreground/80">Step-by-step instructions to place everything correctly on your platform</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-primary/20 bg-primary/5 text-foreground">
              <CardContent className="pt-6">
                <Zap className="h-10 w-10 text-navy mb-4" />
                <h3 className="text-lg font-bold mb-2 text-foreground">Ready in Minutes</h3>
                <p className="text-sm text-foreground/80">
                  Download, customize with your platform details, and implement immediately. No lawyer needed, no weeks of waiting.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5 text-foreground">
              <CardContent className="pt-6">
                <FileCheck className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">For All Your Platforms</h3>
                <p className="text-sm text-muted-foreground">
                  One purchase, unlimited use. Use these documents for all your current and future streaming platforms!
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5 text-foreground">
              <CardContent className="pt-6">
                <Shield className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">International Use</h3>
                <p className="text-sm text-muted-foreground">
                  The templates are available for download in multiple languages for international use, so you can deploy them on all your platforms worldwide.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary border-2 border-primary text-primary-foreground">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                Fully compliant with GDPR, DMCA and international copyright laws. Option to download in different languages for international use. Complete protection for your platform.
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                For only <strong className="text-primary-foreground">€79 one-time</strong> you arrange all legal obligations 
                for all your streaming platforms. No monthly fees, no hassle with lawyers, no risk of copyright claims. 
                Just all the documents you need, ready to use.
              </p>
              <Button 
                size="lg" 
                onClick={() => scrollToSection("pricing")} 
                className="group text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Order Now for €79
                <CheckCircle className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-primary-foreground/80 mt-4">
                💡 Consider this: one hour with a media lawyer already costs more than €250
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionStreamingMedia;
