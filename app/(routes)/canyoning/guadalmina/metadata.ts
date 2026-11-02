import { Metadata } from "next";
import { activityBreadcrumbJsonLd } from "@/lib/seo";
import {
  jsonLdPostalAddress,
  siteConfig,
  socialUrls,
} from "@/lib/site-config";
import { complementaryData } from "@/lib/complementary-data";
import { Faq, faqAnswerToHtml } from "../../activities/components/faqs";

// ─── Age range (single source: lib/complementary-data.ts) ───────────────────

const { minimumAge, maxAge } = complementaryData.guadalmina;
export const guadalminaAgeRange = maxAge
  ? `${minimumAge} to ${maxAge}`
  : `${minimumAge}+`;

// ─── SEO Metadata ───────────────────────────────────────────────────────────

const metaDescription = `Guadalmina canyoning in the Angosturas gorge, Benahavís: jumps, slides and rappels. ~3 hours, all levels, ages ${guadalminaAgeRange}. Every day from €40. Book online.`;

export const guadalminaMetadata: Metadata = {
  title: "Guadalmina Canyoning in Benahavís – From €40 | Near Marbella",
  description: metaDescription,
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
    description: metaDescription,
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
    description: metaDescription,
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
    question: "What is the best time of day to do the Guadalmina Canyon?",
    answer:
      "It depends on the season. Our 10 AM session runs all year round. In summer, an early-morning start is the best choice to enjoy the turquoise pools before the heat and the crowds, and afternoon sessions are added on warmer days. In the colder months we focus on daytime sessions so you finish while the sun is still up. Private groups can request earlier start times. Check the booking calendar to see the times available on your date.",
  },
  {
    question:
      "What happens if it rains on the day of my canyoning or adventure activity?",
    answer: [
      "Adventure doesn't stop for a bit of rain! In fact, during the rainy season, canyons like Guadalmina offer an extra component of adventure that many of our guests love. It is perfectly possible to enjoy canyoning on a calm rainy day with our high-quality, regularly inspected neoprene and safety gear.",
      "However, your safety is our absolute commitment. Our certified professional guides have the definitive authority to modify or suspend any activity if weather conditions pose a danger to the group.",
      "In the event of heavy rain or adverse weather (Force Majeure), we follow this protocol:",
      [
        "- **Postponement:** We will first make every effort to reschedule the activity for a new date.",
        "- **Alternatives:** We may offer an alternative adventure route that is safer under current conditions.",
        "- **Refunds:** If rescheduling or alternatives are not possible, a 100% refund will be made (excluding any non-refundable external services like transport or restaurant bookings already confirmed).",
      ].join("\n"),
      "We will always keep you informed of the weather conditions in the specific activity location before we begin.",
    ].join("\n\n"),
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
    "The best canyoning experience near Marbella in the Guadalmina Canyon. Beginner-friendly half-day activity perfect for families, friends, and groups. Includes jumps, a 5-metre rappel, and natural slides.",
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
  additionalProperty: [
    { "@type": "PropertyValue", name: "Age range", value: guadalminaAgeRange },
    { "@type": "PropertyValue", name: "Duration", value: "About 3 hours" },
    { "@type": "PropertyValue", name: "Rappel", value: "Up to 5 meters" },
    {
      "@type": "PropertyValue",
      name: "Start times",
      value:
        "10 AM all year round; 9 AM Early Bird and 2 PM afternoon sessions added seasonally",
    },
    {
      "@type": "PropertyValue",
      name: "Meeting point",
      value: "Parque Torre Leonera, Benahavís, Málaga",
    },
    { "@type": "PropertyValue", name: "Transport", value: "Not included" },
    {
      "@type": "PropertyValue",
      name: "Canyoning shoes rental (optional)",
      value: "€8",
    },
  ],
};

export const jsonLdTourExperience = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Guadalmina Canyoning - The Narrowest Canyon",
  description:
    `Discover the best canyoning experience near Marbella in the Guadalmina Canyon. Dynamic half-day activity perfect for beginners, friends, and families, from ${guadalminaAgeRange} years old. Meeting point at Parque Torre Leonera, Benahavís (transport not included). Includes a 5-metre rappel; canyoning shoes can be hired for €8.`,
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
        name: "Meet your guide at Parque Torre Leonera, Benahavís, 15 minutes before start",
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
        name: "Canyoning: walk, swim, slide, jump and abseil (5-metre rappel) for about 2 to 2.5 hours",
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
      text: faqAnswerToHtml(faq.answer),
    },
  })),
};

export const jsonLdBreadcrumb = activityBreadcrumbJsonLd({
  name: "Guadalmina",
  path: "/canyoning/guadalmina",
  category: { name: "Canyoning", categoryPath: "canyoning" },
});
