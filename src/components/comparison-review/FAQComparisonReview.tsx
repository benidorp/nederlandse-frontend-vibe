import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { reviewWebsiteQuestions } from "./ReviewWebsiteQA";

const faqs = [
  {
    question: "Do I really need legal documents for my comparison/review website?",
    answer: "Absolutely! Review and comparison websites face unique legal risks including FTC compliance for affiliate disclosures, liability for product recommendations, defamation claims from reviewed companies, and data privacy regulations. Without proper legal protection, you could face regulatory fines, lawsuits, or platform shutdowns."
  },
  {
    question: "Are these documents FTC compliant for affiliate marketing?",
    answer: "Yes! Our affiliate disclosure templates are specifically designed to meet FTC requirements for transparency in affiliate relationships. They include clear, prominent disclosure language that satisfies regulatory standards while maintaining reader trust and professional credibility."
  },
  {
    question: "Will these documents protect me from lawsuits by reviewed companies?",
    answer: "Our liability disclaimers and opinion protection clauses are specifically crafted to protect your right to publish honest reviews while limiting liability for subjective opinions and product comparisons. Combined with proper factual accuracy and fair comment practices, these documents provide robust legal protection."
  },
  {
    question: "How do I implement these documents on my website?",
    answer: "Each package includes an easy implementation guide with step-by-step instructions. You'll receive ready-to-use templates that you can customize with your website details, plus guidance on where and how to display them for maximum legal compliance and user accessibility."
  },
  {
    question: "Are these documents GDPR and CCPA compliant?",
    answer: "Yes! Our privacy policy and cookie policy are fully compliant with GDPR, CCPA, and other major data protection regulations. They cover all aspects of user data collection, affiliate tracking pixels, analytics, and third-party integrations required for review websites."
  },
  {
    question: "What if I allow user reviews and comments?",
    answer: "Our package includes comprehensive user-generated content policies that protect you from liability for user submissions while establishing clear moderation rights, content ownership terms, and guidelines for inappropriate or defamatory content."
  },
  {
    question: "Can I use these documents for multiple review websites?",
    answer: "The license allows you to use the documents for one primary review website. If you operate multiple review platforms, please contact us about multi-site licensing options to ensure proper coverage for all your properties."
  },
  {
    question: "Do you offer the documents in languages other than English?",
    answer: "Yes! We offer professionally translated versions in multiple languages including Spanish, French, German, and more. This is perfect for review websites targeting international audiences or operating in multiple markets."
  }
];

const FAQComparisonReview = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Common questions about legal protection for comparison and review websites
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}

          {/* Review & Comparison Website Questions */}
          <AccordionItem value="website-questions" className="border-2 border-primary/20 rounded-lg px-6 bg-card shadow-md">
            <AccordionTrigger className="text-lg font-semibold hover:text-primary">
              Review & Comparison Website Questions
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-6">
              <div className="space-y-8 whitespace-pre-line">
                {reviewWebsiteQuestions.map((item, idx) => (
                  <div key={idx} className="border-b border-border/50 pb-6 last:border-0">
                    <h3 className="font-semibold text-foreground mb-3">{item.question}</h3>
                    <div className="text-sm leading-relaxed">{item.answer}</div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQComparisonReview;
