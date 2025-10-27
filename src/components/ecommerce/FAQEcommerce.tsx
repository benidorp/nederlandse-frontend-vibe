import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqItems = [
  {
    question: "Why are legal documents critical for e-commerce stores?",
    answer: `As an online retailer, you're legally obligated to provide transparent information about your business practices, data handling, and customer rights. Without proper legal documents, you risk:
    
• Substantial fines from regulatory authorities - up to €20 million or 4% of annual turnover under GDPR
• Legal claims from customers for unclear return policies or data breaches
• Payment processor suspension (PayPal, Stripe may freeze accounts)
• Loss of customer trust and reputation damage
• Inability to operate in certain markets or countries

The primary legislation you must comply with includes GDPR, Consumer Rights Directive, Distance Selling Regulations, and ePrivacy Directive. With the right documents, you protect your business and build customer confidence.`
  },
  {
    question: "How to implement these documents on your e-commerce site",
    answer: `Proper placement of legal documents is crucial for both compliance and customer experience.

**Footer placement (mandatory):**
Add links to all legal documents in the footer of every page:
• Privacy Policy
• Terms & Conditions  
• Return & Refund Policy
• Shipping Policy
• Cookie Policy

**Checkout process:**
For online stores, legal documents must be accessible during checkout:
• Link to Terms & Conditions near "Complete Purchase" button
• Checkbox for acceptance of terms before payment
• Easy access to return policy on product pages
• Privacy policy link near payment information

**Product pages:**
• Link to shipping policy in product description
• Return policy information clearly visible
• Warranty information where applicable

**Best practices:**
• Make documents easy to find and read
• Use clear, non-legal language where possible
• Ensure mobile-friendly formatting
• Highlight key customer rights (14-day return period)
• Update last modified date when changes are made

**Technical implementation:**
Our implementation guide includes specific instructions for Shopify, WooCommerce, Magento, and custom platforms, with code examples and placement recommendations.`
  },
  {
    question: "Frequently Asked Questions about E-commerce Legal Documents",
    answer: `**Are these templates valid across Europe?**
Yes, our templates comply with EU consumer protection directives and GDPR, which apply across all EU member states. Country-specific requirements are noted in the templates.

**Do I need a lawyer for my online store?**
Our templates are professionally drafted and legally reviewed, but every business is unique. For complex situations or high-value operations, we recommend consulting an e-commerce attorney.

**Can I use these templates for multiple stores?**
Yes! Your purchase includes unlimited usage rights for all your own e-commerce websites and online stores.

**What if I sell both products and services?**
Our templates cover both physical products and digital goods/services. Simply customize the relevant sections for your business model.

**How often should I update my legal documents?**
Review annually and update when you add new payment methods, shipping options, or when legislation changes. We provide update notifications for major regulatory changes.

**Do these documents protect me from all legal claims?**
No document offers 100% protection, but proper legal documentation significantly reduces risks and demonstrates professional business practices.

**What about international sales?**
Our templates address cross-border sales within the EU. For sales outside the EU, additional considerations may apply depending on the destination country.

**In which languages are templates available?**
Templates can be downloaded in multiple languages, allowing you to operate internationally and serve customers in their preferred language.`
  },
  {
    question: "Legal disclaimers & limitations",
    answer: `**Important disclaimer:**

These document templates have been carefully prepared by legal professionals but serve as a foundation for your legal compliance. We do not provide personalized legal advice and are not liable for damages arising from the use of these templates.

**Limitation of liability:**
• Templates are general-purpose and may not suit every specific business situation
• Legislation may change after template publication
• Correct implementation and customization is your responsibility
• When in doubt, always consult a specialized e-commerce attorney

**What we are not:**
• A law firm or legal service provider
• Liable for fines or claims resulting from incorrect use
• Responsible for modifications you make to the templates
• A replacement for professional legal counsel in complex cases

**What we provide:**
• Professionally drafted templates as a solid foundation
• Regular updates for major legislative changes
• Clear implementation instructions for popular platforms
• Email support for questions about the templates

**Terms of use:**
By using these templates, you agree to our terms and conditions. You acknowledge that legal compliance and proper implementation remain your responsibility.

**Suitability:**
These templates are specifically designed for e-commerce businesses selling products and/or services online. For specialized business models (marketplaces, subscription services, digital content platforms), additional or modified documents may be required.

**Professional advice:**
For high-revenue operations (>€100,000/year), international expansion, or complex business structures, we strongly recommend consulting an e-commerce or internet law attorney.`
  },
  {
    question: "Common e-commerce legal questions answered",
    answer: `## Essential Legal Questions for Online Store Owners 🛍️

🔹 A. General – Legal obligations for e-commerce

## Which legal documents does an online store require?
E-commerce stores typically need a privacy policy, cookie policy, terms & conditions, return policy, and shipping policy to comply with consumer protection and privacy laws.

## Why do I need legal documents for my online store?
Because you process personal data, accept payments, and sell products or services. Without proper documentation, you violate consumer protection laws and GDPR.

## Are legal documents mandatory even for small online stores?
Yes, legal requirements apply regardless of business size. Even a small shop must comply with GDPR, consumer rights, and distance selling regulations.

## What happens if I don't have proper legal documents?
You risk regulatory fines, customer disputes, payment processor issues, and potential legal action from customers or competitors.

## Can I write legal documents myself for my store?
While possible, it's not recommended unless you have legal expertise. Professional templates or legal counsel are strongly advised.

🔹 B. Privacy Policy – Data protection and GDPR

## Is a privacy policy mandatory for e-commerce?
Yes. If you collect any personal data (names, addresses, payment info, cookies), a privacy policy is legally required.

## What must be in an e-commerce privacy policy?
Details about: what data you collect, why you collect it, how long you store it, third-party sharing (payment processors, shipping companies), and customer rights under GDPR.

## How do I make my store GDPR-compliant?
Ensure your privacy policy is transparent, obtain proper consent for data processing, provide easy access to customer data, and enable data deletion requests.

## Should I mention payment processors in my privacy policy?
Yes, always disclose that payment information is processed by third parties like Stripe, PayPal, or other processors.

## Do I need consent for processing customer orders?
Processing orders falls under "contractual necessity" in GDPR, so explicit consent isn't required for order fulfillment. However, marketing communications require separate consent.

🔹 C. Return & Refund Policy – Consumer rights

## Is a return policy mandatory for online stores?
Yes, in the EU, consumers have a legal right to return products within 14 days without giving a reason (cooling-off period).

## What must be included in a return policy?
The 14-day return period, how customers initiate returns, who pays return shipping, refund timeframes, and any exceptions (personalized items, hygiene products).

## Can I exclude certain products from returns?
Yes, certain products can be excluded: personalized items, perishables, hygiene products, sealed goods opened by customer, and digital content already accessed.

## How long do I have to process refunds?
Under EU law, you must refund customers within 14 days of receiving returned goods.

## What about damaged or defective items?
Customers have separate rights for defective products under warranty laws. You must repair, replace, or refund faulty goods beyond the standard return period.

🔹 D. Terms & Conditions – Contract terms

## Are terms & conditions mandatory for e-commerce?
While not strictly mandatory everywhere, they're essential for protecting your business and defining the customer relationship clearly.

## What should e-commerce terms & conditions include?
Order acceptance process, payment terms, delivery obligations, product descriptions, warranties, liability limitations, and dispute resolution.

## Can terms & conditions protect me legally?
Yes, well-drafted terms limit your liability, prevent disputes, and establish clear rules for transactions and customer behavior.

## Do customers need to accept my terms?
Yes, customers should actively accept terms during checkout (via checkbox). Passive acceptance (just displaying terms) offers weaker legal protection.

## Can I change my terms & conditions?
Yes, but you must notify customers of material changes and give them opportunity to cancel orders or subscriptions if they don't agree.

🔹 E. Shipping Policy – Delivery terms

## Is a shipping policy legally required?
Yes, you must inform customers about delivery times, costs, and geographic coverage before they complete purchases.

## What must be in a shipping policy?
Shipping methods, costs, delivery timeframes, international shipping terms, tracking information, and procedures for lost packages.

## What if items are delayed or lost?
Your shipping policy should address delays, lost items, and your obligations. You're typically responsible until the customer receives the goods.

## Should I offer international shipping?
That's a business decision, but if you do, ensure your shipping policy addresses customs, duties, and international delivery complications.

✅ Extra tip:
A fully compliant e-commerce store should have:
• Privacy Policy (GDPR compliant)
• Cookie Policy (with consent banner)
• Return & Refund Policy (14-day cooling-off period)
• Terms & Conditions (sales contract)
• Shipping Policy (delivery terms)
• Contact information and business details clearly displayed`
  }
];

const FAQEcommerce = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about legal documents for your e-commerce store
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};

export default FAQEcommerce;
