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
import { ActivityBookingForm } from "@/components/activity-booking-form";

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
  {
    question: "What if I'm afraid of heights?",
    answer:
      "Via ferrata is actually a great way to build confidence with heights in a controlled environment. Our guides are experienced in helping participants overcome their fears, and you'll be securely attached to the safety cable at all times.",
  },
];

// Descripción de la excursión con negritas
const EXCURSION_INTRO = (
  <>
    Experience the thrill of climbing in the picturesque white village of{" "}
    <strong>Casares</strong>. This spectacular via ferrata offers breathtaking{" "}
    <strong>views of the Rock of Gibraltar and the African coast</strong>,
    making it the perfect ascent for adventurous beginners and families seeking
    vertical challenges.
  </>
);

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
    location: "Casares, Málaga",
    mapUrl: "https://goo.gl/maps/2QvqDFfMjAtkEx626",
    note: "Important Timetable Note: Participants must arrive 15 minutes before the start time to organize the group and attend the safety briefing. A 15-minute courtesy waiting time is granted for accidental delays; after this time, the activity will start without absent participants, resulting in the forfeiture of service rights.",
  },
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
    isMostPopular: casares.isMostPopular,
    videoYoutube: casares.videoYoutube,
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
    specialPrice: casares.specialPrice,
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
                  The Vertical Gateway to the Genal Valley
                </h3>
                <p>
                  The <strong>Via Ferrata Casares</strong> faces the deep valley
                  near the famous white village and climbs to its highest point.
                </p>
                <p>
                  This 2.5-hour route is classified as the next logical step in
                  technical difficulty after beginner routes, and is highly
                  recommended for those with some prior sports experience.
                </p>
                <p>
                  The route includes thrilling elements like{" "}
                  <strong>monkey bridges</strong> and{" "}
                  <strong>horizontal crossings</strong>, culminating in an extra
                  leaded section for added challenge.
                </p>
                <p>
                  This route is combinable with other nearby via ferratas in the
                  Genal Valley, such as Gaucín.
                </p>
                <p>
                  End your adventure by enjoying typical tapas in the beautiful
                  Casares village square.
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
                        <li key={index}>
                          {item.includes("Full photo report") ? (
                            <>
                              <strong>Full photo report!</strong> (A link is
                              sent via WhatsApp within 24 hours)
                            </>
                          ) : (
                            item
                          )}
                        </li>
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
                    <strong>Meet your guide</strong> at the designated meeting
                    point (15 minutes prior to start time).
                  </li>
                  <li>
                    <strong>Gear up:</strong> Put on the safety equipment and
                    attend the safety briefing.
                  </li>
                  <li>
                    <strong>Ascent to Casares Peak:</strong> Progress through
                    the two challenging sections of the Via Ferrata, traversing
                    the bridges and climbing the cliff face.
                  </li>
                  <li>
                    <strong>Summit Views:</strong> Reach the top for
                    breathtaking views of the African Coast and Gibraltar.
                  </li>
                  <li>
                    <strong>Descent & Conclusion:</strong> Return to the
                    starting point (duration approximately 2:30 hours in total).
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
                    <p className="text-sm text-gray-500">Route Length</p>
                    <p className="font-semibold">120m + 90m sections</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold">2:30 Hours</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Level</p>
                    <p className="font-semibold">Moderate (Level 2)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Minimum Age</p>
                    <p className="font-semibold">+11 Years Old (or 155cm)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Season</p>
                    <p className="font-semibold">All Year</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Key Features</p>
                    <p className="font-semibold">2 Monkey Bridges</p>
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
            Secure your spot on this thrilling Via Ferrata adventure in Casares.
          </p>
          <ActivityBookingForm activityName={casares.title} />
        </div>
      </div>
      <TrustindexWidget />
      <PrivateTourCTA />
      <Faqs faqs={faqs} />
    </div>
  );
}
