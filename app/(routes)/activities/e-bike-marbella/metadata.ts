import { Metadata } from "next";
import { activityBreadcrumbJsonLd } from "@/lib/seo";
import {
  jsonLdPostalAddress,
  siteConfig,
  socialUrls,
} from "@/lib/site-config";
import {
  eBikeMarbellaImages,
  eBikeMarbellaMainImage,
} from "@/lib/e-bike-marbella-images";
import { Faq } from "../components/faqs";

// ─── SEO Metadata ───────────────────────────────────────────────────────────

const title = "E-Bike Tour Marbella to Istán – White Villages | From €79";
const description =
  "Guided e-bike tour from Marbella to Istán through Sierra Blanca. 4 hours, moderate level, ages 14+. High-end e-bikes, guide, photos and a tapa stop.";

const ogImage = `${siteConfig.url}/e-bike-marbella-og.webp`;
const photos = [eBikeMarbellaMainImage, ...eBikeMarbellaImages.slice(0, 3)].map(
  (image) => `${siteConfig.url}${image.src}`,
);

export const eBikeMarbellaMetadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.tuuradventure.com/activities/e-bike-marbella",
  },
  openGraph: {
    title,
    description,
    url: "https://www.tuuradventure.com/activities/e-bike-marbella",
    siteName: "TUUR Canyoning Malaga",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "E-Bike tour from Marbella to Istán through Sierra Blanca",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── FAQs ───────────────────────────────────────────────────────────────────

export const eBikeMarbellaFaqs: Faq[] = [
  {
    question: "Do I need to be in great physical shape?",
    answer:
      "No! The e-bike's electric assist does the hard work for you, allowing you to enjoy the mountain terrain without needing the fitness of an expert cyclist.",
  },
  {
    question: "Is previous mountain biking experience required?",
    answer:
      "This route is designed for beginners. Although the e-bikes provide a stable and comfortable ride on wide tracks, previous experience of cycling is required.",
  },
  {
    question: "When is the best time for this tour?",
    answer:
      "We recommend this activity from October to May to enjoy the most pleasant temperatures and the best views of the African coast.",
  },
];

// ─── JSON-LD Structured Data ────────────────────────────────────────────────

export const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "E-Bike Tour from Marbella to Istán",
  description:
    "Guided e-bike tour from Marbella through Sierra Blanca to Istán, the white village of water. 4-hour moderate route on high-end e-bikes, from 14 years old. Guide, helmet, water, energy bars, insurance and photos included.",
  image: [ogImage, ...photos],
  brand: {
    "@type": "Organization",
    name: "TUUR Adventure Experts",
  },
  offers: {
    "@type": "Offer",
    url: "https://www.tuuradventure.com/activities/e-bike-marbella",
    priceCurrency: "EUR",
    price: "79",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    validFrom: "2026-01-01",
  },
};

export const jsonLdTourExperience = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "E-Bike Adventure from Marbella to Istán: White Villages & Sierra Blanca Tour",
  description:
    "Ride high-end e-bikes from Marbella across the western flank of Sierra Blanca to Istán, the Moorish white village known for its water springs, and return along the La Concepción reservoir.",
  image: photos,
  touristType: ["Adventure", "Nature", "Beginners"],
  offers: {
    "@type": "Offer",
    price: "79",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
  provider: {
    "@type": "TouristInformationCenter",
    name: "TUUR Adventure Experts",
    url: "https://www.tuuradventure.com",
    telephone: siteConfig.phone,
    address: jsonLdPostalAddress,
  },
  itinerary: {
    "@type": "ItemList",
    itemListElement: [
      "Briefing & Setup: Meet in Marbella for bike adjustment and safety instructions",
      "Sierra Blanca Ascent: Ride through Mediterranean forests with spectacular coastal views",
      "The Water Route: Enter Istán to discover its fountains and Moorish heritage",
      "Gastronomic Stop: Enjoy a typical tapa in the heart of the white village",
      "Reservoir Descent: Downhill return toward Marbella overlooking the Concepción reservoir",
    ].map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
    })),
  },
};

// No geo: the exact meeting point is confirmed on booking.
export const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "TUUR Canyoning Malaga",
  image: "https://www.tuuradventure.com/logo-tuur.webp",
  url: "https://www.tuuradventure.com",
  telephone: siteConfig.phone,
  email: siteConfig.email,
  sameAs: socialUrls,
  address: jsonLdPostalAddress,
  priceRange: "€€",
};

export const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: eBikeMarbellaFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const jsonLdBreadcrumb = activityBreadcrumbJsonLd({
  name: "E-Bike Marbella",
  path: "/activities/e-bike-marbella",
});
