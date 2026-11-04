import Hero from "@/components/hero";
import ExcursionDescription from "@/components/excursion-description";
import Faqs from "../../activities/components/faqs";
import { relatedActivities } from "@/lib/related-activities";
import OtherActivities from "@/components/other-activities";
import { getExcursionByPath } from "@/lib/activities";
import { levelLabel } from "@/lib/level";
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
  eBikeMarbellaMetadata,
  eBikeMarbellaFaqs,
  jsonLdProduct,
  jsonLdTourExperience,
  jsonLdLocalBusiness,
  jsonLdFaq,
  jsonLdBreadcrumb,
} from "./metadata";

export const metadata = eBikeMarbellaMetadata;

// Descripción de la excursión con negritas
const EXCURSION_INTRO = (
  <>
    Conquer the mountains of Marbella with <strong>zero effort</strong>. Ride
    high-end electric bikes through the wild slopes of{" "}
    <strong>Sierra Blanca</strong> to reach the{" "}
    <strong>&quot;Village of Water&quot;</strong>, where ancient history meets
    breathtaking Mediterranean views.
  </>
);

const ACTIVITY_HIGHLIGHTS = [
  {
    icon: "✅",
    title: "Electric Power",
    description:
      "High-end e-bikes allow anyone to enjoy the mountains like a pro athlete.",
  },
  {
    icon: "✅",
    title: "Hidden Springs",
    description:
      "Explore Istán, a Moorish white village famous for its dozens of natural water springs.",
  },
  {
    icon: "✅",
    title: "Spectacular Coastline Views",
    description:
      "Panoramic vistas of Marbella, the Concepción reservoir, and the African coast.",
  },
];

// Datos para el componente Description
const DESCRIPTION_DATA = {
  whatsIncluded: [
    "High-end E-bike rental",
    "Helmet",
    "Certified professional guide",
    "Water and energy bars",
    "Accident and civil responsibility insurance",
  ],
  whatToBring: [
    "Comfortable sports clothing",
    "Closed sports shoes (running or trekking shoes)",
    "Small backpack",
    "Sunscreen and sunglasses",
  ],
  meetingPoint: {
    location: "Marbella / Puerto Banús (Consult specific location upon booking).",
  },
};

export default async function Page() {
  const eBike = await getExcursionByPath("activities", "e-bike-marbella");

  if (!eBike) {
    notFound();
  }

  const excursionHero = {
    mainImage: eBike.mainImage,
    images: eBike.images,
    title: eBike.title,
    subtitle: eBike.subtitle,
    categoryPath: eBike.categoryPath,
    categoryText: eBike.category,
    isMostPopular: eBike.isMostPopular,
    rating: {
      value: eBike.rating.value,
      totalReviews: eBike.rating.reviews,
    },
  };

  const excursionDescription = {
    title: eBike.title,
    category: eBike.category,
    price: eBike.price,
    days: eBike.days,
    minimumAge: eBike.minimumAge,
    ubication: eBike.ubication,
    duration: eBike.duration,
    level: eBike.level,
    specialPrice: eBike.specialPrice,
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
                <h2 className="text-lg font-semibold text-gray-950 my-2">
                  E-Bike Tour from Marbella to Istán through Sierra Blanca
                </h2>
                <p>
                  This route is specifically designed for{" "}
                  <strong>adventurers without extensive MTB experience</strong>{" "}
                  who want to dive into the wild landscapes surrounding
                  Marbella. By utilizing the electric thrust of our high-end
                  e-bikes, you will effortlessly navigate the western flank of{" "}
                  <strong>Sierra Blanca</strong>, crossing Aleppo pine forests
                  and ancient paths.
                </p>
                <p>
                  Our destination is the historic village of{" "}
                  <strong>Istán</strong>, known as the &quot;Village of
                  Water&quot; due to its incredible Moorish irrigation systems
                  and pure mountain springs.
                </p>
                <p>
                  The return journey is a direct, scenic descent along the{" "}
                  <strong>La Concepción reservoir</strong>, providing the best
                  photo opportunities of the Mediterranean Sea and the distant
                  mountains of Africa.
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
                    {DESCRIPTION_DATA.whatsIncluded.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                    <li>
                      <strong>Full photo report!</strong> (A link is sent via
                      WhatsApp)
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
                <p className="text-sm text-gray-600 italic">
                  <strong>Important Timetable Note:</strong> Participants must
                  arrive 15 minutes before the start time to organize the group
                  and attend the safety briefing. A{" "}
                  <strong>15-minute courtesy waiting time</strong> is granted
                  for accidental delays; after this time, the activity will
                  start without absent participants, resulting in the forfeiture
                  of service rights.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Itinerary */}
            <AccordionItem value="item-5">
              <AccordionTrigger>Itinerary</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-y-4">
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    <strong>Briefing & Setup:</strong> Meet in Marbella for bike
                    adjustment and safety instructions.
                  </li>
                  <li>
                    <strong>Sierra Blanca Ascent:</strong> Ride through
                    Mediterranean forests with spectacular coastal views.
                  </li>
                  <li>
                    <strong>The Water Route:</strong> Enter Istán to discover
                    its fountains and Moorish heritage.
                  </li>
                  <li>
                    <strong>Gastronomic Stop:</strong> Enjoy a typical tapa in
                    the heart of the white village.
                  </li>
                  <li>
                    <strong>Reservoir Descent:</strong> Downhill return toward
                    Marbella overlooking the Concepción reservoir.
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
                    <p className="text-sm text-gray-500">Difficulty</p>
                    <p className="font-semibold">
                      Level 2 ({levelLabel(eBike.level)})
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold">4 Hours</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Minimum Age</p>
                    <p className="font-semibold">+14 Years Old</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold">Marbella / Istán</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Best Season</p>
                    <p className="font-semibold">October to May</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* No direct online booking: request form instead of the Bokun widget.
            Keeps the id so the mobile "Check Availability" button scrolls here. */}
        <div id="bokun-section" className="scroll-mt-24">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">
              Book Your E-Bike Tour
            </h2>
            <p className="text-gray-600 mb-6">
              Tell us your preferred date and group size, and we will confirm
              availability and the meeting point.
            </p>
            <ActivityBookingForm activityName="E-Bike Marbella - Istán" />
          </div>
        </div>
      </div>
      <TrustindexWidget />
      <PrivateTourCTA />
      <Faqs faqs={eBikeMarbellaFaqs} />
      <OtherActivities
        activities={relatedActivities(["la-concha", "kayak-puerto-banus", "guadalmina"])}
      />
    </div>
  );
}
