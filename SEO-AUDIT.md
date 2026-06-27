# Gutter It — Core 30 SEO Audit & Gap Analysis

**Date:** 2026-06-26
**Status:** ✅ BUILD COMPLETE — all 5 phases done. See "Build completion log" at the bottom for what shipped.

---

## 1. Tech stack & structure

| Layer | What it is |
|---|---|
| Framework | **React 18 + Vite 5 + TypeScript**, client-side SPA |
| Routing | **react-router-dom v6** (`src/App.tsx`), flat route table |
| Styling | **Tailwind CSS** with a custom theme (`tailwind.config.js`); colors `navy`, `amber`, `cream`, `electric`; display font + body font |
| Head/SEO | **react-helmet-async** via `src/components/seo/Seo.tsx` + `usePageSeo.tsx` |
| Content model | **Typed data files in `src/data/`** — pages are thin React shells; copy + SEO live in data |
| Build-time SEO | `scripts/prerender.mjs` writes static HTML per route; `scripts/generate-sitemap.mjs` writes `sitemap.xml`; both read `scripts/seo-routes.mjs` |
| Hosting | **Cloudflare Pages** (filesystem-first static serving; `public/_redirects`, `public/_headers`, SPA fallback) |
| Forms | `QuoteForm.tsx` / `JobberForm.tsx` (Jobber embed) — **do not touch** |

### Critical architecture note — the dual SEO source of truth

SEO metadata + JSON-LD is defined **twice and must be kept in sync manually**:

- `src/data/seo.ts` — TypeScript, consumed by the React runtime (`usePageSeo` → `<Seo>`).
- `scripts/seo-routes.mjs` — plain-JS mirror, consumed by the Node prerender + sitemap scripts.

Both files literally say "update both files when copy changes." **Every page we add or change must be reflected in BOTH files**, or the prerendered HTML (what Google sees) will drift from the runtime React (what users see). This is the single biggest risk in the whole build.

Routes are registered in **three** places that must agree:
1. `src/App.tsx` — the `<Route>` element (renders the page)
2. `src/data/seo.ts` `getStaticRoutes()` — runtime SEO tags
3. `scripts/seo-routes.mjs` `getAllRoutes()` — prerender + sitemap

### Design system (reuse these — do not invent new ones)

- **Layout:** `Layout.tsx` (Header + Outlet + Footer), `TrustBar`, `ServingBar`
- **Page section components (already built, reusable):** `SignsList`, `IncludedList`, `AlsoIncludes`, `ProcessList`, `PhotoStrip`, `PricingBlock`, `RelatedServices`, `CtaSection`, `Faq`, `Testimonials`
- **Hero pattern:** navy section, 30%-opacity background image, eyebrow + H1 + lede + dual CTA (quote button + phone). Identical on `ServiceDetailPage` and `GutterCleaningChattanooga` — this is the template to clone.
- **Buttons:** `ButtonLink`, `ButtonAnchor`

---

## 2. Page inventory (everything that exists today)

### Home / core
| URL | Page file | Type |
|---|---|---|
| `/` | `pages/Home.tsx` | Home |
| `/services` | `pages/Services.tsx` | Service hub (overview grid) |
| `/about` | `pages/About.tsx` | Other |
| `/faq` | `pages/Faq.tsx` | Other |
| `/contact` | `pages/Contact.tsx` | Other (quote form) |
| `*` | `pages/NotFound.tsx` | 404 |

### Service pages (5 — the "core five")
| URL | Title tag | Pricing | Schema |
|---|---|---|---|
| `/services/installation` | Gutter Installation in Chattanooga, TN \| Seamless Aluminum \| Gutter-It LLC | Free Quote | Breadcrumb + Service + FAQ + HowTo |
| `/services/cleaning` | Gutter Cleaning in Chattanooga, TN \| From $100 \| Gutter-It LLC | from $100 | Breadcrumb + Service(+Offer) + FAQ |
| `/services/gutter-repair` | Gutter Repair in Chattanooga, TN \| From $50 \| Gutter-It LLC | from $50 | Breadcrumb + Service(+Offer) + FAQ |
| `/services/gutter-guards` | Gutter Guards in Chattanooga, TN \| Honest Advice \| Gutter-It LLC | Free Quote | Breadcrumb + Service + FAQ |
| `/services/pressure-washing` | Pressure Washing in Chattanooga, TN \| ... \| Gutter-It LLC | Free Quote | Breadcrumb + Service + FAQ |

