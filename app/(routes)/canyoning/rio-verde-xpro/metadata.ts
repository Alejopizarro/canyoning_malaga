import { Metadata } from "next";
import { Faq } from "../../activities/components/faqs";

// ─── SEO Metadata ───────────────────────────────────────────────────────────

export const rioVerdeXproMetadata: Metadata = {
  title:
    "Río Verde X-Pro Integral Canyoning | Full Pitch 7h Adventure - From 79€",
  description:
    "Conquer the full Integral route of Río Verde canyon. Advanced 7h canyoning with 18m natural slide, 15m rappels & turquoise pools. Transfer included. From age 15. Mar-Nov. From 79€. Book now!",
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
    title: "Río Verde X-Pro Integral Canyoning | 7h Full Pitch - From 79€",
    description:
      "The most explosive aquatic challenge in Andalusia. Full Integral route with 18m slide, 15m rappels & turquoise pools. Transfer included. Mar-Nov.",
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
    title: "Río Verde X-Pro Integral Canyoning | 7h Full Pitch - From 79€",
    description:
      "The most explosive aquatic challenge in Andalusia. Full Integral route with 18m slide, 15m rappels & turquoise pools. Mar-Nov.",
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
      "While Level 3 is accessible to fit individuals, we recommend it for those with high physical stamina or prior canyoning experience due to its 7-hour duration.",
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
    price: "79",
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
  name: "Río Verde X-Pro - Full Integral Canyoning near Marbella & Málaga",
  description:
    "The most explosive aquatic challenge in Andalusia. 7-hour Integral route through Río Verde canyon with 18m natural slide, 15m rappels, turquoise pools, and consecutive jumps. Advanced level for athletes and experienced adventurers. March to November.",
  touristType: ["Adventure", "Extreme Sports", "Athletes"],
  offers: {
    "@type": "Offer",
    price: "79",
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
    latitude: 36.8333,
    longitude: -3.7167,
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
  mainEntity: rioVerdeXproFaqs.map((faq) => ({
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
      name: "Río Verde X-Pro",
      item: "https://www.tuuradventure.com/canyoning/rio-verde-xpro",
    },
  ],
};
