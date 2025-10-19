import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, Cookie, AlertTriangle, Scale, Copyright } from "lucide-react";

const ServicesEN = () => {
  const services = [
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "GDPR/AVG Privacy Policy",
      description: "Fully compliant privacy policy that meets all GDPR/AVG requirements for affiliate websites.",
      details: [
        "Complete data protection compliance",
        "Cookie consent integration",
        "Third-party service disclosure",
        "User rights and contact information"
      ]
    },
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "Affiliate Disclosure",
      description: "Transparent disclosure of affiliate relationships as required by FTC and other regulatory bodies.",
      details: [
        "FTC compliant disclosure",
        "Clear affiliate relationship statement",
        "Commission disclosure",
        "Professional and trustworthy"
      ]
    },
    {
      icon: <Scale className="h-12 w-12 text-primary" />,
      title: "Terms & Conditions",
      description: "Complete terms and conditions that protect you and inform your visitors about the use of your website.",
      details: [
        "Liability limitations",
        "User obligations",
        "Intellectual property rights",
        "Dispute resolution procedures"
      ]
    },
    {
      icon: <Cookie className="h-12 w-12 text-primary" />,
      title: "Cookie Policy",
      description: "Detailed cookie policy compliant with ePrivacy Directive and GDPR requirements.",
      details: [
        "All cookie types explained",
        "Third-party cookies disclosure",
        "Cookie management instructions",
        "Legal compliance guaranteed"
      ]
    },
    {
      icon: <AlertTriangle className="h-12 w-12 text-primary" />,
      title: "Disclaimer",
      description: "Professional disclaimer that protects you against liability and clarifies the nature of your content.",
      details: [
        "Liability limitation",
        "Accuracy disclaimer",
        "External links disclaimer",
        "Professional advice disclaimer"
      ]
    },
    {
      icon: <Copyright className="h-12 w-12 text-primary" />,
      title: "Copyright Notice",
      description: "Clear copyright notice that protects your original content and intellectual property.",
      details: [
        "Copyright protection",
        "Content usage terms",
        "DMCA compliance",
        "Intellectual property rights"
      ]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Essential Legal Documents for Your Affiliate Website
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to comply with GDPR/AVG, FTC guidelines, and international legislation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-primary">€79</CardTitle>
              <CardDescription>One-time payment</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Complete package with all documents</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-primary">∞</CardTitle>
              <CardDescription>Unlimited websites</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Use on all your affiliate websites</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-primary">24/7</CardTitle>
              <CardDescription>Instant access</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Download immediately after payment</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesEN;
