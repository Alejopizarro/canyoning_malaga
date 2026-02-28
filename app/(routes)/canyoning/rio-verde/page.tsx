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
import { ActivityBookingForm } from "@/components/activity-booking-form";
import {
  rioVerdeMetadata,
  rioVerdeFaqs,
  jsonLdProduct,
  jsonLdTourExperience,
  jsonLdLocalBusiness,
  jsonLdFaq,
  jsonLdBreadcrumb,
} from "./metadata";

export const metadata = rioVerdeMetadata;

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

          {/* Season Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-2">
            <h4 className="font-semibold text-amber-800 mb-2">
              📅 Seasonal Availability
            </h4>
            <p className="text-amber-700 text-sm">
              This activity is available from{" "}
              <strong>March 1st to November 30th</strong>. The season is
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
                    <p className="font-semibold">March 1st - November 30th</p>
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
        <div
          id="bokun-section"
          className="flex flex-col md:items-center md:text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">Book Your Adventure</h2>
          <p className="text-gray-600 mb-4">
            Secure your spot on this thrilling canyoning adventure in Río Verde.
          </p>
          <ActivityBookingForm activityName={rioVerde.title} />
        </div>
      </div>
      <TrustindexWidget />
      <PrivateTourCTA />
      <Faqs faqs={rioVerdeFaqs} />
    </div>
  );
}
