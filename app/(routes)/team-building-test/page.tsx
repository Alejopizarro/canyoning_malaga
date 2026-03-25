import { FormController } from "@/components/form-controller";
import Image from "next/image";
import Link from "next/link";

// ─── Stats ────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "10,000+", label: "Guests Per Year" },
  { value: "4.9★", label: "Average Rating" },
  { value: "20+ Yrs", label: "Field Experience" },
  { value: "300 Pax", label: "Max Group Capacity" },
];

// ─── Guadalmina Highlights ────────────────────────────────────────────────────
const GUADALMINA_HIGHLIGHTS = [
  {
    icon: "🟢",
    title: "Level 1 — Accessible for Everyone",
    description:
      "No prior experience required. Suitable from age 6. Your entire team participates, no one left behind.",
  },
  {
    icon: "🏆",
    title: "The Narrowest Canyon in the Region",
    description:
      "A breathtaking natural gorge near Benahavís (Marbella). The dramatic narrowing walls create a unique, unforgettable setting.",
  },
  {
    icon: "🌊",
    title: "Jumps, Toboggans & Rappelling",
    description:
      "Optional jumps up to 6 m, a fun toboggan slide, and a rappel descent. Everyone chooses their own level of adrenaline.",
  },
  {
    icon: "📅",
    title: "All-Year Activity",
    description:
      "Runnable 365 days a year thanks to its temperate waters. Plan your team event any time that suits your calendar.",
  },
];

// ─── Programs ────────────────────────────────────────────────────────────────
const PROGRAMS = [
  {
    image: "/zarzalones-1.webp",
    alt: "Survival Challenge team building activity",
    tag: "Tailor-Made",
    title: "Survival Challenge",
    subtitle: "Beach or Mountain",
    description:
      "A fully customized outdoor challenge designed around your team's goals. Beach edition or mountain edition — we build the experience from scratch, incorporating strategic games, physical tests, and team-dynamics exercises.",
  },
  {
    image: "/casares-1.webp",
    alt: "Benahavís 4-in-1 combined programme",
    tag: "Most Versatile",
    title: "Combined Programme",
    subtitle: "Benahavís 4-in-1",
    description:
      "Canyoning + Hiking + E-Bike + a scenic lunch stop. Perfect for diverse groups with mixed tastes and fitness levels. One day, four experiences, zero logistics headaches — we handle everything.",
  },
  {
    image: "/la-concha-1.webp",
    alt: "Hiking team building La Concha Marbella",
    tag: "Scenic",
    title: "Guided Hiking Tours",
    subtitle: "Andalusia's Best Trails",
    description:
      "From the iconic La Concha summit to hidden gorges in the Sierra de las Nieves. Moderate-level routes led by expert mountain guides, ideal for teams looking for a rewarding shared effort with stunning panoramic views.",
  },
  {
    image: "/ebikes.jpg",
    alt: "E-bike tour team building Costa del Sol",
    tag: "Eco & Fun",
    title: "E-Bike Tours",
    subtitle: "Costa del Sol",
    description:
      "Explore the mountains and coastal roads around Marbella on premium e-bikes. Effortless, exhilarating, and accessible for all fitness levels. A refreshing alternative for groups who want adventure without the exertion.",
  },
];

// ─── Trust / Why Choose Us ────────────────────────────────────────────────────
const TRUST_ITEMS = [
  {
    color: "bg-teal-100",
    textColor: "text-teal-700",
    icon: "📸",
    title: "FREE Professional Photo Report",
    description:
      "Every session is fully documented by our guides. A curated photo report is delivered via WhatsApp within 24 hours — ready to share on your company's social media.",
  },
  {
    color: "bg-green-100",
    textColor: "text-green-700",
    icon: "🛡️",
    title: "Safety is Our Commitment",
    description:
      "Certified professional guides, premium 5mm wetsuits, and regularly inspected technical gear on every single outing. Safety protocols are non-negotiable.",
  },
  {
    color: "bg-blue-100",
    textColor: "text-blue-700",
    icon: "👥",
    title: "Scalable for Any Group Size",
    description:
      "From 10 to 300 participants — we scale operations seamlessly, deploying multiple certified guides and coordinating logistics so your event runs without a hitch.",
  },
  {
    color: "bg-purple-100",
    textColor: "text-purple-700",
    icon: "🎯",
    title: "100% Custom Programs",
    description:
      "No two team events are the same. We design each program around your company culture, objectives, and group profile. You describe the outcome; we build the adventure.",
  },
];

