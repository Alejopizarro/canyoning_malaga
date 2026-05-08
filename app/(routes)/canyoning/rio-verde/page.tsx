import Bokun from "@/components/bokun";
import Hero from "@/components/hero";
import ExcursionDescription from "@/components/excursion-description";
import Faqs from "../../activities/components/faqs";
import { getExcursionByPath } from "@/lib/activities";
import { notFound } from "next/navigation";
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
  rioVerdeMetadata,
  rioVerdeFaqs,
  jsonLdProduct,
  jsonLdTourExperience,
  jsonLdLocalBusiness,
  jsonLdFaq,
  jsonLdBreadcrumb,
} from "./metadata";
import Script from "next/script";
import OtherActivities from "@/components/other-activities";
import { complementaryData } from "@/lib/complementary-data";
import SeoContentTabs from "@/components/seo-content-tabs";

export const metadata = rioVerdeMetadata;

const SEO_TABS = [
  {
    id: "rio-verde-spain",
    label: "Rio Verde Spain",
    h3: "Río Verde Spain: Canyoning in Andalusia's Most Turquoise Canyon",
    paragraphs: [
      "Río Verde Spain is widely regarded as one of the most photogenic canyoning destinations in the entire Iberian Peninsula. Located within the Sierra de Almijara Natural Park, on the border between the provinces of Málaga and Granada, the río verde spain stands out from other Spanish canyons due to its extraordinarily turquoise water — a natural phenomenon created by the high calcium carbonate content of the limestone geology dissolving into the river as it flows downstream. The resulting colour ranges from a vivid jade green to an intense aquamarine depending on the season and light conditions.",
      "The río verde spain corridor carves a 12-kilometre gorge through the mountains between the villages of Otivar and Almuñécar in Granada Province. The canyoning section guided by TUUR Adventure covers the most spectacular 4.5-hour stretch: two mandatory rappels (6m and 9m), multiple jump points up to 9 metres, natural water slides, and deep swimming pools framed by sheer canyon walls. The canyon is accessible from April 1st to October 31st each year, with peak conditions from May to September.",
      "For travellers visiting the Costa del Sol, the río verde spain is a realistic day trip: the meeting point in Otivar, Granada is approximately 50 minutes from Málaga city, 40 minutes from Nerja, and 55 minutes from Marbella. TUUR Adventure operates guided descents every Wednesday and Friday throughout the season, with private departures available for groups of up to 8 participants on other days of the week. The price includes wetsuit, helmet, harness, and a full photo report sent within 24 hours.",
    ],
  },
  {
    id: "rio-verde-canyoning",
    label: "Rio Verde Canyoning",
    h3: "Río Verde Canyoning: Jumps, Rappels and Turquoise Pools in Granada",
    paragraphs: [
      "Río Verde canyoning is one of the signature adventure activities in Andalusia, combining moderate technical difficulty with exceptional scenery. The río verde canyoning route follows a section of the river that descends through the heart of the Sierra de Almijara, a protected natural area straddling the Málaga–Granada border. Unlike many Spanish canyons, the río verde canyoning experience requires participants to actively swim long stretches of the canyon — making water confidence an important prerequisite for this route.",
      "The río verde canyoning descent guided by TUUR Adventure takes approximately 4.5 hours and is classified as Level 2 (intermediate). The two mandatory rappels — 6 metres and 9 metres — introduce participants to basic rope technique in a fully assisted, guided environment. Jump points range from 3 to 9 metres and are entirely optional: our guides identify each jump in advance and participants decide individually whether to jump, slide, or take the alternative descent. Minimum age for río verde canyoning is 9 years old.",
      "What distinguishes the río verde canyoning experience from other Andalusian canyons is the sheer density of natural features packed into a single descent. In under 5 hours you encounter rappels, jumps, slides, swim-throughs, and pools — along with the canyon's signature turquoise colour that makes every photograph exceptional. TUUR Adventure provides all equipment including 5mm wetsuits, neoprene shoes, helmets, and harnesses.",
      "Río verde canyoning with TUUR Adventure operates April to October, with open group sessions every Wednesday and Friday from June to September. Private group departures are available any day of the week for groups of 2 to 8 participants. The meeting point is the bar-restaurant El Capricho in Otivar, Granada — the guide transports the group by van to the canyon entrance, approximately 45 minutes uphill from the village.",
    ],
  },
  {
    id: "canyoning-granada",
    label: "Canyoning Granada",
    h3: "Canyoning Granada: Discover the Canyons of Sierra de Almijara",
    paragraphs: [
      "Canyoning granada has grown rapidly in popularity over the past decade, driven by the exceptional quality of the natural gorges found in the Sierra de Almijara and Sierra Nevada foothills. The undisputed highlight of canyoning granada is the Río Verde, but the province also offers several other technical canyons including the Río Izbor, Río Huechar, and the more extreme descents of the Alpujarras range. For visitors looking for the most spectacular and accessible canyoning granada experience, the Río Verde remains the benchmark.",
      "TUUR Adventure operates canyoning granada excursions from the village of Otivar, located in the Jete Valley approximately 20 km north of Almuñécar. Despite being in Granada Province, the location is well within reach of visitors based on the Costa del Sol: the drive from Málaga takes under an hour, and from Marbella or Estepona approximately 80 minutes. This makes canyoning granada with TUUR Adventure a genuine full-day excursion from any base on the Andalusian coast.",
      "The Río Verde canyoning granada route is open to groups from age 9 upward, with no prior canyoning experience required. Participants receive a full technical briefing at the meeting point, are fitted with appropriate equipment, and travel by van to the canyon entrance with the guide. The descent takes 4 to 5 hours depending on group size, after which the guide returns the group to the meeting point. The entire day, including travel to and from the canyon entrance, typically lasts 7 to 8 hours.",
      "For more advanced canyoners looking for a greater challenge, TUUR Adventure also offers the Río Verde X-Pro, an integral descent of the entire Río Verde canyon taking 7 hours with higher rappels and greater technical demands. Whether you choose the standard or the X-Pro, canyoning granada in the Río Verde is an unforgettable Andalusian adventure that combines mountain scenery, technical challenge, and natural swimming in one of Spain's most beautiful rivers.",
    ],
  },
];

