import { Card, CardContent } from "@/components/ui/card";
import { FileText, Shield, Cookie, AlertCircle, Scale, CreditCard } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Terms & Conditions",
    description: "Comprehensive terms covering ticket sales, event cancellations, age restrictions, venue rules, prohibited items, and attendee responsibilities."
  },
  {
    icon: Shield,
    title: "Privacy Policy (GDPR)",
    description: "Complete privacy policy explaining data collection, processing of personal information, ticket buyer rights, and third-party data sharing."
  },
  {
    icon: Cookie,
    title: "Cookie Policy",
    description: "Detailed cookie policy for your ticketing website covering tracking cookies, analytics, payment processing, and user consent management."
  },
  {
    icon: AlertCircle,
    title: "Liability Disclaimer",
    description: "Protection against injury claims, property damage, event changes, force majeure situations, and third-party vendor issues."
  },
  {
    icon: CreditCard,
    title: "Refund & Cancellation Policy",
    description: "Clear refund terms, cancellation conditions, rescheduling policies, and procedures for event modifications or cancellations."
  },
  {
    icon: Scale,
    title: "Event Waiver & Release",
    description: "Legal release forms for attendees acknowledging risks, photo/video consent, and waiving certain liability claims."
  }
];

const ServicesEventTicketing = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Legal Document Package
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to legally operate your event or ticketing platform, 
            from ticket sales to attendee management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 p-3 rounded-lg bg-primary/10 text-primary w-fit">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesEventTicketing;
