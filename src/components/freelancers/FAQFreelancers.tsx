import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What documents are included in the package?",
    answer: "The package includes a Client Service Agreement, Terms of Service, GDPR-compliant Privacy Policy, Liability Disclaimer, Cookie Policy, and a comprehensive Implementation Guide. All documents are professionally written and ready to customize."
  },
  {
    question: "Can I use these documents for multiple clients?",
    answer: "Yes! Once you purchase the package, you can use all documents for unlimited clients and projects. There are no recurring fees or usage limitations."
  },
  {
    question: "Are these documents legally valid internationally?",
    answer: "Yes, the documents are designed to comply with international standards including GDPR and can be used for clients worldwide. However, we recommend consulting with a local attorney if you have specific regional requirements."
  },
  {
    question: "How do I customize the documents?",
    answer: "Each document comes in an easily editable format with clear instructions in the Implementation Guide. Simply replace the placeholder text with your business details, services, and specific terms."
  },
  {
    question: "Do I need a lawyer to review these documents?",
    answer: "While our documents are professionally created and widely used, we always recommend having a lawyer review them if you have specific concerns or operate in highly regulated industries."
  },
  {
    question: "What if I have questions about implementation?",
    answer: "The package includes a comprehensive Implementation Guide with step-by-step instructions. For specific legal questions, we recommend consulting with a qualified attorney in your jurisdiction."
  },
  {
    question: "Is this a one-time payment?",
    answer: "Yes! Pay once and get lifetime access to all documents. You can download them immediately after purchase and use them forever."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards and payment methods through our secure Stripe payment system, including Visa, Mastercard, American Express, and more."
  },
  {
    question: "Can I get a refund?",
    answer: "Due to the digital nature of this product and immediate delivery, we cannot offer refunds after download. Please review the package contents carefully before purchasing."
  },
  {
    question: "Will these documents protect me from all legal issues?",
    answer: "While these documents provide strong legal protection, no document can prevent all disputes. They significantly reduce your risk and provide a professional framework for client relationships."
  }
];

