import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface Faq {
  question: string;
  answer: string;
}

interface FaqsProps {
  faqs?: Faq[];
}

const Faqs = (props: FaqsProps) => {
  const { faqs } = props;

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-6 items-start md:justify-between px-4 py-4 sm:py-12">
      <div className="flex flex-col mb-6">
        <h2 className="text-4xl sm:text-6xl font-semibold">FAQs</h2>
        <p className="text-gray-600 mt-4 max-w-2xl">
          Here are some of the most common questions about this activity. If you
          have any other questions, feel free to contact us! We are here to help
          you have the best experience possible.
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="text-left max-w-3xl w-full space-y-4"
      >
        {faqs?.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>
              <p>{faq.question}</p>
            </AccordionTrigger>
            <AccordionContent>
              <p>{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faqs;
