import Bokun from "@/components/bokun";
import Hero from "@/components/hero";
import ExcursionDescription from "@/components/excursion-description";
import Faqs from "../../activities/components/faqs";
import { getExcursionByPath } from "@/lib/activities";
import { notFound } from "next/navigation";
import OtherActivities from "@/components/other-activities";
import { complementaryData } from "@/lib/complementary-data";
import SeoContentTabs from "@/components/seo-content-tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PrivateTourCTA from "@/components/private-tour";
import CheckAvailabilityButton from "../../../../components/ui/check-availability-button";
import TrustindexWidget from "@/components/trustindex-widget";
import {
  guadalminaMetadata,
  guadalminaFaqs,
  jsonLdProduct,
  jsonLdTourExperience,
  jsonLdLocalBusiness,
  jsonLdFaq,
  jsonLdBreadcrumb,
} from "./metadata";

export const metadata = guadalminaMetadata;

const SEO_TABS = [
  {
    id: "river-walk",
    label: "Guadalmina River Walk",
    h3: "Guadalmina River Walk: Guided Canyoning vs. Self-Guided Route",
    paragraphs: [
      "The Guadalmina River Walk is one of the most iconic outdoor experiences on the Costa del Sol. The route follows the Río Guadalmina as it carves through the Sierra Bermeja mountains in Benahavís, creating a dramatic sequence of narrow gorges, natural pools, and sculpted rock formations. Many visitors attempt the guadalmina river walk independently, but a guided canyoning tour transforms the experience entirely — unlocking sections of the canyon that are difficult to navigate without technical equipment and local expertise.",
      "With TUUR Adventure, the Guadalmina River Walk becomes a full canyoning adventure: you'll descend with a certified guide, wearing a 5mm wetsuit, helmet and harness, accessing jumps of up to 6 meters, a toboggan slide and a rappel section that self-guided hikers simply cannot reach safely. The guided guadalmina river walk departs every day of the year, morning and afternoon, from a meeting point in San Pedro de Alcántara — just 15 minutes from Puerto Banús and 25 minutes from Estepona.",
      "Whether you're looking for a mild family-friendly guadalmina river walk with small children or a more adrenaline-packed descent with jumps and rappelling, our guides tailor the experience to your group. This activity is runnable all year round thanks to the canyon's sheltered microclimate and temperate waters — one of the very few canyons in Málaga Province with this characteristic.",
    ],
  },
  {
    id: "benahavis",
    label: "Benahavís Canyoning",
    h3: "Benahavís Canyoning: The Best Canyon Near Marbella",
    paragraphs: [
      "Benahavís canyoning takes place in the municipality of Benahavís, a small village nestled in the mountains 20 minutes above Marbella. The star location for benahavís canyoning is the Río Guadalmina canyon — also called Las Angosturas or Canyon of the Angosturas — a Level 1 protected natural area within the Special Conservation Zone (ZEC) of Sierras Bermeja y Real. Its accessible difficulty level and spectacular scenery make it the most popular canyoning destination on the entire Costa del Sol.",
      "Benahavís canyoning with TUUR Adventure is suitable for all ages: families with children from 6 years old in summer, groups of friends, couples and corporate team-building groups. The canyon is short enough to complete in a 3-hour session without exhausting participants, yet varied enough to offer genuine adventure — swimming through narrow passages, jumping from rock ledges into deep pools, and rappelling down a small waterfall with full safety equipment.",
      "Unlike other benahavís canyoning operators, TUUR Adventure is a locally-based company registered with the Junta de Andalucía's Active Tourism Registry (AT/MA/00141), led by professional mountain guide José Moreno with over 20 years of experience in Andalusia's canyons. All guides are first-aid certified, and the equipment is inspected and renewed each season.",
      "Looking for canyoning benahavís for beginners? Our open group sessions are ideal for first-timers. Searching for canyoning near marbella with kids? We take children from 6 years old in summer. Need a private benahavís canyoning tour for a group? We offer exclusive private departures for groups of 2 to 30 participants. From San Pedro, Puerto Banús, Marbella, Nueva Andalucía or Estepona — we are the closest and most convenient canyoning option on the Costa del Sol.",
    ],
  },
  {
    id: "angosturas",
    label: "Canyon of the Angosturas",
    h3: "Canyon of the Angosturas (Cañón de las Angosturas) — Benahavís, Málaga",
    paragraphs: [
      "The Canyon of the Angosturas — known in Spanish as el Cañón de las Angosturas or Las Angosturas de Guadalmina — is a protected natural gorge located in the municipality of Benahavís, in the province of Málaga. The canyon is carved by the Río Guadalmina as it descends from the Sierra Bermeja mountains towards the Costa del Sol. Its name, 'Las Angosturas', refers to the extreme narrowness of the gorge at certain points — walls that close in to less than a metre apart, creating a uniquely dramatic canyoning experience.",
      "Geologically, the Canyon of the Angosturas sits within Georrecurso 621 of the Diputación Provincial de Málaga and is classified as a Special Conservation Zone (ZEC ES6170010 — Sierras Bermeja y Real). The canyon is open to the public year-round, with regulated access hours established by the Ayuntamiento de Benahavís to protect the ecosystem. Professional guided canyoning tours — like those offered by TUUR Adventure — operate under official permits and follow strict environmental guidelines during every descent.",
      "The canyon of the angosturas is classified as Level 1 canyoning difficulty, making it genuinely accessible for beginners, children and non-swimmers with basic fitness. The route through the angosturas guadalmina typically takes 2 to 3 hours depending on group size and conditions. Along the way, participants encounter natural pools (known locally as 'charcos'), a famous rock toboggan, narrow swim-throughs, and optional jump points ranging from 1 to 6 metres. The canyon ends near the Charco de los Tubos, named after historic disused pipes embedded in the canyon wall.",
      "For visitors arriving from Marbella, Puerto Banús or Estepona, the Canyon of the Angosturas is the single most accessible natural canyon in the province — located just off the A-7175 road towards Benahavís village, with signposted parking at Parking Ermita. TUUR Adventure picks up participants from San Pedro de Alcántara and provides all necessary equipment: wetsuit, helmet, harness and neoprene shoes. No prior canyoning experience is needed to descend the canyon of the angosturas safely.",
    ],
  },
];

