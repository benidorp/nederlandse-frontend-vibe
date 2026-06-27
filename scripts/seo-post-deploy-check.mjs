#!/usr/bin/env node
/**
 * Post-deploy SEO/structured-data audit.
 * Fetches a representative set of URLs from www.iaee.eu and verifies:
 *  - HTTP 200
 *  - <meta name="robots"> does not contain "noindex"
 *  - og:title, og:description, og:url, og:image present
 *  - twitter:card, twitter:title, twitter:description, twitter:image present
 *  - For Product JSON-LD: image, description, brand, offers.shippingDetails,
 *    offers.hasMerchantReturnPolicy (the Google Merchant "missing field" set)
 * Exits non-zero (CI alert) on any failure.
 */
const SITE = "https://www.iaee.eu";

const URLS = [
  "/",
  "/expireddomainnames/en/buy-premium-domains-high-authority-seo-value",
  "/expireddomainnames/en/articles",
  "/vat-calculator",
  "/domains/martonecycling-eu",
  "/domains/toulousespaceshow-eu",
  "/domains/eu-asiacentre-eu",
  "/domains/paulsmithmusic-eu",
  "/domains/tabby-eu",
];

const errors = [];
const warnings = [];

const hasMeta = (html, re) => re.test(html);

function checkBasics(url, html) {
  const robots = html.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["']/i)?.[1] ?? "";
  if (/noindex/i.test(robots)) errors.push(`${url}: <meta robots> noindex`);

  const required = [
    [/property=["']og:title["']/i, "og:title"],
    [/property=["']og:description["']/i, "og:description"],
    [/property=["']og:url["']/i, "og:url"],
    [/property=["']og:image["']/i, "og:image"],
    [/name=["']twitter:card["']/i, "twitter:card"],
    [/name=["']twitter:title["']/i, "twitter:title"],
    [/name=["']twitter:description["']/i, "twitter:description"],
    [/name=["']twitter:image["']/i, "twitter:image"],
  ];
  for (const [re, label] of required) {
    if (!hasMeta(html, re)) errors.push(`${url}: missing ${label}`);
  }
}

function checkProductJsonLd(url, html) {
  const blocks = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  const products = [];
  for (const m of blocks) {
    try {
      const data = JSON.parse(m[1]);
      const nodes = data["@graph"] ?? [data];
      for (const n of nodes) if (n?.["@type"] === "Product") products.push(n);
    } catch {}
  }
  if (!products.length) return; // Not a product page
  for (const p of products) {
    const need = ["image", "description", "brand", "name", "sku"];
    for (const k of need) if (!p[k]) errors.push(`${url}: Product missing ${k}`);
    const o = p.offers;
    if (!o) { errors.push(`${url}: Product missing offers`); continue; }
    if (!o.shippingDetails) errors.push(`${url}: offers.shippingDetails missing`);
    if (!o.hasMerchantReturnPolicy) errors.push(`${url}: offers.hasMerchantReturnPolicy missing`);
    if (!o.price || !o.priceCurrency) errors.push(`${url}: offers.price/currency missing`);
  }
}

async function audit(path) {
  const url = SITE + path;
  let res;
  try { res = await fetch(url, { redirect: "follow" }); }
  catch (e) { errors.push(`${url}: fetch failed ${e.message}`); return; }
  if (res.status !== 200) { errors.push(`${url}: HTTP ${res.status}`); return; }
  const html = await res.text();
  checkBasics(url, html);
  checkProductJsonLd(url, html);
}

console.log(`SEO post-deploy check → ${URLS.length} URLs`);
await Promise.all(URLS.map(audit));

if (warnings.length) console.log("\nWARNINGS:\n" + warnings.map(w => " • " + w).join("\n"));
if (errors.length) {
  console.error("\n❌ SEO CHECK FAILED:\n" + errors.map(e => " • " + e).join("\n"));
  process.exit(1);
}
console.log("\n✅ All SEO/OG/Twitter/JSON-LD checks passed");
