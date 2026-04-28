import type { Metadata } from "next";

// ─────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────
export const tajoRondaMetadata: Metadata = {
  title:
    "Canyoning in Tajo de Ronda: Epic Urban Adventure under Puente Nuevo | TUUR Adventure",
  description:
    "Epic urban canyoning in Ronda. Rappel 35m under Puente Nuevo. Unique perspectives of historic Andalusia. Available March–June & September–November.",
  keywords: [
    "canyoning ronda",
    "tajo de ronda canyoning",
    "ronda canyoning",
    "canyoning under puente nuevo",
    "urban canyoning ronda",
    "canyoning beginners ronda",
    "family canyoning ronda",
  ],
  alternates: {
    canonical: "https://www.tuuradventure.com/canyoning/tajo-ronda",
  },
  openGraph: {
    title:
      "Canyoning in Tajo de Ronda: Epic Urban Adventure under Puente Nuevo",
    description:
      "Rappel 35 meters under the Puente Nuevo and discover Ronda from 100 meters below its streets. A one-of-a-kind adventure in Andalusia.",
    url: "https://tuuradventure.com/canyoning/tajo-ronda",
    siteName: "TUUR Adventure Experts",
    locale: "en_GB",
    type: "website",
  },
};

// ─────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────
export const tajoRondaFaqs = [
  {
    question: "Is previous experience required for canyoning in Tajo de Ronda?",
    answer:
      "While this canyon is rated as Level 2.5 (Moderate), you don't need to be an expert. It is suitable for active beginners and families with children over 14 years old. Our certified professional guides provide a technical masterclass before the descent, ensuring you feel secure during the spectacular 35-meter rappel under the Puente Nuevo.",
  },
  {
    question: "When is the best time of year to visit the Ronda Canyon?",
    answer:
      "The activity is available during two peak seasons: from March to June and from September to November. These months offer the ideal water flow and temperate conditions to enjoy the gorge's history and vertical challenges. During the winter or peak summer, conditions may vary, so we always recommend booking in advance to ensure availability.",
  },
  {
    question: "Where is the meeting point for the Ronda adventure tour?",
    answer:
      "Our strategic meeting point is at the Mirador de La Hoya Del Tajo. This location is easily accessible if you are staying in Ronda or driving from nearby cities like Marbella, Málaga, or Grazalema. Remember to arrive 15 minutes early for the safety briefing.",
  },
  {
    question:
      "What makes the Tajo de Ronda canyon unique compared to others in Andalusia?",
    answer:
      'It is one of the few "urban canyoning" experiences in the world. You will navigate 100 meters beneath the streets of a millenary city, discovering Moorish irrigation ditches and ancient mills that are completely invisible to regular tourists. The highlight is the unique "bottom-to-top" perspective of the Puente Nuevo and its waterfalls.',
  },
];

// ─────────────────────────────────────────
// JSON-LD – Product
// ─────────────────────────────────────────
export const jsonLdProduct = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "Tajo de Ronda Canyoning Tour",
  image: "https://tuuradventure.com/tajo-ronda.jpg",
  description:
    "Epic urban canyoning in Ronda. Rappel 35m under Puente Nuevo. Unique perspectives of historic Andalusia.",
  brand: {
    "@type": "Brand",
    name: "TUUR Adventure Experts",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    price: "69.00",
    availability: "https://schema.org/InStock",
  },
};

// ─────────────────────────────────────────
// JSON-LD – TourExperience (TouristAttraction)
// ─────────────────────────────────────────
export const jsonLdTourExperience = {
  "@context": "https://schema.org/",
  "@type": "TouristAttraction",
  name: "Canyoning in Tajo de Ronda – Puente Nuevo",
  description:
    "Navigate the gorge that splits Ronda in two, rappelling under the iconic Puente Nuevo 100 meters below the city streets.",
  url: "https://tuuradventure.com/canyoning/tajo-ronda",
  touristType: "Adventure",
  location: {
    "@type": "Place",
    name: "Mirador La Hoya Del Tajo",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ronda",
      addressRegion: "Málaga",
      addressCountry: "ES",
    },
  },
};

// ─────────────────────────────────────────
// JSON-LD – LocalBusiness
// ─────────────────────────────────────────
export const jsonLdLocalBusiness = {
  "@context": "https://schema.org/",
  "@type": "LocalBusiness",
  name: "TUUR Adventure Experts",
  url: "https://tuuradventure.com",
  telephone: "+34 000 000 000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Marbella",
    addressRegion: "Málaga",
    addressCountry: "ES",
  },
};

// ─────────────────────────────────────────
// JSON-LD – FAQ
// ─────────────────────────────────────────
export const jsonLdFaq = {
  "@context": "https://schema.org/",
  "@type": "FAQPage",
  mainEntity: tajoRondaFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

// ─────────────────────────────────────────
// JSON-LD – Breadcrumb
// ─────────────────────────────────────────
export const jsonLdBreadcrumb = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://tuuradventure.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Canyoning",
      item: "https://tuuradventure.com/canyoning",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Tajo de Ronda",
      item: "https://tuuradventure.com/canyoning/tajo-ronda",
    },
  ],
};
