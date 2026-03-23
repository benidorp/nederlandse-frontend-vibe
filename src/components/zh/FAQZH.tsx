import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQZH = () => {
  const faqs = [
    {
      question: "套餐包含哪些法律文件？",
      answer: "套餐包含条款和条件、隐私政策（符合GDPR）、Cookie政策、联盟披露（符合FTC）、免责声明和实施指南。"
    },
    {
      question: "文件符合GDPR吗？",
      answer: "是的，所有文件完全符合GDPR、CCPA和FTC指南，可用于国际使用。"
    },
    {
      question: "购买后如何获取文件？",
      answer: "付款后，您将立即获得下载所有文件的访问权限。您还将收到包含下载链接的确认邮件。"
    },
    {
      question: "我可以为我的网站自定义文件吗？",
      answer: "是的，所有文件都可以完全自定义。包含详细指南以便轻松自定义。"
    },
    {
      question: "文件适合任何类型的网站吗？",
      answer: "是的，文件适合博客、在线商店、联盟网站等。实施指南帮助适应。"
    },
    {
      question: "我能获得免费更新吗？",
      answer: "是的，当法律变更时您会收到免费更新。文件始终保持最新。"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            常见问题
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            关于我们法律套餐最常见问题的解答
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

export default FAQZH;
