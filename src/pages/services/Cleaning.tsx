import { ServiceDetailPage } from "../../components/services/ServiceDetailPage";
import { SERVICE_DETAILS } from "../../data/serviceDetails";

export default function Cleaning() {
  return (
    <ServiceDetailPage
      detail={SERVICE_DETAILS.cleaning}
      path="/services/cleaning"
    />
  );
}
