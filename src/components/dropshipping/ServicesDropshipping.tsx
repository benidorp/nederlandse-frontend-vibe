import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, Users, AlertTriangle, Cookie, Truck } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "GDPR Privacy Policy",
    description: "Complete privacy policy that complies with all European privacy laws (GDPR). Specifically tailored for dropshipping businesses handling customer data and supplier relationships."
  },
  {
    icon: FileText,
    title: "Return & Refund Policy",
    description: "Clear and legally compliant return policy. Essential for dropshipping to manage customer expectations regarding return processes and handling times with suppliers."
  },
  {
    icon: Users,
    title: "Terms & Conditions",
    description: "Professional terms and conditions that protect your dropshipping business and clearly outline customer rights and obligations, including delivery timeframes."
  },
  {
    icon: Truck,
    title: "Shipping Policy",
    description: "Detailed shipping policy explaining delivery times, costs, and processes specific to dropshipping operations with extended fulfillment periods."
  },
  {
    icon: Cookie,
    title: "Cookie Policy",
    description: "GDPR-compliant cookie policy explaining how your dropshipping store uses cookies for tracking, analytics, and improving user experience."
  },
  {
    icon: AlertTriangle,
    title: "Implementation Guide",
    description: "Step-by-step guide for implementing all documents correctly on your dropshipping store. Makes the legal setup process quick and hassle-free."
  }
];

const ServicesDropshipping = () => {
  return (
    <section id="services" className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">What's Included</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Legal Protection for Dropshipping Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to legally operate your dropshipping store with confidence and comply with international regulations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesDropshipping;