export default function Page() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[80vh] min-h-[560px] flex items-center justify-center overflow-hidden">
        <Image
          src="/team-building-bg.webp"
          alt="Corporate team building in nature — Malaga and Costa del Sol"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 text-center text-white px-4 max-w-5xl pt-20 mx-auto">
          {/* License badge */}
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-300 mb-4">
            Lic. AT/MA/00141 · Malaga &amp; Costa del Sol
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transform Your Team in the Wild.
            <br />
            <span className="text-teal-300">Up to 300 Participants.</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto mb-10">
            High-impact adventure team building designed for HR Managers and
            CEOs who demand results — not just a day out. Safety is our
            commitment. Memories are our guarantee.
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
              className="px-8 py-4 border-2 border-white/70 hover:border-white hover:bg-white/10 text-white font-bold rounded-full transition-all"
            >
              Discover Our Star Activity
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl sm:text-4xl font-bold text-teal-400">
                {stat.value}
              </p>
              <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHO LEADS THE EXPERIENCE ──────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal-600 font-medium mb-2 uppercase tracking-wide text-sm">
                Our Company
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Adventure Team Building Experts
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>TUUR Adventure Experts</strong> (License AT/MA/00141) is
                the leading adventure company for corporate events in Malaga and
                the Costa del Sol. Our mission is to use the mountain as a tool
                for personal and professional development.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We serve over <strong>10,000 guests per year</strong> with a
                consistent <strong>4.9/5 star rating</strong>, managing
                everything from a 10-person leadership retreat to a full-scale
                event for 300 participants — with the same attention to safety
                and detail at every scale.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our team is led by <strong>José Moreno</strong>, CEO and
                professional climber with over 20 years of global experience in
                high-altitude environments, canyoning, kayaking, and outdoor
                leadership — a guarantee of expertise that few can match.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Marbella",
                  "Málaga",
                  "Granada",
                  "Sevilla",
                  "Benahavís",
                  "Sierra de las Nieves",
                ].map((location) => (
                  <span
                    key={location}
                    className="px-4 py-2 bg-teal-50 text-teal-800 rounded-full text-sm font-medium"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>

            {/* Jose Moreno feature */}
            <div className="flex flex-col gap-4">
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/jose-moreno.webp"
                  alt="José Moreno — CEO of TUUR Adventure, professional climber"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white font-bold text-lg">José Moreno</p>
                  <p className="text-teal-300 text-sm">
                    CEO &amp; Lead Guide · 20+ Years Experience
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
                  supply premium, regularly inspected gear for every
                  participant, every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STAR ACTIVITY: GUADALMINA CANYON ─────────────────────────────── */}
      <section
        id="guadalmina"
        className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
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

          {/* Image Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12">
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg col-span-2 sm:col-span-2">
              <Image
                src="/guadalmina-1.webp"
                alt="Guadalmina Canyon — team canyoning experience Benahavís"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative flex-1 rounded-2xl overflow-hidden shadow-lg min-h-[7rem]">
                <Image
                  src="/guadalmina-2.webp"
                  alt="Group jumping at Guadalmina Canyon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative flex-1 rounded-2xl overflow-hidden shadow-lg min-h-[7rem]">
                <Image
                  src="/guadalmina-3.webp"
                  alt="Rappelling in Guadalmina Canyon"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Highlights + CTA */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <ul className="space-y-5">
              {GUADALMINA_HIGHLIGHTS.map((h) => (
                <li key={h.title} className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{h.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900">{h.title}</p>
                    <p className="text-gray-600 text-sm mt-0.5">
                      {h.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-5">
              <h3 className="text-xl font-bold text-gray-900">
                What&apos;s Included
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  "Premium 5mm wetsuit, harness, helmet &amp; rappel gear",
                  "Certified professional guide throughout",
                  "Civil liability &amp; accident insurance",
                  "Full photo report delivered via WhatsApp within 24h",
                  "Safety briefing &amp; technical support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold flex-shrink-0">
                      ✓
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
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
            {PROGRAMS.map((program) => (
              <div
                key={program.title}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-52">
                  <Image
                    src={program.image}
                    alt={program.alt}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-teal-500 text-white text-xs font-bold uppercase tracking-wide rounded-full">
                    {program.tag}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                    {program.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
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

      {/* ── NEW: TEAM COACHING ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                canyoning or hiking activities to lead targeted group dynamics
                in real time — using the natural environment as a catalyst for
                genuine transformation.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  {
                    icon: "💬",
                    title: "Communication",
                    desc: "Break down barriers and build open, effective communication habits through shared challenges.",
                  },
                  {
                    icon: "🧭",
                    title: "Leadership",
                    desc: "Identify natural leaders and develop leadership awareness in a pressure-free setting.",
                  },
                  {
                    icon: "🤝",
                    title: "Conflict Resolution",
                    desc: "Address tensions constructively and transform them into drivers for team cohesion.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Placeholder — link this to the dedicated Team Coaching landing page once live */}
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-full transition-colors"
              >
                Learn More About Team Coaching →
              </a>
              {/* TODO: Replace href above with the dedicated Team Coaching landing page URL */}
            </div>

            <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/zarzalones-12.webp"
                alt="Team building benefits"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US / TRUST FACTORS ────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/rio-verde-3.webp"
                alt="Team building group on a challenging natural route"
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
                      className={`w-11 h-11 rounded-full ${item.color} flex items-center justify-center flex-shrink-0 text-xl`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── B2B AGENCY BLOCK ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-teal-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-teal-600 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                For Travel Agencies &amp; DMCs
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                We Are Agency-Friendly
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TUUR Adventure Experts is the trusted technical subcontractor
                for tourism professionals across Spain and Europe. We offer
                specialized support so you can focus on your client — we handle
                the adventure.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Exclusive B2B rates for recurring agency partners",
                  "Dedicated account manager for each agency",
                  "Fully documented operations (insurance, licenses, risk assessments)",
                  "Co-branded options available on request",
                  "White-label group packages for incentive travel programs",
                  "Reliable, always-on technical support before &amp; during events",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <span className="text-teal-600 font-bold flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: point }} />
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
                alt="Large group canyoning event managed by TUUR Adventure"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 rounded-xl p-4">
                <p className="text-gray-900 font-bold text-sm mb-1">
                  Technical Subcontracting Partner
                </p>
                <p className="text-gray-600 text-xs">
                  Over 50 agencies across Europe already work with us. Join our
                  professional network for priority booking and exclusive rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-gray-900 text-white"
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
