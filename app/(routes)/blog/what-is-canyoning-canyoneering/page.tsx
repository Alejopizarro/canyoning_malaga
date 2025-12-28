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

const canyons = [
  {
    name: "Guadalmina Canyon",
    level: "All Levels",
    duration: "3 hours",
    location: "Near Marbella (Benahavís)",
    description:
      "A hidden gem perfect for first-timers. This beautiful descent includes jumps up to 6 metres (all optional), simple slides, large swimming areas, and a small rappel. The river maintains water year-round with consistent temperatures, making it perfect for any season and skill level.",
    slug: "/canyoning/guadalmina",
    image: "/guadalmina-1.webp",
  },
  {
    name: "Zarzalones",
    level: "Moderate",
    duration: "4 hours",
    location: "Yunquera, Málaga",
    description:
      "Located in Sierra de Las Nieves National Park, this canyon features beautiful waterfalls and longer, more complex rappels up to 21 metres. The beauty lies in the technical challenges and wild surroundings.",
    slug: "/canyoning/zarzalones",
    image: "/zarzalones-1.webp",
  },
  {
    name: "Rio Verde",
    level: "Moderate / Advanced",
    duration: "4-6 hours",
    location: "Otívar, Granada",
    description:
      "For jump enthusiasts! Located in Almijara Nature Reserve, this sporty canyon offers crystal-clear waters, large pools, and numerous opportunities for jumping, abseiling, and sliding.",
    slug: "/canyoning/rio-verde",
    image: "/rio-verde-1.jpg",
  },
  {
    name: "Buitreras Canyon",
    level: "Advanced",
    duration: "6 hours",
    location: "El Colmenar, Málaga",
    description:
      'Known as the "Cathedral of the Guadiaro," this full-day adventure takes you through a deep, narrow gorge declared a Natural Monument. Features rappelling and jumps up to 9 metres.',
    slug: "/canyoning/buitreras",
    image: "/buitreras-1.png",
  },
];

