import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqItems = [
  {
    question: "Warum rechtliche Dokumente für Affiliate-Sites wichtig sind",
    answer: `Als Affiliate-Marketer sind Sie gesetzlich verpflichtet, transparent über Ihr Ertragsmodell und den Umgang mit Besucherdaten zu sein. Ohne die richtigen rechtlichen Dokumente riskieren Sie:
    
• Hohe Bußgelder von Aufsichtsbehörden wie der Datenschutzbehörde - bis zu 20 Millionen Euro oder 4% des Jahresumsatzes
• Ansprüche von Verbrauchern bei irreführenden Informationen
• Ausschluss aus Affiliate-Netzwerken wie Google AdSense
• Reputationsschäden und Vertrauensverlust bei Ihrem Publikum

Die wichtigsten Gesetze, die Sie einhalten müssen, sind die DSGVO, die ePrivacy-Richtlinie und die Vorschriften zur transparenten Affiliate-Marketing wie die FTC-Richtlinien. Mit den richtigen Dokumenten schützen Sie sich selbst und bauen Vertrauen bei Ihren Besuchern auf.`
  },
  {
    question: "Wie integrieren Sie diese Dokumente auf Ihrer Site (Footer, pro Post, nahe bei Links)",
    answer: `Die Platzierung rechtlicher Dokumente ist entscheidend für Compliance und Benutzerfreundlichkeit.

**Footer-Platzierung (erforderlich):**
Platzieren Sie Links zu all Ihren rechtlichen Dokumenten im Footer jeder Seite:
• Datenschutzerklärung
• Allgemeine Geschäftsbedingungen  
• Cookie-Richtlinie
• Haftungsausschluss
• Affiliate-Offenlegung

**Pro Artikel/Post:**
Bei Produktbewertungen und Artikeln mit Affiliate-Links:
• Kurze Offenlegung am Anfang des Artikels (erste 150 Wörter)
• Auffällige Kennzeichnung bei Affiliate-Links, z.B.: [Werbung] oder [Affiliate-Link]
• Link zur vollständigen Offenlegung am Ende des Artikels

**Nahe bei Affiliate-Links:**
• Verwenden Sie eine Abkürzung wie * oder [Werbung] direkt beim Link
• Fügen Sie einen Tooltip beim Hover hinzu mit "Affiliate-Link"
• In Produktboxen: kleiner Haftungsausschluss am Ende

**Best Practices:**
• Verwenden Sie kontrastierende Farben, damit Offenlegungen auffallen
• Machen Sie den Text für nicht-juristisch gebildete Öffentlichkeit verständlich
• Mobilfreundlich - sichtbar ohne Scrollen
• Verwenden Sie Icons für schnelle Erkennung

**Technische Implementierung:**
Unser Implementierungsleitfaden enthält Code-Snippets für WordPress, Shopify, Webflow und HTML-Websites, einschließlich CSS-Styling-Beispiele.`
  },
  {
    question: "Häufig gestellte Fragen (FAQ)",
    answer: `**Sind diese Vorlagen in ganz Europa gültig?**
Ja, unsere Vorlagen entsprechen der DSGVO, die in allen EU-Ländern gilt. Einige Länder haben zusätzliche Regeln - dies wird in den Vorlagen erwähnt.

**Muss ich einen Anwalt konsultieren?**
Unsere Vorlagen sind rechtlich geprüft, aber jedes Unternehmen ist einzigartig. Für komplexe Situationen empfehlen wir immer, rechtlichen Rat einzuholen.

**Kann ich diese Vorlagen für mehrere Websites verwenden?**
Ja! Mit dem Kauf erhalten Sie eine unbegrenzte Lizenz für alle Ihre eigenen Affiliate-Websites.

**Was ist, wenn ich auch Produkte verkaufe, nicht nur Affiliate-Links?**
Dann benötigen Sie zusätzliche Dokumente wie Widerrufsrecht und Versandrichtlinien. Kontaktieren Sie uns für ein maßgeschneidertes Paket.

**Wie oft muss ich meine Dokumente aktualisieren?**
Mindestens 1x pro Jahr, aber auch wenn Sie neue Tools hinzufügen oder die Gesetzgebung sich ändert.

**Schützen mich diese Dokumente vor allen rechtlichen Ansprüchen?**
Kein Dokument bietet 100% Schutz, aber gute rechtliche Dokumente minimieren Ihre Risiken erheblich und zeigen, dass Sie sorgfältig handeln.

**Muss ich den Cookie-Banner separat erwerben?**
Unser Paket enthält die Cookie-Richtlinie (Text), aber für den technischen Cookie-Banner empfehlen wir Tools wie Cookiebot oder CookieYes.

**In welchen Sprachen sind die Vorlagen verfügbar?**
Die Vorlagen können in mehreren Sprachen für die internationale Verwendung heruntergeladen werden, sodass Sie sie auf all Ihren Websites weltweit einsetzen können.`
  },
  {
    question: "Rechtliche Haftungsausschlüsse & Haftungen",
    answer: `**Wichtiger Haftungsausschluss:**

Diese Dokumentvorlagen sind sorgfältig erstellt und geprüft, dienen aber als Ausgangspunkt für Ihre rechtliche Compliance. Legal Affiliate Agreement gibt keine Rechtsberatung und haftet nicht für Schäden, die aus der Verwendung dieser Vorlagen entstehen.

**Haftungsbeschränkung:**
• Vorlagen sind allgemein und möglicherweise nicht für jede spezifische Situation geeignet
• Die Gesetzgebung kann sich nach Veröffentlichung der Vorlagen ändern
• Korrekte Implementierung und Anpassung liegt in Ihrer Verantwortung
• Im Zweifelsfall immer einen spezialisierten Anwalt konsultieren

**Was wir nicht sind:**
• Eine Anwaltskanzlei
• Haftbar für Bußgelder oder Ansprüche, die aus falscher Verwendung entstehen
• Verantwortlich für Anpassungen, die Sie vornehmen
• Ein Ersatz für professionelle Rechtsberatung in komplexen Fällen

**Was wir bieten:**
• Professionell erstellte Vorlagen als solide Grundlage
• Regelmäßige Updates bei größeren Gesetzesänderungen
• Klare Implementierungsanweisungen
• E-Mail-Support für Fragen zu den Vorlagen

**Nutzungsbedingungen:**
Durch die Verwendung dieser Vorlagen stimmen Sie unseren Allgemeinen Geschäftsbedingungen und dem Haftungsausschluss zu. Sie erkennen an, dass rechtliche Compliance Ihre eigene Verantwortung bleibt.

**Eignung:**
Diese Vorlagen sind speziell für Affiliate-Marketing-Websites in Deutschland, Österreich und der Schweiz entwickelt. Für andere Geschäftsmodelle oder Länder können zusätzliche oder andere Dokumente erforderlich sein.

**Professionelle Beratung:**
Bei komplexen Affiliate-Konstruktionen, hohen Umsätzen (>100.000€/Jahr) oder internationalen Aktivitäten empfehlen wir immer, einen Medien- oder Internetrechtsanwalt zu konsultieren.`
  }
];

const FAQDE = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Badge className="mb-4">Häufig gestellte Fragen</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Häufig gestellte Fragen über rechtliche Dokumente
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          Finden Sie Antworten auf die häufigsten Fragen zur rechtlichen Compliance für Affiliate-Websites.
        </p>
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground whitespace-pre-line">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQDE;
