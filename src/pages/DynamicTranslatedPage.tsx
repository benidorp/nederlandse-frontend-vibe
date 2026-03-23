import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import DOMPurify from "dompurify";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import VerticalLanguageSwitcher from "@/components/shared/VerticalLanguageSwitcher";
import { detectVerticalFromPath } from "@/utils/verticalDetection";
import type { VerticalId } from "@/data/verticalLanguageRegistry";
import { Helmet } from "react-helmet";

const DynamicTranslatedPage = () => {
  const location = useLocation();
  const [page, setPage] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const slug = location.pathname;

  useEffect(() => {
    const fetchPage = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("ai_generated_pages")
          .select("*")
          .eq("slug", slug)
          .eq("status", "published")
          .maybeSingle();

        if (error) throw error;
        if (!data) {
          setNotFound(true);
        } else {
          setPage(data);
        }
      } catch (err) {
        console.error("Failed to fetch dynamic page:", err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPage();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (notFound || !page) {
    // Import and render NotFound directly
    return <Navigate to="/404-not-found" replace />;
  }

  const vertical = detectVerticalFromPath(slug) as VerticalId | null;
  const langMatch = slug.match(/^\/([a-z]{2})\//);
  const lang = langMatch ? langMatch[1] : "en";

  const sanitizedHtml = DOMPurify.sanitize(page.html_content, {
    ADD_TAGS: ['stripe-buy-button', 'details', 'summary'],
    ADD_ATTR: ['buy-button-id', 'publishable-key', 'open'],
  });

  // Check if content has its own sections (full-page clone) vs simple content
  const isFullPageClone = sanitizedHtml.includes('<section');

  return (
    <>
      <Helmet>
        {page.meta_title && <title>{page.meta_title}</title>}
        {page.meta_description && <meta name="description" content={page.meta_description} />}
        <link rel="canonical" href={`https://www.iaee.eu${slug}`} />
        <meta property="og:title" content={page.meta_title || page.title} />
        <meta property="og:description" content={page.meta_description || ""} />
        <meta property="og:type" content="website" />
        <html lang={lang} />
        {/* Load Stripe JS for buy buttons in cloned pages */}
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>

      <div className="min-h-screen">
        <HeaderEN />
        {vertical && (
          <VerticalLanguageSwitcher vertical={vertical} currentLang={lang} />
        )}
        {isFullPageClone ? (
          <main>
            <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
          </main>
        ) : (
          <main className="container mx-auto px-4 py-8 max-w-4xl prose prose-lg dark:prose-invert">
            <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
          </main>
        )}
        <FooterEN />
      </div>
    </>
  );
};

export default DynamicTranslatedPage;
