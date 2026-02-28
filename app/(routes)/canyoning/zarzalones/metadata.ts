import { Metadata } from "next";
import { Faq } from "../../activities/components/faqs";

// ─── SEO Metadata ───────────────────────────────────────────────────────────

export const zarzalonesMetadata: Metadata = {
  title:
    "Zarzalones Canyoning Málaga | 21m Waterfall Rappel Near Marbella - From 69€",
  description:
    "Conquer the 21m waterfall rappel at Zarzalones canyon in Sierra de las Nieves, Málaga. Intermediate canyoning for families (+9 y.o.). Crystalline waters, all year round. From 69€. Book now!",
  keywords: [
    "zarzalones canyoning",
    "canyoning malaga",
    "canyoning yunquera",
    "21 meter rappel canyoning",
    "canyoning sierra de las nieves",
    "canyoning near marbella",
    "intermediate canyoning malaga",
    "barranquismo zarzalones",
    "adventure activities malaga",
    "canyoning andalusia",
    "rio grande canyoning",
  ],
  alternates: {
    canonical: "https://www.canyoningmalaga.com/canyoning/zarzalones",
  },
  openGraph: {
    title: "Zarzalones Canyoning | 21m Waterfall Rappel Near Marbella - From 69€",
    description:
      "Conquer the spectacular 21m waterfall rappel in Sierra de las Nieves. Intermediate canyoning with crystalline waters. All year round.",
    url: "https://www.canyoningmalaga.com/canyoning/zarzalones",
    siteName: "TUUR Canyoning Malaga",
    type: "website",
    images: [
      {
        url: "https://www.canyoningmalaga.com/zarzalones-1.webp",
        width: 1200,
        height: 630,
        alt: "Zarzalones Canyon - 21m Waterfall Canyoning Near Marbella",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zarzalones Canyoning | 21m Waterfall Rappel - From 69€",
    description:
      "Conquer the 21m waterfall at Zarzalones, Sierra de las Nieves. Intermediate canyoning, all year round.",
    images: ["https://www.canyoningmalaga.com/zarzalones-1.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── FAQs ───────────────────────────────────────────────────────────────────

export const zarzalonesFaqs: Faq[] = [
  {
    question: "Is Zarzalones suitable for children?",
    answer:
      "Yes. The activity is suitable for children from 9 years old who have basic swimming skills.",
  },
  {
    question: "Is previous experience or specific fitness required?",
    answer:
      "It is Level 2 (intermediate). It is ideal for those seeking a step-up from beginner canyons but still accessible to those without prior technical experience, although basic physical fitness is required.",
  },
  {
    question: "What's the biggest difference from Guadalmina?",
    answer:
      "While Guadalmina is 3 hours, Zarzalones is 4 hours and includes a much higher descent, featuring an impressive 21-meter rappel.",
  },
];

// ─── JSON-LD Structured Data ────────────────────────────────────────────────

export const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Zarzalones Canyoning Experience",
  description:
    "Experience one of the best ravines in Málaga with a thrilling 21-meter rappel in Sierra de las Nieves Natural Park. Intermediate canyoning with crystalline waters at the source of the Río Grande.",
  image: "https://www.canyoningmalaga.com/zarzalones-1.webp",
  brand: {
    "@type": "Organization",
    name: "TUUR Adventure Experts",
  },
  offers: {
    "@type": "Offer",
    url: "https://www.canyoningmalaga.com/canyoning/zarzalones",
    priceCurrency: "EUR",
    price: "69",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    validFrom: "2026-01-01",
  },
};

export const jsonLdTourExperience = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Zarzalones Canyoning - The 21m Waterfall",
  description:
    "Conquer the 21m waterfall rappel at Zarzalones canyon in Sierra de las Nieves. Intermediate canyoning adventure featuring crystalline waters at the source of the Río Grande, suitable for families from 9 years old.",
  touristType: ["Adventure", "Family", "Sport"],
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
        name: "Meet your guide at the designated meeting point 15 minutes before start",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Gear up with all provided canyoning equipment",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Walk to the source of the Río Grande and begin the descent",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Canyoning: navigate jumps, pools, and two major rappels (up to 21m) over 4 hours",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Walk out, change clothes, and conclude the adventure",
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
    latitude: 36.7283,
    longitude: -4.9372,
  },
  priceRange: "€€",
};

export const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: zarzalonesFaqs.map((faq) => ({
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
      name: "Zarzalones",
      item: "https://www.canyoningmalaga.com/canyoning/zarzalones",
    },
  ],
};
