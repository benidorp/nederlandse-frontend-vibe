import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Af = () => {
  const downloadTextFile = (filename: string, content: string) => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const affiliateDisclosure = `AFFILIATE DISCLOSURE

Effective Date: [Insert Date]
Last Updated: [Insert Date]

Welcome to [AffiliateWebsiteName].com ("Website," "we," "our," or "us"). We are committed to full transparency regarding our affiliate relationships. This Affiliate Disclosure explains how we earn commissions through affiliate partnerships and our responsibilities concerning third-party services.

IMPORTANT NOTICE

Affiliate links on this Website may track your activity using cookies, pixels, or other tracking technologies.

Clicking on affiliate links may result in third-party cookies being stored on your device.

You assume all risks associated with affiliate purchases, third-party data collection, and reliance on our content.

1. AFFILIATE RELATIONSHIPS & COMMISSIONS

Some links on this Website are affiliate links. When you click these links and make a purchase, we may earn a small commission at no additional cost to you.

How Affiliate Marketing Works:

You click on an affiliate link on our Website.

You are redirected to a third-party merchant's website (e.g., Amazon, CJ Affiliate).

If you make a qualifying purchase, we earn a commission.

Note: This commission does not affect your purchase price.

2. AFFILIATE PROGRAMS WE PARTICIPATE IN

We partner with the following affiliate networks, merchants, and advertisers:

Affiliate Network	Purpose	Privacy Policy
Amazon Associates	Earns commissions on product sales	[Amazon Policy]
CJ Affiliate	Tracks conversions for advertisers	[CJ Affiliate Policy]
Rakuten Marketing	E-commerce affiliate tracking	[Rakuten Policy]
Google Ads	Displays retargeted affiliate ads	[Google Privacy Policy]
Facebook Pixel	Tracks affiliate sales via ads	[Facebook Policy]

We do not control how these third parties collect, use, or store your data.

3. THIRD-PARTY COOKIES & TRACKING DISCLOSURE

Affiliate networks and advertisers may use various technologies to track your activity, including:

Cookies – Stored on your device when you click an affiliate link.

Tracking Pixels – Invisible images that track conversions.

Server-Side Tracking – Data collection directly from merchant servers.

Fingerprinting & IP Tracking – Used to detect fraudulent activity.

We disclaim all liability for third-party tracking technologies.

User Options:

Do not click on affiliate links if you do not want to be tracked.

Disable cookies in your browser.

Use privacy-focused tools such as ad blockers or VPNs.

4. NO GUARANTEE OR ENDORSEMENT

We only recommend products and services we trust and believe in.

We do not guarantee that your experience will match that of others.

Any purchase decision is voluntary, and we are not responsible for any negative outcomes with third-party services.

You are responsible for conducting your own research before making a purchase.

5. FINANCIAL, LEGAL, & HEALTH DISCLOSURES

5.1 Financial Disclosure

We do not provide financial, tax, or investment advice.

References to earnings, profits, or income are for informational purposes only.

Past earnings are not indicative of future results.

5.2 Legal Disclosure

We do not provide legal advice. Consult a qualified attorney for legal matters.

5.3 Health & Wellness Disclosure

Health-related content is informational and not medical advice.

Consult a licensed healthcare professional before making health decisions.

We are not responsible for any financial, legal, or health consequences based on our content.

6. LIABILITY WAIVER & DISCLAIMER

We disclaim all liability to the maximum extent permitted by law:

Content is provided "as is" without warranties or guarantees.

We are not responsible for financial losses, business disruptions, or product issues.

Purchases through affiliate links are your responsibility.

You waive the right to participate in class-action lawsuits against us.

Your sole remedy for dissatisfaction is to discontinue use of the Website.

7. USER RESPONSIBILITIES

By using this Website, you agree to:

Understand how affiliate marketing works.

Conduct your own research before purchasing any product or service.

Accept that we are not responsible for third-party transactions.

Assume all risks associated with affiliate links and third-party tracking.

8. GOVERNING LAW & DISPUTE RESOLUTION

This Affiliate Disclosure is governed by the laws of [Insert Jurisdiction].

Any disputes will be resolved through binding arbitration in [Insert Location], in English.

You waive the right to participate in class-action lawsuits against us.

9. CHANGES TO THIS AFFILIATE DISCLOSURE

We may update this Affiliate Disclosure at any time. Updates will be posted on this page with a new "Last Updated" date. Continued use of the Website after updates constitutes acceptance of the revised terms.

10. CONTACT INFORMATION

For questions regarding this Affiliate Disclosure, contact us at:
Email: [Insert Contact Email]
Address: [Insert Business Address]
Website: https://[AffiliateWebsiteName].com`;

  const termsAndConditions = `TERMS AND CONDITIONS

Effective Date: [Insert Date]
Last Updated: [Insert Date]

Welcome to [AffiliateWebsiteName].com ("Website," "we," "our," or "us"). These Terms and Conditions ("Terms") govern your access to and use of our Website, including any content, affiliate links, advertisements, and third-party offers displayed herein.

By accessing or using this Website, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, you must immediately discontinue use of the Website.

🚨 IMPORTANT NOTICE

We do not control third-party websites, merchants, or affiliate networks.

Affiliate links may contain tracking technologies managed by third parties.

We are not liable for any actions, data collection, or business conducted on external websites.

Your interactions and transactions with third-party merchants are entirely at your own risk.

1. DEFINITIONS

"Website" refers to [AffiliateWebsiteName].com and all its related pages, features, and content.

"User" / "You" means any individual or entity accessing or using the Website.

"Affiliate Links" are referral or tracking links that may generate commissions for us when purchases are made.

"Third-Party Services" include external websites, merchants, platforms, and advertisers linked from our Website.

2. USE OF THE WEBSITE

By using this Website, you agree to:
✔ Use the Website for lawful and informational purposes only.
✔ Avoid using automated tools (bots, scrapers, or scripts) to collect or copy content.
✔ Refrain from fraudulent, misleading, or deceptive practices.
✔ Accept that we are not responsible for third-party transactions, tracking, or data collection.

Your use of this Website signifies your compliance with all applicable local and international laws.

3. AFFILIATE DISCLOSURE

This Website contains affiliate links that may generate commissions at no additional cost to you. When you click or interact with an affiliate link, a tracking cookie may be placed on your device by a third-party network.

We maintain transparency by disclosing our affiliate relationships in accordance with the FTC (U.S.), GDPR (EU), UK Consumer Laws, and other international regulations.

Affiliate Network	Purpose	Privacy Policy
Amazon Associates	Earns commissions on product sales.	[Amazon Policy]
CJ Affiliate	Tracks affiliate conversions.	[CJ Affiliate Policy]
Rakuten Marketing	E-commerce affiliate tracking.	[Rakuten Policy]
Google Ads	Shows retargeted affiliate ads.	[Google Privacy Policy]
Facebook Pixel	Tracks affiliate sales via ads.	[Facebook Policy]

📌 We disclaim all liability for third-party cookies, tracking, and external purchases.

4. THIRD-PARTY SERVICES & LIABILITY WAIVER

Links to third-party websites are provided for convenience only.

We do not endorse, control, or guarantee any third-party products or services.

All purchases, refunds, or disputes must be handled directly with the merchant.

🚨 WE DISCLAIM ALL LIABILITY for losses, data breaches, inaccuracies, or damages caused by third-party services, including affiliate networks and advertisers.

📌 If you do not wish to be tracked by third parties, please refrain from clicking affiliate links.

5. INTELLECTUAL PROPERTY RIGHTS

✔ All Website content, including text, graphics, designs, and trademarks, is protected by copyright and intellectual property laws.
✔ You may not copy, modify, distribute, or reproduce our content without express written permission.
✔ Any unauthorized use may result in civil or criminal liability.

We respect the intellectual property rights of others and expect our users to do the same.

6. PROHIBITED ACTIVITIES

By using this Website, you agree not to:
❌ Engage in illegal, fraudulent, or harmful activities.
❌ Attempt to hack, manipulate, or disrupt the Website or its servers.
❌ Impersonate other individuals or entities.
❌ Use bots, crawlers, or scrapers to extract content or data.

📌 We reserve the right to suspend or permanently ban users who violate these Terms.

7. DISCLAIMER OF WARRANTIES

🚨 THIS WEBSITE IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT ANY WARRANTIES OF ANY KIND.

✔ We make no guarantees regarding the accuracy, completeness, or availability of content.
✔ We disclaim all responsibility for the actions of third-party merchants, affiliate partners, and networks.
✔ You assume full responsibility for your interactions with third-party services.

📌 Your sole and exclusive remedy for dissatisfaction with the Website is to stop using it.

8. LIMITATION OF LIABILITY

🚨 TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE ARE NOT LIABLE FOR:
❌ Financial losses, data breaches, or damages resulting from affiliate purchases.
❌ Errors, inaccuracies, or outdated information on our Website.
❌ Technical failures, cyberattacks, or interruptions beyond our control.

In no event shall [AffiliateWebsiteName].com, its owners, or affiliates be liable for any indirect, consequential, or incidental damages arising from your use of this Website.

9. INDEMNIFICATION

By using this Website, you agree to indemnify, defend, and hold harmless [AffiliateWebsiteName].com, its owners, employees, and partners from any claims, losses, or damages resulting from:
✔ Your use of affiliate links.
✔ Your reliance on Website content.
✔ Your engagement with third-party merchants.

🚨 You accept full responsibility for your actions and interactions with third parties.

10. GOVERNING LAW & DISPUTE RESOLUTION

✔ These Terms are governed by the laws of [Insert Jurisdiction].
✔ Any dispute shall be resolved by binding arbitration in [Insert Location], in the English language.
✔ You waive any right to participate in collective or class-action proceedings.

If any provision is found invalid, the remainder of these Terms shall remain in effect.

11. CHANGES TO THESE TERMS

We reserve the right to update or modify these Terms at any time without prior notice. Updates will be posted on this page, with a revised "Last Updated" date.

Continued use of the Website after changes are posted constitutes your acceptance of the updated Terms.

12. CONTACT INFORMATION

For questions or concerns regarding these Terms, please contact us at:

📧 Email: [Insert Contact Email]
📍 Address: [Insert Business Address]
🌐 Website: https://[AffiliateWebsiteName].com`;

  const disclaimer = `DISCLAIMER

Effective Date: [Insert Date]
Last Updated: [Insert Date]

Welcome to [AffiliateWebsiteName].com ("Website," "we," "our," or "us").
By accessing or using this Website, you acknowledge that you have read, understood, and agree to be bound by the terms of this Disclaimer. If you do not agree, please stop using the Website immediately.

⚠️ Important Notice

We make every effort to provide accurate, up-to-date information; however, we do not guarantee the accuracy, completeness, or reliability of any content published on this Website.

This Website may contain affiliate links that generate commissions for us.

We are not responsible for any actions, tracking technologies, or cookies used by third-party advertisers, merchants, or affiliate networks.

All activities and purchases made through third-party links are at your own risk and governed by the merchant's terms and privacy policies.

1. Affiliate Disclosure

In compliance with the FTC Guidelines (U.S.), GDPR (EU), UK Consumer Protection, and other international marketing laws, we disclose the following:

Some links on this Website are affiliate links, meaning we may earn a commission when you make a qualifying purchase — at no additional cost to you.

Affiliate links may trigger third-party tracking cookies that collect data to measure performance or provide targeted advertising.

All transactions and data collection through these links are governed by the respective third-party's privacy policy and not ours.

📌 We do not control or manage third-party tracking systems, cookies, or data collection practices.

2. No Legal, Financial, or Professional Advice

The content on this Website is for informational and educational purposes only.
Nothing on this Website should be construed as professional advice of any kind.

Financial Disclaimer: We are not licensed financial or investment advisors. Content provided does not constitute financial guidance.

Legal Disclaimer: Information is not intended to replace professional legal consultation.

Health Disclaimer: Any health-related information is for general awareness and is not a substitute for medical advice.

🚨 All actions taken based on our content are entirely at your own risk.

3. Earnings Disclaimer

We strive to present accurate examples of potential earnings; however:

We make no guarantee of income or success.

All income statements and case studies are illustrative only.

Individual results vary and depend on personal effort, market conditions, and other factors.

We are not liable for any financial losses or expectations related to affiliate earnings or business decisions.

4. Third-Party Links & Liability Waiver

Our Website may include links to third-party sites, offers, or advertisements.
These are provided solely for convenience and informational purposes.

By clicking such links, you acknowledge that:

We do not control third-party websites, privacy policies, or data practices.

We do not endorse or guarantee any third-party products or services.

Any disputes, refunds, or service issues must be handled directly with the merchant.

We disclaim all liability for any damages, data misuse, or losses caused by external websites.

📌 If you do not consent to third-party tracking or data collection, do not click affiliate links.

5. Limitation of Liability

To the fullest extent permitted by law:

This Website and its content are provided "as is" without any warranties.

We do not guarantee uninterrupted access, accuracy, or error-free operation.

We are not responsible for:

Financial losses due to affiliate purchases

Data breaches, cyberattacks, or system failures

Technical issues beyond our control

Any damages or losses resulting from the use or inability to use our Website

📌 Your sole remedy for dissatisfaction with our Website is to stop using it.

6. Indemnification

By using this Website, you agree to indemnify, defend, and hold harmless
[AffiliateWebsiteName].com, its owners, affiliates, and partners from any claims, damages, or legal disputes arising from:

Your use of affiliate links

Your reliance on Website content

Your interactions with third-party merchants or services

🚨 You assume full responsibility for your actions and interactions with external parties.

7. Governing Law & Dispute Resolution

This Disclaimer is governed by the laws of [Insert Jurisdiction], without regard to conflict of laws principles.

Any disputes arising from this Disclaimer shall be resolved through binding arbitration in [Insert Location], conducted in English.

You expressly waive the right to participate in class-action or representative lawsuits against us.

8. Updates to This Disclaimer

We may update this Disclaimer periodically to reflect legal, technical, or business changes.
The latest version will always be posted on this page with an updated "Last Updated" date.
Continued use of the Website after such updates constitutes acceptance of the revised terms.

9. Contact Information

For questions or legal inquiries regarding this Disclaimer, please contact us:

📧 Email: [Insert Contact Email]
📍 Address: [Insert Business Address]
🌐 Website: https://[AffiliateWebsiteName].com`;

  const cookiePolicy = `COOKIE POLICY

Effective Date: [Insert Date]
Last Updated: [Insert Date]

Welcome to [AffiliateWebsiteName].com ("Website," "we," "our," or "us"). This Cookie Policy explains how we and our third-party partners use cookies and similar tracking technologies on our Website.

By continuing to use this Website, you consent to our use of cookies in accordance with this policy.

1. WHAT ARE COOKIES?

Cookies are small text files stored on your device when you visit a website. They help improve your browsing experience by remembering your preferences and tracking your activity.

Types of Cookies We Use:

Essential Cookies – Required for Website functionality.

Performance Cookies – Help us analyze how visitors use the Website.

Functional Cookies – Remember your preferences and settings.

Advertising/Tracking Cookies – Used by third-party advertisers and affiliate networks.

2. HOW WE USE COOKIES

We use cookies for the following purposes:

To track affiliate referrals and earn commissions.

To analyze Website traffic and improve user experience.

To display targeted advertisements based on your interests.

To comply with legal and regulatory requirements.

3. THIRD-PARTY COOKIES

Our Website uses cookies from third-party services, including:

Google Analytics – Tracks Website usage and visitor behavior.

Amazon Associates – Tracks affiliate purchases and commissions.

Facebook Pixel – Monitors conversions and ad performance.

CJ Affiliate, Rakuten, and other affiliate networks.

📌 We do not control how third parties use cookies. Please review their privacy policies for more information.

4. MANAGING COOKIES

You can manage or disable cookies through your browser settings. However, disabling cookies may affect Website functionality.

How to Disable Cookies:

Google Chrome: Settings > Privacy and Security > Cookies

Firefox: Settings > Privacy & Security > Cookies and Site Data

Safari: Preferences > Privacy > Manage Website Data

Microsoft Edge: Settings > Cookies and Site Permissions

5. CONTACT INFORMATION

For questions about this Cookie Policy, contact us at:

📧 Email: [Insert Contact Email]
📍 Address: [Insert Business Address]
🌐 Website: https://[AffiliateWebsiteName].com`;

  const implementationGuide = `IMPLEMENTATIE HANDLEIDING: HOE JURIDISCHE DOCUMENTEN OP UW WEBSITE TE PLAATSEN

Deze handleiding legt uit hoe u de juridische documenten (Algemene Voorwaarden, Privacyverklaring, Affiliate Disclosure, Disclaimer en Cookiebeleid) correct op uw affiliate website implementeert.

STAP 1: DOWNLOAD DE DOCUMENTEN

1. Klik op de downloadknoppen bij elk document op deze pagina
2. Sla elk .txt bestand op uw computer op
3. Open elk document en pas de placeholders aan:
   - [Insert Date] → Vul de huidige datum in
   - [AffiliateWebsiteName] → Vul uw website naam in
   - [Insert Contact Email] → Vul uw contactemail in
   - [Insert Business Address] → Vul uw bedrijfsadres in
   - [Insert Jurisdiction] → Vul uw rechtsgebied in (bijv. "Nederland")
   - [Insert Location] → Vul uw locatie in

STAP 2: CREËER APARTE PAGINA'S OP UW WEBSITE

Maak voor elk document een aparte pagina aan:

- /algemene-voorwaarden
- /privacyverklaring
- /affiliate-disclosure
- /disclaimer
- /cookiebeleid

STAP 3: VOEG DE CONTENT TOE

Kopieer de aangepaste tekst van elk document naar de corresponderende pagina op uw website.

Zorg voor goede leesbaarheid:
- Gebruik koppen (H1, H2, H3) voor structuur
- Maak paragrafen niet te lang
- Gebruik opsommingstekens waar van toepassing
- Gebruik voldoende witruimte tussen secties

STAP 4: VOEG LINKS TOE IN DE FOOTER

Plaats links naar alle juridische documenten in de footer van uw website:

<footer>
  <nav>
    <a href="/algemene-voorwaarden">Algemene Voorwaarden</a>
    <a href="/privacyverklaring">Privacyverklaring</a>
    <a href="/affiliate-disclosure">Affiliate Disclosure</a>
    <a href="/disclaimer">Disclaimer</a>
    <a href="/cookiebeleid">Cookiebeleid</a>
  </nav>
</footer>

STAP 5: IMPLEMENTEER EEN COOKIE BANNER

Voor GDPR-compliance heeft u een cookie banner nodig:

1. Plaats de banner prominent op elke pagina
2. Vraag toestemming VOORDAT tracking cookies worden geplaatst
3. Geef gebruikers de mogelijkheid om cookies te accepteren of te weigeren
4. Link naar uw Cookiebeleid voor meer informatie

Voorbeeld code:
<div class="cookie-banner">
  <p>Deze website gebruikt cookies voor affiliate tracking en analytics. 
  Door verder te gaan, accepteert u ons <a href="/cookiebeleid">Cookiebeleid</a>.</p>
  <button onclick="acceptCookies()">Accepteren</button>
  <button onclick="declineCookies()">Weigeren</button>
</div>

STAP 6: AFFILIATE DISCLOSURE OP ELKE PAGINA MET AFFILIATE LINKS

Op elke pagina waar u affiliate links gebruikt, plaats een duidelijke disclosure:

"Deze pagina bevat affiliate links. Als u via deze links een aankoop doet, 
ontvangen wij mogelijk een commissie zonder extra kosten voor u. 
Lees onze volledige Affiliate Disclosure voor meer informatie."

STAP 7: JURIDISCHE CHECKLIST

☑ Alle placeholders zijn ingevuld
☑ Documenten zijn toegankelijk via de footer
☑ Cookie banner is geïmplementeerd
☑ Affiliate disclosure staat op relevante pagina's
☑ Contactgegevens zijn correct
☑ Documenten zijn up-to-date
☑ Links werken correct

STAP 8: REGELMATIGE UPDATES

- Review uw juridische documenten minimaal 1x per jaar
- Update de "Last Updated" datum bij wijzigingen
- Houd wetgeving in de gaten (GDPR, AVG, etc.)
- Pas documenten aan bij nieuwe affiliate partnerships

STAP 9: BACK-UPS

Bewaar altijd een back-up van uw juridische documenten op een veilige locatie.

VEELGESTELDE VRAGEN

Q: Moet ik een advocaat raadplegen?
A: Deze templates zijn een goed startpunt, maar het is raadzaam om juridisch advies in te winnen voor uw specifieke situatie.

Q: Zijn deze documenten geldig in Nederland?
A: Deze documenten zijn opgesteld volgens internationale standaarden. Pas ze aan voor Nederlandse wetgeving en overleg met een Nederlandse jurist.

Q: Hoe vaak moet ik updates doen?
A: Minimaal 1x per jaar, of wanneer er significante wijzigingen zijn in uw bedrijfsvoering of wetgeving.

Q: Moet ik Google Analytics toestemming vragen?
A: Ja, onder GDPR moet u toestemming vragen voordat u tracking cookies plaatst.

BELANGRIJKE WAARSCHUWING

Deze documenten zijn templates en geen vervanging voor professioneel juridisch advies. 
Elke website is uniek en vereist mogelijk aangepaste juridische documentatie. 
Raadpleeg altijd een gekwalificeerde jurist voor uw specifieke situatie.

CONTACT

Voor vragen over implementatie: [Insert Contact Email]
Voor juridisch advies: Raadpleeg een advocaat gespecialiseerd in internetrecht`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Juridische Documenten</h1>
        <p className="text-lg mb-12 text-muted-foreground">
          Download de essentiële juridische documenten voor uw affiliate website. Elk document is beschikbaar als downloadbaar .txt bestand.
        </p>

        {/* Affiliate Disclosure */}
        <section className="mb-12 p-6 bg-card rounded-lg border border-border shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-foreground">Affiliate Disclosure</h2>
            <Button
              onClick={() => downloadTextFile("affiliate-disclosure.txt", affiliateDisclosure)}
              variant="outline"
              size="sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
          <div className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap">
            {affiliateDisclosure}
          </div>
        </section>

        {/* Terms and Conditions */}
        <section className="mb-12 p-6 bg-card rounded-lg border border-border shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-foreground">Terms and Conditions</h2>
            <Button
              onClick={() => downloadTextFile("terms-and-conditions.txt", termsAndConditions)}
              variant="outline"
              size="sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
          <div className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap">
            {termsAndConditions}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-12 p-6 bg-card rounded-lg border border-border shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-foreground">Disclaimer</h2>
            <Button
              onClick={() => downloadTextFile("disclaimer.txt", disclaimer)}
              variant="outline"
              size="sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
          <div className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap">
            {disclaimer}
          </div>
        </section>

        {/* Cookie Policy */}
        <section className="mb-12 p-6 bg-card rounded-lg border border-border shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-foreground">Cookie Policy</h2>
            <Button
              onClick={() => downloadTextFile("cookie-policy.txt", cookiePolicy)}
              variant="outline"
              size="sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
          <div className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap">
            {cookiePolicy}
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="mb-12 p-6 bg-primary/5 rounded-lg border-2 border-primary/20 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-foreground">Implementatie Handleiding</h2>
            <Button
              onClick={() => downloadTextFile("implementatie-handleiding.txt", implementationGuide)}
              variant="default"
              size="sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
          <div className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap">
            {implementationGuide}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Af;
