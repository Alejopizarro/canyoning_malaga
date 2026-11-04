import Link from "next/link";
import Bokun from "@/components/bokun";
import Hero from "@/components/hero";
import ExcursionDescription from "@/components/excursion-description";
import Faqs from "../../activities/components/faqs";
import { relatedActivities } from "@/lib/related-activities";
import { getExcursionByPath } from "@/lib/activities";
import { levelLabel } from "@/lib/level";
import { notFound } from "next/navigation";
import OtherActivities from "@/components/other-activities";
import SeoContentTabs, { type SeoTab } from "@/components/seo-content-tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PrivateTourCTA from "@/components/private-tour";
import CheckAvailabilityButton from "../../../../components/ui/check-availability-button";
import TrustindexWidget from "@/components/trustindex-widget";
import RainPolicyBanner from "@/components/rain-policy-banner";
import {
  guadalminaMetadata,
  guadalminaFaqs,
  jsonLdProduct,
  jsonLdTourExperience,
  jsonLdLocalBusiness,
  jsonLdFaq,
  jsonLdBreadcrumb,
  guadalminaAgeRange,
} from "./metadata";

export const metadata = guadalminaMetadata;

const SEO_TABS: SeoTab[] = [
  {
    id: "river-walk",
    label: "Guadalmina River Walk",
    h3: "Guadalmina River Walk: Why You Should Go With a Guide",
    paragraphs: [
      "Many visitors search for the Guadalmina River Walk expecting an easy riverside stroll. The stretch through Las Angosturas in Benahavís is actually a canyon: a narrow gorge with slippery rock, deep pools and a 5-metre dam near the end. It can look easy from the entrance, but it is not a walk to do on your own.",
      "These are the main risks we see in the river every season:",
    ],
    content: (
      <>
        <ul className="list-disc pl-6">
          <li>
            <strong>Slippery rock.</strong> Wet, polished stone makes falls
            common. We recommend professional canyoning shoes or trainers with
            good grip. Flip-flops and thin water shoes are not suitable.
          </li>
          <li>
            <strong>Rockfall.</strong> Stones can fall from the walls, which is
            why every participant should wear a helmet.
          </li>
          <li>
            <strong>Cold.</strong> Even in summer, long stretches in shaded
            water can lead to hypothermia, especially in children. A wetsuit
            keeps you warm and also helps you float.
          </li>
          <li>
            <strong>Deep pools and long swims.</strong> Some sections can only
            be crossed by swimming.
          </li>
          <li>
            <strong>The final dam.</strong> The 5-metre dam near the end is
            very hard to get down without rappel equipment. The natural slide to
            the left of the wall is steep and ends in a bend where people hit
            the rock, and several people have been injured there.
          </li>
        </ul>
        <p>
          On a guided tour with TUUR Adventure, a certified canyoning guide
          leads a maximum of 12 people, provides all the technical equipment and
          takes you down the dam on a rope. Jumps and slides are always
          optional, and the guide decides on the spot what is safe for each
          group.
        </p>
        <p>
          A guided visit also protects the river. The Guadalmina is part of the
          Natura 2000 network, and our groups follow a leave-no-trace policy: no
          eating or drinking in the canyon (snacks stay in the car), and our
          guides pick up any litter they find along the way.
        </p>
      </>
    ),
  },
  {
    id: "benahavis",
    label: "Benahavís Canyoning",
    h3: "Benahavís Canyoning near Marbella: Meeting Point, Times and What's Included",
    paragraphs: [
      "TUUR Adventure runs guided canyoning on the Río Guadalmina in the mountain village of Benahavís, 20 to 30 minutes' drive from Marbella depending on traffic. Our office is in San Pedro de Alcántara, but the activity starts in Benahavís.",
    ],
    content: (
      <>
        <ul className="list-disc pl-6">
          <li>
            <strong>Meeting point:</strong> Parque Torre Leonera, Benahavís.
            There is free parking right next to the park, with toilets and
            drinking fountains at the meeting point. Please arrive 15 minutes
            before the start. Transport is not included. On some dates we can
            arrange it from San Pedro or Marbella on request, but this is not
            guaranteed.
          </li>
          <li>
            <strong>Start times:</strong> we change our times through the year
            to suit the temperature and daylight. The 10:00 open-group session
            runs all year. In summer we recommend the 9:00 start, and a 14:00
            afternoon session runs in the warmer months. Check the booking
            calendar for the times available on your date.
          </li>
          <li>
            <strong>Duration:</strong> about 3 hours in total, with 2 to 2.5
            hours inside the canyon. This is an estimate: it depends on river
            conditions, the group&apos;s pace and how busy the canyon is.
          </li>
          <li>
            <strong>Included:</strong> wetsuit, harness, helmet, rappel
            equipment, life jackets for children and anyone less confident in
            the water, a certified guide, insurance and photos sent by WhatsApp.
            On cold days we provide a 5 mm long-sleeve wetsuit jacket and, while
            stocks last, neoprene socks. The only optional extra is professional
            canyoning shoes (Bestard Aqua Pro or Five Ten Trailcross XT), which
            you can hire for €8.
          </li>
          <li>
            <strong>Who can join:</strong> no experience is needed, but you must
            be able to swim at a basic level. The minimum age is 6 in summer.
            From December to March it is 12, and participants must weigh over
            45 kg.
          </li>
          <li>
            <strong>Groups and languages:</strong> open groups have a maximum of
            12 people per guide. Private groups can be from 2 to 150 people,
            including companies, team-building events and schools. All our
            guides speak Spanish and English. French and German are sometimes
            available but cannot be guaranteed.
          </li>
        </ul>
        <p>
          TUUR Adventure is registered as an active tourism company with the
          Junta de Andalucía (AT/MA/00141). Our guides hold canyoning
          certification and we are members of the Asociación Española de Guías
          de Montaña. The company was founded by José Moreno González, who has
          more than 20 years of experience in mountaineering and guiding.
        </p>
      </>
    ),
  },
  {
    id: "angosturas",
    label: "Canyon of the Angosturas",
    h3: "Canyon of the Angosturas (Cañón de las Angosturas), Benahavís, Málaga",
    paragraphs: [
      "Las Angosturas de Guadalmina (\"the narrows\") is the gorge the Río Guadalmina has carved through the mountains next to Benahavís, in Málaga province. The river rises in the Sierra Bermeja and reaches the sea at San Pedro de Alcántara. On the way it squeezes between high rock walls and forms a chain of natural pools, known locally as 'pozas' or 'charcos'.",
      "The canyon is a protected natural area within the EU's Natura 2000 network. This stretch lies within two Special Areas of Conservation (ZEC): Río Guadalmina (ES6170021) and Sierras Bermeja y Real (ES6170010). That is why we keep our groups small and follow strict leave-no-trace rules inside the gorge.",
      "The route: you follow the river downstream, swimming through narrow passages, sliding down a natural rock toboggan and jumping into deep pools from 1 to 6 metres. Every jump is optional. When conditions allow and the guide judges the group ready, sporty groups can also try higher jumps of up to 9 metres. Near the end comes the 5-metre rappel down the dam, and the route finishes at the Charco de los Tubos, named after the old water pipes in the rock wall.",
      "Las Angosturas is a beginner-level canyon, suitable for families and first-timers who can swim at a basic level. We run it all year. In summer it is a great way to cool off. In winter we use thicker wetsuits and raise the minimum age. On high-water days only our most experienced guides lead the descent. If river or weather conditions are unsafe, we offer a new date, an alternative route or a refund.",
      "All technical equipment is provided and no previous experience is needed. To explore the Angosturas safely, book a guided tour from our meeting point at Parque Torre Leonera, Benahavís.",
    ],
  },
];

