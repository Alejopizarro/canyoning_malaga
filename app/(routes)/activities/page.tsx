import { Separator } from "@/components/ui/separator";
import { getExcursions } from "@/lib/activities";
import TopActivities from "@/components/top-activities";
import BannerTeamBuilding from "@/components/banner-team-building";
import FaqsHome from "@/components/faqs-home";
import ExcursionsClient from "./excursions-client";

const ExcursionesPage = async () => {
  const excursions = await getExcursions();

  return (
    <div className="pt-20">
      <div className="max-w-[1440px] mx-auto py-4 px-2 sm:py-8 sm:px-24">
        <h1 className="pb-4 text-2xl font-medium">Explore all excursions</h1>
        <Separator />

        <ExcursionsClient excursions={excursions} />
      </div>
      <BannerTeamBuilding />
      <FaqsHome />
    </div>
  );
};

export default ExcursionesPage;
