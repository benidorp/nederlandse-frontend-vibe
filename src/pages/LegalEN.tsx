import { Helmet } from "react-helmet";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import LegalFooterEN from "@/components/en/LegalFooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";

const LegalEN = () => {
  return (
    <>
      <Helmet>
        <title>Legal Information - Legal Affiliate Agreement</title>
        <meta name="description" content="Legal documents for affiliate websites including terms and conditions, privacy policy, disclaimer, and cookie policy." />
        <meta name="robots" content="noindex, nofollow" />
        <html lang="en" />
        <link rel="canonical" href="https://iaee.eu/policy" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <HeaderEN />
        <main className="container mx-auto px-4 py-12">
          <div className="mb-8 flex justify-center">
            <GTranslateWidget detectBrowserLanguage={true} inline={true} />
          </div>
          <LegalFooterEN />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default LegalEN;
