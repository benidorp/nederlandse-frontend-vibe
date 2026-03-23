import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { type VATCalcTranslation } from "@/data/vatCalcTranslations";

interface Props {
  t: VATCalcTranslation;
}

const VATFAQTemplate = ({ t }: Props) => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t.faqBadge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.faqTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.faqSubtitle}</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {t.faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-background px-6 rounded-xl border-2 shadow-sm hover:shadow-md transition-all"
              >
                <AccordionTrigger headingLevel="h3" className="hover:no-underline text-left font-semibold py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  <p>{item.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default VATFAQTemplate;
