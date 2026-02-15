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
    question: "Do I need previous experience for the X-Pro?",
    answer:
      "While Level 3 is accessible to fit individuals, we recommend it for those with high physical stamina or prior canyoning experience due to its 7-hour duration.",
  },
  {
    question: "What is the difference between the Popular and X-Pro routes?",
    answer:
      'The X-Pro is the "Integral" version, doubling the length of the popular route and covering both sections of the canyon.',
  },
  {
    question: "Is there a minimum age?",
    answer:
      "Yes, due to the physical demand, the minimum age is +15/16 years old.",
  },
  {
    question: "Can I skip the 18-meter slide?",
    answer:
      "Yes, while the 18-meter natural slide is one of the highlights, there are alternative routes if you prefer not to do it. Our guides will always offer options.",
  },
  {
    question: "How should I prepare physically for this route?",
    answer:
      "We recommend being in good cardiovascular shape. The 7-hour duration requires stamina for swimming, walking, and climbing. Regular exercise and swimming practice in the weeks before will help you enjoy the experience fully.",
  },
];

// Descripción de la excursión
const EXCURSION_INTRO = `Dive into the most explosive aquatic challenge in Andalusia. Experience the complete "Integral" route of Río Verde, a 7-hour adrenaline-fueled journey through turquoise waters and mythical waterfalls designed for true adventure seekers.`;

const ACTIVITY_HIGHLIGHTS = [
  {
    icon: "✅",
    title: "Integral Experience",
    description:
      "Conquer the full length of the canyon, including both sections in one single epic day.",
  },
  {
    icon: "✅",
    title: "Giant Natural Slide",
    description:
      "Test your bravery on the legendary 18-meter natural rock slide.",
  },
  {
    icon: "✅",
    title: "Crystalline Paradise",
    description:
      "Immerse yourself in world-renowned turquoise waters and emerald pools.",
  },
  {
    icon: "✅",
    title: "Technical Intensity",
    description:
      "Master consecutive jumps and rappels of up to 15 meters in a highly sports-oriented environment.",
  },
];

// Datos para el componente Description
const DESCRIPTION_DATA = {
  whatsIncluded: {
    included: [
      "Certified Professional Guide",
      "Full Wetsuit/Neoprene (two pieces)",
      "Canyoning harness and helmet",
      "Technical Rappel equipment",
      "Accident and civil responsibility insurance",
      "Full photo report! (Sent via WhatsApp within 24 hours)",
    ],
  },
  whatToBring: [
    "Swimming/bathing suit (to wear under the neoprene)",
    "Appropriate closed sports shoes with good grip (No flip-flops or water shoes)",
    "High socks",
    "Dry underwear and towel for afterward",
    "Water and snacks for the 7-hour duration",
  ],
  meetingPoint: {
    location: "Otivar, Granada",
    mapUrl: "",
    note: "Exact location details provided upon booking. Important Timetable Note: Participants must arrive 15 minutes before the start time to organize the group and attend the safety briefing. A 15-minute courtesy waiting time is granted for accidental delays; after this time, the activity will start without absent participants, resulting in the forfeiture of service rights.",
  },
  itinerary: [
    "Group Meeting: Meet your guide in Otivar 15 minutes before departure.",
    "Technical Gear: Distribution and fitting of professional safety equipment.",
    "Safety Briefing: Instructions on progression techniques and river safety.",
    "X-Pro Descent: 7 hours of integral canyoning (Section 1 + Section 2) with jumps, rappels, and the 18m slide.",
    "Return: Conclusion of the activity and equipment collection.",
  ],
};

export default async function Page() {
  const rioVerdeXpro = await getExcursionByPath("Canyoning", "rio-verde-xpro");

  if (!rioVerdeXpro) {
    notFound();
  }

  const excursionHero = {
    mainImage: rioVerdeXpro.mainImage,
    images: rioVerdeXpro.images,
    title: rioVerdeXpro.title,
    subtitle: rioVerdeXpro.subtitle,
    categoryPath: rioVerdeXpro.categoryPath,
    categoryText: rioVerdeXpro.category,
    isMostPopular: rioVerdeXpro.isMostPopular,
    rating: {
      value: rioVerdeXpro.rating.value,
      totalReviews: rioVerdeXpro.rating.reviews,
    },
  };

  const excursionDescription = {
    title: rioVerdeXpro.title,
    category: rioVerdeXpro.category,
    price: rioVerdeXpro.price,
    days: rioVerdeXpro.days,
    minimumAge: rioVerdeXpro.minimumAge,
    ubication: rioVerdeXpro.ubication,
    duration: rioVerdeXpro.duration,
    level: rioVerdeXpro.level,
    specialPrice: rioVerdeXpro.specialPrice,
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

          {/* Advanced Level Warning */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-2">
            <h4 className="font-semibold text-red-800 mb-2">
              ⚠️ Advanced Level Route
            </h4>
            <p className="text-red-700 text-sm">
              This is a <strong>Level 3 (Advanced)</strong> route with 7 hours
              of continuous activity. Recommended for athletes and participants
              with high physical fitness or prior canyoning experience.
            </p>
          </div>

          {/* Season Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-2">
            <h4 className="font-semibold text-amber-800 mb-2">
              📅 Seasonal Availability
            </h4>
            <p className="text-amber-700 text-sm">
              This activity is available from{" "}
              <strong>March 1st to November 30th</strong>. The season is
              determined by optimal water levels and safety conditions.
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
                  Master the Most Complete and Explosive Canyon in Southern
                  Spain
                </h3>
                <p>
                  The Rio Verde X-Pro version is the definitive experience for
                  canyoning enthusiasts visiting Granada, Málaga, or Marbella.
                </p>
                <p>
                  Located in the heart of the Sierra de Almijara, this
                  &quot;Integral&quot; modality covers the two sections of the
                  river, effectively doubling the action and length of the
                  popular route.
                </p>
                <p>
                  Prepare for a 7-hour odyssey where adrenaline surprises you at
                  every turn. You will navigate through a geological masterpiece
                  of limestone, featuring endless crystalline pools, technical
                  rappels of up to 15 meters, and the crown jewel: a spectacular
                  18-meter natural slide.
                </p>
                <p>
                  Due to its duration and technical demand, this route is
                  specifically recommended for athletes and participants with a
                  high physical level who wish to push their limits in
                  Andalusia&apos;s most celebrated aquatic playground.
                </p>
                <p>
                  Finish your adventure surrounded by the wild beauty of the
                  Natural Park, having conquered the most technical ravine in
                  the region.
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

            {/* Technical Details - Específico para canyoning avanzado */}
            <AccordionItem value="item-6">
              <AccordionTrigger>Technical Details</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Route Type</p>
                    <p className="font-semibold">Integral (Section 1 + 2)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Natural Slide</p>
                    <p className="font-semibold">18 meters</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Max. Rappel Height</p>
                    <p className="font-semibold">Up to 15 meters</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold">7:00 Hours</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Level</p>
                    <p className="font-semibold">Advanced (Level 3)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Minimum Age</p>
                    <p className="font-semibold">+15/16 Years Old</p>
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
