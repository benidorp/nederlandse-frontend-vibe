import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, FileCheck, Users } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Legal Protection",
    description: "Protect your travel platform against legal risks with professionally drafted documents"
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Ready-to-use templates save hundreds of hours compared to creating from scratch"
  },
  {
    icon: FileCheck,
    title: "GDPR Compliant",
    description: "All documents are fully compliant with GDPR and privacy legislation"
  },
  {
    icon: Users,
    title: "Build Trust",
    description: "Professional legal documents increase customer trust in your booking platform"
  }
];

const ValuePropositionTravelBookingEN = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Our Legal Documents?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specially designed for travel booking and hotel platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="bg-card text-foreground border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionTravelBookingEN;
