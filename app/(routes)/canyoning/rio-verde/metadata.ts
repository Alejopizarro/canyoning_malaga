import { Metadata } from "next";
import { Faq } from "../../activities/components/faqs";

// ─── SEO Metadata ───────────────────────────────────────────────────────────

export const rioVerdeMetadata: Metadata = {
  title:
    "Río Verde Canyoning Granada | Turquoise Water Jumps - From 75€",
  description:
    "Experience Río Verde canyoning near Granada & Málaga. Turquoise waters, jumps up to 9m, rappelling & slides in Sierra de Almijara. From 75€. March to November. Book now!",
  keywords: [
    "rio verde canyoning",
    "canyoning granada",
    "canyoning otivar",
    "turquoise water canyoning",
    "canyoning near malaga",
    "canyoning andalusia",
    "rio verde canyon",
    "adventure granada",
    "canyoning sierra de almijara",
    "barranquismo rio verde",
    "canyoning costa del sol",
  ],
  alternates: {
    canonical: "https://www.canyoningmalaga.com/canyoning/rio-verde",
  },
  openGraph: {
    title: "Río Verde Canyoning | Turquoise Water Jumps Near Granada - From 75€",
    description:
      "Andalusia's aquatic jewel. Turquoise waters, jumps up to 9m, rappelling & natural slides in Sierra de Almijara. Perfect for beginners and families.",
    url: "https://www.canyoningmalaga.com/canyoning/rio-verde",
    siteName: "TUUR Canyoning Malaga",
    type: "website",
    images: [
      {
        url: "https://www.canyoningmalaga.com/rio-verde-1.webp",
        width: 1200,
        height: 630,
        alt: "Río Verde Canyon - Turquoise Water Canyoning Near Granada",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Río Verde Canyoning | Turquoise Water Jumps - From 75€",
    description:
      "Turquoise waters, jumps up to 9m & rappelling in Sierra de Almijara. March to November. Book now!",
    images: ["https://www.canyoningmalaga.com/rio-verde-1.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── FAQs ───────────────────────────────────────────────────────────────────

export const rioVerdeFaqs: Faq[] = [
  {
    question: "Do I need previous canyoning experience?",
    answer:
      "No. The popular Río Verde route (Level 2) is suitable for beginners and families. Our certified guides will teach you all the necessary technical skills.",
  },
  {
    question: "Is basic swimming knowledge required?",
    answer:
      "Yes, basic swimming skills are necessary, as the canyon involves several natural pools where floating or swimming is required. In any case, wetsuits help you to float. We can also provide life jackets free of charge for those who are less confident.",
  },
  {
    question: "What's the difference with the Río Verde X-Pro?",
    answer:
      "The X-Pro version is a more explosive 7-hour integral canyon that requires a higher physical level, recommended for experienced athletes and groups (+15 years).",
  },
  {
    question: "What happens if I am late?",
    answer:
      "There is a 15-minute courtesy waiting time after the meeting time. If participants do not arrive within this limit, they forfeit their rights to the service, as delays incur additional costs.",
  },
];

// ─── JSON-LD Structured Data ────────────────────────────────────────────────

export const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Río Verde Canyoning Experience",
  description:
    "Dive into Andalusia's aquatic jewel, the Río Verde, famed worldwide for its turquoise waters. Exhilarating river descent with jumps up to 9m, rappelling, and natural slides in Sierra de Almijara.",
  image: "https://www.canyoningmalaga.com/rio-verde-1.webp",
  brand: {
    "@type": "Organization",
    name: "TUUR Adventure Experts",
  },
  offers: {
    "@type": "Offer",
    url: "https://www.canyoningmalaga.com/canyoning/rio-verde",
    priceCurrency: "EUR",
    price: "75",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    validFrom: "2026-03-01",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.0",
    reviewCount: "5",
    bestRating: "5",
    worstRating: "1",
  },
};

export const jsonLdTourExperience = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Río Verde Canyoning - Turquoise Water Jumps",
  description:
    "Discover an exhilarating river descent in Río Verde, perfect for beginners and families. Turquoise waters, jumps up to 9 meters, rappelling, and natural slides in Sierra de Almijara Natural Park.",
  touristType: ["Adventure", "Family", "Sport"],
  offers: {
    "@type": "Offer",
    price: "75",
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
        name: "Meet your guide at the designated meeting point 15 minutes before start",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Take the guide's van and walk to the canyon entrance (~45 minutes)",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Gear up with canyoning equipment and attend safety briefing",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Canyoning: walk, swim, slide, jump and rappel for about 4.5 hours",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Return to meeting point by van and finish",
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
    latitude: 36.8331,
    longitude: -3.7268,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.0",
    reviewCount: "5",
  },
  priceRange: "€€",
};

export const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: rioVerdeFaqs.map((faq) => ({
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
      name: "Canyoning",
      item: "https://www.canyoningmalaga.com/canyoning",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Río Verde",
      item: "https://www.canyoningmalaga.com/canyoning/rio-verde",
    },
  ],
};
