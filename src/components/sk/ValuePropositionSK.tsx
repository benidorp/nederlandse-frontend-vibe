import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, FileCheck } from "lucide-react";
import nicoleProfile from "@/assets/nicole-working.png";

const ValuePropositionSK = () => {
  const scrollToSection = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  return (
    <section className="py-20 bg-background"><div className="container"><div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4 text-lg px-4 py-2">Profesionálne právne dokumenty pre affiliate podnikanie</Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Všetky zákonom vyžadované dokumenty, ktoré vaše affiliate stránky potrebujú</h2>
        <p className="text-xl text-muted-foreground leading-relaxed">Ako affiliate marketér zarábate provízie odporúčaním produktov. Vedeli ste však, že ste <strong>zo zákona povinný</strong> mať na svojich stránkach určité právne dokumenty? Bez týchto dokumentov riskujete vysoké pokuty a právne problémy.</p>
        <div id="about-me" className="mt-10 p-8 bg-card rounded-xl border border-border shadow-sm text-foreground">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">O mne</h3>
            <div className="flex justify-center my-4"><img src={nicoleProfile} alt="Nicole Henderson - Právna špecialistka" className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-lg" /></div>
            <p className="text-2xl font-bold text-primary mb-2">Nicole Henderson</p>
            <p className="text-lg text-muted-foreground font-medium">Právna špecialistka špecializujúca sa na jasné, presné a profesionálne právne dokumenty</p>
          </div>
          <div className="space-y-4 text-left max-w-3xl mx-auto">
            <p className="text-base text-muted-foreground leading-relaxed">Dobrý deň, som Nicole Henderson, právna spisovateľka špecializujúca sa na jasné, presné a profesionálne právne dokumenty. Zostavujem zmluvy, zásady a dohody pre firmy, organizácie a jednotlivcov, ktoré chránia vaše záujmy a zabezpečujú súlad.</p>
            <div className="pt-4">
              <h4 className="text-xl font-bold text-foreground mb-3">Profesionálne právne dokumenty pre affiliate podnikanie</h4>
              <p className="text-base text-muted-foreground leading-relaxed">Aby som odpovedala na časté otázky o právnych požiadavkách pre affiliate, vyvinula som kvalitné právne dokumenty špeciálne pre affiliate stránky. Tieto dokumenty sú určené na národné aj medzinárodné použitie a poskytujú základnú ochranu za zlomok bežnej ceny.</p>
            </div>
          </div>
        </div>
      </div>
      <Card className="mb-8 border-2 border-primary/20 bg-card">
        <CardHeader><CardTitle className="text-2xl flex items-center gap-3"><Shield className="h-8 w-8 text-primary" />Čo získate: Kompletný právny balíček</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg text-muted-foreground">Náš kompletný balíček obsahuje <strong>všetky právne dokumenty špeciálne napísané pre affiliate stránky</strong>:</p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1">Zásady ochrany osobných údajov (GDPR)</h4><p className="text-sm text-muted-foreground">Plne v súlade s európskou legislatívou</p></div></div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1">Affiliate vyhlásenie</h4><p className="text-sm text-muted-foreground">Transparentné upozornenie o províziách v súlade s FTC a EÚ</p></div></div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1 text-foreground">Obchodné podmienky</h4><p className="text-sm text-foreground/80">Chránia vás pred nárokmi na zodpovednosť</p></div></div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1 text-foreground">Právne vyhlásenie</h4><p className="text-sm text-foreground/80">Obmedzuje vašu zodpovednosť za odporúčania</p></div></div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1 text-foreground">Zásady cookies</h4><p className="text-sm text-foreground/80">V súlade s GDPR, vysvetlenie sledovacích cookies</p></div></div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1 text-foreground">Sprievodca implementáciou</h4><p className="text-sm text-foreground/80">Podrobné pokyny na správne umiestnenie</p></div></div>
          </div>
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="border-primary/20 bg-card text-foreground"><CardContent className="pt-6"><Zap className="h-10 w-10 text-primary mb-4" /><h3 className="text-lg font-bold mb-2 text-foreground">Pripravené za minúty</h3><p className="text-sm text-foreground/80">Stiahnite, vyplňte firemné údaje a umiestnite dokumenty na web.</p></CardContent></Card>
        <Card className="border-primary/20 bg-card text-foreground"><CardContent className="pt-6"><FileCheck className="h-10 w-10 text-blue-600 mb-4" /><h3 className="text-lg font-bold mb-2">Pre všetky vaše stránky</h3><p className="text-sm text-muted-foreground">Jeden nákup, neobmedzené použitie pre všetky affiliate stránky!</p></CardContent></Card>
        <Card className="border-primary/20 bg-card text-foreground"><CardContent className="pt-6"><Shield className="h-10 w-10 text-green-600 mb-4" /><h3 className="text-lg font-bold mb-2">Medzinárodné použitie</h3><p className="text-sm text-muted-foreground">Šablóny sú dostupné vo viacerých jazykoch na medzinárodné použitie.</p></CardContent></Card>
      </div>
      <Card className="bg-primary border-2 border-primary text-primary-foreground">
        <CardContent className="pt-6 text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary-foreground">Plne v súlade s GDPR a medzinárodnou legislatívou. Možnosť stiahnutia v rôznych jazykoch. Kompletná ochrana vášho podnikania.</h3>
          <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">Za iba <strong className="text-primary-foreground">jednorázových €79</strong> vybavíte všetky právne povinnosti pre všetky vaše affiliate stránky.</p>
          <Button size="lg" onClick={() => scrollToSection("pricing")} className="group text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90">Objednať za €79 <CheckCircle className="ml-2 h-5 w-5" /></Button>
          <p className="text-sm text-primary-foreground/80 mt-4">💡 Zvážte: jedna hodina s právnikom stojí viac ako €200</p>
        </CardContent>
      </Card>
    </div></div></section>
  );
};

export default ValuePropositionSK;
