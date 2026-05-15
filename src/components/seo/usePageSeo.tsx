import { Seo } from "./Seo";
import {
  SITE_ORIGIN,
  getAllRoutes,
  type PageSeo,
} from "../../data/seo";

const routeIndex: Map<string, PageSeo> = new Map(
  getAllRoutes().map((r) => [normalize(r.path), r]),
);

function normalize(p: string) {
  if (p === "/") return "/";
  return p.replace(/\/$/, "");
}

export function PageSeoTags({ path }: { path: string }) {
  const key = normalize(path);
  const data = routeIndex.get(key);
  if (!data) return null;

  const canonical =
    data.path === "/"
      ? `${SITE_ORIGIN}/`
      : `${SITE_ORIGIN}${data.path.endsWith("/") ? data.path : data.path + "/"}`;

  return (
    <Seo
      title={data.title}
      description={data.description}
      canonical={canonical}
      ogImage={data.ogImage}
      jsonLd={data.jsonLd}
    />
  );
}