const RIVER_CODE = [
  {
    title: "Cover up instead of using sunscreen.",
    text: "Sunscreen washes off in the water and harms river life. We'll give you the right wetsuit for the day: full-length suits for kids and long-sleeve jackets on cooler days. On hot summer days your arms and shoulders stay uncovered, so if you burn easily, bring a long-sleeve rash guard or quick-dry top to wear underneath. The same goes for make-up and insect repellent.",
  },
  {
    title: "Leave jewellery, watches and phones behind.",
    text: "Every season we recover rings, smartwatches and phones from the bottom of the river. Leave them at home, in your car or in the free storage in our vans. Don't worry about pictures: your guide takes them for you. Glasses are only allowed with a strap.",
  },
  {
    title: "Food and drinks stay in the car.",
    text: "Enjoy them after the activity. There are drinking fountains at the meeting point and on the way back, and your guide carries water for emergencies.",
  },
  {
    title: "Use the toilet before we start.",
    text: "There are toilets right next to the meeting point. The river is not a toilet.",
  },
  {
    title: "Step where your guide steps.",
    text: "Stay off the plants on the riverbanks, don't move stones, and watch the wildlife without touching it.",
  },
  {
    title: "Leave only footprints.",
    text: "Everything we bring in goes back out with us. If you spot litter, hand it to your guide.",
  },
];

