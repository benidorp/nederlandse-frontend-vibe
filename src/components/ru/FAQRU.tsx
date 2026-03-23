import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQRU = () => {
  const faqs = [
    {
      question: "Какие юридические документы включены в пакет?",
      answer: "Пакет включает Условия Использования, Политику Конфиденциальности (GDPR), Политику Cookies, Партнёрское Раскрытие (FTC), Отказ от Ответственности и Руководство по Внедрению."
    },
    {
      question: "Документы соответствуют GDPR?",
      answer: "Да, все документы полностью соответствуют GDPR, CCPA и рекомендациям FTC для международного использования."
    },
    {
      question: "Как я получу документы после покупки?",
      answer: "После оплаты вы получаете мгновенный доступ для скачивания всех документов. Вы также получите email с подтверждением и ссылкой для скачивания."
    },
    {
      question: "Могу ли я настроить документы для своего сайта?",
      answer: "Да, все документы полностью настраиваемы. Включено подробное руководство для лёгкой настройки."
    },
    {
      question: "Документы подходят для любого типа сайта?",
      answer: "Да, документы подходят для блогов, интернет-магазинов, партнёрских сайтов и многого другого. Руководство по внедрению помогает с адаптацией."
    },
    {
      question: "Получу ли я бесплатные обновления?",
      answer: "Да, вы получаете бесплатные обновления при изменении законодательства. Документы всегда поддерживаются актуальными."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Часто Задаваемые Вопросы
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ответы на самые частые вопросы о нашем юридическом пакете
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

export default FAQRU;
