import { Metadata } from "next";
import { activityBreadcrumbJsonLd } from "@/lib/seo";
import {
  jsonLdPostalAddress,
  siteConfig,
  socialUrls,
} from "@/lib/site-config";
import { Faq } from "../../activities/components/faqs";

// ─── SEO Metadata ───────────────────────────────────────────────────────────

export const guadalminaMetadata: Metadata = {
  title: "Guadalmina Canyoning in Benahavís – From €40 | Near Marbella",
  description: "Guadalmina canyoning in the Angosturas gorge, Benahavís: jumps, slides and rappels. 3 hours, all levels, from age 6. Every day from €40. Book online.",
  authors: [{ name: "José Moreno" }],
  publisher: "TUUR Adventure Experts",
  keywords: [
    "guadalmina canyon",
    "canyon of the angosturas",
    "canyoning benahavis",
    "canyoning near marbella",
    "benahavis canyon",
    "guadalmina river",
    "family canyoning marbella",
    "the narrowest canyon",
  ],
  alternates: {
    canonical: "https://www.tuuradventure.com/canyoning/guadalmina",
  },
  openGraph: {
    title: "Guadalmina Canyoning in Benahavís – From €40 | Near Marbella",
    description: "Guadalmina canyoning in the Angosturas gorge, Benahavís: jumps, slides and rappels. 3 hours, all levels, from age 6. Every day from €40. Book online.",
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
    title: "Guadalmina Canyoning in Benahavís – From €40 | Near Marbella",
    description: "Guadalmina canyoning in the Angosturas gorge, Benahavís: jumps, slides and rappels. 3 hours, all levels, from age 6. Every day from €40. Book online.",
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
    price: "40",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    validFrom: "2026-01-01",
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
    price: "40",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
  provider: {
    "@type": "TouristInformationCenter",
    name: "TUUR Adventure Experts",
    url: "https://www.tuuradventure.com",
    telephone: siteConfig.phone,
    address: jsonLdPostalAddress,
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
  telephone: siteConfig.phone,
  email: siteConfig.email,
  sameAs: socialUrls,
  address: jsonLdPostalAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.6175,
    longitude: -5.0283,
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

export const jsonLdBreadcrumb = activityBreadcrumbJsonLd({
  name: "Guadalmina",
  path: "/canyoning/guadalmina",
  category: { name: "Canyoning", categoryPath: "canyoning" },
});
