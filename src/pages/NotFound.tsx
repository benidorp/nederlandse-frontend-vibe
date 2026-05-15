import { useEffect } from "react";

/**
 * 404 handler — signals a permanent (301-equivalent) redirect to the homepage.
 * On the SPA we cannot return an HTTP status, so we:
 *  1. Emit a `prerender-status-code: 301` meta tag for crawlers that respect it.
 *  2. Add a canonical link pointing at the homepage.
 *  3. Use `window.location.replace` so the broken URL is not kept in browser history.
 *
 * The real 301 happens server-side in `public/.htaccess` (ErrorDocument + RewriteRule).
 */
const HOME = "https://www.iaee.eu/";

const NotFound = () => {
  useEffect(() => {
    // Crawler hints
    const status = document.createElement("meta");
    status.name = "prerender-status-code";
    status.content = "301";
    document.head.appendChild(status);

    const loc = document.createElement("meta");
    loc.name = "prerender-header";
    loc.content = `Location: ${HOME}`;
    document.head.appendChild(loc);

    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, follow";
    document.head.appendChild(robots);

    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = HOME;
    document.head.appendChild(canonical);

    window.location.replace(HOME);
  }, []);

  return null;
};

export default NotFound;
