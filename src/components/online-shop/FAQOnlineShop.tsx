import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "Why does my webshop need these legal documents?",
    answer: "Operating a webshop without proper legal documentation can expose you to significant legal risks, fines, and customer disputes. These documents protect your business, ensure GDPR compliance, establish clear customer expectations, and build trust with your online shoppers. They're not optional—they're essential for any legitimate online business."
  },
  {
    question: "Are these documents suitable for all types of webshops?",
    answer: "Absolutely! Our legal documents are designed to be adaptable for various online business models—whether you sell physical products, digital downloads, subscriptions, or services. They work with any webshop platform including WooCommerce, Shopify, Magento, PrestaShop, or custom-built solutions."
  },
  {
    question: "Can I use these documents for multiple webshops?",
    answer: "Yes! With a single purchase, you receive unlimited usage rights. You can implement these legal documents across all your webshops and online businesses without needing to purchase separate licenses. This makes it an incredibly cost-effective solution for multi-store operators."
  },
  {
    question: "Do these documents comply with GDPR and international laws?",
    answer: "Our legal documents are crafted to comply with EU regulations including GDPR, consumer protection laws, and international e-commerce standards. They cover essential requirements for data protection, customer rights, and transparent business practices. However, we always recommend having any legal document reviewed by a qualified attorney for your specific jurisdiction."
  },
  {
    question: "How quickly can I implement these documents on my webshop?",
    answer: "Immediately! After purchase, you receive instant download access to all documents. Our comprehensive implementation guide provides step-by-step instructions for adding these legal pages to your webshop platform. Most users complete the setup within 30 minutes."
  },
  {
    question: "What languages are the documents available in?",
    answer: "Our legal documents are available in multiple languages to serve international webshops. You can download the documents in your preferred language—or multiple languages if you operate in different markets. This ensures your legal compliance across various customer demographics."
  },
  {
    question: "Do I need a lawyer to review these documents?",
    answer: "While our documents are professionally crafted and cover standard legal requirements for webshops, we always recommend having any legal document reviewed by a qualified attorney familiar with your specific jurisdiction and business model. Laws vary by country and region, and professional legal advice ensures complete compliance with your local regulations."
  },
  {
    question: "What if my webshop has unique requirements?",
    answer: "Our documents are designed to be customizable. They include placeholder sections where you can add business-specific information. The implementation guide provides instructions on how to adapt the documents for your unique circumstances while maintaining legal integrity."
  }
];

const FAQOnlineShop = () => {
  return (
    <section className="py-20">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Common questions about our legal documents for webshops and online businesses
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold text-foreground">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQOnlineShop;
