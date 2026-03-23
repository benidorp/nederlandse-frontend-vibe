import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

export interface BreadcrumbItemProps {
  label: string;
  href?: string;
  isCurrentPage?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItemProps[];
  homeLabel?: string;
  homeHref?: string;
  className?: string;
}

const Breadcrumbs = ({ 
  items, 
  homeLabel = "Home", 
  homeHref = "/",
  className = ""
}: BreadcrumbsProps) => {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {/* Home link */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to={homeHref} className="flex items-center gap-1">
              <Home className="h-4 w-4" />
              <span className="sr-only md:not-sr-only">{homeLabel}</span>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        
        {items.map((item, index) => (
          <span key={index} className="contents">
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {item.isCurrentPage || index === items.length - 1 ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={item.href || "#"}>{item.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </span>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;

// Preset breadcrumb configurations for different page types
export const getPremiumDomainsBreadcrumbs = (lang: string, currentPageLabel: string): BreadcrumbItemProps[] => {
  const langLabels: Record<string, { domains: string }> = {
    nl: { domains: "Premium Domeinen" },
    en: { domains: "Premium Domains" },
    de: { domains: "Premium Domains" },
    fr: { domains: "Domaines Premium" },
    es: { domains: "Dominios Premium" },
    it: { domains: "Domini Premium" },
    pt: { domains: "Domínios Premium" },
    pl: { domains: "Domeny Premium" },
    ja: { domains: "プレミアムドメイン" },
    zh: { domains: "高级域名" },
    ar: { domains: "نطاقات بريميوم" },
    tr: { domains: "Premium Alan Adları" },
    hi: { domains: "प्रीमियम डोमेन" }
  };

  return [
    { label: langLabels[lang]?.domains || "Premium Domains" },
    { label: currentPageLabel, isCurrentPage: true }
  ];
};

export const getLegalPageBreadcrumbs = (lang: string): BreadcrumbItemProps[] => {
  const langLabels: Record<string, { domains: string; legal: string }> = {
    nl: { domains: "Premium Domeinen", legal: "Juridische Documenten" },
    en: { domains: "Premium Domains", legal: "Legal Documents" },
    de: { domains: "Premium Domains", legal: "Rechtliche Dokumente" },
    fr: { domains: "Domaines Premium", legal: "Documents Juridiques" },
    es: { domains: "Dominios Premium", legal: "Documentos Legales" },
    it: { domains: "Domini Premium", legal: "Documenti Legali" },
    pt: { domains: "Domínios Premium", legal: "Documentos Legais" },
    pl: { domains: "Domeny Premium", legal: "Dokumenty Prawne" },
    ja: { domains: "プレミアムドメイン", legal: "法的文書" },
    zh: { domains: "高级域名", legal: "法律文件" },
    ar: { domains: "نطاقات بريميوم", legal: "الوثائق القانونية" },
    tr: { domains: "Premium Alan Adları", legal: "Yasal Belgeler" },
    hi: { domains: "प्रीमियम डोमेन", legal: "कानूनी दस्तावेज़" }
  };

  const labels = langLabels[lang] || langLabels.en;

  return [
    { label: labels.domains },
    { label: labels.legal, isCurrentPage: true }
  ];
};

export const getServicePageBreadcrumbs = (serviceName: string): BreadcrumbItemProps[] => {
  return [
    { label: "Services" },
    { label: serviceName, isCurrentPage: true }
  ];
};
