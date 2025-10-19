import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqItems = [
  {
    question: "Why legal documents are important for affiliate sites",
    answer: `As an affiliate marketer, you are legally required to be transparent about your business model and how you handle visitor data. Without proper legal documents, you risk:
    
• Heavy fines from regulators such as data protection authorities - up to €20 million or 4% of annual revenue
• Claims from consumers for misleading information
• Removal from affiliate networks such as Google AdSense
• Reputation damage and loss of trust from your audience

The main legislation you must comply with is GDPR, the ePrivacy Directive, and regulations around transparent affiliate marketing such as FTC guidelines. With the right documents, you protect yourself and build trust with your visitors.`
  },
  {
    question: "How to integrate these documents on your site (footer, per post, near links)",
    answer: `The placement of legal documents is crucial for compliance and user-friendliness.

**Footer placement (mandatory):**
Place links to all your legal documents in the footer of every page:
• Privacy Policy
• Terms and Conditions  
• Cookie Policy
• Disclaimer
• Affiliate Disclosure

**Per article/post:**
For product reviews and articles with affiliate links:
• Short disclosure at the beginning of the article (first 150 words)
• Prominent marking of affiliate links, for example: [AD] or [affiliate link]
• Link to full disclosure at the bottom of the article

**Near affiliate links:**
• Use an abbreviation such as * or [AD] directly next to the link
• Add a tooltip on hover with "affiliate link"
• In product boxes: small disclaimer at the bottom

**Best practices:**
• Use contrasting colors so disclosures stand out
• Make text understandable for non-legal audiences
• Mobile-friendly - visible without scrolling
• Use icons for quick recognition

**Technical implementation:**
Our implementation guide contains code snippets for WordPress, Shopify, Webflow and HTML websites, including CSS styling examples.`
  },
  {
    question: "Frequently Asked Questions (FAQ)",
    answer: `**Are these templates valid throughout Europe?**
Yes, our templates comply with GDPR which applies in all EU countries. Some countries have additional rules - this is mentioned in the templates.

**Do I need to consult a lawyer?**
Our templates are legally reviewed, but every business is unique. For complex situations we always recommend seeking legal advice.

**Can I use these templates for multiple websites?**
Yes! With purchase you get an unlimited license for all your own affiliate websites.

**What if I also sell products, not just affiliate links?**
Then you need additional documents such as Right of Withdrawal and Shipping Policy. Contact us for a customized package.

**How often should I update my documents?**
At least once a year, but also when you add new tools or legislation changes.

**Do these documents protect me against all legal claims?**
No document offers 100% protection, but good legal documents significantly minimize your risks and demonstrate that you act carefully.

**Do I need to purchase the cookie banner separately?**
Our package contains the cookie policy (text), but for the technical cookie banner we recommend tools such as Cookiebot or CookieYes.

**In which languages are the templates available?**
The templates can be downloaded in multiple languages for international use, so you can deploy them on all your websites worldwide.`
  },
  {
    question: "Legal disclaimers & liabilities",
    answer: `**Important disclaimer:**

These document templates have been carefully prepared and reviewed, but serve as a starting point for your legal compliance. Legal Affiliate Agreement does not provide legal advice and is not liable for damages arising from the use of these templates.

**Limitation of liability:**
• Templates are general and may not be suitable for every specific situation
• Legislation may change after publication of templates
• Correct implementation and adaptation is your responsibility
• When in doubt, always consult a specialized lawyer

**What we are not:**
• A law firm
• Liable for fines or claims arising from incorrect use
• Responsible for modifications you make
• A replacement for professional legal advice in complex cases

**What we do offer:**
• Professionally prepared templates as a solid basis
• Regular updates with major legislative changes
• Clear implementation instructions
• Email support for questions about the templates

**Terms of use:**
By using these templates, you agree to our terms and conditions and disclaimer. You acknowledge that legal compliance remains your own responsibility.

**Suitability:**
These templates are specifically developed for affiliate marketing websites. For other business models or countries, additional or different documents may be required.

**Professional advice:**
For complex affiliate structures, high revenues (>€100,000/year), or international activities, we always recommend consulting a media or internet law attorney.`
  },
  {
    question: "Frequently asked questions about legal documents",
    answer: `Most Asked Questions about Legal Documents for Affiliate Websites (2025) 🛡️

🔹 A. General – Legal obligations for affiliate websites

### Which legal documents are required for an affiliate website?
Affiliate websites typically need a privacy policy, cookie policy, disclaimer (affiliate disclosure) and terms and conditions to comply with privacy legislation and consumer protection.

### Why do I need legal documents for my affiliate website?
Because you collect personal data, use affiliate links and generate income. Without these documents you often violate privacy legislation such as GDPR (EU) or CCPA (US).

### Are legal documents mandatory if I don't sell products?
Yes, even if you don't sell products but use affiliate links or collect visitor data (e.g., via Google Analytics), you need a privacy and cookie policy.

### What happens if I don't place legal documents on my website?
You may risk fines (such as under GDPR or CCPA), or be held liable for misleading or privacy violations.

### Can I write legal documents myself for my affiliate website?
You can, but it's not recommended unless you're legally trained. Using professional or customized templates is recommended.

🔹 B. Privacy Policy – Data protection and GDPR

### Is a privacy policy mandatory for affiliate websites?
Yes. If you collect personal data (such as IP addresses, emails, cookies or analytical data), a privacy policy is legally required.

### What should be in a privacy policy for an affiliate website?
Among others: what data you collect, why, how long you keep it, how visitors can exercise their rights, and whether you share data with third parties (such as affiliate networks or Google).

### How do I make my affiliate privacy policy GDPR-compliant?
Ensure it's transparent, complete and understandable. Mention legal bases (such as consent or legitimate interest) and offer a contact point for privacy requests.

### Should I mention that I use affiliate links in my privacy policy?
Yes, always mention that external partners may collect data via tracking cookies or pixels for analytical or commercial purposes.

### Do I need a DPO (Data Protection Officer) as an affiliate?
Not required, unless you process data on a large scale. You must be accessible for privacy requests via email or contact form.

🔹 C. Cookie Policy – Tracking and consent

### Do I need a cookie policy for my affiliate website?
Yes, if you use cookies or tracking (such as Google Analytics, Facebook Pixel, or affiliate tracking), you are required to publish a cookie policy.

### What should I mention in a cookie policy?
Which cookies you use, their purpose, retention period and how visitors can manage or disable cookies.

### Is a cookie banner mandatory for affiliate websites?
Yes, in the EU and UK a cookie banner is required before non-essential cookies are placed.

### What's the difference between essential and non-essential cookies?
Essential cookies are needed for the website to function (such as logging in). Non-essential cookies are used for analytics, advertising or tracking.

### How do I comply with GDPR and ePrivacy Directive with cookies?
Show a clear cookie banner, ask explicit consent for non-essential cookies, and give users control over their preferences.

🔹 D. Disclaimer & Affiliate Disclosure – Transparency and liability

### What is an affiliate disclaimer?
A brief statement indicating that you receive a commission when visitors buy products through your links.

### Is an affiliate disclaimer mandatory?
Yes. Both the FTC (US) and EU Consumer Directive require transparency about commercial partnerships.

### Where do I place my affiliate disclaimer?
Ideally above or below content with affiliate links, and in a separate legal page (such as "Disclaimer" or "Affiliate Disclosure").

### What should be in a good affiliate disclaimer?
That you receive compensation via affiliate links, that this does not cause extra costs for the visitor, and that you remain independent in recommendations.

### What's the difference between a disclaimer and affiliate disclosure?
The disclaimer limits your liability, while the affiliate disclosure is required to provide transparency about commercial relationships.

🔹 E. Terms and Conditions – Legal basis of the website

### Do I need terms and conditions for my affiliate website?
Not always legally required, but strongly recommended. They define the rules for website use, liability and intellectual property.

### What should be in terms and conditions for an affiliate site?
Among others: usage rules, intellectual property rights, liability limitations, indemnification, applicable law and contact information.

### Can terms and conditions legally protect me?
Yes. They limit your liability, clarify responsibilities, and prevent disputes with users or advertisers.

### Do I need to have terms and conditions approved by visitors?
Not necessarily. For websites with purchases or registrations, explicit acceptance is recommended (e.g., via checkbox). For informational sites, publication suffices.

### Should I translate my legal documents for international visitors?
If you're active worldwide, an English version is strongly recommended. Some countries require local language versions (such as France or Brazil).

✅ Extra tip:
An affiliate website that complies with international standards should contain the following documents:
• Privacy Policy (GDPR/CCPA compliant)
• Cookie Policy (with banner)
• Disclaimer + Affiliate Disclosure
• Terms and Conditions`
  },
  {
    question: "Frequently Asked Questions (FAQ) affiliate marketing",
    answer: `### 1. What is affiliate marketing?
Affiliate marketing is a form of online performance marketing where an 'affiliate' (partner) promotes products or services from a merchant (advertiser). When someone buys something or completes a pre-agreed action via the affiliate's unique link, the affiliate receives a commission.

### 2. How does affiliate marketing work step by step?
• You choose a niche or product/service to promote.
• You sign up for an affiliate program or network.
• You get a unique affiliate link (with tracking).
• You promote that link via your website, blog, social media, email, etc.
• Someone clicks on that link and makes a purchase or completes an action (lead, registration, etc.).
• The system (program/network) registers that the lead/sale came from your link and pays you the commission.

### 3. Is affiliate marketing legal or reliable?
Yes, affiliate marketing is inherently a legitimate marketing model — as long as you comply with laws and regulations (such as transparency, proper disclosure, avoiding fraud). Problems mainly arise with unethical practices such as cookie stuffing (automatically setting cookies so you get commission without the visitor actually coming through your link).

### 4. How much can I earn with affiliate marketing?
This depends strongly on several factors: The niche (high-priced products often give higher commissions), traffic to your promotions, the quality of your content and conversion rates, and the commission percentages the affiliate program offers. Some affiliates earn just extras, others achieve serious income.

### 5. Which commission models exist (CPS, CPA, CPL, etc.)?
• CPS = Cost Per Sale: you're paid when an actual sale takes place.
• CPA = Cost Per Action: you get paid when a pre-defined goal is reached (registration, lead, etc.).
• CPL = Cost Per Lead: you're paid per acquired lead.
• CPI = Cost Per Install (usually for apps): you get paid when the user installs the app.

### 6. How do I choose a good niche for affiliate marketing?
• Choose something you're interested in or have knowledge of (passion + expertise).
• Ensure there's sufficient demand/market.
• Look at competition: not too crowded, but active.
• Combine with products/services that have good commissions.
• Consider vertical markets (health, finance, software, education) or sub-niches.

### 7. Do I need my own website to do affiliate marketing?
No, it's not strictly necessary to have a traditional website, but having your own platform offers clear advantage: control, SEO, content, trust. You can also promote via social media, YouTube, email marketing, or even niche blogs on platforms. But your own site makes it easier to build traffic and retain content.

### 8. How do I find good affiliate programs to work with?
• Via affiliate networks (such as Awin, CJ, Impact, etc.).
• Directly via companies that offer an affiliate program (e.g., webshops or SaaS).
• By looking at competitors or other blogs in your niche what they promote.
• Via affiliate directories or lists of reliable programs.

### 9. What is an affiliate network and why would you use it?
An affiliate network is a platform that brings affiliates and merchants together, with infrastructure for tracking, payments, reporting, etc. The advantages: you don't have to set everything up technically yourself, you have access to multiple programs within one dashboard, and you benefit from network structure.

### 10. What is a "super affiliate"?
A super affiliate is an affiliate who is exceptionally successful in generating sales, often more than the average affiliate. They have large reach, advanced strategies, and often higher commission rates.

### 11. How long does an affiliate link "cookies"/tracking remain active (cookie duration)?
Cookie duration (cookie-setting period) is the timeframe in which a purchase is attributed to your link after a user clicked on it. For example 7 days, 30 days, 90 days, etc. The longer the cookie period, the more chance you still get commission if the buyer returns later.

### 12. How do I measure if my affiliate efforts are successful (metrics)?
Important metrics include: Clicks & CTR (how many clicks on your affiliate links), conversion ratio (how many of those clicks become purchases), EPC (Earnings Per Click) — average earned per click, total income/commissions, ROI (Return On Investment), if you incur costs (advertising, tools), average order value, and retention or repeat purchases (if applicable).

### 13. Which promotion channels work well for affiliate marketing?
• SEO/organic traffic (blogs, articles)
• Social media (Instagram, TikTok, Facebook, etc.)
• Email marketing/newsletters
• YouTube/video content
• Paid advertising (Google Ads, Facebook Ads) — but watch that this falls within rules
• Collaborations/guest blogs/influencer marketing

### 14. Should I place a disclaimer or disclosure that I use affiliate links?
Yes, in many countries (including the US under FTC rules) you're required to be transparent to your audience that you can earn money via affiliate links. This prevents misleading and increases trust.

### 15. What are risk factors or pitfalls in affiliate marketing?
• Unethical or fraudulent techniques (such as cookie stuffing)
• Poor conversion despite lots of traffic
• Over-dependence on one affiliate program (if it changes or closes)
• Competition in the niche
• Changes in rules/algorithms/program conditions
• Poor quality products which can damage your reputation

### 16. Is affiliate marketing scalable?
Yes, affiliate marketing is scalable in principle: once you have working content, links and traffic, you can add more promotions, more programs, new channels, etc. The challenge is consistently bringing in new traffic and conversion optimization.

### 17. Can I do affiliate marketing internationally?
Yes, you can promote affiliate programs in multiple countries (provided the program allows it). You must pay attention to language, currency, shipping costs, legislation and cultural differences.

### 18. How do I choose products/services to promote?
• Choose products that are reliable and have good reviews (your reputation is at stake).
• Review commission percentages vs price.
• Choose products that fit your niche/audience.
• Test yourself where possible to build credibility.
• Watch if it's an "evergreen" product (lasting demand) instead of temporary hype product.

### 19. Can I combine affiliate marketing with other income sources?
Absolutely — many affiliates combine affiliate income with their own products, advertising, coaching, sponsorship, or own digital products. Affiliate is often one of multiple income streams.

### 20. How do I start today with affiliate marketing (action plan)?
• Choose a niche/topic.
• Build a platform: website/blog/social/video.
• Create valuable content aimed at your target audience.
• Find affiliate programs that fit.
• Integrate affiliate links into your content naturally.
• Promote your content via SEO, social media, email, etc.
• Analyze what works/what doesn't, optimize.
• Scale your efforts: new products, new channels.`
  },
  {
    question: "Global rules and legislation for affiliate marketing in 2025",
    answer: `# Global rules and legislation for affiliate marketing in 2025

Affiliate marketing is legal worldwide, but is strictly regulated by rules around transparency and privacy. Affiliates must clearly state when they earn a commission ("This link is an affiliate link"), to comply with GDPR (Europe) and FTC guidelines (US). Also cookies may only be placed after user consent. Violations can lead to account blocking or fines. Always check the regulations in your region before starting campaigns.

# Why an affiliate disclaimer is mandatory according to FTC and GDPR rules

Transparency is essential in affiliate marketing. The FTC in the United States and GDPR in Europe require you to indicate that you earn income via certain links or recommendations. A sentence like "As an Amazon Associate I earn from qualifying purchases" is a good example. Clear disclosures prevent misleading, increase trust with your audience and protect your brand against legal risks.

# Key components of affiliate program terms and conditions

Each affiliate program contains specific rules in its terms. This states what you can and cannot do: allowed traffic sources, minimum payout, prohibited advertising and use of brand names. Violation — such as misleading claims or brand bidding — can lead to suspension. Always read the terms of providers like Amazon Associates, ClickBank or CJ Affiliate carefully before you start promotion.

# How to recognize reliable international affiliate providers

A reliable affiliate provider has clear terms, regular payments and a good reputation. Choose established platforms like ShareASale, Impact, CJ Affiliate, PartnerStack or Rakuten Advertising. Be careful with unknown networks that promise unrealistically high commissions or ask for money to join. Always check reviews, payment history and transparency of their terms before signing up.

# Cookies and tracking rules in affiliate marketing according to privacy legislation

Affiliate tracking works via cookies and pixels, but under GDPR and CCPA this is only allowed after explicit consent from the visitor. So you must show a clear cookie banner and explain in your privacy statement how tracking takes place. Not complying with these rules can lead to sanctions or loss of trust. Always use a transparent cookie tool and respect users' choices.

# What happens if you violate the terms of an affiliate program

When violating the rules — for example through spam, fake clicks or using prohibited brand names — your affiliate account can be immediately closed and outstanding commissions can be withheld. Large networks like Impact and Rakuten actively monitor for fraud. Stick to the guidelines, promote honestly and avoid practices like cookie stuffing or false traffic generation.

# Why it's important to read the affiliate agreement completely

The affiliate agreement determines your rights, responsibilities and payment structure. It states how commissions are calculated, which marketing methods are allowed and which restrictions apply per region. By reading the fine print, you prevent missing out on income or accidentally acting against the program. A good understanding of the agreement protects your brand and reputation.

# Differences between affiliate rules in the US, Europe and Asia

Rules for affiliate marketing differ per region:

• United States: FTC requires clear disclosures.
• Europe: GDPR and ePrivacy directives focus on data protection.
• Asia-Pacific: countries like Australia and Singapore are implementing increasingly strict legislation.

Those promoting internationally must adjust their cookie policy and disclosure texts to each jurisdiction to remain fully compliant.

# The importance of transparency and ethics in modern affiliate marketing

Transparency and ethical action are essential nowadays. Affiliates who communicate honestly, promote quality products and respect privacy, build sustainable trust. This leads to higher conversions and long-term partnerships with advertisers. Short-term tricks rarely deliver results; authenticity and creating value are the keys to success in 2025 and beyond.

# Top 5 international affiliate networks with reliable terms and payments

• CJ Affiliate (Commission Junction) – global coverage, transparent terms.
• Impact.com – professional network with advanced tracking.
• ShareASale – ideal for beginners, clear policy.
• PartnerStack – specialized in SaaS programs.
• Rakuten Advertising – long active, strong compliance with privacy rules.

These networks are known for their fair contracts, stable payouts and compliance with international regulations.

# Amazon Associates – the largest and best-known affiliate network in the world

Amazon Associates is the world's most popular affiliate program, ideal for beginners and professionals. You can promote millions of products and earn commission on every sale via your link. Commission percentages are reasonable but vary per category. Amazon is known for its high conversion rate and user-friendly tools. Important: always mention a clear disclosure ("As an Amazon Associate I earn from qualifying purchases") to comply with FTC guidelines.

# Awin – international affiliate network with thousands of premium advertisers

Awin is one of the largest affiliate networks in the world, active in more than 180 countries. The platform works with well-known brands in retail, finance, travel and tech. Affiliates appreciate Awin for its transparent tracking, reliable payouts and extensive reporting. With a user-friendly dashboard and good support, Awin is ideal for those looking for stable, international income via affiliate marketing.

# CJ Affiliate (Commission Junction) – global network with strong reputation

CJ Affiliate, also called Commission Junction, is a leading global network that works with hundreds of top brands. It offers accurate tracking, flexible commissions and advanced analysis tools. CJ is known for its reliability and long history in the affiliate industry. Thanks to the extensive campaign selection, the platform is suitable for both niche bloggers and large media partners.

# Impact.com – professional platform for advanced affiliate campaigns

Impact.com focuses on professional affiliates and large brands that want full control over their partnerships. The platform offers powerful features such as automation, API integrations and real-time reporting. Impact is known for its transparency, compliance with privacy legislation (GDPR/CCPA) and flexible commission structures. Thanks to advanced technology it's ideal for affiliates who want to scale internationally.

# Rakuten Advertising – reliable network with strong global brands

Rakuten Advertising (formerly Rakuten Marketing) is among the most reliable affiliate networks in the world. Large brands like Microsoft, Walmart and Booking.com work via this platform. Rakuten offers fair terms, monthly payments and excellent tracking. The company scores high on compliance and data security, making it particularly suitable for affiliates targeting American, European and Asian markets.

# ShareASale – user-friendly network for small and medium-sized affiliates

ShareASale is an excellent platform for beginning and medium-sized affiliates. The network has thousands of advertisers in diverse niches, from fashion and software to health and lifestyle. The interface is simple, commissions are transparent and payouts are reliable. Thanks to the large selection of programs you can easily find a suitable niche that aligns with your audience and content strategy.

# PartnerStack – specialized in SaaS and B2B affiliate programs

PartnerStack is the platform for affiliates active in the software and B2B sector. Companies like HubSpot, Monday.com and ClickUp use PartnerStack to manage partners worldwide. The network offers automated tracking, monthly payments and performance-based commissions. PartnerStack stands out for its focus on long-term partnerships and scalable solutions for professional affiliates and agencies.`
  }
];

const FAQEN = () => {
  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/30">Comprehensive Information</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need to know about legal documents
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click on the topics to read more about each aspect of legal compliance for affiliate websites.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-primary/10 rounded-md px-3 py-1 shadow-sm hover:shadow-md transition-all"
              >
                <AccordionTrigger className="text-left hover:text-primary text-sm font-medium py-2">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs leading-relaxed pt-1 pb-2">
                  <div 
                    className="whitespace-pre-line [&_h1]:text-base [&_h1]:font-bold [&_h1]:text-foreground [&_h1]:mt-4 [&_h1]:mb-2 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-3 [&_h3]:mb-1"
                    dangerouslySetInnerHTML={{ __html: item.answer.replace(/### (.*?)$/gm, '<h3>$1</h3>').replace(/# (.*?)$/gm, '<h1>$1</h1>') }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQEN;
