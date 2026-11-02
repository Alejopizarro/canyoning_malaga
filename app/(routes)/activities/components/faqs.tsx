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

// Answers may use blank lines for paragraphs, "- " lines for lists and
// **text** for bold. Plain single-paragraph answers render as before.
const answerBlocks = (answer: string) =>
  answer.split(/\n\s*\n/).map((block) => {
    const lines = block.split("\n").map((line) => line.trim());
    const isList = lines.every((line) => line.startsWith("- "));
    return { isList, lines: isList ? lines.map((l) => l.slice(2)) : lines };
  });

const renderInline = (text: string) =>
  text
    .split(/(\*\*[^*]+\*\*)/)
    .map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={i}>{part.slice(2, -2)}</strong>
      ) : (
        part
      ),
    );

const boldToHtml = (text: string) =>
  text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

// Simple HTML version of an answer for the FAQPage JSON-LD.
export const faqAnswerToHtml = (answer: string) => {
  const blocks = answerBlocks(answer);
  if (blocks.length === 1 && !blocks[0].isList) {
    return boldToHtml(blocks[0].lines.join(" "));
  }
  return blocks
    .map(({ isList, lines }) =>
      isList
        ? `<ul>${lines.map((l) => `<li>${boldToHtml(l)}</li>`).join("")}</ul>`
        : `<p>${boldToHtml(lines.join(" "))}</p>`,
    )
    .join("");
};

interface FaqsProps {
  faqs?: Faq[];
}

const Faqs = (props: FaqsProps) => {
  const { faqs } = props;

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-6 items-start md:justify-between px-4 sm:px-16 py-4 sm:py-8">
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
            <AccordionContent className="flex flex-col gap-y-3">
              {answerBlocks(faq.answer).map(({ isList, lines }, i) =>
                isList ? (
                  <ul key={i} className="list-disc pl-6 space-y-2">
                    {lines.map((line, j) => (
                      <li key={j}>{renderInline(line)}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={i}>{renderInline(lines.join(" "))}</p>
                ),
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faqs;
