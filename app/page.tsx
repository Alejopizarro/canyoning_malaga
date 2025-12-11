import AdventureGallery from "@/components/adventure-gallery";
import AllActivitiesCarousel from "@/components/all-activities";
import BannerCertified from "@/components/banner-certified";
import BannerContact from "@/components/banner-contact";
import BannerTeamBuilding from "@/components/banner-team-building";
import FaqsHome from "@/components/faqs-home";
import ParallaxHero from "@/components/hero-home";
import ProfessionalGuides from "@/components/professional-guides";
import WhyChoose from "@/components/why-choose";

export default function Home() {
  return (
    <>
      <ParallaxHero />
      <BannerTeamBuilding />
      <AllActivitiesCarousel />
      <div className="relative z-10">
        <WhyChoose />
        <BannerCertified />
        <ProfessionalGuides />
        <BannerContact />
        <FaqsHome />
        <AdventureGallery />
      </div>
    </>
  );
}
