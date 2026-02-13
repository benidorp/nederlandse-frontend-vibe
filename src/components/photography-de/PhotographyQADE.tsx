import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const questions = [
  {
    question: "Warum brauche ich als Fotograf Rechtsdokumente?",
    answer: "Als professioneller Fotograf benötigen Sie aus mehreren Gründen rechtlichen Schutz: um Ihr Urheberrecht zu schützen, klare Bedingungen mit Kunden zu definieren, die DSGVO bei der Erfassung von Kundendaten einzuhalten, Zahlungs- und Stornierungsrichtlinien festzulegen und sich vor Haftungsansprüchen zu schützen. Ohne ordnungsgemäße Rechtsdokumente setzen Sie sich finanziellen und rechtlichen Risiken aus."
  },
  {
    question: "Was ist in der Auftragsvereinbarung (Offerte) enthalten?",
    answer: "Die Auftragsvereinbarung enthält eine vollständige Vertragsvorlage, die Sie für jeden Kunden anpassen können. Sie umfasst Honorare, Zahlungsbedingungen, Auftragsdetails, Lieferfristen, Urheberrecht, Nutzungsrechte und Stornierungsrichtlinien. Wir stellen auch Mustervereinbarungen und einsatzbereite E-Mail-Vorlagen bereit, die Sie beim Kundenkontakt kopieren und einfügen können."
  },
  {
    question: "Wie schützt mich die Verzichtserklärung als Fotograf?",
    answer: "Die Verzichtserklärung ermöglicht es Ihnen, vor dem Shooting klare rechtliche Vereinbarungen mit den fotografierten Personen zu treffen. Sie umfasst Model-Releases, Bildrechte, Nutzungsgenehmigungen und Haftungsverzichte. Dies schützt Sie vor zukünftigen Ansprüchen und stellt sicher, dass Sie eine dokumentierte Einwilligung für die Nutzung und Veröffentlichung der erstellten Fotos haben."
  },
  {
    question: "Kann ich diese Dokumente für verschiedene Fotografie-Spezialgebiete verwenden?",
    answer: "Ja! Ob Sie Porträtfotograf, Hochzeitsfotograf, Werbefotograf, Eventfotograf sind oder in mehreren Spezialgebieten arbeiten – diese Dokumente sind flexibel und anpassbar für jede Art von Fotografieunternehmen. Passen Sie einfach die spezifischen Dienstleistungen und Bedingungen an Ihr Geschäftsmodell an."
  },
  {
    question: "Ist der Urheberrechtsschutz international gültig?",
    answer: "Ja, das Dokument zum Urheberrechtsschutz (Auteursrecht) ist unter Berücksichtigung internationaler Abdeckung erstellt und bezieht sich auf die Berner Konvention und andere internationale Urheberrechtsverträge. Es begründet Ihr Eigentum an allen fotografischen Werken und legt klare Bedingungen für Lizenzierung, Namensnennung und Durchsetzung in verschiedenen Ländern fest."
  },
  {
    question: "Brauche ich eine Datenschutzerklärung, wenn ich nur ein Kontaktformular habe?",
    answer: "Ja! Gemäß der DSGVO und anderen Datenschutzgesetzen sind Sie gesetzlich verpflichtet, eine Datenschutzerklärung zu haben, wenn Sie persönliche Daten über Ihre Website erfassen (auch nur einen Namen und eine E-Mail über ein Kontaktformular). Unsere fotografenspezifische Datenschutzerklärung deckt alle gängigen Szenarien ab, einschließlich Kontaktformulare, Buchungssysteme und Kundendatenverwaltung."
  },
  {
    question: "Kann ich diese Dokumente für meine spezifischen Dienstleistungen anpassen?",
    answer: "Absolut! Alle Dokumente sind so gestaltet, dass sie leicht anpassbar sind. Sie können die Bedingungen an Ihre spezifischen Dienstleistungen, Preisstruktur, Liefermethoden und Geschäftsrichtlinien anpassen. Die Dokumente bieten eine solide rechtliche Grundlage und geben Ihnen gleichzeitig die Flexibilität, sie für Ihr einzigartiges Fotografieunternehmen zu personalisieren."
  },
  {
    question: "Wie schützen diese Dokumente meine Fotos vor Diebstahl?",
    answer: "Der Haftungsausschluss und die Urheberrechtsschutz-Dokumente stellen klar fest, dass Sie alle Rechte an Ihren Fotos besitzen und definieren, was andere mit Ihren Bildern tun dürfen und was nicht. Sie enthalten Warnungen vor unbefugter Nutzung, Vervielfältigung oder Verbreitung. Obwohl kein Dokument Diebstahl physisch verhindern kann, geben Ihnen diese Rechtsdokumente eine starke rechtliche Position, um Ihre Rechte durchzusetzen und Entschädigung zu verlangen, wenn Ihre Arbeit ohne Erlaubnis verwendet wird."
  },
  {
    question: "Brauche ich für jede Fotografie-Website separate Dokumente?",
    answer: "Nein! Mit einem einzigen Kauf können Sie diese Rechtsdokumente für alle Ihre Fotografie-Websites verwenden. Ob Sie eine Portfolio-Seite oder mehrere Websites für verschiedene Fotografiedienstleistungen haben – die Lizenz erlaubt unbegrenzte Nutzung. Das macht es extrem kosteneffektiv für Fotografen mit mehreren Online-Präsenzen."
  },
  {
    question: "Was ist, wenn ich international mit Kunden arbeite?",
    answer: "Die Dokumente sind unter Berücksichtigung internationaler Anwendbarkeit erstellt. Sie beziehen sich auf internationale Gesetze und Konventionen, wo zutreffend (wie die DSGVO für europäische Kunden, internationales Urheberrecht usw.). Sie können leicht angeben, welches Recht welcher Jurisdiktion gilt, und Abschnitte für verschiedene Märkte anpassen, die Sie bedienen."
  }
];

const PhotographyQADE = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Fragen & Antworten</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Häufig gestellte Fragen zu Rechtsdokumenten für Fotografen</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Häufige Fragen von Fotografen zum Rechtsschutz und zur Dokumentation
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {questions.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-base font-medium text-foreground">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default PhotographyQADE;
