import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Can You Go Canyoning in the Rain? Winter Guide to Málaga",
  description:
    "Can you go canyoning in the rain or in winter? How rain changes a canyon, how guides read the river, what to wear and what happens if the weather turns in Málaga.",
  keywords: [
    "canyoning in the rain",
    "can you go canyoning in the rain",
    "canyoning in winter",
    "canyoning bad weather",
    "is canyoning safe in the rain",
    "winter canyoning Malaga",
    "canyoning Malaga",
    "canyoning Marbella",
    "Guadalmina canyon winter",
    "canyon flash flood",
    "canyoning water temperature",
    "rainy day activities Marbella",
  ],
  openGraph: {
    title: "Can You Go Canyoning in the Rain? Winter Guide to Málaga",
    description:
      "How rain changes a canyon, how guides read the river, what to wear in winter and what happens if the weather turns.",
    type: "article",
    publishedTime: "2026-11-04T00:00:00.000Z",
    modifiedTime: "2026-11-04T00:00:00.000Z",
    authors: ["TUUR Adventure Experts"],
    images: [
      {
        url: "/canyoning-in-the-rain-guadalmina.webp",
        width: 1400,
        height: 1050,
        alt: "Canyoning group descending Guadalmina canyon on a rainy day",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Can You Go Canyoning in the Rain? Winter Guide to Málaga",
    description:
      "How rain changes a canyon, how guides read the river and what happens if the weather turns.",
  },
  alternates: {
    canonical: "/blog/can-you-go-canyoning-in-the-rain",
  },
};

const tableOfContents = [
  {
    id: "why-rain-changes-a-canyon",
    label: "Why rain changes everything in a canyon",
  },
  { id: "how-guides-read-the-river", label: "How guides read the river" },
  { id: "what-rain-adds", label: "What a bit of rain adds" },
  { id: "who-it-suits", label: "Who it suits best" },
  { id: "experience-matters", label: "Experience matters more than equipment" },
  { id: "if-the-weather-turns", label: "If the weather turns" },
  { id: "plan-b", label: "Plan B: canyons that come alive with the rain" },
  { id: "water-temperature", label: "How cold is the water in winter?" },
  { id: "what-to-wear", label: "What to wear in winter" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "planning-a-visit", label: "Planning a visit?" },
  { id: "sources", label: "Sources" },
];

const rainFactors = [
  {
    name: "The river basin",
    icon: "🏔️",
    description: (
      <>
        The flow does not depend on the rain over the canyon, but on all the
        land that drains into it, which can cover many square kilometres. A
        storm in the mountains upstream can{" "}
        <a
          href="https://ropewiki.com/Upstream_Precipitation"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 hover:underline"
        >
          send water down the canyon hours later
        </a>
        , while the sky above you is perfectly clear.
      </>
    ),
  },
  {
    name: "Tributaries",
    icon: "🌊",
    description: (
      <>
        Every stream that joins the river above the canyon adds its own water. A
        canyon that looks small can end up{" "}
        <a
          href="https://ozultimate.com/canyoning/catchments.htm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 hover:underline"
        >
          fed by a much larger system
        </a>
        , and the further downstream you go, the more water there usually is.
      </>
    ),
  },
  {
    name: "Water stored upstream",
    icon: "🏗️",
    description: (
      <>
        Dams and reservoirs can hold back a lot of water and calm the flow, but
        only while they have room left. How full they are on the day matters as
        much as the dam itself, because once a reservoir is full, what comes in
        goes out.
      </>
    ),
  },
  {
    name: "Water from the canyon walls",
    icon: "💧",
    description: (
      <>
        When it rains hard, water also pours off the rock and through small side
        gullies straight into the channel. These little streams are easy to
        overlook, but together they add a lot of water, and they react very
        quickly.
      </>
    ),
  },
  {
    name: "How wet the ground already is",
    icon: "🌱",
    description: (
      <>
        Once soil and vegetation are soaked, even a small amount of extra rain
        runs straight into the river. That is why experienced canyoners look at
        the{" "}
        <a
          href="https://fatcanyoners.org/2017/12/flash-flooding/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 hover:underline"
        >
          previous 48 hours
        </a>
        , not just the day itself.
      </>
    ),
  },
  {
    name: "Recovery time",
    icon: "⏳",
    description: (
      <>
        After rain, every canyon needs time to return to its normal flow, and
        how long it takes depends on the terrain. A canyon carved in marble does
        not behave like one carved in limestone.
      </>
    ),
  },
];

const guideChecks = [
  {
    name: "The basins",
    description:
      "Guides look at the river basins in the area, and at the rivers that flow into the one where the canyon is, to know how much land is sending water towards it.",
  },
  {
    name: "The previous days",
    description:
      "How the weather has evolved matters more than the forecast for the day: how much rain has fallen, where, and over how long. Litres per square metre that fall in one afternoon do not have the same effect as the same amount spread over four days.",
  },
  {
    name: "Official rain and river data",
    description:
      "Rain gauges and river-level stations show how much water has actually accumulated and how fast the rivers are rising.",
  },
  {
    name: "The reservoirs",
    description:
      "What percentage of its capacity each of the main reservoirs and dams in the area is at, to estimate whether they could overflow. Some reservoirs are also connected to each other, so one will not overflow until its neighbour is full.",
  },
];

const weatherSteps = [
  {
    name: "Postponement",
    icon: "📅",
    description:
      "We first make every effort to reschedule the activity for a new date.",
  },
  {
    name: "Alternatives",
    icon: "🪧",
    description:
      "We may offer a different adventure route that is safer under the current conditions (whether it's another canyon that does have the optimal conditions or another alternative activity).",
  },
  {
    name: "Refund",
    icon: "💶",
    description:
      "If rescheduling or an alternative is not possible, you receive a 100% refund, excluding non-refundable external services such as transport or restaurant bookings that were already confirmed.",
  },
];

const faqs = [
  {
    question: "Is it safe to go canyoning when it rains?",
    answer:
      "It depends on the canyon and on how hard it rains. In Guadalmina, light or moderate rain is usually fine thanks to the dam upstream. Several days of heavy rain are a different story, and our guides will not go ahead if conditions are unsafe.",
  },
  {
    question: "Can a canyon be dangerous even if it is not raining where I am?",
    answer:
      "Yes. A canyon is fed by the whole river basin around it, so heavy rain in the mountains upstream can raise the flow hours later, even under a clear sky. That is why our guides study the basin, the previous days and the reservoirs, not only the sky above the canyon.",
  },
  {
    question: "Will you cancel my activity because of a bit of rain?",
    answer:
      "No. We only change plans when the conditions are unsafe. If that happens, we follow the protocol above: postponement, an alternative route, or a refund.",
  },
  {
    question: "Can I go canyoning in Guadalmina all year round?",
    answer:
      "Almost all year, apart from extreme circumstances. The wettest months are usually February and March, and sometimes April and May.",
  },
  {
    question: "Can I go canyoning in winter in other canyons near Marbella?",
    answer:
      "Not in all of them. Zarzalones is open all year, while Río Verde (April to October) and Buitreras (mid-May to November) have a season that depends on water levels and conditions. Ask us which canyon suits your date.",
  },
  {
    question:
      "What is the water temperature of the Guadalmina River in winter?",
    answer:
      "Guadalmina has no snowmelt or high mountains upstream, so the water stays mild all year. Our guides' rough figures are around 18 °C in winter and 24 °C in summer. In winter we add a long-sleeve jacket and neoprene socks, which together with the vest give around 10 mm of neoprene over the torso.",
  },
  {
    question: "Can children join Guadalmina Canyon in winter?",
    answer:
      "In winter, the minimum age is 12 years and the minimum weight is 50 kg. When the river is high, the requirements can be stricter, so ask us before you book.",
  },
  {
    question: "What if the activity is cancelled because of the weather?",
    answer:
      "If we cannot reschedule or offer an alternative, you get a 100% refund, excluding any non-refundable external services (such as transport or restaurant bookings) that were already confirmed.",
  },
  {
    question:
      "Does the weather policy apply if I booked through a travel platform?",
    answer:
      "Yes. The same policy applies on every booking channel, because most platforms accept cancellations for force majeure.",
  },
];

const sources = [
  {
    label:
      "Canyoneering Safety, Zion National Park (U.S. National Park Service)",
    href: "https://www.nps.gov/zion/planyourvisit/canyoneeringsafety.htm",
  },
  {
    label: "Flash flood risks in Blue Mountains canyons (Fat Canyoners)",
    href: "https://fatcanyoners.org/2017/12/flash-flooding/",
  },
  {
    label: "Catchment areas and flash flood risk in canyons (Ozultimate)",
    href: "https://ozultimate.com/canyoning/catchments.htm",
  },
  {
    label: "Upstream precipitation (RopeWiki)",
    href: "https://ropewiki.com/Upstream_Precipitation",
  },
  {
    label: "Real Decreto 702/2019, Técnico Deportivo en Barrancos (BOE)",
    href: "https://www.boe.es/buscar/doc.php?id=BOE-A-2020-344",
  },
  {
    label: "Técnico Deportivo en Barrancos, grado medio (Junta de Andalucía)",
    href: "https://www.juntadeandalucia.es/organismos/desarrolloeducativoyformacionprofesional/areas/ensenanzas-escolarizacion/ensenanzas-deportivas/paginas/barrancos-tecnico-deportivo-gm.html",
  },
  {
    label: "Find a guide (AEGM)",
    href: "https://www.aegm.org/en/find-a-guide/",
  },
  {
    label: "The Top 10 Canyoning Spots in the Pyrénées (Manawa)",
    href: "https://www.manawa.com/en/articles/the-top-10-canyoning-spots-in-the-pyrenees",
  },
  {
    label: "Barranco de Ferreras (OpenCanyon)",
    href: "https://www.opencanyon.org/en/canyon/03a27d47-d15b-4fcf-baaf-694f54c335a4",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline:
        "Can You Go Canyoning in the Rain? A Practical Guide to Winter and Bad Weather in Málaga",
      description:
        "How rain changes a canyon, how guides read the river, what to wear in winter and what happens if the weather turns in Málaga.",
      image:
        "https://www.tuuradventure.com/canyoning-in-the-rain-guadalmina.webp",
      datePublished: "2026-11-04",
      dateModified: "2026-11-04",
      author: { "@type": "Organization", name: "TUUR Adventure Experts" },
      publisher: {
        "@type": "Organization",
        name: "TUUR Adventure",
        logo: {
          "@type": "ImageObject",
          url: "https://www.tuuradventure.com/logo-tuur.webp",
        },
      },
      mainEntityOfPage:
        "https://www.tuuradventure.com/blog/can-you-go-canyoning-in-the-rain",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

const externalLink = "text-teal-600 hover:underline";

export default function CanyoningInTheRainPage() {
  return (
    <article className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <header className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/canyoning-in-the-rain-guadalmina.webp"
          alt="Canyoning group descending Guadalmina canyon on a rainy day"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <p className="text-sm uppercase tracking-wider mb-4 text-white/80">
            Safety Guide
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Can You Go Canyoning in the Rain?
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            A practical guide to winter and bad weather in Málaga
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* TL;DR */}
        <div className="bg-teal-50 border-l-4 border-teal-500 p-6 mb-8 rounded-r-lg">
          <p className="text-lg text-teal-900 leading-relaxed m-0">
            <strong>TL;DR:</strong> Yes, you can go canyoning in winter, and
            even on a rainy day, but it depends mainly on the canyon and on the
            particular circumstances around it. Some canyons become dangerous
            after a few hours of rain. Others are much more fun with more flow,
            or on a rainy day.
          </p>
        </div>

        {/* Intro */}
        <p className="text-xl text-gray-600 leading-relaxed mb-6">
          Here is how to tell the difference, what changes when it rains, and
          what to ask before you book.
        </p>
        <p className="text-gray-600 leading-relaxed mb-12">
          <strong>About this guide.</strong> It focuses on canyons in the south
          of Spain, and specifically in the province of Málaga. It would be
          impossible to cover every canyon in the world, or even to generalise
          about those in Spain: a canyon in the Pyrenees does not behave like
          one in Andalusia, and what is true for one can be wrong for the other.
        </p>

        {/* Table of Contents */}
        <nav className="bg-gray-50 rounded-2xl p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Table of Contents
          </h2>
          <ul className="space-y-2">
            {tableOfContents.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-teal-600 hover:text-teal-800 hover:underline flex items-center gap-2"
                >
                  <span className="text-gray-400 text-sm">{index + 1}.</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Section: Why rain changes everything */}
        <section id="why-rain-changes-a-canyon" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why rain changes everything in a canyon
          </h2>
          <div className="space-y-5 leading-relaxed text-gray-600 [&_strong]:text-gray-900 mb-8">
            <p>
              A canyon is a narrow channel, and <strong>everything that falls on the
              hills around it ends up flowing through it</strong>. That is why many
              canyons are simply off-limits during rainy spells: the flow can
              grow quickly and become dangerous. Canyon floods are often
              triggered by storms miles away, and the{" "}
              <a
                href="https://www.nps.gov/zion/planyourvisit/canyoneeringsafety.htm"
                target="_blank"
                rel="noopener noreferrer"
                className={externalLink}
              >
                water level can rise within minutes
              </a>
              .
            </p>
            <p>Many factors decide how a canyon reacts, and they add up:</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {rainFactors.map((factor) => (
              <div
                key={factor.name}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{factor.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {factor.name}
                </h3>
                <p className="text-gray-600">{factor.description}</p>
              </div>
            ))}
          </div>
          <div className="space-y-5 leading-relaxed text-gray-600 [&_strong]:text-gray-900">
            <p>
              <strong>No single factor gives the answer.</strong> A canyon with a small basin can
              still be fed by a large river, a dam can absorb one storm and
              overflow with the next, and dry ground behaves very differently
              from soaked ground. Guides weigh all of this together, and the
              weight of each factor is different in every canyon. It is also
              different in every region: in a high-mountain canyon in the
              Pyrenees, for example, snowmelt can raise the flow even on a sunny
              day, which is not the case in Málaga.
            </p>
            <p>
              This is why canyoning communities generally advise{" "}
              <a
                href="https://fatcanyoners.org/2017/12/flash-flooding/"
                target="_blank"
                rel="noopener noreferrer"
                className={externalLink}
              >
                avoiding a canyon when rain is forecast or the weather looks
                unstable
              </a>
              , and not going the day after heavy rain unless you know exactly
              how that canyon responds. It is sound advice, and it is also why{" "}
              <strong>local knowledge matters so much</strong>: a guide who knows a canyon well
              knows how it reacts after rain.
            </p>
          </div>
        </section>

        {/* Section: How guides read the river */}
        <section id="how-guides-read-the-river" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How guides read the river
          </h2>
          <div className="space-y-5 leading-relaxed text-gray-600 [&_strong]:text-gray-900 mb-8">
            <p>
              <strong>Every canyon has its own warning signs</strong>, and a good guide knows
              them by heart. The examples below come from{" "}
              <Link href="/canyoning/guadalmina" className={externalLink}>
                <strong>Guadalmina</strong>
              </Link>
              , near Marbella, and from the canyons of Málaga we know best; a
              canyon in another region would have its own.
            </p>
            <p>
              But the decision does not start at the river. <strong>It starts days
              earlier</strong>, with a study of the whole picture:
            </p>
          </div>
          <div className="space-y-4 mb-8">
            {guideChecks.map((check, index) => (
              <div
                key={check.name}
                className="border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-teal-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    {check.name}
                  </h3>
                </div>
                <p className="text-gray-600">{check.description}</p>
              </div>
            ))}
          </div>
          <div className="space-y-5 leading-relaxed text-gray-600 [&_strong]:text-gray-900 mb-8">
            <p>
              On the day, right before the descent, <strong>guides check a fixed
              reference point</strong>; if the water covers that reference, the level is
              too high. They also look at how much foam the water makes, whether
              it carries branches and leaves, and whether whirlpools form in the
              pools.
            </p>
            <p>
              Some canyons go one step further and mark the start with a <strong>level
              gauge</strong>, a scale that shows how high the water is. From that height
              the flow can be calculated, and with experience it is easy to tell
              whether the river is suitable for beginners, for an intermediate
              level, or only for people with a high technical and physical
              level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <figure>
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/guadalmina-reference-point-normal-level.webp"
                  alt="Reference point of Guadalmina at normal water level"
                  fill
                  sizes="(min-width: 768px) 448px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Normal level: the reference rock is visible
              </figcaption>
            </figure>
            <figure>
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/guadalmina-reference-point-high-level.webp"
                  alt="Reference point of Guadalmina at high water level"
                  fill
                  sizes="(min-width: 768px) 448px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                High level: the reference rock is covered
              </figcaption>
            </figure>
          </div>

          <div className="space-y-5 leading-relaxed text-gray-600 [&_strong]:text-gray-900">
            <p>
              <strong>Guadalmina has one more thing to check:</strong> a dam
              just upstream of the canyoning section. It is an overflow dam: it
              has no spillway through which operators can decide when to release
              water, so once it is full, it simply overflows. Structures that
              hold back runoff{" "}
              <a
                href="https://fatcanyoners.org/2017/12/flash-flooding/"
                target="_blank"
                rel="noopener noreferrer"
                className={externalLink}
              >
                can lower flood risk
              </a>
              , and in practice the dam keeps the flow fairly steady, so an
              ordinary rainy day barely changes how the canyon behaves. The
              guides walk up to the dam and check with their own eyes whether it
              is overflowing, or how much room it has left.
            </p>
            <p>
              It is hard to say how much rain it takes to fill it, because that
              depends on how full it already was. The last time it overflowed,
              it took <strong>around four days of constant rain</strong>. When that happens, the
              flow rises and the descent is off the table.
            </p>
            <p>
              All these signs and reference points help, but they do not make
              the decision on their own. Nobody is simply checking a list of
              numbers: the final call rests on the guide&apos;s judgement, and
              that comes from years in the same rivers. After 20 years or more
              in canyoning, reading the water becomes almost instinctive. This
              is why, on days like these,{" "}
              <strong>
                who is leading your group matters more than anything else
              </strong>
              .
            </p>
          </div>
        </section>

        {/* Section: What a bit of rain adds */}
        <section id="what-rain-adds" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What a bit of rain adds
          </h2>
          <div className="space-y-5 leading-relaxed text-gray-600 [&_strong]:text-gray-900 mb-8">
            <p>
              With more water in the river, canyons like Guadalmina change
              character.{" "}
              <strong>
                Waterfalls and natural slides that you rarely see in summer
                appear,
              </strong>{" "}
              and the pools get deeper. That extra depth also makes it possible
              to <strong>jump from higher spots</strong> than usual, because
              there is more water to land in safely.
            </p>
            <p>
              It is perfectly possible to enjoy canyoning on a calm rainy day
              with high-quality, regularly inspected neoprene and safety gear,
              and it shows a side of the canyon that most summer visitors never
              see. The blues and greens get more intense, and{" "}
              <strong>the canyon feels wilder</strong>, as if you were somewhere
              deep in the Amazon.
            </p>
          </div>
          <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden">
            <Image
              src="/canyoning-guadalmina-after-rain.webp"
              alt="Two canyoners walking through Guadalmina canyon with extra flow after rain"
              fill
              sizes="(min-width: 896px) 864px, 100vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* Section: Who it suits best */}
        <section id="who-it-suits" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Who it suits best
          </h2>
          <div className="space-y-5 leading-relaxed text-gray-600 [&_strong]:text-gray-900 mb-8">
            <p>
              More water also means more force. For example, in winter, the
              Guadalmina Canyon{" "}
              <strong>minimum age rises from 6 to 12 years</strong> and the
              minimum weight, from 18 kg to 50 kg. When the flow is high, the
              range of suitable participants narrows even further: you need
              better physical condition, and enough body weight so the current
              does not push you around. This tends to happen in the wettest
              months, usually February and March and sometimes April and May.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-yellow-50 rounded-2xl p-6 text-center">
              <p className="text-sm uppercase tracking-wider text-yellow-700 font-semibold mb-3">
                ☀️ Summer
              </p>
              <p className="text-3xl md:text-4xl font-bold text-gray-900">
                6+ years
              </p>
              <p className="text-3xl md:text-4xl font-bold text-gray-900">
                18+ kg
              </p>
            </div>
            <div className="bg-sky-50 rounded-2xl p-6 text-center">
              <p className="text-sm uppercase tracking-wider text-sky-700 font-semibold mb-3">
                🌧️ Winter
              </p>
              <p className="text-3xl md:text-4xl font-bold text-gray-900">
                12+ years
              </p>
              <p className="text-3xl md:text-4xl font-bold text-gray-900">
                50+ kg
              </p>
            </div>
          </div>
          <p className="text-gray-600">
            Your guide will tell you before the start if conditions call for any
            change.
          </p>
        </section>

        {/* Section: Experience matters */}
        <section id="experience-matters" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Experience matters more than equipment
          </h2>
          <div className="space-y-5 leading-relaxed text-gray-600 [&_strong]:text-gray-900">
            <p>
              Not every operator has the experience or the know-how to work in
              these conditions. Reading a canyon after rain is a specialist
              skill, and it is very different from leading a walking tour.
              Before booking,{" "}
              <strong>it is worth asking who will lead your group</strong> (a
              certified canyoning guide*, or a general tourist guide?), what
              they check before entering the water, and what happens if the
              weather turns.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 my-8 text-gray-600">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              *How to recognise a qualified canyoning guide
            </h3>
            <p className="mb-4">
              In Spain, the official title is{" "}
              <a
                href="https://www.boe.es/buscar/doc.php?id=BOE-A-2020-344"
                target="_blank"
                rel="noopener noreferrer"
                className={externalLink}
              >
                Técnico Deportivo en Barrancos
              </a>
              , a state-recognised sports qualification of 1,440 hours that
              covers leading groups through canyons (as well as summer
              mid-mountain routes and via ferratas). The{" "}
              <a
                href="https://www.aegm.org/en/find-a-guide/"
                target="_blank"
                rel="noopener noreferrer"
                className={externalLink}
              >
                Spanish Mountain Guides Association (AEGM)
              </a>{" "}
              lists its members under &quot;Guía de Barrancos / Técnico
              Deportivo en Barrancos&quot;. Companies and self-employed guides
              must also be registered in the active tourism register.
            </p>
            <p>
              You may come across other qualifications too: related sports
              technician titles (TECO, TAFAD, TSEAS) and credentials accredited
              by AEGM or UIMLA. The international ICAN canyoning certification
              covers the same knowledge, and its holders can be perfectly
              capable guides, but <strong>in Spain it is not valid on its own</strong> without
              one of the qualifications above.
            </p>
          </div>
          <div className="space-y-5 leading-relaxed text-gray-600 [&_strong]:text-gray-900">
            <p>
              In our own team, on days with a lot of flow <strong>only the most
              experienced guides go out</strong>, even in a canyon as friendly as
              Guadalmina.
            </p>
            <p>
              <strong>Local knowledge adds one more layer.</strong> A guide who has seen the same
              river in every season for many years knows how the whole basin
              responds to rain, and that is something no forecast app can tell
              you.
            </p>
          </div>
        </section>

        {/* Section: If the weather turns */}
        <section id="if-the-weather-turns" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            If the weather turns
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Any serious operator should be able to explain what happens when
            conditions change. Here, <strong>the certified guides have the final say</strong>:
            they can modify or suspend any activity if the weather puts the
            group at risk, and they keep you informed about the conditions
            before the start. If heavy rain or adverse weather forces a change,
            the steps are:
          </p>
          <ol className="grid md:grid-cols-3 gap-6">
            {weatherSteps.map((step, index) => (
              <li key={step.name} className="bg-gray-50 rounded-2xl p-6">
                <div className="text-4xl mb-3">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {index + 1}. {step.name}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Section: Plan B */}
        <section id="plan-b" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Plan B: canyons that come alive with the rain
          </h2>
          <div className="space-y-5 leading-relaxed text-gray-600 [&_strong]:text-gray-900 mb-8">
            <p>
              When even Guadalmina is not safe, <strong>the day does not have to end
              there</strong>. This is the alternative route from the steps above, and it
              is where local knowledge pays off the most.
            </p>
            <p>
              <strong>Some canyons are dry for most of the year.</strong> When the rain arrives
              they fill with waterfalls and run with a force you never see in
              summer, which makes them spectacular. In the right conditions they
              can also be safe: our guides know how each of them behaves, when
              it is at its best, and when it is better to stay out.
            </p>
            <p>
              In the mountains of Málaga, these are{" "}
              <strong>the best-kept secrets of local canyoning guides</strong>.
              You will not find them offered anywhere, not even on our website,
              because they only make sense on certain days, after certain rain.
              They can be done when they are dry, but they lose much of the
              excitement.
            </p>
            <p>
              So if the forecast looks bad and Guadalmina is off the table, <strong>ask
              us what is possible that day</strong>. If no route is safe, the refund
              still applies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <figure>
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/canyon-dry-normal-state.webp"
                  alt="A dry canyon in its normal state"
                  fill
                  sizes="(min-width: 768px) 448px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Normal state: almost dry
              </figcaption>
            </figure>
            <figure>
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/canyon-after-heavy-rain.webp"
                  alt="The same canyon after heavy rain"
                  fill
                  sizes="(min-width: 768px) 448px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                After heavy rain: a full waterfall
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Section: Water temperature */}
        <section id="water-temperature" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How cold is the water in winter?
          </h2>
          <div className="space-y-5 leading-relaxed text-gray-600 [&_strong]:text-gray-900 mb-8">
            <p>
              As we said at the start, this guide is about the south of Spain,
              and water temperature is a good example of why that matters. In
              the Pyrenees and other high mountain ranges, canyons are fed by
              snowmelt and <strong>the water stays cold even in summer</strong>. The{" "}
              <a
                href="https://awaventura.com/barrancos/barranco-furco-broto/"
                target="_blank"
                rel="noopener noreferrer"
                className={externalLink}
              >
                Barranco del Furco
              </a>
              , one of the most popular beginner canyons in the Aragonese
              Pyrenees, is open from April to October and its average annual
              water temperature ranges from 7 °C to 10 °C, because the lakes are
              fed directly by snowmelt and high-mountain streams. Many other
              Pyrenean canyons are{" "}
              <a
                href="https://www.manawa.com/en/articles/the-top-10-canyoning-spots-in-the-pyrenees"
                target="_blank"
                rel="noopener noreferrer"
                className={externalLink}
              >
                open only from May or June to September or October
              </a>
              .
            </p>
            <p>
              Andalusia is not uniform either, and many of its best-known
              canyons are not an option in winter because of the water
              temperature and the flow.{" "}
              <Link href="/canyoning/rio-verde" className={externalLink}>
                Río Verde
              </Link>{" "}
              runs from April to October, with its best conditions from May to
              September, and{" "}
              <Link href="/canyoning/buitreras" className={externalLink}>
                Buitreras
              </Link>{" "}
              from mid-May to the end of November, always depending on water
              levels and safety conditions.{" "}
              <Link href="/canyoning/zarzalones" className={externalLink}>
                Zarzalones
              </Link>{" "}
              is the exception: it starts at the spring of the Río Grande, which
              keeps the water flowing all year. And{" "}
              <Link href="/canyoning/guadalmina" className={externalLink}>
                Guadalmina
              </Link>
              , our main canyon, is a different case again.
            </p>
            <p>
              Guadalmina has no snowmelt or high mountains upstream, so <strong>its
              water stays mild all year</strong>. Our guides&apos; rough figures are
              around 24 °C in summer and 18 °C in winter.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-yellow-50 rounded-2xl p-6 text-center">
              <p className="text-sm uppercase tracking-wider text-yellow-700 font-semibold mb-2">
                🌡️ Summer
              </p>
              <p className="text-4xl font-bold text-gray-900">~24 °C</p>
            </div>
            <div className="bg-sky-50 rounded-2xl p-6 text-center">
              <p className="text-sm uppercase tracking-wider text-sky-700 font-semibold mb-2">
                🌡️ Winter
              </p>
              <p className="text-4xl font-bold text-gray-900">~18 °C</p>
            </div>
          </div>
        </section>

        {/* Section: What to wear */}
        <section id="what-to-wear" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What to wear in winter
          </h2>
          <div className="space-y-5 leading-relaxed text-gray-600 [&_strong]:text-gray-900">
            <p>
              <strong>Water pulls heat from your body much faster than air does</strong>, which
              is why{" "}
              <a
                href="https://www.nps.gov/zion/planyourvisit/canyoneeringsafety.htm"
                target="_blank"
                rel="noopener noreferrer"
                className={externalLink}
              >
                wetsuits are standard canyoning gear
              </a>{" "}
              even in hot climates. In summer, adults wear only the sleeveless
              neoprene vest. From September or October, when the weather
              conditions change, we add a long-sleeve jacket over it, mandatory
              on cold days and throughout winter, and neoprene socks to wear
              inside your shoes. <strong>Our neoprene is 5 mm thick</strong>, so vest and jacket
              together give around 10 mm over the torso, with double insulation
              where your vital organs are. The neoprene also cushions bumps and
              scratches and adds buoyancy, which helps when the water is
              livelier.
            </p>
            <p>
              <strong>The wetsuit, harness, helmet and descending equipment are all
              included.</strong> For your feet, bring hiking boots (ideally with a grippy
              sole) or rent our professional canyoning shoes, which offer
              optimal protection and a non-slip sole on wet ground. Open
              footwear such as flip-flops is never allowed. <strong>Beach or pool water
              shoes (aqua shoes) are not suitable</strong> either: they are extremely
              slippery on wet rock, and too flexible to protect your feet when
              walking on rocks or from possible impacts. You only need to bring
              a towel and a full change of warm, dry clothes for afterwards. For
              more details, see our{" "}
              <Link
                href="/blog/what-is-basic-equipment-for-canyoning"
                className={externalLink}
              >
                guide to basic canyoning equipment
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Section: FAQ */}
        <section id="faq" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border border-gray-200 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Planning a visit */}
        <section id="planning-a-visit" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Planning a visit?
          </h2>
          <div className="space-y-5 leading-relaxed text-gray-600 [&_strong]:text-gray-900 mb-8">
            <p>
              If you would like to see Guadalmina in winter, you will find
              details and availability on our{" "}
              <Link href="/canyoning/guadalmina" className={externalLink}>
                Guadalmina canyoning page
              </Link>
              . Not sure about the forecast? <strong>Write to us before you book</strong> and we
              will tell you how the canyon looks that day.
            </p>
            <p>
              Looking for something different? We also run{" "}
              <Link href="/canyoning/zarzalones" className={externalLink}>
                Zarzalones
              </Link>
              ,{" "}
              <Link href="/canyoning/buitreras" className={externalLink}>
                Buitreras
              </Link>{" "}
              and{" "}
              <Link href="/canyoning/rio-verde" className={externalLink}>
                Río Verde
              </Link>
              , each with its own season, so ask which one is in good condition
              on your date.
            </p>
          </div>
          <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden">
            <Image
              src="/canyoning-group-guadalmina-waterfall.webp"
              alt="Smiling canyoners under a waterfall at the end of the descent in Guadalmina"
              fill
              sizes="(min-width: 896px) 864px, 100vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-linear-to-r from-teal-500 to-teal-600 rounded-2xl p-8 text-center text-white mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Want to See Guadalmina in Winter?
          </h2>
          <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
            Check availability or write to us before you book and we will tell
            you how the canyon looks that day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/canyoning/guadalmina"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Guadalmina Canyoning
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Sources */}
        <section id="sources" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
            {sources.map((source) => (
              <li key={source.href}>
                <a
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLink}
                >
                  {source.label}
                </a>
              </li>
            ))}
            <li>
              TUUR canyon pages:{" "}
              <Link href="/canyoning/zarzalones" className={externalLink}>
                Zarzalones
              </Link>
              ,{" "}
              <Link href="/canyoning/buitreras" className={externalLink}>
                Buitreras
              </Link>
              ,{" "}
              <Link href="/canyoning/rio-verde" className={externalLink}>
                Río Verde
              </Link>
            </li>
          </ul>
        </section>

        {/* Author/Date Info */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
              <span className="text-teal-600 font-bold">TA</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">
                TUUR Adventure Experts
              </p>
              <p className="text-sm text-gray-500">
                Published: November 4, 2026 · 11 min read
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
