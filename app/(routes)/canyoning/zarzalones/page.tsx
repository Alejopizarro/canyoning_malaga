import Script from "next/script";
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
  zarzalonesMetadata,
  zarzalonesFaqs,
  jsonLdProduct,
  jsonLdTourExperience,
  jsonLdLocalBusiness,
  jsonLdFaq,
  jsonLdBreadcrumb,
} from "./metadata";

export const metadata = zarzalonesMetadata;

// Descripción de la excursión
const EXCURSION_INTRO = (
  <>
    Experience one of the best ravines in Málaga, perfectly balanced between the
    shorter Guadalmina and the challenging Buitreras.{" "}
    <strong>Zarzalones</strong> takes you to the very source of the Río Grande,
    featuring stunning crystalline waters and a thrilling 21-meter rappel.
  </>
);

const ACTIVITY_HIGHLIGHTS = [
  {
    icon: "✅",
    title: "Major Rappel",
    description:
      "Master the spectacular descent of 21 meters, the most challenging semi-vertical element of the route.",
  },
  {
    icon: "✅",
    title: "River Source",
    description:
      "The adventure begins at the large Zarzalones cave, where green, pure, and crystalline waters sprout.",
  },
  {
    icon: "✅",
    title: "Intermediate Challenge",
    description:
      "Ideal for those looking for a longer trip (4h) than Guadalmina, yet manageable for families (+9 y.o.).",
  },
  {
    icon: "✅",
    title: "Strategic Location",
    description:
      "Conveniently located just 50 minutes from Marbella and 1 hour from Málaga city.",
  },
];

// Datos para el componente Description
const DESCRIPTION_DATA = {
  whatsIncluded: {
    included: [
      "Professional Guide",
      "Wetsuit/Neoprene",
      "Canyoning harness, helmet, and rappel equipment",
      "Accident and civil responsibility insurance",
      "Full photo report! (Sent via WhatsApp within 24 hours of activity)",
    ],
  },
  whatToBring: [
    "Swimming/Bathing suit (to wear under the wetsuit)",
    "High socks (above the ankle is sufficient)",
    "Dry underwear and towel for changing afterward",
    "Appropriate closed sports shoes (must have good sole grip; water shoes and flip-flops are NOT permitted)",
    "Water and food/snacks (Energy bars/Picnic) to recharge energy",
  ],
  meetingPoint: {
    location: "Sierra de las Nieves service station",
    mapUrl: "https://maps.app.goo.gl/WtLoCnzpkCZTDsf86",
    note: "Timetable Policy: Please arrive 15 minutes before the start time for organization. A courtesy time of 15 minutes is provided for accidental delays; after this, the activity will start without absent participants, who forfeit their right to the service.",
  },
  itinerary: [
    "Meet your guide at the designated meeting point (15 minutes before start time).",
    "Gear up: Put on all provided canyoning gear.",
    "Canyon Entrance: Walk to the source of the Rio Grande and begin the descent.",
    "Canyoning Time! Navigate jumps (optional), pools, and the two major rappels (up to 21m) over approximately 4 hours.",
    "Return: Walk out, change clothes, and conclude the adventure.",
  ],
};

export default async function Page() {
  const zarzalones = await getExcursionByPath("Canyoning", "zarzalones");

  if (!zarzalones) {
    notFound();
  }

  const excursionHero = {
    mainImage: zarzalones.mainImage,
    images: zarzalones.images,
    title: zarzalones.title,
    subtitle: zarzalones.subtitle,
    categoryPath: zarzalones.categoryPath,
    categoryText: zarzalones.category,
    isMostPopular: zarzalones.isMostPopular,
    rating: {
      value: zarzalones.rating.value,
      totalReviews: zarzalones.rating.reviews,
    },
  };

  const excursionDescription = {
    title: zarzalones.title,
    category: zarzalones.category,
    price: zarzalones.price,
    days: zarzalones.days,
    minimumAge: zarzalones.minimumAge,
    ubication: zarzalones.ubication,
    duration: zarzalones.duration,
    level: zarzalones.level,
    specialPrice: zarzalones.specialPrice,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTourExperience) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
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
                  The Intermediate Canyoning Gem of Málaga Province
                </h3>
                <p>
                  The Zarzalones inferior canyon is ranked among the best
                  ravines in Málaga, located in the heart of the beautiful{" "}
                  <strong>Sierra de las Nieves Natural Park</strong>.
                </p>
                <p>
                  This adventure provides an excellent option if you are near{" "}
                  <strong>Marbella</strong> or <strong>Málaga</strong>. It
                  offers an experience halfway between Guadalmina and Buitreras
                  canyon.
                </p>
                <p>
                  The route begins uniquely at the very source of the Río
                  Grande, a large cave or spring, ensuring water flow throughout
                  the entire year.
                </p>
                <p>
                  Following the riverbed, you will encounter multiple optional
                  jumps into natural pools, with drops reaching up to 3 meters
                  (4 maximum), leading to two technical <strong>rappels</strong>{" "}
                  (abseils) of 10 meters and the impressive{" "}
                  <strong>21-meter waterfall</strong>.
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
                        <li key={index}>
                          {item.includes("Full photo report") ? (
                            <>
                              <strong>Full photo report!</strong> (Sent via
                              WhatsApp within 24 hours of activity)
                            </>
                          ) : (
                            item
                          )}
                        </li>
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
                  <li>
                    <strong>Meet your guide</strong> at the designated meeting
                    point (15 minutes before start time).
                  </li>
                  <li>
                    <strong>Gear up:</strong> Put on all provided canyoning
                    gear.
                  </li>
                  <li>
                    <strong>Canyon Entrance:</strong> Walk to the source of the
                    Rio Grande and begin the descent.
                  </li>
                  <li>
                    <strong>Canyoning Time!</strong> Navigate jumps (optional),
                    pools, and the two major rappels (up to 21m) over
                    approximately 4 hours.
                  </li>
                  <li>
                    <strong>Return:</strong> Walk out, change clothes, and
                    conclude the adventure.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            {/* Technical Details - Específico para canyoning */}
            <AccordionItem value="item-6">
              <AccordionTrigger>Technical Details</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Main Rappel</p>
                    <p className="font-semibold">21 meters</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Secondary Rappel</p>
                    <p className="font-semibold">10 meters</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Max. Jump Height</p>
                    <p className="font-semibold">Up to 4 meters (optional)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold">4:00 Hours</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Level</p>
                    <p className="font-semibold">Intermediate (Level 2)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Minimum Age</p>
                    <p className="font-semibold">+9 Years Old</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Season</p>
                    <p className="font-semibold">All Year</p>
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
            data-src="https://widgets.bokun.io/online-sales/b5f48f0c-7b7c-486c-830a-f76ae50e1d7b/experience-calendar/1108107"
          />
          <noscript>Please ena ble javascript in your browser to book</noscript>
        </div>
      </div>
      <TrustindexWidget />
      <PrivateTourCTA />
      <Faqs faqs={zarzalonesFaqs} />
    </div>
  );
}
