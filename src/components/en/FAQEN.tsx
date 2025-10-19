import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQEN = () => {
  const faqs = [
    {
      question: "Why do I need these legal documents for my affiliate website?",
      answer: "As an affiliate marketer, you are legally required to have certain documents on your website. Without proper privacy policies, disclaimers, and terms & conditions, you risk heavy fines and legal issues. GDPR/AVG, FTC guidelines, and other regulations require transparency about data collection, affiliate relationships, and website usage."
    },
    {
      question: "Are these documents GDPR/AVG compliant?",
      answer: "Yes, all our documents are fully compliant with GDPR/AVG and other relevant legislation. They are regularly updated to reflect the latest legal requirements and include all necessary elements for data protection compliance, cookie consent, and user rights."
    },
    {
      question: "Can I use these documents on multiple websites?",
      answer: "Absolutely! With one purchase, you can use these documents on unlimited websites. You only need to customize the documents with your specific information (website name, contact details, etc.) for each website."
    },
    {
      question: "How do I implement these documents on my website?",
      answer: "It's very simple. After purchase, you receive all documents with clear instructions. You only need to copy the text, fill in your specific information (marked in the documents), and paste them on your website. No legal knowledge required!"
    },
    {
      question: "Are updates included?",
      answer: "Yes! You receive lifetime access to all updates. When laws change or new requirements arise, we update the documents and you can download the latest version for free."
    },
    {
      question: "What makes this better than free templates online?",
      answer: "Free templates are often outdated, incomplete, or not specifically designed for affiliate marketers. Our documents are professionally written by legal experts, specifically for affiliate websites, and comply with all current legislation. Moreover, you receive regular updates and clear instructions."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Because this is a digital product that you receive immediate access to, we cannot offer refunds. However, we are confident that you will be satisfied with the quality and completeness of the documents."
    },
    {
      question: "Are these documents valid internationally?",
      answer: "The documents are primarily based on European legislation (GDPR/AVG) and American guidelines (FTC), which are the most stringent. This means they are also suitable for use in most other countries. For specific local requirements, you may need to make minor adjustments."
    },
    {
      question: "Do I need legal knowledge to use these documents?",
      answer: "No, absolutely not! The documents are written in clear language and include instructions. You only need to fill in your specific information in the marked places. It's as simple as copy and paste."
    },
    {
      question: "How quickly do I receive the documents after payment?",
      answer: "Immediately! After completing your payment, you will instantly receive access to download all documents. You can start implementing them on your website right away."
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our legal documents
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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

export default FAQEN;
