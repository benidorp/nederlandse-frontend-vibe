import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * AutoSocialMeta
 * --------------
 * Guarantees every route ships complete Open Graph + Twitter Card tags so
 * social previews never fall back to generic site-wide metadata.
 *
 * Strategy:
 *  1. On every route change (and whenever <title>/meta description/canonical
 *     are mutated by react-helmet or page components) we synchronise:
 *       - og:title         <- document.title
 *       - og:description   <- <meta name="description">
 *       - og:url           <- <link rel="canonical"> (absolute) or window URL
 *       - og:image         <- existing og:image (absolutised) or site default
 *       - og:type / og:site_name / og:locale
 *       - twitter:card, twitter:title, twitter:description, twitter:image, twitter:url
 *  2. Tags authored by the page (via react-helmet or hard-coded) win — we
 *     only fill in what's missing or convert relative image URLs to absolute.
 */

const SITE_ORIGIN = "https://www.iaee.eu";
const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/images/premium-domains-og.jpg`;
const SITE_NAME = "IAEE.eu";

type MetaKind = "name" | "property";

function upsertMeta(kind: MetaKind, key: string, value: string) {
  if (!value) return;
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${kind}="${key}"]`
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(kind, key);
    el.setAttribute("data-auto-social", "true");
    document.head.appendChild(el);
  }
  if (el.getAttribute("content") !== value) {
    el.setAttribute("content", value);
  }
}

function readMeta(kind: MetaKind, key: string): string {
  return (
    document.head
      .querySelector<HTMLMetaElement>(`meta[${kind}="${key}"]`)
      ?.getAttribute("content") ?? ""
  );
}

function toAbsolute(url: string): string {
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith("//")) return `https:${url}`;
  if (url.startsWith("/")) return `${SITE_ORIGIN}${url}`;
  return `${SITE_ORIGIN}/${url}`;
}

function getCanonical(): string {
  const link = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]'
  );
  const href = link?.getAttribute("href") ?? "";
  if (href) return toAbsolute(href);
  return `${SITE_ORIGIN}${window.location.pathname}${window.location.search}`;
}

function sync() {
  const title = document.title?.trim();
  const description = readMeta("name", "description");
  const canonical = getCanonical();

  // Open Graph
  if (title) upsertMeta("property", "og:title", title);
  if (description) upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:url", canonical);
  upsertMeta("property", "og:type", readMeta("property", "og:type") || "website");
  upsertMeta("property", "og:site_name", readMeta("property", "og:site_name") || SITE_NAME);
  upsertMeta(
    "property",
    "og:locale",
    readMeta("property", "og:locale") || (document.documentElement.lang || "en").replace("-", "_")
  );

  const existingImg = readMeta("property", "og:image");
  const absImg = toAbsolute(existingImg) || DEFAULT_OG_IMAGE;
  upsertMeta("property", "og:image", absImg);
  upsertMeta("property", "og:image:secure_url", absImg);
  if (!readMeta("property", "og:image:width"))
    upsertMeta("property", "og:image:width", "1200");
  if (!readMeta("property", "og:image:height"))
    upsertMeta("property", "og:image:height", "630");
  if (!readMeta("property", "og:image:alt") && title)
    upsertMeta("property", "og:image:alt", title);

  // Twitter
  upsertMeta(
    "name",
    "twitter:card",
    readMeta("name", "twitter:card") || "summary_large_image"
  );
  if (title) upsertMeta("name", "twitter:title", title);
  if (description) upsertMeta("name", "twitter:description", description);
  upsertMeta("name", "twitter:image", absImg);
  upsertMeta("name", "twitter:url", canonical);
}

const AutoSocialMeta = () => {
  const location = useLocation();

  useEffect(() => {
    // Run after the page has had a chance to set its own title/description.
    const t1 = window.setTimeout(sync, 0);
    const t2 = window.setTimeout(sync, 250);
    const t3 = window.setTimeout(sync, 1000);

    // Re-sync when <head> mutates (react-helmet swaps tags asynchronously).
    const observer = new MutationObserver(() => sync());
    observer.observe(document.head, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["content", "href"],
    });

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      observer.disconnect();
    };
  }, [location.pathname, location.search]);

  return null;
};

export default AutoSocialMeta;
