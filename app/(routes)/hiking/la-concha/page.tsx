import Script from "next/script";
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
  laConchaMetadata,
  laConchaFaqs,
  jsonLdProduct,
  jsonLdTourExperience,
  jsonLdLocalBusiness,
  jsonLdFaq,
  jsonLdBreadcrumb,
} from "./metadata";

export const metadata = laConchaMetadata;

const SEO_TABS = [
  {
    id: "la-concha-hike",
    label: "La Concha Hike",
    h3: "La Concha Hike: Guided Ascent to Marbella's Most Iconic Peak",
    paragraphs: [
      "The La Concha hike is the most popular mountain excursion on the Costa del Sol, attracting hikers from Marbella, Estepona, Fuengirola and beyond every single day of the year. The standard route begins at the Juanar Refuge in Ojén and follows a well-marked trail that climbs steadily through pine and chestnut forests before emerging onto the iconic rocky ridge at 1,215 metres. The total distance is approximately 13 kilometres round-trip, with a positive elevation gain of around 900 metres — classified as intermediate difficulty.",
      "Many visitors attempt the la concha hike independently using GPS tracks or online guides, but a guided ascent with TUUR Adventure adds significant value: professional route-finding, wildlife and ecology commentary, safety briefings for the exposed ridge sections, and a full photo report sent within 24 hours. Our UIMLA-certified mountain guide José Moreno has completed the la concha hike hundreds of times and adjusts the pace and route according to group fitness and conditions.",
      "The la concha hike is available Monday to Saturday, year-round. The best seasons are spring (March–June) and autumn (September–November) for comfortable temperatures and clear visibility. Summer sessions start early at sunrise to avoid the heat. In winter, the upper sections can be icy — our guides carry crampons and make the go/no-go decision based on live conditions. Whether you're a first-time hiker visiting Marbella or a seasoned trekker looking to tick off Andalusia's most photogenic summit, the la concha hike with TUUR Adventure is the most complete experience available.",
    ],
  },
  {
    id: "la-concha-marbella",
    label: "La Concha Marbella",
    h3: "La Concha Marbella: The Symbol of the Costa del Sol",
    paragraphs: [
      "La Concha Marbella is the conical peak that frames the city's skyline, visible from every beach on the Costa del Sol between Estepona and Fuengirola. Its distinctive shell-like silhouette — the name 'La Concha' literally means 'The Shell' in Spanish — has made it the defining symbol of Marbella's geography. At 1,215 metres above sea level, it rises sharply from the coastline across just 12 kilometres of horizontal distance, creating one of the most dramatic mountain-meets-sea landscapes in Spain.",
      "Reaching the summit of La Concha Marbella rewards you with a 360-degree panorama that encompasses the Costa del Sol from Nerja to Tarifa, the Rock of Gibraltar, the Strait, and on clear days the Rif Mountains of Morocco across the Mediterranean. The summit plateau is large enough for the whole group to rest, eat and take in the views without feeling crowded. Our guides know the exact spots for the best photos of both the coast and the mountains behind.",
      "From the beach resorts of Marbella, Puerto Banús or San Pedro, La Concha Marbella looks impossibly high and steep. The guided ascent with TUUR Adventure demystifies the mountain: it is genuinely achievable for intermediate-level hikers with average fitness who can commit to a 6.5-hour day. Children from 11 years old participate regularly. The activity includes a pick-up option from Marbella, Puerto Banús and San Pedro, making it completely accessible without a hire car.",
      "Looking for the best things to do in Marbella beyond the beach? A guided La Concha Marbella ascent is consistently rated as one of the top outdoor experiences on the Costa del Sol — combining physical challenge, spectacular natural scenery, and the unique satisfaction of looking down on the city from its own rooftop.",
    ],
  },
  {
    id: "la-concha-mountain",
    label: "La Concha Mountain",
    h3: "La Concha Mountain: Sierra Blanca's Crown, 1,215m above the Costa del Sol",
    paragraphs: [
      "La Concha mountain is the highest peak in the Sierra Blanca range, a compact but dramatic massif that rises directly from the Mediterranean coastline in the municipality of Marbella, province of Málaga. The mountain is formed primarily of crystalline marble and schist dating back approximately 300 million years — part of the Betic Cordillera's Alpujarride complex. Its south-facing slopes descend steeply to the coast, while the northern face drops into the Juanar valley and the municipality of Ojén.",
      "The summit of La Concha mountain stands at 1,215 metres (3,986 feet) above sea level, making it the dominant high point of the entire Costa del Sol. The mountain lies within the Sierra Blanca y Bermeja Special Protection Zone for Birds (ZEPA) and the Sierra Blanca Biosphere Reserve, protecting its remarkable biodiversity — including Spanish ibex, golden eagles, peregrine falcons, and a rich mosaic of holm oak, Aleppo pine, and Portuguese oak woodland.",
      "There are two established routes to the summit of La Concha mountain: the Standard Route (Grade 2, 6.5 hours, from Juanar Refuge) and the Direct Route or La Concha Directo (Grade 3, 7 hours, from Nagüeles — involving light scrambling and fixed aids on the technical north face). TUUR Adventure guides both routes. The standard route is open to participants aged 11 and above; the direct route requires participants aged 16+ with good fitness and no vertigo.",
      "Guided ascents of La Concha mountain with TUUR Adventure depart from the Juanar Refuge car park, with an optional pickup service from Marbella, Puerto Banús and San Pedro de Alcántara. The activity includes 1.5 litres of water per person, a hiking backpack, accident insurance, and a full photo report. Minimum group size is 2 participants; maximum is 10 per guide. Private departures are available for exclusive group experiences throughout the week.",
    ],
  },
];

