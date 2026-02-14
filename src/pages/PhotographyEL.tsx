import HeaderEL from "@/components/el/HeaderEL";
import PhotographyLanguageSwitcher from "@/components/photography/PhotographyLanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroPhotographyMulti from "@/components/photography-shared/HeroPhotographyMulti";
import ValuePropositionPhotographyMulti from "@/components/photography-shared/ValuePropositionPhotographyMulti";
import ServicesPhotographyMulti from "@/components/photography-shared/ServicesPhotographyMulti";
import PhotographyQAMulti from "@/components/photography-shared/PhotographyQAMulti";
import PricingPhotographyMulti from "@/components/photography-shared/PricingPhotographyMulti";
import ReviewsPhotographyMulti from "@/components/photography-shared/ReviewsPhotographyMulti";
import FAQPhotographyMulti from "@/components/photography-shared/FAQPhotographyMulti";
import FooterEL from "@/components/el/FooterEL";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const PhotographyEL = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Βασικά νομικά έγγραφα για ιστοσελίδες φωτογραφίας: Όροι χρήσης, πολιτική απορρήτου, προστασία πνευματικών δικαιωμάτων"
        description="Βασικά νομικά έγγραφα για φωτογράφους: όροι χρήσης, συμβάσεις, πολιτική απορρήτου, προστασία πνευματικών δικαιωμάτων. Έτοιμα σε λίγα λεπτά για €79."
        canonical="https://www.iaee.eu/el/fotografia-nomika-engrafa-oroi-aporitou-pnevmatika-dikaiomata"
        lang="el"
        ogType="product"
        serviceName="Φωτογραφία Νομικά Έγγραφα"
        serviceDescription="Βασικά νομικά έγγραφα για φωτογράφους: Όροι, Πολιτική Απορρήτου, Προστασία Πνευματικών Δικαιωμάτων."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Αρχική", url: "https://www.iaee.eu" },
          { name: "Φωτογραφία Νομικά Έγγραφα", url: "https://www.iaee.eu/el/fotografia-nomika-engrafa-oroi-aporitou-pnevmatika-dikaiomata" }
        ]}
        faqItems={[
          { question: "Ποια έγγραφα περιλαμβάνονται;", answer: "Όροι χρήσης, πολιτική απορρήτου, προστασία πνευματικών δικαιωμάτων και συμβάσεις." },
          { question: "Είναι τα έγγραφα συμβατά με GDPR;", answer: "Ναι, όλα τα έγγραφα είναι πλήρως συμβατά με GDPR." }
        ]}
      />
      <HiddenInternalLinks />
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderEL />
        <PhotographyLanguageSwitcher currentLanguage="el" />
        <main>
          <HeroPhotographyMulti lang="el" />
          <ValuePropositionPhotographyMulti lang="el" />
          <ServicesPhotographyMulti lang="el" />
          <PhotographyQAMulti lang="el" />
          <PricingPhotographyMulti lang="el" />
          <ReviewsPhotographyMulti lang="el" />
          <FAQPhotographyMulti lang="el" />
        </main>
        <FooterEL />
      </div>
    </>
  );
};

export default PhotographyEL;