const ACTIVITY_HIGHLIGHTS = [
  {
    icon: "✅",
    title: "Beginner & Family Friendly",
    description:
      "Ideal for all levels, including children (from 6 y.o. in summer, 12 y.o. in winter).",
  },
  {
    icon: "✅",
    title: "Thrilling Jumps",
    description:
      "Includes 5 to 7 optional jumps into deep pools (max. 6 meters).",
  },
  {
    icon: "✅",
    title: "Full Adrenaline Options",
    description:
      "Practice rappelling (max. 4 meters) and enjoy a fun toboggan slide (2 meters) in a mountainous, idyllic setting.",
  },
  {
    icon: "✅",
    title: "All-Year Activity",
    description:
      "Unique in the region, the canyon is runnable throughout the entire year.",
  },
];

// Datos para el componente Description
const DESCRIPTION_DATA = {
  whatsIncluded: {
    included: [
      "Wetsuit/neoprene",
      "Canyoning harness, helmet, and rappel equipment",
      "Professional Guide",
      "Accident and civil responsibility insurance",
      "Full photo report! (A link is sent via WhatsApp within 24 hours).",
    ],
  },
  whatToBring: [
    "Swimming/bathing suit already on (to wear under the wetsuit)",
    "High socks (above the ankle is sufficient)",
    "Dry underwear and towel for changing afterward",
    "Appropriate closed sports shoes (must have good sole grip; water shoes and flip-flops are NOT allowed)",
    "Water and food/snacks to recharge energy at the end of the activity",
  ],
  meetingPoint: {
    location:
      "Parking area, next to the Torre Leonera Park, Benahavís, Málaga.",
    mapUrl: "https://maps.app.goo.gl/qAXCSphTyegosTHF6",
    note: "Important Timetable Note: Participants must arrive 15 minutes before the start time to organize the group and attend the safety briefing. A 15-minute courtesy waiting time is granted for accidental delays; after this time, the activity will start without absent participants, resulting in the forfeiture of service rights.",
  },
  itinerary: [
    "Meet your guide at the parking area 15 minutes before the start of the activity.",
    "Gear up: Put on the canyoning gear (wetsuit, harness, helmet, and optional professional shoes).",
    "Walk to the canyon entrance (approx. 5 minutes). Attend the safety briefing and start the activity.",
    "Canyoning time! Walk, swim, slide, jump (optional), and abseil, enjoying the unique gorge for about 2.5 hours.",
    "Return to the meeting point (~15 min), take off the gear, and thank your guide!",
  ],
};

