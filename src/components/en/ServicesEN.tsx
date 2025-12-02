import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Privacy Policy",
    description: "Complete privacy policy compliant with GDPR legislation",
    details: [
      "User rights under GDPR",
      "What data is collected",
      "How and why this data is used",
      "Data sharing with third parties"
    ]
  },
  {
    icon: AlertCircle,
    title: "Disclaimer",
    description: "Legal protection against liability claims",
    details: [
      "No guarantee for results",
      "No liability for information",
      "Notification of affiliate links and commissions"
    ]
  },
  {
    icon: FileText,
    title: "Affiliate Disclosure",
    description: "Transparent disclosure compliant with FTC guidelines",
    details: [
      "Transparency about advertisers",
      "Clear commission disclosure",
      "Compliance with EU and US regulations"
    ]
  },
  {
    icon: ScrollText,
    title: "Terms & Conditions",
    description: "Governs the relationship between your website and users",
    details: [
      "Limitation of liability",
      "Usage restrictions",
      "Intellectual property rights"
    ]
  },
  {
    icon: Cookie,
    title: "Cookie Policy",
    description: "Full cookie compliance and consent",
    details: [
      "Explanation of cookie usage",
      "GDPR-compliant consent",
      "Management of analytical cookies"
    ]
  },
  {
    icon: BookOpen,
    title: "Implementation Guide",
    description: "Step-by-step instructions for implementation",
    details: [
      "Simple installation instructions",
      "Correct placement of documents",
      "Customization tips for your website"
    ]
  }
];

const ServicesEN = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Essential Legal Documents
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            For an affiliate website, the following legal documents are essential. 
            Our package contains everything you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-card text-foreground border-border">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Perfect for All Affiliates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                With thousands of affiliate websites, our customizable documents are suitable for every affiliate business. 
                Focus on earning commissions—we've made legal compliance simple!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">For ALL Your Websites</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                The essential legal documents for all your affiliate site(s). Yes, you can use them for 
                ALL websites without having to purchase separate licenses!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Minimize Your Risks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                "While guarantees don't exist and no document can guarantee everything, these legal documents are designed to reduce your risks and provide you with maximum protection. They give you the certainty of clear and reliable terms."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesEN;
