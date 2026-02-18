// Premium domain data - English version
// Shared between marketplace listing and individual product pages

export interface PremiumDomain {
  name: string;
  description: string;
  mozScore: number;
  pageAuthority: number;
  linkingDomains: number;
  inboundLinks: string;
  followedLinks: string;
  category: string;
  price: string;
  backlinks: string;
  topBacklinks: string[];
  stripePaymentLink: string;
  image?: string;
  useCases?: string[];
}

// Re-export from EN page - we import the data lazily
// This file serves as the type definition and will be populated
// by extracting data from PremiumDomainsEN.tsx

// Helper to create a URL-safe slug from domain name
export const domainToSlug = (domainName: string): string => {
  return domainName.replace(/\./g, '-');
};

// Helper to find domain by slug
export const findDomainBySlug = (domains: PremiumDomain[], slug: string): PremiumDomain | undefined => {
  return domains.find(d => domainToSlug(d.name) === slug);
};

// Helper to get numeric price from string like "€1495"
export const getNumericPrice = (price: string): string => {
  return price.replace(/[^0-9.]/g, '');
};
