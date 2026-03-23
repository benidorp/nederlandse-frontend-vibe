import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen } from "lucide-react";
const services = [
  { icon: Shield, title: "Pravilnik o zasebnosti", description: "Popolnoma skladen z GDPR", details: ["Pravice uporabnikov po GDPR", "Kateri podatki se zbirajo", "Kako in zakaj se podatki uporabljajo", "Deljenje podatkov s tretjimi stranmi"] },
  { icon: AlertCircle, title: "Izjava o omejitvi odgovornosti", description: "Pravna zaščita pred zahtevki", details: ["Brez jamstva za rezultate", "Brez odgovornosti za informacije", "Obvestilo o affiliate povezavah"] },
  { icon: FileText, title: "Affiliate razkritje", description: "Pregledno razkritje v skladu s FTC", details: ["Preglednost o oglaševalcih", "Jasno razkritje provizij", "Skladnost z EU in US predpisi"] },
  { icon: ScrollText, title: "Splošni pogoji", description: "Ureja razmerje med stranjo in uporabniki", details: ["Omejitev odgovornosti", "Omejitve uporabe", "Pravice intelektualne lastnine"] },
  { icon: Cookie, title: "Pravilnik o piškotkih", description: "Popolna skladnost s pravilnikom o piškotkih", details: ["Pojasnilo uporabe piškotkov", "Soglasje v skladu z GDPR", "Upravljanje analitičnih piškotkov"] },
  { icon: BookOpen, title: "Vodnik za implementacijo", description: "Navodila po korakih", details: ["Enostavna navodila za namestitev", "Pravilna umestitev dokumentov", "Nasveti za prilagoditev"] },
];
const ServicesSL = () => (
  <section id="services" className="py-20 bg-background"><div className="container">
    <div className="text-center mb-12"><Badge variant="outline" className="mb-4">Naše storitve</Badge><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Bistveni pravni dokumenti</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">Za affiliate spletno stran so potrebni naslednji pravni dokumenti. Naš paket vsebuje vse potrebno.</p></div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{services.map((s, i) => { const Icon = s.icon; return (<Card key={i} className="hover:shadow-lg transition-shadow bg-card text-foreground border-border"><CardHeader><div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center mb-4"><Icon className="h-6 w-6 text-white" /></div><CardTitle className="text-xl">{s.title}</CardTitle><CardDescription>{s.description}</CardDescription></CardHeader><CardContent><ul className="space-y-2">{s.details.map((d, j) => (<li key={j} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-red-600 mt-1">•</span><span>{d}</span></li>))}</ul></CardContent></Card>); })}</div>
    <div className="mt-16 grid md:grid-cols-3 gap-8">
      <Card className="bg-primary border-primary text-primary-foreground"><CardHeader><CardTitle className="text-lg text-primary-foreground">Popolno za vse affiliate</CardTitle></CardHeader><CardContent><p className="text-sm text-primary-foreground/90">Naši prilagodljivi dokumenti so primerni za vsako affiliate poslovanje!</p></CardContent></Card>
      <Card className="bg-primary border-primary text-primary-foreground"><CardHeader><CardTitle className="text-lg text-primary-foreground">Za VSE vaše strani</CardTitle></CardHeader><CardContent><p className="text-sm text-primary-foreground/90">Bistveni pravni dokumenti za vse vaše affiliate strani brez ločenih licenc!</p></CardContent></Card>
      <Card className="bg-primary border-primary text-primary-foreground"><CardHeader><CardTitle className="text-lg text-primary-foreground">Zmanjšajte tveganja</CardTitle></CardHeader><CardContent><p className="text-sm text-primary-foreground/90">"Dobri pravni dokumenti bistveno zmanjšajo vaša tveganja."</p></CardContent></Card>
    </div>
  </div></section>
);
export default ServicesSL;
