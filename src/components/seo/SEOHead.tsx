import { Helmet } from "react-helmet";

// Types for different page schemas
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface ProductItem {
  name: string;
  description?: string;
  price: number;
  currency?: string;
  availability?: "InStock" | "OutOfStock" | "PreOrder";
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SEOHeadProps {
  // Basic meta
  title: string;
  description: string;
  canonical: string;
  lang?: string;
  dir?: "ltr" | "rtl";
  robots?: string;
  
  // Open Graph
  ogImage?: string;
  ogType?: "website" | "product" | "article";
  
  // Hreflang (for multilingual pages)
  hreflangLinks?: Array<{ lang: string; url: string }>;
  xDefaultUrl?: string;
  
  // Structured Data
  organizationName?: string;
  organizationUrl?: string;
  organizationLogo?: string;
  
  // Breadcrumbs
  breadcrumbs?: BreadcrumbItem[];
  
  // Products (for e-commerce/domain pages)
  products?: ProductItem[];
  
  // FAQ
  faqItems?: FAQItem[];
  
  // Service/Product page specific
  serviceType?: string;
  serviceName?: string;
  serviceDescription?: string;
  servicePrice?: number;
  serviceCurrency?: string;
}

// Generate Organization schema
const generateOrganizationSchema = (props: SEOHeadProps) => ({
  "@type": "Organization",
  name: props.organizationName || "IAEE",
  url: props.organizationUrl || "https://iaee.eu",
  logo: props.organizationLogo || "https://iaee.eu/logo.png",
  sameAs: [
    "https://twitter.com/iaee_eu",
    "https://linkedin.com/company/iaee"
  ]
});

// Generate WebSite schema
const generateWebSiteSchema = (props: SEOHeadProps) => ({
  "@type": "WebSite",
  name: props.organizationName || "IAEE",
  url: props.organizationUrl || "https://iaee.eu",
  potentialAction: {
    "@type": "SearchAction",
    target: `${props.organizationUrl || "https://iaee.eu"}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
});

// Generate BreadcrumbList schema
const generateBreadcrumbSchema = (breadcrumbs: BreadcrumbItem[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

// Generate Product schema
const generateProductSchema = (product: ProductItem, currency: string = "EUR") => ({
  "@type": "Product",
  name: product.name,
  description: product.description || product.name,
  offers: {
    "@type": "Offer",
    price: product.price,
    priceCurrency: product.currency || currency,
    availability: `https://schema.org/${product.availability || "InStock"}`
  }
});

// Generate ItemList schema for multiple products
const generateItemListSchema = (products: ProductItem[], currency: string = "EUR") => ({
  "@type": "ItemList",
  numberOfItems: products.length,
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: generateProductSchema(product, currency)
  }))
});

