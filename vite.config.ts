import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "@prerenderer/rollup-plugin";

// Key SEO pages to prerender at build time (generates static HTML)
const SEO_ROUTES = [
  "/",
  "/features",
  "/pricing",
  "/about",
  "/contact",
  "/blog",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode !== "development" &&
      prerender({
        routes: SEO_ROUTES,
        renderer: "@prerenderer/renderer-puppeteer",
        rendererOptions: {
          renderAfterTime: 3000,
          headless: true,
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
        },
        postProcess(renderedRoute) {
          // Fix URLs: replace localhost references with production URL
          renderedRoute.html = renderedRoute.html
            .replace(
              /(https?:\/\/)?(localhost|127\.0\.0\.1)(:\d+)?/gi,
              "https://www.iaee.eu"
            );
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
