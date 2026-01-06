import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is Canyoning, Canyoneering or Kloofing? | Complete Guide",
  description:
    "Discover everything about canyoning: techniques like rappelling, jumping and sliding, difficulty levels, and the best canyons in Andalusia. Perfect guide for beginners and experts.",
  keywords: [
    "canyoning",
    "canyoneering",
    "kloofing",
    "rappelling",
    "abseiling",
    "adventure sports",
    "canyons Andalusia",
    "canyoning Malaga",
    "canyoning Marbella",
  ],
  openGraph: {
    title: "What is Canyoning, Canyoneering or Kloofing? | Complete Guide",
    description:
      "Discover everything about canyoning: techniques, difficulty levels, and the best canyons in Andalusia.",
    type: "article",
    publishedTime: "2025-01-15",
    authors: ["TUUR Adventure"],
  },
};

const tableOfContents = [
  { id: "what-is-canyoning", label: "What is Canyoning?" },
  { id: "history-of-canyoning", label: "A Brief History of Canyoning" },
  { id: "canyoning-techniques", label: "Essential Canyoning Techniques" },
  { id: "canyoning-levels", label: "Canyoning Difficulty Levels" },
  { id: "best-canyons-andalusia", label: "Best Canyons in Andalusia" },
  { id: "conclusion", label: "Conclusion" },
];

const techniques = [
  {
    name: "Slides",
    icon: "🎢",
    description:
      "Natural water slides formed by smooth rock surfaces polished by centuries of water flow. You slide down these natural toboggans into crystal-clear pools below. Some slides can reach up to 10 meters in length!",
  },
  {
    name: "Jumps",
    icon: "🦘",
    description:
      "Jumping from various heights into deep pools is one of the most thrilling aspects of canyoning. Heights typically range from 2 to 10 meters, and our guides always check pool depths and demonstrate jumps first. Jumps are always optional!",
  },
  {
    name: "Rappelling (Abseiling)",
    icon: "🧗",
    description:
      "Descending waterfalls using ropes and specialized equipment. This technique allows you to safely descend vertical drops that would otherwise be impossible. Our guides set up all ropes and provide complete instruction.",
  },
  {
    name: "Swimming",
    icon: "🏊",
    description:
      "Swimming through natural pools and navigating water sections is an integral part of canyoning. The neoprene wetsuit keeps you warm and buoyant in the refreshing mountain waters.",
  },
];

const difficultyLevels = [
  {
    level: "Beginner",
    color: "bg-green-500",
    description:
      "Perfect for first-timers and families. Short rappels (under 10m), optional small jumps, and easy terrain. No prior experience needed.",
    examples: ["Guadalmina Canyon", "Zarzalones Canyon"],
  },
  {
    level: "Intermediate",
    color: "bg-yellow-500",
    description:
      "For those with some experience or good physical condition. Longer rappels, higher jumps, and more technical sections.",
    examples: ["Río Verde Canyon", "Lentegí Canyon"],
  },
  {
    level: "Advanced",
    color: "bg-red-500",
    description:
      "Challenging routes requiring experience and excellent fitness. Long rappels (30m+), exposed sections, and full-day adventures.",
    examples: ["Buitreras Canyon", "Zarzalones Integral"],
  },
];

const featuredCanyons = [
  {
    name: "Guadalmina Canyon",
    level: "Beginner",
    duration: "3 hours",
    location: "Benahavís, Marbella",
    description:
      "The perfect introduction to canyoning! Located just 15 minutes from Marbella, this beautiful canyon features natural slides, refreshing pools, and small jumps. Ideal for families and first-timers.",
    slug: "/canyoning/guadalmina",
    image: "/guadalmina-1.webp",
  },
  {
    name: "Zarzalones Canyon",
    level: "Beginner-Intermediate",
    duration: "4 hours",
    location: "Tolox, Málaga",
    description:
      "A stunning canyon in the Sierra de las Nieves National Park. Features beautiful rock formations, multiple rappels up to 15 meters, and crystal-clear emerald pools.",
    slug: "/canyoning/zarzalones",
    image: "/zarzalones-1.webp",
  },
  {
    name: "Río Verde Canyon",
    level: "Intermediate",
    duration: "4-5 hours",
    location: "Otívar, Granada",
    description:
      "Located in Almijara Nature Reserve, this sporty canyon offers crystal-clear waters, large pools, and numerous opportunities for jumping, abseiling, and sliding.",
    slug: "/canyoning/rio-verde",
    image: "/rio-verde-1.webp",
  },
  {
    name: "Buitreras Canyon",
    level: "Advanced",
    duration: "6 hours",
    location: "El Colmenar, Málaga",
    description:
      'Known as the "Cathedral of the Guadiaro," this full-day adventure takes you through a deep, narrow gorge declared a Natural Monument. Features rappelling and jumps up to 9 metres.',
    slug: "/canyoning/buitreras",
    image: "/buitreras-1.webp",
  },
];

export default function WhatIsCanyoningPage() {
  return (
    <article className="bg-white">
      {/* Hero Section */}
      <header className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/rio-verde-4.webp"
          alt="Group of people canyoning through a beautiful canyon with waterfalls"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <p className="text-sm uppercase tracking-wider mb-4 text-white/80">
            Adventure Guide
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            What is Canyoning, Canyoneering or Kloofing?
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            The complete guide to this thrilling adventure sport
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Intro */}
        <p className="text-xl text-gray-600 leading-relaxed mb-12">
          Discover everything you need to know about canyoning, from basic
          techniques to the best canyons in Andalusia. Whether you&apos;re a
          beginner or looking to advance your skills, this comprehensive guide
          covers it all.
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

        {/* Section: What is Canyoning */}
        <section id="what-is-canyoning" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What is Canyoning?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              <strong>Canyoning</strong> (known as <em>canyoneering</em> in the
              United States and <em>kloofing</em> in South Africa) is an
              adventure sport that involves descending through river canyons,
              typically in their upper or middle sections where the terrain
              creates fast-flowing water, waterfalls, and natural slides.
            </p>
            <p>
              This thrilling activity combines multiple skills including
              swimming, walking, climbing small obstacles, and mastering two
              signature techniques: <strong>rappelling</strong> and{" "}
              <strong>jumping</strong>. Some waterfalls also form natural{" "}
              <strong>slides</strong> that can be descended like water
              toboggans.
            </p>
            <p>
              Canyons are located in stunning natural environments and offer
              various difficulty levels, making canyoning accessible to
              virtually everyone. You can enjoy it solo, as a couple, with
              friends, families (children from 6 years old can participate),
              corporate team buildings, or hen and stag parties.
            </p>
            <div className="bg-teal-50 border-l-4 border-teal-500 p-4 my-6 rounded-r-lg">
              <p className="text-teal-800 font-medium m-0">
                🎉 Canyoning truly has no age or skill barriers!
              </p>
            </div>
          </div>
        </section>

        {/* Section: History */}
        <section id="history-of-canyoning" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            A Brief History of Canyoning
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Canyoning emerged in the late 1800s and early 1900s, driven by
              adventurers eager to explore Earth&apos;s most hidden places.
              Beyond conquering the highest peaks, explorers sought to reach the
              world&apos;s most inaccessible locations.
            </p>
            <p>
              Riverbeds were attractive destinations, but early exploration
              faced significant challenges: difficult access routes, dangerous
              cliffs, and the lack of modern equipment like neoprene suits and
              proper rappelling gear made most descents nearly impossible.
            </p>
            <p>
              After a period of low popularity, canyoning experienced a revival
              in the 1950s and 1960s when it became a more serious sport with
              many specific techniques being developed. Today, it has evolved
              into one of the most exciting adventure sports, with professional
              guides, standardized safety protocols, and equipment designed
              specifically for canyon environments.
            </p>
          </div>
        </section>

        {/* Section: Techniques */}
        <section id="canyoning-techniques" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Essential Canyoning Techniques
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Canyoning combines several techniques that you&apos;ll learn and
            practice during your adventure. Here are the main skills you&apos;ll
            use:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {techniques.map((technique) => (
              <div
                key={technique.name}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{technique.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {technique.name}
                </h3>
                <p className="text-gray-600">{technique.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Difficulty Levels */}
        <section id="canyoning-levels" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Canyoning Difficulty Levels
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Canyons are classified by difficulty to help you choose the right
            adventure for your experience level and fitness:
          </p>
          <div className="space-y-6">
            {difficultyLevels.map((level) => (
              <div
                key={level.level}
                className="border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`${level.color} w-4 h-4 rounded-full`}
                  ></span>
                  <h3 className="text-xl font-bold text-gray-900">
                    {level.level}
                  </h3>
                </div>
                <p className="text-gray-600 mb-3">{level.description}</p>
                <p className="text-sm text-gray-500">
                  <strong>Examples:</strong> {level.examples.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Best Canyons */}
        <section id="best-canyons-andalusia" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Best Canyons in Andalusia
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Andalusia offers some of the best canyoning in Spain, with diverse
            landscapes ranging from the Costa del Sol to the Sierra Nevada. Here
            are our top recommendations:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredCanyons.map((canyon) => (
              <Link
                key={canyon.name}
                href={canyon.slug}
                className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-teal-500 hover:shadow-xl transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src={canyon.image}
                    alt={`${canyon.name} canyoning adventure`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                        canyon.level === "Beginner"
                          ? "bg-green-500"
                          : canyon.level === "Intermediate"
                          ? "bg-yellow-500"
                          : canyon.level === "Advanced"
                          ? "bg-red-500"
                          : "bg-blue-500"
                      }`}
                    >
                      {canyon.level}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors mb-2">
                    {canyon.name}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {canyon.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {canyon.location}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{canyon.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Canyoning is an incredible way to connect with nature while
              pushing your limits in a safe, guided environment. Whether
              you&apos;re looking for a family-friendly introduction at
              Guadalmina or an adrenaline-pumping adventure at Buitreras,
              Andalusia has the perfect canyon waiting for you.
            </p>
            <p>
              At TUUR Adventure, we provide all the equipment, expert guides,
              and safety training you need for an unforgettable canyoning
              experience. Our small group sizes ensure personalized attention
              and maximum enjoyment.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Canyoning Adventure?
          </h2>
          <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
            Join us for an unforgettable experience in some of Andalusia&apos;s
            most beautiful canyons. All equipment and professional guides
            included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/activities"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              View All Canyons
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Author/Date Info */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
              <span className="text-teal-600 font-bold">TA</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">TUUR Adventure</p>
              <p className="text-sm text-gray-500">
                Published: January 15, 2025 · 8 min read
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
