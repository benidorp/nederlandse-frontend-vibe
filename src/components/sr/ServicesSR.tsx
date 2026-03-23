import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen } from "lucide-react";
const services = [
  { icon: Shield, title: "Политика приватности", description: "Потпуно усклађена са GDPR", details: ["Права корисника према GDPR-у", "Који се подаци прикупљају", "Како и зашто се подаци користе", "Дељење података са трећим странама"] },
  { icon: AlertCircle, title: "Изјава о одрицању", description: "Правна заштита од одштетних захтева", details: ["Нема гаранције за резултате", "Нема одговорности за информације", "Обавештење о affiliate везама"] },
  { icon: FileText, title: "Affiliate изјава", description: "Транспарентна изјава у складу са FTC", details: ["Транспарентност о оглашивачима", "Јасно откривање провизија", "Усклађеност са ЕУ и US прописима"] },
  { icon: ScrollText, title: "Услови коришћења", description: "Уређује однос између сајта и корисника", details: ["Ограничење одговорности", "Ограничења коришћења", "Права интелектуалне својине"] },
  { icon: Cookie, title: "Политика колачића", description: "Потпуна усклађеност са политиком колачића", details: ["Објашњење коришћења колачића", "Пристанак у складу са GDPR-ом", "Управљање аналитичким колачићима"] },
  { icon: BookOpen, title: "Водич за имплементацију", description: "Корак-по-корак упутства", details: ["Једноставна упутства за инсталацију", "Правилно постављање докумената", "Савети за прилагођавање"] },
];
const ServicesSR = () => (
  <section id="services" className="py-20 bg-background"><div className="container">
    <div className="text-center mb-12"><Badge variant="outline" className="mb-4">Наше услуге</Badge><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Основни правни документи</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">За affiliate сајт потребни су следећи правни документи. Наш пакет садржи све потребно.</p></div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{services.map((s, i) => { const Icon = s.icon; return (<Card key={i} className="hover:shadow-lg transition-shadow bg-card text-foreground border-border"><CardHeader><div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center mb-4"><Icon className="h-6 w-6 text-white" /></div><CardTitle className="text-xl">{s.title}</CardTitle><CardDescription>{s.description}</CardDescription></CardHeader><CardContent><ul className="space-y-2">{s.details.map((d, j) => (<li key={j} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-red-600 mt-1">•</span><span>{d}</span></li>))}</ul></CardContent></Card>); })}</div>
    <div className="mt-16 grid md:grid-cols-3 gap-8">
      <Card className="bg-primary border-primary text-primary-foreground"><CardHeader><CardTitle className="text-lg text-primary-foreground">Савршено за све affiliate</CardTitle></CardHeader><CardContent><p className="text-sm text-primary-foreground/90">Наши прилагодљиви документи су погодни за свако affiliate пословање!</p></CardContent></Card>
      <Card className="bg-primary border-primary text-primary-foreground"><CardHeader><CardTitle className="text-lg text-primary-foreground">За СВЕ ваше сајтове</CardTitle></CardHeader><CardContent><p className="text-sm text-primary-foreground/90">Основни правни документи за све ваше affiliate сајтове без засебних лиценци!</p></CardContent></Card>
      <Card className="bg-primary border-primary text-primary-foreground"><CardHeader><CardTitle className="text-lg text-primary-foreground">Минимизирајте ризике</CardTitle></CardHeader><CardContent><p className="text-sm text-primary-foreground/90">"Добри правни документи значајно минимизују ваше ризике."</p></CardContent></Card>
    </div>
  </div></section>
);
export default ServicesSR;
