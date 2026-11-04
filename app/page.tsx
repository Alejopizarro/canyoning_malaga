import type { Metadata } from "next";
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
import LatestBlogPosts from "@/components/latest-blog-posts";
import AdventureGallery from "@/components/adventure-gallery";
import {
  jsonLdPostalAddress,
  siteConfig,
  socialUrls,
} from "@/lib/site-config";

const description =
  "Canyoning, hiking & kayak tours near Marbella with certified local guides. Small groups, photos included, from €40. Book online.";

export const metadata: Metadata = {
  description,
  openGraph: {
    description,
  },
  twitter: {
    description,
  },
  alternates: {
    canonical: "/",
  },
};

// ─── JSON-LD Structured Data ────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "SportsActivityLocation"],
      "@id": `${siteConfig.url}/#business`,
      name: "TUUR Adventure Experts",
      url: `${siteConfig.url}/`,
      image: `${siteConfig.url}/logo-tuur.webp`,
      logo: `${siteConfig.url}/logo-tuur.webp`,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        ...jsonLdPostalAddress,
        // San Pedro de Alcántara is a district of the Marbella municipality.
        streetAddress: `${siteConfig.address.street}, ${siteConfig.address.locality}`,
        addressLocality: "Marbella",
      },
      areaServed: ["Marbella", "Benahavís", "Costa del Sol", "Málaga"].map(
        (name) => ({ "@type": "Place", name }),
      ),
      sameAs: socialUrls,
      priceRange: "€€",
    },
  ],
};

export default async function Home() {
  const excursions = await getExcursions();
  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroParallaxSection />
      <TopActivitiesHome />
      <BannerTeamBuilding />
      <AllActivitiesSection excursions={excursions} />
      <WhyChoose />
      <BannerCertified />
      <ProfessionalGuides />
      <BannerContact />
      <LatestBlogPosts />
      <FaqsHome />
      <AdventureGallery excursions={excursions} />
    </main>
  );
}