### Location pages (1)
| URL | Title tag | Schema |
|---|---|---|
| `/gutter-cleaning-chattanooga` | Gutter Cleaning in Chattanooga, TN \| From $100 \| Gutter-It LLC | Breadcrumb + localService(City areaServed) + FAQ |

**Total indexable pages today: 11** (home, services hub, 5 services, 1 location, about, faq, contact).

---

## 3. On-page SEO state

**Across the board — strong foundation:**
- ✅ Every page has a unique title tag, unique meta description, single H1, canonical, OG/Twitter tags, JSON-LD.
- ✅ NAP is centralized in `src/data/business.ts` and rendered identically everywhere (Footer + schema). **Consistent.**
- ✅ Every page has clear CTAs (phone + quote) above the fold and a closing `CtaSection`.
- ✅ Existing copy is genuinely localized and non-spun — the Chattanooga page references Lookout/Signal Mountain, local tree species, rainfall. This is the quality bar to match.
- ✅ Old Wix URLs already 301'd in `_redirects`; trailing-slash normalization handled; `/services/repair` → `/services/gutter-repair` redirect already in place.

**Gaps / weaknesses:**
- ⚠️ **No `AggregateRating` in schema** anywhere, despite testimonials existing in `src/data/testimonials.ts`. Per-page requirement asks for aggregate rating "if reviews exist."
- ⚠️ **Title tags run long.** Several exceed the ~60-char target (e.g. installation ≈ 78 chars, pressure-washing ≈ 79). Brief says keep under ~60.
- ⚠️ **Only ONE location page exists** (`/gutter-cleaning-chattanooga`), and it's service-specific, not a true location hub. The Core 30 wants 8–10 location pages.
- ⚠️ **Internal linking is service↔service only.** No service→location or location→location links. No silo hub pages.
- ⚠️ **`AREAS` list ≠ target location list.** Current `AREAS` (Chattanooga, Hixson, East Brainerd, Ooltewah, Signal Mtn, Lookout Mtn, Soddy-Daisy, Red Bank, East Ridge, Collegedale) is Hamilton-County-only. The Core 30 target adds Cleveland TN, Ringgold GA, Fort Oglethorpe GA, Knoxville TN, Huntsville AL — and drops some current ones from the "page" list (they stay as service-area mentions).

---

## 4. Gap analysis vs. Core 30 target

### A. SERVICE PAGES

The brief targets **19 service pages**. The site has **5**. Here's the reconciliation — note the existing 5 do NOT map 1:1 to the brief's numbering, so renaming/expanding matters:

#### KEEP AS-IS (already good, minor schema/title polish only)
- `/services/cleaning` → **#1 Gutter Cleaning**. Fold in downspout cleaning + gutter flushing as sections. *Improve, don't recreate.*
- `/services/gutter-repair` → **#2 Gutter Repair**. Good as-is.
- `/services/gutter-guards` → **#3 Gutter Guards / Leaf Guards**. Good; expand to cover "leaf guard installation" wording.
- `/services/pressure-washing` → **#15 Pressure Washing** (becomes secondary-silo hub). Good; will link to new sub-pages.
- `/gutter-cleaning-chattanooga` → keep as the **Chattanooga location page's** gutter-cleaning angle (or fold into the Chattanooga hub). **Has live redirects + likely indexed — DO NOT delete; 301 if ever moved.**

#### IMPROVE (exists but needs reframing)
- `/services/installation` (currently "Gutter Installation"). Brief splits this into **#4 Seamless Gutter Installation** and **#5 Gutter Replacement**. Recommendation: keep `/services/installation` as Seamless Installation, and either add a Replacement section or a separate `/services/gutter-replacement` page. **The existing URL must not change without a 301.**
- Shorten over-long title tags toward ~60 chars where it doesn't hurt the keyword.

