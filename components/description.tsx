import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Description = () => {
  return (
    <>
      <Accordion type="single" className="space-y-8" collapsible>
        <AccordionItem
          className="border-1 bg-gray-50/50 shadow-lg rounded-lg px-4"
          value="item-1"
        >
          <AccordionTrigger>Description</AccordionTrigger>
          <AccordionContent className="flex flex-col text-gray-600 gap-y-4">
            <h3 className="text-lg font-semibold text-gray-950 my-2">
              The best canyon overall
            </h3>
            <p>
              The ideal canyoning trip for groups of friends, families and for
              those who want to try something different close to Marbella.
            </p>
            <p>
              In this beautiful natural environment you will learn the basic
              techniques of canyoning which are accessible to all.
            </p>
            <p>
              This canyon is also suitable for those who want an extra
              adrenaline rush with jumps of up to 6 metres (not compulsory) to
              deep pools in an idyllic setting surrounded by mountains.
            </p>
            <p>
              For those who don’t feel brave enough for the smaller jumps, there
              is the option of a fun toboggan ride, abseiling from 5 metres or
              simply swimming along the various pools.
            </p>
            <p>
              As we progress, the gorge narrows and reveals a landscape we could
              never have imagined.
            </p>
            <p>
              We run this canyon all year round in open groups (up to 12 people
              per guide) and at a special price. If you prefer a more personal
              experience, you can book a private tour just for you.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="border-1 bg-gray-50/50 shadow-lg rounded-lg px-4"
        >
          <AccordionTrigger>What&apos;s Included</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Includes</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Wetsuit/neoprene</li>
                <li>Canyoning harness</li>
                <li>Helmet</li>
                <li>Rappel equipment</li>
                <li>Professional Guide</li>
                <li>Accident and civil responsibility insurance</li>
                <li>Full photo report!</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Optional Extras</h3>
              <p className="mb-2">
                <strong>Canyoning shoes:</strong> You can use your own sports
                shoes* or hire our professional canyoning shoes when booking and
                enjoy the activity without worrying about slipping and getting
                your own shoes wet.
              </p>
              <p className="text-sm text-gray-600 italic mb-4">
                *Note: Water shoes and flip-flops are not allowed for canyoning.
                If you use your own shoes, remember that they will get wet and
                you will probably need an extra pair to change at the end of the
                activity.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">
                Why not include them in the price?
              </h4>
              <p className="mb-4">
                Professional canyoning boots are expensive and wear out quickly,
                and many travellers have their own boots or prefer to use their
                trainers, so we have made them OPTIONAL to allow saving some
                money. We recommend that you hire them if you can, as you will
                notice the difference and feel safer and more confident.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">
                What type of shoe is best for canyoning?
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Hiking boots</strong> with a Vibram sole and
                  reinforcements are best.
                </li>
                <li>
                  Conventional <strong>running shoes</strong> are fine as long
                  as they have good sole grip.
                </li>
                <li>
                  <strong>Open footwear and water shoes are NOT allowed</strong>
                  , as you could easily slip and hit your toes on rocks and
                  break a phalanx. Even if they are closed, if the fit is poor
                  or the sole is too soft, you could twist an ankle.
                </li>
              </ul>
              <p className="mt-4 font-semibold text-orange-600">
                WATCH OUT FOR COMPANIES THAT INCLUDE SHOES IN THE PRICE. Ask
                about the shoe type and make sure it meets the above
                requirements.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="border-1 bg-gray-50/50 shadow-lg rounded-lg px-4"
        >
          <AccordionTrigger>What to Bring</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              Make sure you bring the following items for a comfortable and safe
              canyoning experience:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Swimming/bathing suit</strong> already on (you will wear
                the wetsuit over it)
              </li>
              <li>
                <strong>High socks</strong> (above the ankle is enough)
              </li>
              <li>
                <strong>Dry underwear and towel</strong> to change at the end of
                the activity
              </li>
              <li>
                If you didn&apos;t rent our canyoning shoes, don&apos;t forget
                the <strong>appropriate footwear</strong>
              </li>
              <li>
                <strong>Water and food</strong> to recharge energy at the end of
                the activity
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
export default Description;
