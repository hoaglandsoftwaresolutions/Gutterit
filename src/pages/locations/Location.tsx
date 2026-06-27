import { useParams } from "react-router-dom";
import { LocationPage } from "../../components/locations/LocationPage";
import { LOCATIONS } from "../../data/locations";
import NotFound from "../NotFound";

// Single dynamic route that renders any location landing page by slug.
// Registered in App.tsx as /service-areas/:citySlug.
export default function Location() {
  const { citySlug } = useParams();
  const detail = LOCATIONS.find((l) => l.slug === citySlug);
  if (!detail) return <NotFound />;
  return <LocationPage detail={detail} />;
}
