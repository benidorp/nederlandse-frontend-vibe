import { Helmet } from "react-helmet";
import HeaderIT from "@/components/it/HeaderIT";
import HeroIT from "@/components/it/HeroIT";
import ValuePropositionIT from "@/components/it/ValuePropositionIT";
import ServicesIT from "@/components/it/ServicesIT";
import BlogPostsIT from "@/components/it/BlogPostsIT";
import AffiliateQAIT from "@/components/it/AffiliateQAIT";
import PricingIT from "@/components/it/PricingIT";
import ReviewsIT from "@/components/it/ReviewsIT";
import FAQIT from "@/components/it/FAQIT";
import FooterIT from "@/components/it/FooterIT";

const Italian = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
        <html lang="it" />
        <title>Protezione Sito Web Affiliato - Documenti Legali Essenziali</title>
        <meta name="description" content="Documenti legali professionali per siti web di affiliazione inclusi termini e condizioni, informativa sulla privacy, dichiarazione e cookie policy." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://iaee.eu/protezione-sito-web-affiliato-documenti-legali-essenziali-termini-condizioni-privacy-dichiarazione-cookie" />
      </Helmet>
      <div className="min-h-screen">
        <HeaderIT />
        <main>
          <HeroIT />
          <ValuePropositionIT />
          <ServicesIT />
          <BlogPostsIT />
          <AffiliateQAIT />
          <PricingIT />
          <ReviewsIT />
          <FAQIT />
        </main>
        <FooterIT />
      </div>
    </>
  );
};

export default Italian;