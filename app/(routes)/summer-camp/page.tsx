import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mountain, Users, Shield, Leaf } from "lucide-react";
import {
  summerCampMetadata,
  summerCampFaqs,
  jsonLdEvent,
  jsonLdFaq,
  jsonLdLocalBusiness,
} from "./metadata";
import DayCardSlider from "../campamento-de-verano/day-card-slider";
import GridHero, { GridHeroImage } from "@/components/grid-hero";

export const metadata = summerCampMetadata;

const BOOKING_URL = "https://forms.gle/oYKYxgVZgBL1As2v6";
const WHATSAPP_URL = "https://wa.me/34699199158";

const VALUE_PILLS = [
  { Icon: Mountain, text: "Real adventure in nature" },
  { Icon: Users, text: "Teamwork" },
  { Icon: Shield, text: "Certified safety" },
  { Icon: Leaf, text: "Values and personal growth" },
];

const INFO_DETAILS = [
  { icon: "📅", label: "Dates", value: "29 June to 3 July 2026" },
  {
    icon: "⏰",
    label: "Schedule",
    value:
      "08:30 to 14:30 (Monday to Wednesday) · Thursday departure 09:00, return Friday 15:00",
  },
  { icon: "👦", label: "Age", value: "6 to 14 years old" },
  { icon: "👥", label: "Groups", value: "Small groups by age range" },
  { icon: "📍", label: "Meeting point", value: "San Pedro de Alcántara" },
];

const PROGRAMME = [
  {
    day: "Monday 29 June",
    icon: "🏔️",
    label: "Guadalmina Canyon",
    location: "Benahavís",
    activities: [
      "Basic canyoning techniques",
      "Safety and technical knowledge",
      "Nature tips and wildlife awareness",
    ],
    time: "Meeting time 08:30",
    isNew: false,
    images: ["/summercamp-day1-f1.webp", "/summercamp-day1-f2.webp"],
  },
  {
    day: "Tuesday 30 June",
    icon: "🏖️",
    label: "Beach Day",
    location: "San Pedro de Alcántara",
    activities: [
      "Volleyball · Football",
      "Raft building",
      "Kayaks",
      "Games and team activities",
    ],
    time: "Meeting time 08:30",
    isNew: false,
    images: ["/summercamp-day2-f1.webp", "/summercamp-day2-f2.webp"],
  },
  {
    day: "Wednesday 1 July",
    icon: "🛶",
    label: "Kayak, Orienteering & Abseiling",
    location: "Turtle Lake · Nueva Andalucía",
    activities: [
      "Kayak",
      "Water games and activities",
      "NEW: 22m abseil on the dam",
      "Orienteering race",
    ],
    time: "Meeting time 08:30",
    isNew: true,
    images: [
      "/summercamp-day3-f1.webp",
      "/summercamp-day3-f2.webp",
      "/summercamp-day3-f3.webp",
      "/summercamp-day3-f4.webp",
    ],
  },
  {
    day: "Thursday 2 July",
    icon: "⛺",
    label: "2-Day Expedition — Río Guadiaro",
    location: "Cortes de la Frontera (transfer from S. Pedro included)",
    activities: [
      "Río Guadiaro river walk (aquatic trail)",
      "Train transfer to campsite",
      "📍 Jimera de Líbar (train transfer included)",
      "Camp setup",
      "Workshop / team activity",
      "Night games and activities",
      "Overnight in tents (optional)",
    ],
    time: "Departure 09:00 coach from S. Pedro",
    isNew: false,
    images: [
      "/summercamp-day4-f1.webp",
      "/summercamp-day4-f2.webp",
      "/summercamp-day4-f3.webp",
    ],
  },
  {
    day: "Friday 3 July",
    icon: "🎉",
    label: "Farewell Party & Return",
    location: "Campsite · San Pedro",
    activities: [
      "Pool games and party activities",
      "Zip line and games",
      "Farewell picnic",
      "Camp clearance",
      "Return to civilisation",
    ],
    time: "Return 15:00 S. Pedro",
    isNew: false,
    images: [],
  },
];

const NEW_THIS_YEAR = [
  {
    icon: "🧗🏻",
    title: "22-Metre Abseil",
    description:
      "We descend the dam at Turtle Lake — one of the most thrilling experiences in the camp.",
  },
  {
    icon: "🧭",
    title: "New Orienteering Race",
    description:
      "Participants compete in teams to find hidden markers, using a map and their surroundings to navigate.",
  },
  {
    icon: "⛺",
    title: "Upgraded Overnight Camp",
    description:
      "New challenges, team activities, and surprise events through the night in the heart of nature.",
  },
];

const SAFETY = [
  {
    icon: "🪪",
    title: "Certified Guides",
    description:
      "The TUUR team holds official qualifications in outdoor activities and youth group management.",
  },
  {
    icon: "🦺",
    title: "Approved Technical Equipment",
    description:
      "5mm neoprene wetsuits, helmets, and harnesses inspected every season.",
  },
  {
    icon: "🌊",
    title: "Low-Flow Rivers",
    description:
      "We select safe gorges and rivers, free from strong currents, suitable for all ages.",
  },
];

const GALLERY_MAIN: GridHeroImage = {
  src: "/summercamp-1.webp",
  alt: "TUUR Summer Camp 2026",
};

const GALLERY_IMAGES: GridHeroImage[] = [
  {
    src: "/summercamp-2.webp",
    alt: "TUUR Summer Camp — outdoor activities",
  },
  {
    src: "/summercamp-3.webp",
    alt: "TUUR Summer Camp — canyoning",
  },
  { src: "/summercamp-4.webp", alt: "TUUR Summer Camp — kayak" },
  { src: "/summercamp-5.webp", alt: "TUUR Summer Camp — beach" },
  { src: "/summercamp-6.webp", alt: "TUUR Summer Camp — abseiling" },
  { src: "/summercamp-7.webp", alt: "TUUR Summer Camp — camping" },
  { src: "/summercamp-8.webp", alt: "TUUR Summer Camp — river" },
  { src: "/summercamp-9.webp", alt: "TUUR Summer Camp — orienteering" },
  {
    src: "/summercamp-10.webp",
    alt: "TUUR Summer Camp — farewell party",
  },
];

export default function Page() {
  return (
    <div>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEvent) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdLocalBusiness),
        }}
      />

      {/* ── SECTION 1: HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
        <Image
          src="/summercamp-10.webp"
          alt="TUUR Summer Camp 2026 — Adventure in nature"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />

        <div className="relative z-10 flex flex-col items-center text-center text-white px-4 max-w-4xl mx-auto">
          <span className="bg-[#C8A84B] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Limited Places
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            TUUR Summer Camp 2026
          </h1>
          <p className="text-lg sm:text-xl text-white/85 mb-8 max-w-2xl">
            A week of adventure in nature · Ages 6 to 14 · Marbella
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#008e8a] hover:bg-[#00807b] text-white font-semibold px-8 py-3 rounded-xl transition-colors text-lg"
            >
              Book Your Place
            </a>
            <a
              href="#programme"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-xl transition-colors text-lg"
            >
              View Full Programme
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center flex-wrap gap-3 px-4">
          {["5 Days · 1 Night", "Ages 6 to 14", "€235 all-inclusive"].map(
            (stat) => (
              <span
                key={stat}
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-5 py-2 rounded-full text-sm font-medium"
              >
                {stat}
              </span>
            ),
          )}
        </div>
      </section>

      {/* ── SECTION 2: INTRO / EMOTIONAL HOOK ───────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Why does the TUUR Camp transform young people?
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-10">
            Those of us lucky enough to spend time in nature with friends during
            our youth remember those moments with particular fondness. As adults,
            we come to realise how essential they were for our personal growth,
            and for instilling values, teamwork, and an open mind towards the
            natural world. This is one of the projects that motivates our entire
            team most — especially because of the positive transformation that
            the young participants experience every year.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {VALUE_PILLS.map(({ Icon, text }) => (
              <span
                key={text}
                className="flex items-center gap-2 bg-teal-50 border border-[#008e8a] text-[#008e8a] px-4 py-2 rounded-full text-sm font-medium"
              >
                <Icon size={16} />
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTIONS 3–5: TWO-COLUMN STICKY LAYOUT ──────────────────────── */}
      <section className="bg-teal-50/40 py-16 sm:py-24 px-4 sm:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-16 items-start">
            {/* Left column */}
            <div className="lg:col-span-2 flex flex-col gap-16">
              {/* ── SECTION 3: PRICE & DETAILS ─────────────────── */}
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#008e8a]">
                  2026 Edition
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
                  Summer Camp — Marbella
                </h2>
                <ul className="space-y-4">
                  {INFO_DETAILS.map(({ icon, label, value }) => (
                    <li key={label} className="flex items-start gap-3">
                      <span className="text-2xl leading-none">{icon}</span>
                      <div>
                        <span className="font-semibold text-gray-900">
                          {label}:{" "}
                        </span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right column: sticky booking card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                  <div className="text-center mb-5">
                    <span className="text-5xl font-extrabold text-[#C8A84B]">
                      €235
                    </span>
                    <p className="text-gray-500 mt-1 text-sm">
                      Bank transfer. All inclusive.
                    </p>
                  </div>
                  <div className="space-y-2 mb-6 text-sm text-gray-600 border-t border-b border-gray-100 py-4">
                    <p className="flex items-center gap-2">
                      <span className="text-[#008e8a] font-bold">✓</span>
                      Bilingual Certified Instructors (Spanish &amp; English)
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#008e8a] font-bold">✓</span>
                      Approved equipment
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#008e8a] font-bold">✓</span>
                      All equipment required for the activities
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#008e8a] font-bold">✓</span>
                      Return transport to the campsite (Thursday &amp; Friday)
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#008e8a] font-bold">✓</span>
                      Thursday: afternoon snack &amp; dinner · Friday: breakfast
                      &amp; lunch
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#008e8a] font-bold">✓</span>
                      Full photo report
                    </p>
                    <p className="flex items-center gap-2 font-semibold text-gray-950">
                      <span className="text-[#008e8a] font-bold">✓</span>
                      ... And the best memories of the summer!
                    </p>
                  </div>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-[#008e8a] hover:bg-[#00807b] text-white font-bold py-3 rounded-xl transition-colors text-lg"
                  >
                    Book Now
                  </a>
                  <p className="text-center text-xs text-gray-400 mt-3">
                    Limited places · Confirmation via WhatsApp
                  </p>
                </div>
              </div>
            </div>

            {/* ── SECTION 4: WEEKLY PROGRAMME — full width (col-span-3) ── */}
            <div id="programme" className="col-span-1 lg:col-span-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                2026 Activity Programme
              </h2>
              <p className="text-gray-600 mb-8">
                Each year we introduce new adventures. In 2026 we premiere a
                22-metre abseil at Turtle Lake and a new orienteering race.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROGRAMME.map((day, index) => (
                  <DayCardSlider
                    key={day.day}
                    day={day.day}
                    icon={day.icon}
                    label={day.label}
                    location={day.location}
                    activities={day.activities}
                    time={day.time}
                    isNew={day.isNew}
                    images={day.images}
                    badgeText="NEW!"
                    className={
                      index === PROGRAMME.length - 1 ? "sm:col-span-2" : ""
                    }
                  />
                ))}
              </div>
            </div>

            {/* ── SECTION 5: NEW THIS YEAR — full width (col-span-3) ── */}
            <div id="new-this-year" className="col-span-1 lg:col-span-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                New Adventures This Year
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {NEW_THIS_YEAR.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center"
                  >
                    <span className="text-5xl block mb-4">{item.icon}</span>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: GALLERY ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-16 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Camp Moments
          </h2>
          <GridHero mainImage={GALLERY_MAIN} images={GALLERY_IMAGES} />
          <p className="text-center text-sm text-gray-400 mt-6">
            Real photos from previous TUUR Camp editions
          </p>
        </div>
      </section>

      {/* ── SECTION 7: TRUST / SAFETY ────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-16 bg-teal-50/40">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Safety is Our Priority
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
            {SAFETY.map((item) => (
              <div key={item.title} className="text-center">
                <span className="text-5xl block mb-4">{item.icon}</span>
                <h3 className="font-bold text-gray-900 text-xl mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="bg-white border border-gray-200 rounded-xl px-6 py-3 text-center text-sm text-gray-500">
              <span className="font-semibold text-gray-700">AT/MA/00141</span>
              {" · "}Active Tourism Registry · Junta de Andalucía{" · "}
              <span className="font-bold text-[#008e8a]">
                TUUR Adventure Experts
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FAQ ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-16 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start md:justify-between">
            <div className="flex flex-col mb-2 md:max-w-xs shrink-0">
              <h2 className="text-4xl sm:text-5xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 mt-4">
                Have questions about the camp? Here are the answers to the most
                common ones.
              </p>
            </div>
            <Accordion
              type="single"
              collapsible
              className="text-left max-w-3xl w-full space-y-4"
            >
              {summerCampFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>
                    <p>{faq.question}</p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: FINAL CTA ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 bg-gradient-to-br from-[#008e8a] to-[#00807b] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Book Before Places Run Out!
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            TUUR Summer Camp · 29 June – 3 July 2026 · Marbella · €235
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#008e8a] font-bold px-10 py-4 rounded-xl text-lg hover:bg-gray-100 transition-colors mb-6"
          >
            Book My Place Now
          </a>
          <p className="text-white/70 text-sm">
            Any questions?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:text-white/90"
            >
              Message us on WhatsApp
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
