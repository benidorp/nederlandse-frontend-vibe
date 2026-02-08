import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, FileCheck } from "lucide-react";
import nicoleProfile from "@/assets/nicole-working.png";

const ValuePropositionSL = () => {
  const scrollToSection = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  return (
    <section className="py-20 bg-background"><div className="container"><div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4 text-lg px-4 py-2">Profesionalni pravni dokumenti za affiliate poslovanje</Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Vsi zakonsko potrebni dokumenti za vaše affiliate spletne strani</h2>
        <p className="text-xl text-muted-foreground leading-relaxed">Kot affiliate tržnik zaslužite provizije s priporočanjem izdelkov. Ali ste vedeli, da ste <strong>zakonsko obvezani</strong> imeti določene pravne dokumente na svoji spletni strani? Brez teh dokumentov tvegate visoke globe in pravne težave.</p>
        <div id="about-me" className="mt-10 p-8 bg-card rounded-xl border border-border shadow-sm text-foreground">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">O meni</h3>
            <div className="flex justify-center my-4"><img src={nicoleProfile} alt="Nicole Henderson - Pravna strokovnjakinja" className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-lg" /></div>
            <p className="text-2xl font-bold text-primary mb-2">Nicole Henderson</p>
            <p className="text-lg text-muted-foreground font-medium">Pravna strokovnjakinja, specializirana za jasne, natančne in profesionalne pravne dokumente</p>
          </div>
          <div className="space-y-4 text-left max-w-3xl mx-auto">
            <p className="text-base text-muted-foreground leading-relaxed">Pozdravljeni, sem Nicole Henderson, pravna avtorica, specializirana za jasne, natančne in profesionalne pravne dokumente. Pripravljam pogodbe, pravilnike in sporazume za podjetja, organizacije in posameznike, ki ščitijo vaše interese in zagotavljajo skladnost.</p>
            <div className="pt-4">
              <h4 className="text-xl font-bold text-foreground mb-3">Profesionalni pravni dokumenti za affiliate poslovanje</h4>
              <p className="text-base text-muted-foreground leading-relaxed">Da bi odgovorila na številna vprašanja o pravnih zahtevah za affiliate, sem razvila kakovostne pravne dokumente posebej za affiliate spletne strani. Ti dokumenti so namenjeni za nacionalno in mednarodno uporabo in zagotavljajo bistveno zaščito za delček običajne cene.</p>
            </div>
          </div>
        </div>
      </div>
      <Card className="mb-8 border-2 border-primary/20 bg-card">
        <CardHeader><CardTitle className="text-2xl flex items-center gap-3"><Shield className="h-8 w-8 text-primary" />Kaj dobite: Celoten pravni paket</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg text-muted-foreground">Naš celoten paket vsebuje <strong>vse pravne dokumente, posebej napisane za affiliate strani</strong>:</p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1">Pravilnik o zasebnosti (GDPR)</h4><p className="text-sm text-muted-foreground">Popolnoma skladen z evropsko zakonodajo</p></div></div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1">Affiliate razkritje</h4><p className="text-sm text-muted-foreground">Pregledno obvestilo o provizijah v skladu s FTC in EU</p></div></div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1 text-foreground">Splošni pogoji</h4><p className="text-sm text-foreground/80">Ščiti vas pred odškodninskimi zahtevki in ureja razmerje z obiskovalci</p></div></div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1 text-foreground">Pravna izjava o omejitvi odgovornosti</h4><p className="text-sm text-foreground/80">Omejuje vašo odgovornost za priporočila, ki jih dajete</p></div></div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1 text-foreground">Pravilnik o piškotkih</h4><p className="text-sm text-foreground/80">Skladen z GDPR, pojasnilo o piškotkih za sledenje in analitiko</p></div></div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"><CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" /><div><h4 className="font-semibold mb-1 text-foreground">Vodnik za implementacijo</h4><p className="text-sm text-foreground/80">Navodila po korakih za pravilno umestitev na vaši strani</p></div></div>
          </div>
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="border-primary/20 bg-card text-foreground"><CardContent className="pt-6"><Zap className="h-10 w-10 text-primary mb-4" /><h3 className="text-lg font-bold mb-2 text-foreground">Pripravljeno v minutah</h3><p className="text-sm text-foreground/80">Prenesite, izpolnite podatke podjetja in namestite dokumente na spletno stran.</p></CardContent></Card>
        <Card className="border-primary/20 bg-card text-foreground"><CardContent className="pt-6"><FileCheck className="h-10 w-10 text-blue-600 mb-4" /><h3 className="text-lg font-bold mb-2">Za vse vaše strani</h3><p className="text-sm text-muted-foreground">En nakup, neomejena uporaba za vse affiliate strani!</p></CardContent></Card>
        <Card className="border-primary/20 bg-card text-foreground"><CardContent className="pt-6"><Shield className="h-10 w-10 text-green-600 mb-4" /><h3 className="text-lg font-bold mb-2">Mednarodna uporaba</h3><p className="text-sm text-muted-foreground">Predloge so na voljo za prenos v več jezikih za mednarodno uporabo.</p></CardContent></Card>
      </div>
      <Card className="bg-primary border-2 border-primary text-primary-foreground">
        <CardContent className="pt-6 text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary-foreground">Popolnoma skladno z GDPR in mednarodno zakonodajo. Možnost prenosa v različnih jezikih. Popolna zaščita za vaše poslovanje.</h3>
          <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">Za le <strong className="text-primary-foreground">enkratnih €79</strong> uredite vse pravne obveznosti za vse vaše affiliate strani.</p>
          <Button size="lg" onClick={() => scrollToSection("pricing")} className="group text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90">Naročite za €79 <CheckCircle className="ml-2 h-5 w-5" /></Button>
          <p className="text-sm text-primary-foreground/80 mt-4">💡 Premislite: ena ura z odvetnikom stane več kot €200</p>
        </CardContent>
      </Card>
    </div></div></section>
  );
};

export default ValuePropositionSL;
