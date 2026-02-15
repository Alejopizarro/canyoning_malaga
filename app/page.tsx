import { getExcursions } from "@/lib/activities";
import HeroParallaxSection from "./(routes)/hero/components/home-parallax";

import TopActivitiesHome from "@/components/top-activities-home";
import BannerTeamBuilding from "@/components/banner-team-building";
import AllActivitiesSection from "@/components/all-activities-section";
import WhyChoose from "@/components/why-choose";
import BannerCertified from "@/components/banner-certified";
import ProfessionalGuides from "@/components/professional-guides";
import BannerContact from "@/components/banner-contact";
import FaqsHome from "@/components/faqs-home";
import AdventureGallery from "@/components/adventure-gallery";

export default async function Home() {
  const excursions = await getExcursions();
  return (
    <main className="min-h-screen">
      <HeroParallaxSection />
      <TopActivitiesHome />
      <BannerTeamBuilding />
      <AllActivitiesSection excursions={excursions} />
      <WhyChoose />
      <BannerCertified />
      <ProfessionalGuides />
      <BannerContact />
      <FaqsHome />
      <AdventureGallery excursions={excursions} />
    </main>
  );
}
