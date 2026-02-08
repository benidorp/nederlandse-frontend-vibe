import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen } from "lucide-react";

const services = [
  { icon: Shield, title: "Zásady ochrany osobních údajů", description: "Kompletní zásady v souladu s GDPR", details: ["Práva uživatelů podle GDPR", "Jaké údaje jsou shromažďovány", "Jak a proč jsou údaje používány", "Sdílení dat s třetími stranami"] },
  { icon: AlertCircle, title: "Prohlášení", description: "Právní ochrana proti nárokům na odpovědnost", details: ["Žádná záruka výsledků", "Žádná odpovědnost za informace", "Upozornění na affiliate odkazy a provize"] },
  { icon: FileText, title: "Affiliate prohlášení", description: "Transparentní prohlášení v souladu s FTC", details: ["Transparentnost ohledně inzerentů", "Jasné zveřejnění provizí", "Soulad s EU a US předpisy"] },
  { icon: ScrollText, title: "Obchodní podmínky", description: "Upravuje vztah mezi vaším webem a uživateli", details: ["Omezení odpovědnosti", "Omezení používání", "Práva duševního vlastnictví"] },
  { icon: Cookie, title: "Zásady cookies", description: "Úplný soulad se zásadami cookies", details: ["Vysvětlení používání cookies", "Souhlas v souladu s GDPR", "Správa analytických cookies"] },
  { icon: BookOpen, title: "Průvodce implementací", description: "Podrobné pokyny pro implementaci", details: ["Jednoduché pokyny k instalaci", "Správné umístění dokumentů", "Tipy pro přizpůsobení webu"] },
];

const ServicesCS = () => (
  <section id="services" className="py-20 bg-background">
    <div className="container">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4">Naše služby</Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Základní právní dokumenty</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Pro affiliate stránky jsou nezbytné následující právní dokumenty. Náš balíček obsahuje vše potřebné.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => { const Icon = service.icon; return (
          <Card key={index} className="hover:shadow-lg transition-shadow bg-card text-foreground border-border">
            <CardHeader><div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center mb-4"><Icon className="h-6 w-6 text-white" /></div><CardTitle className="text-xl">{service.title}</CardTitle><CardDescription>{service.description}</CardDescription></CardHeader>
            <CardContent><ul className="space-y-2">{service.details.map((detail, idx) => (<li key={idx} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-red-600 mt-1">•</span><span>{detail}</span></li>))}</ul></CardContent>
          </Card>
        ); })}
      </div>
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <Card className="bg-primary border-primary text-primary-foreground"><CardHeader><CardTitle className="text-lg text-primary-foreground">Ideální pro všechny affiliate</CardTitle></CardHeader><CardContent><p className="text-sm text-primary-foreground/90">S tisíci affiliate webů jsou naše přizpůsobitelné dokumenty vhodné pro každé affiliate podnikání. Soustřeďte se na vydělávání provizí — právní soulad jsme zjednodušili!</p></CardContent></Card>
        <Card className="bg-primary border-primary text-primary-foreground"><CardHeader><CardTitle className="text-lg text-primary-foreground">Pro VŠECHNY vaše stránky</CardTitle></CardHeader><CardContent><p className="text-sm text-primary-foreground/90">Základní právní dokumenty pro všechny vaše affiliate stránky. Ano, můžete je používat pro VŠECHNY weby bez nutnosti kupovat samostatné licence!</p></CardContent></Card>
        <Card className="bg-primary border-primary text-primary-foreground"><CardHeader><CardTitle className="text-lg text-primary-foreground">Minimalizujte rizika</CardTitle></CardHeader><CardContent><p className="text-sm text-primary-foreground/90">"Žádný dokument nenabízí 100% ochranu, ale dobré právní dokumenty výrazně minimalizují vaše rizika a ukazují, že jednáte odpovědně."</p></CardContent></Card>
      </div>
    </div>
  </section>
);

export default ServicesCS;
