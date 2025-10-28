import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqItems = [
  {
    question: "Why does my news or magazine website need legal documents?",
    answer: "News and magazine websites handle sensitive reader data, publish copyrighted content, and often run advertising or subscriptions. Without proper legal documentation, you risk GDPR fines up to €20 million, copyright lawsuits, reader privacy violations, and loss of credibility. Professional legal documents protect both you and your readers while establishing your publication as trustworthy and legitimate."
  },
  {
    question: "What's included in the Complete Legal Package for news websites?",
    answer: "You receive 7 essential documents: (1) GDPR-compliant Privacy Policy covering reader data and analytics, (2) Editorial Policy establishing journalistic standards, (3) Copyright & Content Policy protecting your articles and images, (4) Terms & Conditions for subscriptions and content usage, (5) Legal Disclaimer limiting liability, (6) Cookie Policy for tracking disclosure, and (7) Implementation Guide with step-by-step instructions."
  },
  {
    question: "Are these documents GDPR-compliant for European readers?",
    answer: "Yes, absolutely. All documents are fully compliant with the General Data Protection Regulation (GDPR) and other EU privacy laws. They cover all requirements including data collection disclosure, user rights, cookie consent, third-party processors, and data retention. Whether your readers are in Europe or worldwide, you're protected."
  },
  {
    question: "Can I use these documents for multiple news sites or magazines?",
    answer: "Yes! One purchase gives you unlimited use across all your publications. Whether you run one magazine, multiple niche news sites, or an entire publishing network, you can use these documents on all of them. Just customize each one with your specific publication details."
  },
  {
    question: "How is this different from generic website legal templates?",
    answer: "These documents are specifically crafted for news and magazine publishers. They include provisions for editorial policies, journalistic standards, content copyright, user-generated comments, contributor agreements, fact-checking procedures, and media-specific advertising disclosures. Generic templates don't cover these critical publishing-specific requirements."
  },
  {
    question: "Do I need legal knowledge to implement these documents?",
    answer: "No legal expertise required. Each document comes with clear placeholders (like [YOUR PUBLICATION NAME]) that you simply replace with your information. The included Implementation Guide provides step-by-step instructions for every document, plus tips on where to place them on your website for maximum compliance and visibility."
  },
  {
    question: "What languages are available?",
    answer: "Documents are available in multiple languages including English, German, French, Spanish, Italian, Dutch, and more. This is perfect if you run an international publication or want to expand to new markets. You can download the same documents in different languages at no extra cost."
  },
  {
    question: "Will these protect me from copyright claims?",
    answer: "The Copyright & Content Policy helps protect your original content from unauthorized use and provides clear procedures for handling DMCA takedown requests. It defines your rights, contributor agreements, and fair use guidelines. While no document prevents all claims, having professional policies significantly strengthens your legal position."
  },
  {
    question: "How do I handle user comments and community content?",
    answer: "The Terms & Conditions include comprehensive user-generated content policies, community guidelines, and commenting rules. You'll have clear terms governing what users can post, your moderation rights, and liability limitations for third-party content - essential for managing an active reader community."
  },
  {
    question: "What about advertising and sponsored content disclosure?",
    answer: "The Editorial Policy includes specific provisions for sponsored content labeling, advertising disclosure, and maintaining editorial independence. This ensures transparency with your readers and compliance with FTC guidelines and advertising regulations. You'll know exactly how to label paid content properly."
  },
  {
    question: "Can I customize these documents for my specific publication?",
    answer: "Yes, the documents are designed to be customized. You can add your publication name, contact details, specific policies, and adjust sections to match your editorial approach. The core legal protections remain solid while giving you flexibility for your unique publication needs."
  },
  {
    question: "How long does implementation take?",
    answer: "Most publishers have all documents customized and published within 1-2 hours. The process is: (1) Download the package, (2) Replace placeholders with your publication details, (3) Review for your specific situation, (4) Upload to your website, (5) Link from your footer and relevant pages. The Implementation Guide walks you through each step."
  },
  {
    question: "What if I run subscription or membership services?",
    answer: "The Terms & Conditions specifically cover subscription services, including payment terms, billing cycles, cancellation policies, refunds, and access rights. Whether you offer free registration, premium memberships, or digital subscriptions, you're fully covered legally."
  },
  {
    question: "Do these cover mobile apps or newsletters?",
    answer: "Yes. The Privacy Policy and Terms & Conditions cover all distribution channels - website, mobile apps, email newsletters, RSS feeds, and social media. If you publish content digitally in any form, these documents protect you across all platforms."
  },
  {
    question: "Why is this only €79 instead of thousands?",
    answer: "Traditional lawyers charge €150-300/hour and need 10-15 hours to draft these documents from scratch, costing €2,000-4,000. We've created professional, publisher-specific templates that you simply customize, eliminating the drafting time while maintaining the same legal protection. You save thousands while getting the same quality."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Due to the nature of digital products that can be copied after download, we cannot offer returns or refunds. However, we're confident in the quality - these documents have protected hundreds of publications. Review the detailed descriptions and included items before purchasing to ensure they meet your needs."
  },
  {
    question: "How do I receive the documents after purchase?",
    answer: "Immediately after your secure Stripe payment, you'll receive a download link via email. You'll get all documents in editable formats (Word/PDF) plus the Implementation Guide. Download them instantly and start customizing right away. Keep the download link for future access."
  },
  {
    question: "What if my country has specific legal requirements?",
    answer: "These documents are based on EU regulations (the strictest globally) and international best practices, making them compliant in most countries. For country-specific requirements beyond GDPR, you may want to consult a local lawyer for additions, but these provide a solid foundation that covers 90%+ of legal needs worldwide."
  }
];

const FAQNewsMagazine = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about legal protection for your news or magazine website.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6 border">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground pr-4">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
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

export default FAQNewsMagazine;
