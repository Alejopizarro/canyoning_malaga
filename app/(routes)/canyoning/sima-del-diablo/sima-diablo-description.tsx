import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SimaDelDiabloDescription = () => {
  return (
    <>
      {/* Hero Description */}
      <div className="flex flex-col gap-4">
        <p className="text-gray-700 leading-relaxed">
          Sima del Diablo is located in the valley of the Genal, next to Ronda,
          running through a <strong>thick riverbank forest</strong>. A perfect
          step up from Guadalmina with higher rappels and a unique environment.
        </p>

        <p className="text-gray-700 leading-relaxed">
          The meeting point is in <strong>Júzcar</strong>, but most people know
          it as <strong>The Smurfs Village</strong> — all the houses, town hall,
          church, and even the cemetery are painted in blue colour with Smurf
          wall paintings everywhere!
        </p>

        <p className="text-gray-700 leading-relaxed">
          This is a canyoning with a little more technical level than Guadalmina
          due to the higher rappels, but still{" "}
          <strong>perfect for families and children from 8 years old</strong>.
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
                <strong>Jumps:</strong> 2 of 5m max (all optional)
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
                <strong>Slides:</strong> 2 of 5m
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Min. age:</strong> 8 years old
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Duration:</strong> 4 hours
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
                <strong>Location:</strong> Júzcar (The Smurfs Village), Málaga
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-2">
          <p className="text-blue-800">
            <strong>🏠 Fun fact:</strong> Júzcar was chosen by Sony Pictures in
            2011 to promote &apos;The Smurfs&apos; movie. After the tourism
            success, the village decided to keep the blue colour permanently!
          </p>
        </div>
      </div>

      {/* Accordion Sections */}
      <Accordion type="single" collapsible className="mt-6">
        <AccordionItem value="item-1">
          <AccordionTrigger>Description</AccordionTrigger>
          <AccordionContent className="flex flex-col text-gray-600 gap-y-4">
            <h3 className="text-lg font-semibold text-gray-950 my-2">
              Sima del Diablo Canyon and the Smurf Town
            </h3>
            <p>
              If you have already enjoyed the Guadalmina canyoning trip in
              Benahavis village, and would like to try another level 1 canyon
              with higher rappels, this is the best option.
            </p>
            <p>
              Located in the valley of the Genal next to Ronda, this canyon runs
              through a thick riverbank forest. You will find two rappels, the
              largest of 9 metres, and slides of 5 metres.
            </p>
            <p>
              This canyon does not have as many jumps as Guadalmina but
              it&apos;s still adventurous with a completely different natural
              environment.
            </p>

            <h3 className="text-lg font-semibold text-gray-950 my-2">
              Perfect Canyon for Families
            </h3>
            <p>
              This canyoning has a little more technical level than Guadalmina
              regarding the rappels, which are higher (Guadalmina has 1 of 5
              metres). For the rest, it continues having the same physical level
              with about 3-4 hours of activity.
            </p>
            <p>
              For this reason, it is still the perfect trip for families and
              children, as Guadalmina is, but here we recommend children from 8
              years old.
            </p>

            <h3 className="text-lg font-semibold text-gray-950 my-2">
              The Smurfs Village Story
            </h3>
            <p>
              The village where we meet, Júzcar, is known worldwide as The
              Smurfs Village. All the houses, town hall, even church and
              cemetery are painted in blue colour and there are many wall
              paintings of smurfs and mushrooms.
            </p>
            <p className="mb-2">
              This was the village chosen by Sony Pictures in 2011 to promote
              their &apos;The Smurfs&apos; movie in 3D. After the successful
              impact on tourism in this white mountain town, the citizens
              decided to keep the blue colour on their houses and become a major
              tourist attraction, especially for families, children and the
              curious.
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
                <strong>Water and snacks</strong> to recharge energy at the end
                of the activity
              </li>
              <li>
                <strong>Sunscreen</strong> for the approach
              </li>
            </ul>

            <div className="bg-blue-50 p-4 rounded-lg mt-2">
              <p className="text-blue-800">
                <strong>💡 Tip:</strong> Bring some extra time to explore the
                Smurfs Village before or after the activity — the kids will love
                it!
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
                <strong>Júzcar Village</strong> (The Smurfs Village), Málaga
                province.
              </p>
              <p className="mb-4">
                We&apos;ll confirm the exact meeting point and time when you
                book. Usually around <strong>9:00 - 10:00 AM</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Schedule</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>9:00/10:00 AM:</strong> Meeting in Júzcar
                </li>
                <li>
                  <strong>Equipment distribution</strong> and safety briefing
                </li>
                <li>
                  <strong>Short approach</strong> to the canyon entrance
                </li>
                <li>
                  <strong>3-4 hours:</strong> Canyoning activity
                </li>
                <li>
                  <strong>~1:00/2:00 PM:</strong> Return to the village
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Distances from major cities
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>From Marbella:</strong> ~45 minutes
                </li>
                <li>
                  <strong>From Ronda:</strong> ~22 km (25 minutes)
                </li>
                <li>
                  <strong>From Málaga city:</strong> ~1 hour 15 minutes
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg mt-2">
              <p className="text-green-800">
                <strong>🍽️ After the activity:</strong> Stop at the Smurf town
                for refreshments, tapas or lunch at its restaurants. Ronda is
                also nearby (22 km) — a great idea for an afternoon visit!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Combine with Other Activities</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              Make the most of your day in this beautiful area of Andalusia!
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Recommended combinations
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Via Ferrata Ronda:</strong> After canyoning, head to
                  Ronda (22 km) for an afternoon via ferrata at the famous Tajo
                  de Ronda with stunning views of the New Bridge.
                </li>
                <li>
                  <strong>Visit Ronda:</strong> Explore this historic city, walk
                  across the iconic Puente Nuevo, visit the bullring, and enjoy
                  local cuisine.
                </li>
                <li>
                  <strong>Smurfs Village Tour:</strong> Spend time exploring
                  Júzcar, take photos with the Smurf murals, and let the kids
                  enjoy the magic of this unique blue village.
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg mt-4">
              <p className="text-orange-800">
                <strong>📦 Check our packs:</strong> We offer a{" "}
                <strong>Canyoning + Via Ferrata pack</strong> that combines Sima
                del Diablo with Via Ferrata Ronda for the ultimate adventure
                day!
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                Guadalmina vs Sima del Diablo
              </h3>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2 text-left">Feature</th>
                    <th className="border p-2 text-left">Guadalmina</th>
                    <th className="border p-2 text-left">Sima del Diablo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Level</td>
                    <td className="border p-2">1/4</td>
                    <td className="border p-2">1.5/4</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Max rappel</td>
                    <td className="border p-2">5m</td>
                    <td className="border p-2">9m</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Jumps</td>
                    <td className="border p-2">More jumps</td>
                    <td className="border p-2">Fewer jumps</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Min. age</td>
                    <td className="border p-2">6 years</td>
                    <td className="border p-2">8 years</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Environment</td>
                    <td className="border p-2">Near Marbella</td>
                    <td className="border p-2">Forest + Smurfs Village</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default SimaDelDiabloDescription;
