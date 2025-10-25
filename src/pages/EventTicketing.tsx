import { Helmet } from "react-helmet";
import HeaderEN from "@/components/en/HeaderEN";
import HeroEventTicketing from "@/components/event-ticketing/HeroEventTicketing";
import ValuePropositionEventTicketing from "@/components/event-ticketing/ValuePropositionEventTicketing";
import ServicesEventTicketing from "@/components/event-ticketing/ServicesEventTicketing";
import BlogPostsEventTicketing from "@/components/event-ticketing/BlogPostsEventTicketing";
import EventTicketingQA from "@/components/event-ticketing/EventTicketingQA";
import PricingEventTicketing from "@/components/event-ticketing/PricingEventTicketing";
import ReviewsEN from "@/components/en/ReviewsEN";
import FAQEventTicketing from "@/components/event-ticketing/FAQEventTicketing";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";

const EventTicketing = () => {
  return (
    <>
      <Helmet>
        <title>Legal Documents for Event & Ticketing Websites: Terms & Conditions, Privacy Policy, Disclaimer & Cookie Policy</title>
        <meta name="description" content="Essential legal documents for event organizers and ticketing platforms including terms and conditions, privacy policy, refund policy, liability disclaimer, and GDPR compliance." />
        <meta name="keywords" content="event legal documents, ticketing terms and conditions, event liability waiver, ticket refund policy, event privacy policy, GDPR event compliance" />
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://iaee.eu/event-ticketing-legal-documents-terms-conditions-privacy-policy-registration-refund-policy" />
      </Helmet>
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <HeroEventTicketing />
          <ValuePropositionEventTicketing />
          <ServicesEventTicketing />
          <BlogPostsEventTicketing />
          <EventTicketingQA />
          <PricingEventTicketing />
          <ReviewsEN />
          <FAQEventTicketing />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default EventTicketing;
