import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Globe, FileCheck } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Complete Legal Security",
    description: "Protect your webshop with professionally drafted legal documents that cover all aspects of online retail operations and customer interactions."
  },
  {
    icon: Globe,
    title: "International Compliance",
    description: "Stay compliant with EU regulations, GDPR requirements, and international e-commerce laws. Perfect for webshops serving customers across borders."
  },
  {
    icon: FileCheck,
    title: "Ready to Implement",
    description: "Download and deploy immediately. Our legal documents come with clear implementation instructions for any webshop platform or custom solution."
  }
];

const ValuePropositionOnlineShop = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Your Webshop Needs Professional Legal Documents
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Running an online business without proper legal documentation exposes you to significant risks. 
            Our comprehensive package provides everything your webshop needs to operate legally and build customer trust.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-red-600 flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionOnlineShop;
