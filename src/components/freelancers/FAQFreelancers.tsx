import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What documents are included in the package?",
    answer: "The package includes a Client Service Agreement, Terms of Service, GDPR-compliant Privacy Policy, Liability Disclaimer, Cookie Policy, and a comprehensive Implementation Guide. All documents are professionally written and ready to customize."
  },
  {
    question: "Can I use these documents for multiple clients?",
    answer: "Yes! Once you purchase the package, you can use all documents for unlimited clients and projects. There are no recurring fees or usage limitations."
  },
  {
    question: "Are these documents legally valid internationally?",
    answer: "Yes, the documents are designed to comply with international standards including GDPR and can be used for clients worldwide. However, we recommend consulting with a local attorney if you have specific regional requirements."
  },
  {
    question: "How do I customize the documents?",
    answer: "Each document comes in an easily editable format with clear instructions in the Implementation Guide. Simply replace the placeholder text with your business details, services, and specific terms."
  },
  {
    question: "Do I need a lawyer to review these documents?",
    answer: "While our documents are professionally created and widely used, we always recommend having a lawyer review them if you have specific concerns or operate in highly regulated industries."
  },
  {
    question: "What if I have questions about implementation?",
    answer: "The package includes a comprehensive Implementation Guide with step-by-step instructions. For specific legal questions, we recommend consulting with a qualified attorney in your jurisdiction."
  },
  {
    question: "Is this a one-time payment?",
    answer: "Yes! Pay once and get lifetime access to all documents. You can download them immediately after purchase and use them forever."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards and payment methods through our secure Stripe payment system, including Visa, Mastercard, American Express, and more."
  },
  {
    question: "Can I get a refund?",
    answer: "Due to the digital nature of this product and immediate delivery, we cannot offer refunds after download. Please review the package contents carefully before purchasing."
  },
  {
    question: "Will these documents protect me from all legal issues?",
    answer: "While these documents provide strong legal protection, no document can prevent all disputes. They significantly reduce your risk and provide a professional framework for client relationships."
  }
];

const FAQFreelancers = () => {
  return (
    <section id="faq" className="py-16 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our legal documents package for freelancers
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

export default FAQFreelancers;
