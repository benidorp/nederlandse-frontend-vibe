import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, FileCheck } from "lucide-react";
import nicoleProfile from "@/assets/nicole-working.png";

const ValuePropositionFI = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
              Ammattimaiset Juridiset Asiakirjat Affiliate-yrityksille
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Kaikki Lakisääteisesti Vaaditut Asiakirjat Affiliate-sivustollesi
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Affiliate-markkinoijana ansaitset provisioita suosittelemalla tuotteita. Mutta tiesitkö, että sinun on 
              <strong> lakisääteisesti</strong> oltava tiettyjä juridisia asiakirjoja verkkosivustollasi? 
              Ilman näitä asiakirjoja riskeeraat korkeat sakot ja oikeudelliset ongelmat.
            </p>
            
            <div id="about-me" className="mt-10 p-8 bg-card rounded-xl border border-border shadow-sm text-foreground">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Tietoa Minusta</h3>
                <div className="flex justify-center my-4">
                  <img 
                    src={nicoleProfile} 
                    alt="Nicole Henderson - Juridiikan asiantuntija" 
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                  />
                </div>
                <p className="text-2xl font-bold text-primary mb-2">Nicole Henderson</p>
                <p className="text-lg text-muted-foreground font-medium">
                  Juridiikan asiantuntija erikoistunut selkeisiin, täsmällisiin ja ammattimaisiin juridisiin asiakirjoihin
                </p>
              </div>
              
              <div className="space-y-4 text-left max-w-3xl mx-auto">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Hei, olen Nicole Henderson, juridinen kirjoittaja erikoistunut selkeisiin, tarkkoihin ja ammattimaisiin juridisiin asiakirjoihin. Laadin sopimuksia, käytäntöjä ja sopimuksia yrityksille, organisaatioille ja yksityishenkilöille, jotka suojaavat etujasi ja varmistavat vaatimustenmukaisuuden, tehden juridisesta paperityöstä yksinkertaista ja stressitöntä.
                </p>
                
                <div className="pt-4">
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    Ammattimaiset Juridiset Asiakirjat Affiliate-yrityksille
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Vastatakseni moniin kysymyksiin affiliate-toiminnan lakisääteisistä vaatimuksista, olen kehittänyt korkealaatuisia juridisia asiakirjoja erityisesti affiliate-sivustoille. Nämä asiakirjat on suunniteltu sekä kansalliseen että kansainväliseen käyttöön ja tarjoavat olennaisen suojan murto-osalla tavallisista kustannuksista. Hanki ammattimainen juridinen suoja edulliseen hintaan—turvaa liiketoimintasi tänään!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8 border-2 border-primary/20 bg-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                Mitä Saat: Täydellinen Juridinen Paketti
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Täydellinen pakettimme sisältää <strong>kaikki juridiset asiakirjat erityisesti kirjoitettuna affiliate-sivustoille</strong>. 
                Ei geneerisiä malleja, vaan ammattimaisia tekstejä, jotka sopivat täydellisesti affiliate-liiketoimintamallillesi:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">GDPR Tietosuojakäytäntö</h4>
                    <p className="text-sm text-muted-foreground">Täysin eurooppalaisen lainsäädännön mukainen, mukaan lukien evästeiden käyttö ja tietosuoja</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Affiliate-tiedonanto</h4>
                    <p className="text-sm text-muted-foreground">Läpinäkyvä ilmoitus provisioiden ansaitsemisesta, FTC- ja EU-säädösten mukainen</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Käyttöehdot</h4>
                    <p className="text-sm text-foreground/80">Suojaa sinua vastuuvaatimuksilta ja säätelee suhdetta kävijöihin</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Juridinen Vastuuvapauslauseke</h4>
                    <p className="text-sm text-foreground/80">Rajoittaa vastuutasi antamistasi suosituksista</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Evästekäytäntö</h4>
                    <p className="text-sm text-foreground/80">GDPR-yhteensopiva, selitys seuranta- ja analytiikkaevästeistä</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Toteutusopas</h4>
                    <p className="text-sm text-foreground/80">Vaiheittaiset ohjeet kaiken oikein sijoittamiseen verkkosivustollesi</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <Zap className="h-10 w-10 text-navy mb-4" />
                <h3 className="text-lg font-bold mb-2 text-foreground">Valmis Minuuteissa</h3>
                <p className="text-sm text-foreground/80">
                  Lataa, täytä yritystietosi ja sijoita asiakirjat verkkosivustollesi. Ei lakimiestä tarvita, ei viikkojen odotusta.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <FileCheck className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Kaikille Sivustoillesi</h3>
                <p className="text-sm text-muted-foreground">
                  Yksi osto, rajaton käyttö. Käytä näitä asiakirjoja kaikille nykyisille ja tuleville affiliate-sivustoillesi!
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <Shield className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Kansainvälinen Käyttö</h3>
                <p className="text-sm text-muted-foreground">
                  Mallit ovat ladattavissa useilla kielillä kansainväliseen käyttöön, joten voit ottaa ne käyttöön kaikilla verkkosivustoillasi maailmanlaajuisesti.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary border-2 border-primary text-primary-foreground">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                Täysin GDPR:n ja kansainvälisen lainsäädännön mukainen. Mahdollisuus ladata eri kielillä kansainväliseen käyttöön. Täydellinen suoja liiketoiminnallesi.
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Vain <strong className="text-primary-foreground">79 € kertamaksulla</strong> järjestät kaikki lakisääteiset velvoitteet 
                kaikille affiliate-sivustoillesi. Ei kuukausimaksuja, ei vaivaa lakimiesten kanssa, ei sakkoriskiä. 
                Vain kaikki tarvitsemasi asiakirjat, käyttövalmiina.
              </p>
              <Button 
                size="lg" 
                onClick={() => scrollToSection("pricing")} 
                className="group text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Tilaa Nyt 79 €
                <CheckCircle className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-primary-foreground/80 mt-4">
                💡 Huomioi tämä: yksi tunti lakimiehen kanssa maksaa jo yli 200 €
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionFI;