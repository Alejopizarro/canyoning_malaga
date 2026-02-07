import TopActivitiesHome from "@/components/top-activities-home";
import HeroParallaxSection from "./components/home-parallax";
import TransitionLayer from "./components/transition-layer";
import TrustindexWidget from "@/components/trustindex-widget";
import BannerTeamBuilding from "@/components/banner-team-building";
import AllActivitiesSection from "@/components/all-activities-section";
import { getExcursions } from "@/lib/activities";
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
      <TransitionLayer />
      <TopActivitiesHome />
      {/* <div className="-mt-[35vh] bg-background z-20 relative">
        <TrustindexWidget />
      </div> */}
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
