import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Best Activities in Marbella & Surroundings | 2026 Guide",
  description:
    "Discover the best activities in Marbella: canyoning, via ferrata, hiking La Concha, kayaking & more. Complete guide to outdoor adventures near Marbella.",
  keywords: [
    "activities marbella",
    "things to do in marbella",
    "marbella activities",
    "outdoor activities marbella",
    "adventures marbella",
    "canyoning marbella",
    "via ferrata marbella",
    "hiking marbella",
    "kayak marbella",
    "what to do in marbella",
    "marbella experiences",
    "costa del sol activities",
    "marbella adventure tours",
    "family activities marbella",
  ],
  openGraph: {
    title: "The Best Activities in Marbella & Surroundings | 2026 Guide",
    description:
      "Discover the best activities in Marbella: canyoning, via ferrata, hiking, kayaking & more. Your complete guide to outdoor adventures on the Costa del Sol.",
    type: "article",
    publishedTime: "2026-03-04T00:00:00.000Z",
    modifiedTime: "2026-03-04T00:00:00.000Z",
    authors: ["TUUR Adventure Experts"],
    images: [
      {
        url: "/Marbella-Drone.png",
        width: 1200,
        height: 630,
        alt: "Best Activities in Marbella - Canyoning, Via Ferrata, Hiking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Activities in Marbella & Surroundings | 2026 Guide",
    description:
      "Discover the best activities in Marbella: canyoning, via ferrata, hiking, kayaking & more.",
  },
  alternates: {
    canonical: "/blog/best-activities-marbella",
  },
};

export default function BestActivitiesMarbellaBlogPost() {
  return (
    <article className="pt-26 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Article Header */}
        <header className="mb-10">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-green-600">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Activities in Marbella</span>
          </nav>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The Best Activities And Experiences To Do In Marbella And Its
            Surroundings
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
            <span>By TUUR Adventure Experts</span>
            <span>•</span>
            <time dateTime="2026-03-04">March 4, 2026</time>
            <span>•</span>
            <span>15 min read</span>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden mb-8">
            <Image
              src="/Marbella-Drone.png"
              alt="Best Activities in Marbella - Outdoor Adventures on the Costa del Sol"
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg prose-gray max-w-none">
          {/* Introduction */}
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            If you&apos;re coming to Marbella on holiday and want to make the
            most of your days, we&apos;ll help you find activities that will
            give you unforgettable memories and experiences, while learning a
            little more about <strong>Andalusian culture</strong> and
            discovering <strong>incredible places</strong> you can&apos;t miss.
          </p>

          <p className="text-gray-700 mb-8">
            Marbella is not just about luxury, beaches and sunbathing until you
            melt. It is much, much more and here we will try to open up the
            range of possibilities that this area has to offer and encourage you
            to try <strong>the best activities and experiences</strong> that
            Marbella and its surroundings have to offer.
          </p>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-xl p-6 mb-10">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              📋 Table of Contents
            </h2>
            <nav className="space-y-2">
              <a
                href="#marbella-paradise"
                className="block text-green-600 hover:text-green-700"
              >
                1. Marbella, a multicultural paradise for all tastes
              </a>
              <a
                href="#old-town"
                className="block text-green-600 hover:text-green-700"
              >
                2. Visit the Old Town of Marbella
              </a>
              <a
                href="#canyoning"
                className="block text-green-600 hover:text-green-700"
              >
                3. Canyoning in Marbella
              </a>
              <a
                href="#flamenco"
                className="block text-green-600 hover:text-green-700"
              >
                4. Book a Night at a Flamenco Tablao
              </a>
              <a
                href="#via-ferrata"
                className="block text-green-600 hover:text-green-700"
              >
                5. The Best Via Ferratas near Marbella
              </a>
              <a
                href="#la-concha"
                className="block text-green-600 hover:text-green-700"
              >
                6. La Concha Mountain (Sierra Blanca)
              </a>
              <a
                href="#white-villages"
                className="block text-green-600 hover:text-green-700"
              >
                7. The most charming White Villages
              </a>
              <a
                href="#sea-sports"
                className="block text-green-600 hover:text-green-700"
              >
                8. Marbella Sea Sports
              </a>
              <a
                href="#fairs"
                className="block text-green-600 hover:text-green-700"
              >
                9. Marbella Fair & Local Festivals
              </a>
            </nav>
          </div>

          {/* Section 1: Marbella Paradise */}
          <section id="marbella-paradise" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Marbella, a multicultural paradise for all tastes
            </h2>
            <p className="text-gray-700 mb-4">
              It must be said that Marbella is a privileged place, both for its
              mild climate throughout the year and for the opportunities to have
              a good time.
            </p>
            <p className="text-gray-700 mb-4">
              It is a <strong>cosmopolitan city</strong> like Barcelona
              (although much smaller), because the tourism it receives is very
              diverse, coming from all parts of the world without exception. But
              its diversity is not limited to tourists: Marbella is home to many
              families from all over the world who have settled in the area.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>The cultural richness</strong> and colour of skin, eyes
              and hair is great and very motivating. Most people you meet will
              speak at least a couple of languages.
            </p>
            <p className="text-gray-700 mb-4">
              Although we usually associate Marbella with luxury (as it has the
              most exclusive villas, hotels, shops and nightclubs in the world),
              this beautiful coastal town also has large green areas, a
              picturesque historic centre with narrow, winding streets and
              &apos;chiringuitos&apos; (beach bars) that represent{" "}
              <strong>the very essence of Andalusia.</strong>
            </p>
            <p className="text-gray-700">
              However, Marbella&apos;s diversity is not limited to the city and
              its beaches: in its surroundings we find{" "}
              <strong>incredible natural areas</strong>, where the mountains and
              rivers offer a wide variety of landscapes and activities to enjoy.
            </p>
          </section>

          {/* Section 2: Old Town */}
          <section id="old-town" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Visit the Old Town of Marbella: points of interest, where to have
              tapas and eat churros
            </h2>
            <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
              <Image
                src="/casco-antiguo-marbella.jpg"
                alt="Casco Antiguo Marbella where to have tapas and eat churros"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-gray-700 mb-4">
              One of the first things to include in your agenda of things to do
              in Marbella is a <strong>visit to the historic centre</strong>, a
              stroll through its streets and finally some <em>tapas</em> or the
              typical <em>churros</em> in some of its bars, taverns or
              restaurants.
            </p>

            <p className="text-gray-700 mb-4">
              You can do it in the morning and have lunch or in the afternoon
              and have dinner. It won&apos;t take you long as the centre of
              Marbella is relatively small and easy to get around.
            </p>

            <p className="text-gray-700 mb-6">
              Our recommendation is to <strong>get lost in its streets</strong>{" "}
              without having a very clear plan. However, we will show you some
              strategic places in the historic centre so that you don&apos;t
              miss anything:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  🍊 Plaza de los Naranjos
                </h4>
                <p className="text-gray-600 text-sm">
                  This is the main square in the centre that you are sure to
                  come across during your visit. There is the Town Hall, and in
                  the north-east corner there is a tourist information office.
                  In the square, you can relax and recharge your batteries with
                  an orange juice or other natural drink.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  🏛️ Calle Ancha
                </h4>
                <p className="text-gray-600 text-sm">
                  Just behind the Plaza de Los Naranjos you will find this
                  beautiful street with old stately houses that leads to the
                  Plaza Santo Cristo. The most striking thing is the Hermitage
                  of Santo Cristo de la Veracruz, which dates from the{" "}
                  <strong>middle of the 16th century</strong>.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  🏰 The Old Walls of Marbella
                </h4>
                <p className="text-gray-600 text-sm">
                  One of the most striking icons of the centre. They date back
                  to the <strong>10th century</strong> and are the remains of
                  the old walls that protected the ancient city.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  🕌 Calle Misericordia and Calle Caridad
                </h4>
                <p className="text-gray-600 text-sm">
                  Discover the essence of the layout of the{" "}
                  <strong>old Arab streets</strong>, narrow and winding, ideal
                  for sheltering from the summer heat. You&apos;ll find many
                  shops, cafes and restaurants.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              🥢 Best places to eat churros in Marbella
            </h3>
            <p className="text-gray-700 mb-4">
              Churros are one of our favourite breakfasts in Andalusia. They are
              made from a dough of flour, water, salt and oil, fried in hot oil,
              and usually eaten with a glass of hot chocolate.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>
                <strong>Churrería Marbella</strong> in the Plaza de la Victoria,
                tel. +34 659 069 042
              </li>
              <li>
                <strong>Generalife Churreria</strong> on Avenida de Nabeul, tel.
                +34 692 225 386
              </li>
            </ul>
            <p className="text-gray-600 text-sm italic">
              💡 Tip: Book in advance, especially on weekends or public
              holidays!
            </p>
          </section>

          {/* Section 3: Canyoning - FEATURED */}
          <section id="canyoning" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Canyoning in Marbella
            </h2>
            <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
              <Image
                src="/guadalmina-1.webp"
                alt="Guadalmina Canyon"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
              <p className="text-green-800 font-medium mb-2">
                ⭐ Hidden Gem Alert!
              </p>
              <p className="text-green-700">
                This activity is <strong>the hidden gem around Marbella</strong>
                . Located just 20-25 minutes by car from the centre of Marbella,
                in the town of Benahavís.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>And what is canyoning?</strong> It is an adventure
              activity that takes place in a canyon created by the erosion of a
              river, a spectacular natural environment. In addition to swimming
              in the river, walking and climbing small obstacles, you have to
              practise two techniques that are very characteristic of this
              sport: <strong>abseiling and jumping</strong>.
            </p>

            <p className="text-gray-700 mb-4">
              The{" "}
              <Link
                href="/canyoning/guadalmina"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Guadalmina Canyon
              </Link>{" "}
              has several jumps of up to 6 metres, a 2-metre slide and a 5-metre
              abseil, all in an incredible setting.
            </p>

            <p className="text-gray-700 mb-6">
              You can enjoy this experience <strong>all year round</strong> and
              it is suitable for both adrenaline junkies and families with
              children from 6 years old. The tour lasts 3 hours and is{" "}
              <strong>adapted to your abilities.</strong>
            </p>

            {/* CTA Box */}
            <div className="bg-gray-900 text-white rounded-xl p-6 mb-6">
              <h4 className="text-xl font-bold mb-2">
                🏞️ Ready for an adventure?
              </h4>
              <p className="text-gray-300 mb-4">
                Fun is 200% guaranteed. Book your canyoning experience today!
              </p>
              <Link
                href="/canyoning/guadalmina"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Book Canyoning in Guadalmina →
              </Link>
            </div>

            <p className="text-gray-700">
              Looking for more canyoning options? Check out our other canyons:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
              <li>
                <Link
                  href="/canyoning/rio-verde"
                  className="text-green-600 hover:text-green-700"
                >
                  Río Verde
                </Link>{" "}
                - Turquoise waters near Granada (4.5h)
              </li>
              <li>
                <Link
                  href="/canyoning/zarzalones"
                  className="text-green-600 hover:text-green-700"
                >
                  Zarzalones
                </Link>{" "}
                - 21m waterfall rappel (4h)
              </li>
              <li>
                <Link
                  href="/canyoning/buitreras"
                  className="text-green-600 hover:text-green-700"
                >
                  Buitreras
                </Link>{" "}
                - The &quot;Cathedral&quot; of Andalusian ravines (6h)
              </li>
            </ul>
          </section>

          {/* Section 4: Flamenco */}
          <section id="flamenco" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Book a Night at a Flamenco Tablao
            </h2>
            <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
              <Image
                src="/tango.webp"
                alt="Flamenco Tablao in Marbella"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-gray-700 mb-4">
              We are in the heart of Andalusia, and flamenco is one of{" "}
              <strong>the pulses that makes our culture beat</strong>, both the
              music and the dance. In November 2010, it was declared Intangible
              Cultural Heritage of Humanity by UNESCO.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Best Flamenco Tablaos in Marbella:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>
                <strong>&apos;Tablao by Ana María Los Chatos&apos;</strong> in
                Santo Cristo Square (tel. +34 667 38 49 46)
              </li>
              <li>
                <strong>&apos;El Tablón Bullfighting Tavern&apos;</strong> on
                Severo Ochoa street nº7 (tel. +34 673 60 45 20)
              </li>
              <li>
                <strong>&apos;Passion: The story of Flamenco&apos;</strong> on
                Camilo Jose Cela street nº12 (tel. +34 617 50 31 26)
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Flamenco in Ronda:
            </h3>
            <p className="text-gray-700">
              The Tablao Flamenco Ronda offers shows every Tuesday, Thursday and
              Saturday at 8:30 p.m. in the central courtyard of a magnificent
              modernist building in the <strong>Plaza del Socorro</strong>.
            </p>
          </section>

          {/* Section 5: Via Ferrata - FEATURED */}
          <section id="via-ferrata" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              The Best Via Ferratas near Marbella
            </h2>
            <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
              <Image
                src="/via-ferrata-marbella.webp"
                alt="Via Ferrata near Marbella"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-700 mb-4">
              The entire province of Málaga is very mountainous and the Via
              Ferrata is one of the many attractions{" "}
              <strong>for adventurers and nature lovers</strong>.
            </p>

            <p className="text-gray-700 mb-6">
              <strong>Via ferratas are routes drawn on rock faces</strong>,
              equipped with clamps, handrails, chains, hanging bridges,
              zip-lines and much more. Safety is guaranteed by a steel cable
              installed along the entire route.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {/* Beginner */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <span className="inline-block bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded mb-2">
                  BEGINNER
                </span>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Via Ferrata Ronda
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Unique views of the Tajo de Ronda and its New Bridge. Suitable
                  for children from 7 years old.
                </p>
                <Link
                  href="/via-ferrata/ronda"
                  className="text-green-600 hover:text-green-700 text-sm font-medium"
                >
                  Learn more →
                </Link>
              </div>

              {/* Medium */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <span className="inline-block bg-amber-600 text-white text-xs font-semibold px-2 py-1 rounded mb-2">
                  MEDIUM
                </span>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Via Ferrata Casares
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  35 minutes from Marbella with monkey bridges and views of
                  Gibraltar. For participants over 155cm.
                </p>
                <Link
                  href="/via-ferrata/casares"
                  className="text-amber-600 hover:text-amber-700 text-sm font-medium"
                >
                  Learn more →
                </Link>
              </div>

              {/* Advanced */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <span className="inline-block bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded mb-2">
                  ADVANCED
                </span>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Via Ferrata El Chorro
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  The most spectacular! Next to Caminito del Rey with 35m
                  zip-line and 200m elevation.
                </p>
                <Link
                  href="/via-ferrata/el-chorro"
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </section>

          {/* Section 6: La Concha */}
          <section id="la-concha" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              La Concha Mountain (Sierra Blanca)
            </h2>
            <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
              <Image
                src="/la-concha-mountain.webp"
                alt="La Concha Mountain, Sierra Blanca, Marbella"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-gray-700 mb-4">
              The La Concha mountain, so characteristic of the city&apos;s
              publicity photos, is the one that Marbella is depicted against,
              and it provides one of the mildest climates on the Costa del Sol.
            </p>

            <p className="text-gray-700 mb-4">
              Not only does it act as a windbreak, but it is also{" "}
              <strong>a place of protected natural spaces</strong> of great
              beauty. It is crossed by an{" "}
              <strong>extensive network of footpaths</strong> (around 30
              routes), linking the towns of Marbella, Istán, Ojén and Monda.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-blue-900 mb-2">
                👨‍👩‍👧‍👦 Family Recommendation
              </h4>
              <p className="text-blue-800 text-sm">
                The area of Juanar (Ojén) with its two viewpoints and woods
                offers very pleasant walks. This is the route we recommend for
                families with young children: easy, but of great beauty and
                botanical richness.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              If you would like to hike La Concha with a professional guide,
              check out our{" "}
              <Link
                href="/hiking/la-concha"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Hiking La Concha experience
              </Link>
              .
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="font-semibold text-amber-800 mb-2">
                ⚠️ Safety Warning
              </h4>
              <p className="text-amber-700 text-sm">
                This mountain can surprise you with adverse weather (very hot in
                summer). Always bring plenty of water. Low clouds can make you
                extremely disorientated in colder times. Be careful, even if it
                seems easy at first glance.
              </p>
            </div>
          </section>

          {/* Section 7: White Villages */}
          <section id="white-villages" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              The most charming &apos;Pueblos Blancos&apos; (white villages)
              around Marbella
            </h2>

            <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
              <Image
                src="/pueblos-blancos.jpg"
                alt="Pueblos Blancos near Marbella"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-gray-700 mb-4">
              It&apos;s time to get out of the coastal cities and visit the
              interior! Andalusia is spectacular and you will find its purest
              and most authentic essence{" "}
              <strong>hidden behind the first line</strong> of coastal
              mountains.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              What are the White Villages?
            </h3>
            <p className="text-gray-700 mb-6">
              The Pueblos Blancos{" "}
              <strong>
                take their name from the characteristic white colour of the
                houses
              </strong>
              , which are painted with lime. This helps to reflect sunlight and
              reduce heat inside the houses. Lime is also a powerful
              antibacterial agent.
            </p>

            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Istán - The White City of Water
                </h4>
                <p className="text-gray-600 text-sm">
                  25 minutes from Marbella. Beautiful terraced crops fed by
                  Moorish irrigation ditches, stunning views of the coast.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Benahavís - Gastronomic Village
                </h4>
                <p className="text-gray-600 text-sm">
                  20 minutes from Marbella, accessed through a beautiful canyon.
                  Famous for its gastronomy. Perfect to visit after{" "}
                  <Link
                    href="/canyoning/guadalmina"
                    className="text-green-600 hover:text-green-700"
                  >
                    canyoning in Guadalmina
                  </Link>
                  .
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Ronda - The Old One
                </h4>
                <p className="text-gray-600 text-sm">
                  From our point of view,{" "}
                  <strong>the most beautiful city</strong> in southern
                  Andalusia. World Heritage monuments including the Puente
                  Nuevo, the first bullring in the world. Combine it with the{" "}
                  <Link
                    href="/via-ferrata/ronda"
                    className="text-green-600 hover:text-green-700"
                  >
                    Via Ferrata Ronda
                  </Link>
                  .
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900">
                  Mijas Pueblo - Famous for Donkey Rides
                </h4>
                <p className="text-gray-600 text-sm">
                  Located between Malaga and Marbella. Small, beautiful, with
                  enormous panoramic views of the coast. Known for donkey rides
                  and leather goods shopping.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Sea Sports */}
          <section id="sea-sports" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Marbella Sea Sports
            </h2>

            <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
              <Image
                src="/marbella-sea-sports.jpg"
                alt="Marbella Sea Sports"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-gray-700 mb-6">
              In Marbella, as in most famous coastal destinations, we have a
              wide range of water sports and activities:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  🚣 Top Recommendations
                </h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>
                    •{" "}
                    <Link
                      href="/activities/kayak-puerto-banus"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      Kayak in Puerto Banús
                    </Link>
                  </li>
                  <li>• Jet skis (guided tours or circuit)</li>
                  <li>• Private boat tours</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  🌊 Other Water Activities
                </h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Waterski, Wakeboard, Banana Boat</li>
                  <li>• Surf, Paddle Surf</li>
                  <li>• Diving and snorkeling</li>
                  <li>• Catamaran excursions</li>
                  <li>• Dolphin watching</li>
                  <li>• Flyboard, Parasailing</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Cable-ski in San Pedro de Alcántara
            </h3>
            <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
              <Image
                src="/cable-ski-marbella.jpg"
                alt="Cable Ski in San Pedro de Alcántara, Marbella"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-gray-700">
              A good alternative to sea sports when the sea is rough. The centre
              has a brunch area, drinks, restaurant and a small pool. No booking
              required.
            </p>
          </section>

          {/* Section 9: Fairs */}
          <section id="fairs" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Marbella Fair, San Pedro de Alcántara Fair and other Fairs
            </h2>
            <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
              <Image
                src="/marbella-fair.jpg"
                alt="Marbella Fair"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-gray-700 mb-4">
              The Costa del Sol is famous for its vibrant ferias (fairs), which
              combine tradition, music, culture and entertainment. If you have
              never been to one, we strongly recommend that you experience one!
            </p>

            <p className="text-gray-700 mb-6">
              <strong>The daytime fair</strong> is all about eating in stalls,
              listening to music and dancing. <strong>The night fair</strong>{" "}
              has musical groups, attractions, and traditional fairground rides.
            </p>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">
                📅 2026 Fair Calendar
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Marbella Fair:</strong> June 5 - 11
                </li>
                <li>
                  <strong>Estepona Fair:</strong> July 1 - 6
                </li>
                <li>
                  <strong>Benahavís Fair:</strong> Around August 15
                </li>
                <li>
                  <strong>Malaga Fair:</strong> August 16 - 23
                </li>
                <li>
                  <strong>San Pedro de Alcántara Fair:</strong> Around October
                  19
                </li>
              </ul>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Conclusion
            </h2>

            <p className="text-gray-700 mb-4">
              Marbella and the surrounding area offer much more than a
              sun-drenched escape. From the charming labyrinthine streets of the
              old town, where tapas and churros offer a taste of authentic
              Andalusian life, to the exhilarating thrills of canyoning and via
              ferratas, there&apos;s an adventure to suit every taste.
            </p>

            <p className="text-gray-700 mb-4">
              Whether you&apos;re drawn to the cultural richness of a flamenco
              tablao, the scenic hikes of La Concha or the picturesque beauty of
              the &apos;Pueblos Blancos&apos;, you&apos;ll find a wealth of
              experiences to enrich your holiday.
            </p>

            <p className="text-gray-700 mb-6">
              So when you&apos;re planning your trip, remember that Marbella is
              a treasure trove of activities that promise a truly memorable and
              diverse Andalusian experience that will stay with you long after
              you&apos;ve returned home.
            </p>

            <p className="text-xl font-semibold text-green-600">
              We look forward to your visit!
            </p>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to explore Marbella?
            </h3>
            <p className="text-green-100 mb-6">
              Book your adventure activity today and create unforgettable
              memories!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/activities?category=canyoning"
                className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-green-50 transition-colors"
              >
                View Canyoning
              </Link>
              <Link
                href="/activities?category=via-ferrata"
                className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-400 transition-colors"
              >
                View Via Ferratas
              </Link>
              <Link
                href="/activities?category=hiking"
                className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-400 transition-colors"
              >
                View Hiking
              </Link>
            </div>
          </div>
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            <strong>TUUR Adventure Experts © 2026</strong>
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: March 2026</p>
        </footer>
      </div>
    </article>
  );
}
