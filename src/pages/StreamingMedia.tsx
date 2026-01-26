import HeaderEN from "@/components/en/HeaderEN";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroStreamingMedia from "@/components/streaming-media/HeroStreamingMedia";
import ValuePropositionStreamingMedia from "@/components/streaming-media/ValuePropositionStreamingMedia";
import ServicesStreamingMedia from "@/components/streaming-media/ServicesStreamingMedia";
import PricingStreamingMedia from "@/components/streaming-media/PricingStreamingMedia";
import ReviewsStreamingMedia from "@/components/streaming-media/ReviewsStreamingMedia";
import FAQStreamingMedia from "@/components/streaming-media/FAQStreamingMedia";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const StreamingMedia = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Legal Documents for Streaming & Media Websites | Terms, DMCA & Content License"
        description="Essential legal documents for streaming platforms including terms and conditions, content licensing, privacy policy, DMCA policy, and copyright protection for influencers and media companies. Ready for €79."
        canonical="https://iaee.eu/streaming-media-legal-documents-terms-conditions-privacy-policy-dmca-content-license"
        lang="en"
        ogType="product"
        serviceName="Streaming & Media Legal Documents"
        serviceDescription="Essential legal documents for streaming platforms including Terms, Content Licensing, Privacy Policy, DMCA Policy, and Copyright Protection."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Home", url: "https://iaee.eu" },
          { name: "Streaming & Media Legal Documents", url: "https://iaee.eu/streaming-media-legal-documents-terms-conditions-privacy-policy-dmca-content-license" }
        ]}
        faqItems={[
          { question: "What documents are included?", answer: "Terms & Conditions, Content Licensing, Privacy Policy, DMCA Policy, and Copyright Protection." },
          { question: "Are the documents GDPR compliant?", answer: "Yes, all documents are fully GDPR compliant." }
        ]}
      />
      <HiddenInternalLinks />
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <HeroStreamingMedia />
          <ValuePropositionStreamingMedia />
          <ServicesStreamingMedia />
          <PricingStreamingMedia />
          <ReviewsStreamingMedia />
          <FAQStreamingMedia />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default StreamingMedia;
