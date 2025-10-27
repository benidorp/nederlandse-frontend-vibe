import { Helmet } from "react-helmet";
import HeaderEN from "@/components/en/HeaderEN";
import HeroTravelBookingEN from "@/components/travel-booking/HeroTravelBookingEN";
import ValuePropositionTravelBookingEN from "@/components/travel-booking/ValuePropositionTravelBookingEN";
import ServicesTravelBookingEN from "@/components/travel-booking/ServicesTravelBookingEN";
import BlogPostsTravelBookingEN from "@/components/travel-booking/BlogPostsTravelBookingEN";
import TravelBookingQAEN from "@/components/travel-booking/TravelBookingQAEN";
import PricingTravelBookingEN from "@/components/travel-booking/PricingTravelBookingEN";
import ReviewsEN from "@/components/en/ReviewsEN";
import FAQTravelBookingEN from "@/components/travel-booking/FAQTravelBookingEN";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";
const TravelBooking = () => {
  return <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
        <title>Must-Have Legal Protection for Every Hotel and Travel Website: Terms & Conditions, Privacy Policy, Cancellation Policy & Disclaimer</title>
        <meta name="description" content="Essential legal documents for travel booking and hotel platforms including terms and conditions, privacy policy, disclaimer, cancellation policy and GDPR compliance." />
        <meta name="keywords" content="travel booking website legal documents, hotel booking terms and conditions, cancellation policy, privacy policy travel industry, travel booking disclaimer" />
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://iaee.eu/must-have-legal-protection-for-every-hotel-and-travel-website-terms-conditions-privacy-policy-cancellation-policy-disclaimer" />
      </Helmet>
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <HeroTravelBookingEN />
          <ValuePropositionTravelBookingEN />
          <ServicesTravelBookingEN />
          <BlogPostsTravelBookingEN />
          <TravelBookingQAEN />
          
          <ReviewsEN />
          <FAQTravelBookingEN />
        </main>
        <FooterEN />
      </div>
    </>;
};
export default TravelBooking;