import { Metadata } from "next";
import { Faq } from "../activities/components/faqs";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const summerCampMetadata: Metadata = {
  title: "Summer Camp for Children in Marbella 2026 — TUUR Adventure",
  description:
    "Adventure nature camp for children aged 6 to 14. From 29 June to 3 July in Marbella. Canyoning, kayak, abseiling and camping. €235. Limited places.",
  authors: [{ name: "TUUR Adventure Experts" }],
  publisher: "TUUR Adventure Experts",
  keywords: [
    "summer camp marbella",
    "summer camp children marbella",
    "adventure camp marbella",
    "nature camp marbella",
    "activities children marbella summer",
    "canyoning children marbella",
    "summer camp kayak marbella",
    "summer camp abseiling children",
    "summer camp 2026 marbella",
    "summer camp costa del sol",
  ],
  alternates: {
    canonical: "https://www.tuuradventure.com/summer-camp",
  },
  openGraph: {
    title: "Summer Camp for Children in Marbella 2026 — TUUR Adventure",
    description:
      "Adventure nature camp for children aged 6 to 14. From 29 June to 3 July in Marbella. Canyoning, kayak, abseiling and camping. €235. Limited places.",
    url: "https://www.tuuradventure.com/summer-camp",
    siteName: "TUUR Adventure Experts",
    type: "website",
    images: [
      {
        url: "https://www.tuuradventure.com/campamento-verano-hero.jpg",
        width: 1200,
        height: 630,
        alt: "TUUR Summer Camp 2026 — Adventure in nature for children in Marbella",
      },
    ],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Summer Camp for Children Marbella 2026 — TUUR Adventure",
    description:
      "Adventure in nature for children aged 6 to 14. From 29 June to 3 July. Canyoning, kayak, abseiling and camping. €235. Limited places.",
    images: ["https://www.tuuradventure.com/campamento-verano-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── FAQs ──────────────────────────────────────────────────────────────────────

export const summerCampFaqs: Faq[] = [
  {
    question: "What is the minimum age to take part?",
    answer:
      "The camp is designed for young people aged 6 to 14. Groups are organised by age range to ensure that activities are appropriate for each stage of development.",
  },
  {
    question: "Is food included?",
    answer:
      "The Thursday–Friday overnight expedition includes the camping night and the main meals for those days. Details about provisions for the remaining days will be shared upon booking.",
  },
  {
    question: "Where does the Summer Camp take place?",
    answer:
      "The camp takes place across multiple locations. Each day has its own meeting point. We will send the exact location before each activity. For the two-day expedition (Jimera de Líbar), the coach transfer from San Pedro is included in the price.",
  },
  {
    question: "What should I bring each day?",
    answer:
      "Comfortable clothing that can get wet, sports shoes that can get muddy, sun cream, a cap, a snack, and water. For the overnight camp you will need a sleeping bag, sleeping mat, and warm clothing — a detailed kit list will be sent ahead of each activity.",
  },
  {
    question: "How do I book a place?",
    answer:
      "Through the official form: https://forms.gle/oYKYxgVZgBL1As2v6. Places are limited and allocated on a first-come, first-served basis. The price is €235 by bank transfer. Your place is confirmed once payment is received.",
  },
];

// ─── JSON-LD: Event ────────────────────────────────────────────────────────────

export const jsonLdEvent = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "TUUR Summer Camp 2026",
  description:
    "Adventure nature camp for children aged 6 to 14 in Marbella. Canyoning, kayak, abseiling and camping.",
  startDate: "2026-06-29",
  endDate: "2026-07-03",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  image: "https://www.tuuradventure.com/campamento-verano-hero.jpg",
  location: {
    "@type": "Place",
    name: "San Pedro de Alcántara / Benahavís / Marbella",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Pedro de Alcántara",
      addressRegion: "Málaga",
      postalCode: "29670",
      addressCountry: "ES",
    },
  },
  offers: {
    "@type": "Offer",
    price: "235",
    priceCurrency: "EUR",
    url: "https://forms.gle/oYKYxgVZgBL1As2v6",
    availability: "https://schema.org/LimitedAvailability",
    validFrom: "2026-01-01",
  },
  organizer: {
    "@type": "Organization",
    name: "TUUR Adventure Experts",
    url: "https://www.tuuradventure.com",
  },
};

// ─── JSON-LD: FAQPage ──────────────────────────────────────────────────────────

export const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: summerCampFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

// ─── JSON-LD: LocalBusiness ────────────────────────────────────────────────────

export const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "TUUR Adventure Experts",
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
    latitude: 36.6175,
    longitude: -5.0283,
  },
  priceRange: "€€",
};
