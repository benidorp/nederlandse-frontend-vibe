import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, FileCheck } from "lucide-react";
import nicoleProfile from "@/assets/nicole-working.png";

const ValuePropositionUK = () => {
  const scrollToSection = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  return (
    <section className="py-20 bg-background"><div className="container"><div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4 text-lg px-4 py-2">Професійні юридичні документи для affiliate бізнесу</Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Усі законодавчо необхідні документи для вашого affiliate сайту</h2>
        <p className="text-xl text-muted-foreground leading-relaxed">Як affiliate маркетолог, ви заробляєте комісійні, рекомендуючи продукти. Але чи знали ви, що <strong>за законом зобов'язані</strong> мати певні юридичні документи на своєму сайті? Без цих документів ви ризикуєте високими штрафами та юридичними проблемами.</p>
        <div id="about-me" className="mt-10 p-8 bg-card rounded-xl border border-border shadow-sm text-foreground">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">Про мене</h3>
            <div className="flex justify-center my-4"><img src={nicoleProfile} alt="Nicole Henderson - Юридичний спеціаліст" className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-lg" /></div>
            <p className="text-2xl font-bold text-primary mb-2">Nicole Henderson</p>
            <p className="text-lg text-muted-foreground font-medium">Юридичний спеціаліст, що спеціалізується на чітких, точних та професійних юридичних документах</p>
          </div>
          <div className="space-y-4 text-left max-w-3xl mx-auto">
            <p className="text-base text-muted-foreground leading-relaxed">Вітаю, я Nicole Henderson, юридичний автор, що спеціалізується на чітких, точних та професійних юридичних документах. Я складаю контракти, політики та угоди для бізнесу, організацій та фізичних осіб, які захищають ваші інтереси та забезпечують відповідність.</p>
            <div className="pt-4">
              <h4 className="text-xl font-bold text-foreground mb-3">Професійні юридичні документи для affiliate бізнесу</h4>
              <p className="text-base text-muted-foreground leading-relaxed">Щоб відповісти на численні запитання щодо юридичних вимог для affiliate, я розробила якісні юридичні документи спеціально для affiliate сайтів. Ці документи призначені для національного та міжнародного використання і забезпечують основний захист за частку звичайної вартості.</p>
            </div>
          </div>
        </div>
      </div>
      <Card className="mb-8 border-2 border-primary/20 bg-card">
        <CardHeader><CardTitle className="text-2xl flex items-center gap-3"><Shield className="h-8 w-8 text-primary" />Що ви отримуєте: Повний юридичний пакет</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg text-muted-foreground">Наш повний пакет містить <strong>усі юридичні документи, спеціально написані для affiliate сайтів</strong>. Не загальні шаблони, а професійні тексти, що ідеально відповідають вашій affiliate бізнес-моделі:</p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1">Політика конфіденційності (GDPR)</h4><p className="text-sm text-muted-foreground">Повна відповідність європейському законодавству, включаючи використання cookies та захист даних</p></div></div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1">Affiliate розкриття</h4><p className="text-sm text-muted-foreground">Прозоре повідомлення про те, що ви отримуєте комісійні, відповідно до FTC та ЄС</p></div></div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1 text-foreground">Умови використання</h4><p className="text-sm text-foreground/80">Захищає вас від претензій щодо відповідальності та регулює стосунки з відвідувачами</p></div></div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1 text-foreground">Правове застереження</h4><p className="text-sm text-foreground/80">Обмежує вашу відповідальність за рекомендації, які ви надаєте</p></div></div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1 text-foreground">Політика cookies</h4><p className="text-sm text-foreground/80">Відповідає GDPR, пояснення щодо відстеження та аналітичних cookies</p></div></div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1 text-foreground">Посібник з впровадження</h4><p className="text-sm text-foreground/80">Покрокові інструкції для правильного розміщення на вашому сайті</p></div></div>
          </div>
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="border-primary/20 bg-card text-foreground"><CardContent className="pt-6"><Zap className="h-10 w-10 text-primary mb-4" /><h3 className="text-lg font-bold mb-2 text-foreground">Готово за хвилини</h3><p className="text-sm text-foreground/80">Завантажте, заповніть дані компанії та розмістіть документи на сайті. Без юриста, без очікування.</p></CardContent></Card>
        <Card className="border-primary/20 bg-card text-foreground"><CardContent className="pt-6"><FileCheck className="h-10 w-10 text-blue-600 mb-4" /><h3 className="text-lg font-bold mb-2">Для всіх ваших сайтів</h3><p className="text-sm text-muted-foreground">Одна покупка, необмежене використання. Використовуйте ці документи для всіх ваших поточних та майбутніх affiliate сайтів!</p></CardContent></Card>
        <Card className="border-primary/20 bg-card text-foreground"><CardContent className="pt-6"><Shield className="h-10 w-10 text-green-600 mb-4" /><h3 className="text-lg font-bold mb-2">Міжнародне використання</h3><p className="text-sm text-muted-foreground">Шаблони доступні для завантаження кількома мовами для міжнародного використання на всіх ваших сайтах по всьому світу.</p></CardContent></Card>
      </div>
      <Card className="bg-primary border-2 border-primary text-primary-foreground">
        <CardContent className="pt-6 text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary-foreground">Повна відповідність GDPR та міжнародному законодавству. Можливість завантаження різними мовами. Повний захист вашого бізнесу.</h3>
          <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">Лише за <strong className="text-primary-foreground">одноразові €79</strong> ви вирішите всі юридичні зобов'язання для всіх ваших affiliate сайтів. Без місячних платежів, без клопоту з юристами, без ризику штрафів.</p>
          <Button size="lg" onClick={() => scrollToSection("pricing")} className="group text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90">Замовити за €79 <CheckCircle className="ml-2 h-5 w-5" /></Button>
          <p className="text-sm text-primary-foreground/80 mt-4">💡 Подумайте: одна година з юристом коштує понад €200</p>
        </CardContent>
      </Card>
    </div></div></section>
  );
};

export default ValuePropositionUK;
