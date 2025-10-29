import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
const CTABoxNewsMagazine = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
      <div className="container">
        <Card className="max-w-4xl mx-auto border-blue-200 dark:border-blue-800 shadow-2xl bg-white dark:bg-slate-900">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Protect Your News Website Today
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get all essential legal documents for your news or magazine website. 
                GDPR-compliant, professionally drafted and ready to download.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">GDPR Privacy Policy</h3>
                  <p className="text-sm text-muted-foreground">Fully compliant with EU legislation</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Editorial Policy</h3>
                  <p className="text-sm text-muted-foreground">Professional editorial guidelines</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Copyright Policy</h3>
                  <p className="text-sm text-muted-foreground">Protect your content and intellectual property</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Terms & Conditions</h3>
                  <p className="text-sm text-muted-foreground">Clear terms of use</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" onClick={() => scrollToSection("pricing")} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold shadow-lg">
                Order Now - Only €79
              </Button>
              <p className="text-sm text-muted-foreground mt-4">Instant download after payment • No subscription • Multiple Languages</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default CTABoxNewsMagazine;