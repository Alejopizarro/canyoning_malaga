import { Metadata } from "next";
import { Faq } from "../../activities/components/faqs";

// ─── SEO Metadata ───────────────────────────────────────────────────────────

export const elChorroMetadata: Metadata = {
  title:
    "Via Ferrata El Chorro | Next to Caminito del Rey - From 69€",
  description:
    "Conquer Andalusia's most complete via ferrata next to Caminito del Rey. Advanced route with 30m zip line, rappel & Tibetan bridges. 4.5h, from age 14. Sept-June. From 69€. Book now!",
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
    canonical: "https://www.canyoningmalaga.com/via-ferrata/el-chorro",
  },
  openGraph: {
    title: "Via Ferrata El Chorro | Next to Caminito del Rey - From 69€",
    description:
      "Andalusia's most complete via ferrata next to Caminito del Rey. Zip line, rappel & Tibetan bridges. Advanced route, Sept-June.",
    url: "https://www.canyoningmalaga.com/via-ferrata/el-chorro",
    siteName: "TUUR Canyoning Malaga",
    type: "website",
    images: [
      {
        url: "https://www.canyoningmalaga.com/el-chorro-1.webp",
        width: 1200,
        height: 630,
        alt: "Via Ferrata El Chorro - The Most Complete Route Next to Caminito del Rey",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Via Ferrata El Chorro | Next to Caminito del Rey - From 69€",
    description:
      "Andalusia's most complete via ferrata next to Caminito del Rey. Zip line, rappel & Tibetan bridges. Advanced route, Sept-June.",
    images: ["https://www.canyoningmalaga.com/el-chorro-1.webp"],
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
  image: "https://www.canyoningmalaga.com/el-chorro-1.webp",
  brand: {
    "@type": "Organization",
    name: "TUUR Adventure Experts",
  },
  offers: {
    "@type": "Offer",
    url: "https://www.canyoningmalaga.com/via-ferrata/el-chorro",
    priceCurrency: "EUR",
    price: "69",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    validFrom: "2026-01-01",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "2087",
    bestRating: "5",
    worstRating: "1",
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
    price: "69",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
  provider: {
    "@type": "TouristInformationCenter",
    name: "TUUR Adventure Experts",
    url: "https://www.canyoningmalaga.com",
    telephone: "+34699199158",
    address: {
      "@type": "PostalAddress",
      streetAddress: "C. San Javier Nº 16 4-B",
      addressLocality: "San Pedro de Alcántara",
      addressRegion: "Málaga",
      postalCode: "29670",
      addressCountry: "ES",
    },
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
  image: "https://www.canyoningmalaga.com/logo-tuur.webp",
  url: "https://www.canyoningmalaga.com",
  telephone: "+34699199158",
  email: "tuurcanyoning@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C. San Javier Nº 16 4-B",
    addressLocality: "San Pedro de Alcántara",
    addressRegion: "Málaga",
    postalCode: "29670",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.9167,
    longitude: -4.7500,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "2087",
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

export const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.canyoningmalaga.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Via Ferrata",
      item: "https://www.canyoningmalaga.com/via-ferrata",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "El Chorro",
      item: "https://www.canyoningmalaga.com/via-ferrata/el-chorro",
    },
  ],
};
