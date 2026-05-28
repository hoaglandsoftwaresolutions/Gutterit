import { ServiceDetailPage } from "../../components/services/ServiceDetailPage";
import { SERVICE_DETAILS } from "../../data/serviceDetails";

export default function GutterGuards() {
  return (
    <ServiceDetailPage
      detail={SERVICE_DETAILS["gutter-guards"]}
      path="/services/gutter-guards"
    />
  );
}
