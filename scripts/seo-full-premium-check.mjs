#!/usr/bin/env node
/**
 * Full premium-domain SEO/JSON-LD crawl.
 * Fetches every URL from the premium + domain-products sitemaps, validates:
 *   - HTTP 200
 *   - <meta robots> not noindex
 *   - og:title/description/url/image + twitter:card/title/description/image
 *   - Product JSON-LD has image, description, brand, sku, name, offers.price,
 *     offers.priceCurrency, offers.shippingDetails, offers.hasMerchantReturnPolicy
 * Writes JSON + Markdown reports to /mnt/documents/seo-premium-report.*
 * Exits non-zero if any URL has errors, so CI can alert.
 *
 * Usage: node scripts/seo-full-premium-check.mjs [--limit N] [--concurrency N]
 */
import { writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

const SITE = "https://www.iaee.eu";
const SITEMAPS = [
  `${SITE}/sitemap-premium-domains.xml`,
  `${SITE}/sitemap-domain-products.xml`,
];
const OUT_JSON = "/mnt/documents/seo-premium-report.json";
const OUT_MD = "/mnt/documents/seo-premium-report.md";

const args = Object.fromEntries(process.argv.slice(2).reduce((a, v, i, arr) => {
  if (v.startsWith("--")) a.push([v.slice(2), arr[i + 1]]);
  return a;
}, []));
const LIMIT = Number(args.limit) || 0;
const CONCURRENCY = Math.min(Math.max(Number(args.concurrency) || 8, 1), 20);

const REQUIRED_META = [
  [/property=["']og:title["']/i, "og:title"],
  [/property=["']og:description["']/i, "og:description"],
  [/property=["']og:url["']/i, "og:url"],
  [/property=["']og:image["']/i, "og:image"],
  [/name=["']twitter:card["']/i, "twitter:card"],
  [/name=["']twitter:title["']/i, "twitter:title"],
  [/name=["']twitter:description["']/i, "twitter:description"],
  [/name=["']twitter:image["']/i, "twitter:image"],
];

async function loadUrls() {
  const set = new Set();
  for (const sm of SITEMAPS) {
    const xml = await fetch(sm).then((r) => r.text());
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) set.add(m[1].trim());
  }
  const arr = [...set];
  return LIMIT ? arr.slice(0, LIMIT) : arr;
}

function extractProducts(html) {
  const blocks = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  const out = [];
  for (const m of blocks) {
    try {
      const d = JSON.parse(m[1]);
      const nodes = d["@graph"] ?? [d];
      for (const n of nodes) {
        if (n?.["@type"] === "Product") out.push(n);
        if (n?.["@type"] === "ItemList" && Array.isArray(n.itemListElement)) {
          for (const el of n.itemListElement) if (el?.item?.["@type"] === "Product") out.push(el.item);
        }
      }
    } catch {}
  }
  return out;
}

function auditProduct(p) {
  const errs = [];
  for (const k of ["name", "image", "description", "brand", "sku"]) if (!p[k]) errs.push(`Product.${k}`);
  const o = p.offers;
  if (!o) errs.push("Product.offers");
  else {
    if (!o.price) errs.push("offers.price");
    if (!o.priceCurrency) errs.push("offers.priceCurrency");
    if (!o.shippingDetails) errs.push("offers.shippingDetails");
    if (!o.hasMerchantReturnPolicy) errs.push("offers.hasMerchantReturnPolicy");
  }
  return errs;
}

async function auditUrl(url) {
  const rec = { url, status: 0, errors: [], warnings: [], products: 0 };
  let res;
  try { res = await fetch(url, { redirect: "follow" }); }
  catch (e) { rec.errors.push(`fetch: ${e.message}`); return rec; }
  rec.status = res.status;
  if (res.status !== 200) { rec.errors.push(`HTTP ${res.status}`); return rec; }
  const html = await res.text();

  const robots = html.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["']/i)?.[1] ?? "";
  if (/noindex/i.test(robots)) rec.errors.push("meta robots: noindex");
  for (const [re, label] of REQUIRED_META) if (!re.test(html)) rec.errors.push(`missing ${label}`);

  const products = extractProducts(html);
  rec.products = products.length;
  if (url.includes("/domains/") && !products.length) rec.warnings.push("no Product JSON-LD");
  products.forEach((p, i) => auditProduct(p).forEach((e) => rec.errors.push(`Product[${i}]: missing ${e}`)));
  return rec;
}

async function runPool(items, worker, size) {
  const out = new Array(items.length);
  let i = 0;
  await Promise.all(Array.from({ length: size }, async () => {
    while (i < items.length) {
      const idx = i++;
      out[idx] = await worker(items[idx]);
    }
  }));
  return out;
}

(async () => {
  const urls = await loadUrls();
  console.log(`Auditing ${urls.length} URLs (concurrency=${CONCURRENCY})…`);
  const t0 = Date.now();
  const results = await runPool(urls, auditUrl, CONCURRENCY);
  const durationMs = Date.now() - t0;

  const failed = results.filter((r) => r.errors.length);
  const warned = results.filter((r) => !r.errors.length && r.warnings.length);
  const passed = results.filter((r) => !r.errors.length && !r.warnings.length);

  const report = {
    generatedAt: new Date().toISOString(),
    durationMs,
    total: results.length,
    passed: passed.length,
    warned: warned.length,
    failed: failed.length,
    results,
  };
  await mkdir(dirname(OUT_JSON), { recursive: true });
  await writeFile(OUT_JSON, JSON.stringify(report, null, 2));

  const md = [
    `# Premium Domains SEO/JSON-LD Report`,
    `Generated: ${report.generatedAt} · Duration: ${(durationMs / 1000).toFixed(1)}s`,
    ``,
    `- ✅ Passed: **${passed.length}**`,
    `- ⚠️ Warnings: **${warned.length}**`,
    `- ❌ Failed: **${failed.length}** / ${results.length}`,
    ``,
    failed.length ? `## Failed URLs\n${failed.map((r) => `- \`${r.url}\` — ${r.errors.join("; ")}`).join("\n")}` : `## ✅ No failures`,
    ``,
    warned.length ? `## Warnings\n${warned.map((r) => `- \`${r.url}\` — ${r.warnings.join("; ")}`).join("\n")}` : ``,
  ].join("\n");
  await writeFile(OUT_MD, md);

  console.log(`✅ passed=${passed.length}  ⚠️ warn=${warned.length}  ❌ fail=${failed.length}`);
  console.log(`Report → ${OUT_JSON}\n         ${OUT_MD}`);

  // Optionally POST the report to the store function so the SEO Indexation
  // Report UI can diff the last two runs. Requires SEO_REPORT_STORE_URL and
  // SEO_REPORT_STORE_SECRET (== project's CRON_SECRET) in the environment.
  const storeUrl = process.env.SEO_REPORT_STORE_URL;
  const storeSecret = process.env.SEO_REPORT_STORE_SECRET;
  if (storeUrl && storeSecret) {
    try {
      const r = await fetch(`${storeUrl.replace(/\/$/, "")}/store`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-cron-secret": storeSecret },
        body: JSON.stringify({ secret: storeSecret, report }),
      });
      const data = await r.json();
      console.log(`Stored report id=${data.id ?? "?"} (previous=${data.previous_id ?? "none"})`);
      if (data?.diff?.regressed?.length) console.log(`⚠️ ${data.diff.regressed.length} URLs regressed since previous run`);
      if (data?.diff?.improved?.length) console.log(`✅ ${data.diff.improved.length} URLs improved since previous run`);
    } catch (e) {
      console.warn(`Report store failed: ${e.message}`);
    }
  }

  process.exit(failed.length ? 1 : 0);
})();

