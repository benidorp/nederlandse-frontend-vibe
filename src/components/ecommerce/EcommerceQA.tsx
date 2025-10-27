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

const onlineBusinessStartingQuestions = [
  {
    question: "How to Start an Online Business Website from Scratch in 2025?",
    answer: "Launching an online business website in 2025 involves choosing a niche (e.g., e-commerce, consulting), selecting a platform like WordPress or Shopify, and securing a domain and hosting. Integrate payment systems, optimize for SEO with Yoast, and promote via social media. Initial costs range from $100-$2,000, with $50-$200/month for maintenance."
  },
  {
    question: "What Are the Best Platforms for Building an Online Business Website?",
    answer: "Shopify excels for e-commerce, WordPress with WooCommerce offers flexibility for blogs and services, and Wix is ideal for beginners with simple designs. Choose based on your business model and technical skills."
  },
  {
    question: "How Much Does It Cost to Start an Online Business Website?",
    answer: "Expect $100-$2,000 for setup, including domain ($10-$20/year), hosting ($5-$30/month), themes ($0-$200), and plugins ($0-$100). Marketing and custom development may add $50-$500/month."
  },
  {
    question: "What Are the Essential Features for an Online Business Website?",
    answer: "Include a secure checkout, mobile responsiveness, contact forms, SEO optimization, and analytics. Add live chat, customer reviews, and fast load times to enhance user experience and rankings."
  },
  {
    question: "How to Choose a Niche for My Online Business Website?",
    answer: "Research high-demand niches like digital marketing tools or online courses using Google Trends or SEMrush. Target underserved markets with low competition to stand out and attract customers."
  },
  {
    question: "What Is the Best Domain Name Strategy for an Online Business Site?",
    answer: "Pick a short, memorable, keyword-rich domain (e.g., \"GrowEasyOnline.com\") via Namecheap. Avoid hyphens, ensure brand alignment, and check trademark availability for SEO and trust."
  },
  {
    question: "Which Hosting Provider Is Best for an Online Business Website?",
    answer: "SiteGround, Bluehost, and WP Engine offer reliable hosting with 99.9% uptime. Choose scalable plans with CDN support for high traffic and fast load times, costing $5-$50/month."
  },
  {
    question: "How to Set Up Payment Gateways for an Online Business Website?",
    answer: "Integrate Stripe, PayPal, or Square for secure payments. Use plugins like WooCommerce Payments or Shopify Payments. Ensure PCI compliance and SSL for customer data protection."
  },
  {
    question: "What Are the Legal Requirements for Starting an Online Business Website?",
    answer: "Register as an LLC or sole proprietorship, obtain an EIN (U.S.), and comply with GDPR/CCPA. Create privacy policies and terms of service using Termly to meet legal standards."
  },
  {
    question: "How to Create a Business Plan for an Online Business Website?",
    answer: "Outline your niche, target audience, revenue model (e.g., subscriptions, services), and marketing strategy. Include budget and growth goals using templates from Bplans or SCORE."
  },
  {
    question: "What Are the Best Free Tools for Building an Online Business Website?",
    answer: "Use WordPress with free plugins, Wix's free plan, or Google Analytics for tracking. Ubersuggest and Canva offer free SEO and design tools to minimize startup costs."
  },
  {
    question: "How to Design a User-Friendly Online Business Website?",
    answer: "Prioritize clean navigation, fast load times, and mobile responsiveness. Use themes like Astra or Wix templates. Add trust signals like testimonials and secure badges for credibility."
  },
  {
    question: "What Is Dropshipping and How to Start an Online Business with It?",
    answer: "Dropshipping sells products without inventory; suppliers ship directly. Use Oberlo or Spocket with Shopify. Focus on niche products and SEO to compete in 2025's market."
  },
  {
    question: "How to Source Products or Services for an Online Business Website?",
    answer: "Partner with wholesalers (Alibaba), freelancers (Upwork), or create digital products (eBooks). Verify quality and reliability to ensure customer satisfaction and repeat business."
  },
  {
    question: "What Are the Best Plugins for WordPress Online Business Websites?",
    answer: "WooCommerce for e-commerce, Yoast SEO for optimization, and WP Rocket for speed. Add Contact Form 7 for inquiries and MonsterInsights for analytics to enhance functionality."
  },
  {
    question: "How to Integrate Booking or Scheduling Systems into an Online Business Site?",
    answer: "Use Bookly or Calendly for service-based businesses. Integrate via plugins or APIs to manage appointments. Ensure real-time updates and mobile compatibility for user convenience."
  },
  {
    question: "How to Ensure Mobile Responsiveness for an Online Business Website?",
    answer: "Choose responsive themes and test with Google's Mobile-Friendly Test. Optimize images, use CSS media queries, and prioritize touch-friendly navigation for mobile users."
  },
  {
    question: "What Are the Steps to Launch an Online Business Website Successfully?",
    answer: "Define your niche, build the site, integrate payments, optimize for SEO, and test functionality. Soft-launch, gather feedback, and promote via social media and email marketing."
  },
  {
    question: "How to Choose a Theme for My Online Business Website?",
    answer: "Select lightweight, SEO-friendly themes like Shopify's Dawn or WordPress's OceanWP. Ensure customization options and test load times with GTmetrix for performance."
  },
  {
    question: "What Are the Best Payment Processors for Small Online Businesses?",
    answer: "Stripe and PayPal offer low fees (2.9% + $0.30/transaction) and easy integration. Square suits hybrid businesses. Choose based on your audience and currency needs."
  },
  {
    question: "How to Set Up Shipping Options for an Online Business Store?",
    answer: "Use Shopify Shipping or Easyship for calculated rates. Offer flat-rate or free shipping thresholds. Integrate with carriers like USPS or FedEx and display costs clearly."
  },
  {
    question: "What Security Measures Are Needed for an Online Business Website?",
    answer: "Install SSL certificates, use PCI-compliant gateways, and add Wordfence for security. Conduct regular audits and backups with UpdraftPlus to protect against threats."
  },
  {
    question: "How to Conduct Market Research for an Online Business Startup?",
    answer: "Use SEMrush for competitor analysis, Google Forms for surveys, and Google Trends for demand. Identify customer pain points to tailor your products or services effectively."
  },
  {
    question: "What Are the Best SEO Practices for a New Online Business Website?",
    answer: "Optimize with long-tail keywords, meta tags, and schema markup. Improve site speed, build backlinks, and use Yoast SEO to enhance crawlability and Google rankings."
  },
  {
    question: "How to Create a Budget for Starting an Online Business Website?",
    answer: "Allocate $100-$500 for setup (domain, hosting, theme) and $50-$300/month for marketing and tools. Include supplier costs and a buffer for scalability using QuickBooks."
  },
  {
    question: "What Are the Benefits of Using Wix for an Online Business Website?",
    answer: "Wix offers drag-and-drop simplicity, stunning templates, and built-in SEO tools. It's ideal for small businesses or service-based sites, with plans starting at $17/month."
  },
  {
    question: "How to Build an Online Business Website Without Coding Skills?",
    answer: "Use Wix, Shopify, or Squarespace for no-code setup. Customize templates, add products or services, and integrate plugins for payments and SEO without technical expertise."
  },
  {
    question: "What Are the Best Marketing Strategies for a New Online Business Site?",
    answer: "Leverage SEO, run Instagram/Facebook ads, and use email marketing (Mailchimp). Offer discounts, collaborate with influencers, and build an email list for early traction."
  },
  {
    question: "How to Set Up a Refund Policy for an Online Business Website?",
    answer: "Create a clear 30-day refund policy, display it prominently, and use tools like Returnly for automation. Ensure transparency to build trust and reduce disputes."
  },
  {
    question: "What Are the Tax Implications of Running an Online Business Website?",
    answer: "Collect sales tax per local laws (e.g., U.S. nexus rules) using Avalara. Track income/expenses with QuickBooks and consult a tax professional for compliance."
  },
  {
    question: "How to Choose a Reliable Supplier for an Online Business Website?",
    answer: "Vet suppliers on Alibaba or Upwork for quality. Request samples, check reviews, and negotiate terms. Prioritize fast shipping and communication for customer satisfaction."
  },
  {
    question: "What Is the Difference Between Squarespace and Shopify for Online Business?",
    answer: "Squarespace is great for service-based or portfolio sites with sleek designs ($16-$49/month). Shopify is better for e-commerce with robust product and payment features."
  },
  {
    question: "How to Optimize Service Pages for an Online Business Website?",
    answer: "Use keyword-rich titles, clear descriptions, and client testimonials. Add CTAs, optimize meta tags, and use schema markup to improve SEO and conversion rates."
  },
  {
    question: "What Are the Best Free Platforms for Starting an Online Business Website?",
    answer: "WordPress with WooCommerce, Wix's free plan, or Ecwid suit small businesses. Pair with free tools like Ubersuggest for SEO to keep costs low."
  },
  {
    question: "How to Create a Brand Identity for an Online Business Website?",
    answer: "Design a logo with Canva, use consistent colors/fonts, and craft a unique story. Reflect your niche across your site, social media, and marketing for brand recognition."
  },
  {
    question: "What Are the Costs of Maintaining an Online Business Website?",
    answer: "Monthly costs include hosting ($5-$30), domain renewal ($10-$20/year), plugins ($0-$50), and marketing ($50-$500). Budget for updates and customer support tools."
  },
  {
    question: "How to Set Up Email Marketing for an Online Business Startup?",
    answer: "Use Mailchimp or ConvertKit to build lists. Send welcome emails, promotions, and newsletters. Segment audiences for personalized campaigns to boost engagement."
  },
  {
    question: "What Are the Best Social Media Platforms for Online Business Promotion?",
    answer: "Instagram and Pinterest work for visual businesses, LinkedIn for B2B services, and TikTok for viral reach. Use hashtags and shoppable posts to drive traffic."
  },
  {
    question: "How to Handle Customer Service for a New Online Business Website?",
    answer: "Offer live chat with Tidio, respond to emails within 24 hours, and create FAQs. Outsource to Zendesk for scalability and prioritize clear, empathetic communication."
  },
  {
    question: "What Are the Common Mistakes to Avoid When Starting an Online Business Site?",
    answer: "Avoid neglecting SEO, choosing broad niches, or skipping mobile optimization. Don't ignore legal compliance or analytics setup. Focus on quality and user experience."
  },
  {
    question: "How to Use Analytics to Track Online Business Website Performance?",
    answer: "Install Google Analytics and Search Console to monitor traffic, conversions, and keywords. Use MonsterInsights for WordPress to track user behavior and optimize."
  },
  {
    question: "What Are the Best Ways to Test an Online Business Website Before Launch?",
    answer: "Test navigation, payments, and mobile responsiveness. Use BrowserStack for cross-device testing and gather beta feedback to fix issues before going live."
  },
  {
    question: "How to Integrate a Booking System into an Online Business Website?",
    answer: "Use Calendly or Bookly for appointments. Integrate via plugins or APIs, ensuring real-time updates and mobile compatibility for seamless user experiences."
  },
  {
    question: "What Are the Benefits of a Membership Model for an Online Business?",
    answer: "Memberships provide recurring revenue and customer loyalty. Use MemberPress or Patreon to offer exclusive content or services, ideal for courses or communities."
  },
  {
    question: "How to Create a Privacy Policy for an Online Business Website?",
    answer: "Generate GDPR-compliant policies with Termly. Disclose data collection (e.g., cookies, forms) and update regularly to comply with global privacy regulations."
  },
  {
    question: "What Are the Best Tools for Creating Online Business Website Content?",
    answer: "Use Canva for visuals, Grammarly for copy, and Adobe Express for videos. Optimize content with keywords and compress images for SEO and faster load times."
  },
  {
    question: "How to Set Up a Blog for an Online Business Website?",
    answer: "Add a blog via WordPress or Shopify. Write SEO-optimized posts (e.g., \"Top 10 Business Tools 2025\") to drive traffic and establish authority in your niche."
  },
  {
    question: "What Are the Steps to Register an Online Business Website Legally?",
    answer: "Choose a business structure, register with local authorities, and obtain an EIN (U.S.). Check domain/trademark availability and comply with tax and privacy laws."
  },
  {
    question: "How to Build Trust with Customers on a New Online Business Website?",
    answer: "Display testimonials, secure payment badges, and clear policies. Use SSL, offer responsive support, and share your brand story to enhance credibility."
  },
  {
    question: "What Are the Best Payment Security Practices for Online Business Websites?",
    answer: "Use PCI-compliant gateways, enable SSL, and install security plugins like Sucuri. Update software regularly and use two-factor authentication to protect data."
  },
  {
    question: "How to Choose Between a Marketplace and a Standalone Online Business Site?",
    answer: "Marketplaces like Etsy offer instant traffic but high fees (5-20%). Standalone sites provide control and branding but require marketing. Start with both for diversification."
  }
];

