import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";
import { getAllRoutes, SITE_ORIGIN } from "./seo-routes.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, "..", "dist");
const templatePath = join(distDir, "index.html");

if (!existsSync(templatePath)) {
  console.error(`[prerender] dist/index.html missing — run vite build first`);
  process.exit(1);
}

const template = readFileSync(templatePath, "utf8");

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function fullUrl(path) {
  if (path === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path.replace(/\/+$/, "")}`;
}

const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/images/hero/hero-main.jpg`;

function buildHead(route) {
  const canonical = fullUrl(route.path);
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const ogImage = escapeHtml(route.ogImage ?? DEFAULT_OG_IMAGE);

  const jsonLdBlocks = (route.jsonLd ?? [])
    .map(
      (schema) =>
        `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`,
    )
    .join("\n    ");

  return `<title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${ogImage}" />
    ${jsonLdBlocks}`;
}

function applyHead(html, route) {
  // Replace the <title>...</title> line + the description + canonical with our
  // per-page versions. Strategy: replace the <title>, then strip the
  // pre-existing description/canonical/og/twitter/json-ld so we don't duplicate.
  let out = html;

  // Remove existing description / keywords / canonical / og / twitter meta + json-ld blocks.
  out = out.replace(/<title>[\s\S]*?<\/title>/, "");
  out = out.replace(/<meta\s+name="description"[^>]*\/>/gi, "");
  out = out.replace(/<meta\s+name="keywords"[^>]*\/>/gi, "");
  out = out.replace(/<link\s+rel="canonical"[^>]*\/>/gi, "");
  out = out.replace(/<meta\s+property="og:[^"]+"[^>]*\/>/gi, "");
  out = out.replace(/<meta\s+name="twitter:[^"]+"[^>]*\/>/gi, "");
  out = out.replace(
    /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi,
    "",
  );

  // Inject our head block just before </head>.
  const block = buildHead(route);
  out = out.replace(/<\/head>/, `${block}\n  </head>`);
  return out;
}

function outPathForRoute(routePath) {
  if (routePath === "/") return join(distDir, "index.html");
  // strip leading/trailing slashes
  const clean = routePath.replace(/^\/+/, "").replace(/\/+$/, "");
  return join(distDir, clean, "index.html");
}

const routes = getAllRoutes();
let count = 0;
for (const route of routes) {
  const html = applyHead(template, route);
  const out = outPathForRoute(route.path);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  count++;
}

console.log(`[prerender] wrote ${count} HTML files`);
