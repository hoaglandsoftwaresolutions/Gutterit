import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { getAllRoutes, SITE_ORIGIN } from "./seo-routes.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const today = new Date().toISOString().slice(0, 10);

const routes = getAllRoutes();
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((r) => {
    const loc =
      r.path === "/"
        ? `${SITE_ORIGIN}/`
        : `${SITE_ORIGIN}${r.path.replace(/\/+$/, "")}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq ?? "monthly"}</changefreq>
    <priority>${(r.priority ?? 0.7).toFixed(1)}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

const out = resolve(__dirname, "..", "public", "sitemap.xml");
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, xml);
console.log(`[sitemap] wrote ${routes.length} URLs to ${out}`);
