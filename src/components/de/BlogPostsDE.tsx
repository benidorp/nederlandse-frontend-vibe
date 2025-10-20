import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const blogPosts = [{
  title: "DSGVO-konforme Affiliate-Marketing: Ein vollständiger Leitfaden für 2024",
  excerpt: "Erfahren Sie, wie Sie Ihre Affiliate-Website vollständig DSGVO-konform machen und Bußgelder vermeiden.",
  content: `Die Datenschutz-Grundverordnung (DSGVO) hat große Auswirkungen darauf, wie Affiliate-Marketer arbeiten. In diesem Leitfaden behandeln wir alle wesentlichen Aspekte:

**Personenbezogene Daten und Affiliate-Marketing**
Als Affiliate-Marketer sammeln Sie oft mehr personenbezogene Daten, als Sie denken. IP-Adressen, Cookie-Daten und Klickverhalten fallen alle unter die DSGVO. Es ist entscheidend, genau zu wissen, welche Daten Sie sammeln und warum.

**Einwilligungsanforderungen**
Unter der DSGVO müssen Sie ausdrückliche Einwilligung für nicht-essentielle Cookies einholen. Dies bedeutet, dass Ihr Cookie-Banner erscheinen muss, bevor das Tracking beginnt, nicht danach. Vorangekreuzte Kästchen sind nicht erlaubt.

**Transparenzpflichten**
Sie müssen klar sein über:
• Welche Daten Sie sammeln
• Warum Sie sie sammeln
• Mit wem Sie sie teilen (Affiliate-Netzwerke, Analytics-Plattformen)
• Wie lange Sie sie speichern

**Besucherrechte**
Nutzer haben das Recht auf Auskunft, Berichtigung, Löschung und Datenübertragbarkeit. Sie müssen einen Prozess haben, um diesen Anfragen innerhalb von 30 Tagen nachzukommen.

**Bußgelder und Durchsetzung**
Die Datenschutzbehörde kann Bußgelder bis zu 20 Millionen Euro oder 4% des weltweiten Jahresumsatzes verhängen. Selbst kleine Affiliate-Sites sind nicht von der Durchsetzung befreit.

**Praktische Schritte**
1. Führen Sie ein Daten-Audit durch
2. Implementieren Sie einen Cookie-Banner mit echter Wahl
3. Aktualisieren Sie Ihre Datenschutzerklärung
4. Richten Sie Prozesse für Nutzeranfragen ein
5. Dokumentieren Sie Ihre DSGVO-Compliance`
}, {
  title: "Cookie-Banner implementieren: Technischer Leitfaden für Affiliate-Websites",
  content: `Ein korrekter Cookie-Banner ist essenziell für DSGVO-Compliance. Dieser Leitfaden hilft Ihnen Schritt für Schritt.

**Cookie-Kategorien**
Kategorisieren Sie Ihre Cookies korrekt:
• Streng erforderlich (keine Einwilligung erforderlich)
• Funktional (gewünscht, aber nicht streng notwendig)
• Analytics (Einwilligung erforderlich)
• Marketing/Affiliate-Tracking (Einwilligung erforderlich)

**Banner-Timing**
Der Banner muss erscheinen, bevor Cookies gesetzt werden. Dies bedeutet, dass Sie Tracking-Skripte blockieren müssen, bis die Einwilligung erteilt wurde.

**Implementierungsoptionen**

*Cookiebot (Premium)*
Vorteile: Automatisches Cookie-Scannen, rechtlich aktuell, Unterstützung für 45+ Sprachen
Nachteile: Kostenpflichtig ab 9€/Monat
Beste Wahl für: Professionelle Affiliate-Sites mit hohem Traffic

*CookieYes (Budget-freundlich)*
Vorteile: Kostenloser Plan verfügbar, einfache Einrichtung
Nachteile: Begrenzte Features in der kostenlosen Version
Beste Wahl für: Einsteiger-Affiliate-Marketer

*OneTrust (Enterprise)*
Vorteile: Umfangreiche Compliance-Features, Multi-Plattform
Nachteile: Teuer, komplexe Einrichtung
Beste Wahl für: Große Affiliate-Netzwerke

**Technische Implementierung**
Für Google Analytics müssen Sie das Tracking blockieren, bis die Einwilligung erteilt wurde. Dies tun Sie, indem Sie zuerst die Einwilligung auf 'denied' setzen und erst nach Einwilligung auf 'granted'.

**Affiliate-Link-Tracking**
Einige Affiliate-Netzwerke verwenden Cookies. Stellen Sie sicher, dass Sie:
• Einwilligung für Affiliate-Cookies einholen
• Alternative Tracking-Methoden in Betracht ziehen (Server-seitig)
• Klar über Provisionseinnahmen sind

**Testen**
Testen Sie Ihren Banner in verschiedenen Browsern und Geräten. Überprüfen Sie, dass:
• Cookies erst nach Einwilligung gesetzt werden
• Die Ablehnen-Schaltfläche wirklich funktioniert
• Präferenzen gespeichert werden`
}];

const BlogPostsDE = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <Badge className="mb-4">Umfassende Informationen</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Alles, was Sie über rechtliche Dokumente wissen müssen
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Klicken Sie auf die Themen, um mehr über jeden Aspekt der rechtlichen Compliance für Affiliate-Websites zu lesen.
        </p>
        <Accordion type="single" collapsible className="space-y-4">
          {blogPosts.map((post, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <Card className="border-0 shadow-sm">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <div className="text-left">
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    {post.excerpt && (
                      <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="prose prose-sm max-w-none whitespace-pre-line text-muted-foreground">
                    {post.content}
                  </div>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default BlogPostsDE;