const onlineBusinessOwnersQuestions = [
  {
    question: "How to Increase Conversion Rates on My Online Business Website?",
    answer: "Optimize CTAs, simplify forms, and add trust signals like reviews. Use A/B testing with Optimizely and offer discounts to boost conversions by 10-20%."
  },
  {
    question: "What Are the Best SEO Strategies for Online Business Websites in 2025?",
    answer: "Target long-tail keywords, optimize with schema markup, and improve site speed. Build backlinks via guest posts and use Rank Math for on-page SEO."
  },
  {
    question: "How to Reduce Form Abandonment on an Online Business Website?",
    answer: "Simplify forms, offer guest options, and send reminder emails. Use exit-intent popups and retargeting ads to recover users, improving completion rates."
  },
  {
    question: "What Are the Most Effective Ways to Retain Online Business Customers?",
    answer: "Offer loyalty programs, personalized emails, and exclusive content. Use CRM tools like HubSpot to nurture relationships and encourage repeat engagement."
  },
  {
    question: "How to Scale an Online Business Website Without Losing Quality?",
    answer: "Automate with Zapier, scale hosting with SiteGround, and partner with reliable vendors. Invest in marketing while maintaining consistent branding and quality."
  },
  {
    question: "What Are the Best Tools for Managing Online Business Operations?",
    answer: "Use Trello for project management, QuickBooks for finances, and Zoho CRM for customer relations. Automate repetitive tasks to focus on growth."
  },
  {
    question: "How to Optimize Service Pages for Better Search Rankings?",
    answer: "Use keyword-rich titles, detailed descriptions, and client testimonials. Add schema markup and internal links to boost SEO and user engagement."
  },
  {
    question: "What Are the Latest Online Business Trends to Follow in 2025?",
    answer: "AI chatbots, voice search optimization, and subscription models are trending. Focus on mobile-first design, sustainability, and personalized user experiences."
  },
  {
    question: "How to Handle Negative Feedback on an Online Business Website?",
    answer: "Respond professionally, resolve issues, and encourage positive reviews. Use tools like Yotpo to manage feedback and display testimonials to build trust."
  },
  {
    question: "What Are the Best Email Marketing Tools for Online Businesses?",
    answer: "ConvertKit, Mailchimp, and ActiveCampaign offer automation and segmentation. Use for newsletters, promotions, and follow-ups to drive engagement."
  },
  {
    question: "How to Improve Website Speed for an Online Business Site?",
    answer: "Optimize images with Smush, use Cloudflare CDN, and enable caching with WP Rocket. Choose fast hosting to boost SEO and user satisfaction."
  },
  {
    question: "What Are the Best Strategies for Upselling in Online Business?",
    answer: "Recommend add-ons during checkout or consultations. Use apps like ReConvert to suggest services or products, increasing average order value."
  },
  {
    question: "How to Use Social Media Ads to Boost Online Business Revenue?",
    answer: "Run targeted ads on LinkedIn for B2B or Instagram for B2C. Use dynamic ads and allocate $50-$500/month to test campaigns for optimal ROI."
  },
  {
    question: "What Are the Most Profitable Affiliate Programs for Online Businesses?",
    answer: "ShareASale, CJ Affiliate, and Amazon Associates offer 1-10% commissions. Promote tools or services aligned with your niche for higher conversions."
  },
  {
    question: "How to Analyze Competitor Online Business Websites?",
    answer: "Use SEMrush or SimilarWeb to analyze traffic, keywords, and strategies. Study their content, pricing, and marketing to identify opportunities for differentiation."
  },
  {
    question: "What Are the Best Practices for Online Business Customer Support?",
    answer: "Offer live chat with Zendesk, respond within 24 hours, and create FAQs. Use chatbots for common queries and train staff for personalized support."
  },
  {
    question: "How to Implement Personalization on an Online Business Website?",
    answer: "Use AI tools like Dynamic Yield to tailor content based on user behavior. Personalize emails and landing pages to increase engagement and conversions."
  },
  {
    question: "What Are the Benefits of AI in Online Business Operations?",
    answer: "AI automates support (Chatfuel), optimizes pricing, and personalizes experiences. Use Algolia for search to improve efficiency and customer satisfaction."
  },
  {
    question: "How to Manage Refunds Efficiently for an Online Business Website?",
    answer: "Automate with Returnly, offer clear policies, and process refunds quickly. Communicate updates to maintain trust and reduce customer disputes."
  },
  {
    question: "What Are the Best Analytics Tools for Online Business Websites?",
    answer: "Google Analytics, Hotjar, and MonsterInsights track traffic, behavior, and conversions. Use Search Console for SEO insights and A/B testing for optimization."
  },
  {
    question: "How to Create a Loyalty Program for Online Business Customers?",
    answer: "Use Smile.io to offer points for purchases or referrals. Provide discounts or exclusive access to retain customers and boost lifetime value."
  },
  {
    question: "What Are the Best Ways to Reduce Operational Costs in Online Business?",
    answer: "Automate with Zapier, negotiate vendor rates, and use free tools like Canva. Optimize ad spend and choose cost-effective hosting to maintain margins."
  },
  {
    question: "How to Optimize Online Business Forms for Higher Conversions?",
    answer: "Simplify fields, add progress bars, and support multiple submission options. Use exit-intent popups and A/B test with Optimizely to reduce abandonment."
  },
  {
    question: "What Are the Most Effective Paid Ad Platforms for Online Businesses?",
    answer: "Google Ads for search, LinkedIn for B2B, and Facebook for retargeting. Test with small budgets ($50-$200/month) to identify high-ROI campaigns."
  },
  {
    question: "How to Use Content Marketing to Drive Online Business Revenue?",
    answer: "Publish SEO-optimized blogs, videos, or guides (e.g., \"Best Business Tools 2025\"). Promote via email and social media to attract and convert visitors."
  },
  {
    question: "What Are the Best Strategies for International Online Business Expansion?",
    answer: "Add multilingual support with WPML, offer local payments, and optimize for regional SEO. Partner with global vendors and comply with international regulations."
  },
  {
    question: "How to Protect an Online Business Website from Cyber Threats?",
    answer: "Use SSL, PCI-compliant gateways, and Sucuri for security. Conduct audits, update software, and enable two-factor authentication to safeguard data."
  },
  {
    question: "What Are the Best Tools for Automating Online Business Processes?",
    answer: "Zapier automates workflows, ConvertKit handles email, and Trello manages projects. Automate repetitive tasks to save time and focus on scaling."
  },
  {
    question: "How to Use Customer Data to Improve Online Business Revenue?",
    answer: "Analyze behavior with HubSpot, segment audiences, and personalize offers. Use heatmaps (Hotjar) to optimize site layout and increase conversions."
  },
  {
    question: "What Are the Benefits of Offering Free Resources in Online Business?",
    answer: "Free tools or guides attract traffic and build trust. Use lead magnets (e.g., eBooks) to capture emails and convert visitors into paying customers."
  },
  {
    question: "How to Create Effective Service Bundles for Online Businesses?",
    answer: "Group related services (e.g., consulting + training) with discounts. Use MemberPress or WooCommerce to simplify setup and boost revenue."
  },
  {
    question: "What Are the Best Practices for Online Business Email Campaigns?",
    answer: "Segment lists, use compelling subject lines, and automate with ConvertKit. Test timing and personalize content to maximize open rates and conversions."
  },
  {
    question: "How to Improve Mobile Experience for Online Business Users?",
    answer: "Optimize for mobile-first indexing, use responsive themes, and simplify navigation. Test with Google's Mobile-Friendly Test to ensure fast load times."
  },
  {
    question: "What Are the Most Common Online Business Security Vulnerabilities?",
    answer: "Weak passwords, outdated plugins, and unsecure APIs are common risks. Mitigate with regular updates, strong encryption, and Sucuri monitoring."
  },
  {
    question: "How to Use Influencer Marketing for Online Business Growth?",
    answer: "Partner with niche influencers via AspireIQ. Offer free services or affiliate deals to promote your business authentically to their audiences."
  },
  {
    question: "What Are the Best Tools for Online Business Price Tracking?",
    answer: "Use Price2Spy or Prisync to monitor competitor pricing. Automate adjustments to stay competitive and integrate with your platform for efficiency."
  },
  {
    question: "How to Optimize an Online Business Site for Voice Search?",
    answer: "Target conversational keywords (e.g., \"best online consulting services\") and use schema markup. Optimize for snippets and ensure fast load times for voice compatibility."
  },
  {
    question: "What Are the Best Ways to Handle Peak Traffic Seasons in Online Business?",
    answer: "Scale hosting, optimize inventory or services, and increase ad spend. Use ShipStation for e-commerce or Calendly for services to manage high demand."
  },
  {
    question: "How to Use Retargeting Ads for Online Business Customers?",
    answer: "Run retargeting on Google or Facebook to re-engage visitors. Use dynamic ads to show viewed services or products and offer discounts to recover leads."
  },
  {
    question: "What Are the Benefits of Multi-Channel Selling for Online Businesses?",
    answer: "Selling on marketplaces and your site increases reach. Use Sellbrite to sync inventory and avoid overselling, boosting revenue and visibility."
  },
  {
    question: "How to Improve Customer Lifetime Value in Online Business?",
    answer: "Offer subscriptions, personalized offers, and post-purchase emails. Use CRM tools to nurture relationships and encourage repeat business."
  },
  {
    question: "What Are the Best Strategies for Cross-Selling in Online Business?",
    answer: "Suggest related services or products on service pages or during checkout. Use apps like ReConvert to automate cross-selling and increase revenue."
  },
  {
    question: "How to Use User-Generated Content for Online Business Marketing?",
    answer: "Encourage testimonials or social media posts via campaigns. Display UGC with Yotpo on your site to build trust and drive conversions."
  },
  {
    question: "What Are the Best Tools for Online Business SEO Audits?",
    answer: "Use Screaming Frog, Ahrefs, or SEMrush to identify issues like broken links or keyword gaps. Fix errors to improve rankings and site performance."
  },
  {
    question: "How to Manage Multiple Vendors for an Online Business Website?",
    answer: "Use TradeGecko or Zoho to track vendor orders. Maintain clear communication, negotiate terms, and diversify vendors to ensure reliability."
  },
  {
    question: "What Are the Best Practices for Online Business Live Chat Support?",
    answer: "Use Zendesk or Tidio for 24/7 chat. Personalize responses, integrate chatbots, and train staff to handle queries efficiently for better customer satisfaction."
  },
  {
    question: "How to Create a Successful Online Business Referral Program?",
    answer: "Offer rewards like discounts or credits via ReferralCandy. Promote through email and social media to encourage customers to refer new clients."
  },
  {
    question: "What Are the Benefits of Subscription Models in Online Business?",
    answer: "Subscriptions ensure recurring revenue and loyalty. Use MemberPress or Subbly for courses, content, or services, tailored to your niche."
  },
  {
    question: "How to Use Video Content to Boost Online Business Revenue?",
    answer: "Create tutorials or demos and host on YouTube. Optimize video titles with keywords and embed on your site to drive traffic and engagement."
  },
  {
    question: "What Are the Best Ways to Recover Lost Leads in Online Business?",
    answer: "Use retargeting ads, send follow-up emails with ConvertKit, and offer discounts. Simplify forms and use exit-intent popups to recapture abandoning visitors."
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

          {/* Online Business Starting Questions Section */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Questions About Starting an Online Business Website
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {onlineBusinessStartingQuestions.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`online-starting-${index}`}
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

          {/* Online Business Owners Questions Section */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Questions from Online Business Website Owners
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {onlineBusinessOwnersQuestions.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`online-owners-${index}`}
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
