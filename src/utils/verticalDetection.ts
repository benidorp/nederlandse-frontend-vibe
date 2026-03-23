/**
 * Detects the vertical ID from the current URL path.
 * Returns null if the page doesn't belong to a known vertical.
 */
export function detectVerticalFromPath(path: string): string | null {
  // Nonprofit
  if (path.includes("nonprofit") || path.includes("gemeinnuetzige") || path.includes("association-documents-juridiques")) {
    return "nonprofit";
  }
  // Photography
  if (path.includes("photo") || path.includes("foto") || path.includes("valokuvaus") || path.includes("sheying") || path.includes("sajin") || path.includes("shashin") || path.includes("taswir")) {
    return "photography";
  }
  // Premium Domains
  if (path.includes("expireddomainnames") || path.includes("premium-dom")) {
    return "premium-domains";
  }
  // Legal docs / Affiliate
  if (path.includes("/af") || path.includes("affiliate") || path.includes("pravni-dokumenti") || path.includes("dokumenty-prawne") || path.includes("documents-juridiques")) {
    return "legal-docs";
  }
  // VAT Calculator
  if (path.includes("vat") || path.includes("btw") || path.includes("mwst") || path.includes("tva")) {
    return "vat-calculator";
  }
  return null;
}

/**
 * Detects the language from the URL path.
 */
export function detectLangFromPath(path: string): string | null {
  // Check for /xx/ prefix pattern (2-letter lang codes)
  const match = path.match(/^\/([a-z]{2})\//);
  if (match) return match[1];
  
  // Check for /zh/ specifically
  if (path.startsWith("/zh/")) return "zh";
  
  // English pages typically have no prefix
  // Check some known English patterns
  if (path.includes("nonprofit-charity") || path.includes("photography-legal") || path.includes("/en/")) return "en";
  if (path.includes("buy-premium-domains")) return "en";
  
  return null;
}
