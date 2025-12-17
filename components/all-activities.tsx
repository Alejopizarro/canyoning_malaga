import { getExcursions } from "@/lib/activities";
import AllActivitiesSection from "./all-activities-section";

// Server Component - carga los datos directamente en el servidor
export default async function AllActivitiesCarousel() {
  const excursions = await getExcursions();

  return <AllActivitiesSection excursions={excursions} />;
}
