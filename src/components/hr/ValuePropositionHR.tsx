import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, FileCheck } from "lucide-react";
import nicoleProfile from "@/assets/nicole-working.png";

const ValuePropositionHR = () => {
  const scrollToSection = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  return (
    <section className="py-20 bg-background"><div className="container"><div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4 text-lg px-4 py-2">Profesionalni pravni dokumenti za affiliate poslovanje</Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Svi zakonski potrebni dokumenti za vaše affiliate stranice</h2>
        <p className="text-xl text-muted-foreground leading-relaxed">Kao affiliate marketer zarađujete provizije preporučivanjem proizvoda. Ali jeste li znali da ste <strong>zakonski obvezni</strong> imati određene pravne dokumente na svojoj web stranici? Bez tih dokumenata riskirate visoke kazne i pravne probleme.</p>
        <div id="about-me" className="mt-10 p-8 bg-card rounded-xl border border-border shadow-sm text-foreground">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">O meni</h3>
            <div className="flex justify-center my-4"><img src={nicoleProfile} alt="Nicole Henderson - Pravna stručnjakinja" className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-lg" /></div>
            <p className="text-2xl font-bold text-primary mb-2">Nicole Henderson</p>
            <p className="text-lg text-muted-foreground font-medium">Pravna stručnjakinja specijalizirana za jasne, precizne i profesionalne pravne dokumente</p>
          </div>
          <div className="space-y-4 text-left max-w-3xl mx-auto">
            <p className="text-base text-muted-foreground leading-relaxed">Pozdrav, ja sam Nicole Henderson, pravna autorica specijalizirana za jasne, precizne i profesionalne pravne dokumente. Izrađujem ugovore, politike i sporazume za tvrtke, organizacije i pojedince koji štite vaše interese i osiguravaju usklađenost.</p>
            <div className="pt-4">
              <h4 className="text-xl font-bold text-foreground mb-3">Profesionalni pravni dokumenti za affiliate poslovanje</h4>
              <p className="text-base text-muted-foreground leading-relaxed">Kako bih odgovorila na brojne upite o pravnim zahtjevima za affiliate, razvila sam kvalitetne pravne dokumente posebno za affiliate web stranice. Ovi dokumenti su namijenjeni za nacionalnu i međunarodnu upotrebu i pružaju bitnu zaštitu za djelić uobičajene cijene.</p>
            </div>
          </div>
        </div>
      </div>
      <Card className="mb-8 border-2 border-primary/20 bg-card">
        <CardHeader><CardTitle className="text-2xl flex items-center gap-3"><Shield className="h-8 w-8 text-primary" />Što dobivate: Kompletan pravni paket</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg text-muted-foreground">Naš kompletni paket sadrži <strong>sve pravne dokumente posebno napisane za affiliate stranice</strong>:</p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1">Politika privatnosti (GDPR)</h4><p className="text-sm text-muted-foreground">Potpuno usklađena s europskim zakonodavstvom</p></div></div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1">Affiliate izjava</h4><p className="text-sm text-muted-foreground">Transparentna obavijest o provizijama u skladu s FTC i EU</p></div></div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1 text-foreground">Uvjeti korištenja</h4><p className="text-sm text-foreground/80">Štiti vas od odštetnih zahtjeva i regulira odnos s posjetiteljima</p></div></div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1 text-foreground">Pravna izjava o odricanju</h4><p className="text-sm text-foreground/80">Ograničava vašu odgovornost za preporuke koje dajete</p></div></div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1 text-foreground">Politika kolačića</h4><p className="text-sm text-foreground/80">Usklađena s GDPR-om, objašnjenje praćenja i analitičkih kolačića</p></div></div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1 text-foreground">Vodič za implementaciju</h4><p className="text-sm text-foreground/80">Korak-po-korak upute za pravilno postavljanje</p></div></div>
          </div>
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="border-primary/20 bg-card text-foreground"><CardContent className="pt-6"><Zap className="h-10 w-10 text-primary mb-4" /><h3 className="text-lg font-bold mb-2 text-foreground">Spremno u minutama</h3><p className="text-sm text-foreground/80">Preuzmite, unesite podatke tvrtke i postavite dokumente na web.</p></CardContent></Card>
        <Card className="border-primary/20 bg-card text-foreground"><CardContent className="pt-6"><FileCheck className="h-10 w-10 text-blue-600 mb-4" /><h3 className="text-lg font-bold mb-2">Za sve vaše stranice</h3><p className="text-sm text-muted-foreground">Jedna kupnja, neograničena upotreba za sve affiliate stranice!</p></CardContent></Card>
        <Card className="border-primary/20 bg-card text-foreground"><CardContent className="pt-6"><Shield className="h-10 w-10 text-green-600 mb-4" /><h3 className="text-lg font-bold mb-2">Međunarodna upotreba</h3><p className="text-sm text-muted-foreground">Predlošci su dostupni za preuzimanje na više jezika za međunarodnu upotrebu.</p></CardContent></Card>
      </div>
      <Card className="bg-primary border-2 border-primary text-primary-foreground">
        <CardContent className="pt-6 text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary-foreground">Potpuno usklađeno s GDPR-om i međunarodnim zakonodavstvom. Mogućnost preuzimanja na različitim jezicima. Potpuna zaštita za vaše poslovanje.</h3>
          <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">Za samo <strong className="text-primary-foreground">jednokratnih €79</strong> riješite sve pravne obveze za sve vaše affiliate stranice.</p>
          <Button size="lg" onClick={() => scrollToSection("pricing")} className="group text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90">Naručite za €79 <CheckCircle className="ml-2 h-5 w-5" /></Button>
          <p className="text-sm text-primary-foreground/80 mt-4">💡 Razmislite: jedan sat s odvjetnikom košta više od €200</p>
        </CardContent>
      </Card>
    </div></div></section>
  );
};

export default ValuePropositionHR;