// Descripción de la excursión
const EXCURSION_INTRO = `Conquer the legendary peak that guards the Costa del Sol. Stand atop Marbella's most famous landmark, 1,215 meters above the sea, and gaze across the Mediterranean to the shores of Africa and Gibraltar.`;

const EXCURSION_DESCRIPTION = `La Concha is the majestic landscaping icon of Marbella, rising 1,215 meters above the Mediterranean.

Guided by our mountain experts, you will navigate a serpentine path through diverse habitats, starting from the lush forests of Juanar.

Before the final ascent, you will cross forests of chestnut trees, Aleppo pines, and eucalyptus, immersing yourself in a protected biosphere reserve.

For those seeking an extreme challenge, we offer the La Concha Directo (Direct Route) from Nagüeles. This "Extreme Trekking" version is a technical 7-hour trail with a 1,000m positive slope, involving progression aids and light climbing sections, recommended for participants aged +16 with high physical fitness.

Whether you choose the panoramic standard route or the vertical direct challenge, the reward is the same: the best views in Andalusia.`;

const ACTIVITY_HIGHLIGHTS = [
  {
    icon: "✅",
    title: "Iconic Landmark",
    description:
      "Reach the most famous and sought-after summit in the Sierra Blanca range.",
  },
  {
    icon: "✅",
    title: "Strait Views",
    description:
      "Witness unforgettable 360º views including the Strait of Gibraltar and the African Rif.",
  },
  {
    icon: "✅",
    title: "Rich Biodiversity",
    description:
      "Explore a biosphere reserve featuring chestnut, pine, and ancient olive forests.",
  },
];

// Datos para el componente Description
const DESCRIPTION_DATA = {
  whatsIncluded: {
    included: [
      "Transfer from Marbella and surroundings on request",
      "Professional Mountain Guide with UIMLA credentials",
      "1.5l water per person",
      "Hiking Backpack",
      "Accident and civil responsibility insurance",
      "Full photo report! (Sent via WhatsApp within 24 hours)",
    ],
  },
  whatToBring: [
    "Appropriate mountain or trekking shoes with good grip",
    "Sun protection and comfortable layers",
    "Headlamp (only for sunset/night sessions)",
  ],
  meetingPoint: {
    location: "Refugio de Juanar - Parking de Juanar",
    mapUrl: "https://maps.app.goo.gl/juanar-parking", // Actualizar con URL real
    note: "Pick-up in Marbella and surrounding areas available. Important Timetable Note: Participants must arrive 15 minutes before the start time to organize the group and attend the safety briefing. A 15-minute courtesy waiting time is granted for accidental delays; after this time, the activity will start without absent participants, resulting in the forfeiture of service rights.",
  },
  itinerary: [
    "Meet your guide 15 minutes before departure for the briefing.",
    "Forest Approach: Begin the hike through the chestnut and pine groves of Juanar.",
    "The Ridge Ascent: Navigate the winding mountain paths towards the peak.",
    "Summit Success: Reach the 1,215m peak for photos and panoramic views.",
    "Return: Descend back to the starting point (Total time: approx. 6.5 hours).",
  ],
};

