import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Privacy Policy",
    description: "Complete privacy policy compliant with GDPR for streaming platforms",
    details: [
      "User data and viewing history protection",
      "Subscription and payment data handling",
      "Third-party integrations disclosure",
      "Analytics and tracking transparency"
    ]
  },
  {
    icon: AlertCircle,
    title: "DMCA Policy",
    description: "Copyright protection and takedown procedures",
    details: [
      "DMCA safe harbor compliance",
      "Counter-notification procedures",
      "Repeat infringer policy",
      "Content verification standards"
    ]
  },
  {
    icon: FileText,
    title: "Content License Agreement",
    description: "Clear terms for creators uploading content",
    details: [
      "Content ownership clarification",
      "Platform usage rights",
      "Revenue sharing terms",
      "Content removal procedures"
    ]
  },
  {
    icon: ScrollText,
    title: "Terms & Conditions",
    description: "Governs the relationship between your platform and users",
    details: [
      "User conduct and restrictions",
      "Subscription and payment terms",
      "Platform liability limitations",
      "Account termination procedures"
    ]
  },
  {
    icon: Cookie,
    title: "Cookie Policy",
    description: "Full cookie compliance for streaming analytics",
    details: [
      "Viewing behavior tracking",
      "Recommendation algorithm disclosure",
      "Third-party advertising cookies",
      "User preference management"
    ]
  },
  {
    icon: BookOpen,
    title: "Implementation Guide",
    description: "Step-by-step instructions for platform integration",
    details: [
      "Easy integration instructions",
      "Proper document placement",
      "Creator onboarding templates",
      "User notification best practices"
    ]
  }
];

const ServicesStreamingMedia = () => {
  return (
    <section id="services" className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Essential Legal Documents for Streaming Platforms
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            For a streaming and media platform, the following legal documents are essential. 
            Our package contains everything you need to operate legally and protect your content.
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
              <CardTitle className="text-lg text-primary-foreground">Perfect for All Content Creators</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Whether you're an influencer, media company, or coach offering streaming content, our customizable documents are suitable for every streaming business. 
                Focus on creating content—we've made legal compliance simple!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">For ALL Your Platforms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                The essential legal documents for all your streaming platform(s). Yes, you can use them for 
                ALL platforms without having to purchase separate licenses!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Minimize Your Legal Risks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                While no document can guarantee complete protection, these legal documents are designed to reduce your copyright risks and provide you with maximum protection. They give you the certainty of clear and reliable terms.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesStreamingMedia;
