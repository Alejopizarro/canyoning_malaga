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
    question: "Do I need to be an expert?",
    answer:
      "While it is a Level 2.5 canyon, it is suitable for beginners with a good physical condition and an athletic spirit.",
  },
  {
    question: "Is it suitable for children?",
    answer:
      "Yes, for teenagers from 13-14 years old who are comfortable in the water and fit.",
  },
  {
    question: "When is the best time to go?",
    answer:
      "The season runs from mid-May to November to ensure optimal water levels and safety.",
  },
  {
    question: "How high are the jumps?",
    answer:
      "The canyon features optional jumps of up to 9 meters into crystal-clear pools. All jumps are optional - you can always choose alternative routes if you prefer.",
  },
  {
    question: "What makes Buitreras special compared to other canyons?",
    answer:
      "Buitreras is internationally recognized as the 'Cathedral' of Andalusian ravines due to its spectacular limestone walls exceeding 120 meters in height. It's considered the most majestic canyon descent in the entire region.",
  },
];

// Descripción de la excursión
const EXCURSION_INTRO = `Step into the "Cathedral" of Andalusian ravines. Experience a visual spectacle without precedent as you navigate between vertical rocky walls towering over 120 meters high in the heart of a pristine Natural Park.`;

const ACTIVITY_HIGHLIGHTS = [
  {
    icon: "✅",
    title: "The Cathedral",
    description:
      "Considered the most important and majestic ravine descent in the entire region.",
  },
  {
    icon: "✅",
    title: "German's Bridge",
    description:
      "Experience the thrill of looking down from the famous bridge at 80 meters height before entering the water.",
  },
  {
    icon: "✅",
    title: "Vertical Majesty",
    description:
      "Navigate a deep gorge with limestone walls exceeding 120 meters in height.",
  },
  {
    icon: "✅",
    title: "Pristine Adventure",
    description:
      "Located in the remote and beautiful Alcornocales Natural Park.",
  },
];

// Datos para el componente Description
const DESCRIPTION_DATA = {
  whatsIncluded: {
    included: [
      "Professional Mountain Guide",
      "Full Wetsuit/Neoprene (two pieces)",
      "Canyoning harness and helmet",
      "Rappel equipment",
      "Accident and civil responsibility insurance",
      "Full photo report! (Sent via WhatsApp within 24 hours)",
    ],
  },
  whatToBring: [
    "Swimming/bathing suit (wear it under your clothes)",
    "Appropriate closed sports shoes with good grip (No flip-flops or water shoes)",
    "High socks",
    "Dry underwear and towel to change afterward",
    "Water and snacks to recharge energy",
  ],
  meetingPoint: {
    location: "El Colmenar de la Frontera, Málaga",
    mapUrl: "", // URL a proporcionar tras la reserva
    note: "Exact location details provided upon booking. Important Timetable Note: Participants must arrive 15 minutes before the start time to organize the group and attend the safety briefing. A 15-minute courtesy waiting time is granted for accidental delays; after this time, the activity will start without absent participants, resulting in the forfeiture of service rights.",
  },
  itinerary: [
    "Group Meeting: Meet your guide 15 minutes before the start in El Colmenar.",
    "Gear Up: Receive and put on your professional canyoning equipment.",
    "The Approach: Hike to the Bridge of the Germans for an 80m-high view of the canyon.",
    "Canyon Descent: Spend approx. 5-6 hours swimming, jumping (optional), and abseiling through the narrow gorge.",
    "Return: Conclude the route and enjoy the village atmosphere in El Colmenar.",
  ],
};

export default async function Page() {
  const buitreras = await getExcursionByPath("Canyoning", "buitreras");

  if (!buitreras) {
    notFound();
  }

  const excursionHero = {
    mainImage: buitreras.mainImage,
    images: buitreras.images,
    title: buitreras.title,
    subtitle: buitreras.subtitle,
    categoryPath: buitreras.categoryPath,
    categoryText: buitreras.category,
    isMostPopular: buitreras.isMostPopular,
    rating: {
      value: buitreras.rating.value,
      totalReviews: buitreras.rating.reviews,
    },
  };

  const excursionDescription = {
    title: buitreras.title,
    category: buitreras.category,
    price: buitreras.price,
    days: buitreras.days,
    minimumAge: buitreras.minimumAge,
    ubication: buitreras.ubication,
    duration: buitreras.duration,
    level: buitreras.level,
    specialPrice: buitreras.specialPrice,
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
              <strong>May 15th to November 30th</strong>. The season is
              determined by optimal water levels and safety conditions in the
              canyon.
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
                  Master the Most Iconic Canyoning Descent in Southern Spain
                </h3>
                <p>
                  Located in the heart of the Los Alcornocales Natural Park, the
                  Las Buitreras canyon is a geological masterpiece and a must-do
                  for adventure enthusiasts visiting Marbella, Ronda, or Málaga
                  city.
                </p>
                <p>
                  Due to its spectacular formation, it is internationally
                  recognized as the &quot;Cathedral&quot; of Andalusian ravines.
                </p>
                <p>
                  Your adventure begins with an &quot;aperitif&quot; visit to
                  the Bridge of the Germans, suspended 80 meters above the
                  river, offering a breathtaking perspective of the route that
                  awaits you.
                </p>
                <p>
                  Once inside, you will progress through a spectacular descent
                  featuring technical sections, swims through narrow passages,
                  and optional jumps into crystal-clear pools of up to 9 meters.
                </p>
                <p>
                  The journey ends in the charming white village of El Colmenar
                  de la Frontera, where you can conclude your unforgettable
                  experience with a traditional local lunch.
                </p>
                <p>
                  This canyon is ideal for athletes and those seeking a longer,
                  more immersive 6-hour challenge.
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
                <p className="text-sm text-blue-600">
                  Exact location details will be provided upon booking
                  confirmation.
                </p>
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

            {/* Technical Details - Específico para canyoning */}
            <AccordionItem value="item-6">
              <AccordionTrigger>Technical Details</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Canyon Walls Height</p>
                    <p className="font-semibold">120+ meters</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      German&apos;s Bridge
                    </p>
                    <p className="font-semibold">80 meters high</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Max. Jump Height</p>
                    <p className="font-semibold">Up to 9 meters (optional)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold">6:00 Hours</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Level</p>
                    <p className="font-semibold">Intermediate (Level 2.5)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Minimum Age</p>
                    <p className="font-semibold">+13 Years Old</p>
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