export default async function Page() {
  const guadalmina = await getExcursionByPath("Canyoning", "guadalmina");

  if (!guadalmina) {
    notFound();
  }

  const excursionHero = {
    mainImage: guadalmina.mainImage,
    images: guadalmina.images,
    title: guadalmina.title,
    subtitle: guadalmina.subtitle,
    categoryPath: guadalmina.categoryPath,
    categoryText: guadalmina.category,
    isMostPopular: guadalmina.isMostPopular,
    videoYoutube: guadalmina.videoYoutube,
    rating: {
      value: guadalmina.rating.value,
      totalReviews: guadalmina.rating.reviews,
    },
  };

  const excursionDescription = {
    title: guadalmina.title,
    category: guadalmina.category,
    price: guadalmina.price,
    days: guadalmina.days,
    minimumAge: guadalmina.minimumAge,
    ubication: guadalmina.ubication,
    duration: guadalmina.duration,
    level: guadalmina.level,
    specialPrice: guadalmina.specialPrice,
  };

  return (
    <div className="pt-20 py-8">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdTourExperience),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdLocalBusiness),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <Hero excursion={excursionHero} />
      <div className="mx-4">
        <CheckAvailabilityButton />
      </div>

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-x-16 px-4 sm:px-16 py-4 sm:py-8">
        <div className="flex flex-col gap-4">
          <ExcursionDescription excursion={excursionDescription} />
          {/* Introducción */}
          <div className="flex flex-col gap-4">
            <p className="text-gray-700 leading-relaxed">
              Discover <strong>the best canyoning in Marbella</strong> at the
              Guadalmina Canyon, famously known as{" "}
              <strong>&quot;The Narrowest Canyon.&quot;</strong> This dynamic
              half-day activity is perfect for beginners, friends, and families
              (from 6 y.o. in summer), offering fun and excitement{" "}
              <strong>every day of the year</strong> thanks to its temperate
              waters.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Guadalmina canyoning</strong> takes place in a stunning
              natural gorge — locally known as the{" "}
              <strong>Canyon of the Angosturas</strong> — located in{" "}
              <strong>Benahavís</strong>, just 30 minutes from Marbella, making
              it the closest and most accessible{" "}
              <strong>Benahavís canyoning</strong> experience on the Costa del
              Sol.
            </p>
          </div>

          {/* Highlights */}
          <div className="my-4">
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">
              Activity Highlights
            </h3>
            <ul className="space-y-3">
              {ACTIVITY_HIGHLIGHTS.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 font-bold mr-3 text-xl">
                    {highlight.icon}
                  </span>
                  <span className="text-gray-700">
                    <strong>{highlight.title}:</strong> {highlight.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Safety Box - E-E-A-T */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-4">
            <h3 className="font-semibold text-green-800 mb-2">
              🛡️ Safety is Our Commitment
            </h3>
            <p className="text-green-700 text-sm">
              All excursions are guided by{" "}
              <strong>certified professional guides</strong> who prioritize the
              safety of the group. We supply high-quality, regularly inspected
              safety gear for every activity. The guide maintains the authority
              to modify or suspend the activity if any situation poses a danger
              to the participants.
            </p>
          </div>

          {/* Early Bird / Session Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-blue-800 mb-2">
              🌅 Pick Your Perfect Session
            </h3>
            <p className="text-blue-700 text-sm">
              Choose our <strong>9 AM Early Bird</strong> session to beat the
              summer crowds and enjoy the turquoise waters in peace, or join our
              popular <strong>10 AM and 2 PM</strong> slots for a high-energy
              adventure.
            </p>
          </div>

          {/* Accordion con toda la información */}
          <Accordion type="single" collapsible>
            {/* Description */}
            <AccordionItem value="item-1">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent className="flex flex-col text-gray-600 gap-y-4">
                <h3 className="text-lg font-semibold text-gray-950 my-2">
                  The Best Canyon Overall for Coastal Tourists
                </h3>
                <p>
                  The Guadalmina Canyon, situated in the charming town of{" "}
                  <strong>Benahavís</strong> near <strong>Marbella</strong>, is
                  our most requested activity due to its accessibility and high
                  fun factor. This route provides the ideal canyoning trip for
                  groups, bachelor parties, and families looking for a half-day
                  adventure (3 hours).
                </p>
                <p>
                  In this beautiful natural environment, you will learn the
                  basic progression techniques of <strong>canyoning</strong>{" "}
                  that are accessible to all participants. The gorge narrows
                  dramatically as you progress, revealing a truly impressive
                  landscape.
                </p>
                <p>
                  For those seeking an extra adrenaline rush, optional jumps of
                  up to <strong>6 meters</strong> into deep pools are available;
                  alternatively, you can opt for the fun{" "}
                  <strong>toboggan ride</strong> or a short{" "}
                  <strong>abseil</strong> descent (rappelling of 5 metres) if
                  you prefer to avoid the higher jumps.
                </p>
                <p>
                  We offer this canyon year-round, making it a reliable option,
                  even during the winter season (though in winter/rainy season
                  it may have an extra component of adventure!).
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* What's Included */}
            <AccordionItem value="item-2">
              <AccordionTrigger>What&apos;s Included</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Includes</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    {DESCRIPTION_DATA.whatsIncluded.included.map(
                      (item, index) => (
                        <li key={index}>{item}</li>
                      ),
                    )}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* What to Bring */}
            <AccordionItem value="item-3">
              <AccordionTrigger>What to Bring</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  {DESCRIPTION_DATA.whatToBring.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Meeting Point */}
            <AccordionItem value="item-4">
              <AccordionTrigger>Meeting Point</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-y-4">
                <p>
                  <strong>Location:</strong>{" "}
                  {DESCRIPTION_DATA.meetingPoint.location}
                </p>
                {DESCRIPTION_DATA.meetingPoint.mapUrl && (
                  <a
                    href={DESCRIPTION_DATA.meetingPoint.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View on Google Maps
                  </a>
                )}
                {DESCRIPTION_DATA.meetingPoint.note && (
                  <p className="text-sm text-gray-600 italic">
                    {DESCRIPTION_DATA.meetingPoint.note}
                  </p>
                )}
              </AccordionContent>
            </AccordionItem>

            {/* Itinerary */}
            <AccordionItem value="item-5">
              <AccordionTrigger>Itinerary</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-y-4">
                <ol className="list-decimal pl-6 space-y-2">
                  {DESCRIPTION_DATA.itinerary.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </AccordionContent>
            </AccordionItem>

            {/* Technical Details */}
            <AccordionItem value="item-6">
              <AccordionTrigger>Technical Details</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Max. Jump Height</p>
                    <p className="font-semibold">Up to 6 meters (optional)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Rappel</p>
                    <p className="font-semibold">Up to 4 meters</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Toboggan</p>
                    <p className="font-semibold">2 meters</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold">3:00 Hours</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Level</p>
                    <p className="font-semibold">All Levels (Level 1)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Minimum Age</p>
                    <p className="font-semibold">From 6 Years Old</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Season</p>
                    <p className="font-semibold">All Year</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Max. Capacity</p>
                    <p className="font-semibold">
                      Up to 12 participants per guide
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div id="bokun-section">
          <Bokun />
        </div>
      </div>
      <TrustindexWidget />
      <PrivateTourCTA />

      <Faqs faqs={guadalminaFaqs} />
      <OtherActivities
        activities={[
          {
            title: complementaryData["rio-verde"].subtitle.split(":")[0],
            description: complementaryData["rio-verde"].description,
            image: complementaryData["rio-verde"].mainImage,
            href: "/canyoning/rio-verde",
            category: complementaryData["rio-verde"].category,
          },
          {
            title: complementaryData["ronda"].subtitle.split(":")[0],
            description: complementaryData["ronda"].description,
            image: complementaryData["ronda"].mainImage,
            href: "/via-ferrata/ronda",
            category: complementaryData["ronda"].category,
          },
          {
            title: complementaryData["la-concha"].subtitle.split(":")[0],
            description: complementaryData["la-concha"].description,
            image: complementaryData["la-concha"].mainImage,
            href: "/hiking/la-concha",
            category: complementaryData["la-concha"].category,
          },
        ]}
      />
      <SeoContentTabs tabs={SEO_TABS} />
    </div>
  );
}
