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
  tajoRondaMetadata,
  tajoRondaFaqs,
  jsonLdProduct,
  jsonLdTourExperience,
  jsonLdLocalBusiness,
  jsonLdFaq,
  jsonLdBreadcrumb,
} from "./metadata";
import Script from "next/script";

export const metadata = tajoRondaMetadata;

const ACTIVITY_HIGHLIGHTS = [
  {
    icon: "✅",
    title: "Master the Heights",
    description: "Spectacular rappels under waterfalls up to 35 meters high.",
  },
  {
    icon: "✅",
    title: "Urban Adventure",
    description:
      "A unique canyon that crosses the heart of the millenary city of Ronda.",
  },
  {
    icon: "✅",
    title: "Unseen Views",
    description:
      "Discover the irrigation ditches, old mills, and hanging gardens from 100 meters below the streets.",
  },
];

const DESCRIPTION_DATA = {
  whatsIncluded: {
    included: [
      "Certified professional guide.",
      "High-end safety equipment: wetsuit, helmet, harness, and rappel gear.",
      "Accident and civil responsibility insurance.",
      "Full photo report delivered via WhatsApp.",
    ],
  },
  whatToBring: [
    "Swimsuit/bathing suit (to wear under the wetsuit).",
    "High socks.",
    "Towel and dry change of clothes.",
    "Closed sports shoes with good grip (water shoes and flip-flops are not allowed) — Professional canyoning shoes available to rent.",
    "Water and snacks.",
  ],
  meetingPoint: {
    location: "Mirador La Hoya Del Tajo, Ronda.",
    mapUrl: "https://maps.app.goo.gl/42HCAN7LirQaQftz9",
    note: "Important Timetable Note: Participants must arrive 15 minutes before the start time to organize the group and attend the safety briefing. A 15-minute courtesy waiting time is granted for accidental delays; after this time, the activity will start without absent participants, resulting in the forfeiture of service rights.",
  },
  itinerary: [
    "Meeting & Gear Up: Meet your guide at the Mirador de La Hoya Del Tajo and get fitted with professional equipment.",
    "Safety Briefing: Brief walk to the canyon entrance and technical instructions.",
    "The Descent: Navigate the gorge, crossing under the monumental bridges and gardens.",
    "The Big Rappel: Conquer the 35m waterfall under the Puente Nuevo.",
    "Return: End the canyoning activity with the option to continue into the via ferrata or return for local gastronomy.",
  ],
};

export default async function Page() {
  const tajoRonda = await getExcursionByPath("Canyoning", "tajo-ronda");

  if (!tajoRonda) {
    notFound();
  }

  const excursionHero = {
    mainImage: tajoRonda.mainImage,
    images: tajoRonda.images,
    title: tajoRonda.title,
    subtitle: tajoRonda.subtitle,
    categoryPath: tajoRonda.categoryPath,
    categoryText: tajoRonda.category,
    isMostPopular: tajoRonda.isMostPopular,
    videoYoutube: tajoRonda.videoYoutube,
    rating: {
      value: tajoRonda.rating.value,
      totalReviews: tajoRonda.rating.reviews,
    },
  };

  const excursionDescription = {
    title: tajoRonda.title,
    category: tajoRonda.category,
    price: tajoRonda.price,
    days: tajoRonda.days,
    minimumAge: tajoRonda.minimumAge,
    ubication: tajoRonda.ubication,
    duration: tajoRonda.duration,
    level: tajoRonda.level,
    specialPrice: tajoRonda.specialPrice,
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
              Descend into the depths of history. Experience the thrill of
              rappelling under the legendary <strong>Puente Nuevo</strong>,
              surrounded by the ancient hanging houses and monumental cliffs of
              one of Spain&apos;s most iconic white villages.
            </p>
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

          {/* Accordion */}
          <Accordion type="single" collapsible>
            {/* Description */}
            <AccordionItem value="item-1">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent className="flex flex-col text-gray-600 gap-y-4">
                <h3 className="text-lg font-semibold text-gray-950 my-2">
                  An Unrepeatable Urban Canyon Experience
                </h3>
                <p>
                  The <strong>Tajo de Ronda canyon</strong> is an unrepeatable
                  experience that offers a perspective hidden from any tourist
                  on foot. Located just a short drive from{" "}
                  <strong>Marbella</strong> and <strong>Grazalema</strong>, this
                  route navigates the gorge that splits the historic city in
                  two.
                </p>
                <p>
                  We begin our tour at the{" "}
                  <strong>Mirador La Hoya Del Tajo</strong>, where we can enjoy
                  stunning views of the city cliffs and its famous bridge.
                </p>
                <p>
                  As we progress 100 meters below the bustling streets, we reach
                  the <strong>Puente Nuevo</strong>, the international emblem of
                  Ronda. Here, you will face the most impressive vertical
                  challenges in Andalusia, including a technical{" "}
                  <strong>rappel through a 30-meter waterfall.</strong>
                </p>
                <p>
                  The combination of slate walls and monumental architecture
                  makes this more than a sport; it is a journey through an
                  ancient landscape accessible only to adventurers.
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
                    <p className="text-sm text-gray-500">Max. Rappel Height</p>
                    <p className="font-semibold">
                      35 meters (under Puente Nuevo)
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold">4 Hours</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Level</p>
                    <p className="font-semibold">Level 2 (Moderate)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Minimum Age</p>
                    <p className="font-semibold">+14 Years Old</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Season</p>
                    <p className="font-semibold">
                      March–June &amp; September–November
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold">Ronda, Málaga</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="font-semibold">From 69€ per person</p>
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
            data-src="https://widgets.bokun.io/online-sales/b5f48f0c-7b7c-486c-830a-f76ae50e1d7b/experience-calendar/1181810"
          ></div>
          <noscript>Please enable javascript in your browser to book</noscript>
        </div>
      </div>
      <TrustindexWidget />
      <PrivateTourCTA />
      <Faqs faqs={tajoRondaFaqs} />
    </div>
  );
}
