import { useParams, Navigate } from "react-router-dom";
import ExpiredDomainArticleLayout from "@/components/expired-domains-articles/ExpiredDomainArticleLayout";
import { ARTICLES } from "@/content/expired-domain-articles";

const ExpiredDomainArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/expireddomainnames/en/articles" replace />;
  const article = ARTICLES[slug];
  if (!article) return <Navigate to="/expireddomainnames/en/articles" replace />;
  return <ExpiredDomainArticleLayout {...article} />;
};

export default ExpiredDomainArticlePage;
