import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HeroTravelBooking from "@/components/travel-booking/HeroTravelBooking";
import ValuePropositionTravelBooking from "@/components/travel-booking/ValuePropositionTravelBooking";
import ServicesTravelBooking from "@/components/travel-booking/ServicesTravelBooking";
import BlogPostsTravelBooking from "@/components/travel-booking/BlogPostsTravelBooking";
import TravelBookingQA from "@/components/travel-booking/TravelBookingQA";
import PricingTravelBooking from "@/components/travel-booking/PricingTravelBooking";
import Reviews from "@/components/Reviews";
import FAQTravelBooking from "@/components/travel-booking/FAQTravelBooking";
import Footer from "@/components/Footer";
import GTranslateWidget from "@/components/GTranslateWidget";

const TravelBooking = () => {
  return (
    <>
      <Helmet>
        <title>Juridische Documenten voor Reisboekingswebsites: Algemene Voorwaarden, Privacybeleid & Annuleringsbeleid</title>
        <meta name="description" content="Essentiële juridische documenten voor reisboekingssites en hotelplatforms inclusief algemene voorwaarden, privacybeleid, disclaimer, annuleringsvoorwaarden en GDPR-compliance." />
        <meta name="keywords" content="reisboekingswebsite juridische documenten, hotel booking algemene voorwaarden, annuleringsbeleid, privacy policy reisbranche, travel booking disclaimer" />
        <html lang="nl" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://iaee.eu/reisboekingswebsite-juridische-documenten-algemene-voorwaarden-privacybeleid-annuleringsbeleid" />
      </Helmet>
      <GTranslateWidget />
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroTravelBooking />
          <ValuePropositionTravelBooking />
          <ServicesTravelBooking />
          <BlogPostsTravelBooking />
          <TravelBookingQA />
          <PricingTravelBooking />
          <Reviews />
          <FAQTravelBooking />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TravelBooking;