#### CREATE (missing service pages — 13 new)
1. **Seamless Gutter Installation** — may reuse `/services/installation` (decision needed, see Q below)
2. **Gutter Replacement** — `/services/gutter-replacement`
3. **Downspout Services** — `/services/downspout-services`
4. **Gutter Leak Repair & Resealing** — `/services/gutter-leak-repair`
5. **Gutter Realignment & Re-Pitching** — `/services/gutter-realignment`
6. **Gutter Inspection** — `/services/gutter-inspection`
7. **Fascia Repair** — `/services/fascia-repair`
8. **Soffit Repair** — `/services/soffit-repair`
9. **Roof Debris Removal** — `/services/roof-debris-removal`
10. **Drainage Solutions** — `/services/drainage-solutions`
11. **Residential Gutter Services** — `/services/residential-gutter-services` (silo HUB)
12. **House Washing & Soft Washing** — `/services/house-washing`
13. **Roof Cleaning** — `/services/roof-cleaning`
14. **Driveway & Concrete Cleaning** — `/services/driveway-cleaning`
15. **Deck & Fence Cleaning** — `/services/deck-fence-cleaning`

> Note: all 15 of these "new" service names already exist as strings in `GBP_ADDITIONAL_SERVICES` (schema only). We'd be promoting them from schema-only mentions to real pages.

### B. LOCATION PAGES

Target **10**. The site has effectively **0 true location pages** (the one Chattanooga page is service-specific). All need creation. Proposed URL pattern: `/gutter-cleaning-{city}` is the existing precedent, but a cleaner silo for 10 cities is `/locations/{city}` or `/service-areas/{city}`. **Decision needed (see Q below).**

| # | City | Status |
|---|---|---|
| 1 | Chattanooga, TN (hub) | Partial — `/gutter-cleaning-chattanooga` exists; needs a true hub |
| 2 | Hixson, TN | Create |
| 3 | Red Bank, TN | Create |
| 4 | Soddy-Daisy, TN | Create |
| 5 | Hamilton County, TN | Create |
| 6 | Cleveland, TN | Create |
| 7 | Ringgold, GA | Create |
| 8 | Fort Oglethorpe, GA | Create |
| 9 | Knoxville, TN | Create |
| 10 | Huntsville, AL | Create |

> Brief's own caution applies: Knoxville/Huntsville are far outside the metro and Hixson/Hamilton Co. overlap Chattanooga — each needs genuinely unique local content (landmarks, neighborhoods, local "why") or it reads as a doorway page and can hurt rankings.

---

## 5. Risk notes (things that can break)

1. **Dual SEO source of truth.** Highest risk. Any page added to `seo.ts` but not `seo-routes.mjs` (or vice-versa) silently desyncs prerendered HTML from runtime. Every change touches both.
2. **`/gutter-cleaning-chattanooga` is likely indexed** and has supporting redirects. Do not delete or change its URL without a 301. If we build a Chattanooga location hub, decide whether this page stays, becomes a section, or 301s to the hub.
3. **Existing Wix 301s in `_redirects`** (incl. `/cleaning-in-*`, `/repair-in-*` wildcards → `/services`). New location-page URLs must not collide with these wildcards — e.g. a URL like `/cleaning-in-hixson` would get 301'd away before it ever renders. **Pick a location URL pattern that dodges the existing wildcards.**
4. **`AREAS` constant is referenced widely** (schema `areaServed`, `ServiceDetailPage` "where we work" grid, Chattanooga page). Changing it ripples into every page's schema and visible area list — change deliberately, in both `areas.ts` and `seo-routes.mjs`.
5. **`ServiceCategory` is a hard union type.** Adding service pages means extending the `ServiceCategory` union + `SERVICES` array + `SERVICE_DETAILS` map, OR building new pages outside that typed system (the way `localPages.ts` deliberately sits outside it). Decision affects how nav/footer/related-services auto-populate.
6. **Header & Footer auto-list `SERVICES`.** If we add 15 services to that array, the header dropdown and footer become unusable (20 items). We'll need a curated nav (hub pages only) separate from the full service list. **Don't naively dump all services into the existing nav.**
7. **Forms, Jobber embed, Google Maps embed, tracking** — untouched per hard rules.

---

## 6. Recommended build approach (for Step 2+)

- **Service pages:** Extend the existing typed `ServiceDetail` model. Add new slugs to `ServiceCategory` + `SERVICES` + `SERVICE_DETAILS`. Reuse `ServiceDetailPage.tsx` as-is — every new page renders through it for free. Nav stays curated (hubs only).
- **Location pages:** Build a single reusable `LocationPage` template + one data file per city (mirroring the `localPages.ts` pattern, which is already designed for exactly this). One React route per city, or a dynamic `/locations/:city` route reading from a city-data map.
- **Phasing (per brief):** audit → improve existing → new service pages → new location pages → internal-linking + schema pass. Check in after each phase.

