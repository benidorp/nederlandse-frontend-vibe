import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import SafeMarkdown from "@/components/ui/safe-markdown";

const faqItems = [
  {
    question: "Miksi juridiset asiakirjat ovat tärkeitä affiliate-sivustoille",
    answer: `Affiliate-markkinoijana sinun on lakisääteisesti oltava läpinäkyvä liiketoimintamallisi ja kävijätietojen käsittelyn suhteen. Ilman asianmukaisia juridisia asiakirjoja riskeeraat:
    
• Kovat sakot sääntelyviranomaisilta kuten tietosuojaviranomaisilta - jopa 20 miljoonaa euroa tai 4% vuotuisesta liikevaihdosta
• Kuluttajien vaatimukset harhaanjohtavasta tiedosta
• Poistamisen affiliate-verkostoista kuten Google AdSense
• Maineen vahingoittumisen ja luottamuksen menetyksen yleisöltäsi

Tärkeimmät lainsäädännöt, joita sinun on noudatettava, ovat GDPR, ePrivacy-direktiivi ja läpinäkyvää affiliate-markkinointia koskevat säädökset kuten FTC-ohjeet. Oikeilla asiakirjoilla suojaat itsesi ja rakennat luottamusta kävijöidesi kanssa.`
  },
  {
    question: "Kuinka integroida nämä asiakirjat sivustollesi (alatunniste, artikkeleittain, linkkien lähellä)",
    answer: `Juridisten asiakirjojen sijoittelu on ratkaisevan tärkeää vaatimustenmukaisuuden ja käyttäjäystävällisyyden kannalta.

**Alatunnisteen sijoittelu (pakollinen):**
Sijoita linkit kaikkiin juridisiin asiakirjoihisi jokaisen sivun alatunnisteeseen:
• Tietosuojakäytäntö
• Käyttöehdot  
• Evästekäytäntö
• Vastuuvapauslauseke
• Affiliate-tiedonanto

**Artikkeli-/viestikotaisesti:**
Tuotearvosteluissa ja artikkeleissa, joissa on affiliate-linkkejä:
• Lyhyt tiedonanto artikkelin alussa (ensimmäiset 150 sanaa)
• Affiliate-linkkien näkyvä merkintä, esimerkiksi: [MAINOS] tai [affiliate-linkki]
• Linkki täydelliseen tiedonantoon artikkelin lopussa

**Affiliate-linkkien lähellä:**
• Käytä lyhennettä kuten * tai [MAINOS] suoraan linkin vieressä
• Lisää vihjeteksti hover-tilassa "affiliate-linkki"
• Tuotelaatikoissa: pieni vastuuvapauslauseke alareunassa

**Parhaat käytännöt:**
• Käytä kontrastivärejä, jotta tiedonannot erottuvat
• Tee teksti ymmärrettäväksi ei-juridisille yleisöille
• Mobiiliystävällinen - näkyvissä ilman vieritystä
• Käytä kuvakkeita nopeaan tunnistamiseen

**Tekninen toteutus:**
Toteutusoppaamme sisältää koodinpätkät WordPressille, Shopifylle, Webflowlle ja HTML-sivustoille, mukaan lukien CSS-tyylittelyesimerkit.`
  },
  {
    question: "Usein Kysytyt Kysymykset (UKK)",
    answer: `**Ovatko nämä mallipohjat voimassa koko Euroopassa?**
Kyllä, mallipohajmme noudattavat GDPR:ää, joka pätee kaikissa EU-maissa. Joissain maissa on lisäsääntöjä - tämä mainitaan mallipohjissa.

**Tarvitsenko lakimiehen konsultaatiota?**
Mallipohjamme on juridisesti tarkastettu, mutta jokainen yritys on ainutlaatuinen. Monimutkaisissa tilanteissa suosittelemme aina juridisen neuvon hakemista.

**Voinko käyttää näitä mallipohjia useille sivustoille?**
Kyllä! Ostolla saat rajoittamattoman lisenssin kaikille omille affiliate-sivustoillesi.

**Entä jos myyn myös tuotteita, en vain affiliate-linkkejä?**
Silloin tarvitset lisäasiakirjoja kuten Peruutusoikeus ja Toimituskäytäntö. Ota yhteyttä räätälöidystä paketista.

**Kuinka usein minun pitäisi päivittää asiakirjojani?**
Vähintään kerran vuodessa, mutta myös kun lisäät uusia työkaluja tai lainsäädäntö muuttuu.

**Suojaavatko nämä asiakirjat minua kaikilta oikeudellisilta vaatimuksilta?**
Mikään asiakirja ei tarjoa 100% suojaa, mutta hyvät juridiset asiakirjat minimoivat riskisi merkittävästi ja osoittavat, että toimit huolellisesti.

**Tarvitseeko evästebannerini ostaa erikseen?**
Pakettimme sisältää evästekäytännön (teksti), mutta tekniseen evästebanneriin suosittelemme työkaluja kuten Cookiebot tai CookieYes.

**Millä kielillä mallipohjat ovat saatavilla?**
Mallipohjat voidaan ladata useilla kielillä kansainväliseen käyttöön, joten voit ottaa ne käyttöön kaikilla sivustoillasi maailmanlaajuisesti.`
  },
  {
    question: "Juridiset vastuuvapauslausekkeet & vastuut",
    answer: `**Tärkeä vastuuvapauslauseke:**

Nämä asiakirjamallit on huolellisesti laadittu ja tarkastettu, mutta ne toimivat lähtökohtana juridiselle vaatimustenmukaisuudellesi. Legal Affiliate Agreement ei tarjoa juridista neuvontaa eikä ole vastuussa vahingoista, jotka aiheutuvat näiden mallien käytöstä.

**Vastuun rajoittaminen:**
• Mallit ovat yleisiä eivätkä välttämättä sovi jokaiseen erityistilanteeseen
• Lainsäädäntö saattaa muuttua mallien julkaisun jälkeen
• Oikea toteutus ja mukauttaminen ovat sinun vastuullasi
• Epävarmuuden vallitessa konsultoi aina erikoistunutta lakimiestä

**Mitä emme ole:**
• Lakitoimisto
• Vastuussa sakoista tai vaatimuksista väärästä käytöstä
• Vastuussa tekemistäsi muutoksista
• Korvaus ammattimaiselle juridiselle neuvonnalle monimutkaisissa tapauksissa

**Mitä tarjoamme:**
• Ammattimaisesti laaditut mallit vankaksi pohjaksi
• Säännölliset päivitykset merkittävissä lainsäädäntömuutoksissa
• Selkeät toteutusohjeet
• Sähköpostituki mallipohjia koskevissa kysymyksissä

**Käyttöehdot:**
Käyttämällä näitä malleja hyväksyt käyttöehtomme ja vastuuvapauslausekkeemme. Tunnustat, että juridinen vaatimustenmukaisuus pysyy omalla vastuullasi.

**Soveltuvuus:**
Nämä mallit on erityisesti kehitetty affiliate-markkinoinnin sivustoille. Muille liiketoimintamalleille tai maille saatetaan tarvita lisä- tai erilaisia asiakirjoja.

**Ammattimainen neuvonta:**
Monimutkaisille affiliate-rakenteille, korkeille tuloille (>100 000 €/vuosi) tai kansainväliselle toiminnalle suosittelemme aina media- tai internetoikeuteen erikoistuneen lakimiehen konsultointia.`
  }
];

const FAQFI = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">UKK</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Usein Kysytyt Kysymykset
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Löydä vastaukset yleisimpiin kysymyksiin juridisista asiakirjoista affiliate-sivustoille
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <SafeMarkdown content={item.answer} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQFI;