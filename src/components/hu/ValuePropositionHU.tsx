import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, FileCheck } from "lucide-react";
import nicoleProfile from "@/assets/nicole-working.png";

const ValuePropositionHU = () => {
  const scrollToSection = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <section className="py-20 bg-background">
      <div className="container"><div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2">Professzionális jogi dokumentumok affiliate vállalkozásokhoz</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Minden jogilag szükséges dokumentum, amelyre affiliate weboldalának szüksége van</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">Affiliate marketingesként jutalékot keres termékek ajánlásával. De tudta, hogy <strong>jogilag kötelező</strong> bizonyos jogi dokumentumokat elhelyezni a weboldalán? E dokumentumok nélkül magas bírságokat és jogi problémákat kockáztat.</p>
          <div id="about-me" className="mt-10 p-8 bg-card rounded-xl border border-border shadow-sm text-foreground">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Rólam</h3>
              <div className="flex justify-center my-4"><img src={nicoleProfile} alt="Nicole Henderson - Jogi szakértő" className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-lg" /></div>
              <p className="text-2xl font-bold text-primary mb-2">Nicole Henderson</p>
              <p className="text-lg text-muted-foreground font-medium">Jogi szakértő, aki világos, pontos és professzionális jogi dokumentumokra specializálódott</p>
            </div>
            <div className="space-y-4 text-left max-w-3xl mx-auto">
              <p className="text-base text-muted-foreground leading-relaxed">Üdvözlöm, Nicole Henderson vagyok, jogi szövegíró, aki világos, pontos és professzionális jogi dokumentumok készítésére specializálódott. Szerződéseket, szabályzatokat és megállapodásokat készítek vállalkozások, szervezetek és magánszemélyek számára, amelyek védik érdekeiket és biztosítják a megfelelőséget.</p>
              <div className="pt-4">
                <h4 className="text-xl font-bold text-foreground mb-3">Professzionális jogi dokumentumok affiliate vállalkozásokhoz</h4>
                <p className="text-base text-muted-foreground leading-relaxed">Az affiliate-ekre vonatkozó jogi követelményekkel kapcsolatos számos kérdés megválaszolására kiváló minőségű jogi dokumentumokat dolgoztam ki kifejezetten affiliate weboldalak számára. Ezek a dokumentumok nemzeti és nemzetközi használatra egyaránt alkalmasak, és alapvető védelmet nyújtanak a szokásos költségek töredékéért.</p>
              </div>
            </div>
          </div>
        </div>
        <Card className="mb-8 border-2 border-primary/20 bg-card">
          <CardHeader><CardTitle className="text-2xl flex items-center gap-3"><Shield className="h-8 w-8 text-primary" />Mit kap: A teljes jogi csomag</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-muted-foreground">Teljes csomagunk tartalmazza az <strong>összes, kifejezetten affiliate weboldalakhoz írt jogi dokumentumot</strong>. Nem általános sablonok, hanem professzionális szövegek, amelyek tökéletesen illeszkednek az affiliate üzleti modelljéhez:</p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1">GDPR Adatvédelmi irányelvek</h4><p className="text-sm text-muted-foreground">Teljes mértékben megfelel az európai jogszabályoknak, beleértve a cookie-k használatát és az adatvédelmet</p></div></div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1">Affiliate nyilatkozat</h4><p className="text-sm text-muted-foreground">Átlátható értesítés arról, hogy jutalékot keres, az FTC és EU előírásoknak megfelelően</p></div></div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1 text-foreground">Általános szerződési feltételek</h4><p className="text-sm text-foreground/80">Védi Önt a felelősségi igényektől és szabályozza a látogatókkal való kapcsolatot</p></div></div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1 text-foreground">Jogi nyilatkozat</h4><p className="text-sm text-foreground/80">Korlátozza a felelősségét az Ön által adott ajánlásokért</p></div></div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1 text-foreground">Cookie szabályzat</h4><p className="text-sm text-foreground/80">GDPR-kompatibilis, a nyomkövető és elemzési cookie-k magyarázata</p></div></div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1 text-foreground">Megvalósítási útmutató</h4><p className="text-sm text-foreground/80">Lépésről lépésre szóló utasítások a weboldalán való helyes elhelyezéshez</p></div></div>
            </div>
          </CardContent>
        </Card>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-primary/20 bg-card text-foreground"><CardContent className="pt-6"><Zap className="h-10 w-10 text-primary mb-4" /><h3 className="text-lg font-bold mb-2 text-foreground">Percek alatt kész</h3><p className="text-sm text-foreground/80">Töltse le, töltse ki a cégadatait, és helyezze el a dokumentumokat a weboldalán. Nincs szükség ügyvédre, nincs várakozás.</p></CardContent></Card>
          <Card className="border-primary/20 bg-card text-foreground"><CardContent className="pt-6"><FileCheck className="h-10 w-10 text-blue-600 mb-4" /><h3 className="text-lg font-bold mb-2">Minden weboldalához</h3><p className="text-sm text-muted-foreground">Egy vásárlás, korlátlan használat. Használja ezeket a dokumentumokat minden jelenlegi és jövőbeli affiliate weboldalán!</p></CardContent></Card>
          <Card className="border-primary/20 bg-card text-foreground"><CardContent className="pt-6"><Shield className="h-10 w-10 text-green-600 mb-4" /><h3 className="text-lg font-bold mb-2">Nemzetközi használat</h3><p className="text-sm text-muted-foreground">A sablonok több nyelven letölthetők nemzetközi használatra, így az egész világon alkalmazhatja őket.</p></CardContent></Card>
        </div>
        <Card className="bg-primary border-2 border-primary text-primary-foreground">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary-foreground">Teljes mértékben megfelel a GDPR-nak és a nemzetközi jogszabályoknak. Több nyelven letölthető. Teljes védelem vállalkozása számára.</h3>
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">Mindössze <strong className="text-primary-foreground">egyszeri €79-ért</strong> elintézi az összes jogi kötelezettséget minden affiliate weboldalához. Nincs havi díj, nincs ügyvédi vesződség, nincs bírságkockázat.</p>
            <Button size="lg" onClick={() => scrollToSection("pricing")} className="group text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90">Rendelje meg €79-ért <CheckCircle className="ml-2 h-5 w-5" /></Button>
            <p className="text-sm text-primary-foreground/80 mt-4">💡 Gondolja meg: egy óra ügyvéddel már több mint €200-ba kerül</p>
          </CardContent>
        </Card>
      </div></div>
    </section>
  );
};

export default ValuePropositionHU;
