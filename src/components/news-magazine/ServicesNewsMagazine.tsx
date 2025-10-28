import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, BookOpen, Scale, FileText, AlertTriangle, Cookie, CheckCircle, Euro, Clock } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "GDPR Privacy Policy",
    description: "Fully compliant with EU data protection regulations for news and magazine websites.",
    details: [
      "Reader data collection and usage",
      "Newsletter subscription handling",
      "Analytics and tracking disclosure",
      "Third-party advertising networks",
      "Social media integration",
      "User rights and data requests"
    ]
  },
  {
    icon: BookOpen,
    title: "Editorial Policy",
    description: "Professional standards that establish credibility and journalistic integrity.",
    details: [
      "Editorial independence guidelines",
      "Fact-checking procedures",
      "Corrections and updates policy",
      "Sources and attribution rules",
      "Conflicts of interest disclosure",
      "Sponsored content labeling"
    ]
  },
  {
    icon: Scale,
    title: "Copyright & Content Policy",
    description: "Protect your original articles, images, and creative work from unauthorized use.",
    details: [
      "Original content ownership",
      "Contributor rights agreements",
      "Fair use and quotations",
      "DMCA takedown procedures",
      "Image and media licensing",
      "Republication permissions"
    ]
  },
  {
    icon: FileText,
    title: "Terms & Conditions",
    description: "Comprehensive legal framework for your publication and reader relationship.",
    details: [
      "Content access and usage terms",
      "Subscription and payment terms",
      "User-generated content rules",
      "Commenting and community guidelines",
      "Account creation and management",
      "Termination and suspension rights"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Legal Disclaimer",
    description: "Limit liability and protect against legal claims related to published content.",
    details: [
      "Opinion and editorial protection",
      "Information accuracy disclaimer",
      "Third-party content liability",
      "External links disclaimer",
      "No professional advice clause",
      "Errors and omissions coverage"
    ]
  },
  {
    icon: Cookie,
    title: "Cookie Policy",
    description: "Transparent disclosure of all tracking technologies used on your website.",
    details: [
      "Essential cookies explanation",
      "Analytics cookies disclosure",
      "Advertising cookies notice",
      "Third-party tracking tools",
      "Cookie consent management",
      "User control options"
    ]
  }
];

const ServicesNewsMagazine = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">What's Included</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Essential Legal Documents for News & Magazine Websites
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every document your publication needs to operate legally and professionally. Created by legal experts specifically for news and magazine publishers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-6 text-center">
              <Euro className="h-12 w-12 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Save Thousands</h4>
              <p className="opacity-90">
                Get all documents for €79 instead of paying €2,000+ to lawyers for custom contracts.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-6 text-center">
              <Clock className="h-12 w-12 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Launch Faster</h4>
              <p className="opacity-90">
                Download and implement in minutes. No waiting weeks for lawyers to draft documents.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Stay Protected</h4>
              <p className="opacity-90">
                Avoid GDPR fines, copyright lawsuits, and reader privacy violations with professional documents.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesNewsMagazine;