export default async function Page() {
  const laConcha = await getExcursionByPath("Hiking", "la-concha");
  console.log("info la concha", laConcha);

  if (!laConcha) {
    notFound();
  }

  const excursionHero = {
    mainImage: laConcha.mainImage,
    images: laConcha.images,
    title: laConcha.title,
    subtitle: laConcha.subtitle,
    videoYoutube: laConcha.videoYoutube,
    categoryPath: laConcha.categoryPath,
    categoryText: laConcha.category,
    isMostPopular: laConcha.isMostPopular,
    rating: {
      value: laConcha.rating.value,
      totalReviews: laConcha.rating.reviews,
    },
  };

  const excursionDescription = {
    title: laConcha.title,
    category: laConcha.category,
    price: laConcha.price,
    days: laConcha.days,
    minimumAge: laConcha.minimumAge,
    ubication: laConcha.ubication,
    duration: laConcha.duration,
    level: laConcha.level,
    specialPrice: laConcha.specialPrice,
  };

  return (
    <div className="pt-20">
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
            <p className="text-gray-700 leading-relaxed">{EXCURSION_INTRO}</p>
          </div>

          {/* Highlights */}
          <div className="my-4">
            <h4 className="font-semibold text-gray-900 mb-4 text-lg">
              Activity Highlights
            </h4>
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
            <h4 className="font-semibold text-green-800 mb-2">
              🛡️ Safety is Our Commitment
            </h4>
            <p className="text-green-700 text-sm">
              All excursions are guided by certified professional guides who
              prioritize the safety of the group. We supply high-quality,
              regularly inspected safety gear for every activity. The guide
              maintains the authority to modify or suspend the activity if any
              situation poses a danger to the participants.
            </p>
          </div>

          {/* Accordion con toda la información */}
          <Accordion type="single" collapsible>
            {/* Description */}
            <AccordionItem value="item-1">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent className="flex flex-col text-gray-600 gap-y-4">
                <h3 className="text-lg font-semibold text-gray-950 my-2">
                  The Ultimate Trekking Challenge in Marbella
                </h3>
                <p>
                  La Concha is the majestic landscaping icon of Marbella, rising
                  1,215 meters above the Mediterranean.
                </p>
                <p>
                  Guided by our mountain experts, you will navigate a serpentine
                  path through diverse habitats, starting from the lush forests
                  of Juanar.
                </p>
                <p>
                  Before the final ascent, you will cross forests of chestnut
                  trees, Aleppo pines, and eucalyptus, immersing yourself in a
                  protected biosphere reserve.
                </p>
                <p>
                  For those seeking an extreme challenge, we offer the{" "}
                  <strong>La Concha Directo (Direct Route)</strong> from
                  Nagüeles. This &quot;Extreme Trekking&quot; version is a
                  technical 7-hour trail with a 1,000m positive slope, involving
                  progression aids and light climbing sections, recommended for
                  participants aged +16 with high physical fitness.
                </p>
                <p>
                  Whether you choose the panoramic standard route or the
                  vertical direct challenge, the reward is the same: the best
                  views in Andalusia.
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

            {/* Technical Details - Añadido específico para hiking */}
            <AccordionItem value="item-6">
              <AccordionTrigger>Technical Details</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Distance</p>
                    <p className="font-semibold">13 Km</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Altitude</p>
                    <p className="font-semibold">1,215 m (⁓3986 ft)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold">6:30 Hours</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Level</p>
                    <p className="font-semibold">Intermediate (Level 2)</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div id="bokun-section">
          <Script
            src="https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=b5f48f0c-7b7c-486c-830a-f76ae50e1d7b"
            strategy="lazyOnload"
          />
          <div
            className="bokunWidget"
            data-src="https://widgets.bokun.io/online-sales/b5f48f0c-7b7c-486c-830a-f76ae50e1d7b/experience-calendar/1156377"
          ></div>
          <noscript>Please enable javascript in your browser to book</noscript>
        </div>
      </div>
      <TrustindexWidget />
      <PrivateTourCTA />
      <Faqs faqs={laConchaFaqs} />
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
            title: complementaryData["guadalmina"].subtitle.split(":")[0],
            description: complementaryData["guadalmina"].description,
            image: complementaryData["guadalmina"].mainImage,
            href: "/canyoning/guadalmina",
            category: complementaryData["guadalmina"].category,
          },
        ]}
      />
      <SeoContentTabs tabs={SEO_TABS} />
    </div>
  );
}
