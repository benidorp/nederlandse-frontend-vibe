import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const startingQuestions = [
  {
    question: "How to Start an E-Commerce Website from Scratch in 2025?",
    answer: "Launching an e-commerce website in 2025 involves selecting a niche (e.g., eco-friendly products), choosing a platform like Shopify or WooCommerce, and securing a domain and hosting. Integrate payment gateways (Stripe, PayPal), optimize for SEO with tools like Yoast, and promote via social media. Initial costs range from $100-$2,000, with $50-$200/month for maintenance."
  },
  {
    question: "What Are the Best Platforms for Building an E-Commerce Website?",
    answer: "Shopify is beginner-friendly with robust features, WooCommerce offers WordPress flexibility, and BigCommerce suits scaling businesses. Wix is great for small stores with simple designs. Choose based on budget, technical skills, and scalability needs."
  },
  {
    question: "How Much Does It Cost to Start an E-Commerce Website?",
    answer: "Expect $100-$2,000 initially for a domain ($10-$20/year), hosting ($5-$30/month), themes ($0-$200), and plugins ($0-$100). Additional costs include marketing ($50-$500/month) and custom development for advanced features."
  },
  {
    question: "What Are the Essential Features for an E-Commerce Website?",
    answer: "Key features include a secure checkout, mobile responsiveness, product search, customer reviews, and inventory management. Add live chat, fast load times, and SEO-optimized product pages to boost user experience and rankings."
  },
  {
    question: "How to Choose a Niche for My E-Commerce Business?",
    answer: "Research high-demand, low-competition niches using Google Trends or SEMrush (e.g., \"sustainable fashion\"). Analyze competitors, target specific audiences, and ensure product availability to differentiate your brand."
  },
  {
    question: "What Is the Best Domain Name Strategy for an E-Commerce Site?",
    answer: "Select a short, memorable, keyword-rich domain (e.g., \"EcoShopOnline.com\") using Namecheap or GoDaddy. Avoid hyphens or numbers, and ensure it reflects your brand for better SEO and trust."
  },
  {
    question: "Which Hosting Provider Is Best for an E-Commerce Website?",
    answer: "SiteGround, Bluehost, and WP Engine offer fast, reliable hosting with 99.9% uptime. Choose plans with CDN support and scalability for high traffic. Costs range from $5-$50/month based on needs."
  },
  {
    question: "How to Set Up Payment Gateways for an E-Commerce Store?",
    answer: "Integrate Stripe, PayPal, or Square for secure transactions. Use plugins like WooCommerce Payments or Shopify Payments. Ensure PCI compliance and SSL certificates to protect customer data."
  },
  {
    question: "What Are the Legal Requirements for Starting an E-Commerce Business?",
    answer: "Register your business (e.g., LLC), obtain an EIN (U.S.), and comply with GDPR or CCPA for data privacy. Create terms of service and privacy policies using tools like Termly to meet legal standards."
  },
  {
    question: "How to Create a Business Plan for an E-Commerce Startup?",
    answer: "Outline your niche, target audience, revenue model (e.g., dropshipping, subscriptions), and marketing strategy. Include budget, supplier plans, and growth projections. Use templates from SCORE or Bplans."
  },
  {
    question: "What Are the Best Free Tools for Building an E-Commerce Website?",
    answer: "Use WooCommerce (free plugin), Wix (free plan), or Ecwid for small stores. Free SEO tools like Ubersuggest and Google Analytics help optimize and track performance without upfront costs."
  },
  {
    question: "How to Design a User-Friendly E-Commerce Website?",
    answer: "Prioritize intuitive navigation, fast load times, and mobile responsiveness. Use clean themes like Shopify's Dawn or WordPress's Storefront. Add trust signals like reviews and secure checkout badges."
  },
  {
    question: "What Is Dropshipping and How to Start an E-Commerce Store with It?",
    answer: "Dropshipping involves selling products without holding inventory; suppliers ship directly to customers. Use Oberlo or Spocket with Shopify to start. Focus on niche products and SEO to compete effectively."
  },
  {
    question: "How to Source Products for an E-Commerce Website?",
    answer: "Partner with wholesalers via Alibaba or SaleHoo, use dropshipping platforms like Oberlo, or create your own products. Verify supplier reliability and prioritize quality to build customer trust."
  },
  {
    question: "What Are the Best E-Commerce Plugins for WordPress?",
    answer: "WooCommerce is top for flexibility, with plugins like Yoast SEO, WP Rocket (caching), and WooCommerce Subscriptions for added functionality. Choose lightweight plugins to maintain site speed."
  },
  {
    question: "How to Integrate Inventory Management into an E-Commerce Site?",
    answer: "Use tools like TradeGecko or Zoho Inventory for real-time tracking. Integrate with Shopify or WooCommerce for automated updates. Ensure scalability to handle growing product catalogs."
  },
  {
    question: "How to Ensure Mobile Responsiveness for an E-Commerce Website?",
    answer: "Choose responsive themes and test with Google's Mobile-Friendly Test. Optimize images, use CSS media queries, and prioritize touch-friendly navigation to enhance mobile user experience."
  },
  {
    question: "What Are the Steps to Launch an E-Commerce Website Successfully?",
    answer: "Define your niche, build the site, integrate payments and shipping, optimize for SEO, and test functionality. Soft-launch to a small audience, gather feedback, and promote via social media and email."
  },
  {
    question: "How to Choose a Theme for My E-Commerce Website?",
    answer: "Select fast, responsive themes like Shopify's Debut or WordPress's Astra. Prioritize clean design, SEO compatibility, and customization options. Test load times with GTmetrix to ensure performance."
  },
  {
    question: "What Are the Best Payment Processors for Small E-Commerce Businesses?",
    answer: "Stripe and PayPal offer low fees (2.9% + $0.30/transaction) and easy integration. Square is great for in-person and online sales. Choose based on your target market and currency needs."
  },
  {
    question: "How to Set Up Shipping Options for an E-Commerce Store?",
    answer: "Use Shopify Shipping or Easyship for calculated rates. Offer flat-rate, free, or expedited shipping. Integrate with carriers like USPS or DHL and clearly display shipping costs at checkout."
  },
  {
    question: "What Security Measures Are Needed for an E-Commerce Website?",
    answer: "Install SSL certificates, use PCI-compliant payment gateways, and add security plugins like Wordfence. Conduct regular audits and backups with UpdraftPlus to protect against cyber threats."
  },
  {
    question: "How to Conduct Market Research for an E-Commerce Startup?",
    answer: "Analyze competitors with SEMrush, survey target audiences via Google Forms, and use Google Trends to identify demand. Focus on customer pain points to refine your product offerings."
  },
  {
    question: "What Are the Best SEO Practices for a New E-Commerce Website?",
    answer: "Optimize product pages with long-tail keywords, meta tags, and schema markup. Improve site speed, build backlinks, and use Yoast SEO to enhance crawlability and rankings."
  },
  {
    question: "How to Create a Budget for Starting an E-Commerce Business?",
    answer: "Allocate $100-$500 for setup (domain, hosting, theme) and $50-$300/month for marketing and tools. Include supplier costs and a buffer for unexpected expenses. Track with QuickBooks."
  },
  {
    question: "What Are the Benefits of Using Shopify for E-Commerce?",
    answer: "Shopify offers easy setup, built-in SEO tools, and integrations with apps like Oberlo. It's scalable, supports multiple payment gateways, and provides 24/7 support, ideal for beginners."
  },
  {
    question: "How to Build an E-Commerce Website Without Coding Skills?",
    answer: "Use drag-and-drop platforms like Wix, Shopify, or Squarespace. Customize pre-built templates, add products, and integrate plugins for payments and SEO without coding expertise."
  },
  {
    question: "What Are the Best Marketing Strategies for a New E-Commerce Site?",
    answer: "Leverage SEO, social media ads (Instagram, Facebook), and email marketing (Mailchimp). Offer discounts, build an email list, and use influencer partnerships to drive initial traffic."
  },
  {
    question: "How to Set Up a Return Policy for an E-Commerce Store?",
    answer: "Create a clear, customer-friendly return policy (e.g., 30-day returns, free shipping). Display it prominently and use tools like Returnly to automate the process for efficiency."
  },
  {
    question: "What Are the Tax Implications of Running an E-Commerce Business?",
    answer: "Collect sales tax based on your region's laws (e.g., U.S. nexus rules). Use Avalara or TaxJar for automation. Consult a tax professional to handle income and international taxes."
  },
  {
    question: "How to Choose a Reliable Supplier for E-Commerce Products?",
    answer: "Vet suppliers on Alibaba or Spocket for quality and reliability. Request samples, check reviews, and negotiate terms. Prioritize suppliers with fast shipping and good communication."
  },
  {
    question: "What Is the Difference Between WooCommerce and Shopify?",
    answer: "WooCommerce is a free WordPress plugin with high customization but requires technical skills. Shopify is a hosted platform with easier setup and higher costs ($29-$299/month)."
  },
  {
    question: "How to Optimize Product Pages for an E-Commerce Website?",
    answer: "Use high-quality images, keyword-rich descriptions, and clear CTAs. Add customer reviews, optimize meta tags, and use schema markup to improve SEO and conversion rates."
  },
  {
    question: "What Are the Best Free E-Commerce Platforms for Beginners?",
    answer: "WooCommerce and Ecwid offer free plans for small stores. Wix provides a free tier with limited features. Pair with free tools like Ubersuggest for SEO to minimize costs."
  },
  {
    question: "How to Create a Brand Identity for an E-Commerce Business?",
    answer: "Develop a unique logo with Canva, choose consistent colors/fonts, and craft a compelling brand story. Reflect your niche (e.g., eco-conscious) across your site and marketing."
  },
  {
    question: "What Are the Costs of Maintaining an E-Commerce Website?",
    answer: "Monthly costs include hosting ($5-$30), domain renewal ($10-$20/year), plugins ($0-$50), and marketing ($50-$500). Budget for updates, security, and customer support tools."
  },
  {
    question: "How to Set Up Email Marketing for an E-Commerce Startup?",
    answer: "Use Mailchimp or Klaviyo to build an email list. Send welcome emails, product promotions, and cart abandonment reminders. Segment audiences for personalized campaigns."
  },
  {
    question: "What Are the Best Social Media Platforms for E-Commerce Promotion?",
    answer: "Instagram and Pinterest excel for visual products, TikTok for viral reach, and Facebook for targeted ads. Use hashtags and shoppable posts to drive traffic and sales."
  },
  {
    question: "How to Handle Customer Service for a New E-Commerce Store?",
    answer: "Offer live chat via Tidio, respond promptly to emails, and create an FAQ page. Outsource to platforms like Zendesk for scalability. Prioritize clear communication to build trust."
  },
  {
    question: "What Are the Common Mistakes to Avoid When Starting an E-Commerce Site?",
    answer: "Avoid poor site speed, neglecting SEO, or choosing unreliable suppliers. Don't skip mobile optimization or legal compliance. Focus on quality products and customer experience."
  },
  {
    question: "How to Use Analytics to Track E-Commerce Website Performance?",
    answer: "Install Google Analytics and Shopify Analytics to monitor traffic, conversions, and bounce rates. Use Google Search Console to track keyword rankings and optimize based on data."
  },
  {
    question: "What Are the Best Ways to Test an E-Commerce Website Before Launch?",
    answer: "Test checkout, payment gateways, and mobile responsiveness. Use tools like BrowserStack for cross-device testing and gather beta user feedback to fix issues pre-launch."
  },
  {
    question: "How to Integrate a Shopping Cart into an E-Commerce Site?",
    answer: "Use built-in carts on Shopify or WooCommerce. Customize with plugins like CartFlows for upselling. Ensure a seamless, secure checkout process to reduce abandonment."
  },
  {
    question: "What Are the Benefits of a Subscription Model for E-Commerce?",
    answer: "Subscriptions ensure recurring revenue and customer retention. Offer curated boxes (e.g., beauty, snacks) via platforms like Cratejoy or WooCommerce Subscriptions for predictable income."
  },
  {
    question: "How to Create a Privacy Policy for an E-Commerce Website?",
    answer: "Use Termly or Iubenda to generate GDPR-compliant privacy policies. Disclose data collection (e.g., cookies, payments) and update regularly to comply with global regulations."
  },
  {
    question: "What Are the Best Tools for Creating E-Commerce Product Photos?",
    answer: "Use Canva or Adobe Lightroom for editing, Placeit for mockups, and Pixc for background removal. Optimize images for SEO with alt text and compress for faster load times."
  },
  {
    question: "How to Set Up a Blog for an E-Commerce Website?",
    answer: "Add a blog via WordPress or Shopify's built-in feature. Write SEO-optimized posts (e.g., \"How to Choose Eco-Friendly Products\") to drive traffic and engage customers."
  },
  {
    question: "What Are the Steps to Register an E-Commerce Business Legally?",
    answer: "Choose a business structure (e.g., LLC), register with local authorities, and obtain an EIN (U.S.). Check trademark availability for your brand and comply with tax laws."
  },
  {
    question: "How to Build Trust with Customers on a New E-Commerce Site?",
    answer: "Display trust badges, customer reviews, and secure payment icons. Offer clear return policies and responsive support. Use SSL and transparent pricing to boost credibility."
  },
  {
    question: "What Are the Best Payment Security Practices for E-Commerce?",
    answer: "Use PCI-compliant gateways, enable two-factor authentication, and install SSL certificates. Regularly update software and use tools like Sucuri to monitor for vulnerabilities."
  },
  {
    question: "How to Choose Between a Marketplace and a Standalone E-Commerce Site?",
    answer: "Marketplaces like Amazon offer instant traffic but high fees (8-15%). Standalone sites give control and branding but require marketing. Start with a marketplace, then build your site."
  }
];

