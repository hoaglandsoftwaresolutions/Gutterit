import { ServiceDetailPage } from "../../components/services/ServiceDetailPage";
import { SERVICE_DETAILS } from "../../data/serviceDetails";

export default function Installation() {
  return (
    <ServiceDetailPage
      detail={SERVICE_DETAILS.installation}
      path="/services/installation"
    />
  );
}