export default function WhatIsCanyoningPage() {
  return (
    <article className="bg-white">
      {/* Hero Section */}
      <header className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/blog/guadalmina-2.webp"
          alt="Group of people canyoning through a beautiful canyon"
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
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Canyoning</strong> (known as <em>canyoneering</em> in the
            United States and <em>kloofing</em> in South Africa) is an adventure
            sport that involves descending through river canyons, typically in
            their upper or middle sections where the terrain creates
            fast-flowing water, waterfalls, and natural slides.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This thrilling activity combines multiple skills including swimming,
            walking, climbing small obstacles, and mastering two signature
            techniques: <strong>rappelling</strong> and <strong>jumping</strong>
            . Some waterfalls also form natural <strong>slides</strong> that can
            be descended like water toboggans.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Canyons are located in stunning natural environments and offer
            various difficulty levels, making canyoning accessible to virtually
            everyone. You can enjoy it solo, as a couple, with friends, families
            (children from 6 years old can participate), corporate team
            buildings, or hen and stag parties.
          </p>
          <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
            <p className="text-teal-800 font-medium">
              Canyoning truly has no age or skill barriers!
            </p>
          </div>
        </section>

        {/* Section: History */}
        <section id="history-of-canyoning" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            A Brief History of Canyoning
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Canyoning emerged in the late 1800s and early 1900s, driven by
            adventurers eager to explore Earth&apos;s most hidden places. Beyond
            conquering the highest peaks, explorers sought to reach the
            world&apos;s most inaccessible locations.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Riverbeds were attractive destinations, but early exploration faced
            significant challenges: difficult access routes, dangerous cliffs,
            and the lack of modern equipment like neoprene suits and proper
            rappelling gear made most descents nearly impossible.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            After a period of low popularity, canyoning experienced a revival in
            the 1950s and 1960s when it became a more serious sport with many
            specific techniques being developed.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Today, canyoning activities are available worldwide and accessible
            to most people, making it a very safe activity when practiced with{" "}
            <strong>proper equipment</strong> and technical knowledge.
          </p>
        </section>

        {/* Section: Techniques */}
        <section id="canyoning-techniques" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Essential Canyoning Techniques
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            When canyoning, you travel from one point to another through a
            canyon by walking on rocks, swimming, and using at least one of
            these core techniques:
          </p>

          {/* Slides */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Slides</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Slides are ramped waterfalls that you can descend like natural
              water slides.
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">
                Key safety tips for slides:
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">✓</span>
                  Keep your body close together
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">✓</span>
                  Avoid opening your arms or elbows to prevent hitting rocks
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">✓</span>
                  Lie down on the slide to enter the water correctly
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 mt-1">✓</span>
                  Follow your guide&apos;s instructions carefully
                </li>
              </ul>
            </div>
          </div>

          {/* Jumps */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Jumps</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>
                Jumping is the most exciting manoeuvre in canyoning.
              </strong>{" "}
              When height, obstacles, and water depth allow, you can leap from
              rocks into pools below. It&apos;s the part of the experience most
              participants look forward to.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              However, jumps carry inherent risks since guides have no control
              over a person&apos;s flight once they leave the rock. Jumping
              requires proper technique in three phases:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
              <li>
                <strong>Preparation</strong> before the jump
              </li>
              <li>
                <strong>Flight</strong> control in the air
              </li>
              <li>
                <strong>Water entry</strong> positioning
              </li>
            </ul>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <p className="text-amber-800">
                <strong>Important:</strong> Jumping is always optional and only
                recommended for those without back injuries and with some
                previous experience.
              </p>
            </div>
          </div>

          {/* Rappelling */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rappelling (Abseiling)
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Rappelling is the controlled descent of steep slopes using a rope.
              In canyoning, you control your own movement down a fixed rope
              while a guide manages your safety.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Due to water presence and ease of use, canyoning typically uses{" "}
              <strong>continuous descenders</strong> for rappelling. During your
              first descents, a guide will assist you and demonstrate proper
              body positioning and rope handling.
            </p>
            <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
              <p className="text-teal-800">
                <strong>Rappelling is the star technique of canyoning</strong>{" "}
                because it allows you to descend any canyon without being forced
                into jumps or slides you&apos;re not comfortable with.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Levels */}
        <section id="canyoning-levels" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Canyoning Difficulty Levels
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Canyons are generally classified into four levels based on terrain
            complexity, obstacle versatility, technical requirements, and
            physical demands:
          </p>

          <div className="grid gap-4">
            {/* Level 1 */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                  Level 1
                </span>
                <h3 className="text-xl font-bold text-gray-900">All Levels</h3>
              </div>
              <p className="text-gray-600">
                Versatile canyons suitable for everyone. Optional jumps, low
                rappels, under 4 hours duration. Suitable for ages 6-65.
              </p>
            </div>

            {/* Level 2 */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                  Level 2
                </span>
                <h3 className="text-xl font-bold text-gray-900">Moderate</h3>
              </div>
              <p className="text-gray-600">
                For people with acceptable fitness and adventure experience.
                Medium-height rappels, some down waterfalls. Approximately 4
                hours.
              </p>
            </div>

            {/* Level 3 */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full">
                  Level 3
                </span>
                <h3 className="text-xl font-bold text-gray-900">Advanced</h3>
              </div>
              <p className="text-gray-600">
                For experienced canyoners or athletic individuals. Rappels from
                15-30 metres. Around 6 hours duration.
              </p>
            </div>

            {/* Level 4 */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full">
                  Level 4
                </span>
                <h3 className="text-xl font-bold text-gray-900">Expert</h3>
              </div>
              <p className="text-gray-600">
                For the most experienced canyoners only. Advanced techniques,
                exceptional fitness required. Over 7 hours.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-6">
            <p className="text-blue-800">
              <strong>Pro tip:</strong> When in doubt, choose a lower level for
              a better experience. Professional guides can help you select the
              right canyon for your abilities.
            </p>
          </div>
        </section>

        {/* Section: Best Canyons */}
        <section id="best-canyons-andalusia" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Best Canyons in Andalusia
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Here are the top canyons in Andalusia, Spain, ranging from
            beginner-friendly to challenging:
          </p>

          <div className="grid gap-6">
            {canyons.map((canyon) => (
              <Link
                key={canyon.name}
                href={canyon.slug}
                className="group block border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="md:flex">
                  <div className="relative h-48 md:h-auto md:w-64 flex-shrink-0">
                    <Image
                      src={canyon.image}
                      alt={canyon.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded">
                        {canyon.level}
                      </span>
                      <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded">
                        {canyon.duration}
                      </span>
                      <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded">
                        {canyon.location}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {canyon.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {canyon.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section: Conclusion */}
        <section id="conclusion" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Canyoning is a unique and exciting activity that&apos;s both fun and
            safe when practiced with professionals or proper training.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Success in canyoning comes from good training and preparation,
            knowledge of the environment, proper activity planning, and
            understanding your abilities and limits.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Given the specialized equipment required (ropes, karabiners,
            descenders, blockers, pulleys, neoprene suits, harnesses, helmets,
            and specific footwear), the best way to start is with professional
            guidance.
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">
              Ready for Your First Canyoning Adventure?
            </h3>
            <p className="text-teal-100 mb-6">
              Our experienced team is here to guide you through an unforgettable
              experience in Andalusia!
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-teal-600 font-semibold px-8 py-3 rounded-full hover:bg-teal-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>

        {/* Author & Date */}
        <footer className="border-t border-gray-200 pt-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
              <span className="text-teal-600 font-bold">TA</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900">TUUR Adventure</p>
              <p className="text-sm text-gray-500">
                Published on January 15, 2026
              </p>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
