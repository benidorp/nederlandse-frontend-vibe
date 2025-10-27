import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQElearning = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/60 text-primary-foreground px-6 py-2 rounded-full mb-6 shadow-lg">
              <HelpCircle className="w-5 h-5" />
              <span className="font-semibold">Frequently Asked Questions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Everything You Need to Know
            </h2>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-2 border-primary/20 rounded-lg px-6 bg-card shadow-md">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                How quickly can I implement these documents on my platform?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Most platform owners implement the documents within 30 minutes. You receive detailed 
                implementation instructions, and all documents are ready to copy-paste into your platform. 
                No legal knowledge required.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 border-primary/20 rounded-lg px-6 bg-card shadow-md">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Can I use these for both B2C and B2B e-learning?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes! The documents are suitable for both individual learners (B2C) and corporate training 
                programs (B2B). They cover all common scenarios in online education.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 border-primary/20 rounded-lg px-6 bg-card shadow-md">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What about platforms with multiple instructors?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                The package includes instructor agreement terms that cover content ownership, revenue sharing, 
                exclusivity, and responsibilities. Perfect for course marketplaces like Udemy or Teachable-style platforms.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 border-primary/20 rounded-lg px-6 bg-card shadow-md">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Are these documents valid outside the EU?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes, the documents are internationally usable. While they're GDPR-compliant (which is the 
                strictest privacy standard), they also meet requirements in the US, Canada, Australia, and most other countries.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-2 border-primary/20 rounded-lg px-6 bg-card shadow-md">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What if I offer certificates or accreditation?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                The package includes specific terms for certificates, diplomas, and credentials. It clearly 
                defines completion requirements, certification conditions, and the legal value of your certificates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-2 border-primary/20 rounded-lg px-6 bg-card shadow-md">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Can I customize these documents for my specific platform?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes, you can customize them. The documents include clear instructions on which parts you can 
                adjust (like your company name, refund period, etc.) and which parts should stay as-is for legal protection.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-2 border-primary/20 rounded-lg px-6 bg-card shadow-md">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Do you offer a money-back guarantee?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the documents for 
                any reason, you'll receive a full refund - no questions asked.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border-2 border-primary/20 rounded-lg px-6 bg-card shadow-md">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What's included in the Implementation Guide?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                The Implementation Guide contains step-by-step instructions for adding all documents to your 
                platform, recommended page placements, email templates for notifying students, and a checklist 
                to ensure you haven't forgotten anything.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQElearning;
