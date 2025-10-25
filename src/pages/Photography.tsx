import { Helmet } from "react-helmet";
import HeaderEN from "@/components/en/HeaderEN";
import HeroPhotography from "@/components/photography/HeroPhotography";
import ValuePropositionPhotography from "@/components/photography/ValuePropositionPhotography";
import ServicesPhotography from "@/components/photography/ServicesPhotography";
import PhotographyQA from "@/components/photography/PhotographyQA";
import PricingPhotography from "@/components/photography/PricingPhotography";
import ReviewsEN from "@/components/en/ReviewsEN";
import FAQPhotography from "@/components/photography/FAQPhotography";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";

const Photography = () => {
  return (
    <>
      <Helmet>
        <title>Legal Documents for Photography Websites: Terms & Conditions, Privacy Policy, Disclosure & Cookie Policy</title>
        <meta name="description" content="Essential legal documents for photographers including terms and conditions, assignment agreements, privacy policy, disclaimer, quitclaim, and copyright protection." />
        <meta name="keywords" content="photography legal documents, photographer terms and conditions, photography contract, model release, copyright protection, photography disclaimer" />
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://iaee.eu/photography-legal-documents-terms-conditions-privacy-policy-contract-copyright-protection" />
      </Helmet>
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <HeroPhotography />
          <ValuePropositionPhotography />
          <ServicesPhotography />
          <PhotographyQA />
          <PricingPhotography />
          <ReviewsEN />
          <FAQPhotography />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default Photography;
