/**
 * Sitemap generation script for IAEE.eu
 * Generates sitemap-marketing.xml for key marketing/SEO pages
 * and updates the sitemap index to include it.
 *
 * Run as part of the build: node scripts/generate-sitemap.mjs
 */

import { writeFileSync, readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL = "https://www.iaee.eu";
const today = new Date().toISOString().split("T")[0];

// Marketing pages with high priority
const marketingPages = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/features", priority: "0.9", changefreq: "monthly" },
  { path: "/pricing", priority: "0.9", changefreq: "monthly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
];

function generateMarketingSitemap() {
  const urls = marketingPages
    .map(
      (page) => `  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

function updateSitemapIndex() {
  const indexPath = resolve(__dirname, "../public/sitemap.xml");
  const existingIndex = readFileSync(indexPath, "utf-8");

  // Check if marketing sitemap is already referenced
  if (existingIndex.includes("sitemap-marketing.xml")) {
    // Update the lastmod date
    return existingIndex.replace(
      /(<loc>https:\/\/www\.iaee\.eu\/sitemap-marketing\.xml<\/loc>\s*<lastmod>)[^<]*/,
      `$1${today}`
    );
  }

  // Add marketing sitemap entry before the closing tag
  const newEntry = `  <sitemap>
    <loc>${BASE_URL}/sitemap-marketing.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`;

  return existingIndex.replace(
    "</sitemapindex>",
    `${newEntry}\n</sitemapindex>`
  );
}

// Generate and write files
const marketingSitemap = generateMarketingSitemap();
writeFileSync(
  resolve(__dirname, "../public/sitemap-marketing.xml"),
  marketingSitemap,
  "utf-8"
);
console.log("✅ Generated sitemap-marketing.xml");

const updatedIndex = updateSitemapIndex();
writeFileSync(
  resolve(__dirname, "../public/sitemap.xml"),
  updatedIndex,
  "utf-8"
);
console.log("✅ Updated sitemap.xml index");
