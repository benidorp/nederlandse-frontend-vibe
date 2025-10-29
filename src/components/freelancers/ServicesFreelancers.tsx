import { Shield, FileText, Scale, Cookie, BookOpen, CheckCircle2, Euro, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: FileText,
    title: "Client Service Agreement",
    description: "Professional contract template for all your client engagements",
    details: [
      "Defines scope of work and deliverables",
      "Payment terms and invoice schedules",
      "Intellectual property rights protection",
      "Termination and cancellation clauses",
      "Dispute resolution procedures"
    ]
  },
  {
    icon: BookOpen,
    title: "Terms of Service",
    description: "Clear terms governing your freelance services",
    details: [
      "Service delivery expectations",
      "Client responsibilities and obligations",
      "Revision and feedback policies",
      "Project timeline guidelines",
      "Professional conduct standards"
    ]
  },
  {
    icon: Shield,
    title: "GDPR Privacy Policy",
    description: "Fully compliant with EU and international data protection laws",
    details: [
      "Client data handling procedures",
      "Information storage and security",
      "Third-party service disclosures",
      "Data subject rights (access, deletion)",
      "International data transfer compliance"
    ]
  },
  {
    icon: Scale,
    title: "Liability Disclaimer",
    description: "Protect yourself from liability claims and disputes",
    details: [
      "Limitation of liability clauses",
      "Professional indemnity protection",
      "No warranties or guarantees beyond agreement",
      "Third-party service disclaimers",
      "Force majeure provisions"
    ]
  },
  {
    icon: Cookie,
    title: "Cookie Policy",
    description: "Website cookie compliance and transparency",
    details: [
      "Types of cookies used explanation",
      "Purpose of data collection",
      "User consent management",
      "Third-party cookies disclosure",
      "Cookie control instructions"
    ]
  },
  {
    icon: CheckCircle2,
    title: "Implementation Guide",
    description: "Step-by-step instructions to implement your legal documents",
    details: [
      "How to customize each document",
      "Where to place policies on your website",
      "Client onboarding best practices",
      "Document storage recommendations",
      "Regular review and update guidelines"
    ]
  }
];

const ServicesFreelancers = () => {
  return (
    <section id="services" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Essential Legal Documents for Every Freelancer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive legal protection designed specifically for freelancers, self-employed professionals, 
            and independent contractors. Everything you need to work professionally and protect your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-10 w-10 mb-2" style={{ color: index % 2 === 0 ? '#3b82f6' : '#ef4444' }} />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#3b82f6' }} />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <Euro className="h-8 w-8 mb-3" style={{ color: '#3b82f6' }} />
              <h3 className="font-semibold text-lg mb-2">Save Thousands</h3>
              <p className="text-sm text-muted-foreground">
                Avoid expensive hourly lawyer fees. Get professional legal documents at a fraction of the cost.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <Clock className="h-8 w-8 mb-3" style={{ color: '#ef4444' }} />
              <h3 className="font-semibold text-lg mb-2">Instant Download</h3>
              <p className="text-sm text-muted-foreground">
                No waiting for lawyers. Download and start using your legal documents within minutes of purchase.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <Shield className="h-8 w-8 mb-3" style={{ color: '#3b82f6' }} />
              <h3 className="font-semibold text-lg mb-2">Minimize Risk</h3>
              <p className="text-sm text-muted-foreground">
                Protect yourself from payment disputes, liability claims, and legal complications with proper documentation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesFreelancers;
