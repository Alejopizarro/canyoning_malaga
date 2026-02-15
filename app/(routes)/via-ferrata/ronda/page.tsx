import Bokun from "@/components/bokun";
import Hero from "@/components/hero";
import ReviewsCarousel from "@/components/ui/reviews-carousel";
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
    question: "Is it suitable for someone with no experience?",
    answer:
      "Absolutely. This is an initiation route designed for beginners and children from 7 years old.",
  },
  {
    question: "How long does the activity take?",
    answer: "The full experience lasts approximately 3 hours.",
  },
  {
    question: "Can I do this if I have vertigo?",
    answer:
      "While it is an aerial activity, it is a great way to build confidence in a controlled and safe environment.",
  },
  {
    question: "What if I get tired during the climb?",
    answer:
      "Don't worry! The route is divided into two sections with rest points in between. Our guides are trained to assist you at any moment and can adapt the pace to your comfort level.",
  },
  {
    question: "Is there parking available near the meeting point?",
    answer:
      "Yes, there are several public parking areas in Ronda near the meeting point. We recommend arriving early to find a spot, especially during peak tourist season.",
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
          <Bokun />
        </div>
      </div>
      <TrustindexWidget />
      <PrivateTourCTA />
      <Faqs faqs={faqs} />
    </div>
  );
}
