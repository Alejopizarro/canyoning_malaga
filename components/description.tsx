import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface DescriptionProps {
  description?: {
    title?: string;
    paragraphs: string[];
  };
  whatsIncluded?: {
    included: string[];
    optionalExtras?: {
      title: string;
      description: string;
      note?: string;
    };
    additionalInfo?: {
      title: string;
      content: string | string[];
    }[];
  };
  whatToBring?: string[];
  meetingPoint?: {
    location: string;
    mapUrl?: string;
    note?: string;
  };
  itinerary?: string[];
}

const Description = ({
  description,
  whatsIncluded,
  whatToBring,
  meetingPoint,
  itinerary,
}: DescriptionProps) => {
  return (
    <>
      <Accordion type="single" collapsible>
        {description && (
          <AccordionItem value="item-1">
            <AccordionTrigger>Description</AccordionTrigger>
            <AccordionContent className="flex flex-col text-gray-600 gap-y-4">
              {description.title && (
                <h3 className="text-lg font-semibold text-gray-950 my-2">
                  {description.title}
                </h3>
              )}
              {description.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        )}

        {whatsIncluded && (
          <AccordionItem value="item-2">
            <AccordionTrigger>What&apos;s Included</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-3">Includes</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {whatsIncluded.included.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {whatsIncluded.optionalExtras && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Optional Extras
                  </h3>
                  <p className="mb-2">
                    <strong>{whatsIncluded.optionalExtras.title}:</strong>{" "}
                    {whatsIncluded.optionalExtras.description}
                  </p>
                  {whatsIncluded.optionalExtras.note && (
                    <p className="text-sm text-gray-600 italic mb-4">
                      {whatsIncluded.optionalExtras.note}
                    </p>
                  )}
                </div>
              )}

              {whatsIncluded.additionalInfo?.map((info, index) => (
                <div key={index}>
                  <h4 className="font-semibold mb-2">{info.title}</h4>
                  {typeof info.content === "string" ? (
                    <p className="mb-4">{info.content}</p>
                  ) : (
                    <ul className="list-disc pl-6 space-y-2">
                      {info.content.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        )}

        {whatToBring && (
          <AccordionItem value="item-3">
            <AccordionTrigger>What to Bring</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-y-4">
              <ul className="list-disc pl-6 space-y-2">
                {whatToBring.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        )}

        {meetingPoint && (
          <AccordionItem value="item-4">
            <AccordionTrigger>Meeting Point</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-y-4">
              <p>
                <strong>Location:</strong> {meetingPoint.location}
              </p>
              {meetingPoint.mapUrl && (
                <a
                  href={meetingPoint.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View on Google Maps
                </a>
              )}
              {meetingPoint.note && (
                <p className="text-sm text-gray-600 italic">
                  {meetingPoint.note}
                </p>
              )}
            </AccordionContent>
          </AccordionItem>
        )}

        {itinerary && (
          <AccordionItem value="item-5">
            <AccordionTrigger>Itinerary</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-y-4">
              <ol className="list-decimal pl-6 space-y-2">
                {itinerary.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </AccordionContent>
          </AccordionItem>
        )}
      </Accordion>
    </>
  );
};
export default Description;
