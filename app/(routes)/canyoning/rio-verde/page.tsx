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

const faqs: Faq[] = [
  {
    question: "Do I need previous canyoning experience?",
    answer:
      "No. The popular Río Verde route (Level 2) is suitable for beginners and families. Our certified guides will teach you all the necessary technical skills.",
  },
  {
    question: "Is basic swimming knowledge required?",
    answer:
      "Yes, basic swimming skills are necessary, as the canyon involves several natural pools where floating or swimming is required. In any case, wetsuits help you to float. We can also provide life jackets free of charge for those who are less confident.",
  },
  {
    question: "What's the difference with the Río Verde X-Pro?",
    answer:
      "The X-Pro version is a more explosive 7-hour integral canyon that requires a higher physical level, recommended for experienced athletes and groups (+15 years).",
  },
  {
    question: "What happens if I am late?",
    answer:
      "There is a 15-minute courtesy waiting time after the meeting time. If participants do not arrive within this limit, they forfeit their rights to the service, as delays incur additional costs.",
  },
];

// Descripción de la excursión
const EXCURSION_INTRO = `Dive into Andalusia's aquatic jewel, the Río Verde, famed worldwide for its intensely turquoise waters and dynamic natural route. Discover an exhilarating river descent perfect for beginners and families seeking thrilling natural jumps and swimming in breathtaking landscapes.`;

const EXCURSION_DESCRIPTION = `The Río Verde canyoning trip is one of the best adventures you can do in Andalusia, taking place in the majestic Sierra de Almijara, just 20 km from Almuñecar and about 50 minutes by car from Málaga. This activity is designed for all audiences, including those new to canyoning.

You will actively walk, swim, and navigate the gorge, encountering natural features sculpted by water over thousands of years. The dynamic route includes natural slides up to 4 meters, swimming in deep pozas (pools), and the option to take jumps from 3 to 9 meters (all jumps are optional).

If you are looking for a bigger challenge, inquire about the Río Verde X-Pro version, which is a 7-hour integral canyon requiring a higher physical level.`;

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
    mapUrl: "https://goo.gl/maps/MjFGHNrmqgef7bx5",
    note: "Compliance Note: Please arrive at the meeting point 15 minutes before the stated time for organization; a 15-minute courtesy time is provided for delays, after which the activity will start without absent participants.",
  },
  itinerary: [
    "Meet your guide: Arrive at the designated meeting point 15 minutes before start time.",
    "Approaching the canyon entrance: Take your guide's van and then walk to the start of the canyon (⁓45 minutes).",
    "Gear up: Put on all the provided canyoning safety equipment and listen to the guide's safety guidelines.",
    "Canyoning Time! Walk, swim, slide, jump, and rappel through the river for about 4.5 hours.",
    "Return: You will finish near your guide's van. Take off your equipment, get in the van and head back to the original meeting point. Thank your guide for an unforgettable day!",
  ],
};

export default async function Page() {
  const rioVerde = await getExcursionByPath("canyoning", "rio-verde");

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
  };

  return (
    <div className="pt-20">
      <Hero excursion={excursionHero} />
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-x-16 px-4 pt-20 sm:px-16 py-4 sm:py-8">
        <div className="flex flex-col gap-8">
          <ExcursionDescription excursion={excursionDescription} />

          {/* Introducción */}
          <div className="flex flex-col gap-4">
            <p className="text-gray-700 leading-relaxed">{EXCURSION_INTRO}</p>
          </div>

          {/* Highlights */}
          <div className="mt-4">
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
                  Discover the Turquoise Labyrinth near the Costa del Sol
                </h3>
                <p>
                  The Río Verde canyoning trip is one of the best adventures you
                  can do in Andalusia, taking place in the majestic Sierra de
                  Almijara, just 20 km from Almuñecar and about 50 minutes by
                  car from Málaga. This activity is designed for all audiences,
                  including those new to canyoning.
                </p>
                <p>
                  You will actively walk, swim, and navigate the gorge,
                  encountering natural features sculpted by water over thousands
                  of years. The dynamic route includes natural slides up to 4
                  meters, swimming in deep pozas (pools), and the option to take
                  jumps from 3 to 9 meters (all jumps are optional).
                </p>
                <p>
                  If you are looking for a bigger challenge, inquire about the
                  Río Verde X-Pro version, which is a 7-hour integral canyon
                  requiring a higher physical level.
                </p>

                {/* Safety Box */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    🛡️ Safety is Our Commitment
                  </h4>
                  <p className="text-blue-800 text-sm">
                    All excursions are guided by certified professional guides
                    who prioritize the safety of the group. We supply
                    high-quality, regularly inspected safety gear for every
                    activity. The guide maintains the authority to modify or
                    suspend the activity if any situation poses a danger to the
                    participants.
                  </p>
                </div>
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
                      )
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
        <div className="flex flex-col space-y-8">
          <Bokun />
          {/* TODO: Añadir video de YouTube cuando esté disponible */}
          {/* <div className="relative w-full aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Río Verde Canyon Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div> */}
        </div>
      </div>
      <ReviewsCarousel />
      <Faqs faqs={faqs} />
    </div>
  );
}
