import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Privacy Policy",
    description: "Complete privacy policy compliant with GDPR for travel industry",
    details: [
      "Protection of booking and traveler data",
      "What data is collected during bookings",
      "How and why this data is used",
      "Data sharing with hotels and partners"
    ]
  },
  {
    icon: AlertCircle,
    title: "Disclaimer",
    description: "Legal protection against liability claims",
    details: [
      "No guarantee for availability",
      "Price changes reserved",
      "Liability for third-party services",
      "Force majeure and cancellations"
    ]
  },
  {
    icon: FileText,
    title: "Cancellation Terms",
    description: "Clear rules for cancellation and modification",
    details: [
      "Cancellation periods and costs",
      "Modification conditions",
      "Refund policy",
      "No-show regulations"
    ]
  },
  {
    icon: ScrollText,
    title: "Terms and Conditions",
    description: "Governs the relationship between your platform and customers",
    details: [
      "Booking conditions",
      "Payment obligations",
      "Platform usage restrictions",
      "Dispute resolution"
    ]
  },
  {
    icon: Cookie,
    title: "Cookie Policy",
    description: "Full cookie compliance and consent",
    details: [
      "Explanation of cookie usage",
      "GDPR-compliant consent",
      "Booking and tracking cookies",
      "Third-party cookies"
    ]
  },
  {
    icon: BookOpen,
    title: "Implementation Guide",
    description: "Step-by-step instructions for implementation",
    details: [
      "Simple installation instructions",
      "Proper placement of documents",
      "Customization tips for your platform",
      "Checklists and best practices"
    ]
  }
];

const ServicesTravelBookingEN = () => {
  return (
    <section id="services" className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Essential Legal Documents
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            For a travel booking or hotel website, the following legal documents are essential. 
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
              <CardTitle className="text-lg text-primary-foreground">Perfect for Travel Platforms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Specially designed for travel booking and hotel websites. All documents are tailored to the specific needs and regulations of the travel industry.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">For ALL Your Websites</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                The essential legal documents for all your travel platforms. Yes, you can use them for 
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
                While guarantees don't exist and no document can guarantee everything, these legal documents are designed to reduce your risks and provide you with maximum protection.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesTravelBookingEN;