// Generate FAQPage schema
const generateFAQSchema = (faqItems: FAQItem[]) => ({
  "@type": "FAQPage",
  mainEntity: faqItems.map(item => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
});

// Generate Service schema
const generateServiceSchema = (props: SEOHeadProps) => {
  if (!props.serviceName) return null;
  
  return {
    "@type": "Product",
    name: props.serviceName,
    description: props.serviceDescription || props.description,
    category: props.serviceType || "Digital Service",
    offers: props.servicePrice ? {
      "@type": "Offer",
      price: props.servicePrice,
      priceCurrency: props.serviceCurrency || "EUR",
      availability: "https://schema.org/InStock"
    } : undefined
  };
};

// Main component
const SEOHead = (props: SEOHeadProps) => {
  const {
    title,
    description,
    canonical,
    lang = "en",
    dir = "ltr",
    robots = "index, follow",
    ogImage = "https://iaee.eu/images/premium-domains-og.jpg",
    ogType = "website",
    hreflangLinks = [],
    xDefaultUrl,
    breadcrumbs = [],
    products = [],
    faqItems = []
  } = props;

  // Build JSON-LD graph
  const jsonLdGraph: object[] = [
    generateOrganizationSchema(props),
    generateWebSiteSchema(props)
  ];

  // Add breadcrumbs if provided
  if (breadcrumbs.length > 0) {
    jsonLdGraph.push(generateBreadcrumbSchema(breadcrumbs));
  }

  // Add products/items list if provided
  if (products.length > 0) {
    jsonLdGraph.push(generateItemListSchema(products));
  }

  // Add FAQ if provided
  if (faqItems.length > 0) {
    jsonLdGraph.push(generateFAQSchema(faqItems));
  }

  // Add service schema if provided
  const serviceSchema = generateServiceSchema(props);
  if (serviceSchema) {
    jsonLdGraph.push(serviceSchema);
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": jsonLdGraph
  };

  return (
    <Helmet>
      <html lang={lang} dir={dir} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={lang} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Hreflang links */}
      {hreflangLinks.map(({ lang: hrefLang, url }) => (
        <link key={hrefLang} rel="alternate" hrefLang={hrefLang} href={url} />
      ))}
      {xDefaultUrl && (
        <link rel="alternate" hrefLang="x-default" href={xDefaultUrl} />
      )}
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;

// Preset configurations for common page types
export const PREMIUM_DOMAINS_HREFLANG = [
  { lang: "nl", url: "https://iaee.eu/expireddomainnames/nl/verlopen-premium-domeinnamen-kopen-seo-waarde" },
  { lang: "en", url: "https://iaee.eu/expireddomainnames/en/buy-premium-domains-high-authority-seo-value" },
  { lang: "de", url: "https://iaee.eu/expireddomainnames/de/premium-domains-kaufen-hohe-autoritaet-seo-wert" },
  { lang: "fr", url: "https://iaee.eu/expireddomainnames/fr/acheter-domaines-premium-haute-autorite-valeur-seo" },
  { lang: "es", url: "https://iaee.eu/expireddomainnames/es/comprar-dominios-premium-alta-autoridad-valor-seo" },
  { lang: "it", url: "https://iaee.eu/expireddomainnames/it/acquistare-domini-premium-alta-autorita-valore-seo" },
  { lang: "pt", url: "https://iaee.eu/expireddomainnames/pt/comprar-dominios-premium-alta-autoridade-valor-seo" },
  { lang: "pl", url: "https://iaee.eu/expireddomainnames/pl/kup-domeny-premium-wysoki-autorytet-wartosc-seo" },
  { lang: "ja", url: "https://iaee.eu/expireddomainnames/ja/puremiamudomein-kounyuu-seo-kachi" },
  { lang: "zh", url: "https://iaee.eu/expireddomainnames/zh/goumai-gaoji-yuming-seo-jiazhi" },
  { lang: "ar", url: "https://iaee.eu/expireddomainnames/ar/shira-nitaqat-muntahiya-seo" },
  { lang: "tr", url: "https://iaee.eu/expireddomainnames/tr/premium-alan-adi-satin-al-seo-degeri" },
  { lang: "hi", url: "https://iaee.eu/expireddomainnames/hi/premium-domain-kharide-seo-value" }
];

export const PREMIUM_DOMAINS_LEGAL_HREFLANG = [
  { lang: "nl", url: "https://iaee.eu/expireddomainnames/nl/juridische-documenten-premium-domeinen" },
  { lang: "en", url: "https://iaee.eu/expireddomainnames/en/premium-domains-legal-documents" },
  { lang: "de", url: "https://iaee.eu/expireddomainnames/de/rechtliche-dokumente-premium-domains" },
  { lang: "fr", url: "https://iaee.eu/expireddomainnames/fr/documents-juridiques-domaines-premium" },
  { lang: "es", url: "https://iaee.eu/expireddomainnames/es/documentos-legales-dominios-premium" },
  { lang: "it", url: "https://iaee.eu/expireddomainnames/it/documenti-legali-domini-premium" },
  { lang: "pt", url: "https://iaee.eu/expireddomainnames/pt/documentos-legais-dominios-premium" },
  { lang: "pl", url: "https://iaee.eu/expireddomainnames/pl/dokumenty-prawne-domeny-premium" },
  { lang: "ja", url: "https://iaee.eu/expireddomainnames/ja/houritsu-bunsho-premium-domain" },
  { lang: "zh", url: "https://iaee.eu/expireddomainnames/zh/falv-wenjian-gaoji-yuming" },
  { lang: "ar", url: "https://iaee.eu/expireddomainnames/ar/wathaeq-qanuniya-nitaqat-premium" },
  { lang: "tr", url: "https://iaee.eu/expireddomainnames/tr/yasal-belgeler-premium-alan-adi" },
  { lang: "hi", url: "https://iaee.eu/expireddomainnames/hi/kanuni-dastavez-premium-domain" }
];
