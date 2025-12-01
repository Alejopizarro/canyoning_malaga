import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ElChorroDescription = () => {
  return (
    <>
      {/* Hero Description */}
      <div className="flex flex-col gap-4">
        <p className="text-gray-700 leading-relaxed">
          The Via Ferrata El Chorro is{" "}
          <strong>the best via ferrata in Andalusia</strong> and one of the most
          exciting in Spain. Located next to the famous Caminito del Rey, in the
          spectacular Desfiladero de los Gaitanes Natural Park.
        </p>

        <p className="text-gray-700 leading-relaxed">
          This adventure features a <strong>35-metre zipline</strong>, a
          15-metre Tibetan bridge, a 30-metre monkey bridge, and breathtaking
          views over the El Chorro reservoir and Sierra de Huma. Climb 250
          metres of vertical elevation!
        </p>

        <p className="text-gray-700 leading-relaxed">
          No previous climbing experience needed — our certified guides will
          accompany you every step of the way. Perfect for adventurers seeking
          an adrenaline rush in one of Málaga&apos;s most stunning landscapes.
        </p>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-900 mb-3">
            Activity Highlights:
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-sky-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Difficulty:</strong> K3 (Medium-High)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Route length:</strong> 650m
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Elevation gain:</strong> +250m (highest in Málaga!)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Zipline:</strong> 35 metres
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Bridges:</strong> Tibetan (15m) + Monkey bridge (30m)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Min. age:</strong> 14 years old
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Duration:</strong> 3-4 hours
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Best season:</strong> All year (spring/autumn ideal)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-sky-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Location:</strong> El Chorro, Álora (Málaga)
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-sky-50 border-l-4 border-sky-500 p-4 rounded-r-lg mt-2">
          <p className="text-sky-800">
            <strong>🏔️ Next to Caminito del Rey:</strong> This via ferrata is
            located in the same spectacular gorge as the famous walkway. Combine
            both for the ultimate El Chorro experience!
          </p>
        </div>
      </div>

      {/* Accordion Sections */}
      <Accordion type="single" collapsible className="mt-6">
        <AccordionItem value="item-1">
          <AccordionTrigger>Description</AccordionTrigger>
          <AccordionContent className="flex flex-col text-gray-600 gap-y-4">
            <h3 className="text-lg font-semibold text-gray-950 my-2">
              The Best Via Ferrata in Andalusia
            </h3>
            <p>
              The Via Ferrata El Chorro (also known as Via Ferrata Caminito del
              Rey) is one of the most fun and complete via ferratas in Málaga
              province. Built in 2018, it is located in the spectacular Natural
              Park of the Desfiladero de los Gaitanes, in the heart of the
              climbing and mountaineering mecca of Europe.
            </p>
            <p>
              With a route of 650 metres and 250 metres of elevation gain, this
              via ferrata offers an incredible variety of challenges and
              experiences that will leave you breathless!
            </p>

            <h3 className="text-lg font-semibold text-gray-950 my-2">
              The Adventure Route
            </h3>
            <p>During approximately 4 hours you will experience:</p>
            <ul className="list-disc pl-6 space-y-1 my-2">
              <li>
                <strong>Vertical ascent:</strong> Climb iron steps while gaining
                height and atmosphere
              </li>
              <li>
                <strong>35-metre zipline:</strong> Fly over an incredible
                crevice — one of the most fun moments!
              </li>
              <li>
                <strong>Tibetan bridge (15m):</strong> A fully equipped section
                easy to cross
              </li>
              <li>
                <strong>Monkey bridge (30m):</strong> Walk on a cable while
                holding another above — spectacular views!
              </li>
              <li>
                <strong>Viewpoints:</strong> Stunning panoramas of the El Chorro
                reservoir and Las Encantadas
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-950 my-2">
              The Descent
            </h3>
            <p className="mb-2">
              After completing the via ferrata, you&apos;ll follow a scenic
              trekking path (approximately 45 minutes) back to the starting
              point. Along the way, you may spot local wildlife, birds of prey,
              and enjoy wonderful views of the stone bridge that characterises
              the Caminito del Rey environment — passing under the train tracks
              for a unique perspective!
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>What is a Via Ferrata?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              A via ferrata (Italian for &quot;iron path&quot;) is an aerial
              mountain route that allows non-climbers to experience the thrill
              of vertical adventure safely.
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-3">Origins</h3>
              <p>
                Via ferratas originated in the Italian Alps and have spread
                worldwide, becoming increasingly popular for adventure tourism.
                They were originally built for military purposes in World War I
                to move troops through the mountains.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">How it works</h3>
              <p className="mb-2">
                The route is equipped with permanent steel fixtures that allow
                progression:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Iron steps and rungs:</strong> For climbing vertical
                  sections
                </li>
                <li>
                  <strong>Steel cable (lifeline):</strong> Runs the entire route
                  for safety
                </li>
                <li>
                  <strong>Bridges:</strong> Tibetan and monkey-style crossings
                </li>
                <li>
                  <strong>Ziplines:</strong> For exciting aerial traverses
                </li>
                <li>
                  <strong>Chains and handrails:</strong> For additional support
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Difficulty Scale</h3>
              <p className="mb-2">
                Via ferratas are rated from K1 to K6 (easiest to hardest):
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>K1-K2:</strong> Easy, suitable for beginners
                </li>
                <li>
                  <strong>K3:</strong> Medium difficulty (El Chorro&apos;s
                  rating)
                </li>
                <li>
                  <strong>K4-K6:</strong> Difficult to very difficult, requiring
                  experience
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-2">
              <p className="text-blue-800">
                <strong>💡 Good to know:</strong> El Chorro is rated K3 mainly
                due to its length rather than technical difficulty. The actual
                moves are closer to K2, making it accessible for motivated
                beginners!
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
                <li>Helmet</li>
                <li>Harness</li>
                <li>Via ferrata kit with energy dissipator</li>
                <li>Double pulley for steel cables</li>
                <li>Gloves</li>
                <li>Rest lanyard</li>
                <li>Professional certified guide (Spanish/English)</li>
                <li>Civil liability and accident insurance</li>
                <li>Digital photo report!</li>
                <li>Water bottle at the start</li>
                <li>Celebratory drink at the end</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">What You Need</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Mountain boots or closed sports shoes</strong> with
                  good grip (essential!)
                </li>
                <li>
                  <strong>Comfortable clothing</strong> that allows freedom of
                  movement
                </li>
                <li>
                  <strong>Small backpack</strong> for water and personal items
                </li>
                <li>
                  <strong>Sunscreen and sunglasses</strong>
                </li>
                <li>
                  <strong>Water and snacks</strong> for energy
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mt-2">
              <p className="text-yellow-800">
                <strong>👟 Footwear note:</strong> Proper closed shoes with good
                grip are essential. Open sandals, flip-flops, or smooth-soled
                shoes are NOT allowed for safety reasons.
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
                <strong>Complejo Turístico La Garganta</strong>
              </p>
              <p className="mb-2 text-gray-600">
                In front of El Chorro train station, at the south access to
                Caminito del Rey.
              </p>
              <p className="mb-4">
                Typical meeting time: <strong>8:00 - 9:00 AM</strong> (to avoid
                midday heat in summer)
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">How to Get There</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>By car:</strong> Free parking available near the
                  meeting point
                </li>
                <li>
                  <strong>By train:</strong> Cercanías line to El Chorro station
                  (very convenient!)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Schedule</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Meeting:</strong> At La Garganta complex
                </li>
                <li>
                  <strong>15 min:</strong> Equipment fitting and safety briefing
                </li>
                <li>
                  <strong>Short walk:</strong> To the start of the via ferrata
                </li>
                <li>
                  <strong>2-3 hours:</strong> Via ferrata route
                </li>
                <li>
                  <strong>45 min:</strong> Descent trek back to start
                </li>
                <li>
                  <strong>Total time:</strong> Approximately 4 hours
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Distances from major cities
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>From Málaga city:</strong> ~50 minutes
                </li>
                <li>
                  <strong>From Marbella:</strong> ~1 hour 15 minutes
                </li>
                <li>
                  <strong>From Ronda:</strong> ~45 minutes
                </li>
                <li>
                  <strong>From Seville:</strong> ~2 hours
                </li>
                <li>
                  <strong>From Granada:</strong> ~1 hour 45 minutes
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg mt-2">
              <p className="text-green-800">
                <strong>🅿️ Parking tip:</strong> The area near Caminito del Rey
                gets very busy after 9:00 AM. Arriving early ensures easy
                parking and cooler temperatures for the climb!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Physical Requirements</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              The Via Ferrata El Chorro is an activity of medium difficulty that
              does not require previous climbing experience, but does require
              good physical condition and comfort with heights.
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-3">Requirements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Minimum age:</strong> 14 years old (with parental
                  authorisation)
                </li>
                <li>
                  <strong>Physical fitness:</strong> Good general condition to
                  climb 250m elevation
                </li>
                <li>
                  <strong>No severe vertigo:</strong> You&apos;ll be at
                  significant heights throughout
                </li>
                <li>
                  <strong>Arm strength:</strong> Some sections require pulling
                  yourself up
                </li>
                <li>
                  <strong>Good health:</strong> No heart conditions or severe
                  physical limitations
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                Who is this activity for?
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Adventure seekers wanting a unique experience</li>
                <li>
                  Visitors to Caminito del Rey looking for more adrenaline
                </li>
                <li>Groups of friends and corporate team building</li>
                <li>Anyone who enjoys heights and panoramic views</li>
                <li>
                  People wanting to try &quot;climbing&quot; without technical
                  skills
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mt-4">
              <p className="text-amber-800">
                <strong>⚠️ Important:</strong> If you have a fear of heights,
                please evaluate carefully before booking. While our guides
                provide excellent support, you will be at significant altitude
                for 2-3 hours. For a gentler introduction, consider our Via
                Ferrata Ronda (K2) first.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>Best Season</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              The Via Ferrata El Chorro can be done all year round, but some
              seasons are more comfortable than others.
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Recommended Seasons
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Spring (March-May):</strong> Ideal temperatures,
                  beautiful green landscapes
                </li>
                <li>
                  <strong>Autumn (Sept-Nov):</strong> Perfect weather, golden
                  colours in the gorge
                </li>
                <li>
                  <strong>Winter (Dec-Feb):</strong> Possible on clear days,
                  fewer crowds
                </li>
                <li>
                  <strong>Summer (June-Aug):</strong> Possible but hot — start
                  early (8:00 AM) to avoid midday heat
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Summer Tips</h3>
              <p>
                In summer, temperatures can be very high on the south-facing
                rock. We recommend starting early in the morning to complete the
                most exposed sections before the heat of midday. Bring plenty of
                water!
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-2">
              <p className="text-blue-800">
                <strong>🌡️ Temperature note:</strong> The rock can get very hot
                in direct sun. Gloves are provided to protect your hands, but
                long trousers are recommended to avoid burns on exposed rock.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>El Chorro & Caminito del Rey</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">
                The Spectacular Setting
              </h3>
              <p className="mb-2">
                The Via Ferrata is located in the{" "}
                <strong>Desfiladero de los Gaitanes Natural Park</strong>, one
                of the most impressive gorges in Europe. The area features:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vertical limestone walls over 300m high</li>
                <li>The beautiful El Chorro reservoir</li>
                <li>The famous Caminito del Rey walkway</li>
                <li>World-class rock climbing routes</li>
                <li>Diverse wildlife including birds of prey</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                History of El Chorro
              </h3>
              <p className="mb-2">
                The original Caminito del Rey was built in the 1920s to provide
                access to the hydroelectric power station in the gorge. King
                Alfonso XIII inaugurated it in 1921, giving it the name
                &quot;King&apos;s Little Path&quot;.
              </p>
              <p>
                The via ferrata was built in 2018, taking advantage of this
                incredible natural environment to create one of the most
                exciting adventure activities in Andalusia.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Combine Your Visit</h3>
              <p className="mb-2">Make the most of your trip to El Chorro:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Caminito del Rey:</strong> The famous walkway through
                  the gorge (book separately)
                </li>
                <li>
                  <strong>Lunch in El Chorro:</strong> Several restaurants near
                  the station
                </li>
                <li>
                  <strong>Stay overnight:</strong> Rural accommodations in El
                  Chorro, Álora, or Ardales
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger>Compare Our Via Ferratas</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              We offer three via ferratas in Málaga province. Here&apos;s how
              they compare:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2 text-left">Feature</th>
                    <th className="border p-2 text-left">Ronda</th>
                    <th className="border p-2 text-left">Casares</th>
                    <th className="border p-2 text-left">El Chorro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Difficulty</td>
                    <td className="border p-2">K2 (Easy)</td>
                    <td className="border p-2">K2-K3 (Medium)</td>
                    <td className="border p-2 font-semibold">
                      K3 (Medium-High)
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2">Elevation</td>
                    <td className="border p-2">80m</td>
                    <td className="border p-2">150m</td>
                    <td className="border p-2 font-semibold">250m</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Zipline</td>
                    <td className="border p-2">No</td>
                    <td className="border p-2">No</td>
                    <td className="border p-2 font-semibold">Yes (35m)</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Bridges</td>
                    <td className="border p-2">1</td>
                    <td className="border p-2">2</td>
                    <td className="border p-2 font-semibold">2</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Min. age</td>
                    <td className="border p-2">7 years</td>
                    <td className="border p-2">10 years</td>
                    <td className="border p-2">14 years</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Duration</td>
                    <td className="border p-2">2-3h</td>
                    <td className="border p-2">3h</td>
                    <td className="border p-2">3-4h</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Best for</td>
                    <td className="border p-2">Families/Beginners</td>
                    <td className="border p-2">Intermediate</td>
                    <td className="border p-2 font-semibold">
                      Adventure seekers
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-sky-50 p-4 rounded-lg mt-4">
              <p className="text-sky-800">
                <strong>🎯 Our recommendation:</strong> El Chorro is the most
                complete and exciting via ferrata we offer. If you&apos;re
                looking for the ultimate via ferrata experience in Andalusia,
                this is it!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default ElChorroDescription;
