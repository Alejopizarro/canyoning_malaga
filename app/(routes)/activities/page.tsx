import { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import { getExcursions } from "@/lib/activities";
import BannerTeamBuilding from "@/components/banner-team-building";
import FaqsHome from "@/components/faqs-home";
import ExcursionsClient from "./excursions-client";
import { ActivityBookingForm } from "@/components/activity-booking-form";

const ExcursionesPage = async () => {
  const excursions = await getExcursions();

  return (
    <div className="pt-20 py-8">
      <div className="max-w-[1440px] mx-auto py-8 px-2 sm:py-8 sm:px-24">
        <h1 className="pb-4 text-2xl font-bold">Explore All Excursions</h1>
        <Separator />

        <Suspense>
          <ExcursionsClient excursions={excursions} />
        </Suspense>
      </div>
      <BannerTeamBuilding />
      <FaqsHome />
      <div
        id="form-section"
        className="max-w-3xl py-8 mx-auto flex flex-col items-center text-center space-y-4 px-4"
      >
        <h2 className="text-3xl font-semibold">
          Your activity is not available?
        </h2>
        <p className="text-gray-600 mb-6">
          Leave us your details and we will contact you when we have news about
          this activity or to offer you similar options.
        </p>
        <ActivityBookingForm activityName="General Excursions Inquiry" />
      </div>
    </div>
  );
};

export default ExcursionesPage;
