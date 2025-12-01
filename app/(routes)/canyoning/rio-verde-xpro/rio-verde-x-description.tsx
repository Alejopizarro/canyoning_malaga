import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const RioVerdeXproDescription = () => {
  return (
    <>
      {/* Hero Description */}
      <div className="flex flex-col gap-4">
        <p className="text-gray-700 leading-relaxed">
          Rio Verde X-PRO is the <strong>integral version</strong> of the famous
          Rio Verde canyon, including its upper section — the most technical,
          wildest and exciting of them all.
        </p>

        <p className="text-gray-700 leading-relaxed">
          We are one of the few companies that offer this complete experience
          with turquoise and crystalline waters, featuring{" "}
          <strong>the largest number of jumps and slides</strong> among all
          Andalusian canyons.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Rio Verde is considered one of the most beautiful open canyons in
          Andalusia and is located in the natural park of Sierra de Almijara,
          only 50 minutes drive from Málaga city. This is{" "}
          <strong>the ultimate canyoning experience for adventurers!</strong>
        </p>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-900 mb-3">
            Activity Highlights:
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Swimming level:</strong> 3/4
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Jumps:</strong> 12 of 12m max (all optional)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Rappels:</strong> 3 of 12m max (mandatory)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Slides:</strong> Multiple, up to 15m long
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Min. age:</strong> 15 years old
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Duration:</strong> 6-7 hours
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Best season:</strong> All year round
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Location:</strong> Otívar Village, Granada
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mt-2">
          <p className="text-orange-800">
            <strong>⚠️ Advanced level:</strong> This canyon requires good
            physical condition and is recommended for those with previous
            canyoning experience or high fitness levels.
          </p>
        </div>
      </div>

      {/* Accordion Sections */}
      <Accordion type="single" collapsible className="mt-6">
        <AccordionItem value="item-1">
          <AccordionTrigger>Description</AccordionTrigger>
          <AccordionContent className="flex flex-col text-gray-600 gap-y-4">
            <h3 className="text-lg font-semibold text-gray-950 my-2">
              An incredible canyon for the most adventurous
            </h3>
            <p>
              TUUR Canyoning offers you a unique experience in the Rio Verde
              canyon. We are one of the few companies that offer the Rio Verde
              canyon in its Integral version including its upper section, the
              most technical, wildest and exciting of them all.
            </p>

            <h3 className="text-lg font-semibold text-gray-950 my-2">
              Turquoise waters with countless jumps and slides
            </h3>
            <p>
              Rio Verde is one of the great canyons of reference in Spain,
              considered one of the most beautiful open canyons of turquoise and
              crystalline waters of Andalusia. It is the canyon with the largest
              number of possible jumps among the Andalusian canyons.
            </p>
            <p>
              <strong>No jump is compulsory</strong> — there is always an
              optional abseil for those who prefer not to jump. Countless jumps
              of between 3 and 9 metres for those of you who are amateurs, and
              spectacular and mythical jumps such as the{" "}
              <strong>bush jump</strong> that will trigger the adrenaline of the
              most adventurous.
            </p>
            <p>
              It is also the canyon with the largest number of slides, up to 15
              metres long in its upper section. And to complete this wide range
              of possibilities, there are 3 obligatory abseils of up to 12
              metres under beautiful waterfalls.
            </p>

            <h3 className="text-lg font-semibold text-gray-950 my-2">
              How long will I need to complete Rio Verde X-PRO?
            </h3>
            <p>
              The activity will take between 6 and 7 hours, depending on the
              number of participants and the physical condition of the group,
              including an approach path of 1h30 to 1h45 minutes.
            </p>
            <p>
              Along the approach to reach the beginning of the canyon descent
              we&apos;ll see mountainous landscapes worthy of National
              Geographic documentaries.
            </p>
            <p className="mb-2">
              Before you put on your wetsuit and take a dip in the turquoise
              water, you can enjoy your chocolate bar or your first sandwich.
              When you arrive at the point of the river known as the
              &apos;Y&apos;, we will have another short break to have our lunch
              that you will have previously stored in the watertight container
              that we will provide you with so that you don&apos;t get your
              picnic wet.
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
                <li>Watertight container for your lunch and belongings</li>
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
              canyoning experience. <strong>This is a long activity</strong>, so
              food and water are essential!
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
                <strong>Plenty of water</strong> (at least 1.5L recommended)
              </li>
              <li>
                <strong>Lunch and snacks</strong> — sandwiches, energy bars,
                chocolate, fruit
              </li>
              <li>
                <strong>Sunscreen</strong> for the approach hike
              </li>
              <li>
                <strong>Cap or hat</strong> for the 1h45 approach walk
              </li>
            </ul>

            <div className="bg-yellow-50 p-4 rounded-lg mt-2">
              <p className="text-yellow-800">
                <strong>💡 Pro tip:</strong> We provide a watertight container
                for your food, so you can enjoy a proper lunch break at the
                &apos;Y&apos; pool during the activity!
              </p>
            </div>
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
                Meeting time: <strong>8:30 AM</strong> (earlier than the
                standard Rio Verde due to longer duration)
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Schedule</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>8:30 AM:</strong> Meeting at El Capricho
                </li>
                <li>
                  <strong>8:45 AM:</strong> Drive to starting point (30 min
                  forest track, follow us in your vehicle)
                </li>
                <li>
                  <strong>9:15 AM:</strong> Equipment distribution
                </li>
                <li>
                  <strong>9:30 AM:</strong> Approach hike (1h30-1h45) through
                  stunning mountain landscapes
                </li>
                <li>
                  <strong>~11:00 AM:</strong> First snack break before entering
                  the water
                </li>
                <li>
                  <strong>11:15 AM - 3:30 PM:</strong> Canyoning activity with
                  lunch break at the &apos;Y&apos; pool
                </li>
                <li>
                  <strong>~4:00 PM:</strong> Return to vehicles and end of
                  activity
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Location</h3>
              <p className="mb-2">
                Rio Verde is located in the natural park of{" "}
                <strong>Sierra de Almijara</strong>, 20 km from Almuñecar and
                only 50 minutes drive from Málaga city.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-2">
              <p className="text-blue-800">
                <strong>🍽️ Breakfast tip:</strong> The bar makes delicious
                sandwiches with meat, omelette, ham, and cheese. Arrive early to
                grab breakfast and stock up on sandwiches for your lunch break!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Physical Requirements</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              Rio Verde X-PRO is an <strong>advanced level</strong> canyon that
              requires good physical preparation. Please review the following
              requirements:
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-3">Requirements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Minimum age:</strong> 15 years old
                </li>
                <li>
                  <strong>Swimming ability:</strong> Comfortable swimming in
                  deep water (level 3/4)
                </li>
                <li>
                  <strong>Physical fitness:</strong> Ability to walk 1h45
                  uphill, plus 5-6 hours of water activity
                </li>
                <li>
                  <strong>No fear of heights:</strong> Mandatory abseils of up
                  to 12m
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                Who is this canyon for?
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Adventurers seeking an adrenaline-packed experience</li>
                <li>People with previous canyoning experience</li>
                <li>Athletes and outdoor enthusiasts in good shape</li>
                <li>Anyone who loved the standard Rio Verde and wants more!</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg mt-4">
              <p className="text-green-800">
                <strong>✅ New to canyoning?</strong> We recommend starting with
                the standard <strong>Rio Verde</strong> version (4h30) to get
                familiar with canyoning techniques before attempting the X-PRO.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default RioVerdeXproDescription;
