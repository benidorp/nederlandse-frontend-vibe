import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen, Camera } from "lucide-react";
const services = [{
  icon: ScrollText,
  title: "Terms & Conditions",
  description: "Comprehensive terms specifically designed for photographers",
  details: ["Service fees and payment terms", "Assignment execution and delivery", "Copyright and portrait rights protection", "Cancellation and rescheduling policies"]
}, {
  icon: FileText,
  title: "Assignment Agreement (Offerte)",
  description: "Professional contract template with email examples",
  details: ["Ready-to-use template document", "Sample agreement included", "Copy-paste email message templates", "Customizable for your services"]
}, {
  icon: Shield,
  title: "Privacy Policy",
  description: "GDPR-compliant privacy policy for photographers",
  details: ["Contact form data protection", "Client information handling", "Photography-specific privacy terms", "Mandatory for website contact forms"]
}, {
  icon: Cookie,
  title: "Cookie Policy",
  description: "Full cookie compliance according to GDPR",
  details: ["Specifically designed for photographers", "Complete GDPR compliance", "Cookie usage explanation", "Consent management guidelines"]
}, {
  icon: AlertCircle,
  title: "Disclaimer",
  description: "Protect your photos and content from unauthorized use",
  details: ["Photo and content protection", "Clear ownership statements", "Copyright infringement warnings", "Usage restrictions and permissions"]
}, {
  icon: Camera,
  title: "Quitclaim",
  description: "Legal protection and clear agreements with subjects",
  details: ["Pre-shoot legal coverage", "Clear agreements with subjects", "Model release provisions", "Portrait rights protection"]
}, {
  icon: BookOpen,
  title: "Copyright Protection (Auteursrecht)",
  description: "International copyright terms for your photography",
  details: ["Worldwide copyright protection", "Usage licensing guidelines", "Attribution requirements", "Infringement enforcement"]
}];
const ServicesPhotography = () => {
  return <section id="services" className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Essential Legal Documents for Photographers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">For a professional  photography business, the following legal documents are essential for your website. Our package contains everything you need to protect your work and business.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
          const Icon = service.icon;
          return <Card key={index} className="hover:shadow-lg transition-shadow bg-card text-foreground border-border">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>{detail}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>;
        })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Perfect for All Photographers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Whether you're a portrait, wedding, commercial, or event photographer, our customizable documents are suitable for every photography business. 
                Focus on your craft—we've made legal compliance simple!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">For ALL Your Photography Websites</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                The essential legal documents for all your photography website(s). Yes, you can use them for 
                ALL websites without having to purchase separate licenses!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Protect Your Work & Business</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                While guarantees don't exist and no document can guarantee everything, these legal documents are designed to reduce your risks and provide you with maximum protection for your photography business and creative work.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ServicesPhotography;