import { Metadata } from "next";
import { Faq } from "../../activities/components/faqs";

// ─── SEO Metadata ───────────────────────────────────────────────────────────

export const rondaMetadata: Metadata = {
  title: "Via Ferrata Ronda | Climb the Tajo Cliffs - From 60€",
  description:
    "Climb the iconic Tajo de Ronda cliffs under the Puente Nuevo. Beginner & family-friendly via ferrata for all levels, from age 7. 3 hours, all year round. From 60€. Book now!",
  keywords: [
    "via ferrata ronda",
    "via ferrata tajo de ronda",
    "via ferrata malaga",
    "climbing ronda",
    "via ferrata near marbella",
    "via ferrata beginners",
    "via ferrata family",
    "adventure activities ronda",
    "puente nuevo climbing",
    "via ferrata costa del sol",
    "via ferrata andalusia",
  ],
  alternates: {
    canonical: "https://www.tuuradventure.com/via-ferrata/ronda",
  },
  openGraph: {
    title: "Via Ferrata Ronda | Climb the Iconic Tajo Cliffs - From 60€",
    description:
      "Climb the Tajo de Ronda cliffs under the Puente Nuevo. Beginner & family-friendly via ferrata for all levels. All year round.",
    url: "https://www.tuuradventure.com/via-ferrata/ronda",
    siteName: "TUUR Canyoning Malaga",
    type: "website",
    images: [
      {
        url: "https://www.tuuradventure.com/ronda-vf-1.webp",
        width: 1200,
        height: 630,
        alt: "Via Ferrata Tajo de Ronda - Climbing the cliffs under the Puente Nuevo",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Via Ferrata Ronda | Climb the Iconic Tajo Cliffs - From 60€",
    description:
      "Climb the Tajo de Ronda cliffs under the Puente Nuevo. Beginner & family-friendly via ferrata for all levels. All year round.",
    images: ["https://www.tuuradventure.com/ronda-vf-1.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── FAQs ───────────────────────────────────────────────────────────────────

export const rondaFaqs: Faq[] = [
  {
    question: "Is it suitable for someone with no experience?",
    answer:
      "Absolutely. This is an initiation route designed for beginners and children from 7 years old.",
  },
  {
    question: "How long does the activity take?",
    answer: "The full experience lasts approximately 3 hours.",
  },
  {
    question: "Can I do this if I have vertigo?",
    answer:
      "While it is an aerial activity, it is a great way to build confidence in a controlled and safe environment.",
  },
  {
    question: "What if I get tired during the climb?",
    answer:
      "Don't worry! The route is divided into two sections with rest points in between. Our guides are trained to assist you at any moment and can adapt the pace to your comfort level.",
  },
  {
    question: "Is there parking available near the meeting point?",
    answer:
      "Yes, there are several public parking areas in Ronda near the meeting point. We recommend arriving early to find a spot, especially during peak tourist season.",
  },
];

// ─── JSON-LD Structured Data ────────────────────────────────────────────────

export const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Via Ferrata Tajo de Ronda Experience",
  description:
    "Climb the iconic Tajo de Ronda cliffs under the legendary Puente Nuevo. Beginner and family-friendly via ferrata with two 80m sections. Views of monuments and the gorge from a unique vertical perspective.",
  image: "https://www.tuuradventure.com/ronda-vf-1.webp",
  brand: {
    "@type": "Organization",
    name: "TUUR Adventure Experts",
  },
  offers: {
    "@type": "Offer",
    url: "https://www.tuuradventure.com/via-ferrata/ronda",
    priceCurrency: "EUR",
    price: "60",
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
  name: "Via Ferrata Tajo de Ronda - Climb the Iconic Cliffs near Marbella & Málaga",
  description:
    "Discover Ronda from a unique vertical perspective. Scale the breathtaking limestone cliffs of the Tajo gorge under the Puente Nuevo. Beginner and family-friendly, 3 hours, all year round.",
  touristType: ["Adventure", "Family", "Beginners", "Cultural"],
  offers: {
    "@type": "Offer",
    price: "60",
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
        name: "Meet your guide at the indicated meeting point, 15 minutes before start",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Gear up: Briefing on safety measures and vertical progression equipment",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "The Descent: Walk down to the Old Mills area to reach the foot of the cliffs",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Vertical Climb: Conquer the two sections of the Via Ferrata (80m + 80m)",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "The Summit: Finish in the city center with time to enjoy typical Andalusian tapas",
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
    latitude: 36.7422,
    longitude: -5.1665,
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
  mainEntity: rondaFaqs.map((faq) => ({
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
      name: "Via Ferrata",
      item: "https://www.tuuradventure.com/via-ferrata",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Ronda",
      item: "https://www.tuuradventure.com/via-ferrata/ronda",
    },
  ],
};
