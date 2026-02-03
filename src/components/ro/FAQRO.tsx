import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQRO = () => {
  const faqs = [
    {
      question: "Ce documente legale sunt incluse în pachet?",
      answer: "Pachetul include Termeni și Condiții, Politica de Confidențialitate (conformă GDPR), Politica Cookies, Dezvăluire Afiliere (conformă FTC), Declinare Responsabilitate și Ghid de Implementare."
    },
    {
      question: "Documentele sunt conforme cu GDPR?",
      answer: "Da, toate documentele sunt complet conforme cu GDPR, CCPA și liniile directoare FTC pentru utilizare internațională."
    },
    {
      question: "Cum primesc documentele după achiziție?",
      answer: "După plată, primiți acces instant pentru descărcarea tuturor documentelor. Veți primi și un email de confirmare cu linkul de descărcare."
    },
    {
      question: "Pot personaliza documentele pentru site-ul meu?",
      answer: "Da, toate documentele sunt complet personalizabile. Este inclus un ghid detaliat pentru personalizare ușoară."
    },
    {
      question: "Documentele sunt potrivite pentru orice tip de site?",
      answer: "Da, documentele sunt potrivite pentru bloguri, magazine online, site-uri de afiliere și multe altele. Ghidul de implementare ajută la adaptare."
    },
    {
      question: "Primesc actualizări gratuite?",
      answer: "Da, primiți actualizări gratuite când se schimbă legislația. Documentele sunt mereu menținute actualizate."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Întrebări Frecvente
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Răspunsuri la cele mai frecvente întrebări despre pachetul nostru legal
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-slate-50 rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
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

export default FAQRO;
