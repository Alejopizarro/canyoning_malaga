import { Metadata } from "next";
import { Faq } from "../../activities/components/faqs";

// ─── SEO Metadata ───────────────────────────────────────────────────────────

export const guadalminaMetadata: Metadata = {
  title: "Guadalmina Canyoning Marbella | Best Beginner Canyon - From 45€",
  description:
    "Experience the best canyoning near Marbella in Guadalmina Canyon, Benahavís. Beginner & family-friendly from 6 y.o. Jumps, rappelling & slides. Every day, all year round. From 45€. Book now!",
  keywords: [
    "canyoning marbella",
    "guadalmina canyon",
    "canyoning benahavis",
    "canyoning near marbella",
    "canyoning malaga",
    "canyoning for beginners",
    "family canyoning marbella",
    "adventure activities marbella",
    "canyoning costa del sol",
    "barranquismo marbella",
    "the narrowest canyon",
  ],
  alternates: {
    canonical: "https://www.tuuradventure.com/canyoning/guadalmina",
  },
  openGraph: {
    title: "Guadalmina Canyoning Marbella | From 45€ - Every Day!",
    description:
      "The best canyoning experience near Marbella. Beginner & family-friendly canyon in Benahavís with jumps, rappelling & slides. All year round.",
    url: "https://www.tuuradventure.com/canyoning/guadalmina",
    siteName: "TUUR Canyoning Malaga",
    type: "website",
    images: [
      {
        url: "https://www.tuuradventure.com/guadalmina-1.webp",
        width: 1200,
        height: 630,
        alt: "Guadalmina Canyon - The Best Canyoning Experience Near Marbella",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guadalmina Canyoning Marbella | From 45€ - Every Day!",
    description:
      "The best canyoning near Marbella. Beginner & family-friendly. Jumps, rappelling & slides. All year round.",
    images: ["https://www.tuuradventure.com/guadalmina-1.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── FAQs ───────────────────────────────────────────────────────────────────

export const guadalminaFaqs: Faq[] = [
  {
    question: "Do I need previous canyoning experience?",
    answer:
      "No. The Guadalmina canyon is perfect for beginners and families. Our guides adapt the experience and provide all necessary training.",
  },
  {
    question: "Is the activity suitable for children?",
    answer:
      "Yes! Children from 6 years old (who can swim) can participate in a safe, fun, and beginner-friendly adventure. In winter (Dec-Mar), we recommend participants be over 12 years of age.",
  },
  {
    question: "How long does the activity take?",
    answer:
      "The full experience lasts about 2.5 to 3 hours, depending on the group size and speed.",
  },
  {
    question: "Is swimming required?",
    answer:
      "Yes, basic swimming skills are required, as the canyon involves several natural pools where floating and swimming are necessary. In any case, wetsuits help you to float. We can also provide life jackets free of charge for those who are less confident.",
  },
];

// ─── JSON-LD Structured Data ────────────────────────────────────────────────

export const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Guadalmina Canyoning Experience",
  description:
    "The best canyoning experience near Marbella in the Guadalmina Canyon. Beginner-friendly half-day activity perfect for families, friends, and groups. Includes jumps, rappelling, and natural slides.",
  image: "https://www.tuuradventure.com/guadalmina-1.webp",
  brand: {
    "@type": "Organization",
    name: "TUUR Adventure Experts",
  },
  offers: {
    "@type": "Offer",
    url: "https://www.tuuradventure.com/canyoning/guadalmina",
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
  name: "Guadalmina Canyoning - The Narrowest Canyon",
  description:
    "Discover the best canyoning experience near Marbella in the Guadalmina Canyon. Dynamic half-day activity perfect for beginners, friends, and families from 6 years old.",
  touristType: ["Adventure", "Family", "Beginners"],
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
        name: "Meet your guide at the parking area 15 minutes before start",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Gear up with canyoning equipment (wetsuit, harness, helmet)",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Walk to canyon entrance and attend safety briefing",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Canyoning: walk, swim, slide, jump and abseil for 2.5 hours",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Return to meeting point and finish",
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
    latitude: 36.6175,
    longitude: -5.0283,
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
  mainEntity: guadalminaFaqs.map((faq) => ({
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
      name: "Guadalmina",
      item: "https://www.tuuradventure.com/canyoning/guadalmina",
    },
  ],
};
