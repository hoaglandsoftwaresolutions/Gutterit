import { useLocation, useParams } from "react-router-dom";
import { ExtraServiceDetailPage } from "../../components/services/ExtraServiceDetailPage";
import { EXTRA_SERVICES } from "../../data/extraServices";
import NotFound from "../NotFound";

// Renders any extended (Core-30) service page. The silo is derived from the
// URL path; the slug is the child param, or — on a hub route with no param —
// the silo's hub slug. The lookup filters by silo so a cross-silo URL (e.g.
// /exterior-cleaning/gutter-replacement) correctly 404s instead of rendering
// the wrong page.
const HUB_SLUG = {
  gutters: "residential-gutter-services",
  exterior: "exterior-cleaning",
} as const;

export default function ExtraService() {
  const { childSlug } = useParams();
  const { pathname } = useLocation();
  const silo = pathname.startsWith("/exterior-cleaning") ? "exterior" : "gutters";
  const slug = childSlug ?? HUB_SLUG[silo];

  const detail = EXTRA_SERVICES.find((s) => s.slug === slug && s.silo === silo);
  if (!detail) return <NotFound />;
  return <ExtraServiceDetailPage detail={detail} />;
}
