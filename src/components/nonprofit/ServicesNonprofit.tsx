import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, Users, Heart, Scale, CheckCircle } from "lucide-react";

const ServicesNonprofit = () => {
  const services = [
    {
      icon: FileText,
      title: "Donation Terms & Conditions",
      description: "Complete legal framework for accepting donations, including one-time gifts, recurring donations, and major gifts. Covers tax deductibility, refund policies, and donor rights.",
      features: [
        "One-time & recurring donations",
        "Tax deductibility information",
        "Refund and cancellation terms",
        "Major gift agreements"
      ]
    },
    {
      icon: Shield,
      title: "GDPR Privacy Policy",
      description: "Comprehensive privacy policy specifically designed for non-profits, covering donor data, volunteer information, beneficiary privacy, and fundraising communications.",
      features: [
        "Donor data protection",
        "Volunteer information handling",
        "Beneficiary privacy",
        "Email marketing compliance"
      ]
    },
    {
      icon: Users,
      title: "Volunteer Agreement",
      description: "Protect your organization and volunteers with clear agreements covering responsibilities, liabilities, confidentiality, and termination procedures.",
      features: [
        "Role and responsibilities",
        "Liability protection",
        "Confidentiality clauses",
        "Termination procedures"
      ]
    },
    {
      icon: Heart,
      title: "Fundraising Disclosure",
      description: "Transparent disclosure statements showing donors how their contributions are used, administrative costs, and impact reporting requirements.",
      features: [
        "Fund allocation transparency",
        "Administrative cost disclosure",
        "Impact reporting",
        "Third-party fundraiser terms"
      ]
    },
    {
      icon: Scale,
      title: "Cookie Policy",
      description: "GDPR-compliant cookie policy for your non-profit website, covering analytics, donation tracking, and marketing cookies with proper consent mechanisms.",
      features: [
        "Cookie categorization",
        "Consent management",
        "Analytics tracking",
        "Third-party cookies"
      ]
    },
    {
      icon: CheckCircle,
      title: "Implementation Guide",
      description: "Step-by-step instructions for implementing all legal documents on your website, including placement recommendations and integration with donation platforms.",
      features: [
        "Document placement guide",
        "Donation platform integration",
        "Update procedures",
        "Compliance checklist"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Everything Your Non-Profit Needs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A complete legal package designed specifically for charitable organizations, 
              protecting your mission, donors, and volunteers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-2 border-primary/20 hover:border-primary/40 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-4 shadow-lg">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesNonprofit;
