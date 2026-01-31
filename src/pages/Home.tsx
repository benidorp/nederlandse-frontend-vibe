import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText, Scale, CheckCircle, Calculator } from "lucide-react";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";

// Import images
import affiliateImage from "@/assets/page-affiliate.jpg";
import photographyImage from "@/assets/page-photography.jpg";
import travelImage from "@/assets/page-travel.jpg";
import ecommerceImage from "@/assets/page-ecommerce.jpg";
import onlineShopImage from "@/assets/page-webshop.jpg";
import dropshippingImage from "@/assets/page-dropshipping.jpg";
import elearningImage from "@/assets/page-elearning.jpg";
import nonprofitImage from "@/assets/page-nonprofit.jpg";
import streamingImage from "@/assets/page-streaming.jpg";
import comparisonImage from "@/assets/page-comparison.jpg";
import newsMagazineImage from "@/assets/page-news.jpg";
import freelancersImage from "@/assets/page-freelancer.jpg";
import spanishImage from "@/assets/nicole-profile.png";
const pages = [{
  title: "Affiliate Website Legal Documents",
  description: "Complete legal protection for affiliate marketing websites with terms, privacy policy, disclosure and cookie policy.",
  image: affiliateImage,
  link: "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy"
}, {
  title: "Photography Legal Documents",
  description: "Professional legal documents for photographers including contracts, copyright protection and privacy policies.",
  image: photographyImage,
  link: "/photography-legal-documents-terms-conditions-privacy-policy-contract-copyright-protection"
}, {
  title: "Travel & Hotel Legal Protection",
  description: "Essential legal documents for travel and hotel websites with cancellation policy and terms & conditions.",
  image: travelImage,
  link: "/must-have-legal-protection-for-every-hotel-and-travel-website-terms-conditions-privacy-policy-cancellation-policy-disclaimer"
}, {
  title: "E-commerce Legal Documents",
  description: "Complete legal protection for online stores with return policy, shipping policy and GDPR compliance.",
  image: ecommerceImage,
  link: "/essential-legal-documents-ecommerce-website-terms-conditions-privacy-policy-return-policy-shipping-policy"
}, {
  title: "Online Shop Legal Protection",
  description: "Professional legal documents for webshops with cookie policy and GDPR compliance.",
  image: onlineShopImage,
  link: "/webshop-online-business-legal-protection-terms-privacy-policy-cookie-policy-gdpr-compliance"
}, {
  title: "Dropshipping Business Legal",
  description: "Essential legal protection for dropshipping businesses with supplier agreements and refund policies.",
  image: dropshippingImage,
  link: "/dropshipping-business-legal-protection-terms-conditions-privacy-policy-supplier-agreement-refund-policy"
}, {
  title: "E-Learning Platform Legal",
  description: "Complete legal documents for online education platforms with GDPR compliance and terms.",
  image: elearningImage,
  link: "/elearning-platform-legal-documents-terms-privacy-policy-gdpr-compliance"
}, {
  title: "Nonprofit & Charity Legal",
  description: "Professional legal documents for nonprofits including donation terms and privacy policies.",
  image: nonprofitImage,
  link: "/nonprofit-charity-legal-documents-donation-terms-privacy-policy"
}, {
  title: "Streaming Media Legal",
  description: "Essential legal protection for streaming platforms with DMCA policy and content licenses.",
  image: streamingImage,
  link: "/streaming-media-legal-documents-terms-conditions-privacy-policy-dmca-content-license"
}, {
  title: "Comparison & Review Sites",
  description: "Complete legal documents for comparison and review websites with affiliate disclosures.",
  image: comparisonImage,
  link: "/comparison-review-website-legal-documents-terms-privacy-affiliate-disclosure-disclaimer"
}, {
  title: "News & Magazine Legal",
  description: "Professional legal protection for news and magazine websites with editorial and copyright policies.",
  image: newsMagazineImage,
  link: "/news-magazine-legal-documents-terms-conditions-privacy-policy-copyright-editorial-policy"
}, {
  title: "Freelancers Legal Documents",
  description: "Essential legal protection for freelancers and self-employed with contracts and privacy policies.",
  image: freelancersImage,
  link: "/freelancers-self-employed-legal-documents-contracts-terms-privacy-policy"
}, {
  title: "Premium Domain Names",
  description: "High-authority premium domain names with proven SEO value for sale. Boost your rankings instantly.",
  image: affiliateImage,
  link: "/expireddomainnames/nl/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde"
}, {
  title: "Spanish Legal Documents",
  description: "Complete legal documents for affiliate websites in Spanish with terms and privacy policy.",
  image: spanishImage,
  link: "/es/documentos-legales-sitios-web-afiliados-terminos-condiciones-politica-privacidad-divulgacion-cookies"
}];
const Home = () => {
  return <>
      <Helmet>
        <html lang="en" />
        <title>Professional Legal Documents for Every Website Type | GDPR Compliant</title>
        <meta name="description" content="Complete legal protection packages for all website types. GDPR-compliant privacy policies, terms & conditions, and all essential legal documents. Ready in minutes, professionally written." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.iaee.eu/" />
      </Helmet>
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          {/* Hero Section */}
          <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/10 via-primary/5 to-background overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
            <div className="container relative z-10">
              <div className="max-w-5xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Trusted by 10,000+ Businesses Worldwide</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Professional Legal Documents for Every Website Type
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
                  Protect your online business with professionally crafted legal documents. GDPR-compliant, ready to use, and specifically tailored for your website type.
                </p>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                  Whether you're running an e-commerce store, affiliate website, photography business, or any other online venture, we provide comprehensive legal protection that's both affordable and easy to implement. No legal expertise required – just download, customize with your business details, and you're protected.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
                  {[{
                  icon: Shield,
                  text: "GDPR Compliant"
                }, {
                  icon: FileText,
                  text: "Ready in Minutes"
                }, {
                  icon: Scale,
                  text: "Legally Reviewed"
                }, {
                  icon: CheckCircle,
                  text: "Easy to Customize"
                }].map((item, idx) => <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                      <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>)}
                </div>

                <p className="text-base text-muted-foreground mb-8">
                  Choose your website type below and get instant access to all the legal documents you need to operate safely and compliantly.
                </p>
              </div>
            </div>
          </section>

          {/* Premium Domains Highlight Section */}
          <section className="py-16 md:py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-amber-500/10 border border-amber-500/30">
                    <span className="text-sm font-medium text-amber-400">🔥 High Authority SEO Domains</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                    Premium Expired Domain Names
                  </h2>
                  <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                    Boost your website's SEO rankings instantly with our curated collection of high-authority expired domain names. Each domain comes with proven backlinks and established domain authority.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      <span>MOZ Domain Authority 20-50+</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      <span>Verified Quality Backlinks</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      <span>Instant Transfer Available</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      <span>Perfect for 301 Redirects & PBN</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/expireddomainnames/en/buy-premium-domains-high-authority-seo-value">
                      <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold text-lg px-8">
                        View Premium Domains
                      </Button>
                    </Link>
                    <Link to="/expireddomainnames/nl/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde">
                      <Button size="lg" variant="outline" className="border-slate-500 text-slate-300 hover:bg-slate-700 text-lg px-8">
                        Nederlandse versie
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-2xl blur-xl"></div>
                    <img src={affiliateImage} alt="Premium Domain Names - High Authority SEO Domains" className="relative w-full h-auto rounded-xl shadow-2xl border border-slate-700" />
                    <div className="absolute -bottom-4 -right-4 bg-amber-500 text-slate-900 px-6 py-3 rounded-lg font-bold text-lg shadow-lg">From €79</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BTW Calculator Highlight */}
          <section className="py-12 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <Card className="border-primary/20 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Calculator className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">
                          Wereldwijde BTW-calculator
                        </h2>
                        <p className="text-muted-foreground mb-4">
                          Bereken eenvoudig BTW voor meer dan 40 landen wereldwijd. Professionele tool voor internationale ondernemers.
                        </p>
                      </div>
                      <Link to="/btw-calculator-wereldwijd">
                        <Button size="lg" className="whitespace-nowrap">
                          Probeer nu gratis
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Pages Grid */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Select Your Website Type</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Each package is specifically designed for your industry with all necessary legal documents included.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pages.map((page, index) => <Link to={page.link} key={index} className="group">
                    <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-border hover:border-primary/50">
                      <CardHeader className="p-0">
                        <div className="aspect-video overflow-hidden rounded-t-lg bg-muted">
                          <img src={page.image} alt={page.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <CardTitle className="mb-3 text-xl group-hover:text-primary transition-colors leading-tight">
                          {page.title}
                        </CardTitle>
                        <CardDescription className="mb-4 leading-relaxed">
                          {page.description}
                        </CardDescription>
                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                          View Details & Pricing
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>)}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Still Not Sure Which Package You Need?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">Every package includes comprehensive legal protection tailored to your specific business model. All documents are written by legal professionals and regularly updated to comply with current regulations.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-lg px-8">
                    View All Packages
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <FooterEN />
      </div>
    </>;
};
export default Home;