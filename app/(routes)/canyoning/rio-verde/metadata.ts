import { Metadata } from "next";
import { activityBreadcrumbJsonLd } from "@/lib/seo";
import {
  jsonLdPostalAddress,
  siteConfig,
  socialUrls,
} from "@/lib/site-config";
import { Faq } from "../../activities/components/faqs";

// ─── SEO Metadata ───────────────────────────────────────────────────────────

export const rioVerdeMetadata: Metadata = {
  title: "Río Verde Canyoning in Granada – From €75 | Turquoise Pools",
  description: "Río Verde canyoning in Otívar, Granada: turquoise pools, optional jumps, slides and two rappels. 4.5 hours, from age 9, April to October. Book online.",
  keywords: [
    "rio verde canyoning",
    "rio verde canyon",
    "canyoning granada",
    "canyoning otivar",
    "turquoise water canyoning",
    "canyoning near malaga",
    "canyoning andalusia",
    "adventure granada",
    "canyoning sierra de almijara",
    "barranquismo rio verde",
    "canyoning costa del sol",
  ],
  alternates: {
    canonical: "https://www.tuuradventure.com/canyoning/rio-verde",
  },
  openGraph: {
    title: "Río Verde Canyoning in Granada – From €75 | Turquoise Pools",
    description: "Río Verde canyoning in Otívar, Granada: turquoise pools, optional jumps, slides and two rappels. 4.5 hours, from age 9, April to October. Book online.",
    url: "https://www.tuuradventure.com/canyoning/rio-verde",
    siteName: "TUUR Canyoning Malaga",
    type: "website",
    images: [
      {
        url: "https://www.tuuradventure.com/rio-verde-1.webp",
        width: 1200,
        height: 630,
        alt: "Río Verde Canyon - Turquoise Water Canyoning Near Granada",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Río Verde Canyoning in Granada – From €75 | Turquoise Pools",
    description: "Río Verde canyoning in Otívar, Granada: turquoise pools, optional jumps, slides and two rappels. 4.5 hours, from age 9, April to October. Book online.",
    images: ["https://www.tuuradventure.com/rio-verde-1.webp"],
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
      "No. The popular Río Verde route (Moderate) is suitable for beginners and families. Our certified guides will teach you all the necessary technical skills.",
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
  image: "https://www.tuuradventure.com/rio-verde-1.webp",
  brand: {
    "@type": "Organization",
    name: "TUUR Adventure Experts",
  },
  offers: {
    "@type": "Offer",
    url: "https://www.tuuradventure.com/canyoning/rio-verde",
    priceCurrency: "EUR",
    price: "75",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    validFrom: "2026-03-01",
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
  image: "https://www.tuuradventure.com/logo-tuur.webp",
  url: "https://www.tuuradventure.com",
  telephone: siteConfig.phone,
  email: siteConfig.email,
  sameAs: socialUrls,
  address: jsonLdPostalAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.8331,
    longitude: -3.7268,
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

export const jsonLdBreadcrumb = activityBreadcrumbJsonLd({
  name: "Río Verde",
  path: "/canyoning/rio-verde",
  category: { name: "Canyoning", categoryPath: "canyoning" },
});
