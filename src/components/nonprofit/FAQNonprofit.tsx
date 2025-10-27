import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { startingQuestions, ownersQuestions, securityQuestions } from "./NonprofitQA";

const FAQNonprofit = () => {
  const faqs = [
    {
      question: "Are these documents suitable for all types of non-profits?",
      answer: "Yes! These documents are designed to work for charitable organizations, foundations, NGOs, social enterprises, and volunteer organizations. They cover all essential legal requirements for accepting donations and managing volunteers."
    },
    {
      question: "Will these documents work for international fundraising?",
      answer: "Absolutely. The documents are GDPR-compliant and include provisions for international donations, cross-border data transfers, and global volunteer programs. They're used by organizations in over 35 countries."
    },
    {
      question: "How do I implement these documents on my website?",
      answer: "Each document comes with a comprehensive implementation guide. Simply download the documents, customize them with your organization's details, and add them to your website footer. The guide includes specific instructions for popular website platforms and donation systems."
    },
    {
      question: "Can I customize these documents for my organization?",
      answer: "Absolutely! The documents are provided in editable format so you can add your organization's name, logo, and specific details. The core legal language remains protected while allowing necessary customization."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about protecting your non-profit organization
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}

            {/* Non-Profit Questions */}
            <AccordionItem value="all-nonprofit-questions" className="border-2 border-primary/20 rounded-lg px-6 bg-card shadow-md">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Non-Profit & Charity Website Questions
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

            {/* Security & Legal Questions */}
            <AccordionItem value="security-questions" className="border-2 border-primary/20 rounded-lg px-6 bg-card shadow-md">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Beveiliging & Juridische Vragen voor Non-Profits
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                <div className="space-y-8 whitespace-pre-line">
                  {securityQuestions.map((item, index) => (
                    <article key={index} className="space-y-2">
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground">{item.question}</h3>
                      <p className="text-muted-foreground">{item.answer}</p>
                    </article>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQNonprofit;
