import { Metadata } from "next";
import { Faq } from "../../activities/components/faqs";

// ─── SEO Metadata ───────────────────────────────────────────────────────────

export const buitrerasMetadata: Metadata = {
  title:
    "Buitreras Canyoning | The Cathedral of Andalusia's Ravines - From 69€",
  description:
    "Conquer Buitreras, the most iconic canyoning descent in Andalusia. 120m limestone walls, German's Bridge, 9m jumps. 6h, from age 13. May-Nov. Near Marbella & Ronda. From 69€. Book now!",
  keywords: [
    "buitreras canyoning",
    "canyoning andalusia",
    "canyoning near marbella",
    "canyoning near ronda",
    "canyoning malaga",
    "barranquismo buitreras",
    "las buitreras canyon",
    "cathedral of ravines",
    "adventure activities malaga",
    "canyoning costa del sol",
    "alcornocales natural park",
  ],
  alternates: {
    canonical: "https://www.tuuradventure.com/canyoning/buitreras",
  },
  openGraph: {
    title:
      "Buitreras Canyoning | The Cathedral of Andalusia's Ravines - From 69€",
    description:
      "Conquer the most iconic canyoning descent in Andalusia. 120m walls, German's Bridge & 9m jumps. Near Marbella & Ronda. May-Nov.",
    url: "https://www.tuuradventure.com/canyoning/buitreras",
    siteName: "TUUR Canyoning Malaga",
    type: "website",
    images: [
      {
        url: "https://www.tuuradventure.com/buitreras-1.webp",
        width: 1200,
        height: 630,
        alt: "Buitreras Canyoning - The Cathedral of Andalusia's Ravines",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Buitreras Canyoning | The Cathedral of Andalusia's Ravines - From 69€",
    description:
      "Conquer the most iconic canyoning descent in Andalusia. 120m walls, German's Bridge & 9m jumps. Near Marbella & Ronda. May-Nov.",
    images: ["https://www.tuuradventure.com/buitreras-1.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── FAQs ───────────────────────────────────────────────────────────────────

export const buitrerasFaqs: Faq[] = [
  {
    question: "Do I need to be an expert?",
    answer:
      "While it is a Level 2.5 canyon, it is suitable for beginners with a good physical condition and an athletic spirit.",
  },
  {
    question: "Is it suitable for children?",
    answer:
      "Yes, for teenagers from 13-14 years old who are comfortable in the water and fit.",
  },
  {
    question: "When is the best time to go?",
    answer:
      "The season runs from mid-May to November to ensure optimal water levels and safety.",
  },
  {
    question: "How high are the jumps?",
    answer:
      "The canyon features optional jumps of up to 9 meters into crystal-clear pools. All jumps are optional - you can always choose alternative routes if you prefer.",
  },
  {
    question: "What makes Buitreras special compared to other canyons?",
    answer:
      "Buitreras is internationally recognized as the 'Cathedral' of Andalusian ravines due to its spectacular limestone walls exceeding 120 meters in height. It's considered the most majestic canyon descent in the entire region.",
  },
];

// ─── JSON-LD Structured Data ────────────────────────────────────────────────

export const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Buitreras Canyoning Adventure",
  description:
    "Conquer the Cathedral of Andalusia's ravines. The most iconic canyoning descent in southern Spain with 120m limestone walls, German's Bridge at 80m, optional 9m jumps, and technical rappels. 6-hour immersive adventure in the Alcornocales Natural Park.",
  image: "https://www.tuuradventure.com/buitreras-1.webp",
  brand: {
    "@type": "Organization",
    name: "TUUR Adventure Experts",
  },
  offers: {
    "@type": "Offer",
    url: "https://www.tuuradventure.com/canyoning/buitreras",
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
  name: "Buitreras Canyoning - The Cathedral of Andalusia's Ravines",
  description:
    "The most iconic canyoning descent in Andalusia. Navigate between 120m limestone walls, cross the German's Bridge at 80m height, and descend through the spectacular gorge with optional 9m jumps. 6-hour adventure near Marbella and Ronda.",
  touristType: ["Adventure", "Extreme Sports", "Nature"],
  offers: {
    "@type": "Offer",
    price: "69",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
  provider: {
    "@type": "TouristInformationCenter",
    name: "TUUR Adventure Experts",
    url: "https://www.tuuradventure.com",
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
        name: "Group Meeting: Meet your guide 15 minutes before the start in El Colmenar",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Gear Up: Receive and put on your professional canyoning equipment",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "The Approach: Hike to the Bridge of the Germans for an 80m-high view of the canyon",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Canyon Descent: Spend approx. 5-6 hours swimming, jumping (optional), and abseiling through the narrow gorge",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Return: Conclude the route and enjoy the village atmosphere in El Colmenar",
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
    latitude: 36.55,
    longitude: -5.3833,
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
  mainEntity: buitrerasFaqs.map((faq) => ({
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
      item: "https://www.tuuradventure.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Canyoning",
      item: "https://www.tuuradventure.com/canyoning",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Buitreras",
      item: "https://www.tuuradventure.com/canyoning/buitreras",
    },
  ],
};
