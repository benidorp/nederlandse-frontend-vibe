import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, RotateCcw, Truck, Cookie, BookOpen } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "GDPR Privacy Policy",
    description: "Complete privacy protection for your webshop customers",
    details: [
      "Customer data collection and processing",
      "Secure payment information handling",
      "Third-party service provider disclosures",
      "Data subject rights and access requests"
    ]
  },
  {
    icon: RotateCcw,
    title: "Return & Refund Policy",
    description: "Transparent return procedures for online purchases",
    details: [
      "Statutory cooling-off period implementation",
      "Return request and approval workflow",
      "Refund processing timelines",
      "Exceptions and non-returnable products"
    ]
  },
  {
    icon: FileText,
    title: "Terms & Conditions",
    description: "Comprehensive terms for online sales and services",
    details: [
      "Product accuracy and specifications",
      "Payment processing and pricing",
      "Order confirmation and fulfillment",
      "Limitation of liability clauses"
    ]
  },
  {
    icon: Truck,
    title: "Shipping Policy",
    description: "Clear shipping terms for customer expectations",
    details: [
      "Shipping options and pricing structure",
      "Estimated delivery times and tracking",
      "Cross-border shipping guidelines",
      "Damaged or missing package procedures"
    ]
  },
  {
    icon: Cookie,
    title: "Cookie Policy",
    description: "Complete cookie disclosure and consent framework",
    details: [
      "Technical and functional cookies explained",
      "Analytics and performance tracking",
      "Marketing cookie management",
      "Cookie consent mechanism integration"
    ]
  },
  {
    icon: BookOpen,
    title: "Implementation Guide",
    description: "Step-by-step integration instructions",
    details: [
      "Webshop platform integration guides",
      "Brand customization instructions",
      "Legal page positioning best practices",
      "Compliance maintenance guidelines"
    ]
  }
];

const ServicesOnlineShop = () => {
  return (
    <section id="services" className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Essential Legal Documents
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Operating a webshop without these legal documents isn't just risky—it's potentially illegal. 
            Our package includes everything your online business requires for legal operation and professional credibility.
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
              <CardTitle className="text-lg text-primary-foreground">Perfect for All Webshops</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Whether you run a small boutique webshop or a large online marketplace, our adaptable documents 
                fit your business needs. Compatible with WooCommerce, Magento, PrestaShop, and custom platforms!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Unlimited Usage Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Comprehensive legal coverage for all your online ventures. Use these documents across 
                multiple webshops and internet businesses with a single purchase!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Risk Mitigation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                While no legal document offers absolute protection, these professionally crafted policies 
                significantly reduce risks, protect your business interests, and ensure compliance with consumer protection laws.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesOnlineShop;
