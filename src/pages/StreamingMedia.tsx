import { Helmet } from "react-helmet";
import HeaderEN from "@/components/en/HeaderEN";
import HeroStreamingMedia from "@/components/streaming-media/HeroStreamingMedia";
import ValuePropositionStreamingMedia from "@/components/streaming-media/ValuePropositionStreamingMedia";
import ServicesStreamingMedia from "@/components/streaming-media/ServicesStreamingMedia";
import StreamingMediaQA from "@/components/streaming-media/StreamingMediaQA";
import PricingStreamingMedia from "@/components/streaming-media/PricingStreamingMedia";
import ReviewsStreamingMedia from "@/components/streaming-media/ReviewsStreamingMedia";
import FAQStreamingMedia from "@/components/streaming-media/FAQStreamingMedia";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";

const StreamingMedia = () => {
  return (
    <>
      <Helmet>
        <title>Legal Documents for Streaming & Media Websites: Terms & Conditions, Privacy Policy, DMCA Policy & Content License</title>
        <meta name="description" content="Essential legal documents for streaming platforms including terms and conditions, content licensing, privacy policy, DMCA policy, and copyright protection for influencers and media companies." />
        <meta name="keywords" content="streaming legal documents, media platform terms, content license agreement, DMCA policy, streaming privacy policy, creator agreements, video platform legal" />
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://iaee.eu/streaming-media-legal-documents-terms-conditions-privacy-policy-dmca-content-license" />
      </Helmet>
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <HeroStreamingMedia />
          <ValuePropositionStreamingMedia />
          <ServicesStreamingMedia />
          <StreamingMediaQA />
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