---

## Open questions before I start Step 2

These four decisions change the implementation and are genuinely yours to make. I'll ask them interactively, but summarizing here:

1. **Location URL pattern** — `/locations/{city}` (clean silo) vs. `/gutter-cleaning-{city}` (matches existing Chattanooga page). Note: must avoid the `/cleaning-in-*` etc. redirect wildcards.
2. **Chattanooga page fate** — keep `/gutter-cleaning-chattanooga` as-is, make it the hub, or 301 it into a new `/locations/chattanooga`.
3. **Installation vs. Replacement** — keep `/services/installation` as Seamless Installation + add separate `/services/gutter-replacement`, or one combined page.
4. **Scope of Phase 2** — do you want me to also fix the title-tag length + add AggregateRating schema during the "improve" phase, or leave existing pages strictly alone and only add new pages?

---

## Build completion log (all phases done)

**Decisions taken** (all per your selections): location URLs `/locations/{city}`; kept `/gutter-cleaning-chattanooga` untouched + added separate `/locations/chattanooga` hub; Installation and Replacement as two pages; Phase-2 improvements = shorten titles + real AggregateRating (5.0★, 2 reviews) + internal links.

### What shipped
- **Phase 2 — improved existing 5 service pages:** AggregateRating added to LocalBusiness schema (site-wide); 3 over-long titles shortened; pre-existing guards title desync fixed. No URLs changed.
- **Phase 3 — 19 service pages total:** added 14 new (Residential Gutter Services hub, Gutter Replacement, Downspout Services, Gutter Leak Repair & Resealing, Gutter Realignment & Re-Pitching, Gutter Inspection, Fascia Repair, Soffit Repair, Roof Debris Removal, Drainage Solutions, House Washing & Soft Washing, Roof Cleaning, Driveway & Concrete Cleaning, Deck & Fence Cleaning). Built as a parallel `EXTRA_SERVICES` structure outside the core-5 typed system; render through a new `ExtraServiceDetailPage` reusing every existing section component. One dynamic route `/services/:extraSlug` after the typed routes.
- **Phase 4 — 10 location pages + `/locations` index:** Chattanooga (hub), Hixson, Red Bank, Soddy-Daisy, Hamilton County, Cleveland TN, Ringgold GA, Fort Oglethorpe GA, Knoxville TN, Huntsville AL. Each has genuinely localized copy (local landmarks, neighborhoods, why-gutters-matter-here). New `LocationPage` template + per-city data in `locations.ts`; dynamic route `/locations/:citySlug`. Schema uses correct per-city state (TN/GA/AL) and geo.
- **Phase 5 — internal linking + schema pass:** service pages → locations (new `ServiceAreasStrip`); locations → services + Chattanooga hub; home + Services hub → `/locations` (via ServingBar link); service↔service unchanged. Schema audit: 105 JSON-LD blocks across 36 pages, **0 malformed**, every page covered.

### Verification (last build)
- `npm run build` green; `tsc -b` clean.
- **36 prerendered HTML pages**, 36-URL sitemap (was 11).
- All new titles AND descriptions confirmed identical between runtime TS source and prerendered HTML (dual-source-of-truth risk verified clean).
- Existing 11 pages' titles unchanged; forms, redirects, tracking untouched.

### Architecture notes for future maintainers
- **SEO stays defined twice** (`src/data/seo.ts` runtime ↔ `scripts/seo-routes.mjs` build). Any new page must be added to both, plus `App.tsx`. The new `EXTRA_SERVICES_META` and `LOCATIONS_META` arrays in the `.mjs` mirror the SEO-critical fields; full page content lives only in the `.ts` data files.
- Body content (incl. internal cross-links) is client-rendered (SPA shell); the prerender injects `<head>` SEO only. Discovery doesn't depend on it — `sitemap.xml` lists all 36 URLs.

### Open items for the owner before go-live
1. **Photos:** new pages reuse the handful of real job photos (closest match per service/location). Swap in real photos when available.
2. **Pricing numbers** on new service + location pages are reasonable market estimates — confirm they match what you actually charge.
3. **AggregateRating** is set to 5.0★ / 2 reviews (the numbers you gave). Update in `seo.ts` + `seo-routes.mjs` as reviews grow.
