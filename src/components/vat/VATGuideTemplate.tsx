import { BookOpen, ShoppingCart, Globe, Building2, Users, FileText, TrendingUp, Shield, Calculator, Briefcase, Laptop, Store, Truck, CreditCard, Scale, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VATGuideContent } from "@/data/vatGuideTranslations";

interface Props {
  guide: VATGuideContent;
}

const VATGuideTemplate = ({ guide }: Props) => {
  const s = guide.sections;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{guide.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{guide.title}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{guide.subtitle}</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-12">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3 mb-6">
                <Scale className="w-7 h-7 text-primary flex-shrink-0" />
                {s.s1Title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">{s.s1P1}</p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">{s.s1P2}</p>
              <p className="text-muted-foreground leading-relaxed text-lg">{s.s1P3}</p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3 mb-6">
                <Calculator className="w-7 h-7 text-secondary flex-shrink-0" />
                {s.s2Title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">{s.s2P1}</p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">{s.s2P2}</p>
              <Card className="border-2 border-primary/20 bg-primary/5 mb-6">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {s.s2FormulaTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-4 bg-background rounded-lg">
                    <p className="font-semibold text-foreground mb-1">{s.s2FormulaAdd}</p>
                    <p className="text-muted-foreground font-mono text-sm">{s.s2FormulaAddDesc}</p>
                  </div>
                  <div className="p-4 bg-background rounded-lg">
                    <p className="font-semibold text-foreground mb-1">{s.s2FormulaRemove}</p>
                    <p className="text-muted-foreground font-mono text-sm">{s.s2FormulaRemoveDesc}</p>
                  </div>
                  <p className="text-sm text-muted-foreground italic">{s.s2FormulaTip}</p>
                </CardContent>
              </Card>
              <p className="text-muted-foreground leading-relaxed text-lg">{s.s2P3}</p>
            </div>

            {/* Section 3: E-commerce */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3 mb-6">
                <ShoppingCart className="w-7 h-7 text-accent flex-shrink-0" />
                {s.s3Title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">{s.s3P1}</p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">{s.s3P2}</p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">{s.s3P3}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="border border-primary/20">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <Store className="w-6 h-6 text-primary" />
                      <h4 className="font-bold text-foreground">{s.s3PhysicalTitle}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.s3PhysicalDesc}</p>
                  </CardContent>
                </Card>
                <Card className="border border-secondary/20">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <Laptop className="w-6 h-6 text-secondary" />
                      <h4 className="font-bold text-foreground">{s.s3DigitalTitle}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.s3DigitalDesc}</p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">{s.s3P4}</p>
            </div>

            {/* Section 4: Freelancers */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3 mb-6">
                <Users className="w-7 h-7 text-primary flex-shrink-0" />
                {s.s4Title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">{s.s4P1}</p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">{s.s4P2}</p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">{s.s4P3}</p>
              <p className="text-muted-foreground leading-relaxed text-lg">{s.s4P4}</p>
            </div>

            {/* Section 5: SaaS */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3 mb-6">
                <Laptop className="w-7 h-7 text-secondary flex-shrink-0" />
                {s.s5Title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">{s.s5P1}</p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">{s.s5P2}</p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">{s.s5P3}</p>
              <p className="text-muted-foreground leading-relaxed text-lg">{s.s5P4}</p>
            </div>

            {/* Section 6: Import/Export */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3 mb-6">
                <Truck className="w-7 h-7 text-accent flex-shrink-0" />
                {s.s6Title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">{s.s6P1}</p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">{s.s6P2}</p>
              <p className="text-muted-foreground leading-relaxed text-lg">{s.s6P3}</p>
            </div>

            {/* Section 7: EU & OSS */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3 mb-6">
                <Globe className="w-7 h-7 text-primary flex-shrink-0" />
                {s.s7Title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">{s.s7P1}</p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">{s.s7P2}</p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">{s.s7P3}</p>
              <p className="text-muted-foreground leading-relaxed text-lg">{s.s7P4}</p>
            </div>

            {/* Section 8: Worldwide */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3 mb-6">
                <Building2 className="w-7 h-7 text-secondary flex-shrink-0" />
                {s.s8Title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">{s.s8P1}</p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">{s.s8P2}</p>
              <p className="text-muted-foreground leading-relaxed text-lg">{s.s8P3}</p>
            </div>

            {/* Section 9: Compliance */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3 mb-6">
                <Shield className="w-7 h-7 text-accent flex-shrink-0" />
                {s.s9Title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">{s.s9P1}</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="border border-primary/20 bg-primary/5">
                  <CardContent className="p-5">
                    <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      {s.s9InvoiceTitle}
                    </h4>
                    <ul className="text-muted-foreground text-sm space-y-1.5">
                      {s.s9InvoiceItems.map((item, i) => <li key={i}>• {item}</li>)}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border border-secondary/20 bg-secondary/5">
                  <CardContent className="p-5">
                    <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-secondary" />
                      {s.s9DeadlineTitle}
                    </h4>
                    <ul className="text-muted-foreground text-sm space-y-1.5">
                      {s.s9DeadlineItems.map((item, i) => <li key={i}>• {item}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">{s.s9P2}</p>
            </div>

            {/* Section 10: Use Cases */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3 mb-6">
                <Briefcase className="w-7 h-7 text-primary flex-shrink-0" />
                {s.s10Title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">{s.s10P1}</p>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {s.s10UseCases.map((uc, i) => (
                  <div key={i} className="p-3 rounded-lg border bg-card hover:bg-accent/10 transition-colors">
                    <p className="font-semibold text-foreground text-sm mb-1">{uc.term}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">{uc.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 11: Why Choose */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3 mb-6">
                <CreditCard className="w-7 h-7 text-accent flex-shrink-0" />
                {s.s11Title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">{s.s11P1}</p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">{s.s11P2}</p>
              <p className="text-muted-foreground leading-relaxed text-lg">{s.s11P3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VATGuideTemplate;
