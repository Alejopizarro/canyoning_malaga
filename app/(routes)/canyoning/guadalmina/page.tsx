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

const faqs: Faq[] = [
  {
    question: "What should I bring for the canyoning activity?",
    answer:
      "You should bring swimwear, a towel, water shoes or sturdy sandals, sunscreen, and a change of clothes.",
  },
  {
    question: "Is prior experience necessary for canyoning?",
    answer:
      "No prior experience is necessary. Our guides will provide all the necessary instructions and safety briefings.",
  },
  {
    question: "What is the age limit for participating in canyoning?",
    answer:
      "Participants must be at least 10 years old. Minors must be accompanied by an adult.",
  },
  {
    question: "Are there any health restrictions for canyoning?",
    answer:
      "Participants should be in good health. Those with heart conditions, pregnancy, or severe mobility issues should consult with us beforehand.",
  },
];

// Descripción de la excursión
const EXCURSION_INTRO = `Discover the best canyoning experience near Marbella in the Guadalmina Canyon, famously known as "The Narrowest Canyon." This dynamic half-day activity is perfect for beginners, friends, and families (from 6 y.o. in summer), offering fun and excitement every day of the year thanks to its temperate waters.`;

const EXCURSION_DESCRIPTION = `The Guadalmina Canyon, situated in the charming town of Benahavís near Marbella, is our most requested activity due to its accessibility and high fun factor. This route provides the ideal canyoning trip for groups, bachelor parties, and families looking for a half-day adventure (3 hours).

In this beautiful natural environment, you will learn the basic progression techniques of canyoning that are accessible to all participants. The gorge narrows dramatically as you progress, revealing a truly impressive landscape.

For those seeking an extra adrenaline rush, optional jumps of up to 6 meters into deep pools are available; alternatively, you can opt for the fun toboggan ride or a short abseil descent (rappelling of 5 metres) if you prefer to avoid the higher jumps.

We offer this canyon year-round, making it a reliable option, even during the winter season (though in winter/rainy season it may have an extra component of adventure!).`;

const ACTIVITY_HIGHLIGHTS = [
  {
    icon: "✅",
    title: "Beginner & Family Friendly",
    description:
      "Ideal for all levels, including children (from 6 y.o. in summer, 12 y.o. in winter).",
  },
  {
    icon: "✅",
    title: "Thrilling Jumps",
    description:
      "Includes 5 to 7 optional jumps into deep pools (max. 6 meters).",
  },
  {
    icon: "✅",
    title: "Full Adrenaline Options",
    description:
      "Practice rappelling (max. 4 meters) and enjoy a fun toboggan slide (2 meters) in a mountainous, idyllic setting.",
  },
  {
    icon: "✅",
    title: "All-Year Activity",
    description:
      "Unique in the region, the canyon is runnable throughout the entire year.",
  },
];

// Datos para el componente Description
const DESCRIPTION_DATA = {
  whatsIncluded: {
    included: [
      "Wetsuit/neoprene",
      "Canyoning harness, helmet, and rappel equipment",
      "Professional Guide",
      "Accident and civil responsibility insurance",
      "Full photo report! (A link is sent via WhatsApp within 24 hours).",
    ],
  },
  whatToBring: [
    "Swimming/bathing suit already on (to wear under the wetsuit)",
    "High socks (above the ankle is sufficient)",
    "Dry underwear and towel for changing afterward",
    "Appropriate closed sports shoes (must have good sole grip; water shoes and flip-flops are NOT allowed)",
    "Water and food/snacks to recharge energy at the end of the activity",
  ],
  meetingPoint: {
    location:
      "Parking area, next to the Torre Leonera Park, Benahavís, Málaga.",
    mapUrl: "https://maps.app.goo.gl/qAXCSphTyegosTHF6",
    note: "Important Timetable Note: Participants must arrive 15 minutes before the start time to organize the group and attend the safety briefing. A 15-minute courtesy waiting time is granted for accidental delays; after this time, the activity will start without absent participants, resulting in the forfeiture of service rights.",
  },
  itinerary: [
    "Meet your guide at the parking area 15 minutes before the start of the activity.",
    "Gear up: Put on the canyoning gear (wetsuit, harness, helmet, and optional professional shoes).",
    "Walk to the canyon entrance (approx. 5 minutes). Attend the safety briefing and start the activity.",
    "Canyoning time! Walk, swim, slide, jump (optional), and abseil, enjoying the unique gorge for about 2.5 hours.",
    "Return to the meeting point (~15 min), take off the gear, and thank your guide!",
  ],
};

export default async function Page() {
  const guadalmina = await getExcursionByPath("Canyoning", "guadalmina");

  if (!guadalmina) {
    notFound();
  }

  const excursionHero = {
    mainImage: guadalmina.mainImage,
    images: guadalmina.images,
    title: guadalmina.title,
    subtitle: guadalmina.subtitle,
    categoryPath: guadalmina.categoryPath,
    categoryText: guadalmina.category,
    isMostPopular: guadalmina.isMostPopular,
    rating: {
      value: guadalmina.rating.value,
      totalReviews: guadalmina.rating.reviews,
    },
  };

  const excursionDescription = {
    title: guadalmina.title,
    category: guadalmina.category,
    price: guadalmina.price,
    days: guadalmina.days,
    minimumAge: guadalmina.minimumAge,
    ubication: guadalmina.ubication,
    duration: guadalmina.duration,
    level: guadalmina.level,
    specialPrice: guadalmina.specialPrice,
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
            <p className="text-gray-700 leading-relaxed">
              {EXCURSION_INTRO.split('"The Narrowest Canyon."')[0]}
              <strong>&quot;The Narrowest Canyon.&quot;</strong>
              {EXCURSION_INTRO.split('"The Narrowest Canyon."')[1]}
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

          {/* Accordion con toda la información */}
          <Accordion type="single" collapsible>
            {/* Description */}
            <AccordionItem value="item-1">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent className="flex flex-col text-gray-600 gap-y-4">
                <h3 className="text-lg font-semibold text-gray-950 my-2">
                  The Best Canyon Overall for Coastal Tourists
                </h3>
                <p>
                  The Guadalmina Canyon, situated in the charming town of
                  Benahavís near Marbella, is our most requested activity due to
                  its accessibility and high fun factor. This route provides the
                  ideal canyoning trip for groups, bachelor parties, and
                  families looking for a half-day adventure (3 hours).
                </p>
                <p>
                  In this beautiful natural environment, you will learn the
                  basic progression techniques of canyoning that are accessible
                  to all participants. The gorge narrows dramatically as you
                  progress, revealing a truly impressive landscape.
                </p>
                <p>
                  For those seeking an extra adrenaline rush, optional jumps of
                  up to 6 meters into deep pools are available; alternatively,
                  you can opt for the fun toboggan ride or a short abseil
                  descent (rappelling of 5 metres) if you prefer to avoid the
                  higher jumps.
                </p>
                <p>
                  We offer this canyon year-round, making it a reliable option,
                  even during the winter season (though in winter/rainy season
                  it may have an extra component of adventure!).
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
          </Accordion>
        </div>
        <div id="bokun-section">
          <Bokun />
        </div>
      </div>
      <ReviewsCarousel />
      <PrivateTourCTA />
      <Faqs faqs={faqs} />
    </div>
  );
}
