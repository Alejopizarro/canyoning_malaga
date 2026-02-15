import Bokun from "@/components/bokun";
import Hero from "@/components/hero";
import ExcursionDescription from "@/components/excursion-description";
import Faqs, { Faq } from "../../activities/components/faqs";
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

const faqs: Faq[] = [
  {
    question: "Is La Concha safe for children?",
    answer:
      "The standard route is recommended for active children from 11 years old due to its length and some narrow sections.",
  },
  {
    question: "Can we see Africa from the top?",
    answer:
      "Yes! On clear days, you can clearly see the Strait of Gibraltar and the coast of Africa.",
  },
  {
    question: "What is the difference between the routes?",
    answer:
      "The popular Juanar route is a scenic mountain hike, while the Direct Route is an 'Extreme Trekking' experience involving steeper slopes and technical aid ropes.",
  },
  {
    question: "How difficult is the hike?",
    answer:
      "La Concha is rated as intermediate (Level 2). It requires a moderate level of fitness due to its 13km distance and 1,215m altitude. The trail has some challenging sections but is manageable for most hikers with basic experience.",
  },
  {
    question: "What happens if the weather is bad?",
    answer:
      "Safety is our priority. If weather conditions are unsafe, we may modify or reschedule the activity. Our guides monitor forecasts and will contact you in advance if changes are needed.",
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
          <Bokun />
        </div>
      </div>
      <TrustindexWidget />
      <PrivateTourCTA />
      <Faqs faqs={faqs} />
    </div>
  );
}
