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
import { ActivityBookingForm } from "@/components/activity-booking-form";
import {
  rondaMetadata,
  rondaFaqs,
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

export const metadata = rondaMetadata;

const SEO_TABS = [
  {
    id: "via-ferrata-ronda",
    label: "Via Ferrata Ronda",
    h3: "Via Ferrata Ronda: Climb the Legendary Tajo Gorge",
    paragraphs: [
      "Via ferrata Ronda is one of the most historically and visually unique via ferrata experiences in all of Spain. The route climbs the limestone walls of the Tajo de Ronda — the dramatic gorge that splits the city of Ronda in two — directly beneath the shadow of the Puente Nuevo, the iconic 18th-century bridge that has come to symbolise Ronda worldwide. At 98 metres above the Guadalevín River, the via ferrata ronda offers views that no tourist lookout can replicate.",
      "The via ferrata ronda guided by TUUR Adventure consists of two consecutive sections, each approximately 80 metres in height, classified as Level K2 (easy to intermediate). The first section follows the left bank of the Tajo, climbing through natural limestone features with iron rungs, stemples, and fixed cables providing continuous safety. The second section transitions to a different face of the gorge and finishes at street level in the historic Barrio de San Francisco, just minutes from Ronda's old town.",
      "Via ferrata ronda is suitable for all ages from 7 years old and requires no prior climbing or via ferrata experience. The guided session with TUUR Adventure lasts approximately 2.5 to 3 hours, includes all technical safety equipment (harness, helmet, via ferrata lanyards), and finishes with a briefing on local points of interest in Ronda's historic centre. The activity operates year-round, making it one of the most flexible adventure options in Málaga Province.",
    ],
  },
  {
    id: "via-ferrata-ronda-spain",
    label: "Via Ferrata Ronda Spain",
    h3: "Via Ferrata Ronda Spain: One of Andalusia's Most Iconic Vertical Routes",
    paragraphs: [
      "Via ferrata ronda spain is increasingly recognised as one of the country's most distinctive urban adventure experiences. While most via ferrata routes in Spain are found in remote mountain settings, the via ferrata ronda spain is unique in being located within the boundaries of a living, inhabited city — making it possible to combine a genuine vertical climbing adventure with a visit to one of Andalusia's most beautiful historic towns in a single day.",
      "Ronda sits in the province of Málaga at 723 metres above sea level, approximately 50 minutes inland from Marbella and one hour from Málaga city. The via ferrata ronda spain is therefore an excellent excursion for visitors based anywhere on the Costa del Sol: combine the morning via ferrata with an afternoon exploring the old town, the Puente Nuevo, the Arab baths, and tapas at one of Ronda's traditional bars. TUUR Adventure can accommodate the via ferrata ronda spain as part of a private day-trip itinerary on request.",
      "From an international perspective, the via ferrata ronda spain attracts visitors from across Europe and beyond who combine it with the broader appeal of the Costa del Sol as a holiday destination. TUUR Adventure guides the via ferrata ronda spain year-round, with private group departures available any day of the week for groups of 2 to 10 participants. All guides are UIMLA-certified mountain professionals with specialist via ferrata qualifications and first-aid certification.",
    ],
  },
  {
    id: "vias-ferratas-ronda",
    label: "Vías Ferratas Ronda",
    h3: "Vías Ferratas Ronda: Two Routes in the Heart of the City",
    paragraphs: [
      "The vías ferratas Ronda are a pair of climbing routes fixed to the inner walls of the Tajo de Ronda gorge, installed with the support of the Ayuntamiento de Ronda to offer a regulated and safe adventure experience within the city's protected natural space. The two vías ferratas Ronda share the same gorge but follow different rock faces, offering distinct challenges and perspectives of the gorge and the Puente Nuevo above.",
      "Technically, the vías ferratas Ronda are graded K2 on the Spanish via ferrata scale — accessible for beginners and families, but genuinely engaging for those with more experience who want to explore the gorge at a faster pace. Each section covers approximately 80 metres of vertical gain, with a total climbing time of 1.5 to 2 hours plus safety briefing, gear-up, and approach walk. The fixed protection — cables, rungs, and stemples — is maintained regularly by the local authority.",
      "TUUR Adventure guides the vías ferratas Ronda as a private experience for groups of 2 to 10 participants, available every day of the year. The guide meets the group in the historic centre of Ronda, leads the descent to the base of the gorge, and accompanies participants through both sections with continuous safety supervision. All equipment is provided — participants only need comfortable sports clothing and closed footwear. Families with children aged 7 and above are welcome; the vías ferratas Ronda is one of the most family-friendly via ferrata experiences in Málaga Province.",
      "For visitors wanting to combine multiple outdoor activities in the Ronda area, TUUR Adventure also offers the Tajo de Ronda Canyoning (a separate water-based descent of the same gorge, available March–June and September–November) and day trips to the Río Verde canyon in Granada. Combining the vías ferratas Ronda with a canyoning excursion is possible as a two-day itinerary based in Ronda — the guide can advise on logistics on request.",
    ],
  },
];

// Descripción de la excursión
const EXCURSION_INTRO = `Discover Ronda from a perspective few tourists ever see. Scale the breathtaking limestone cliffs of the Tajo gorge, directly under the shadow of the legendary Puente Nuevo, in an adventure that blends thousand-year history with vertical thrill.`;

const ACTIVITY_HIGHLIGHTS = [
  {
    icon: "✅",
    title: "Unbeatable Views",
    description:
      'Witness the Puente Nuevo and the "Hanging Houses" from a unique, vertical angle.',
  },
  {
    icon: "✅",
    title: "Beginner & Family Friendly",
    description:
      "Specifically recommended for children (+7 y.o.) and first-timers.",
  },
  {
    icon: "✅",
    title: "Double the Adventure",
    description:
      "Includes two exciting via ferrata sections in the heart of the city.",
  },
  {
    icon: "✅",
    title: "Cultural Context",
    description:
      'Explore the historic "Old Mills" area while you progress along the rock wall.',
  },
];

// Datos para el componente Description
const DESCRIPTION_DATA = {
  whatsIncluded: {
    included: [
      "Professional Mountain Guide",
      "Technical safety equipment (Harness, helmet, lanyards)",
      "Accident and civil responsibility insurance",
      "Full photo report! (A link is sent via WhatsApp within 24 hours)",
    ],
  },
  whatToBring: [
    "Comfortable sports or hiking clothing",
    "Closed sports shoes with good sole grip",
    "Water and light snacks",
    "Sun protection",
  ],
  meetingPoint: {
    location: "Ronda, Málaga",
    mapUrl: "https://maps.app.goo.gl/R2huiQ443eU85ejZ7",
    note: "Important Timetable Note: Participants must arrive 15 minutes before the start time to organize the group and attend the safety briefing. A 15-minute courtesy waiting time is granted for accidental delays; after this time, the activity will start without absent participants, resulting in the forfeiture of service rights.",
  },
  itinerary: [
    "Meet your guide at the indicated meeting point, 15 minutes before start.",
    "Gear up: Briefing on safety measures and vertical progression equipment.",
    'The Descent: Walk down to the "Old Mills" area to reach the foot of the cliffs.',
    "Vertical Climb: Conquer the two sections of the Via Ferrata (80m + 80m).",
    "The Summit: Finish in the city center with time to enjoy typical Andalusian tapas.",
  ],
};

export default async function Page() {
  const viaFerrataRonda = await getExcursionByPath("Via-Ferrata", "ronda");

  if (!viaFerrataRonda) {
    notFound();
  }

  const excursionHero = {
    mainImage: viaFerrataRonda.mainImage,
    images: viaFerrataRonda.images,
    title: viaFerrataRonda.title,
    subtitle: viaFerrataRonda.subtitle,
    categoryPath: viaFerrataRonda.categoryPath,
    categoryText: viaFerrataRonda.category,
    isMostPopular: viaFerrataRonda.isMostPopular,
    videoYoutube: viaFerrataRonda.videoYoutube,
    rating: {
      value: viaFerrataRonda.rating.value,
      totalReviews: viaFerrataRonda.rating.reviews,
    },
  };

  const excursionDescription = {
    title: viaFerrataRonda.title,
    category: viaFerrataRonda.category,
    price: viaFerrataRonda.price,
    days: viaFerrataRonda.days,
    minimumAge: viaFerrataRonda.minimumAge,
    ubication: viaFerrataRonda.ubication,
    duration: viaFerrataRonda.duration,
    level: viaFerrataRonda.level,
    specialPrice: viaFerrataRonda.specialPrice,
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
                  A Vertical Journey into the History of Ronda
                </h3>
                <p>
                  The Via Ferrata Tajo de Ronda is a unique experience in
                  Andalusia, allowing you to climb the very cliffs that define
                  this millenary city.
                </p>
                <p>
                  Located just 50 minutes from Marbella and an hour from Málaga,
                  this route provides unprecedented views of the Tajo, its
                  monuments, and the Puente Nuevo from below to above.
                </p>
                <p>
                  Perfect for families with children and beginner adventure
                  tourists, this activity is divided into two sections of 80
                  meters each.
                </p>
                <p>
                  You will learn basic climbing techniques in a safe, controlled
                  environment while becoming a dynamic actor in one of
                  Spain&apos;s most emblematic landscapes.
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

            {/* Technical Details - Específico para via ferrata */}
            <AccordionItem value="item-6">
              <AccordionTrigger>Technical Details</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Verticality</p>
                    <p className="font-semibold">2 sections (80m + 80m)</p>
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
                    <p className="font-semibold">+7 Years Old</p>
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
            data-src="https://widgets.bokun.io/online-sales/b5f48f0c-7b7c-486c-830a-f76ae50e1d7b/experience-calendar/1169053"
          ></div>
        </div>
      </div>
      <TrustindexWidget />
      <PrivateTourCTA />
      <Faqs faqs={rondaFaqs} />
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
            title: complementaryData["el-chorro"].subtitle.split(":")[0],
            description: complementaryData["el-chorro"].description,
            image: complementaryData["el-chorro"].mainImage,
            href: "/via-ferrata/el-chorro",
            category: complementaryData["el-chorro"].category,
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
