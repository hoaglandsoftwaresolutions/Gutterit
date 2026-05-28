import { ServiceDetailPage } from "../../components/services/ServiceDetailPage";
import { SERVICE_DETAILS } from "../../data/serviceDetails";

export default function PressureWashing() {
  return (
    <ServiceDetailPage
      detail={SERVICE_DETAILS["pressure-washing"]}
      path="/services/pressure-washing"
    />
  );
}
