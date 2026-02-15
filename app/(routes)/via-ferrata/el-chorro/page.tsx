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
    question: "What is the minimum age?",
    answer: "This activity is recommended for participants aged +14 years old.",
  },
  {
    question: "Is previous experience necessary?",
    answer:
      "It is a long, highly recommended route but requires good physical condition and vertical progression skills.",
  },
  {
    question: "Is the route near the Caminito del Rey?",
    answer:
      "Yes, the Via Ferrata is located right next to the famous Caminito del Rey area, which offers additional options like rock climbing, hiking, and kayaking. IMPORTANT: This activity does NOT include a visit to Caminito del Rey.",
  },
  {
    question: "Can I skip the rappel at the end?",
    answer:
      "Yes, the 12-meter rappel is optional. If you prefer not to do it, there is an alternative path to descend safely.",
  },
  {
    question: "Why is it not available in summer?",
    answer:
      "The route is closed from July 1st to August 31st due to extreme heat conditions. High temperatures make the activity unsafe and uncomfortable. We operate from September 1st to June 30th.",
  },
];

// Descripción de la excursión
const EXCURSION_INTRO = `Conquer Andalusia's most complete Via Ferrata right next to the famous Caminito del Rey. This spectacular vertical route near Málaga features a thrilling 30-meter zip line and a 12-meter rappel, offering an unforgettable challenge in an internationally renowned climbing area.`;

const ACTIVITY_HIGHLIGHTS = [
  {
    icon: "✅",
    title: "Giant Zip Line",
    description:
      "Experience an adrenaline-pumping zip line of over 30 meters, plus exciting monkey and Tibetan bridges.",
  },
  {
    icon: "✅",
    title: "Prime Location",
    description:
      "Situated in El Chorro, next to the Caminito del Rey, ideal for combining with rock climbing, hiking, or kayaking.",
  },
  {
    icon: "✅",
    title: "Vertical Challenge",
    description:
      "A long, steep trail with a great vertical development (200m), perfect for pushing your limits.",
  },
  {
    icon: "✅",
    title: "Rappel Descent",
    description:
      "Finalize the route with an exhilarating 12-meter abseil (rappel) - optional.",
  },
];

// Datos para el componente Description
const DESCRIPTION_DATA = {
  whatsIncluded: {
    included: [
      "Professional Guide",
      "Technical safety equipment (Harness, helmet, carabiners, lanyards, etc.)",
      "Accident and civil responsibility insurance",
      "Full photo report! (A link is sent via WhatsApp within 24 hours)",
    ],
  },
  whatToBring: [
    "Comfortable clothing suitable for mountain climbing",
    "Closed sports shoes or trekking boots (with good sole grip)",
    "Water and food/snacks (Energy bars, etc.)",
  ],
  meetingPoint: {
    location: "El Chorro, Antequera-El Chorro",
    mapUrl: "https://maps.app.goo.gl/9KLpVshzV7BRUXCp9",
    note: "Important Timetable Note: Participants must arrive 15 minutes before the start time to organize the group and attend the safety briefing. A 15-minute courtesy waiting time is granted for accidental delays; after this time, the activity will start without absent participants, resulting in the forfeiture of service rights.",
  },
  itinerary: [
    "Meet your guide at the designated meeting point (15 minutes prior to start time).",
    "Gear up: Put on the safety equipment and attend the safety briefing.",
    "Ascent & Challenge: Progress along the vertical route, navigating bridges, the zip line, and the 12m rappel (4.5 hours total time).",
    "Descent & Conclusion: Walk back (approx. 40 minutes) to the starting point and conclude the adventure.",
  ],
};

export default async function Page() {
  const viaFerrataElChorro = await getExcursionByPath(
    "Via-Ferrata",
    "el-chorro",
  );

  if (!viaFerrataElChorro) {
    notFound();
  }

  const excursionHero = {
    mainImage: viaFerrataElChorro.mainImage,
    images: viaFerrataElChorro.images,
    title: viaFerrataElChorro.title,
    subtitle: viaFerrataElChorro.subtitle,
    categoryPath: viaFerrataElChorro.categoryPath,
    categoryText: viaFerrataElChorro.category,
    isMostPopular: viaFerrataElChorro.isMostPopular,
    videoYoutube: viaFerrataElChorro.videoYoutube,
    rating: {
      value: viaFerrataElChorro.rating.value,
      totalReviews: viaFerrataElChorro.rating.reviews,
    },
  };

  const excursionDescription = {
    title: viaFerrataElChorro.title,
    category: viaFerrataElChorro.category,
    price: viaFerrataElChorro.price,
    days: viaFerrataElChorro.days,
    minimumAge: viaFerrataElChorro.minimumAge,
    ubication: viaFerrataElChorro.ubication,
    duration: viaFerrataElChorro.duration,
    level: viaFerrataElChorro.level,
    specialPrice: viaFerrataElChorro.specialPrice,
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

          {/* Season Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-2">
            <h4 className="font-semibold text-amber-800 mb-2">
              📅 Seasonal Availability
            </h4>
            <p className="text-amber-700 text-sm">
              This activity is available from{" "}
              <strong>September 1st to June 30th</strong>. The route is closed
              during July and August due to extreme heat conditions.
            </p>
          </div>

          {/* Safety Box - E-E-A-T */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-2">
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
                  The Most Adventurous Route in the Guadalhorce Valley
                </h3>
                <p>
                  The Via Ferrata El Chorro is considered one of the most
                  beautiful and complete routes in Andalusia, located in the
                  north of Málaga near the internationally recognized climbing
                  walls.
                </p>
                <p>
                  The route requires a long steep trail to the peak, where you
                  will progress through various thrilling obstacles, including
                  multiple monkey and Tibetan bridges.
                </p>
                <p>
                  Although it is a long route (4.5 hours), it is not excessively
                  difficult, and the easy 40-minute walk ensures a comfortable
                  return.
                </p>
                <p>
                  This is an ideal adventure for improving your vertical
                  progression technique, culminating in a final 12-meter rappel
                  (optional).
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
                    <p className="text-sm text-gray-500">
                      Vertical Development
                    </p>
                    <p className="font-semibold">200m</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Zip Line</p>
                    <p className="font-semibold">30+ meters</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Rappel</p>
                    <p className="font-semibold">12 meters (optional)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold">4:30 Hours</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Level</p>
                    <p className="font-semibold">Advanced (Level 3)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Minimum Age</p>
                    <p className="font-semibold">+14 Years Old</p>
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
      <TrustindexWidget /> <PrivateTourCTA />
      <Faqs faqs={faqs} />
    </div>
  );
}
