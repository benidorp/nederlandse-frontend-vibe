import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen } from "lucide-react";
const services = [
  { icon: Shield, title: "Zásady ochrany osobných údajov", description: "Kompletné zásady v súlade s GDPR", details: ["Práva používateľov podľa GDPR", "Aké údaje sa zhromažďujú", "Ako a prečo sa údaje používajú", "Zdieľanie dát s tretími stranami"] },
  { icon: AlertCircle, title: "Vyhlásenie", description: "Právna ochrana proti nárokom na zodpovednosť", details: ["Žiadna záruka výsledkov", "Žiadna zodpovednosť za informácie", "Upozornenie na affiliate odkazy"] },
  { icon: FileText, title: "Affiliate vyhlásenie", description: "Transparentné vyhlásenie v súlade s FTC", details: ["Transparentnosť ohľadom inzerentov", "Jasné zverejnenie provízií", "Súlad s EÚ a US predpismi"] },
  { icon: ScrollText, title: "Obchodné podmienky", description: "Upravuje vzťah medzi vaším webom a používateľmi", details: ["Obmedzenie zodpovednosti", "Obmedzenia používania", "Práva duševného vlastníctva"] },
  { icon: Cookie, title: "Zásady cookies", description: "Úplný súlad so zásadami cookies", details: ["Vysvetlenie používania cookies", "Súhlas v súlade s GDPR", "Správa analytických cookies"] },
  { icon: BookOpen, title: "Sprievodca implementáciou", description: "Podrobné pokyny pre implementáciu", details: ["Jednoduché pokyny k inštalácii", "Správne umiestnenie dokumentov", "Tipy na prispôsobenie webu"] },
];
const ServicesSK = () => (
  <section id="services" className="py-20 bg-background"><div className="container">
    <div className="text-center mb-12"><Badge variant="outline" className="mb-4">Naše služby</Badge><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Základné právne dokumenty</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">Pre affiliate stránky sú nevyhnutné nasledovné právne dokumenty.</p></div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{services.map((s, i) => { const Icon = s.icon; return (<Card key={i} className="hover:shadow-lg transition-shadow bg-card text-foreground border-border"><CardHeader><div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center mb-4"><Icon className="h-6 w-6 text-white" /></div><CardTitle className="text-xl">{s.title}</CardTitle><CardDescription>{s.description}</CardDescription></CardHeader><CardContent><ul className="space-y-2">{s.details.map((d, j) => (<li key={j} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-red-600 mt-1">•</span><span>{d}</span></li>))}</ul></CardContent></Card>); })}</div>
    <div className="mt-16 grid md:grid-cols-3 gap-8">
      <Card className="bg-primary border-primary text-primary-foreground"><CardHeader><CardTitle className="text-lg text-primary-foreground">Ideálne pre všetkých affiliate</CardTitle></CardHeader><CardContent><p className="text-sm text-primary-foreground/90">Naše prispôsobiteľné dokumenty sú vhodné pre každé affiliate podnikanie!</p></CardContent></Card>
      <Card className="bg-primary border-primary text-primary-foreground"><CardHeader><CardTitle className="text-lg text-primary-foreground">Pre VŠETKY vaše stránky</CardTitle></CardHeader><CardContent><p className="text-sm text-primary-foreground/90">Základné právne dokumenty pre všetky vaše affiliate stránky bez ďalších licencií!</p></CardContent></Card>
      <Card className="bg-primary border-primary text-primary-foreground"><CardHeader><CardTitle className="text-lg text-primary-foreground">Minimalizujte riziká</CardTitle></CardHeader><CardContent><p className="text-sm text-primary-foreground/90">"Dobré právne dokumenty výrazne minimalizujú vaše riziká."</p></CardContent></Card>
    </div>
  </div></section>
);
export default ServicesSK;