// Descripción de la excursión con negritas
const EXCURSION_INTRO = (
  <>
    Dive into <strong>Andalusia&apos;s aquatic jewel</strong>, the Río Verde,
    famed worldwide for its intensely{" "}
    <strong>turquoise waters and dynamic natural route</strong>. Discover an
    exhilarating river descent perfect for beginners and families seeking
    thrilling natural jumps and swimming in breathtaking landscapes.
  </>
);

const ACTIVITY_HIGHLIGHTS = [
  {
    icon: "✅",
    title: "Jumps, jumps and more jumps!",
    description:
      "Enjoy 6-7 exciting jumps up to 9 meters high into crystal-clear pools.",
  },
  {
    icon: "✅",
    title: "Sport Canyoning",
    description:
      "Ideal intermediate route featuring two mandatory rappels of 6m and 9m.",
  },
  {
    icon: "✅",
    title: "Crystalline Waters",
    description:
      'Experience the unique "turquoise water" in the stunning Sierra de Almijara Natural Park.',
  },
  {
    icon: "✅",
    title: "Accessibility",
    description:
      "Great location, reachable from major hubs like Málaga and Granada.",
  },
];

// Datos para el componente Description
const DESCRIPTION_DATA = {
  whatsIncluded: {
    included: [
      "Professional Guide",
      "Wetsuit/Neoprene",
      "Canyoning harness, helmet, and rappel equipment",
      "Accident and civil liability insurance",
      "Full photo report! (Sent via WhatsApp within 24 hours of activity)",
    ],
  },
  whatToBring: [
    "Swimming/Bathing suit (to wear under the wetsuit)",
    "High socks (above the ankle is enough)",
    "Dry underwear and towel for changing afterward",
    "Appropriate closed sports shoes (water shoes and flip-flops are not permitted)",
    "Water and food/snacks (Energy bars/Picnic) to recharge energy",
  ],
  meetingPoint: {
    location: "Otivar, Granada. In front of the bar-restaurant EL CAPRICHO.",
    mapUrl: "https://goo.gl/maps/MjFGHNrmqgef7b2x5",
    note: "Compliance Note: Please arrive at the meeting point 15 minutes before the stated time for organization; a 15-minute courtesy time is provided for delays, after which the activity will start without absent participants.",
  },
};

