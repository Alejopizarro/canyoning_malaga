import { Metadata } from "next";
import { activityBreadcrumbJsonLd } from "@/lib/seo";
import {
  jsonLdPostalAddress,
  siteConfig,
  socialUrls,
} from "@/lib/site-config";
import { Faq } from "../../activities/components/faqs";

// ─── SEO Metadata ───────────────────────────────────────────────────────────

export const elChorroMetadata: Metadata = {
  title: "Via Ferrata El Chorro near Caminito del Rey – From €55",
  description: "Advanced via ferrata in El Chorro, next to Caminito del Rey: a 30m+ zip line, a 12m rappel and Tibetan bridges. From age 14, from €55. Book online.",
  keywords: [
    "via ferrata el chorro",
    "via ferrata caminito del rey",
    "via ferrata malaga",
    "via ferrata advanced",
    "climbing el chorro",
    "via ferrata zip line",
    "via ferrata near malaga",
    "adventure activities malaga",
    "el chorro climbing",
    "via ferrata andalusia",
    "via ferrata rappel",
  ],
  alternates: {
    canonical: "https://www.tuuradventure.com/via-ferrata/el-chorro",
  },
  openGraph: {
    title: "Via Ferrata El Chorro near Caminito del Rey – From €55",
    description: "Advanced via ferrata in El Chorro, next to Caminito del Rey: a 30m+ zip line, a 12m rappel and Tibetan bridges. From age 14, from €55. Book online.",
    url: "https://www.tuuradventure.com/via-ferrata/el-chorro",
    siteName: "TUUR Canyoning Malaga",
    type: "website",
    images: [
      {
        url: "https://www.tuuradventure.com/el-chorro-1.webp",
        width: 1200,
        height: 630,
        alt: "Via Ferrata El Chorro - The Most Complete Route Next to Caminito del Rey",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Via Ferrata El Chorro near Caminito del Rey – From €55",
    description: "Advanced via ferrata in El Chorro, next to Caminito del Rey: a 30m+ zip line, a 12m rappel and Tibetan bridges. From age 14, from €55. Book online.",
    images: ["https://www.tuuradventure.com/el-chorro-1.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── FAQs ───────────────────────────────────────────────────────────────────

export const elChorroFaqs: Faq[] = [
  {
    question: "What is the minimum age?",
    answer: "This activity is recommended for participants aged +14 years old.",
  },
  {
    question: "Is previous experience necessary?",
    answer:
      "It is a long, highly recommended route but requires good physical condition and vertical progression skills.",
  },
  {
    question: "Is the route near the Caminito del Rey?",
    answer:
      "Yes, the Via Ferrata is located right next to the famous Caminito del Rey area, which offers additional options like rock climbing, hiking, and kayaking. IMPORTANT: This activity does NOT include a visit to Caminito del Rey.",
  },
  {
    question: "Can I skip the rappel at the end?",
    answer:
      "Yes, the 12-meter rappel is optional. If you prefer not to do it, there is an alternative path to descend safely.",
  },
  {
    question: "Why is it not available in summer?",
    answer:
      "The route is closed from July 1st to August 31st due to extreme heat conditions. High temperatures make the activity unsafe and uncomfortable. We operate from September 1st to June 30th.",
  },
];

// ─── JSON-LD Structured Data ────────────────────────────────────────────────

export const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Via Ferrata El Chorro Experience",
  description:
    "Conquer Andalusia's most complete via ferrata next to Caminito del Rey. Advanced route featuring a 30m zip line, 12m rappel, monkey and Tibetan bridges. 4.5 hours of vertical adventure in El Chorro, Málaga.",
  image: "https://www.tuuradventure.com/el-chorro-1.webp",
  brand: {
    "@type": "Organization",
    name: "TUUR Adventure Experts",
  },
  offers: {
    "@type": "Offer",
    url: "https://www.tuuradventure.com/via-ferrata/el-chorro",
    priceCurrency: "EUR",
    price: "55",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    validFrom: "2026-01-01",
  },
};

export const jsonLdTourExperience = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Via Ferrata El Chorro - The Most Complete Route Next to Caminito del Rey",
  description:
    "Conquer Andalusia's most complete via ferrata next to the famous Caminito del Rey. Advanced route with 30m zip line, 12m rappel, monkey and Tibetan bridges. 200m vertical development. Available September to June.",
  touristType: ["Adventure", "Extreme Sports", "Climbing"],
  offers: {
    "@type": "Offer",
    price: "55",
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
      {
        "@type": "ListItem",
        position: 1,
        name: "Meet your guide at the designated meeting point (15 minutes prior to start time)",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Gear up: Put on the safety equipment and attend the safety briefing",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Ascent & Challenge: Progress along the vertical route, navigating bridges, the zip line, and the 12m rappel (4.5 hours total)",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Descent & Conclusion: Walk back (approx. 40 minutes) to the starting point and conclude the adventure",
      },
    ],
  },
};

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
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.9167,
    longitude: -4.75,
  },
  priceRange: "€€",
};

export const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: elChorroFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const jsonLdBreadcrumb = activityBreadcrumbJsonLd({
  name: "El Chorro",
  path: "/via-ferrata/el-chorro",
  category: { name: "Via Ferrata", categoryPath: "via-ferrata" },
});