const FAQFreelancers = () => {
  return (
    <section id="faq" className="py-16 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our legal documents package for freelancers
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
            
            <AccordionItem value="complete-guide">
              <AccordionTrigger className="text-left font-bold">
                Complete Guide: 98 Essential Questions About Freelancing & Self-Employment
              </AccordionTrigger>
              <AccordionContent>
                <div className="max-w-3xl space-y-8 text-muted-foreground">
                  
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">🧩 Starting as a Freelancer or Self-Employed Professional</h2>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">1. What is the difference between a freelancer, self-employed person, and independent contractor?</h3>
                      <p>A freelancer typically works on multiple short-term projects for different clients. A self-employed person owns their own business or trade, while an independent contractor is hired to perform specific tasks under contract but not as an employee. All three work independently but differ legally and financially depending on jurisdiction.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">2. How do I start freelancing with no experience?</h3>
                      <p>Start by identifying your skills, creating a small portfolio, and offering services on platforms like Fiverr, Upwork, or LinkedIn. Volunteer, do sample projects, and build credibility through testimonials and consistent work.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">3. What legal structure should I choose as a freelancer?</h3>
                      <p>The best option depends on your country. Common structures include sole proprietorship, LLC (Limited Liability Company), or Limited Company. For most beginners, starting as a sole proprietor is simple, but an LLC offers better legal protection.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">4. Do freelancers need a business license?</h3>
                      <p>Yes, in most regions freelancers must register their business and obtain a tax ID or business number. Check your local regulations to ensure compliance.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">5. How can I find clients as a freelancer?</h3>
                      <p>Leverage freelance platforms, social media (especially LinkedIn), niche communities, and referrals. Cold-emailing potential clients and publishing valuable content can also attract inbound leads.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">6. What should I include in a freelance contract?</h3>
                      <p>Include: Scope of work, Payment terms and deadlines, Ownership rights, Confidentiality clause, Termination and refund policy, Late payment penalties. Contracts protect both you and the client from misunderstandings.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">7. How do I set freelance rates?</h3>
                      <p>Research market averages, consider your skills, and calculate living expenses plus taxes. As a rule, charge 3× what you want to earn hourly to cover taxes, software, and downtime.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">8. Should freelancers charge per hour or per project?</h3>
                      <p>Hourly rates work best for flexible work. Project-based pricing is better for defined outcomes and rewards efficiency. Many experienced freelancers mix both.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">9. What taxes do freelancers pay?</h3>
                      <p>Freelancers must pay income tax and often self-employment tax or social contributions. Keep records of income, expenses, and receipts for deductions.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">10. How do freelancers handle invoices and payments?</h3>
                      <p>Use invoicing tools like PayPal, Stripe, QuickBooks, or Wave. Always include your business name, client info, invoice number, due date, and payment methods.</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">💡 Finding Clients & Building Your Business</h2>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">11. What are the best freelance platforms for beginners?</h3>
                      <p>Top choices: Upwork (professional projects), Fiverr (service-based gigs), Toptal (high-end clients), Freelancer.com (general projects), PeoplePerHour (UK/Europe focus).</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">12. How do I manage inconsistent income as a freelancer?</h3>
                      <p>Set up an emergency fund (3–6 months of expenses). Create retainer contracts with recurring clients, and use budgeting tools like YNAB or Notion templates.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">13. What are the best tools for freelancers?</h3>
                      <p>Project Management: Trello, Asana, ClickUp; Time Tracking: Toggl, Clockify; Invoicing: Wave, QuickBooks; Design: Canva, Adobe Express; Automation: Zapier.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">14. How do I deal with difficult clients?</h3>
                      <p>Stay professional, document communication, and stick to your contract. If issues persist, end the relationship politely but firmly — your time and reputation matter.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">15. How do I protect my intellectual property?</h3>
                      <p>Use copyright notices in contracts. Include clauses that specify you retain rights until full payment is received. Register trademarks if you create brandable assets.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">16. What are the most profitable freelance skills in 2025?</h3>
                      <p>AI Prompt Engineering, Copywriting & Content Marketing, Web Development (React, Next.js), UI/UX Design, Video Editing & Animation, SEO Consulting, Cybersecurity.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">17. Do freelancers need insurance?</h3>
                      <p>Yes — consider professional liability insurance, health insurance, and equipment insurance. It protects you from lawsuits and unexpected costs.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">18. How can I grow from freelancer to agency owner?</h3>
                      <p>Start by outsourcing repetitive work. Create systems (SOPs), hire subcontractors, and rebrand your freelance profile as a micro-agency with a niche.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">19. What is scope creep and how do I avoid it?</h3>
                      <p>Scope creep occurs when clients add tasks beyond the original agreement. Prevent it by defining scope clearly and using change orders for any additions.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">20. How do I manage time effectively as a freelancer?</h3>
                      <p>Use time-blocking, prioritize by deadline and ROI, and avoid multitasking. Tools like Notion, Google Calendar, and Pomodoro timers improve productivity.</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">🎨 Portfolio, Branding & Marketing</h2>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">21. What should be in a freelancer's portfolio?</h3>
                      <p>Include your best 5–10 projects, testimonials, short case studies, and client logos. A clean design and focused niche attract more clients.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">22. What is personal branding for freelancers?</h3>
                      <p>It's how clients perceive your expertise online. Use consistent visuals, storytelling, and social proof across LinkedIn, your website, and social media.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">23. How do I handle late payments?</h3>
                      <p>Send polite reminders first. If unpaid after the deadline, charge late fees (1–2% per week) as stated in your contract. Use payment-protection platforms when possible.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">24. Should freelancers sign NDAs?</h3>
                      <p>Yes — Non-Disclosure Agreements protect confidential client data. Always review the terms before signing to ensure it doesn't limit future opportunities.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">25. What are the best niches for freelancers in 2025?</h3>
                      <p>SaaS Copywriting, AI Tool Tutorials, Health & Wellness Content, E-Commerce Product Photography, Finance & Legal Writing, B2B Social Media Strategy.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">26. How can I get testimonials from clients?</h3>
                      <p>Ask right after project delivery when satisfaction is high. Provide a simple feedback form and ask permission to display it publicly.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">27. How do I handle taxes if I work internationally?</h3>
                      <p>Follow local tax laws but consult an international accountant. Many freelancers use services like Deel, Remote, or Wise Business for cross-border payments.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">28. How can freelancers use LinkedIn effectively?</h3>
                      <p>Post case studies, comment thoughtfully, and engage in relevant groups. Use your headline strategically ("Helping brands grow through expert copywriting").</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">29. What should I include in a proposal or pitch?</h3>
                      <p>Personalized greeting, Summary of the client's pain point, Your solution and expertise, Timeline & pricing, CTA (call to action). Keep it concise and value-driven.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">30. What's the best way to raise rates?</h3>
                      <p>Announce it professionally, give existing clients notice, and highlight added value (experience, certifications, improved results). Most clients will respect it.</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">💼 Client Relationships & Retainers</h2>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">31. How can freelancers maintain motivation?</h3>
                      <p>Set realistic goals, celebrate wins, and schedule breaks. Join communities or mastermind groups for accountability.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">32. What are retainer clients?</h3>
                      <p>They pay a fixed fee each month for ongoing services. Retainers stabilize income and build long-term relationships.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">33. How can freelancers use SEO to attract clients?</h3>
                      <p>Publish blogs targeting keywords like "freelance [skill] for hire." Optimize your portfolio pages and include testimonials with relevant phrases.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">34. Should I use social media for client acquisition?</h3>
                      <p>Yes — especially LinkedIn, Twitter (X), and Instagram. Share your work process, case studies, and educational content to attract leads organically.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">35. How do I build trust with new clients?</h3>
                      <p>Offer small starter packages, provide clear contracts, deliver before deadlines, and maintain transparent communication.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">36. What's the difference between gross and net income for freelancers?</h3>
                      <p>Gross income = total earnings before expenses. Net income = what remains after taxes, tools, and deductions.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">37. What deductions can freelancers claim?</h3>
                      <p>Home office space, Equipment (laptop, camera), Software subscriptions, Marketing and advertising, Travel related to business.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">38. What's the best way to track freelance expenses?</h3>
                      <p>Use tools like QuickBooks, Wave, or Bonsai. Categorize receipts monthly to simplify tax filing.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">39. Can freelancers work for multiple clients at once?</h3>
                      <p>Yes, that's one of the main benefits of freelancing. Just manage workload carefully and communicate deadlines clearly.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">40. What's a portfolio website and do I need one?</h3>
                      <p>Yes — a personal website builds credibility and showcases expertise. Include your story, services, testimonials, and contact form.</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">📊 Pricing, Income & Financial Management</h2>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">41. How do I choose a freelance niche?</h3>
                      <p>Combine your skills, passion, and market demand. Research high-value industries and focus on problems you can solve best.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">42. What's the best pricing strategy for freelancers?</h3>
                      <p>Options include: Hourly pricing, Project pricing, Value-based pricing (charge by results, not hours), Retainer model.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">43. What should I do if a client ghosts me?</h3>
                      <p>Send follow-up emails with clear subject lines. If still no response, send a final invoice and suspend work until payment is received.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">44. How can freelancers use contracts efficiently?</h3>
                      <p>Use templates from Bonsai, Indy, or PandaDoc. Always include payment schedules and ownership clauses before starting any project.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">45. How do freelancers get paid internationally?</h3>
                      <p>Preferred options: PayPal, Wise, Payoneer, Revolut Business, or Crypto (if legal). Compare fees before invoicing.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">46. How can I build passive income as a freelancer?</h3>
                      <p>Sell digital products (templates, courses, e-books) or offer subscription services. Diversifying income reduces dependency on clients.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">47. What are the best marketplaces for creative freelancers?</h3>
                      <p>Behance (design portfolios), Dribbble (UI/UX design), Envato Market (digital assets), Creative Market (templates & graphics).</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">48. What are common mistakes new freelancers make?</h3>
                      <p>Underpricing services, Lacking contracts, Ignoring taxes, Overpromising timelines, Poor communication.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">49. How can freelancers build long-term client relationships?</h3>
                      <p>Deliver consistently, follow up after delivery, and suggest ways to improve results. Clients value proactive freelancers who care about their success.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">50. Should freelancers specialize or stay general?</h3>
                      <p>Specializing builds authority and higher rates. However, generalists can start broad to test markets before focusing on a niche.</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">🚀 Marketing, SEO & Online Presence</h2>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">51. How can freelancers market themselves effectively online?</h3>
                      <p>Create a professional website, optimize LinkedIn and social profiles, write case studies, and post value-driven content regularly. Email outreach and collaborations with complementary freelancers also increase visibility.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">52. What is the best SEO strategy for a freelance portfolio?</h3>
                      <p>Optimize your site with keyword-rich headings, meta descriptions, and alt text for images. Publish blog content around client pain points and solutions. Backlinking from guest posts or industry sites improves authority.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">53. How do freelancers use social media to attract clients?</h3>
                      <p>Share work samples, success stories, behind-the-scenes content, and educational posts. Use hashtags strategically, engage with your niche audience, and participate in relevant groups or communities.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">54. Should freelancers run paid ads to find clients?</h3>
                      <p>Yes, for scaling. Google Ads and LinkedIn Ads work well for B2B services, while Instagram or Facebook Ads are better for B2C. Start small and test campaigns for ROI.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">55. How can freelancers automate repetitive tasks?</h3>
                      <p>Use Zapier, Integromat, or Make to automate invoicing, social media posting, email follow-ups, and project management. Automation saves time for creative or high-value tasks.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">56. What is the best way to manage multiple clients simultaneously?</h3>
                      <p>Use project management tools like Trello, ClickUp, or Asana. Prioritize tasks by deadlines, communicate clearly, and block time for each client to avoid burnout.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">57. How can freelancers scale their services?</h3>
                      <p>Outsource tasks to subcontractors, use automation tools, create systems for recurring projects, and consider forming a small agency. Focus on high-value services first.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">58. How can freelancers handle international clients?</h3>
                      <p>Use international invoicing platforms like Wise, Payoneer, or Stripe. Consider time zone differences in scheduling and clarify contract terms for cross-border work.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">59. What should freelancers know about international taxes?</h3>
                      <p>Freelancers must follow local tax laws and may need to report foreign income. Consider hiring an accountant experienced in international freelancing to avoid legal issues.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">60. How do freelancers get paid securely?</h3>
                      <p>Use reputable payment platforms (PayPal, Wise, Stripe) and set clear terms in contracts. Require upfront deposits for large projects and consider escrow services.</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">⚖️ Legal Protection & Contracts</h2>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">61. What is a retainer agreement, and how does it work?</h3>
                      <p>A retainer is a recurring fee paid monthly for ongoing services. It stabilizes income and ensures client priority. Include scope, deliverables, and termination terms in the contract.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">62. How do freelancers deal with clients who negotiate too much?</h3>
                      <p>Politely explain your rates, highlight your value, and be willing to walk away if terms are unreasonable. Consistently undervaluing yourself reduces long-term profitability.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">63. How do freelancers handle scope creep?</h3>
                      <p>Document every additional request, create change orders, and quote extra charges. Clarify what is included in the original contract before work begins.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">64. Should freelancers offer free work for exposure?</h3>
                      <p>Only if it's strategic, e.g., creating a portfolio piece or collaborating with high-value clients. Avoid giving away work that sets a precedent for unpaid labor.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">65. How do freelancers negotiate higher rates with existing clients?</h3>
                      <p>Highlight your results, experience growth, and added value. Give notice, frame the rate increase positively, and offer options for continued collaboration.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">66. How can freelancers manage finances efficiently?</h3>
                      <p>Separate business and personal accounts, track expenses with accounting software, set aside money for taxes, and create monthly budgets. Consider hiring a part-time accountant.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">67. What is the best way to invoice clients as a freelancer?</h3>
                      <p>Include: your business info, client info, invoice number, date, description of work, amount, payment terms, and accepted payment methods. Automate recurring invoices when possible.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">68. How do freelancers handle late payments?</h3>
                      <p>Send polite reminders, apply late fees if stated in the contract, and consider legal action or collection agencies as a last resort. Always document communications.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">69. How can freelancers protect intellectual property?</h3>
                      <p>Use contracts specifying ownership until full payment, watermark portfolio images, and consider copyright registration. Protect logos, designs, and code with legal disclaimers.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">70. What insurance should freelancers have?</h3>
                      <p>Professional liability insurance for errors or omissions, Health insurance (mandatory in some countries), Equipment insurance for cameras, laptops, or other tools, Business interruption insurance for income protection.</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">🌍 International Work & Scaling</h2>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">71. How can freelancers manage work-life balance?</h3>
                      <p>Set work hours, create boundaries with clients, schedule breaks, and avoid overbooking. Use productivity methods like Pomodoro or time-blocking.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">72. How do freelancers find high-paying clients?</h3>
                      <p>Target businesses in lucrative niches, showcase case studies demonstrating ROI, and network strategically. Referrals from satisfied clients often lead to premium opportunities.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">73. Should freelancers specialize or generalize?</h3>
                      <p>Specializing helps command higher rates and builds authority. Generalizing may attract more opportunities early but can limit long-term premium clients.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">74. How can freelancers build credibility online?</h3>
                      <p>Publish case studies, collect testimonials, maintain a professional website, and engage in thought leadership on social platforms like LinkedIn or Medium.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">75. How can freelancers leverage LinkedIn for client acquisition?</h3>
                      <p>Optimize your profile, post relevant content, join niche groups, send personalized connection requests, and engage with potential clients by commenting thoughtfully.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">76. How do freelancers track productivity?</h3>
                      <p>Use time-tracking apps like Toggl or Clockify. Analyze which tasks generate income and identify inefficiencies to optimize workflow.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">77. What legal documents should freelancers have?</h3>
                      <p>Service contracts, NDA (Non-Disclosure Agreements), Invoice templates with legal disclaimers, Copyright ownership clauses, Terms for retainer agreements.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">78. How can freelancers deal with client disputes?</h3>
                      <p>Remain professional, document communications, and reference your contract. Use mediation or arbitration before considering legal action.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">79. Should freelancers register a business entity?</h3>
                      <p>Yes, it offers legal protection, better tax management, and increased client trust. Consider LLC, sole proprietorship, or limited company based on your region.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">80. How do freelancers price for international clients?</h3>
                      <p>Factor in exchange rates, taxes, market rates, and currency conversion fees. Always clarify payment methods and deadlines upfront.</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">💰 Advanced Income Strategies</h2>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">81. How can freelancers handle multiple currencies?</h3>
                      <p>Use platforms like Wise or PayPal for cross-border invoicing. Include currency in invoices and clarify exchange rates to avoid disputes.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">82. What are common mistakes freelancers make with taxes?</h3>
                      <p>Not saving for taxes, Mixing personal and business expenses, Missing deductions, Failing to file quarterly. Hire a professional or use software to avoid mistakes.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">83. How can freelancers build passive income streams?</h3>
                      <p>Sell templates, online courses, ebooks, or stock photography. This reduces dependency on hourly projects and stabilizes income.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">84. How do freelancers negotiate contracts?</h3>
                      <p>Focus on value delivered, set clear boundaries, include deliverables, and avoid vague terms. Be confident but professional in discussions.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">85. How can freelancers use email marketing effectively?</h3>
                      <p>Build an email list with website visitors and past clients. Share project updates, tips, and exclusive offers to maintain engagement.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">86. How do freelancers handle international contracts legally?</h3>
                      <p>Specify jurisdiction, currency, taxes, and dispute resolution. Consider consulting an international business lawyer.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">87. How can freelancers expand to a global audience?</h3>
                      <p>Optimize for SEO in multiple languages, offer remote services, join international platforms, and create culturally relevant content.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">88. What are digital nomad options for freelancers?</h3>
                      <p>Freelancers can work remotely from anywhere with internet. Tools like VPN, cloud storage, and collaboration software facilitate global work.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">89. How do freelancers price creative work?</h3>
                      <p>Value-based pricing works best — charge according to impact or results rather than time spent. Include revisions and scope in pricing.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">90. How can freelancers protect client confidentiality?</h3>
                      <p>Use NDAs, encrypted communication, and secure storage for sensitive files. Avoid sharing client work publicly without permission.</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">🔮 Growth & Long-Term Success</h2>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">91. How do freelancers find reliable subcontractors?</h3>
                      <p>Use referrals, freelance communities, and platforms like Upwork or Fiverr. Vet portfolios, test projects, and sign subcontractor agreements.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">92. How can freelancers improve client retention?</h3>
                      <p>Deliver quality work, communicate proactively, offer value-added services, and stay in touch after project completion.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">93. Should freelancers offer discounts to new clients?</h3>
                      <p>Only if strategic — e.g., to build portfolio or long-term relationships. Avoid underpricing; offer value instead.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">94. How can freelancers use video content for promotion?</h3>
                      <p>Create tutorials, case study videos, or behind-the-scenes clips. Share on YouTube, LinkedIn, or Instagram to showcase expertise.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">95. What are the best networking strategies for freelancers?</h3>
                      <p>Attend virtual and local industry events, join professional communities, participate in online forums, and maintain consistent follow-up with contacts.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">96. How do freelancers track ROI on marketing efforts?</h3>
                      <p>Use analytics tools to monitor website traffic, social engagement, leads generated, and conversions from campaigns.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">97. How can freelancers handle work overload?</h3>
                      <p>Prioritize high-value clients, outsource routine tasks, and communicate realistic timelines. Learn to say no politely.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">98. What are retainer contracts and why are they valuable?</h3>
                      <p>Retainers provide predictable income and client loyalty. Specify deliverables, billing cycles, and termination terms for clarity.</p>
                    </div>
                  </div>

                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQFreelancers;
