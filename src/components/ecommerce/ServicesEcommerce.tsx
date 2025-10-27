import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, RotateCcw, Truck, Cookie, BookOpen } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Privacy Policy",
    description: "Comprehensive GDPR-compliant privacy policy for e-commerce",
    details: [
      "Customer data protection and security measures",
      "Payment information handling",
      "Third-party integrations and data sharing",
      "Customer rights and data access procedures"
    ]
  },
  {
    icon: RotateCcw,
    title: "Return & Refund Policy",
    description: "Clear procedures for returns, exchanges, and refunds",
    details: [
      "14-day cooling-off period compliance",
      "Return authorization process",
      "Refund timelines and methods",
      "Conditions for non-returnable items"
    ]
  },
  {
    icon: FileText,
    title: "Terms & Conditions",
    description: "Complete terms governing online sales and transactions",
    details: [
      "Product descriptions and accuracy",
      "Pricing and payment terms",
      "Order acceptance and cancellation",
      "Warranty and liability limitations"
    ]
  },
  {
    icon: Truck,
    title: "Shipping Policy",
    description: "Detailed shipping and delivery terms",
    details: [
      "Shipping methods and costs",
      "Delivery timeframes and tracking",
      "International shipping procedures",
      "Lost or damaged shipment protocols"
    ]
  },
  {
    icon: Cookie,
    title: "Cookie Policy",
    description: "Full cookie compliance and consent management",
    details: [
      "Essential and analytics cookies explained",
      "Marketing and tracking cookie disclosure",
      "User consent and cookie preferences",
      "Third-party cookie integration"
    ]
  },
  {
    icon: BookOpen,
    title: "Implementation Guide",
    description: "Easy-to-follow setup instructions",
    details: [
      "Platform-specific installation guides",
      "Customization and branding tips",
      "Best practices for legal page placement",
      "Ongoing compliance maintenance"
    ]
  }
];

const ServicesEcommerce = () => {
  return (
    <section id="services" className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Essential Legal Documents
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            For a successful e-commerce store, these legal documents are not optional—they're essential. 
            Our package contains everything your online business needs to operate legally and professionally.
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
              <CardTitle className="text-lg text-primary-foreground">Perfect for All E-commerce</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Whether you sell physical products, digital downloads, or services, our customizable documents 
                adapt to your business model. Suitable for Shopify, WooCommerce, custom platforms, and more!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">For ALL Your Stores</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Essential legal protection for all your e-commerce sites. Yes, you can use them across 
                multiple stores without purchasing separate licenses!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Minimize Your Risks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                While no document can guarantee complete protection, these legal policies are professionally 
                crafted to minimize risks, protect your business, and ensure compliance with consumer laws.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesEcommerce;
