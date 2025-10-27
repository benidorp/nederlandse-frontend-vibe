import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { advancedQuestions, startingQuestions } from "./StreamingMediaQA";

const faqItems = [
  {
    question: "Why are legal documents essential for streaming platforms?",
    answer: `As a streaming platform owner or content creator, you are legally required to protect copyrights, user data, and maintain transparency. Without proper legal documents, you risk:
    
• DMCA takedown notices and copyright infringement claims
• Heavy fines from data protection authorities under GDPR - up to €20 million or 4% of annual revenue
• Lawsuits from content creators regarding licensing disputes
• Platform suspension or removal from app stores
• Loss of creator trust and audience confidence

The main legislation you must comply with includes GDPR, DMCA (Digital Millennium Copyright Act), copyright laws, and platform-specific content policies. With the right documents, you protect yourself, your creators, and build trust with your audience.`
  },
  {
    question: "What makes streaming platforms legally unique?",
    answer: `Streaming platforms have specific legal requirements that differ from regular websites:

**Copyright & DMCA Compliance:**
• You need clear procedures for handling copyright claims
• DMCA safe harbor protection requires specific policies
• Content licensing agreements with creators
• Repeat infringer policies and enforcement

**User-Generated Content:**
• Clear terms for what users can upload
• Content moderation policies and procedures
• Takedown and counter-notification processes
• Rights management for creator content

**Data Protection:**
• Viewing history and behavior tracking
• Subscription and payment information
• Analytics and recommendation algorithms
• Third-party integrations (ads, payment processors)

**Platform Operations:**
• Creator revenue sharing terms
• Subscription and cancellation policies
• Age restrictions and content ratings
• Platform usage rules and community guidelines`
  },
  {
    question: "How to implement these documents on your platform",
    answer: `Proper placement of legal documents is crucial for compliance and creator/user trust.

**Footer placement (mandatory):**
Place links to all your legal documents in the footer of every page:
• Privacy Policy
• Terms of Service
• DMCA Policy
• Content License Agreement
• Cookie Policy

**Creator Dashboard:**
For content creators uploading to your platform:
• Show Content License Agreement during signup
• Require acceptance before first upload
• Provide easy access in creator settings
• Display key terms prominently

**User Experience:**
• Privacy Policy link during account creation
• Terms acceptance during registration
• Cookie consent banner on first visit
• DMCA reporting form easily accessible

**Best practices:**
• Use clear, non-legal language summaries
• Make documents mobile-friendly
• Provide translations for international users
• Update notification system for policy changes

**Technical implementation:**
Our implementation guide contains code snippets for various platforms, including WordPress, custom CMS, and mobile apps, with examples for creator onboarding flows.`
  },
  {
    question: "Frequently Asked Questions",
    answer: `**Are these templates valid for international streaming platforms?**
Yes, our templates comply with GDPR (EU), DMCA (US), and international copyright laws. Platform-specific requirements are noted in the documents.

**Do I need a lawyer to review these?**
Our templates are professionally drafted for streaming platforms, but every platform is unique. For complex multi-territory operations or high-revenue platforms, we recommend legal consultation.

**Can I use these for multiple platforms?**
Yes! Your purchase includes an unlimited license for all streaming platforms you own or operate.

**What if I also sell merchandise or digital products?**
Then you need additional e-commerce documents. Contact us for a customized package that includes sales terms and refund policies.

**How do I handle DMCA takedown requests?**
Our DMCA policy includes step-by-step procedures for receiving, processing, and responding to takedown notices, plus counter-notification processes.

**Do these protect me from all copyright claims?**
No document offers 100% protection, but proper DMCA policies provide "safe harbor" protection if you follow the procedures correctly and act in good faith.

**What about content creator contracts?**
Our Content License Agreement covers platform usage rights. For exclusive creator partnerships or talent agreements, you may need customized contracts.

**In which languages are the templates available?**
Templates can be downloaded in multiple languages for international use, perfect for global streaming platforms.`
  },
  {
    question: "Legal disclaimers & liabilities",
    answer: `**Important disclaimer:**

These document templates have been carefully prepared for streaming and media platforms, but serve as a starting point for your legal compliance. We do not provide legal advice and are not liable for damages arising from the use of these templates.

**Limitation of liability:**
• Templates are general and may not cover every platform-specific situation
• Copyright and media laws may change after publication
• Proper implementation and platform-specific adaptation is your responsibility
• For high-risk situations (exclusive content deals, major creator partnerships), consult a media attorney

**What we are not:**
• A law firm or legal advisory service
• Liable for copyright claims or DMCA disputes
• Responsible for your content moderation decisions
• A replacement for specialized media law counsel in complex cases

**What we do offer:**
• Professionally prepared templates for streaming platforms
• Regular updates with major legal changes
• Clear implementation instructions
• Email support for questions about the templates

**Terms of use:**
By using these templates, you agree to our terms and conditions and disclaimer. You acknowledge that legal compliance and content moderation remain your own responsibility.

**Suitability:**
These templates are specifically developed for streaming and media platforms including video streaming, music platforms, live broadcasts, and on-demand content. For specialized platforms (gaming, adult content, financial streaming), additional documents may be required.

**Professional advice:**
For platforms with significant revenue (>€100,000/year), exclusive creator contracts, or international expansion, we strongly recommend consulting a media or entertainment lawyer.`
  }
];

const FAQStreamingMedia = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about legal documents for streaming platforms
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground whitespace-pre-line">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Streaming Website Vragen voor Beginners</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {startingQuestions.map((item, index) => (
              <AccordionItem key={`starting-${index}`} value={`starting-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <h3 className="font-semibold">{item.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Geavanceerde Streaming Website Vragen</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {advancedQuestions.map((item, index) => (
              <AccordionItem key={`advanced-${index}`} value={`advanced-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <h3 className="font-semibold">{item.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQStreamingMedia;
