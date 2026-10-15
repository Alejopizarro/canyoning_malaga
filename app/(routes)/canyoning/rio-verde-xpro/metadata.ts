import { Metadata } from "next";
import { activityBreadcrumbJsonLd } from "@/lib/seo";
import {
  jsonLdPostalAddress,
  siteConfig,
  socialUrls,
} from "@/lib/site-config";
import { Faq } from "../../activities/components/faqs";

// ─── SEO Metadata ───────────────────────────────────────────────────────────

export const rioVerdeXproMetadata: Metadata = {
  title: "Río Verde Integral Canyoning X-Pro – 7h Private, From €89",
  description: "The full Río Verde integral descent in Otívar, Granada: an 18m natural slide, 15m rappels and turquoise pools. 7 hours, transfer included. Book online.",
  keywords: [
    "rio verde xpro canyoning",
    "rio verde integral canyoning",
    "advanced canyoning andalusia",
    "canyoning near marbella",
    "canyoning granada",
    "rio verde full route",
    "extreme canyoning malaga",
    "canyoning 18m slide",
    "barranquismo rio verde integral",
    "canyoning costa del sol advanced",
    "rio verde canyoning experience",
  ],
  alternates: {
    canonical: "https://www.tuuradventure.com/canyoning/rio-verde-xpro",
  },
  openGraph: {
    title: "Río Verde Integral Canyoning X-Pro – 7h Private, From €89",
    description: "The full Río Verde integral descent in Otívar, Granada: an 18m natural slide, 15m rappels and turquoise pools. 7 hours, transfer included. Book online.",
    url: "https://www.tuuradventure.com/canyoning/rio-verde-xpro",
    siteName: "TUUR Canyoning Malaga",
    type: "website",
    images: [
      {
        url: "https://www.tuuradventure.com/rio-verde-xpro-1.webp",
        width: 1200,
        height: 630,
        alt: "Río Verde X-Pro - Full Integral Canyoning Adventure in Andalusia",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Río Verde Integral Canyoning X-Pro – 7h Private, From €89",
    description: "The full Río Verde integral descent in Otívar, Granada: an 18m natural slide, 15m rappels and turquoise pools. 7 hours, transfer included. Book online.",
    images: ["https://www.tuuradventure.com/rio-verde-xpro-1.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── FAQs ───────────────────────────────────────────────────────────────────

export const rioVerdeXproFaqs: Faq[] = [
  {
    question: "Do I need previous experience for the X-Pro?",
    answer:
      "While this Advanced route is accessible to fit individuals, we recommend it for those with high physical stamina or prior canyoning experience due to its 7-hour duration.",
  },
  {
    question: "What is the difference between the Popular and X-Pro routes?",
    answer:
      'The X-Pro is the "Integral" version, doubling the length of the popular route and covering both sections of the canyon.',
  },
  {
    question: "Is there a minimum age?",
    answer:
      "Yes, due to the physical demand, the minimum age is +15/16 years old.",
  },
  {
    question: "Can I skip the 18-meter slide?",
    answer:
      "Yes, while the 18-meter natural slide is one of the highlights, there are alternative routes if you prefer not to do it. Our guides will always offer options.",
  },
  {
    question: "How should I prepare physically for this route?",
    answer:
      "We recommend being in good cardiovascular shape. The 7-hour duration requires stamina for swimming, walking, and climbing. Regular exercise and swimming practice in the weeks before will help you enjoy the experience fully.",
  },
];

// ─── JSON-LD Structured Data ────────────────────────────────────────────────

export const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Río Verde X-Pro Integral Canyoning",
  description:
    "The most complete and explosive canyoning adventure in Andalusia. Full Integral route covering both sections of Río Verde canyon with an 18m natural slide, 15m rappels, and turquoise pools. 7-hour advanced experience for true adventure seekers.",
  image: "https://www.tuuradventure.com/rio-verde-xpro-1.webp",
  brand: {
    "@type": "Organization",
    name: "TUUR Adventure Experts",
  },
  offers: {
    "@type": "Offer",
    url: "https://www.tuuradventure.com/canyoning/rio-verde-xpro",
    priceCurrency: "EUR",
    price: "89",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    validFrom: "2026-01-01",
  },
};

export const jsonLdTourExperience = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Río Verde X-Pro - Full Integral Canyoning near Marbella & Málaga",
  description:
    "The most explosive aquatic challenge in Andalusia. 7-hour Integral route through Río Verde canyon with 18m natural slide, 15m rappels, turquoise pools, and consecutive jumps. Advanced level for athletes and experienced adventurers. March to November.",
  touristType: ["Adventure", "Extreme Sports", "Athletes"],
  offers: {
    "@type": "Offer",
    price: "89",
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
        name: "Group Meeting: Meet your guide in Otivar 15 minutes before departure",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Technical Gear: Distribution and fitting of professional safety equipment",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Safety Briefing: Instructions on progression techniques and river safety",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "X-Pro Descent: 7 hours of integral canyoning (Section 1 + Section 2) with jumps, rappels, and the 18m slide",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Return: Conclusion of the activity and equipment collection",
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
    latitude: 36.8333,
    longitude: -3.7167,
  },
  priceRange: "€€",
};

export const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: rioVerdeXproFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const jsonLdBreadcrumb = activityBreadcrumbJsonLd({
  name: "Río Verde X-Pro",
  path: "/canyoning/rio-verde-xpro",
  category: { name: "Canyoning", categoryPath: "canyoning" },
});