const ownersQuestions = [
  {
    question: "How to Increase Conversion Rates on My E-Commerce Website?",
    answer: "Optimize checkout with one-click options, add trust signals, and use exit-intent popups. A/B test CTAs and offer free shipping. Tools like Optimizely help improve conversions."
  },
  {
    question: "What Are the Best SEO Strategies for E-Commerce in 2025?",
    answer: "Target long-tail keywords, optimize product pages with schema markup, and improve site speed. Build backlinks via guest posts and use Rank Math for on-page SEO."
  },
  {
    question: "How to Reduce Cart Abandonment on an E-Commerce Store?",
    answer: "Simplify checkout, offer guest checkout, and send abandonment emails via Klaviyo. Display shipping costs upfront and use retargeting ads to recover lost sales."
  },
  {
    question: "What Are the Most Effective Ways to Retain E-Commerce Customers?",
    answer: "Implement loyalty programs, send personalized emails, and offer exclusive discounts. Use CRM tools like HubSpot to nurture relationships and increase repeat purchases."
  },
  {
    question: "How to Scale an E-Commerce Business Without Losing Quality?",
    answer: "Automate inventory and customer service with tools like Zoho. Partner with reliable suppliers, invest in scalable hosting, and expand marketing while maintaining brand consistency."
  },
  {
    question: "What Are the Best Tools for Managing E-Commerce Inventory?",
    answer: "TradeGecko, Zoho Inventory, and Shopify's built-in tools offer real-time tracking. Integrate with your platform to sync stock levels and avoid overselling."
  },
  {
    question: "How to Optimize Product Listings for Better Search Rankings?",
    answer: "Use keyword-rich titles, detailed descriptions, and high-quality images. Add customer reviews and schema markup. Optimize for long-tail keywords like \"best organic skincare 2025.\""
  },
  {
    question: "What Are the Latest E-Commerce Trends to Follow in 2025?",
    answer: "AI-driven personalization, voice search optimization, and AR product previews are trending. Focus on sustainable products, mobile-first design, and subscription models for growth."
  },
  {
    question: "How to Handle Negative Reviews on an E-Commerce Website?",
    answer: "Respond professionally, address concerns, and offer solutions (e.g., refunds). Encourage positive reviews and display them prominently. Use tools like Yotpo to manage feedback."
  },
  {
    question: "What Are the Best Email Marketing Tools for E-Commerce?",
    answer: "Klaviyo, Mailchimp, and Omnisend offer segmentation and automation for e-commerce. Use them for welcome series, cart recovery, and personalized product recommendations."
  },
  {
    question: "How to Improve Website Speed for an E-Commerce Store?",
    answer: "Optimize images with Smush, use a CDN like Cloudflare, and enable caching with WP Rocket. Choose fast hosting and minify CSS/JS to boost speed and SEO."
  },
  {
    question: "What Are the Best Strategies for Upselling in E-Commerce?",
    answer: "Recommend related products at checkout, use popups for bundles, and offer limited-time deals. Tools like CartFlows or Shopify's upsell apps increase average order value."
  },
  {
    question: "How to Use Social Media Ads to Boost E-Commerce Sales?",
    answer: "Run targeted ads on Facebook and Instagram with dynamic product ads. Use TikTok for viral campaigns and Pinterest for niche products. Budget $50-$500/month for testing."
  },
  {
    question: "What Are the Most Profitable Affiliate Programs for E-Commerce?",
    answer: "Amazon Associates, ShareASale, and Rakuten offer 1-10% commissions. Promote niche-specific programs (e.g., fashion, tech) to align with your products and audience."
  },
  {
    question: "How to Analyze Competitor E-Commerce Websites?",
    answer: "Use SEMrush or SimilarWeb to analyze traffic, keywords, and backlinks. Study competitor product pages, pricing, and marketing to identify gaps and opportunities."
  },
  {
    question: "What Are the Best Practices for E-Commerce Customer Support?",
    answer: "Offer 24/7 live chat with Tidio, respond within 24 hours to emails, and create an FAQ page. Train staff for empathy and use Zendesk for ticket management."
  },
  {
    question: "How to Implement Personalization on an E-Commerce Website?",
    answer: "Use AI tools like Dynamic Yield to recommend products based on user behavior. Personalize emails and homepage content with customer data to boost engagement and sales."
  },
  {
    question: "What Are the Benefits of AI in E-Commerce Operations?",
    answer: "AI enhances personalization, automates chatbots, and optimizes pricing. Tools like Algolia for search and Chatfuel for support improve efficiency and customer satisfaction."
  },
  {
    question: "How to Manage Returns and Refunds Efficiently in E-Commerce?",
    answer: "Automate with Returnly or Loop Returns. Offer clear policies, prepaid labels, and fast processing. Communicate updates to customers to maintain trust and loyalty."
  },
  {
    question: "What Are the Best Analytics Tools for E-Commerce Websites?",
    answer: "Google Analytics, Shopify Analytics, and Hotjar track traffic, conversions, and user behavior. Use Google Search Console for SEO insights and A/B testing for optimization."
  },
  {
    question: "How to Create a Loyalty Program for E-Commerce Customers?",
    answer: "Use apps like Smile.io or LoyaltyLion to offer points for purchases or referrals. Provide discounts, free products, or VIP perks to encourage repeat business."
  },
  {
    question: "What Are the Best Ways to Reduce Shipping Costs in E-Commerce?",
    answer: "Negotiate rates with carriers (e.g., USPS, FedEx), use flat-rate shipping, or offer free shipping thresholds. Partner with fulfillment services like ShipBob to optimize costs."
  },
  {
    question: "How to Optimize E-Commerce Checkout for Higher Conversions?",
    answer: "Simplify forms, offer guest checkout, and support multiple payment methods. Use progress bars and trust badges to reduce friction and boost completion rates."
  },
  {
    question: "What Are the Most Effective Paid Ad Platforms for E-Commerce?",
    answer: "Google Ads for search intent, Facebook Ads for retargeting, and TikTok Ads for viral reach. Allocate budgets based on ROI and test campaigns with small spends first."
  },
  {
    question: "How to Use Content Marketing to Drive E-Commerce Sales?",
    answer: "Publish blogs, videos, or guides (e.g., \"Top 10 Eco-Friendly Products\") with SEO keywords. Promote via social media and email to drive traffic and conversions."
  },
  {
    question: "What Are the Best Strategies for International E-Commerce Expansion?",
    answer: "Add multilingual support with WPML, offer local payment methods, and optimize for regional SEO. Partner with global carriers and comply with international tax laws."
  },
  {
    question: "How to Protect an E-Commerce Website from Cyber Threats?",
    answer: "Use SSL, PCI-compliant gateways, and security plugins like Sucuri. Conduct regular audits, update software, and enable two-factor authentication to safeguard data."
  },
  {
    question: "What Are the Best Tools for Automating E-Commerce Processes?",
    answer: "Zapier automates workflows, Klaviyo handles email, and TradeGecko manages inventory. Automate repetitive tasks to save time and focus on growth strategies."
  },
  {
    question: "How to Use Customer Data to Improve E-Commerce Sales?",
    answer: "Analyze purchase history with CRM tools like HubSpot to personalize offers. Segment audiences for targeted campaigns and use heatmaps (Hotjar) to optimize site layout."
  },
  {
    question: "What Are the Benefits of Offering Free Shipping in E-Commerce?",
    answer: "Free shipping increases conversions (70% of shoppers prefer it). Set minimum order thresholds to maintain margins and use tools like Easyship to optimize costs."
  },
  {
    question: "How to Create Effective Product Bundles for E-Commerce?",
    answer: "Group complementary products (e.g., camera + tripod) with discounts. Use Shopify's bundle apps or WooCommerce Product Bundles to simplify setup and boost sales."
  },
  {
    question: "What Are the Best Practices for E-Commerce Email Campaigns?",
    answer: "Segment lists, use personalized subject lines, and automate sequences (welcome, cart recovery). Test timing and content with Klaviyo to maximize open rates and conversions."
  },
  {
    question: "How to Improve Mobile Shopping Experience for E-Commerce Users?",
    answer: "Optimize for mobile-first indexing, use responsive themes, and simplify checkout. Test with Google's Mobile-Friendly Test and prioritize fast load times for mobile users."
  },
  {
    question: "What Are the Most Common E-Commerce Security Vulnerabilities?",
    answer: "Common issues include weak passwords, outdated software, and unsecure APIs. Mitigate with regular updates, strong encryption, and security audits using Sucuri."
  },
  {
    question: "How to Use Influencer Marketing for E-Commerce Growth?",
    answer: "Partner with micro-influencers on Instagram or TikTok via platforms like AspireIQ. Offer free products or affiliate deals to promote your store authentically to their followers."
  },
  {
    question: "What Are the Best Tools for E-Commerce Price Tracking?",
    answer: "Use Price2Spy or Prisync to monitor competitor pricing. Automate price adjustments to stay competitive and integrate with your platform for real-time updates."
  },
  {
    question: "How to Optimize E-Commerce Site for Voice Search?",
    answer: "Target conversational keywords (e.g., \"best running shoes near me\") and use schema markup. Optimize for featured snippets and ensure fast load times for voice search compatibility."
  },
  {
    question: "What Are the Best Ways to Handle Peak Sales Seasons in E-Commerce?",
    answer: "Prepare inventory, scale hosting, and increase ad spend. Offer flash sales and optimize checkout for high traffic. Use tools like ShipStation to streamline fulfillment."
  },
  {
    question: "How to Use Retargeting Ads for E-Commerce Customers?",
    answer: "Run retargeting campaigns on Facebook or Google Ads to re-engage visitors. Use dynamic ads to show viewed products and offer discounts to recover abandoned carts."
  },
  {
    question: "What Are the Benefits of Multi-Channel Selling in E-Commerce?",
    answer: "Selling on Amazon, eBay, and your site increases reach and revenue. Use tools like Sellbrite to sync inventory and avoid overselling across channels."
  },
  {
    question: "How to Improve Customer Lifetime Value in E-Commerce?",
    answer: "Offer loyalty programs, personalized recommendations, and post-purchase emails. Use CRM tools to nurture relationships and encourage repeat purchases over time."
  },
  {
    question: "What Are the Best Strategies for Cross-Selling in E-Commerce?",
    answer: "Display related products on product pages and during checkout. Use apps like ReConvert to suggest complementary items, increasing average order value."
  },
  {
    question: "How to Use User-Generated Content for E-Commerce Marketing?",
    answer: "Encourage reviews, photos, or videos from customers via campaigns or hashtags. Display UGC on product pages with tools like Yotpo to build trust and drive sales."
  },
  {
    question: "What Are the Best Tools for E-Commerce SEO Audits?",
    answer: "Use Screaming Frog, SEMrush, or Ahrefs to identify broken links, duplicate content, and keyword gaps. Fix issues and optimize for better search engine rankings."
  },
  {
    question: "How to Manage Multiple Suppliers for an E-Commerce Store?",
    answer: "Use tools like TradeGecko to track supplier orders and inventory. Maintain clear communication, negotiate terms, and diversify suppliers to avoid disruptions."
  },
  {
    question: "What Are the Best Practices for E-Commerce Live Chat Support?",
    answer: "Use Tidio or Zendesk for 24/7 chat. Train agents for quick responses, personalize interactions, and integrate chatbots for common queries to enhance support."
  },
  {
    question: "How to Create a Successful E-Commerce Referral Program?",
    answer: "Offer incentives like discounts or cash rewards for referrals. Use apps like ReferralCandy to automate tracking and promote via email and social media."
  },
  {
    question: "What Are the Benefits of Subscription Boxes in E-Commerce?",
    answer: "Subscription boxes ensure recurring revenue and customer loyalty. Use Cratejoy or Subbly to manage subscriptions and curate niche-specific products for retention."
  },
  {
    question: "How to Use Video Content to Boost E-Commerce Sales?",
    answer: "Create product demos or tutorials and embed them on product pages. Optimize video titles with keywords and host on YouTube or Vimeo to drive traffic and conversions."
  },
  {
    question: "What Are the Best Ways to Recover Abandoned Carts in E-Commerce?",
    answer: "Send automated emails with discounts via Klaviyo, use retargeting ads, and simplify checkout. Display exit-intent popups to capture users before they leave."
  }
];

const EcommerceQA = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Starting Questions Section */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Questions About Starting an E-Commerce Website
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {startingQuestions.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`starting-${index}`}
                  className="border rounded-lg px-6 bg-background"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-foreground pr-4">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Owners Questions Section */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Questions from E-Commerce Website Owners
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {ownersQuestions.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`owners-${index}`}
                  className="border rounded-lg px-6 bg-background"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-foreground pr-4">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceQA;
