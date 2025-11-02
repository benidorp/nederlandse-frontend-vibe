import { Helmet } from "react-helmet";
import HeaderNewsMagazine from "@/components/news-magazine/HeaderNewsMagazine";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroNewsMagazine from "@/components/news-magazine/HeroNewsMagazine";
import ValuePropositionNewsMagazine from "@/components/news-magazine/ValuePropositionNewsMagazine";
import ServicesNewsMagazine from "@/components/news-magazine/ServicesNewsMagazine";
import BlogPostsNewsMagazine from "@/components/news-magazine/BlogPostsNewsMagazine";
import FAQNewsMagazine from "@/components/news-magazine/FAQNewsMagazine";
import PricingNewsMagazine from "@/components/news-magazine/PricingNewsMagazine";
import ReviewsNewsMagazine from "@/components/news-magazine/ReviewsNewsMagazine";
import FooterNewsMagazine from "@/components/news-magazine/FooterNewsMagazine";
import CTABoxNewsMagazine from "@/components/news-magazine/CTABoxNewsMagazine";
import GTranslateWidget from "@/components/GTranslateWidget";
const NewsMagazine = () => {
  return <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://iaee.eu/news-magazine-legal-documents-terms-conditions-privacy-policy-copyright-editorial-policy" />
        <title>Essential Legal Documents for News & Magazine Websites | GDPR-Compliant Privacy Policy, Terms & Conditions</title>
        <meta name="description" content="Complete legal protection for your news or magazine website. Get GDPR-compliant privacy policy, editorial guidelines, copyright policy, terms & conditions - ready in minutes for €79." />
      </Helmet>
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderNewsMagazine />
        <main>
          <HeroNewsMagazine />
          <ValuePropositionNewsMagazine />
          <ServicesNewsMagazine />
          <PricingNewsMagazine />
          <ReviewsNewsMagazine />
          <FAQNewsMagazine />
          <CTABoxNewsMagazine />
        </main>
        <FooterNewsMagazine />
      </div>
    </>;
};
export default NewsMagazine;