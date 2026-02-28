import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQNonprofitDE = () => {
  const faqs = [
    {
      question: "Sind diese Dokumente für alle Arten von gemeinnützigen Organisationen geeignet?",
      answer: "Ja! Diese Dokumente sind für Wohltätigkeitsorganisationen, Stiftungen, NGOs, Sozialunternehmen und Freiwilligenorganisationen konzipiert. Sie decken alle wesentlichen rechtlichen Anforderungen für die Annahme von Spenden und die Verwaltung von Freiwilligen ab."
    },
    {
      question: "Funktionieren diese Dokumente für internationales Fundraising?",
      answer: "Absolut. Die Dokumente sind DSGVO-konform und enthalten Bestimmungen für internationale Spenden, grenzüberschreitende Datenübertragungen und globale Freiwilligenprogramme. Sie werden von Organisationen in über 35 Ländern verwendet."
    },
    {
      question: "Wie implementiere ich diese Dokumente auf meiner Website?",
      answer: "Jedes Dokument wird mit einem umfassenden Implementierungsleitfaden geliefert. Laden Sie einfach die Dokumente herunter, passen Sie sie mit den Details Ihrer Organisation an und fügen Sie sie in die Fußzeile Ihrer Website ein. Der Leitfaden enthält spezifische Anweisungen für beliebte Website-Plattformen und Spendensysteme."
    },
    {
      question: "Kann ich diese Dokumente für meine Organisation anpassen?",
      answer: "Absolut! Die Dokumente werden in einem bearbeitbaren Format bereitgestellt, damit Sie den Namen, das Logo und spezifische Details Ihrer Organisation hinzufügen können. Die wesentliche Rechtssprache bleibt geschützt und ermöglicht gleichzeitig die notwendige Anpassung."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Häufig gestellte Fragen
            </h2>
            <p className="text-xl text-muted-foreground">Alles, was Sie über den Schutz Ihrer gemeinnützigen Organisation wissen müssen.</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-all">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQNonprofitDE;
