import { Metadata } from "next";
import { Faq } from "../activities/components/faqs";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const campamentoMetadata: Metadata = {
  title: "Campamento de Verano para Niños en Marbella 2026 — TUUR Adventure",
  description:
    "Campamento de aventura en la naturaleza para niños de 6 a 14 años. Del 29 de junio al 3 de julio en Marbella. Barranquismo, kayak, rápel y acampada. 235 €. Plazas limitadas.",
  authors: [{ name: "TUUR Adventure Experts" }],
  publisher: "TUUR Adventure Experts",
  keywords: [
    "campamento verano marbella",
    "campamento niños marbella",
    "campamento aventura marbella",
    "campamento naturaleza marbella",
    "actividades niños marbella verano",
    "barranquismo niños marbella",
    "campamento kayak marbella",
    "campamento rapel niños",
    "campamento 2026 marbella",
    "campamento costa del sol",
  ],
  alternates: {
    canonical: "https://www.tuuradventure.com/campamento-de-verano",
  },
  openGraph: {
    title: "Campamento de Verano para Niños en Marbella 2026 — TUUR Adventure",
    description:
      "Campamento de aventura en la naturaleza para niños de 6 a 14 años. Del 29 de junio al 3 de julio en Marbella. Barranquismo, kayak, rápel y acampada. 235 €. Plazas limitadas.",
    url: "https://www.tuuradventure.com/campamento-de-verano",
    siteName: "TUUR Adventure Experts",
    type: "website",
    images: [
      {
        url: "https://www.tuuradventure.com/campamento-verano-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Campamento de Verano TUUR 2026 — Aventura en la naturaleza para niños en Marbella",
      },
    ],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campamento de Verano Niños Marbella 2026 — TUUR Adventure",
    description:
      "Aventura en la naturaleza para niños de 6 a 14 años. Del 29 junio al 3 julio. Barranquismo, kayak, rápel y acampada. 235 €. Plazas limitadas.",
    images: ["https://www.tuuradventure.com/campamento-verano-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── FAQs ──────────────────────────────────────────────────────────────────────

export const campamentoFaqs: Faq[] = [
  {
    question: "¿Qué edad mínima se requiere para participar?",
    answer:
      "El campamento está diseñado para jóvenes de 6 a 14 años. Los grupos se organizan por tramos de edad para garantizar que las actividades sean adecuadas a cada etapa de desarrollo.",
  },
  {
    question: "¿Está incluida la comida?",
    answer:
      "El horario es de 8:30 a 14:30 h de lunes a jueves. Los participantes deben traer su propia merienda y agua. La excursión de los días jueves-viernes incluye la noche de acampada; para esa jornada se comunicarán los detalles de avituallamiento al realizar la reserva.",
  },
  {
    question: "¿Desde dónde sale el autobús?",
    answer:
      "El punto de salida habitual es San Pedro de Alcántara. Para la excursión de dos días (Jimera de Líbar), el traslado en autobús desde San Pedro está incluido en el precio.",
  },
  {
    question: "¿Qué debo traer cada día?",
    answer:
      "Ropa cómoda que pueda mojarse, calzado de agua o deportivas viejas, protector solar, gorra o gorro de baño, snack y agua. Para el campamento nocturno necesitarás saco de dormir, esterilla y ropa de abrigo — recibirás una lista detallada al confirmar la reserva.",
  },
  {
    question: "¿Cómo reservo una plaza?",
    answer:
      "A través del formulario oficial: https://forms.gle/oYKYxgVZgBL1As2v6. Las plazas son limitadas y se asignan por orden de llegada. El precio es 235 € por transferencia bancaria o 220 € en efectivo. La plaza queda confirmada una vez recibido el pago.",
  },
];

// ─── JSON-LD: Event ────────────────────────────────────────────────────────────

export const jsonLdEvent = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Campamento de Verano TUUR 2026",
  description:
    "Campamento de aventura en la naturaleza para niños de 6 a 14 años en Marbella. Barranquismo, kayak, rápel y acampada.",
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
  mainEntity: campamentoFaqs.map((faq) => ({
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
