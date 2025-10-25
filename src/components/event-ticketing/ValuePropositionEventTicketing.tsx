import { Shield, FileText, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Shield,
    title: "Full Legal Protection",
    description: "Protect your event business from liability claims, disputes, and regulatory fines with comprehensive legal coverage."
  },
  {
    icon: FileText,
    title: "GDPR & Privacy Compliant",
    description: "All documents are fully compliant with GDPR, ePrivacy Directive, and consumer protection laws across Europe."
  },
  {
    icon: Clock,
    title: "Ready in 5 Minutes",
    description: "Download, customize with your event details, and publish immediately. No legal expertise required."
  },
  {
    icon: CheckCircle,
    title: "Lawyer-Verified Templates",
    description: "Created and reviewed by experienced legal professionals specializing in event and ticketing law."
  }
];

const ValuePropositionEventTicketing = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Legal Documents Are Essential for Event Organizers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Running events without proper legal documentation exposes you to significant risks. 
            Here's why our templates are crucial for your event business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionEventTicketing;
