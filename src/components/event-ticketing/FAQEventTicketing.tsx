import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const FAQEventTicketing = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Q&A</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions About Event & Ticketing Legal Documents
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Common questions from event organizers about legal protection and documentation
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem 
              value="all-questions"
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-foreground pr-4">
                  All Questions & Answers About Event/Ticketing Legal Documents
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed space-y-6">
                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-2">
                    What legal documents do I need to sell event tickets online?
                  </h2>
                  <p>
                    When selling event tickets online, you legally need several key documents: Terms & Conditions that cover ticket sales, refunds, and event rules; a GDPR-compliant Privacy Policy explaining how you collect and process customer data; a Cookie Policy for your website tracking; a clear Refund & Cancellation Policy; and a Liability Disclaimer to protect against injury or damage claims. Without these documents, you risk regulatory fines up to €20 million or 4% of annual turnover under GDPR, consumer protection lawsuits, and payment processor account suspension.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-2">
                    How do I protect my event business from liability claims?
                  </h2>
                  <p>
                    Protecting your event business requires comprehensive legal documentation including a detailed Liability Disclaimer that clearly states limitations of liability for injuries, property damage, or accidents during events. You should also implement Event Waivers that attendees must accept during ticket purchase, explicitly acknowledging risks associated with event attendance. Your Terms & Conditions should include force majeure clauses for uncontrollable circumstances, clear venue rules, prohibited items lists, and behavior policies. Additionally, ensure you have proper insurance coverage that works in conjunction with your legal documents for maximum protection.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-2">
                    What should my event refund policy include?
                  </h2>
                  <p>
                    An effective event refund policy should clearly specify: the timeframe for refund requests (e.g., 14 days before event date), conditions under which refunds are granted or denied, processing times for refunds, any applicable refund fees or administration charges, policies for event cancellations or postponements initiated by you, policies for rescheduled events, transferability of tickets to other individuals, and how force majeure events (weather, pandemics, emergencies) are handled. The policy must comply with EU Consumer Rights Directive requirements while protecting your business from fraudulent claims and last-minute cancellations.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-2">
                    Do I need GDPR compliance for my ticketing platform?
                  </h2>
                  <p>
                    Yes, GDPR compliance is mandatory if you sell tickets to customers in the European Union, regardless of where your business is located. Your ticketing platform collects personal data including names, email addresses, payment information, and potentially ID documents for age verification. You must have a comprehensive Privacy Policy explaining what data you collect, why you collect it, how long you store it, who you share it with (payment processors, marketing platforms, event venues), and what rights customers have (access, deletion, portability). You must also implement proper data security measures, obtain explicit consent for marketing communications, and maintain records of data processing activities. Non-compliance can result in fines up to €20 million or 4% of global annual revenue.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-2">
                    How do I handle age restrictions and verification legally?
                  </h2>
                  <p>
                    When selling tickets for age-restricted events (alcohol-served events, nightclubs, adult content), your Terms & Conditions must clearly state the minimum age requirement and verification procedures. Implement age verification during ticket purchase by requiring date of birth input and checkbox confirmation that purchaser meets minimum age. State that ID checks will be performed at venue entry and that entry may be refused without refund if proper ID is not presented. Include clauses about parental consent for minors attending certain events, and specify which forms of ID are acceptable. For alcohol-served events, comply with local licensing laws and clearly communicate that refusal of entry due to age will not result in refunds.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-2">
                    What are the legal requirements for event cancellations?
                  </h2>
                  <p>
                    When canceling an event, you have specific legal obligations under consumer protection law. You must provide prompt notice to all ticket holders through the contact information provided during purchase. Offer full refunds including booking fees unless your Terms & Conditions explicitly stated different terms that customers agreed to. Communicate clear refund timelines (typically 14-30 days) and processing procedures. If rescheduling instead of canceling, you must offer attendees the choice between attending the new date or receiving a refund. Your Terms & Conditions should include force majeure clauses covering unforeseeable circumstances (natural disasters, pandemics, venue emergencies), clearly stating your obligations in such scenarios while limiting unnecessary liability.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-2">
                    Can I resell or transfer legal document templates to other event organizers?
                  </h2>
                  <p>
                    No, our legal document templates come with a single-user license for your own event and ticketing businesses. You can use the templates across multiple events or venues that you organize or operate, but you cannot resell, redistribute, or provide these templates to other event organizers or ticketing companies. Each event organization must purchase their own license. If you operate a ticketing platform serving multiple independent event organizers, contact us for enterprise licensing options that allow usage across client events.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-2">
                    How often should I update my event legal documents?
                  </h2>
                  <p>
                    Review and update your event legal documents at least annually or whenever significant changes occur: when introducing new ticket types or pricing structures, adding new data collection methods or third-party integrations, changing refund or cancellation policies, expanding to new geographic markets with different regulations, or when new laws are enacted (such as changes to consumer protection or data privacy regulations). Major events like COVID-19 pandemic required immediate updates to include health safety protocols, capacity limitations, and pandemic-related cancellation policies. Our package includes lifetime updates, ensuring you receive revised templates whenever significant legal changes occur in the event and ticketing industry.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-2">
                    Where should I display legal documents on my ticketing website?
                  </h2>
                  <p>
                    Display your legal documents prominently in multiple locations: footer links on every page linking to full document pages, during checkout process requiring customers to check a box confirming they've read and agree to Terms & Conditions and Privacy Policy, in confirmation emails with links to relevant policies, on ticket PDF/confirmation pages, and at venue entry points or event websites with references to full policies. Your Privacy Policy must be accessible before any data collection occurs. Cookie consent banners should appear on first visit with links to your Cookie Policy. For maximum legal protection, implement checkboxes during purchase that require active acceptance rather than passive agreement, creating clear evidence that customers acknowledged and accepted your terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-2">
                    Do these templates work for both physical and virtual events?
                  </h2>
                  <p>
                    Yes, our templates are designed to cover both physical in-person events and virtual online events (webinars, live streams, virtual conferences). For physical events, the documents cover venue-specific issues like liability for on-site injuries, capacity limits, prohibited items, and behavior policies. For virtual events, they address technical requirements, access credentials, recording policies, intellectual property of presentation content, and technical support limitations. You can customize the templates to specify which type of event you're organizing, or include provisions for hybrid events that combine both physical and virtual attendance. The GDPR and privacy components apply equally to both formats since you're collecting personal data regardless of event format.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQEventTicketing;
