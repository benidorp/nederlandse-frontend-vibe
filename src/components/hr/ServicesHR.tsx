import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen } from "lucide-react";
const services = [
  { icon: Shield, title: "Politika privatnosti", description: "Potpuno usklađena s GDPR zakonodavstvom", details: ["Prava korisnika prema GDPR-u", "Koji se podaci prikupljaju", "Kako i zašto se podaci koriste", "Dijeljenje podataka s trećim stranama"] },
  { icon: AlertCircle, title: "Izjava o odricanju", description: "Pravna zaštita od odštetnih zahtjeva", details: ["Nema jamstva za rezultate", "Nema odgovornosti za informacije", "Obavijest o affiliate vezama"] },
  { icon: FileText, title: "Affiliate izjava", description: "Transparentna izjava u skladu s FTC", details: ["Transparentnost o oglašivačima", "Jasno otkrivanje provizija", "Usklađenost s EU i US propisima"] },
  { icon: ScrollText, title: "Uvjeti korištenja", description: "Uređuje odnos između stranice i korisnika", details: ["Ograničenje odgovornosti", "Ograničenja korištenja", "Prava intelektualnog vlasništva"] },
  { icon: Cookie, title: "Politika kolačića", description: "Potpuna usklađenost s politikom kolačića", details: ["Objašnjenje korištenja kolačića", "Pristanak u skladu s GDPR-om", "Upravljanje analitičkim kolačićima"] },
  { icon: BookOpen, title: "Vodič za implementaciju", description: "Korak-po-korak upute", details: ["Jednostavne upute za instalaciju", "Pravilno postavljanje dokumenata", "Savjeti za prilagodbu"] },
];
const ServicesHR = () => (
  <section id="services" className="py-20 bg-background"><div className="container">
    <div className="text-center mb-12"><Badge variant="outline" className="mb-4">Naše usluge</Badge><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Osnovni pravni dokumenti</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">Za affiliate web stranicu potrebni su sljedeći pravni dokumenti. Naš paket sadrži sve potrebno.</p></div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{services.map((s, i) => { const Icon = s.icon; return (<Card key={i} className="hover:shadow-lg transition-shadow bg-card text-foreground border-border"><CardHeader><div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center mb-4"><Icon className="h-6 w-6 text-white" /></div><CardTitle className="text-xl">{s.title}</CardTitle><CardDescription>{s.description}</CardDescription></CardHeader><CardContent><ul className="space-y-2">{s.details.map((d, j) => (<li key={j} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-red-600 mt-1">•</span><span>{d}</span></li>))}</ul></CardContent></Card>); })}</div>
    <div className="mt-16 grid md:grid-cols-3 gap-8">
      <Card className="bg-primary border-primary text-primary-foreground"><CardHeader><CardTitle className="text-lg text-primary-foreground">Savršeno za sve affiliate</CardTitle></CardHeader><CardContent><p className="text-sm text-primary-foreground/90">Naši prilagodljivi dokumenti su pogodni za svako affiliate poslovanje!</p></CardContent></Card>
      <Card className="bg-primary border-primary text-primary-foreground"><CardHeader><CardTitle className="text-lg text-primary-foreground">Za SVE vaše stranice</CardTitle></CardHeader><CardContent><p className="text-sm text-primary-foreground/90">Osnovni pravni dokumenti za sve vaše affiliate stranice bez zasebnih licenci!</p></CardContent></Card>
      <Card className="bg-primary border-primary text-primary-foreground"><CardHeader><CardTitle className="text-lg text-primary-foreground">Minimizirajte rizike</CardTitle></CardHeader><CardContent><p className="text-sm text-primary-foreground/90">"Dobri pravni dokumenti značajno minimiziraju vaše rizike."</p></CardContent></Card>
    </div>
  </div></section>
);
export default ServicesHR;
