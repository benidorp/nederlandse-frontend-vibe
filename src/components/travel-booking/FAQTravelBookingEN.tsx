import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "Why does my travel booking website need legal documents?",
    answer: "Legal documents like Terms & Conditions, Privacy Policy, and Cancellation Policy are essential for travel booking platforms. They protect you against liability claims, ensure GDPR compliance, and build trust with customers. Without these documents, you risk fines, lawsuits, and loss of customer trust."
  },
  {
    question: "Are these documents GDPR and privacy law compliant?",
    answer: "Yes, all documents are fully compliant with GDPR (General Data Protection Regulation) and current privacy legislation. They include all required elements for processing personal data, cookie consent, and traveler information specific to the travel industry."
  },
  {
    question: "Can I use these documents for multiple travel booking websites?",
    answer: "Absolutely! With one purchase, you get unlimited usage rights. You can use these legal documents for all your travel booking, hotel reservation, or accommodation platforms without additional costs."
  },
  {
    question: "Do I need to customize the documents for my specific platform?",
    answer: "The documents are ready to use but may require minor customization such as your company name, contact details, and specific booking conditions. Our implementation guide provides clear instructions on what to adjust."
  },
  {
    question: "What's included in the Cancellation Policy?",
    answer: "The Cancellation Policy covers cancellation deadlines, cancellation fees, refund procedures, modification conditions, no-show policies, and force majeure situations. It protects both your platform and your customers with clear, fair rules."
  },
  {
    question: "How does the Privacy Policy protect my travel platform?",
    answer: "The Privacy Policy explains how you collect, use, and protect customer data including booking information, payment details, and traveler preferences. It ensures GDPR compliance and builds trust by being transparent about data practices."
  },
  {
    question: "What does the Disclaimer cover for travel bookings?",
    answer: "The Disclaimer limits your liability for issues like pricing errors, availability changes, third-party services (hotels, airlines), force majeure events, and travel disruptions. It's crucial protection for travel platforms dealing with external partners."
  },
  {
    question: "Are the Terms & Conditions specific to travel bookings?",
    answer: "Yes, the Terms & Conditions are specifically tailored for travel booking and hotel reservation platforms. They cover booking procedures, payment terms, customer obligations, platform usage rules, and dispute resolution specific to the travel industry."
  },
  {
    question: "How quickly can I implement these documents?",
    answer: "You receive instant access after purchase. Most platforms can implement these documents within 1-2 hours. Our step-by-step implementation guide makes the process simple, even for non-technical users."
  },
  {
    question: "Do I get updates when laws change?",
    answer: "Yes, you receive free lifetime updates. When privacy laws or travel regulations change, we update the documents and notify you. You'll always have access to the latest compliant versions."
  },
  {
    question: "What if I have questions during implementation?",
    answer: "Our implementation guide covers most questions. For specific legal advice about your unique situation, we recommend consulting with a lawyer familiar with your jurisdiction and business model."
  },
  {
    question: "Are these documents suitable for international travel platforms?",
    answer: "The documents are designed for EU-based platforms or those serving EU customers (GDPR compliance). If you operate globally, these documents provide a strong foundation, though you may need additional country-specific clauses."
  },
  {
    question: "How does the Cookie Policy work for booking websites?",
    answer: "The Cookie Policy explains what cookies your platform uses (essential, analytics, booking, marketing), why they're necessary, and how users can manage them. It ensures compliance with ePrivacy regulations and GDPR."
  },
  {
    question: "Can I use these for vacation rental platforms like Airbnb-style sites?",
    answer: "Yes, these documents work well for all types of travel accommodation platforms including vacation rentals, hotel bookings, hostel reservations, and multi-property platforms."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept all major credit cards, debit cards, and digital payment methods via Stripe. Payment is secure, and your documents are delivered instantly via email."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Due to the instant digital nature of the product, we cannot offer refunds after purchase. However, we're confident in the quality and comprehensiveness of our legal documents."
  },
  {
    question: "Do these documents cover third-party integrations (hotels, airlines)?",
    answer: "Yes, the documents include clauses about third-party services, partnerships, and integrations. They clarify your role as a platform versus the responsibilities of hotels, airlines, and other service providers."
  },
  {
    question: "How are refunds and chargebacks handled in the Cancellation Policy?",
    answer: "The Cancellation Policy includes detailed refund procedures, processing timelines, chargeback prevention clauses, and conditions for full or partial refunds based on cancellation timing."
  },
  {
    question: "What about liability for travel disruptions or emergencies?",
    answer: "The Disclaimer and Terms & Conditions include force majeure clauses covering natural disasters, pandemics, political unrest, and other travel disruptions beyond your control."
  },
  {
    question: "Can I translate these documents into other languages?",
    answer: "Yes, you can translate the documents for international markets. However, ensure translations are legally accurate. For legal certainty, consider having translations reviewed by a legal professional in that language/jurisdiction."
  }
];

const FAQTravelBookingEN = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our legal documents for travel booking platforms
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg mb-2 px-4">
              <AccordionTrigger className="text-left hover:no-underline py-3">
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-3 pt-1">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQTravelBookingEN;
