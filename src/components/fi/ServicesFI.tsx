import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Tietosuojakäytäntö",
    description: "Täydellinen GDPR-lainsäädännön mukainen tietosuojakäytäntö",
    details: [
      "Käyttäjien oikeudet GDPR:n mukaan",
      "Mitä tietoja kerätään",
      "Miten ja miksi näitä tietoja käytetään",
      "Tietojen jakaminen kolmansille osapuolille"
    ]
  },
  {
    icon: AlertCircle,
    title: "Vastuuvapauslauseke",
    description: "Oikeudellinen suoja vastuuvaatimuksia vastaan",
    details: [
      "Ei takuuta tuloksista",
      "Ei vastuuta tiedoista",
      "Ilmoitus affiliate-linkeistä ja provisioista"
    ]
  },
  {
    icon: FileText,
    title: "Affiliate-tiedonanto",
    description: "Läpinäkyvä tiedonanto FTC-ohjeiden mukainen",
    details: [
      "Läpinäkyvyys mainostajista",
      "Selkeä provisioiden tiedonanto",
      "EU- ja US-säädösten mukainen"
    ]
  },
  {
    icon: ScrollText,
    title: "Käyttöehdot",
    description: "Säätelee verkkosivustosi ja käyttäjien välistä suhdetta",
    details: [
      "Vastuun rajoittaminen",
      "Käyttörajoitukset",
      "Immateriaalioikeudet"
    ]
  },
  {
    icon: Cookie,
    title: "Evästekäytäntö",
    description: "Täydellinen evästeiden vaatimustenmukaisuus ja suostumus",
    details: [
      "Selitys evästeiden käytöstä",
      "GDPR-yhteensopiva suostumus",
      "Analyyttisten evästeiden hallinta"
    ]
  },
  {
    icon: BookOpen,
    title: "Toteutusopas",
    description: "Vaiheittaiset ohjeet toteutukseen",
    details: [
      "Yksinkertaiset asennusohjeet",
      "Asiakirjojen oikea sijoittelu",
      "Mukauttamisvinkit verkkosivustollesi"
    ]
  }
];

const ServicesFI = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Palvelumme</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Olennaiset Juridiset Asiakirjat
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Affiliate-sivustolle seuraavat juridiset asiakirjat ovat välttämättömiä. 
            Pakettimme sisältää kaiken tarvitsemasi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-card text-foreground border-border">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Täydellinen Kaikille Affiliateille</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Tuhansien affiliate-sivustojen kanssa mukautettavat asiakirjamme sopivat jokaiselle affiliate-liiketoiminnalle. 
                Keskity provisioiden ansaitsemiseen—olemme tehneet juridisesta vaatimustenmukaisuudesta helppoa!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">KAIKILLE Sivustoillesi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Olennaiset juridiset asiakirjat kaikille affiliate-sivustoillesi. Kyllä, voit käyttää niitä 
                KAIKILLE sivustoillesi ilman erillisten lisenssien ostamista!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Minimoi Riskisi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                "Vaikka takuita ei ole olemassa eikä mikään asiakirja voi taata kaikkea, nämä juridiset asiakirjat on suunniteltu vähentämään riskejäsi ja tarjoamaan sinulle maksimaalisen suojan. Ne antavat sinulle varmuuden selkeistä ja luotettavista ehdoista."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesFI;