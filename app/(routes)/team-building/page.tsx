import type { Metadata } from "next";
import { FormController } from "@/components/form-controller";
import Image from "next/image";
import Link from "next/link";

const title = "Team Building in Marbella & Málaga | Adventure Events";
const description =
  "Adventure team building in Marbella and Málaga: canyoning, hiking, e-bike and survival challenges for 10 to 300 people. Certified guides. Get a quote.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/team-building",
  },
  openGraph: {
    title,
    description,
    url: "https://www.tuuradventure.com/team-building",
    type: "website",
    images: [
      {
        url: "https://www.tuuradventure.com/team-building-bg.webp",
        alt: "Corporate team building in nature — Malaga and Costa del Sol",
      },
    ],
  },
};

// ─── Stats ────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "4.9★", label: "Average Rating" },
  { value: "20+ Yrs", label: "Field Experience" },
  { value: "300 Pax", label: "Max Group Capacity" },
];

const LOCATIONS = ["Marbella", "Málaga", "Granada", "Sevilla", "Cádiz"];

// ─── Guadalmina ───────────────────────────────────────────────────────────────
const GUADALMINA_HIGHLIGHTS = [
  {
    icon: "🎯",
    title: "100% Group Inclusivity & Psychological Safety",
    description:
      "All obstacles (jumps, slide, rappel) are 100% optional. Every team member participates at their own comfort level—no one is ever left behind.",
  },
  {
    icon: "🤝",
    title: "Flattens Corporate Hierarchies",
    description:
      "Shared adventure in a neutral setting dissolves office barriers. Executives and new hires connect on equal ground to build genuine workplace trust.",
  },
  {
    icon: "⏱️",
    title: "High Impact, Half-Day Logistics",
    description:
      "Just 15 minutes from Marbella. A complete 3-hour experience that fits seamlessly into your event schedule without taking up a full day.",
  },
  {
    icon: "🛡️",
    title: "Enterprise-Grade Safety & Compliance",
    description:
      "Fully licensed provider with €1M+ liability insurance, certified guides, top-tier gear, and strict small-group ratios for total peace of mind.",
  },
  {
    icon: "📸",
    title: "Turnkey Employer Branding Content",
    description:
      "Includes a complimentary high-resolution photo report captured by our guides. Ready to share in internal newsletters, social media, and recruitment.",
  },
];

const GUADALMINA_INCLUDED = [
  "Premium 5mm wetsuit, harness, helmet & rappel gear",
  "Certified professional guide throughout",
  "Civil liability & accident insurance",
  "Full photo report delivered via WhatsApp within 24h",
  "Safety briefing & technical support",
];

const GUADALMINA_EXTRAS = [
  "PRO Canyoning Shoes",
  "Water & Snacks",
  "Transfer Service from your Hotel",
  "Bookings at local restaurants",
];

// ─── Programs ────────────────────────────────────────────────────────────────
const PROGRAMS = [
  {
    images: [
      { src: "/ebikes.jpg", alt: "E-bike stage of the combined programme" },
      {
        src: "/guadalmina-2.webp",
        alt: "Canyoning stage of the combined programme in Benahavís",
      },
      {
        src: "/la-concha-2.webp",
        alt: "Hiking stage of the combined programme",
      },
    ],
    tag: "Most Versatile",
    title: "Combined Programme",
    subtitle: "Benahavís 3-in-1",
    description:
      "Canyoning + Hiking + E-Bike. Perfect for diverse groups with mixed tastes and fitness levels. One day, four experiences, zero logistics headaches — we handle everything.",
  },
  {
    images: [
      {
        src: "/zarzalones-1.webp",
        alt: "Survival Challenge team building activity",
      },
    ],
    tag: "Tailor-Made",
    title: "Survival Challenge",
    subtitle: "Beach or Mountain",
    description:
      "A fully customized outdoor challenge designed around your team's goals. Beach edition or mountain edition — we build the experience from scratch, incorporating strategic games, physical tests, and team-dynamics exercises.",
  },
  {
    images: [
      {
        src: "/la-concha-3.webp",
        alt: "Hiking team building at La Concha, Marbella",
      },
    ],
    tag: "Scenic",
    title: "Guided Hiking Tours",
    subtitle: "Andalusia's Best Trails",
    description:
      "From the iconic La Concha summit to hidden gorges in the Sierra de las Nieves. Moderate-level routes led by expert mountain guides, ideal for teams looking for a rewarding shared effort with stunning panoramic views.",
  },
  {
    images: [
      { src: "/e-bike-marbella-1.webp", alt: "E-bike tour team building Costa del Sol" },
    ],
    tag: "Eco & Fun",
    title: "E-Bike Tours",
    subtitle: "Costa del Sol",
    description:
      "Explore the mountains and coastal roads around Marbella on premium e-bikes. Effortless, exhilarating, and accessible for all fitness levels. A refreshing alternative for groups who want adventure without the exertion.",
  },
];

// ─── Team Coaching ────────────────────────────────────────────────────────────
const COACHING_ITEMS = [
  {
    icon: "💬",
    title: "Communication",
    description:
      "Break down barriers and build open, effective communication habits through shared challenges.",
  },
  {
    icon: "🧭",
    title: "Leadership",
    description:
      "Identify natural leaders and develop leadership awareness in a pressure-free setting.",
  },
  {
    icon: "🤝",
    title: "Conflict Resolution",
    description:
      "Address tensions constructively and transform them into drivers for team cohesion.",
  },
];

// ─── Why TUUR ─────────────────────────────────────────────────────────────────
const TRUST_ITEMS = [
  {
    color: "bg-teal-100",
    icon: "📸",
    title: "FREE Professional Photo Report",
    description:
      "Every session is fully documented by our guides. A curated photo report is delivered via WhatsApp within 24 hours — ready to share on your company's social media.",
  },
  {
    color: "bg-green-100",
    icon: "🛡️",
    title: "Safety is Our Commitment",
    description:
      "Certified professional guides, premium 5mm wetsuits, and regularly inspected technical gear on every single outing. Safety protocols are non-negotiable.",
  },
  {
    color: "bg-blue-100",
    icon: "👥",
    title: "Scalable for Any Group Size",
    description:
      "From 10 to 300 participants — we scale operations seamlessly, deploying multiple certified guides and coordinating logistics so your event runs without a hitch.",
  },
  {
    color: "bg-purple-100",
    icon: "🎯",
    title: "100% Custom Programs",
    description:
      "No two team events are the same. We design each program around your company culture, objectives, and group profile. You describe the outcome; we build the adventure.",
  },
];

// ─── B2B ──────────────────────────────────────────────────────────────────────
const AGENCY_POINTS = [
  "Exclusive B2B rates for recurring agency partners",
  "Dedicated account manager for each agency",
  "Fully documented operations (insurance, licenses, risk assessments)",
  "Co-branded options available on request",
  "White-label group packages for incentive travel programs",
  "Reliable, always-on technical support before & during events",
];

export default function Page() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[600px] h-svh max-h-[960px] flex items-center justify-center overflow-hidden">
        <Image
          src="/team-building-bg.webp"
          alt="Corporate team building in nature — Malaga and Costa del Sol"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl pt-20 mx-auto">
          <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-teal-300 mb-4">
            Lic. AT/MA/00141 · Malaga &amp; Costa del Sol
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Team Building in Nature
          </h1>
          <p className="text-lg sm:text-2xl opacity-90 max-w-3xl mx-auto mb-6">
            High-impact adventure team building designed for HR Managers and
            CEOs who demand results — not just a day out.
          </p>
          <p className="text-lg sm:text-2xl font-semibold mb-10">
            Safety is our commitment. Memories are our guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-full transition-colors"
            >
              Request a Custom Quote
            </a>
            <a
              href="#guadalmina"
              className="px-8 py-4 border-2 border-white/80 hover:bg-white/10 text-white font-bold rounded-full transition-colors"
            >
              Discover Our Star Activity
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4 text-center">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl sm:text-4xl font-bold text-teal-400">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── OUR COMPANY ──────────────────────────────────────────────────── */}
      <section className="pt-8 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-teal-600 font-medium mb-2 uppercase tracking-wide text-sm">
              Our Company
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 max-w-md">
              Adventure Team Building Experts
            </h2>
            <div className="flex flex-col gap-4 text-gray-700 leading-relaxed">
              <p>
                <strong>TUUR Adventure Experts</strong> is the leading adventure
                company for corporate events in Malaga and the Costa del Sol.
                Our mission is to use the mountain as a tool for personal and
                professional development.
              </p>
              <p>
                We serve <strong>thousands of guests per year</strong> with a
                consistent <strong>4.9/5 star rating</strong>, managing
                everything from a 10-person leadership retreat to a full-scale
                event for 300 participants — with the same attention to safety
                and detail at every scale.
              </p>
              <p>
                Our team is led by <strong>José Moreno</strong>, CEO and
                professional climber with over 20 years of global experience in
                high-altitude environments, canyoning, kayaking, and outdoor
                leadership — a guarantee of expertise that few can match.
              </p>
              <p>
                Behind every event is a{" "}
                <strong>multidisciplinary team</strong> of certified mountain
                guides and outdoor specialists, many with strong backgrounds in
                sports science, education, and group leadership. To elevate our
                corporate experiences, our team includes{" "}
                <strong>Jose Luis Villoslada Ekai</strong>, a professional team
                coach and senior mentor who seamlessly bridges executive
                coaching with nature-based dynamics to drive genuine corporate
                growth.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {LOCATIONS.map((location) => (
                <span
                  key={location}
                  className="px-4 py-2 bg-teal-50 text-teal-800 rounded-full text-sm"
                >
                  {location}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:pt-24">
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/who-we-are.webp"
                alt="TUUR Adventure Experts team of certified mountain guides"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-bold text-lg">
                  TUUR Adventure Experts Team
                </p>
                <p className="text-teal-300 text-sm">
                  Certified Mountain Guides · 20+ Years Experience
                </p>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-green-800 font-semibold mb-1">
                🛡️ Safety is Our Commitment
              </p>
              <p className="text-green-700 text-sm">
                All excursions are guided by{" "}
                <strong>certified professionals</strong> with state-issued
                qualifications. We carry full civil liability insurance and
                supply premium, regularly inspected gear for every participant,
                every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STAR ACTIVITY: GUADALMINA CANYON ─────────────────────────────── */}
      <section
        id="guadalmina"
        className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-background scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-teal-500 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-4">
              ⭐ Star Activity
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Guadalmina Canyon — The Narrowest Canyon
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The ultimate team experience near Marbella. Accessible for
              everyone, 100% fun, and 100% safe. The perfect ice-breaker for any
              corporate group.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 mb-12">
            <div className="relative h-72 sm:h-[500px] rounded-2xl overflow-hidden shadow-lg sm:col-span-2">
              <Image
                src="/guadalmina-3.webp"
                alt="Team jumping into a pool in the Guadalmina Canyon, Benahavís"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-3">
              <div className="relative h-40 sm:h-auto rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/guadalmina-2.webp"
                  alt="Corporate group in the water at the Guadalmina Canyon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 sm:h-auto rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/guadalmina-1.webp"
                  alt="Team walking along the river in the Guadalmina Canyon"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <ul className="space-y-6 lg:pt-8">
              {GUADALMINA_HIGHLIGHTS.map((h) => (
                <li key={h.title} className="flex items-start gap-4">
                  <span className="text-xl flex-shrink-0">{h.icon}</span>
                  <div>
                    <p className="font-medium text-gray-900">{h.title}</p>
                    <p className="text-gray-600 text-sm mt-0.5">
                      {h.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col gap-5">
              <h3 className="text-xl font-semibold text-gray-900">
                What&apos;s Included
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {GUADALMINA_INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold flex-shrink-0">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold text-gray-900">
                Optional Extras
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {GUADALMINA_EXTRAS.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gray-700 text-base leading-5 font-bold flex-shrink-0">
                      +
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 pt-2">
                <Link
                  href="/canyoning/guadalmina"
                  className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-full text-center transition-colors"
                >
                  View Full Activity Details
                </Link>
                <a
                  href="#contact"
                  className="px-6 py-3 border-2 border-gray-300 hover:border-gray-500 text-gray-700 font-semibold rounded-full text-center transition-colors"
                >
                  Request Group Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR PROGRAMS ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-teal-600 font-medium mb-2 uppercase tracking-wide text-sm">
              Versatility &amp; Custom Programs
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              An Experience for Every Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether your group craves adrenaline, scenic nature, or
              multi-activity variety — we have a program built for you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {PROGRAMS.map((program, index) => (
              <div
                key={program.title}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className={`relative flex ${index < 2 ? "h-52 lg:h-64" : "h-52"}`}
                >
                  {program.images.map((image) => (
                    <div key={image.src} className="relative flex-1">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-teal-500 text-white text-xs font-bold uppercase tracking-wide rounded-full">
                    {program.tag}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                    {program.subtitle}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-10">
            All programs are fully tailor-made.{" "}
            <a
              href="#contact"
              className="text-teal-600 font-semibold underline underline-offset-2"
            >
              Tell us about your group
            </a>{" "}
            and we&apos;ll design the perfect itinerary.
          </p>
        </div>
      </section>

      {/* ── TEAM COACHING ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 bg-teal-500 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              New Premium Service
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Team Coaching in Nature
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Take your team event to the next level. A professional{" "}
              <strong className="text-white">Team Coach</strong> can join our
              canyoning or hiking activities to lead targeted group dynamics in
              real time — using the natural environment as a catalyst for
              genuine transformation.
            </p>
            <ul className="space-y-4 mb-8">
              {COACHING_ITEMS.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-medium text-white">{item.title}</p>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            {/* TODO: link to the Team Coaching landing page once it exists */}
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-full transition-colors"
            >
              Learn More About Team Coaching →
            </a>
          </div>

          <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/la-concha-1.webp"
              alt="Team hiking together during a team coaching session"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── WHY TUUR ─────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/canyoning-group-guadalmina-waterfall.webp"
              alt="Corporate group celebrating together during a TUUR adventure"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-teal-600 font-medium mb-2 uppercase tracking-wide text-sm">
              Why TUUR
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Every Detail, Handled.
            </h2>
            <div className="space-y-6">
              {TRUST_ITEMS.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div
                    className={`w-11 h-11 rounded-full ${item.color} flex items-center justify-center flex-shrink-0 text-lg`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── B2B AGENCY BLOCK ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-teal-50/60">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 bg-teal-600 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              For Travel Agencies &amp; DMCs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              We Are Agency-Friendly
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              TUUR Adventure Experts is the trusted technical subcontractor for
              tourism professionals across Spain and Europe. We offer
              specialized support so you can focus on your client — we handle
              the adventure.
            </p>
            <ul className="space-y-3 mb-8">
              {AGENCY_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm text-gray-700"
                >
                  <span className="text-teal-600 font-bold flex-shrink-0">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full transition-colors"
            >
              Enquire About B2B Partnership
            </a>
          </div>

          <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/rio-verde-4.webp"
              alt="Large group activity managed by TUUR Adventure for a travel agency"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 rounded-xl p-4">
              <p className="text-gray-900 font-semibold text-sm mb-1">
                Technical Subcontracting Partner
              </p>
              <p className="text-gray-600 text-xs">
                Over 50 agencies across Europe already work with us. Join our
                professional network for priority booking and exclusive rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-gray-900 text-white scroll-mt-24"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let&apos;s Plan Your Event
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Tell us about your team — size, objectives, preferred dates — and
              we&apos;ll get back to you within 24 hours with a tailored
              proposal. We also welcome direct enquiries from travel agencies
              and DMCs.
            </p>
          </div>

          <div className="bg-white max-w-2xl mx-auto rounded-2xl p-6 sm:p-8 lg:p-10">
            <FormController />
          </div>
        </div>
      </section>
    </main>
  );
}
