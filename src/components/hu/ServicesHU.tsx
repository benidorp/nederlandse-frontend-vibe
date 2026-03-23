import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen } from "lucide-react";
const services = [
  { icon: Shield, title: "Adatvédelmi irányelvek", description: "GDPR-nak megfelelő adatvédelmi szabályzat", details: ["Felhasználói jogok a GDPR szerint", "Milyen adatokat gyűjtünk", "Hogyan és miért használjuk az adatokat", "Adatmegosztás harmadik felekkel"] },
  { icon: AlertCircle, title: "Nyilatkozat", description: "Jogi védelem felelősségi igények ellen", details: ["Nincs garancia az eredményekre", "Nincs felelősség az információkért", "Értesítés az affiliate linkekről"] },
  { icon: FileText, title: "Affiliate nyilatkozat", description: "FTC irányelveknek megfelelő átlátható nyilatkozat", details: ["Átláthatóság a hirdetőkkel kapcsolatban", "Világos jutaléknyilatkozat", "EU és US előírásoknak való megfelelés"] },
  { icon: ScrollText, title: "Általános feltételek", description: "A weboldal és felhasználók közötti viszonyt szabályozza", details: ["Felelősségkorlátozás", "Használati korlátozások", "Szellemi tulajdonjogok"] },
  { icon: Cookie, title: "Cookie szabályzat", description: "Teljes cookie megfelelőség és hozzájárulás", details: ["A cookie-k használatának magyarázata", "GDPR-megfelelő hozzájárulás", "Elemzési cookie-k kezelése"] },
  { icon: BookOpen, title: "Megvalósítási útmutató", description: "Lépésről lépésre szóló utasítások", details: ["Egyszerű telepítési utasítások", "Dokumentumok helyes elhelyezése", "Testreszabási tippek"] },
];
const ServicesHU = () => (
  <section id="services" className="py-20 bg-background"><div className="container">
    <div className="text-center mb-12"><Badge variant="outline" className="mb-4">Szolgáltatásaink</Badge><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Alapvető jogi dokumentumok</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">Az affiliate weboldalakhoz a következő jogi dokumentumok szükségesek. Csomagunk mindent tartalmaz.</p></div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{services.map((s, i) => { const Icon = s.icon; return (<Card key={i} className="hover:shadow-lg transition-shadow bg-card text-foreground border-border"><CardHeader><div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center mb-4"><Icon className="h-6 w-6 text-white" /></div><CardTitle className="text-xl">{s.title}</CardTitle><CardDescription>{s.description}</CardDescription></CardHeader><CardContent><ul className="space-y-2">{s.details.map((d, j) => (<li key={j} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-red-600 mt-1">•</span><span>{d}</span></li>))}</ul></CardContent></Card>); })}</div>
    <div className="mt-16 grid md:grid-cols-3 gap-8">
      <Card className="bg-primary border-primary text-primary-foreground"><CardHeader><CardTitle className="text-lg text-primary-foreground">Tökéletes minden affiliate-nek</CardTitle></CardHeader><CardContent><p className="text-sm text-primary-foreground/90">Testreszabható dokumentumaink minden affiliate vállalkozáshoz alkalmasak!</p></CardContent></Card>
      <Card className="bg-primary border-primary text-primary-foreground"><CardHeader><CardTitle className="text-lg text-primary-foreground">MINDEN weboldalához</CardTitle></CardHeader><CardContent><p className="text-sm text-primary-foreground/90">Az alapvető jogi dokumentumok minden affiliate oldalához. MINDEN weboldalon használhatja!</p></CardContent></Card>
      <Card className="bg-primary border-primary text-primary-foreground"><CardHeader><CardTitle className="text-lg text-primary-foreground">Minimalizálja a kockázatokat</CardTitle></CardHeader><CardContent><p className="text-sm text-primary-foreground/90">"Egyetlen dokumentum sem kínál 100%-os védelmet, de a jó jogi dokumentumok jelentősen minimalizálják kockázatait."</p></CardContent></Card>
    </div>
  </div></section>
);
export default ServicesHU;
