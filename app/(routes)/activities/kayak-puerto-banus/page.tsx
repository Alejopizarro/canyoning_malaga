import Script from "next/script";
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
    question: "Is it safe for very young children?",
    answer:
      "Yes, children from 2 years old can participate safely, sitting next to their parents in the kayak.",
  },
  {
    question: "Do I need previous experience?",
    answer:
      "No, this is an introductory activity where our guides will teach you everything you need to know.",
  },
  {
    question: "How long is the route?",
    answer: "The tour covers approximately 3.5 km and lasts around 2 hours.",
  },
  {
    question: "What happens if the weather is bad?",
    answer:
      "Safety is our priority. If weather conditions are unsuitable for kayaking (strong winds, storms), we will contact you to reschedule or offer a full refund.",
  },
];

// Descripción de la excursión con negritas
const EXCURSION_INTRO = (
  <>
    Discover the fascination of the <strong>Marbella sunset</strong> from the
    sea. Paddle through crystal-clear waters and witness the glamour of{" "}
    <strong>Puerto Banús</strong> and its luxury yachts with the majestic{" "}
    <strong>La Concha</strong> peak as your backdrop.
  </>
);

const ACTIVITY_HIGHLIGHTS = [
  {
    icon: "✅",
    title: "Exclusive Sunset Views",
    description:
      "Experience a spectacle of warm hues reflecting on the Mediterranean waters.",
  },
  {
    icon: "✅",
    title: "Luxury Marina Tour",
    description:
      "Enjoy a unique perspective of the Jose Banús marina and its world-class boats.",
  },
  {
    icon: "✅",
    title: "Family & Kids Friendly",
    description:
      "A safe, calm-water adventure suitable for children from just 2 years old.",
  },
  {
    icon: "✅",
    title: "Marbella Coastline",
    description:
      "Explore the beautiful Rodeito and Duque beaches from your kayak.",
  },
];

// Datos para el componente Description
const DESCRIPTION_DATA = {
  whatsIncluded: {
    included: [
      "Professional Guide",
      "High-quality Kayak and life vest",
      "Accident and civil responsibility insurance",
      "Full photo report! (A link is sent via WhatsApp within 24 hours)",
    ],
  },
  whatToBring: [
    "Swimming/bathing suit",
    "Sun protection (hat and cream)",
    "Water and light snacks",
    "Dry clothes and towel for afterward",
  ],
  meetingPoint: {
    location: "Ventura del Mar Beach, Marbella",
    coordinates: "36° 28' 51.6\" N 4° 58' 8.1998\" W",
    mapUrl: "https://maps.app.goo.gl/S1bBekZ9t7gHS378A",
    note: "Important Timetable Note: Participants must arrive 15 minutes before the start time to organize the group and attend the safety briefing. A 15-minute courtesy waiting time is granted for accidental delays; after this time, the activity will start without absent participants, resulting in the forfeiture of service rights.",
  },
};

export default async function Page() {
  const kayakBanus = await getExcursionByPath(
    "more-activities",
    "kayak-puerto-banus",
  );

  if (!kayakBanus) {
    notFound();
  }

  const excursionHero = {
    mainImage: kayakBanus.mainImage,
    images: kayakBanus.images,
    title: kayakBanus.title,
    subtitle: kayakBanus.subtitle,
    categoryPath: kayakBanus.categoryPath,
    categoryText: kayakBanus.category,
    isMostPopular: kayakBanus.isMostPopular,
    rating: {
      value: kayakBanus.rating.value,
      totalReviews: kayakBanus.rating.reviews,
    },
  };

  const excursionDescription = {
    title: kayakBanus.title,
    category: kayakBanus.category,
    price: kayakBanus.price,
    days: kayakBanus.days,
    minimumAge: kayakBanus.minimumAge,
    ubication: kayakBanus.ubication,
    duration: kayakBanus.duration,
    level: kayakBanus.level,
    specialPrice: kayakBanus.specialPrice,
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
                  Explore Marbella&apos;s Coastline on a Guided Kayak Tour from
                  Puerto Banús
                </h3>
                <p>
                  Join a memorable kayaking experience in Marbella, perfect for
                  families, couples, or solo travelers seeking both relaxation
                  and adventure. This guided kayak tour departs from the calm
                  waters of Ventura del Mar beach and is suitable for all skill
                  levels — even children as young as three, when accompanied by
                  an adult.
                </p>
                <p>
                  Choose between a <strong>sunrise or morning tour,</strong>{" "}
                  each offering a unique way to experience Marbella&apos;s
                  Mediterranean charm. Our{" "}
                  <strong>sunrise tour is especially recommended</strong> for
                  early risers who want to enjoy peaceful waters and magical
                  light as the sun paints the sky in golden and pink tones —
                  ideal for stunning photos.
                </p>
                <p>
                  Led by certified kayaking instructors, the tour blends{" "}
                  <strong>fun, learning, and scenic exploration</strong>. Your
                  guide will introduce light games and paddling techniques
                  throughout the route to make it engaging and informative.
                </p>
                <p>
                  You&apos;ll glide past iconic beaches like{" "}
                  <strong>El Rodeito, Playas del Duque, and La Siesta,</strong>{" "}
                  navigating around the breakwaters to reach the entrance of{" "}
                  <strong>Puerto Banús,</strong> where glamorous yachts and
                  seaside villas line the shore. This tour is the perfect mix of
                  nature, sport, and sightseeing along one of Spain&apos;s most
                  exclusive coastlines.
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
                    <li>Professional Guide</li>
                    <li>High-quality Kayak and life vest</li>
                    <li>Accident and civil responsibility insurance</li>
                    <li>
                      <strong>Full photo report!</strong> (A link is sent via
                      WhatsApp within 24 hours)
                    </li>
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
                <p className="text-sm text-gray-500">
                  {DESCRIPTION_DATA.meetingPoint.coordinates}
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
                    <strong>Meet your guide</strong> at the designated spot 15
                    minutes before the start.
                  </li>
                  <li>
                    <strong>Briefing:</strong> Learn basic navigation and safety
                    techniques.
                  </li>
                  <li>
                    <strong>Coastal Exploration:</strong> Paddle along Rodeito
                    and Duque beaches.
                  </li>
                  <li>
                    <strong>Marina Experience:</strong> Witness the sunrise and
                    luxury boats at the port entrance.
                  </li>
                  <li>
                    <strong>Return:</strong> Conclude the tour and receive your
                    photos within 24h.
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
                    <p className="text-sm text-gray-500">Route Distance</p>
                    <p className="font-semibold">Approx. 3.5 km</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold">2 Hours</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Level</p>
                    <p className="font-semibold">All Levels (Level 1)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Minimum Age</p>
                    <p className="font-semibold">+2 Years Old (with parents)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Season</p>
                    <p className="font-semibold">All Year</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tour Options</p>
                    <p className="font-semibold">Sunrise / Morning</p>
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
            data-src="https://widgets.bokun.io/online-sales/b5f48f0c-7b7c-486c-830a-f76ae50e1d7b/experience-calendar/1108106"
          ></div>
          <noscript>Please enable javascript in your browser to book</noscript>
        </div>
      </div>
      <TrustindexWidget />
      <PrivateTourCTA />
      <Faqs faqs={faqs} />
    </div>
  );
}
