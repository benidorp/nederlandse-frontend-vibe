import { Helmet } from "react-helmet";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import LegalFooterEN from "@/components/en/LegalFooterEN";

const LegalEN = () => {
  return (
    <>
      <Helmet>
        <title>Legal Information - Legal Affiliate Agreement</title>
        <meta name="description" content="Legal documents for affiliate websites including terms and conditions, privacy policy, disclaimer, and cookie policy." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <HeaderEN />
        <main className="container mx-auto px-4 py-12">
          <LegalFooterEN />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default LegalEN;
