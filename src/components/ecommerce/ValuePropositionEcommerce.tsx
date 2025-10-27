import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, Globe, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import nicoleProfile from "@/assets/nicole-profile.png";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({
    behavior: "smooth"
  });
};

const ValuePropositionEcommerce = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Why You Need This</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Legal Compliance for E-commerce Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Running an online store without proper legal documents is a significant risk. Consumer protection laws, 
            GDPR regulations, and distance selling directives require specific policies. Our legal package ensures 
            your e-commerce business operates safely and professionally.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={nicoleProfile} 
              alt="Nicole Henderson - E-commerce Legal Specialist" 
              className="rounded-lg shadow-xl w-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">About Me</h3>
            <p className="text-muted-foreground leading-relaxed">
              Hi, I'm <strong>Nicole Henderson</strong>, a legal specialist with extensive experience in e-commerce law 
              and online retail compliance. I've helped hundreds of online store owners navigate the complex legal 
              landscape of selling products online.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I understand that legal compliance can be overwhelming for e-commerce entrepreneurs. That's why I've created 
              this comprehensive package—to give you all the essential legal documents you need at an affordable price, 
              so you can focus on growing your business with complete peace of mind.
            </p>
          </div>
        </div>

        <Card className="mb-12 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Complete E-commerce Legal Package</CardTitle>
            <CardDescription>Everything your online store needs for legal compliance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <div className="h-5 w-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">GDPR Privacy Policy</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete privacy policy covering customer data collection, processing, and storage in compliance 
                    with EU GDPR regulations and international privacy laws.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-5 w-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Return & Refund Policy</h4>
                  <p className="text-sm text-muted-foreground">
                    Clear return procedures, refund timelines, and customer rights under distance selling regulations, 
                    including the mandatory 14-day cooling-off period.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-5 w-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Terms & Conditions</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive terms governing sales, payment processing, product descriptions, warranties, 
                    and limitation of liability for your online store.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-5 w-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Shipping Policy</h4>
                  <p className="text-sm text-muted-foreground">
                    Detailed shipping terms including delivery times, shipping costs, international shipments, 
                    and procedures for lost or damaged items.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-5 w-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Cookie Policy</h4>
                  <p className="text-sm text-muted-foreground">
                    GDPR-compliant cookie policy explaining tracking, analytics, marketing cookies, and user 
                    consent management for your e-commerce platform.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-5 w-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Implementation Guide</h4>
                  <p className="text-sm text-muted-foreground">
                    Step-by-step instructions for adding these documents to your e-commerce platform, whether you use 
                    Shopify, WooCommerce, or custom solutions.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-border">
            <CardHeader>
              <Clock className="h-8 w-8 text-red-600 mb-2" />
              <CardTitle className="text-xl">Ready in Minutes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Instant download after purchase. Simply customize with your store details and upload to your website. 
                No waiting for lawyers or expensive legal consultations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <ShoppingCart className="h-8 w-8 text-red-600 mb-2" />
              <CardTitle className="text-xl">For All Your Stores</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Use these legal documents across all your e-commerce websites—whether you run one store or multiple. 
                No additional licenses or fees required!
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <Globe className="h-8 w-8 text-red-600 mb-2" />
              <CardTitle className="text-xl">International Use</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Download in your preferred language or in multiple languages. Perfect for international e-commerce 
                operations selling across borders.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Complete Package for Just €79</h3>
                <p className="text-primary-foreground/90">
                  Get all essential legal documents for your e-commerce store. One-time payment, unlimited use. 
                  Save thousands compared to hiring a lawyer!
                </p>
              </div>
              <Button 
                size="lg"
                onClick={() => scrollToSection("pricing")}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 whitespace-nowrap"
              >
                Get Started Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ValuePropositionEcommerce;
