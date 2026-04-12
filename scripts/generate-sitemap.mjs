/**
 * Sitemap generation script for IAEE.eu
 * Generates sitemap XML files for build-managed SEO pages
 * and updates the sitemap index to include them.
 *
 * Run as part of the build: node scripts/generate-sitemap.mjs
 */

import { writeFileSync, readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL = "https://www.iaee.eu";
const today = new Date().toISOString().split("T")[0];

const marketingPages = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/features", priority: "0.9", changefreq: "monthly" },
  { path: "/pricing", priority: "0.9", changefreq: "monthly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
];

const translatedSeoPages = [
  { path: "/af", priority: "0.9", changefreq: "monthly" },
  { path: "/en/af", priority: "0.8", changefreq: "monthly" },
  { path: "/de/af", priority: "0.8", changefreq: "monthly" },
  { path: "/fr/af", priority: "0.8", changefreq: "monthly" },
  { path: "/es/af", priority: "0.8", changefreq: "monthly" },
  { path: "/it/af", priority: "0.8", changefreq: "monthly" },
  { path: "/pt/af", priority: "0.8", changefreq: "monthly" },
  {
    path: "/de/fotografie-rechtsdokumente-agb-datenschutz-urheberrecht-haftungsausschluss",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/fr/photographie-documents-juridiques-cgv-confidentialite-droit-auteur-clause",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/es/fotografia-documentos-legales-terminos-condiciones-privacidad-derechos-autor-aviso-legal",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/it/fotografia-documenti-legali-termini-condizioni-privacy-diritto-autore-disclaimer",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/sv/fotografi-juridiska-dokument-villkor-integritetspolicy-upphovsratt-ansvarsfriskrivning",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/pl/fotografia-dokumenty-prawne-regulamin-prywatnosc-prawa-autorskie-zastrzezenia",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/el/fotografia-nomika-engrafa-oroi-aporitou-pnevmatika-dikaiomata",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/da/fotografi-juridiske-dokumenter-vilkaar-privatlivspolitik-ophavsret-ansvarsfraskrivelse",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/no/fotografi-juridiske-dokumenter-vilkaar-personvern-opphavsrett-ansvarsfraskrivelse",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/ro/fotografie-documente-juridice-termeni-confidentialitate-drepturi-autor-declinare",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/bg/fotografiya-pravni-dokumenti-obshti-usloviya-poveritelnost-avtorski-prava",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/fi/valokuvaus-oikeudelliset-asiakirjat-kayttoehdot-tietosuoja-tekijanoikeus-vastuuvapaus",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/ru/fotografiya-yuridicheskie-dokumenty-usloviya-konfidencialnost-avtorskie-prava",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/zh/sheying-falv-wenjian-tiaokuan-yinsi-banquan-baohu-mianze",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/hi/photography-kanooni-dastavez-niyam-gopyata-copyright-suraksha",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/ja/shashin-houteki-bunsho-riyoukiyaku-privacy-chosakuken-hogo",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/ar/taswir-wathaeq-qanuniya-shurut-khususiya-huquq-nashr-ikhla-masuliya",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/ko/sajin-beobjeok-munseo-iyongyakgwan-gaeinjeongbo-jeojakkwon-boho",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/cs/fotografie-pravni-dokumenty-podminky-soukromi-autorska-prava-prohlaseni",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/hu/fotografia-jogi-dokumentumok-feltetelek-adatvedelem-szerzoi-jog-felelossegkizaras",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/uk/fotografiya-yurydychni-dokumenty-umovy-konfidentsijnist-avtorski-prava",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/sk/fotografia-pravne-dokumenty-podmienky-sukromie-autorske-prava-vyhlasenie",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/hr/fotografija-pravni-dokumenti-uvjeti-privatnost-autorska-prava-odricanje",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/sr/fotografija-pravni-dokumenti-uslovi-privatnost-autorska-prava-odricanje",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/sl/fotografija-pravni-dokumenti-pogoji-zasebnost-avtorske-pravice-omejitev",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/tr/fotograf-yasal-belgeler-sartlar-gizlilik-telif-hakki-sorumluluk-reddi",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/de/gemeinnuetzige-organisation-rechtliche-dokumente-spendenbedingungen-datenschutz",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/fr/association-documents-juridiques-conditions-don-politique-confidentialite",
    priority: "0.8",
    changefreq: "monthly",
  },
];

const generatedSitemaps = [
  { filename: "sitemap-marketing.xml", pages: marketingPages },
  { filename: "sitemap-translated-pages.xml", pages: translatedSeoPages },
];

function generateUrlSet(pages) {
  const urls = pages
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

function upsertSitemapEntry(indexXml, filename) {
  const loc = `${BASE_URL}/${filename}`;
  const locPattern = new RegExp(
    `(<loc>${loc.replaceAll(".", "\\.")}<\\/loc>\\s*<lastmod>)[^<]*`,
  );

  if (indexXml.includes(filename)) {
    return indexXml.replace(locPattern, `$1${today}`);
  }

  const newEntry = `  <sitemap>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`;

  return indexXml.replace(
    "</sitemapindex>",
    `${newEntry}\n</sitemapindex>`,
  );
}

function updateSitemapIndex() {
  const indexPath = resolve(__dirname, "../public/sitemap.xml");
  return generatedSitemaps.reduce(
    (indexXml, { filename }) => upsertSitemapEntry(indexXml, filename),
    readFileSync(indexPath, "utf-8"),
  );
}

for (const { filename, pages } of generatedSitemaps) {
  writeFileSync(
    resolve(__dirname, `../public/${filename}`),
    generateUrlSet(pages),
    "utf-8",
  );
  console.log(`✅ Generated ${filename}`);
}

const updatedIndex = updateSitemapIndex();
writeFileSync(
  resolve(__dirname, "../public/sitemap.xml"),
  updatedIndex,
  "utf-8"
);
console.log("✅ Updated sitemap.xml index");