const ACTIVITY_HIGHLIGHTS = [
  {
    icon: "✅",
    title: "Beginner & Family Friendly",
    description:
      `Ideal for all levels (from ${guadalminaAgeRange} y.o.).`,
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
      "Practice rappelling (up to 5 meters) and enjoy a fun toboggan slide (2 meters) in a mountainous, idyllic setting.",
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
    "Closed sports shoes (good sole grip essential); flip-flops and water shoes prohibited. Alternatively, hire our professional canyoning shoes (our team will contact you).",
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
    "Canyoning time! Walk, swim, slide, jump (optional), and abseil, enjoying the unique gorge for about 2 to 2.5 hours.",
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
    videoYoutube: guadalmina.videoYoutube,
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
    maxAge: guadalmina.maxAge,
    ubication: guadalmina.ubication,
    duration: guadalmina.duration,
    level: guadalmina.level,
    specialPrice: guadalmina.specialPrice,
  };

  return (
    <div className="pt-20 py-8">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdTourExperience),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdLocalBusiness),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

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
              Discover <strong>the best canyoning in Marbella</strong> at the
              Guadalmina Canyon, famously known as{" "}
              <strong>&quot;The Narrowest Canyon.&quot;</strong> This dynamic
              half-day activity is perfect for beginners, friends, and families
              (from {guadalminaAgeRange} y.o.), offering fun and excitement{" "}
              <strong>every day of the year</strong> thanks to its temperate
              waters.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Guadalmina canyoning</strong> takes place in a stunning
              natural gorge — locally known as the{" "}
              <strong>Canyon of the Angosturas</strong> — located in{" "}
              <strong>Benahavís</strong>, just 30 minutes from Marbella, making
              it the closest and most accessible{" "}
              <strong>Benahavís canyoning</strong> experience on the Costa del
              Sol.
            </p>
          </div>

          {/* Highlights */}
          <div className="my-4">
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">
              Activity Highlights
            </h3>
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

          <RainPolicyBanner />

          {/* Safety Box - E-E-A-T */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">
              🛡️ Safety is Our Commitment
            </h3>
            <p className="text-green-700 text-sm">
              All excursions are guided by{" "}
              <strong>certified professional guides</strong> who prioritize the
              safety of the group. We supply high-quality, regularly inspected
              safety gear for every activity. The guide maintains the authority
              to modify or suspend the activity if any situation poses a danger
              to the participants.
            </p>
          </div>

          {/* Early Bird / Session Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-blue-800 mb-2">
              🌅 Pick Your Perfect Session
            </h3>
            <p className="text-blue-700 text-sm">
              Our <strong>10 AM</strong> session runs all year round. Through
              the seasons we add extra start times to suit the temperature and
              daylight: <strong>9 AM Early Bird</strong> sessions to beat the
              summer heat and crowds, and <strong>2 PM</strong> afternoon
              sessions on warmer days. Check the booking calendar to see the
              times available on your date.
            </p>
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
                  The Guadalmina Canyon, situated in the charming town of{" "}
                  <strong>Benahavís</strong> near <strong>Marbella</strong>, is
                  our most requested activity due to its accessibility and high
                  fun factor. This route provides the ideal canyoning trip for
                  groups, bachelor parties, and families looking for a half-day
                  adventure (~3 hours).
                </p>
                <p>
                  Spending a few days on the coast? Our guide to{" "}
                  <Link
                    href="/blog/best-activities-marbella"
                    title="Things to do in Marbella: best activities and experiences"
                    className="font-medium text-primary underline underline-offset-2"
                  >
                    things to do in Marbella
                  </Link>{" "}
                  covers the old town, La Concha, the white villages and more
                  to combine with your canyoning day.
                </p>
                <p>
                  In this beautiful natural environment, you will learn the
                  basic progression techniques of <strong>canyoning</strong>{" "}
                  that are accessible to all participants. The gorge narrows
                  dramatically as you progress, revealing a truly impressive
                  landscape.
                </p>
                <p>
                  For those seeking an extra adrenaline rush, optional jumps of
                  up to <strong>6 meters</strong> into deep pools are available;
                  alternatively, you can opt for the fun{" "}
                  <strong>toboggan ride</strong> or a short{" "}
                  <strong>abseil</strong> descent (rappelling of 5 metres) if
                  you prefer to avoid the higher jumps.
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
              <AccordionContent className="flex flex-col gap-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">
                    The price of the activity includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Wetsuit/neoprene</li>
                    <li>Canyoning harness</li>
                    <li>Helmet</li>
                    <li>Rappel equipment</li>
                    <li>Professional Guide</li>
                    <li>Accident and civil responsibility insurance</li>
                    <li>
                      <strong>Full Photo Report</strong> (A link is sent via
                      WhatsApp within 24 hours).
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">
                    Optional extras:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Canyoning shoes:</strong> You can use your own
                      sports shoes* or hire our professional canyoning shoes
                      after booking for 8€ and enjoy the activity without
                      worrying about slipping and getting your own shoes wet 🙂
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-gray-500">
                  *Water shoes and flip-flops are not permitted for canyoning.
                  For more information on how to choose the right footwear, take
                  a look at{" "}
                  <a
                    href="https://www.tuuradventure.com/blog/what-is-basic-equipment-for-canyoning#footwear"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    this article
                  </a>
                  .
                </p>
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

            {/* Our River Code */}
            <AccordionItem value="river-code">
              <AccordionTrigger>Our River Code</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-y-4">
                <p>
                  The Guadalmina is a protected river, part of the European
                  Natura 2000 network, and home to otters, terrapins, native
                  fish and kingfishers. Thousands of people enjoy it every
                  summer, so we look after it together.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  {RIVER_CODE.map((rule, index) => (
                    <li key={index}>
                      <strong>{rule.title}</strong> {rule.text}
                    </li>
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

            {/* Technical Details */}
            <AccordionItem value="item-6">
              <AccordionTrigger>Technical Details</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Max. Jump Height</p>
                    <p className="font-semibold">Up to 6 meters (optional)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Rappel</p>
                    <p className="font-semibold">Up to 5 meters</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Toboggan</p>
                    <p className="font-semibold">2 meters</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold">~3:00 Hours</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Level</p>
                    <p className="font-semibold">{levelLabel(guadalmina.level)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Age range</p>
                    <p className="font-semibold">{guadalminaAgeRange}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Season</p>
                    <p className="font-semibold">All Year</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Max. Capacity</p>
                    <p className="font-semibold">
                      Up to 12 participants per guide
                    </p>
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

      <Faqs faqs={guadalminaFaqs} />
      <OtherActivities
        activities={relatedActivities(["rio-verde", "zarzalones", "buitreras"])}
      />
      <SeoContentTabs tabs={SEO_TABS} />

      {/* Hidden SEO text — visually hidden, fully indexed by crawlers */}
      <div className="sr-only">
        <h2>Canyoning Marbella — Guadalmina Canyon Guide</h2>
        <p>
          Guadalmina canyoning is the most popular canyoning activity near
          Marbella, located in Benahavís just 30 minutes from Puerto Banús. Also
          known as canyoning Benahavís or the Guadalmina river walk, this guided
          descent is available every day of the year for beginners and families.
          Keywords searched by visitors include: canyoning near Marbella,
          canyoning Marbella, Guadalmina canyon, barranquismo Marbella,
          barranquismo Benahavís, canyoning Costa del Sol, canyon Benahavís,
          river walk Guadalmina, canyoneering Marbella, canyoning Málaga,
          canyoning Andalusia, canyoning Spain Marbella.
        </p>
      </div>
    </div>
  );
}
