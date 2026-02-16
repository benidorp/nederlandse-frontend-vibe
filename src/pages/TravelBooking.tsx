import HeaderEN from "@/components/en/HeaderEN";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroTravelBookingEN from "@/components/travel-booking/HeroTravelBookingEN";
import ValuePropositionTravelBookingEN from "@/components/travel-booking/ValuePropositionTravelBookingEN";
import ServicesTravelBookingEN from "@/components/travel-booking/ServicesTravelBookingEN";
import BlogPostsTravelBookingEN from "@/components/travel-booking/BlogPostsTravelBookingEN";
import TravelBookingQAEN from "@/components/travel-booking/TravelBookingQAEN";
import PricingTravelBookingEN from "@/components/travel-booking/PricingTravelBookingEN";
import ReviewsEN from "@/components/en/ReviewsEN";
import FAQTravelBookingEN from "@/components/travel-booking/FAQTravelBookingEN";
import FooterEN from "@/components/en/FooterEN";

import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const TravelBooking = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Must-Have Legal Protection for Hotel and Travel Websites | Terms & Cancellation Policy"
        description="Essential legal documents for travel booking and hotel platforms including terms and conditions, privacy policy, disclaimer, cancellation policy and GDPR compliance. Ready in minutes for €79."
        canonical="https://www.iaee.eu/must-have-legal-protection-for-every-hotel-and-travel-website-terms-conditions-privacy-policy-cancellation-policy-disclaimer"
        lang="en"
        ogType="product"
        serviceName="Travel & Hotel Legal Documents"
        serviceDescription="Essential legal documents for travel booking and hotel platforms including Terms, Privacy Policy, Cancellation Policy, and GDPR Compliance."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Home", url: "https://www.iaee.eu" },
          { name: "Travel & Hotel Legal Documents", url: "https://www.iaee.eu/must-have-legal-protection-for-every-hotel-and-travel-website-terms-conditions-privacy-policy-cancellation-policy-disclaimer" }
        ]}
        faqItems={[
          { question: "What documents are included?", answer: "Terms & Conditions, Privacy Policy, Cancellation Policy, Disclaimer, and GDPR Compliance." },
          { question: "Are the documents GDPR compliant?", answer: "Yes, all documents are fully GDPR compliant." }
        ]}
      />
      
      <HiddenInternalLinks />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <HeroTravelBookingEN />
          <ValuePropositionTravelBookingEN />
          <ServicesTravelBookingEN />
          <BlogPostsTravelBookingEN />
          <PricingTravelBookingEN />
          <TravelBookingQAEN />
          <ReviewsEN />
          <FAQTravelBookingEN />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default TravelBooking;
