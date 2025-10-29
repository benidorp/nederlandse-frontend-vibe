import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, Scale, Globe, Clock, CheckCircle2 } from "lucide-react";
import profileImage from "@/assets/nicole-freelancer-profile.png";

const ValuePropositionFreelancers = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Complete Legal Protection</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Every Freelancer Needs Legal Documents
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            As a freelancer or independent contractor, protecting yourself legally is essential. 
            Without proper documentation, you risk payment disputes, liability claims, and legal complications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4 items-start">
                <img 
                  src={profileImage} 
                  alt="Nicole Henderson - Legal Specialist for Freelancers" 
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">Nicole Henderson</h3>
                  <p className="text-sm text-muted-foreground">Legal Specialist & Freelance Consultant</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                With over 10 years of experience advising freelancers, self-employed professionals, and independent contractors, 
                I've created this comprehensive legal package to protect your business. These documents have been reviewed 
                by legal experts and are designed specifically for the unique needs of freelance work.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What You Get</CardTitle>
              <CardDescription>Complete legal protection package</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <FileText className="h-5 w-5 mt-0.5" style={{ color: '#3b82f6' }} />
                  <div>
                    <h4 className="font-semibold">Client Service Agreement</h4>
                    <p className="text-sm text-muted-foreground">Professional contract template for all client engagements</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FileText className="h-5 w-5 mt-0.5" style={{ color: '#ef4444' }} />
                  <div>
                    <h4 className="font-semibold">Terms of Service</h4>
                    <p className="text-sm text-muted-foreground">Clear terms for your freelance services</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="h-5 w-5 mt-0.5" style={{ color: '#3b82f6' }} />
                  <div>
                    <h4 className="font-semibold">GDPR Privacy Policy</h4>
                    <p className="text-sm text-muted-foreground">Compliant with EU and international data protection laws</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Scale className="h-5 w-5 mt-0.5" style={{ color: '#ef4444' }} />
                  <div>
                    <h4 className="font-semibold">Liability Disclaimer</h4>
                    <p className="text-sm text-muted-foreground">Protect yourself from liability claims</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FileText className="h-5 w-5 mt-0.5" style={{ color: '#3b82f6' }} />
                  <div>
                    <h4 className="font-semibold">Cookie Policy</h4>
                    <p className="text-sm text-muted-foreground">Website cookie compliance documentation</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5" style={{ color: '#ef4444' }} />
                  <div>
                    <h4 className="font-semibold">Implementation Guide</h4>
                    <p className="text-sm text-muted-foreground">Step-by-step instructions for easy setup</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Clock className="h-8 w-8 mb-2" style={{ color: '#3b82f6' }} />
              <CardTitle>Ready in Minutes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Download immediately after purchase. Customize with your details and start using right away.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Globe className="h-8 w-8 mb-2" style={{ color: '#ef4444' }} />
              <CardTitle>For All Your Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Use these documents for unlimited clients and projects. One-time investment, lifetime protection.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 mb-2" style={{ color: '#3b82f6' }} />
              <CardTitle>International Use</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Work with clients worldwide. Documents comply with international standards including GDPR.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Complete Legal Package - Just €79</h3>
              <p className="text-lg text-primary-foreground/90">
                Save thousands compared to hiring a lawyer. Get professional protection for your freelance business today.
              </p>
              <Button 
                size="lg" 
                onClick={() => scrollToSection("pricing")}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Get Started Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ValuePropositionFreelancers;