export default async function Page() {
  const rioVerde = await getExcursionByPath("Canyoning", "rio-verde");

  if (!rioVerde) {
    notFound();
  }

  const excursionHero = {
    mainImage: rioVerde.mainImage,
    images: rioVerde.images,
    title: rioVerde.title,
    subtitle: rioVerde.subtitle,
    categoryPath: rioVerde.categoryPath,
    categoryText: rioVerde.category,
    isMostPopular: rioVerde.isMostPopular,
    videoYoutube: rioVerde.videoYoutube,
    rating: {
      value: rioVerde.rating.value,
      totalReviews: rioVerde.rating.reviews,
    },
  };

  const excursionDescription = {
    title: rioVerde.title,
    category: rioVerde.category,
    price: rioVerde.price,
    days: rioVerde.days,
    minimumAge: rioVerde.minimumAge,
    ubication: rioVerde.ubication,
    duration: rioVerde.duration,
    level: rioVerde.level,
    specialPrice: rioVerde.specialPrice,
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

          {/* Season Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-2">
            <h4 className="font-semibold text-amber-800 mb-2">
              📅 Seasonal Availability
            </h4>
            <p className="text-amber-700 text-sm">
              This activity is available from{" "}
              <strong>April 1st to October 31th</strong>. The season is
              determined by optimal water levels and weather conditions.
            </p>
          </div>

          {/* Safety Box - E-E-A-T */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-2">
            <h4 className="font-semibold text-green-800 mb-2">
              🛡️ Safety is Our Commitment
            </h4>
            <p className="text-green-700 text-sm">
              All excursions are guided by{" "}
              <strong>certified professional guides</strong> who prioritize the
              safety of the group. We supply high-quality, regularly inspected
              safety gear for every activity. The guide maintains the authority
              to modify or suspend the activity if any situation poses a danger
              to the participants.
            </p>
          </div>

          {/* Accordion con toda la información */}
          <Accordion type="single" collapsible>
            {/* Description */}
            <AccordionItem value="item-1">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent className="flex flex-col text-gray-600 gap-y-4">
                <h3 className="text-lg font-semibold text-gray-950 my-2">
                  Discover the Turquoise Labyrinth near the Costa del Sol
                </h3>
                <p>
                  The Río Verde canyoning trip is one of the best adventures you
                  can do in Andalusia, taking place in the majestic Sierra de
                  Almijara, just 20 km from Almuñecar and about 50 minutes by
                  car from Málaga. This activity is designed for all audiences,
                  including <strong>those new to canyoning.</strong>
                </p>
                <p>
                  You will actively walk, swim, and navigate the gorge,
                  encountering natural features sculpted by water over thousands
                  of years. The dynamic route includes natural slides up to 4
                  meters, swimming in deep pozas (pools), and the option to take
                  jumps from 3 to 9 meters (all jumps are optional).
                </p>
                <p>
                  If you are looking for a bigger challenge, inquire about the{" "}
                  <strong>Río Verde X-Pro</strong> version, which is a 7-hour
                  integral canyon requiring a higher physical level.
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
                    <li>Professional Guide</li>
                    <li>Wetsuit/Neoprene</li>
                    <li>Canyoning harness, helmet, and rappel equipment</li>
                    <li>Accident and civil liability insurance</li>
                    <li>
                      <strong>Full photo report!</strong> (Sent via WhatsApp
                      within 24 hours of activity)
                    </li>
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
                <p className="text-sm text-gray-600 italic">
                  <strong>Compliance Note:</strong> Please arrive at the meeting
                  point 15 minutes before the stated time for organization; a
                  15-minute courtesy time is provided for delays, after which
                  the activity will start without absent participants.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Itinerary */}
            <AccordionItem value="item-5">
              <AccordionTrigger>Itinerary</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-y-4">
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    <strong>Meet your guide:</strong> Arrive at the designated
                    meeting point 15 minutes before start time.
                  </li>
                  <li>
                    <strong>Approaching the canyon entrance:</strong> Take your
                    guide&apos;s van and then walk to the start of the canyon
                    (⁓45 minutes).
                  </li>
                  <li>
                    <strong>Gear up:</strong> Put on all the provided canyoning
                    safety equipment and listen to the guide&apos;s safety
                    guidelines.
                  </li>
                  <li>
                    <strong>Canyoning Time!</strong> Walk, swim, slide, jump,
                    and rappel through the river for about 4.5 hours.
                  </li>
                  <li>
                    <strong>Return:</strong> You will finish near your
                    guide&apos;s van. Take off your equipment, get in the van
                    and head back to the original meeting point. Thank your
                    guide for an unforgettable day!
                  </li>
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
                    <p className="font-semibold">Up to 9 meters (optional)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Rappels</p>
                    <p className="font-semibold">6m and 9m (mandatory)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Natural Slides</p>
                    <p className="font-semibold">Up to 4 meters</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold">4:30 Hours</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Level</p>
                    <p className="font-semibold">Medium (Level 2)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Minimum Age</p>
                    <p className="font-semibold">+9 Years Old</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Season</p>
                    <p className="font-semibold">April 1st - October 31th</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Max. Capacity</p>
                    <p className="font-semibold">8 participants per guide</p>
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
            data-src="https://widgets.bokun.io/online-sales/b5f48f0c-7b7c-486c-830a-f76ae50e1d7b/experience-calendar/1168518"
          ></div>
          <noscript>Please enable javascript in your browser to book</noscript>
        </div>
      </div>
      <TrustindexWidget />
      <PrivateTourCTA />
      <Faqs faqs={rioVerdeFaqs} />
      <OtherActivities
        activities={[
          {
            title: complementaryData["guadalmina"].subtitle.split(":")[0],
            description: complementaryData["guadalmina"].description,
            image: complementaryData["guadalmina"].mainImage,
            href: "/canyoning/guadalmina",
            category: complementaryData["guadalmina"].category,
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
