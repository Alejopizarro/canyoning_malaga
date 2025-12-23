import AdventureGallery from "@/components/adventure-gallery";
import AllActivitiesSection from "@/components/all-activities-section";
import BannerCertified from "@/components/banner-certified";
import BannerContact from "@/components/banner-contact";
import BannerTeamBuilding from "@/components/banner-team-building";
import FaqsHome from "@/components/faqs-home";
import HeroHome from "@/components/hero-home";
import ProfessionalGuides from "@/components/professional-guides";
import TopActivitiesHome from "@/components/top-activities-home";
import TrustindexWidget from "@/components/trustindex-widget";
import WhyChoose from "@/components/why-choose";
import { getExcursions } from "@/lib/activities";

export default async function Home() {
  const excursions = await getExcursions();

  return (
    <>
      <HeroHome />
      <TopActivitiesHome />
      <BannerTeamBuilding />
      <AllActivitiesSection excursions={excursions} />
      <WhyChoose />
      <BannerCertified />
      <TrustindexWidget />
      <ProfessionalGuides />
      <BannerContact />
      <FaqsHome />
      <AdventureGallery excursions={excursions} />
    </>
  );
}
