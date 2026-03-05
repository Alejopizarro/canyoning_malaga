import { Metadata } from "next";
import { Faq } from "../../activities/components/faqs";

// ─── SEO Metadata ───────────────────────────────────────────────────────────

export const laConchaMetadata: Metadata = {
  title:
    "Climb La Concha Marbella | Iconic Peak Hiking - From 80€ Transfer Included",
  description:
    "Conquer La Concha, Marbella's most iconic peak at 1,215m. Guided hiking with 360º views of Gibraltar & Africa. Transfer included. 13km, 6.5h. From 80€. Book now!",
  keywords: [
    "la concha marbella",
    "hiking marbella",
    "la concha hike",
    "sierra blanca hiking",
    "trekking marbella",
    "hiking costa del sol",
    "la concha peak",
    "marbella mountain hike",
    "guided hiking malaga",
    "la concha summit",
    "hiking near marbella",
  ],
  alternates: {
    canonical: "https://www.tuuradventure.com/hiking/la-concha",
  },
  openGraph: {
    title: "Climb La Concha Marbella | Iconic Peak Hiking - From 80€",
    description:
      "Conquer Marbella's most iconic peak at 1,215m with 360º views of Gibraltar & Africa. Guided hiking with transfer included. Book now!",
    url: "https://www.tuuradventure.com/hiking/la-concha",
    siteName: "TUUR Canyoning Malaga",
    type: "website",
    images: [
      {
        url: "https://www.tuuradventure.com/la-concha-1.webp",
        width: 1200,
        height: 630,
        alt: "Hiking La Concha - The Most Iconic Peak in Marbella",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Climb La Concha Marbella | Iconic Peak Hiking - From 80€",
    description:
      "Conquer Marbella's most iconic peak at 1,215m. 360º views of Gibraltar & Africa. Guided hiking with transfer included.",
    images: ["https://www.tuuradventure.com/la-concha-1.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── FAQs ───────────────────────────────────────────────────────────────────

export const laConchaFaqs: Faq[] = [
  {
    question: "Is La Concha safe for children?",
    answer:
      "The standard route is recommended for active children from 11 years old due to its length and some narrow sections.",
  },
  {
    question: "Can we see Africa from the top?",
    answer:
      "Yes! On clear days, you can clearly see the Strait of Gibraltar and the coast of Africa.",
  },
  {
    question: "What is the difference between the routes?",
    answer:
      "The popular Juanar route is a scenic mountain hike, while the Direct Route is an 'Extreme Trekking' experience involving steeper slopes and technical aid ropes.",
  },
  {
    question: "How difficult is the hike?",
    answer:
      "La Concha is rated as intermediate (Level 2). It requires a moderate level of fitness due to its 13km distance and 1,215m altitude. The trail has some challenging sections but is manageable for most hikers with basic experience.",
  },
  {
    question: "What happens if the weather is bad?",
    answer:
      "Safety is our priority. If weather conditions are unsafe, we may modify or reschedule the activity. Our guides monitor forecasts and will contact you in advance if changes are needed.",
  },
];

// ─── JSON-LD Structured Data ────────────────────────────────────────────────

export const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Hiking La Concha Marbella Summit",
  description:
    "Conquer La Concha, Marbella's most iconic peak at 1,215m. Guided hiking experience with 360º panoramic views of Gibraltar and Africa. Transfer from Marbella included. 13km route through a biosphere reserve.",
  image: "https://www.tuuradventure.com/la-concha-1.webp",
  brand: {
    "@type": "Organization",
    name: "TUUR Adventure Experts",
  },
  offers: {
    "@type": "Offer",
    url: "https://www.tuuradventure.com/hiking/la-concha",
    priceCurrency: "EUR",
    price: "80",
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
  name: "Hiking La Concha - Conquer the Most Iconic Peak in Marbella",
  description:
    "Guided hike to the most emblematic summit in Marbella, Sierra Blanca. 1,215m altitude with 360º views of Gibraltar and Africa. 13km through a biosphere reserve with chestnut, pine, and olive forests.",
  touristType: ["Adventure", "Hiking", "Nature"],
  offers: {
    "@type": "Offer",
    price: "80",
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
        name: "Meet your guide 15 minutes before departure for the briefing",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Forest Approach: Begin the hike through the chestnut and pine groves of Juanar",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "The Ridge Ascent: Navigate the winding mountain paths towards the peak",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Summit Success: Reach the 1,215m peak for photos and panoramic views",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Return: Descend back to the starting point (Total time: approx. 6.5 hours)",
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
    latitude: 36.5833,
    longitude: -4.9667,
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
  mainEntity: laConchaFaqs.map((faq) => ({
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
      name: "Hiking",
      item: "https://www.tuuradventure.com/hiking",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "La Concha",
      item: "https://www.tuuradventure.com/hiking/la-concha",
    },
  ],
};
