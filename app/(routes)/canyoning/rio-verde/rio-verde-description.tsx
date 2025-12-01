import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const RioVerdeDescription = () => {
  return (
    <>
      {/* Hero Description */}
      <div className="flex flex-col gap-4">
        <p className="text-gray-700 leading-relaxed">
          Rio Verde is located in the charming village of Otívar, in the
          province of Granada. It belongs to the ranking of{" "}
          <strong>the 5 best canyons in all of Spain</strong>.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Its paradise turquoise waters and its versatile, dynamic route with
          countless jumps are among its best attractions. This version of Rio
          Verde is suitable for everyone, whether you are just starting out in
          canyoning or you already have experience.
        </p>

        <p className="text-gray-700 leading-relaxed">
          If you come with your family, children from 9 years old can also enjoy
          this sensational experience. For all these reasons, we can say that
          this is{" "}
          <strong>one of the best canyoning experiences in Andalusia!</strong>
        </p>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-900 mb-3">
            Activity Highlights:
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Swimming level:</strong> 2/4
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Jumps:</strong> 6-7 of 9m max (all optional)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Rappels:</strong> 2 of 9m max
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Slides:</strong> 2 of 5m max
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Min. age:</strong> 9 years old
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Duration:</strong> 4:30h
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Best season:</strong> All year round
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Location:</strong> Otívar Village, Granada
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Accordion Sections */}
      <Accordion type="single" collapsible className="mt-6">
        <AccordionItem value="item-1">
          <AccordionTrigger>Description</AccordionTrigger>
          <AccordionContent className="flex flex-col text-gray-600 gap-y-4">
            <h3 className="text-lg font-semibold text-gray-950 my-2">
              One of the best canyons in Andalusia
            </h3>
            <p>
              The Rio Verde is packed with adrenaline-packed fun: with a 4.5
              metre slide, two abseils of 6 and 9 metres and many optional jumps
              ranging from 3 to 9 metres.
            </p>
            <p>
              Our experienced guides will tailor the activity to the needs and
              enjoyment of each participant, while taking the best photos to
              remember it all.
            </p>

            <h3 className="text-lg font-semibold text-gray-950 my-2">
              Logistics of the day at Rio Verde
            </h3>
            <p>
              In open groups, we meet up for this activity at 9:00am in the
              morning at the bar-restaurant &apos;El Capricho&apos; in the
              village of Otívar. If you want to have breakfast or buy a
              delicious sandwich (they make sandwiches with meat, omelette, ham,
              cheese…) come a little earlier to not break the timetable of the
              group.
            </p>
            <p>
              From there you will follow us in your vehicle along a forest track
              (30 min.) until you reach the river bed. There we will distribute
              the equipment and start the hike upstream until we reach the
              waterfall we call the &apos;Y&apos; (40 min. approach), where the
              most famous pool of Rio Verde is located.
            </p>
            <p>
              We will equip ourselves with wetsuit, harness, helmet… and your
              guide will start the activity explaining the most important
              concepts you need to know about canyoning and safety. And
              let&apos;s jump!!!! 3h30 of fun and enjoyment await you.
            </p>

            <h3 className="text-lg font-semibold text-gray-950 my-2">
              Looking for something even more challenging?
            </h3>
            <p className="mb-2">
              If you are looking for top action canyoning, for the top canyon
              for jumping, ask us about the{" "}
              <strong>Rio Verde X-PRO version</strong>. This is a more explosive
              canyon and requires a higher level of fitness as the activity is
              almost doubled in length and the jumps, slides and abseils are
              multiplied. The normal version of Rio Verde is about 4 hours of
              activity and the Rio Verde X-PRO is 6:30 hours. Our guides are
              ready for you to enjoy the best canyoning experience in Andalusia!
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
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

        <AccordionItem value="item-3">
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
              <li>
                <strong>Sunscreen</strong> for the approach hike
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Meeting Point & Logistics</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Meeting Point</h3>
              <p className="mb-2">
                <strong>Bar-Restaurant &apos;El Capricho&apos;</strong> in
                Otívar village, Granada.
              </p>
              <p className="mb-4">
                Meeting time: <strong>9:00 AM</strong> (arrive earlier if you
                want breakfast!)
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Schedule</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>9:00 AM:</strong> Meeting at El Capricho
                </li>
                <li>
                  <strong>9:15 AM:</strong> Drive to river bed (30 min forest
                  track, follow us in your vehicle)
                </li>
                <li>
                  <strong>9:45 AM:</strong> Equipment distribution
                </li>
                <li>
                  <strong>10:00 AM:</strong> Approach hike upstream (40 min)
                </li>
                <li>
                  <strong>10:40 AM - 2:00 PM:</strong> Canyoning activity (3h30)
                </li>
                <li>
                  <strong>~2:30 PM:</strong> Return to vehicles and end of
                  activity
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-2">
              <p className="text-blue-800">
                <strong>Pro tip:</strong> The bar makes delicious sandwiches
                with meat, omelette, ham, and cheese. Grab one for after the
                activity!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default RioVerdeDescription;
