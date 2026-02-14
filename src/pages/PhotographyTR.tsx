import HeaderEN from "@/components/en/HeaderEN";
import PhotographyLanguageSwitcher from "@/components/photography/PhotographyLanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroPhotographyMulti from "@/components/photography-shared/HeroPhotographyMulti";
import ValuePropositionPhotographyMulti from "@/components/photography-shared/ValuePropositionPhotographyMulti";
import ServicesPhotographyMulti from "@/components/photography-shared/ServicesPhotographyMulti";
import PhotographyQAMulti from "@/components/photography-shared/PhotographyQAMulti";
import PricingPhotographyMulti from "@/components/photography-shared/PricingPhotographyMulti";
import ReviewsPhotographyMulti from "@/components/photography-shared/ReviewsPhotographyMulti";
import FAQPhotographyMulti from "@/components/photography-shared/FAQPhotographyMulti";
import FooterEN from "@/components/en/FooterEN";

import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const PhotographyTR = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Fotoğraf Web Siteleri İçin Temel Yasal Belgeler: Şartlar, Gizlilik, Telif Hakkı ve Sorumluluk Reddi"
        description="Fotoğrafçılar için temel yasal belgeler: şartlar ve koşullar, sözleşmeler, gizlilik politikası, telif hakkı koruması. Dakikalar içinde hazır, €79."
        canonical="https://www.iaee.eu/tr/fotograf-yasal-belgeler-sartlar-gizlilik-telif-hakki-sorumluluk-reddi"
        lang="tr"
        ogType="product"
        serviceName="Fotoğrafçılık Yasal Belgeler"
        serviceDescription="Fotoğrafçılar için temel yasal belgeler: Şartlar, Gizlilik Politikası, Telif Hakkı Koruması."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Ana Sayfa", url: "https://www.iaee.eu" },
          { name: "Fotoğrafçılık Yasal Belgeler", url: "https://www.iaee.eu/tr/fotograf-yasal-belgeler-sartlar-gizlilik-telif-hakki-sorumluluk-reddi" }
        ]}
        faqItems={[
          { question: "Hangi belgeler dahildir?", answer: "Şartlar ve koşullar, gizlilik politikası, telif hakkı koruması ve sözleşmeler." },
          { question: "Belgeler GDPR uyumlu mu?", answer: "Evet, tüm belgeler tamamen GDPR uyumludur." }
        ]}
      />
      <HiddenInternalLinks />
      
      <div className="min-h-screen">
        <HeaderEN />
        <PhotographyLanguageSwitcher currentLanguage="tr" />
        <main>
          <HeroPhotographyMulti lang="tr" />
          <ValuePropositionPhotographyMulti lang="tr" />
          <ServicesPhotographyMulti lang="tr" />
          <PhotographyQAMulti lang="tr" />
          <PricingPhotographyMulti lang="tr" />
          <ReviewsPhotographyMulti lang="tr" />
          <FAQPhotographyMulti lang="tr" />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default PhotographyTR;
