import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Shield, Users, Lock, DollarSign, Globe } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Comprehensive Terms & Conditions",
    description: "Detailed user agreements covering review submission guidelines, comment policies, content usage rights, and platform rules specifically designed for comparison and review websites."
  },
  {
    icon: Shield,
    title: "GDPR-Compliant Privacy Policy",
    description: "Complete privacy documentation covering user data collection, cookie tracking, analytics, affiliate tracking, and third-party integrations with full GDPR and CCPA compliance."
  },
  {
    icon: DollarSign,
    title: "FTC-Compliant Affiliate Disclosure",
    description: "Clear and prominent affiliate relationship disclosures that meet FTC requirements while maintaining reader trust and transparency about compensation and partnerships."
  },
  {
    icon: Lock,
    title: "Liability Disclaimer & Opinion Protection",
    description: "Robust disclaimers protecting against product liability, accuracy claims, and third-party content while preserving your right to publish honest reviews and opinions."
  },
  {
    icon: Users,
    title: "User-Generated Content Policy",
    description: "Clear guidelines for user reviews, comments, and ratings including moderation rights, content ownership, and protection against defamatory or inappropriate submissions."
  },
  {
    icon: Globe,
    title: "Cookie Policy & Consent Management",
    description: "Detailed cookie tracking documentation covering analytics, advertising pixels, affiliate tracking, and third-party cookies with proper consent mechanisms for international compliance."
  }
];

const ServicesComparisonReview = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Legal Protection for Your Review Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized legal documents designed specifically for comparison websites, review blogs, and consumer advocacy platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow border-primary/10">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
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

export default ServicesComparisonReview;
