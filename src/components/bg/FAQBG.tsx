import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQBG = () => {
  const faqs = [
    {
      question: "Какви правни документи са включени в пакета?",
      answer: "Пакетът включва Общи Условия, Политика за Поверителност (GDPR съвместима), Политика за Бисквитки, Афилиейт Разкриване (FTC съвместимо), Отказ от Отговорност и Ръководство за Внедряване."
    },
    {
      question: "Документите съвместими ли са с GDPR?",
      answer: "Да, всички документи са напълно съвместими с GDPR, CCPA и насоките на FTC за международна употреба."
    },
    {
      question: "Как получавам документите след покупката?",
      answer: "След плащането получавате моментален достъп за изтегляне на всички документи. Ще получите и имейл за потвърждение с линк за изтегляне."
    },
    {
      question: "Мога ли да персонализирам документите за моя уебсайт?",
      answer: "Да, всички документи са напълно персонализируеми. Включено е подробно ръководство за лесна персонализация."
    },
    {
      question: "Документите подходящи ли са за всеки тип уебсайт?",
      answer: "Да, документите са подходящи за блогове, онлайн магазини, афилиейт уебсайтове и много други. Ръководството за внедряване помага при адаптацията."
    },
    {
      question: "Получавам ли безплатни актуализации?",
      answer: "Да, получавате безплатни актуализации, когато законодателството се промени. Документите винаги се поддържат актуални."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Често Задавани Въпроси
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Отговори на най-честите въпроси за нашия правен пакет
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

export default FAQBG;
