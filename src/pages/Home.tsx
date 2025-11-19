import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";

// Import images
import affiliateImage from "@/assets/nicole-profile.png";
import photographyImage from "@/assets/nicole-photography.png";
import travelImage from "@/assets/lawyer-office.png";
import ecommerceImage from "@/assets/nicole-working.png";
import onlineShopImage from "@/assets/nicole-nonprofit-clear.png";
import dropshippingImage from "@/assets/nicole-freelancer-profile.png";
import elearningImage from "@/assets/nicole-profile.jpg";
import nonprofitImage from "@/assets/nicole-nonprofit.png";
import streamingImage from "@/assets/lawyer-hero.jpg";
import comparisonImage from "@/assets/nicole-comparison-review.png";
import newsMagazineImage from "@/assets/lawyer-office.png";
import freelancersImage from "@/assets/nicole-freelancer-profile.png";
import spanishImage from "@/assets/nicole-profile.png";

const pages = [
  {
    title: "Affiliate Website Legal Documents",
    description: "Complete legal protection for affiliate marketing websites with terms, privacy policy, disclosure and cookie policy.",
    image: affiliateImage,
    link: "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy"
  },
  {
    title: "Photography Legal Documents",
    description: "Professional legal documents for photographers including contracts, copyright protection and privacy policies.",
    image: photographyImage,
    link: "/photography-legal-documents-terms-conditions-privacy-policy-contract-copyright-protection"
  },
  {
    title: "Travel & Hotel Legal Protection",
    description: "Essential legal documents for travel and hotel websites with cancellation policy and terms & conditions.",
    image: travelImage,
    link: "/must-have-legal-protection-for-every-hotel-and-travel-website-terms-conditions-privacy-policy-cancellation-policy-disclaimer"
  },
  {
    title: "E-commerce Legal Documents",
    description: "Complete legal protection for online stores with return policy, shipping policy and GDPR compliance.",
    image: ecommerceImage,
    link: "/essential-legal-documents-ecommerce-website-terms-conditions-privacy-policy-return-policy-shipping-policy"
  },
  {
    title: "Online Shop Legal Protection",
    description: "Professional legal documents for webshops with cookie policy and GDPR compliance.",
    image: onlineShopImage,
    link: "/webshop-online-business-legal-protection-terms-privacy-policy-cookie-policy-gdpr-compliance"
  },
  {
    title: "Dropshipping Business Legal",
    description: "Essential legal protection for dropshipping businesses with supplier agreements and refund policies.",
    image: dropshippingImage,
    link: "/dropshipping-business-legal-protection-terms-conditions-privacy-policy-supplier-agreement-refund-policy"
  },
  {
    title: "E-Learning Platform Legal",
    description: "Complete legal documents for online education platforms with GDPR compliance and terms.",
    image: elearningImage,
    link: "/elearning-platform-legal-documents-terms-privacy-policy-gdpr-compliance"
  },
  {
    title: "Nonprofit & Charity Legal",
    description: "Professional legal documents for nonprofits including donation terms and privacy policies.",
    image: nonprofitImage,
    link: "/nonprofit-charity-legal-documents-donation-terms-privacy-policy"
  },
  {
    title: "Streaming Media Legal",
    description: "Essential legal protection for streaming platforms with DMCA policy and content licenses.",
    image: streamingImage,
    link: "/streaming-media-legal-documents-terms-conditions-privacy-policy-dmca-content-license"
  },
  {
    title: "Comparison & Review Sites",
    description: "Complete legal documents for comparison and review websites with affiliate disclosures.",
    image: comparisonImage,
    link: "/comparison-review-website-legal-documents-terms-privacy-affiliate-disclosure-disclaimer"
  },
  {
    title: "News & Magazine Legal",
    description: "Professional legal protection for news and magazine websites with editorial and copyright policies.",
    image: newsMagazineImage,
    link: "/news-magazine-legal-documents-terms-conditions-privacy-policy-copyright-editorial-policy"
  },
  {
    title: "Freelancers Legal Documents",
    description: "Essential legal protection for freelancers and self-employed with contracts and privacy policies.",
    image: freelancersImage,
    link: "/freelancers-self-employed-legal-documents-contracts-terms-privacy-policy"
  },
  {
    title: "Documentos Legales (Español)",
    description: "Documentos legales completos para sitios web de afiliados en español con términos y política de privacidad.",
    image: spanishImage,
    link: "/es/documentos-legales-sitios-web-afiliados-terminos-condiciones-politica-privacidad-divulgacion-cookies"
  }
];

const Home = () => {
  return (
    <>
      <Helmet>
        <html lang="nl" />
        <title>Legal Documents for All Website Types | Professional Legal Protection</title>
        <meta name="description" content="Complete legal protection packages for every type of website. GDPR-compliant privacy policies, terms & conditions, and all essential legal documents. Ready in minutes." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://iaee.eu/" />
      </Helmet>
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          {/* Hero Section */}
          <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Professional Legal Documents for Every Website Type
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Bescherm je online business met professionele juridische documenten. GDPR-compliant, direct te gebruiken en speciaal gemaakt voor jouw type website.
                </p>
                <p className="text-lg text-muted-foreground">
                  Kies hieronder je website type en krijg direct toegang tot alle benodigde juridische documenten.
                </p>
              </div>
            </div>
          </section>

          {/* Pages Grid */}
          <section className="py-16 md:py-24">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pages.map((page, index) => (
                  <Link to={page.link} key={index} className="group">
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <CardHeader className="p-0">
                        <div className="aspect-video overflow-hidden rounded-t-lg">
                          <img 
                            src={page.image} 
                            alt={page.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <CardTitle className="mb-2 text-xl group-hover:text-primary transition-colors">
                          {page.title}
                        </CardTitle>
                        <CardDescription className="mb-4">
                          {page.description}
                        </CardDescription>
                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          Bekijk Details
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default Home;