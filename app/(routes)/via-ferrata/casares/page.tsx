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
    question: "Is the Casares Via Ferrata suitable for beginners?",
    answer:
      "Yes, it is recommended for beginners in this sport, and those with some experience in other related physical activities. Minimum age is 11 or 12 years old, or 155cm height.",
  },
  {
    question: "Can this route be combined with others?",
    answer:
      "Yes, this via ferrata can be combined with other routes in the Genal Valley, such as Gaucín, El Hacho, or Benalauría. Ask us about our Via Ferrata packs.",
  },
  {
    question: "How long does the activity take?",
    answer: "The ascent lasts approximately 2 hours and 30 minutes.",
  },
];

// Descripción de la excursión
const EXCURSION_INTRO = `Experience the thrill of climbing in the picturesque white village of Casares. This spectacular via ferrata offers breathtaking views of the Rock of Gibraltar and the African coast, making it the perfect ascent for adventurous beginners and families seeking vertical challenges.`;

const ACTIVITY_HIGHLIGHTS = [
  {
    icon: "✅",
    title: "African Coast Views",
    description:
      "Reach the summit with magnificent panoramic views towards Gibraltar and the coast of Africa (on clear days).",
  },
  {
    icon: "✅",
    title: "Technical Challenge",
    description:
      "Navigate two exciting monkey bridges, horizontal traverses, and an extra leaded section.",
  },
  {
    icon: "✅",
    title: "Ideal for Progression",
    description:
      "Divided into two sections (120m + 90m), perfect for taking the next step in this adventure sport.",
  },
  {
    icon: "✅",
    title: "All-Year Access",
    description:
      "Run this route throughout the year due to Casares' mild climate.",
  },
];

// Datos para el componente Description
const DESCRIPTION_DATA = {
  whatsIncluded: {
    included: [
      "Professional Guide",
      "Technical safety equipment (harness, helmet, carabiners, etc.)",
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
    location: "Casares, Málaga.",
    mapUrl: "https://goo.gl/maps/2QvqDFfMjAtkEx626",
    note: "Important Timetable Note: Participants must arrive 15 minutes before the start time to organize the group and attend the safety briefing. A 15-minute courtesy waiting time is granted for accidental delays; after this time, the activity will start without absent participants, resulting in the forfeiture of service rights.",
  },
  itinerary: [
    "Meet your guide at the designated meeting point (15 minutes prior to start time).",
    "Gear up: Put on the safety equipment and attend the safety briefing.",
    "Ascent to Casares Peak: Progress through the two challenging sections of the Via Ferrata, traversing the bridges and climbing the cliff face.",
    "Summit Views: Reach the top for breathtaking views of the African Coast and Gibraltar.",
    "Descent & Conclusion: Return to the starting point (duration approximately 2:30 hours in total).",
  ],
};

export default async function Page() {
  const casares = await getExcursionByPath("via-ferrata", "casares");

  if (!casares) {
    notFound();
  }

  const excursionHero = {
    mainImage: casares.mainImage,
    images: casares.images,
    title: casares.title,
    subtitle: casares.subtitle,
    categoryPath: casares.categoryPath,
    categoryText: casares.category,
    rating: {
      value: casares.rating.value,
      totalReviews: casares.rating.reviews,
    },
  };

  const excursionDescription = {
    title: casares.title,
    category: casares.category,
    price: casares.price,
    days: casares.days,
    minimumAge: casares.minimumAge,
    ubication: casares.ubication,
    duration: casares.duration,
    level: casares.level,
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
                  The Vertical Gateway to the Genal Valley
                </h3>
                <p>
                  The Via Ferrata Casares faces the deep valley near the famous
                  white village and climbs to its highest point.
                </p>
                <p>
                  This 2.5-hour route is classified as the next logical step in
                  technical difficulty after beginner routes, and is highly
                  recommended for those with some prior sports experience.
                </p>
                <p>
                  The route includes thrilling elements like monkey bridges and
                  horizontal crossings, culminating in an extra leaded section
                  for added challenge.
                </p>
                <p>
                  This route is combinable with other nearby via ferratas in the
                  Genal Valley, such as Gaucín.
                </p>
                <p>
                  End your adventure by enjoying typical tapas in the beautiful
                  Casares village square.
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
              title="Via Ferrata Casares Video"
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
