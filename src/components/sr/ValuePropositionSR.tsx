import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, FileCheck } from "lucide-react";
import nicoleProfile from "@/assets/nicole-working.png";

const ValuePropositionSR = () => {
  const scrollToSection = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  return (
    <section className="py-20 bg-background"><div className="container"><div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4 text-lg px-4 py-2">Професионални правни документи за affiliate пословање</Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Сви законски потребни документи за ваше affiliate странице</h2>
        <p className="text-xl text-muted-foreground leading-relaxed">Као affiliate маркетер зарађујете провизије препоручивањем производа. Али да ли сте знали да сте <strong>законски обавезни</strong> да имате одређене правне документе на свом сајту? Без тих докумената ризикујете високе казне и правне проблеме.</p>
        <div id="about-me" className="mt-10 p-8 bg-card rounded-xl border border-border shadow-sm text-foreground">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">О мени</h3>
            <div className="flex justify-center my-4"><img src={nicoleProfile} alt="Nicole Henderson - Правни стручњак" className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-lg" /></div>
            <p className="text-2xl font-bold text-primary mb-2">Nicole Henderson</p>
            <p className="text-lg text-muted-foreground font-medium">Правни стручњак специјализован за јасне, прецизне и професионалне правне документе</p>
          </div>
          <div className="space-y-4 text-left max-w-3xl mx-auto">
            <p className="text-base text-muted-foreground leading-relaxed">Здраво, ја сам Nicole Henderson, правна ауторка специјализована за јасне, прецизне и професионалне правне документе. Израђујем уговоре, политике и споразуме за предузећа, организације и појединце који штите ваше интересе и обезбеђују усклађеност.</p>
            <div className="pt-4">
              <h4 className="text-xl font-bold text-foreground mb-3">Професионални правни документи за affiliate пословање</h4>
              <p className="text-base text-muted-foreground leading-relaxed">Да бих одговорила на бројна питања о правним захтевима за affiliate, развила сам квалитетне правне документе посебно за affiliate сајтове. Ови документи су намењени за националну и међународну употребу и пружају основну заштиту за делић уобичајене цене.</p>
            </div>
          </div>
        </div>
      </div>
      <Card className="mb-8 border-2 border-primary/20 bg-card">
        <CardHeader><CardTitle className="text-2xl flex items-center gap-3"><Shield className="h-8 w-8 text-primary" />Шта добијате: Комплетан правни пакет</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg text-muted-foreground">Наш комплетни пакет садржи <strong>све правне документе посебно написане за affiliate сајтове</strong>:</p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1">Политика приватности (GDPR)</h4><p className="text-sm text-muted-foreground">Потпуно усклађена са европским законодавством</p></div></div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1">Affiliate изјава</h4><p className="text-sm text-muted-foreground">Транспарентно обавештење о провизијама у складу са FTC и ЕУ</p></div></div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1 text-foreground">Услови коришћења</h4><p className="text-sm text-foreground/80">Штити вас од одштетних захтева и регулише однос са посетиоцима</p></div></div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1 text-foreground">Правна изјава о одрицању</h4><p className="text-sm text-foreground/80">Ограничава вашу одговорност за препоруке које дајете</p></div></div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1 text-foreground">Политика колачића</h4><p className="text-sm text-foreground/80">Усклађена са GDPR-ом, објашњење праћења и аналитичких колачића</p></div></div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1 text-foreground">Водич за имплементацију</h4><p className="text-sm text-foreground/80">Корак-по-корак упутства за правилно постављање</p></div></div>
          </div>
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="border-primary/20 bg-card text-foreground"><CardContent className="pt-6"><Zap className="h-10 w-10 text-primary mb-4" /><h3 className="text-lg font-bold mb-2 text-foreground">Спремно за минуте</h3><p className="text-sm text-foreground/80">Преузмите, унесите податке компаније и поставите документе на сајт.</p></CardContent></Card>
        <Card className="border-primary/20 bg-card text-foreground"><CardContent className="pt-6"><FileCheck className="h-10 w-10 text-blue-600 mb-4" /><h3 className="text-lg font-bold mb-2">За све ваше сајтове</h3><p className="text-sm text-muted-foreground">Једна куповина, неограничена употреба за све affiliate сајтове!</p></CardContent></Card>
        <Card className="border-primary/20 bg-card text-foreground"><CardContent className="pt-6"><Shield className="h-10 w-10 text-green-600 mb-4" /><h3 className="text-lg font-bold mb-2">Међународна употреба</h3><p className="text-sm text-muted-foreground">Шаблони су доступни за преузимање на више језика за међународну употребу.</p></CardContent></Card>
      </div>
      <Card className="bg-primary border-2 border-primary text-primary-foreground">
        <CardContent className="pt-6 text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary-foreground">Потпуно усклађено са GDPR-ом и међународним законодавством. Могућност преузимања на различитим језицима. Потпуна заштита за ваше пословање.</h3>
          <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">За само <strong className="text-primary-foreground">једнократних €79</strong> решите све правне обавезе за све ваше affiliate сајтове.</p>
          <Button size="lg" onClick={() => scrollToSection("pricing")} className="group text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90">Наручите за €79 <CheckCircle className="ml-2 h-5 w-5" /></Button>
          <p className="text-sm text-primary-foreground/80 mt-4">💡 Размислите: један сат са адвокатом кошта више од €200</p>
        </CardContent>
      </Card>
    </div></div></section>
  );
};

export default ValuePropositionSR;
