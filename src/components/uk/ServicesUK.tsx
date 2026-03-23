import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen } from "lucide-react";
const services = [
  { icon: Shield, title: "Політика конфіденційності", description: "Повна відповідність GDPR", details: ["Права користувачів згідно GDPR", "Які дані збираються", "Як і чому використовуються дані", "Обмін даними з третіми сторонами"] },
  { icon: AlertCircle, title: "Застереження", description: "Юридичний захист від претензій", details: ["Без гарантії результатів", "Без відповідальності за інформацію", "Повідомлення про affiliate посилання"] },
  { icon: FileText, title: "Affiliate розкриття", description: "Прозоре розкриття відповідно до FTC", details: ["Прозорість щодо рекламодавців", "Чітке розкриття комісійних", "Відповідність нормам ЄС та США"] },
  { icon: ScrollText, title: "Умови використання", description: "Регулює відносини між сайтом та користувачами", details: ["Обмеження відповідальності", "Обмеження використання", "Права інтелектуальної власності"] },
  { icon: Cookie, title: "Політика cookies", description: "Повна відповідність щодо cookies", details: ["Пояснення використання cookies", "Згода відповідно до GDPR", "Управління аналітичними cookies"] },
  { icon: BookOpen, title: "Посібник з впровадження", description: "Покрокові інструкції", details: ["Прості інструкції з встановлення", "Правильне розміщення документів", "Поради з налаштування"] },
];
const ServicesUK = () => (
  <section id="services" className="py-20 bg-background"><div className="container">
    <div className="text-center mb-12"><Badge variant="outline" className="mb-4">Наші послуги</Badge><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Основні юридичні документи</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">Для affiliate сайту необхідні наступні юридичні документи. Наш пакет містить все необхідне.</p></div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{services.map((s, i) => { const Icon = s.icon; return (<Card key={i} className="hover:shadow-lg transition-shadow bg-card text-foreground border-border"><CardHeader><div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center mb-4"><Icon className="h-6 w-6 text-white" /></div><CardTitle className="text-xl">{s.title}</CardTitle><CardDescription>{s.description}</CardDescription></CardHeader><CardContent><ul className="space-y-2">{s.details.map((d, j) => (<li key={j} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-red-600 mt-1">•</span><span>{d}</span></li>))}</ul></CardContent></Card>); })}</div>
    <div className="mt-16 grid md:grid-cols-3 gap-8">
      <Card className="bg-primary border-primary text-primary-foreground"><CardHeader><CardTitle className="text-lg text-primary-foreground">Ідеально для всіх affiliate</CardTitle></CardHeader><CardContent><p className="text-sm text-primary-foreground/90">Наші документи підходять для будь-якого affiliate бізнесу!</p></CardContent></Card>
      <Card className="bg-primary border-primary text-primary-foreground"><CardHeader><CardTitle className="text-lg text-primary-foreground">Для ВСІХ ваших сайтів</CardTitle></CardHeader><CardContent><p className="text-sm text-primary-foreground/90">Основні юридичні документи для всіх ваших affiliate сайтів без окремих ліцензій!</p></CardContent></Card>
      <Card className="bg-primary border-primary text-primary-foreground"><CardHeader><CardTitle className="text-lg text-primary-foreground">Мінімізуйте ризики</CardTitle></CardHeader><CardContent><p className="text-sm text-primary-foreground/90">"Жоден документ не дає 100% захисту, але хороші юридичні документи значно мінімізують ваші ризики."</p></CardContent></Card>
    </div>
  </div></section>
);
export default ServicesUK;
