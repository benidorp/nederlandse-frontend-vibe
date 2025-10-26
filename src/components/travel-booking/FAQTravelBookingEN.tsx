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

const technicalFaqs = [
  {
    question: "How to Start a Travel Website from Scratch in 2025?",
    answer: "Starting a travel website in 2025 involves choosing a niche (e.g., adventure travel, luxury tours), selecting a user-friendly platform like WordPress or Wix, and securing a domain name. Invest in reliable hosting (e.g., SiteGround, Bluehost), integrate booking tools, and optimize for SEO with keyword-rich content. Expect initial costs of $100-$500 for setup, with ongoing expenses for maintenance."
  },
  {
    question: "What Are the Best Platforms for Building a Travel Website for Beginners?",
    answer: "WordPress is ideal for flexibility and plugins, Wix for drag-and-drop simplicity, and Squarespace for sleek designs. WordPress with plugins like WP Travel Engine is best for travel-specific features, offering scalability and SEO tools for beginners."
  },
  {
    question: "How Much Does It Cost to Start a Travel Website?",
    answer: "Costs range from $100-$2,000 initially, including domain ($10-$20/year), hosting ($5-$30/month), premium themes ($50-$150), and plugins ($0-$100). Additional expenses may include SEO tools, marketing, and custom development for advanced features like booking systems."
  },
  {
    question: "What Features Should a Travel Website Have to Attract Users?",
    answer: "Essential features include a search bar, booking integration, responsive design, fast loading times, destination guides, user reviews, and secure payment gateways. Add interactive maps, multilingual support, and blog sections to boost engagement and SEO."
  },
  {
    question: "How to Choose a Domain Name for My Travel Website?",
    answer: "Pick a short, memorable, and keyword-rich domain name (e.g., \"TravelWanderlust.com\"). Use tools like Namecheap or GoDaddy to check availability. Ensure it reflects your niche and avoids hyphens or numbers for better branding and SEO."
  },
  {
    question: "Best Hosting Providers for a High-Traffic Travel Website?",
    answer: "Top providers include SiteGround (fast and reliable), Bluehost (WordPress-optimized), and WP Engine (premium managed hosting). Look for 99.9% uptime, scalable plans, and CDN support to handle high traffic and improve site speed."
  },
  {
    question: "How to Integrate Booking Systems into a Travel Website?",
    answer: "Use plugins like WP Travel Engine or Bookly for WordPress, or APIs from Booking.com, Expedia, or Amadeus. Ensure seamless integration with secure payment gateways (e.g., Stripe, PayPal) and real-time availability for flights, hotels, or tours."
  },
  {
    question: "What Tech Stack is Ideal for Developing a Travel Website?",
    answer: "A robust tech stack includes WordPress or Laravel for backend, React or Vue.js for frontend, and MySQL for databases. Use APIs for booking systems and Cloudflare for security and speed. Tailor the stack to your budget and scalability needs."
  },
  {
    question: "How to Design a User-Friendly Travel Website Layout?",
    answer: "Prioritize clean navigation, mobile responsiveness, and fast load times. Use high-quality visuals, clear CTAs, and a minimalist design. Tools like Elementor or Divi help create intuitive layouts that enhance user experience and SEO."
  },
  {
    question: "Steps to Launch a Travel Website Business Successfully?",
    answer: "Define your niche, create a business plan, choose a platform, design the site, integrate booking tools, optimize for SEO, and promote via social media and email marketing. Test functionality and gather user feedback before the official launch."
  },
  {
    question: "How to Start a Travel Blog with No Experience in 2025?",
    answer: "Choose a niche (e.g., solo travel, budget trips), sign up for WordPress or Blogger, pick a domain, and select a theme. Write engaging posts, optimize for SEO with keywords, and promote on social media. Start with free tools to keep costs low."
  },
  {
    question: "What Niche Should I Choose for My Travel Blog?",
    answer: "Popular niches include adventure travel, luxury vacations, eco-tourism, or family travel. Research competition and audience demand using tools like Google Trends or Ahrefs to find a profitable, less saturated niche."
  },
  {
    question: "Best Blogging Platforms for Starting a Travel Blog?",
    answer: "WordPress.org offers flexibility and SEO plugins, while Wix and Squarespace are beginner-friendly with stunning templates. Medium is great for free blogging but limits monetization. Choose based on your technical skills and goals."
  },
  {
    question: "How to Pick a Catchy Name for My Travel Blog?",
    answer: "Select a name that's memorable, reflects your niche, and includes travel-related keywords (e.g., \"WanderVibes\"). Check domain availability and ensure it's unique to avoid trademark issues. Use tools like BustAName for inspiration."
  },
  {
    question: "How Much Does It Cost to Start a Travel Blog?",
    answer: "A travel blog costs $50-$200 initially, covering domain ($10-$20/year), hosting ($3-$10/month), and a free or premium theme ($0-$70). Optional costs include SEO tools ($10-$50/month) and professional logo design ($50+)."
  },
  {
    question: "Tips for Writing Engaging Travel Blog Posts for Beginners?",
    answer: "Share personal stories, use vivid descriptions, and include practical tips. Add high-quality images, structure posts with headings, and optimize for SEO with keywords. Engage readers with a conversational tone and clear CTAs."
  },
  {
    question: "How to Monetize a New Travel Blog Quickly?",
    answer: "Start with affiliate programs (e.g., Amazon Associates, Booking.com), display ads (Google AdSense), or sponsored posts. Build an email list for long-term revenue. Monetization typically takes 6-12 months to gain traction."
  },
  {
    question: "Best Tools for Travel Bloggers to Edit Photos and Videos?",
    answer: "Use Canva or Adobe Lightroom for photos and Adobe Premiere Pro or InVideo for videos. Free options like GIMP and DaVinci Resolve work well. Optimize media for fast loading to improve SEO and user experience."
  },
  {
    question: "How to Promote My Travel Blog on Social Media?",
    answer: "Share visually appealing posts on Instagram, Pinterest, and TikTok, using hashtags like #TravelBlog. Engage with followers, join travel groups on Facebook, and collaborate with influencers. Post consistently to drive traffic."
  },
  {
    question: "Common Mistakes to Avoid When Starting a Travel Blog?",
    answer: "Avoid neglecting SEO, choosing a broad niche, or inconsistent posting. Don't ignore mobile optimization or skip analytics setup. Focus on quality content over quantity and engage with your audience regularly."
  },
  {
    question: "How to Build a Hotel Booking Website Step by Step?",
    answer: "Define your target market, choose a platform (e.g., WordPress, custom CMS), integrate a booking engine (e.g., Cloudbeds, SiteMinder), add payment gateways, and optimize for SEO. Test functionality and launch with a marketing plan."
  },
  {
    question: "What Software is Needed for a Hotel Booking System?",
    answer: "Use booking engines like Cloudbeds, SiteMinder, or ResNexus for inventory management. Integrate APIs from Expedia or Booking.com for real-time data. WordPress with plugins like Bookly simplifies setup for beginners."
  },
  {
    question: "How to Integrate Payment Gateways into a Hotel Booking Site?",
    answer: "Use secure gateways like Stripe, PayPal, or Square. Integrate via APIs or plugins like WooCommerce Payments. Ensure PCI compliance, SSL certificates, and clear refund policies to build user trust."
  },
  {
    question: "Best Plugins for WordPress Hotel Booking Websites?",
    answer: "Top plugins include WP Hotel Booking, Bookly, and MotoPress Hotel Booking. They offer room management, real-time availability, and payment integration. Pair with Yoast SEO for better search engine rankings."
  },
  {
    question: "How Much Does It Cost to Develop a Hotel Booking Platform?",
    answer: "Costs range from $500-$10,000, depending on complexity. Basic WordPress sites cost $500-$2,000, while custom platforms with APIs and advanced features can exceed $5,000. Factor in hosting and maintenance."
  },
  {
    question: "How to Add Real-Time Availability to a Hotel Booking Website?",
    answer: "Integrate APIs from Booking.com, Expedia, or channel managers like Cloudbeds. Use plugins like MotoPress for WordPress to sync availability. Ensure fast servers to handle real-time updates without lag."
  },
  {
    question: "Tips for Creating an MVP Hotel Booking Website?",
    answer: "Focus on core features: search, booking, and payment. Use WordPress with a booking plugin to launch quickly. Test with a small hotel inventory, gather feedback, and scale features like reviews or loyalty programs later."
  },
  {
    question: "How to Partner with Hotels for Your Booking Website?",
    answer: "Reach out to hotels directly or join affiliate programs like Booking.com or Expedia. Offer competitive commission rates and highlight your site's reach. Build trust with professional branding and reliable tech."
  },
  {
    question: "Security Best Practices for Hotel Booking Websites?",
    answer: "Use SSL certificates, PCI-compliant payment gateways, and regular security audits. Install plugins like Wordfence for WordPress, update software, and back up data frequently to protect user information."
  },
  {
    question: "How to Scale a Hotel Booking Website Globally?",
    answer: "Add multilingual support, integrate global payment methods, and partner with international hotel chains. Use a CDN for faster load times and optimize for local SEO in target markets to attract global users."
  },
  {
    question: "Beginner SEO Tips for Travel Websites in 2025?",
    answer: "Focus on keyword research, optimize meta tags, and create high-quality content. Use tools like Yoast SEO, improve site speed, and build backlinks from travel blogs. Mobile optimization is critical for Google rankings."
  },
  {
    question: "How to Do Keyword Research for Travel Content?",
    answer: "Use tools like Ahrefs, SEMrush, or Google Keyword Planner to find low-competition, high-volume keywords (e.g., \"best budget hotels in Paris\"). Analyze competitors and target long-tail keywords for better rankings."
  },
  {
    question: "Best Long-Tail Keywords for Travel Blogs?",
    answer: "Examples include \"budget solo travel in Europe 2025,\" \"best family resorts in Bali,\" or \"how to book cheap flights to Asia.\" Long-tail keywords attract targeted traffic and are easier to rank for."
  },
  {
    question: "How to Optimize Travel Website Pages for Google Rankings?",
    answer: "Use descriptive title tags, meta descriptions, and H1/H2 headings. Include target keywords naturally, optimize images with alt text, and ensure fast load times. Internal linking improves crawlability."
  },
  {
    question: "What is Local SEO and Why Does It Matter for Travel Sites?",
    answer: "Local SEO optimizes your site for location-based searches (e.g., \"hotels near Eiffel Tower\"). Claim Google My Business, use local keywords, and gather reviews to rank higher in specific regions."
  },
  {
    question: "How to Use Schema Markup on Travel Websites?",
    answer: "Add schema markup (e.g., LocalBusiness, Hotel, or Review) using JSON-LD or plugins like Schema Pro. It enhances rich snippets in search results, improving click-through rates for travel content."
  },
  {
    question: "Free SEO Tools for Travel Bloggers?",
    answer: "Use Google Keyword Planner, Ubersuggest, and AnswerThePublic for keyword research. Yoast SEO and Google Analytics help optimize and track performance. Screaming Frog offers free site audits for small sites."
  },
  {
    question: "How to Improve Site Speed for Better Travel SEO?",
    answer: "Optimize images, use a CDN (e.g., Cloudflare), enable caching, and choose fast hosting. Minify CSS/JS files and lazy-load images. Tools like GTmetrix help identify speed issues."
  },
  {
    question: "Mobile SEO Strategies for Travel Booking Sites?",
    answer: "Ensure responsive design, optimize for mobile-first indexing, and reduce load times. Use AMP (Accelerated Mobile Pages) for blogs and test mobile usability with Google's Mobile-Friendly Test."
  },
  {
    question: "How to Track SEO Performance for My Travel Website?",
    answer: "Use Google Analytics and Search Console to monitor traffic, rankings, and click-through rates. Track keyword performance with SEMrush or Ahrefs and adjust content based on data insights."
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

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="legal-questions" className="bg-card border border-border rounded-lg px-4">
            <AccordionTrigger className="text-left hover:no-underline py-3">
              <span className="font-semibold text-foreground pr-4">Legal Protection Questions</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-3 pt-1">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-border last:border-0 pb-4 last:pb-0">
                    <h2 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h2>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="technical-questions" className="bg-card border border-border rounded-lg px-4">
            <AccordionTrigger className="text-left hover:no-underline py-3">
              <span className="font-semibold text-foreground pr-4">Travel Website Technical Questions</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-3 pt-1">
              <div className="space-y-4">
                {technicalFaqs.map((faq, index) => (
                  <div key={index} className="border-b border-border last:border-0 pb-4 last:pb-0">
                    <h2 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h2>
                    <p className="text-muted-foreground">{faq.answer}</p>
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

export default FAQTravelBookingEN;
