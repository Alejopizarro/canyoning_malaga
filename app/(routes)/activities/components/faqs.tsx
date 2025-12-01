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
    <div className="flex flex-col items-center text-center px-4 py-4 sm:py-12">
      <h2 className="text-4xl sm:text-6xl font-semibold">FAQs</h2>
      <p className="text-gray-600 mt-4 max-w-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repellat
        modi quidem soluta quaerat? Earum adipisci blanditiis recusandae
        corrupti reprehenderit beatae inventore delectus. Nisi dolorem, illum
        ullam ea dolore non!
      </p>
      <Accordion
        type="single"
        collapsible
        className="text-left max-w-3xl w-full mt-8 space-y-4"
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
