import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "activities",
    question: "What activities do you offer?",
    answer:
      "We offer a variety of adventure activities, including canyoning, via ferrata, hiking, and kayaking. Our tours cater to all skill levels, from beginners to experts. Join us for an unforgettable experience in the stunning landscapes of Andalusia.",
  },
  {
    id: "safety",
    question: "Is it safe?",
    answer:
      "Safety is our top priority. All our activities are led by certified guides who are trained in safety protocols. We provide all necessary safety equipment to ensure a secure and enjoyable experience.",
  },
  {
    id: "booking",
    question: "How do I book?",
    answer:
      "Booking is easy! Simply visit our website, choose your desired activity, and select your preferred date. You can complete your reservation online in just a few minutes.",
  },
  {
    id: "equipment",
    question: "What equipment is needed?",
    answer:
      "We provide all essential equipment for our activities, including wetsuits, helmets, and harnesses. If you prefer to use your own gear, please ensure it meets safety standards. For those looking to explore independently, we offer equipment hire options.",
  },
  {
    id: "children",
    question: "Are children allowed?",
    answer:
      "Absolutely! We have tailored activities suitable for children, including adventure camps and family-friendly activities. Our guides ensure a fun and safe environment for young adventurers.",
  },
];

export default function FaqsHome() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Left Column - Header */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              FAQs
            </h2>
            <p className="text-gray-600 mb-6">
              Find answers to your questions about our activities, safety and
              booking process.
            </p>
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
