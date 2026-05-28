import { ServiceDetailPage } from "../../components/services/ServiceDetailPage";
import { SERVICE_DETAILS } from "../../data/serviceDetails";

export default function Repair() {
  return (
    <ServiceDetailPage
      detail={SERVICE_DETAILS.repair}
      path="/services/repair"
    />
  );
}
