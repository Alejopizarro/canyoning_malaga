import { Metadata } from "next";
import { Faq } from "../components/faqs";

// ─── SEO Metadata ───────────────────────────────────────────────────────────

export const kayakPuertoBanusMetadata: Metadata = {
  title:
    "Kayak Puerto Banús Marbella | Sunrise Tour & Marina Experience - From 40€",
  description:
    "Guided kayak tour from Puerto Banús, Marbella. Sunrise & morning tours along luxury marina, Duque & Rodeito beaches. Family-friendly from age 2. All year. From 40€. Book now!",
  keywords: [
    "kayak puerto banus",
    "kayak marbella",
    "kayak tour marbella",
    "sunrise kayak marbella",
    "kayak costa del sol",
    "family kayak marbella",
    "kayak puerto banus sunset",
    "water activities marbella",
    "kayak rental marbella",
    "guided kayak tour marbella",
    "things to do marbella",
  ],
  alternates: {
    canonical: "https://www.canyoningmalaga.com/activities/kayak-puerto-banus",
  },
  openGraph: {
    title: "Kayak Puerto Banús Marbella | Sunrise Tour & Marina - From 40€",
    description:
      "Guided kayak tour from Puerto Banús. Sunrise & morning tours along the luxury marina and Marbella beaches. Family-friendly from age 2. All year.",
    url: "https://www.canyoningmalaga.com/activities/kayak-puerto-banus",
    siteName: "TUUR Canyoning Malaga",
    type: "website",
    images: [
      {
        url: "https://www.canyoningmalaga.com/kayak-banus-1.webp",
        width: 1200,
        height: 630,
        alt: "Kayak Puerto Banús - Sunrise Tour along Marbella's Luxury Marina",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kayak Puerto Banús Marbella | Sunrise Tour & Marina - From 40€",
    description:
      "Guided kayak tour from Puerto Banús. Sunrise & morning tours along the luxury marina. Family-friendly from age 2. All year.",
    images: ["https://www.canyoningmalaga.com/kayak-banus-1.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── FAQs ───────────────────────────────────────────────────────────────────

export const kayakPuertoBanusFaqs: Faq[] = [
  {
    question: "Is it safe for very young children?",
    answer:
      "Yes, children from 2 years old can participate safely, sitting next to their parents in the kayak.",
  },
  {
    question: "Do I need previous experience?",
    answer:
      "No, this is an introductory activity where our guides will teach you everything you need to know.",
  },
  {
    question: "How long is the route?",
    answer: "The tour covers approximately 3.5 km and lasts around 2 hours.",
  },
  {
    question: "What happens if the weather is bad?",
    answer:
      "Safety is our priority. If weather conditions are unsuitable for kayaking (strong winds, storms), we will contact you to reschedule or offer a full refund.",
  },
];

// ─── JSON-LD Structured Data ────────────────────────────────────────────────

export const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Kayak Puerto Banús Sunrise Tour",
  description:
    "Guided kayak tour from Puerto Banús, Marbella. Paddle along the luxury marina, Rodeito and Duque beaches at sunrise or morning. Family-friendly from age 2, suitable for all levels. 2-hour experience with professional guide and photos included.",
  image: "https://www.canyoningmalaga.com/kayak-banus-1.webp",
  brand: {
    "@type": "Organization",
    name: "TUUR Adventure Experts",
  },
  offers: {
    "@type": "Offer",
    url: "https://www.canyoningmalaga.com/activities/kayak-puerto-banus",
    priceCurrency: "EUR",
    price: "40",
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
  name: "Kayak Puerto Banús - Sunrise Tour & Luxury Marina Experience in Marbella",
  description:
    "Discover the Marbella coastline from the sea. Guided kayak tour departing from Ventura del Mar beach, paddling along Rodeito and Duque beaches to the entrance of Puerto Banús luxury marina. Sunrise and morning tours available all year round.",
  touristType: ["Family", "Couples", "Beginners", "Nature"],
  offers: {
    "@type": "Offer",
    price: "40",
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
        name: "Meet your guide at the designated spot 15 minutes before the start",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Briefing: Learn basic navigation and safety techniques",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Coastal Exploration: Paddle along Rodeito and Duque beaches",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Marina Experience: Witness the sunrise and luxury boats at the port entrance",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Return: Conclude the tour and receive your photos within 24h",
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
    latitude: 36.4810,
    longitude: -4.9689,
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
  mainEntity: kayakPuertoBanusFaqs.map((faq) => ({
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
      name: "Activities",
      item: "https://www.canyoningmalaga.com/activities",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Kayak Puerto Banús",
      item: "https://www.canyoningmalaga.com/activities/kayak-puerto-banus",
    },
  ],
};
