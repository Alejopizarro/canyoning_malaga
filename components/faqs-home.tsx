import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs: { id: string; question: string; answer: React.ReactNode }[] = [
  {
    id: "activities",
    question:
      "I've never done canyoning or via ferrata before. Do I need previous experience?",
    answer: (
      <div className="space-y-3">
        <p>
          Not at all! Most of our popular activities in Marbella and Málaga,
          such as the Guadalmina Canyon or the Ronda Via Ferrata, are
          specifically designed for beginners.
        </p>
        <p>
          Our certified professional guides will teach you all the necessary
          techniques (rappelling, jumping, and progression) in a safe and
          controlled environment. We adapt the pace to your level so you can
          focus on the fun!
        </p>
      </div>
    ),
  },
  {
    id: "safety",
    question:
      "Can I bring my children? What is the minimum age for adventure activities?",
    answer: (
      <div className="space-y-3">
        <p>
          Yes! We are specialists in family adventure. For canyoning in
          Benahavís, children as young as 6 years old can join the fun, provided
          they can swim. For via ferratas, the minimum age starts at 6-7 years
          in Ronda or Benaoján.
        </p>
        <p>
          We provide specialized technical gear for smaller sizes to ensure
          their total safety.
        </p>
      </div>
    ),
  },
  {
    id: "booking",
    question:
      "Is the equipment included, and what kind of shoes should I wear?",
    answer: (
      <div className="space-y-3">
        <p>
          We provide all technical safety gear: high-quality wetsuits, helmets,
          and harnesses, all regularly inspected. You can find what you need to
          bring in the description of each activity.
        </p>
        <p>
          Regarding footwear, for <strong>canyoning</strong> you must wear
          closed sports shoes with good grip that can get wet (no flip-flops or
          water shoes). If you prefer, we offer professional canyoning boots for
          rent as an optional extra for maximum safety and comfort.
        </p>
      </div>
    ),
  },
  {
    id: "equipment",
    question: "How and when will I receive the photos of my activity?",
    answer: (
      <div className="space-y-3">
        <p>
          You don&apos;t need to risk your phone in the water! We include a{" "}
          <strong>full photo report for free</strong> with every activity.
        </p>
        <p>
          Your guide will capture the best moments of your adventure, and we
          will send you a download link via WhatsApp within 24 hours.
        </p>
      </div>
    ),
  },
  {
    id: "children",
    question:
      "What happens if it rains on the day of my canyoning or adventure activity?",
    answer: (
      <div className="space-y-3">
        <p>
          <strong>Adventure doesn&apos;t stop for a bit of rain!</strong> In
          fact, during the rainy season, canyons like{" "}
          <strong>Guadalmina</strong> offer an extra component of adventure that
          many of our guests love. It is perfectly possible to enjoy canyoning
          on a calm rainy day with our high-quality, regularly inspected
          neoprene and safety gear.
        </p>
        <p>
          However, your safety is our absolute commitment. Our{" "}
          <strong>certified professional guides</strong> have the definitive
          authority to modify or suspend any activity if weather conditions pose
          a danger to the group.
        </p>
        <p>
          In the event of heavy rain or adverse weather (Force Majeure), we
          follow this protocol:
        </p>
        <ol className="list-decimal list-inside space-y-1.5 pl-2">
          <li>
            <strong>Postponement:</strong> We will first make every effort to
            reschedule the activity for a new date.
          </li>
          <li>
            <strong>Alternatives:</strong> We may offer an alternative adventure
            route that is safer under current conditions.
          </li>
          <li>
            <strong>Refunds:</strong> If rescheduling or alternatives are not
            possible, a <strong>100% refund</strong> will be made (excluding any
            non-refundable external services like transport or restaurant
            bookings already confirmed).
          </li>
        </ol>
        <p>
          We will always keep you informed of the weather conditions in the
          specific activity location before we begin.
        </p>
      </div>
    ),
  },
];

export default function FaqsHome() {
  return (
    <section className="relative z-20 bg-background">
      <div className="py-16 sm:py-24 px-4 sm:px-8 max-w-[1440px] mx-auto ">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Left Column - Header */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              FAQs
            </h2>
            <p className="text-gray-600 mb-8">
              Find answers to your questions about our activities, safety and
              booking process.
            </p>
            <a
              href="/faqs"
              className="border-2 border-gray-900 rounded-lg font-semibold px-4 py-3"
            >
              View all FAQs
            </a>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
