import { Metadata } from "next";
import { Faq } from "../../activities/components/faqs";

// ─── SEO Metadata ───────────────────────────────────────────────────────────

export const casaresMetadata: Metadata = {
  title: "Via Ferrata Casares | Views of Gibraltar & Africa - From 45€",
  description:
    "Conquer the Via Ferrata Casares in the Genal Valley, Málaga. Moderate level with monkey bridges & panoramic views of Gibraltar and Africa. All year round. From 45€. Book now!",
  keywords: [
    "via ferrata casares",
    "via ferrata malaga",
    "via ferrata costa del sol",
    "climbing casares",
    "via ferrata genal valley",
    "adventure activities malaga",
    "via ferrata beginners",
    "via ferrata near marbella",
    "via ferrata gibraltar views",
    "ferrata casares monkey bridge",
  ],
  alternates: {
    canonical: "https://www.tuuradventure.com/via-ferrata/casares",
  },
  openGraph: {
    title: "Via Ferrata Casares | Views of Gibraltar & Africa - From 45€",
    description:
      "Conquer the cliffs of Casares with breathtaking views of Gibraltar and Africa. Moderate via ferrata with monkey bridges. All year round.",
    url: "https://www.tuuradventure.com/via-ferrata/casares",
    siteName: "TUUR Canyoning Malaga",
    type: "website",
    images: [
      {
        url: "https://www.tuuradventure.com/casares-1.webp",
        width: 1200,
        height: 630,
        alt: "Via Ferrata Casares - Climbing with views of Gibraltar and Africa",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Via Ferrata Casares | Views of Gibraltar & Africa - From 45€",
    description:
      "Conquer the cliffs of Casares with views of Gibraltar and Africa. Moderate via ferrata with monkey bridges. All year round.",
    images: ["https://www.tuuradventure.com/casares-1.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── FAQs ───────────────────────────────────────────────────────────────────

export const casaresFaqs: Faq[] = [
  {
    question: "Is the Casares Via Ferrata suitable for beginners?",
    answer:
      "Yes, it is recommended for beginners in this sport, and those with some experience in other related physical activities. Minimum age is 11 or 12 years old, or 155cm height.",
  },
  {
    question: "Can this route be combined with others?",
    answer:
      "Yes, this via ferrata can be combined with other routes in the Genal Valley, such as Gaucín, El Hacho, or Benalauría. Ask us about our Via Ferrata packs.",
  },
  {
    question: "How long does the activity take?",
    answer: "The ascent lasts approximately 2 hours and 30 minutes.",
  },
  {
    question: "What if I'm afraid of heights?",
    answer:
      "Via ferrata is actually a great way to build confidence with heights in a controlled environment. Our guides are experienced in helping participants overcome their fears, and you'll be securely attached to the safety cable at all times.",
  },
];

// ─── JSON-LD Structured Data ────────────────────────────────────────────────

export const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Via Ferrata Casares Experience",
  description:
    "Conquer the Via Ferrata Casares in the Genal Valley with breathtaking views of Gibraltar and Africa. Moderate level route with monkey bridges and horizontal traverses. Perfect for adventurous beginners and families.",
  image: "https://www.tuuradventure.com/casares-1.webp",
  brand: {
    "@type": "Organization",
    name: "TUUR Adventure Experts",
  },
  offers: {
    "@type": "Offer",
    url: "https://www.tuuradventure.com/via-ferrata/casares",
    priceCurrency: "EUR",
    price: "45",
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
  name: "Via Ferrata Casares - Conquer the Cliffs with Views of Gibraltar & Africa",
  description:
    "Experience the thrill of climbing in the picturesque white village of Casares. This spectacular via ferrata offers breathtaking views of the Rock of Gibraltar and the African coast. Moderate level, 2.5 hours, all year round.",
  touristType: ["Adventure", "Family", "Intermediate"],
  offers: {
    "@type": "Offer",
    price: "45",
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
        name: "Ascent to Casares Peak: Progress through the two challenging sections of the Via Ferrata",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Summit Views: Reach the top for breathtaking views of the African Coast and Gibraltar",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Descent & Conclusion: Return to the starting point (approximately 2:30 hours in total)",
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
    latitude: 36.4441,
    longitude: -5.2727,
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
  mainEntity: casaresFaqs.map((faq) => ({
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
      name: "Casares",
      item: "https://www.tuuradventure.com/via-ferrata/casares",
    },
  ],
};
