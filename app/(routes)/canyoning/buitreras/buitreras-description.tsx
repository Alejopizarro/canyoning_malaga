import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BuitrerasDescription = () => {
  return (
    <>
      {/* Hero Description */}
      <div className="flex flex-col gap-4">
        <p className="text-gray-700 leading-relaxed">
          Buitreras is known as{" "}
          <strong>The Cathedral of the Canyons of Andalusia</strong>. Situated
          in the Natural Park of Los Alcornocales, this gorge constitutes one of
          the most spectacular natural locations in Southern Spain.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Due to its special geological formation, you will enjoy a{" "}
          <strong>visual experience without precedent</strong> — walking between
          rock walls of more than 100 metres, gigantic vaults, and stunning
          limestone formations sculpted by thousands of years of water flow.
        </p>

        <p className="text-gray-700 leading-relaxed">
          This is one of the <strong>top 5 canyons in all of Spain</strong> and
          a must-do for adventurers seeking incredible places in the world. A
          true bucket-list experience!
        </p>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-900 mb-3">
            Activity Highlights:
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-amber-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Swimming level:</strong> 3/4
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Jumps:</strong> 4-5 of 12m max (all optional)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Rappels:</strong> 4 of 10m max
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Canyon length:</strong> ~1,600m with 80m descent
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Min. age:</strong> 14 years old
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Duration:</strong> 5-6 hours (+ 50 min approach)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Best season:</strong> June 15th - November 30th
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Location:</strong> El Colmenar de la Frontera, Málaga
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mt-2">
          <p className="text-amber-800">
            <strong>🦅 Natural Monument:</strong> Buitreras was declared a
            Natural Monument of Andalusia. The canyon is named after the griffon
            vultures (buitres) that nest in its impressive walls.
          </p>
        </div>
      </div>

      {/* Accordion Sections */}
      <Accordion type="single" collapsible className="mt-6">
        <AccordionItem value="item-1">
          <AccordionTrigger>Description</AccordionTrigger>
          <AccordionContent className="flex flex-col text-gray-600 gap-y-4">
            <h3 className="text-lg font-semibold text-gray-950 my-2">
              The Cathedral of Andalusian Canyons
            </h3>
            <p>
              Buitreras canyon is one of the most incredible canyoning
              experiences in Málaga province. Situated in the Natural Park of
              Los Alcornocales (The Cork Oaks), the gorge constitutes one of the
              most spectacular natural locations of our region.
            </p>
            <p>
              Due to its special geological formation, the descent of the gorge
              of Las Buitreras is considered by all as The Cathedral of the
              gorges of Andalucía. You will enjoy a visual show without
              precedent in a location situated between rock walls of more than
              100 metres.
            </p>

            <h3 className="text-lg font-semibold text-gray-950 my-2">
              The German&apos;s Bridge (Puente de los Alemanes)
            </h3>
            <p>
              Before we touch the water, and as an appetiser, you will visit
              &apos;El Puente de los Alemanes&apos; — an impressive bridge
              squeezed between the walls of the ravine at a height of 60 metres
              above the river.
            </p>
            <p>
              From this vantage point, you will be able to make out part of the
              route and start to feel the excitement for the adventure that
              awaits you.
            </p>

            <h3 className="text-lg font-semibold text-gray-950 my-2">
              The Journey to Buitreras
            </h3>
            <p>
              If you are staying on the coast, you will drive to one of the most
              hidden white mountain towns in Málaga, located in the Guadiaro
              valley. From there, we cross part of the Natural Park and its
              great cork oak forest, passing by a goat farm where they make goat
              cheese.
            </p>
            <p>
              We then climb down mountainous terrain to reach the head of the
              canyon. After about 50 minutes of walking approach and putting on
              wetsuits and equipment, we start the activity — 4-5 hours of
              canyoning await you.
            </p>
            <p className="mb-2">
              The canyon starts more open to the sky, but just 60 metres beyond
              the start, the walls are already more than 100 metres above our
              heads. A truly humbling and awe-inspiring experience!
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Season & Availability</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-800">
                <strong>⚠️ Important:</strong> This canyon is only available
                from <strong>June 15th to November 30th</strong>. Outside these
                dates it is prohibited for environmental and safety reasons.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                Best Times to Visit
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>June 15th - July 15th:</strong> Perfect water flow,
                  ideal conditions. Our favourite time!
                </li>
                <li>
                  <strong>Autumn (after first rains):</strong> Spectacular with
                  renewed water flow and beautiful colours.
                </li>
                <li>
                  <strong>Any date in season:</strong> All dates between June
                  15th and November 30th offer a great experience.
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                Weather Considerations
              </h3>
              <p>
                In seasons of continuous rains, the activity may be impractical
                for safety reasons. We monitor conditions closely and will
                inform you if rescheduling is necessary.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-2">
              <p className="text-blue-800">
                <strong>💡 Note:</strong> Due to limited availability and high
                demand, we recommend booking well in advance, especially for
                June and early July.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>What&apos;s Included</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Includes</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Long wetsuit/neoprene (required even in summer)</li>
                <li>Canyoning harness with double anchors</li>
                <li>Approved safety canyoning helmet</li>
                <li>Rappel equipment (eight and carabiners)</li>
                <li>Special backpack for technical descent</li>
                <li>Professional certified guide (max. 6 people per guide)</li>
                <li>Official canyon permission</li>
                <li>Accident and civil liability insurance</li>
                <li>Full photo report!</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Optional Extras</h3>
              <p className="mb-2">
                <strong>Canyoning shoes:</strong> You can use your own sports
                shoes* or hire our professional canyoning shoes when booking.
              </p>
              <p className="mb-2">
                <strong>Neoprene socks:</strong> Available for winter months for
                extra warmth.
              </p>
              <p className="text-sm text-gray-600 italic mb-4">
                *Note: Water shoes and flip-flops are not allowed for canyoning.
                If you use your own shoes, remember that they will get wet and
                you will need an extra pair to change at the end.
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
                  , as you could easily slip and hit your toes on rocks.
                </li>
              </ul>
              <p className="mt-4 font-semibold text-orange-600">
                For this advanced canyon, we STRONGLY recommend hiring
                professional canyoning shoes for maximum safety.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>What to Bring</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              This is a long and demanding activity. Make sure you bring
              everything needed for a safe and enjoyable experience:
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
                <strong>Plenty of water</strong> (at least 1.5L - 2L)
              </li>
              <li>
                <strong>Lunch and energy snacks</strong> — sandwiches, energy
                bars, chocolate, fruit
              </li>
              <li>
                <strong>Sunscreen and cap</strong> for the approach hike
              </li>
              <li>
                <strong>Change of clothes</strong> for the drive home
              </li>
            </ul>

            <div className="bg-yellow-50 p-4 rounded-lg mt-2">
              <p className="text-yellow-800">
                <strong>💪 Physical preparation:</strong> This canyon requires
                medium-high physical condition. Make sure you&apos;re well
                rested and have had a good breakfast before the activity!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Meeting Point & Logistics</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Meeting Point</h3>
              <p className="mb-2">
                <strong>El Colmenar de la Frontera village</strong>, in front of
                the bar-restaurant <strong>LAS FLORES</strong>.
              </p>
              <p className="mb-4">
                We&apos;ll confirm the exact meeting time when you book,
                typically around <strong>9:00 AM</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Schedule</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>9:00 AM:</strong> Meeting at Bar Las Flores, El
                  Colmenar
                </li>
                <li>
                  <strong>9:15 AM:</strong> Drive through the Natural Park
                </li>
                <li>
                  <strong>~10:00 AM:</strong> Start walking approach (50 min)
                </li>
                <li>
                  <strong>~10:50 AM:</strong> Equipment distribution and safety
                  briefing
                </li>
                <li>
                  <strong>11:00 AM - 4:00 PM:</strong> Canyoning activity (4-5
                  hours)
                </li>
                <li>
                  <strong>~5:00 PM:</strong> Return to vehicles
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Distances from major cities
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>From Marbella:</strong> ~1 hour 15 minutes
                </li>
                <li>
                  <strong>From Estepona:</strong> ~1 hour
                </li>
                <li>
                  <strong>From Ronda:</strong> ~45 minutes
                </li>
                <li>
                  <strong>From Málaga city:</strong> ~1 hour 30 minutes
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg mt-2">
              <p className="text-green-800">
                <strong>🚗 Transport help:</strong> Sometimes we can help you
                with transport, especially from Marbella. Tell us if you need it
                and we&apos;ll recommend a transport service or send you an
                offer for pick-up and drop-off.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>Physical Requirements</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              Buitreras is an <strong>advanced level canyon</strong> that
              requires good physical and technical preparation. Please review
              the following requirements:
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-3">Requirements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Minimum age:</strong> 14 years old
                </li>
                <li>
                  <strong>Swimming ability:</strong> Comfortable swimming in
                  deep, moving water (level 3/4)
                </li>
                <li>
                  <strong>Physical fitness:</strong> Medium-high. Ability to
                  walk 50 min approach + 5-6 hours of water activity
                </li>
                <li>
                  <strong>No fear of heights:</strong> Rappels up to 10m and
                  optional jumps up to 12m
                </li>
                <li>
                  <strong>No claustrophobia:</strong> Some narrow sections
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                Who is this canyon for?
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Adventurers seeking a truly spectacular, bucket-list
                  experience
                </li>
                <li>
                  People with some canyoning experience or excellent fitness
                </li>
                <li>
                  Nature lovers who want to see one of Spain&apos;s natural
                  wonders
                </li>
                <li>
                  Anyone looking for the most impressive canyon in Andalusia
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mt-4">
              <p className="text-amber-800">
                <strong>🏔️ Preparation tip:</strong> If you haven&apos;t done
                canyoning before, we recommend starting with{" "}
                <strong>Guadalmina</strong> or <strong>Sima del Diablo</strong>{" "}
                to learn the basics before tackling Buitreras.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>Wildlife & Nature</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              Buitreras is not just about adventure — it&apos;s a unique
              opportunity to experience one of Andalusia&apos;s most protected
              natural environments.
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-3">Wildlife</h3>
              <p className="mb-2">
                The canyon is named after the <strong>griffon vultures</strong>{" "}
                (buitres in Spanish) that nest in its impressive walls. Beyond
                these elegant creatures, you might also be lucky enough to see:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Bonelli&apos;s eagles</li>
                <li>Kestrels</li>
                <li>Stock doves and swifts</li>
                <li>Various bat species</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Flora & Landscape</h3>
              <p className="mb-2">
                The canyon is situated in{" "}
                <strong>Los Alcornocales Natural Park</strong> (The Cork Oaks),
                one of the largest cork oak forests in the world. You&apos;ll
                also find:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cork oak forests</li>
                <li>Juniper, mastic and carob trees</li>
                <li>
                  <strong>Palmetto</strong> — the only palm tree native to
                  Europe!
                </li>
                <li>Spectacular limestone formations</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg mt-4">
              <p className="text-green-800">
                <strong>🌿 Conservation:</strong> The canyon is a protected
                Natural Monument. The seasonal restrictions (June 15 - Nov 30)
                exist to protect nesting birds and the delicate ecosystem.
                Please respect all guidelines.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default BuitrerasDescription;
