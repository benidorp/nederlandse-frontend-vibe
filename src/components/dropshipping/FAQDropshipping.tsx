import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

// Import questions from DropshippingQA
import { startingQuestions, ownersQuestions } from "./DropshippingQA";

const faqs = [
  {
    question: "Why do I need legal documents for my dropshipping store?",
    answer: "As a dropshipping business owner, you're legally responsible for customer protection, privacy compliance (GDPR), and transparent business practices. Without proper legal documents, you risk fines up to €20 million or 4% of annual turnover, legal disputes, and loss of customer trust. Even though you don't hold inventory, you're still the legal seller."
  },
  {
    question: "Are these documents suitable for international dropshipping?",
    answer: "Yes! Our documents are specifically designed for international use and GDPR-compliant, making them suitable for dropshipping businesses operating across Europe and globally. They're available in multiple languages and cover international shipping and supplier relationships."
  },
  {
    question: "Can I use these documents for multiple dropshipping stores?",
    answer: "Absolutely! With one purchase, you get unlimited usage rights. You can use these legal documents for all your current and future dropshipping stores without any additional fees."
  },
  {
    question: "How do I implement these documents on my store?",
    answer: "The package includes a detailed implementation guide with step-by-step instructions. Simply download the documents, fill in your business details in the designated fields, and add them to your store's footer or legal pages. Most store platforms like Shopify, WooCommerce, or custom websites make this very easy."
  },
  {
    question: "What makes these documents specific for dropshipping?",
    answer: "Unlike generic templates, these documents are specifically tailored for dropshipping business models. They address unique aspects like extended shipping times, supplier relationships, inventory disclaimers, and return handling processes that are specific to dropshipping operations."
  },
  {
    question: "Are updates included if laws change?",
    answer: "While the current package covers all existing legislation comprehensively, major legal changes may require updates. We recommend reviewing your legal documents annually and consulting with a legal professional for significant regulatory changes in your jurisdiction."
  },
  {
    question: "In which languages are the documents available?",
    answer: "The documents are available in multiple languages including English, Dutch, German, French, Spanish, and more. You can download all language versions you need for your international dropshipping operations."
  },
  {
    question: "Do I need to customize the documents?",
    answer: "Yes, minimal customization is required. You'll need to fill in your business details such as company name, address, contact information, and specific business practices. The implementation guide explains exactly what needs to be customized and where."
  }
];

const FAQDropshipping = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about legal documents for your dropshipping business
          </p>
        </div>

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
          
          {/* Dropshipping Questions - alle 100+ vragen */}
          <AccordionItem value="all-dropshipping-questions">
            <AccordionTrigger className="text-left">
              Dropshipping Website Questions
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-6">
              <div className="space-y-8 whitespace-pre-line">
                {[...startingQuestions, ...ownersQuestions].map((item, index) => (
                  <article key={index} className="space-y-2">
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground">{item.question}</h2>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </article>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQDropshipping;
