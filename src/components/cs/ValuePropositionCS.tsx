import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, FileCheck } from "lucide-react";
import nicoleProfile from "@/assets/nicole-working.png";

const ValuePropositionCS = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-lg px-4 py-2">Profesionální právní dokumenty pro affiliate podnikání</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Všechny zákonem požadované dokumenty, které vaše affiliate stránky potřebují</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Jako affiliate marketér vyděláváte provize doporučováním produktů. Věděli jste ale, že jste <strong>ze zákona povinni</strong> mít na svých stránkách určité právní dokumenty? Bez těchto dokumentů riskujete vysoké pokuty a právní problémy.
            </p>
            <div id="about-me" className="mt-10 p-8 bg-card rounded-xl border border-border shadow-sm text-foreground">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">O mně</h3>
                <div className="flex justify-center my-4">
                  <img src={nicoleProfile} alt="Nicole Henderson - Právní specialistka" className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-lg" />
                </div>
                <p className="text-2xl font-bold text-primary mb-2">Nicole Henderson</p>
                <p className="text-lg text-muted-foreground font-medium">Právní specialistka specializující se na jasné, přesné a profesionální právní dokumenty</p>
              </div>
              <div className="space-y-4 text-left max-w-3xl mx-auto">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Dobrý den, jsem Nicole Henderson, právní spisovatelka specializující se na jasné, přesné a profesionální právní dokumenty. Sestavuji smlouvy, zásady a dohody pro firmy, organizace a jednotlivce, které chrání vaše zájmy a zajišťují soulad, čímž zjednodušuji právní administrativu.
                </p>
                <div className="pt-4">
                  <h4 className="text-xl font-bold text-foreground mb-3">Profesionální právní dokumenty pro affiliate podnikání</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Abych odpověděla na časté dotazy ohledně právních požadavků pro affiliate, vytvořila jsem kvalitní právní dokumenty speciálně pro affiliate stránky. Tyto dokumenty jsou určeny pro národní i mezinárodní použití a poskytují základní ochranu za zlomek obvyklé ceny. Získejte profesionální právní ochranu za dostupnou cenu — zajistěte své podnikání ještě dnes!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8 border-2 border-primary/20 bg-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3"><Shield className="h-8 w-8 text-primary" />Co získáte: Kompletní právní balíček</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-muted-foreground">Náš kompletní balíček obsahuje <strong>všechny právní dokumenty speciálně napsané pro affiliate stránky</strong>. Nejedná se o generické šablony, ale o profesionální texty dokonale přizpůsobené vašemu affiliate obchodnímu modelu:</p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div><h4 className="font-semibold mb-1">Zásady ochrany osobních údajů (GDPR)</h4><p className="text-sm text-muted-foreground">Plně v souladu s evropskou legislativou, včetně používání cookies a ochrany dat</p></div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div><h4 className="font-semibold mb-1">Affiliate prohlášení</h4><p className="text-sm text-muted-foreground">Transparentní upozornění, že vyděláváte provize, v souladu s FTC a EU předpisy</p></div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div><h4 className="font-semibold mb-1 text-foreground">Obchodní podmínky</h4><p className="text-sm text-foreground/80">Chrání vás před nároky na odpovědnost a reguluje vztah s návštěvníky</p></div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div><h4 className="font-semibold mb-1 text-foreground">Právní prohlášení</h4><p className="text-sm text-foreground/80">Omezuje vaši odpovědnost za doporučení, která poskytujete</p></div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div><h4 className="font-semibold mb-1 text-foreground">Zásady cookies</h4><p className="text-sm text-foreground/80">V souladu s GDPR, vysvětlení sledovacích a analytických cookies</p></div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div><h4 className="font-semibold mb-1 text-foreground">Průvodce implementací</h4><p className="text-sm text-foreground/80">Podrobné pokyny k správnému umístění všeho na vaše stránky</p></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <Zap className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2 text-foreground">Připraveno za minuty</h3>
                <p className="text-sm text-foreground/80">Stáhněte, vyplňte údaje o firmě a umístěte dokumenty na web. Žádný právník, žádné čekání.</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <FileCheck className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Pro všechny vaše stránky</h3>
                <p className="text-sm text-muted-foreground">Jeden nákup, neomezené použití. Použijte tyto dokumenty pro všechny současné i budoucí affiliate stránky!</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <Shield className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Mezinárodní použití</h3>
                <p className="text-sm text-muted-foreground">Šablony jsou dostupné ke stažení ve více jazycích pro mezinárodní použití na všech vašich stránkách po celém světě.</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary border-2 border-primary text-primary-foreground">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">Plně v souladu s GDPR a mezinárodní legislativou. Možnost stažení v různých jazycích. Kompletní ochrana vašeho podnikání.</h3>
              <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">Za pouhých <strong className="text-primary-foreground">€79 jednorázově</strong> vyřešíte všechny právní povinnosti pro všechny vaše affiliate stránky. Žádné měsíční poplatky, žádné starosti s právníky, žádné riziko pokut.</p>
              <Button size="lg" onClick={() => scrollToSection("pricing")} className="group text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Objednat za €79 <CheckCircle className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-primary-foreground/80 mt-4">💡 Zvažte: jedna hodina s právníkem stojí více než €200</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionCS;
