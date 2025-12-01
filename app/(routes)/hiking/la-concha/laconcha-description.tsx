import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LaConchaDescription = () => {
  return (
    <>
      {/* Hero Description */}
      <div className="flex flex-col gap-4">
        <p className="text-gray-700 leading-relaxed">
          Conquer <strong>La Concha (1,215m)</strong>, the iconic peak that
          dominates Marbella&apos;s skyline and the most famous mountain in
          Sierra Blanca. This challenging trek rewards you with the{" "}
          <strong>most spectacular panoramic views in Andalusia</strong>!
        </p>

        <p className="text-gray-700 leading-relaxed">
          Known locally as the{" "}
          <strong>&quot;Queen and Protector of Marbella&quot;</strong>, La
          Concha creates the city&apos;s unique microclimate, shielding it from
          harsh winds and ensuring those famous sunny days. The mountain&apos;s
          name means &quot;shell&quot; in Spanish — a reference to its
          distinctive shape.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Our guided trek takes you through diverse forests of pine, eucalyptus,
          olive, and chestnut trees before ascending to dramatic ridge walks and
          the thrilling <strong>Camino del Lobo</strong> (Path of the Wolf). On
          clear days, enjoy views stretching to Gibraltar and North Africa!
        </p>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-900 mb-3">
            Activity Highlights:
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-emerald-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Summit elevation:</strong> 1,215m (3,986 ft)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Distance:</strong> ~14km round trip (Juanar route)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Elevation gain:</strong> ~500m
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Difficulty:</strong> Moderate to Challenging
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Duration:</strong> 5-6 hours (round trip)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Best season:</strong> Autumn, Winter, Spring
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Min. age:</strong> 12 years (with good fitness)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Location:</strong> Sierra Blanca, 20 min from Marbella
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg mt-2">
          <p className="text-emerald-800">
            <strong>🏔️ Bucket list hike:</strong> La Concha is one of the most
            popular hiking destinations in Spain. Standing on the summit with
            views to Gibraltar and Africa is an unforgettable experience!
          </p>
        </div>
      </div>

      {/* Accordion Sections */}
      <Accordion type="single" collapsible className="mt-6">
        <AccordionItem value="item-1">
          <AccordionTrigger>Description</AccordionTrigger>
          <AccordionContent className="flex flex-col text-gray-600 gap-y-4">
            <h3 className="text-lg font-semibold text-gray-950 my-2">
              Marbella&apos;s Most Iconic Landmark
            </h3>
            <p>
              If you&apos;re looking for the best hiking experience in Marbella,
              conquering the La Concha summit is a must. Rising high above the
              city at 1,215 meters (3,986 feet), this iconic peak is part of the
              Sierra Blanca range and offers a true adventure for nature and
              mountain lovers.
            </p>
            <p>
              La Concha is located within the recently designated{" "}
              <strong>Sierra de las Nieves National Park (2021)</strong> and
              UNESCO Biosphere Reserve — making this trek an opportunity to
              explore one of the three National Parks in Andalusia!
            </p>

            <h3 className="text-lg font-semibold text-gray-950 my-2">
              The Route
            </h3>
            <p>
              Our journey begins in the peaceful <strong>Juanar forest</strong>,
              where the trail winds through lush pine, eucalyptus, olive, and
              chestnut groves. After about 40 minutes of hiking under the
              refreshing shade and aromatic scents of the trees, we start the
              first ascent to the main ridge of Sierra Blanca.
            </p>
            <p>
              From here, the scenery opens up to reveal sweeping views of the
              Málaga coastline, Cádiz, Gibraltar, and — on the clearest days —
              the distant mountains of North Africa.
            </p>

            <h3 className="text-lg font-semibold text-gray-950 my-2">
              The Thrilling Sections
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  El Salto del Lobo (The Wolf&apos;s Leap)
                </h4>
                <p>
                  The path continues towards this dramatic section, crossing a
                  short exposed traverse equipped with secure chains installed
                  by Marbella Firefighters. The narrow ledge (about 50cm wide)
                  adds a touch of thrill to the experience!
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Camino del Lobo (Path of the Wolf)
                </h4>
                <p>
                  This is the best part of the hike! The ridge narrows with lots
                  of small twists and turns, requiring some light scrambling.
                  Incredible &quot;bird&apos;s eye&quot; views in all directions
                  — to the north the green valleys near Istán, to the south the
                  sparkling Mediterranean Sea.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  El Escalón (The Step)
                </h4>
                <p>
                  Another section with chains to help navigate this delicate
                  passage. After this, only about 30 minutes remain to reach the
                  summit!
                </p>
              </div>
            </div>

            <p className="mt-4">
              After approximately 3.5 hours of effort, we&apos;ll stand on the
              peak of La Concha, rewarded with one of the most stunning
              panoramas in all of Andalusia. A bench at the summit invites you
              to rest and enjoy your lunch with the world at your feet!
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>The Views</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              The views from La Concha are legendary — and they start early on
              the hike, not just at the summit!
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                What You&apos;ll See
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Marbella & Puerto Banús:</strong> The entire Costa del
                  Sol spread below you
                </li>
                <li>
                  <strong>The Mediterranean Sea:</strong> Sparkling blue
                  stretching to the horizon
                </li>
                <li>
                  <strong>The Rock of Gibraltar:</strong> Visible on the western
                  skyline
                </li>
                <li>
                  <strong>North Africa:</strong> On clear days, the mountains of
                  Morocco!
                </li>
                <li>
                  <strong>Sierra de las Nieves:</strong> The snow-capped peaks
                  to the north
                </li>
                <li>
                  <strong>Torrecilla (1,919m):</strong> The highest peak in
                  Western Andalusia
                </li>
                <li>
                  <strong>Istán Reservoir:</strong> Stunning views to the west
                </li>
                <li>
                  <strong>Cerro Lastonar (1,279m):</strong> The highest peak in
                  Sierra Blanca
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Key Viewpoints</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Mirador del Corzo:</strong> Early on the trail, views
                  over the coast
                </li>
                <li>
                  <strong>Puerto de las Allanas:</strong> Where the ridge opens
                  up
                </li>
                <li>
                  <strong>Mirador de la Concha:</strong> Great rest spot before
                  the final push
                </li>
                <li>
                  <strong>Pico de La Concha:</strong> The summit — 360°
                  panorama!
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-2">
              <p className="text-blue-800">
                <strong>📸 Best photo ops:</strong> The views from the Camino
                del Lobo ridge are particularly spectacular — you&apos;ll want
                to capture the dramatic drops on both sides and the sea/mountain
                contrast!
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
                <li>Professional bilingual guide (English/Spanish)</li>
                <li>Small backpack</li>
                <li>Civil liability and accident insurance</li>
                <li>Full photo report!</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                What You Need to Bring
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Water:</strong> Minimum 1 litre per person
                  (essential!)
                </li>
                <li>
                  <strong>Snacks:</strong> Fruit, nuts, energy bars, sandwiches
                </li>
                <li>
                  <strong>Hiking/trekking shoes:</strong> Sturdy with good grip
                  — no trainers!
                </li>
                <li>
                  <strong>Comfortable clothes:</strong> Breathable layers
                </li>
                <li>
                  <strong>Light jacket:</strong> It can be windy/cold at the top
                </li>
                <li>
                  <strong>Cap and sunscreen:</strong> Large parts are exposed to
                  sun
                </li>
                <li>
                  <strong>Camera/phone:</strong> You&apos;ll want photos!
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mt-2">
              <p className="text-amber-800">
                <strong>👟 Footwear is crucial:</strong> The terrain is rocky
                and steep in sections. Proper hiking boots with good grip and
                ankle support are strongly recommended. The rocky trail can be
                unforgiving on standard trainers!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Meeting Point & Logistics</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Starting Point</h3>
              <p className="mb-2">
                <strong>Refugio de Juanar</strong>, Sierra Blanca
              </p>
              <p className="mb-4">
                A charming mountain lodge/hotel set in the forest at ~760m
                elevation. Despite the name &quot;refugio&quot; (refuge),
                it&apos;s actually a nice hotel where you can enjoy a cold beer
                after your hike!
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">How to Get There</h3>
              <p className="mb-2">
                Only <strong>20 minutes drive from Marbella centre</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Take the A-355 towards Ojén</li>
                <li>Continue past Ojén village</li>
                <li>Turn left at the &quot;Refugio de Juanar&quot; sign</li>
                <li>Follow the narrow mountain road ~5km to the parking</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Schedule</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Winter schedule:</strong> 9:30 AM - 3:30 PM
                </li>
                <li>
                  <strong>Summer schedule:</strong> 5:00 PM - 11:30 PM (sunset
                  hike returning by moonlight/headlamps!)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Timeline</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>40 min:</strong> Forest walk through Juanar
                </li>
                <li>
                  <strong>40 min:</strong> Ascent to Puerto de las Allanas
                </li>
                <li>
                  <strong>1h:</strong> Ridge walk to Salto del Lobo
                </li>
                <li>
                  <strong>1h:</strong> Final ascent via Camino del Lobo
                </li>
                <li>
                  <strong>30 min:</strong> Summit time, lunch, photos!
                </li>
                <li>
                  <strong>2.5-3h:</strong> Descent (same route)
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-4 rounded-lg mt-2">
              <p className="text-red-800">
                <strong>🅿️ Parking warning:</strong> On weekends, the parking
                fills up FAST! Arrive early (before 9 AM) or you might have to
                park 5km down the road — adding 4 hours to your hike!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Physical Requirements</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              La Concha is a <strong>challenging hike</strong> that should not
              be underestimated. While it&apos;s achievable for determined
              hikers of all levels, it requires good physical preparation.
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-3">Requirements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Fitness level:</strong> Good general condition —
                  should be comfortable walking 10,000+ steps at a good pace
                </li>
                <li>
                  <strong>No severe vertigo:</strong> Several exposed sections
                  with steep drops
                </li>
                <li>
                  <strong>No major knee/back issues:</strong> Steep descents can
                  be hard on joints
                </li>
                <li>
                  <strong>Some hiking experience:</strong> Not recommended for
                  complete beginners
                </li>
                <li>
                  <strong>Minimum age:</strong> ~12 years with good fitness
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Difficulty Factors</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Steep ascents and descents</li>
                <li>Rocky, uneven terrain</li>
                <li>Exposed sections with chains</li>
                <li>Light scrambling required near summit</li>
                <li>Path can be indistinct in places</li>
                <li>Long distance (~14km round trip)</li>
                <li>High UV exposure — limited shade after first hour</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mt-4">
              <p className="text-amber-800">
                <strong>⚠️ Reality check:</strong> Every year there are
                accidents, rescues of lost hikers, and heat stroke victims on La
                Concha. This is NOT a casual stroll — respect the mountain!
                Having a professional guide significantly increases safety.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                If La Concha Seems Too Much...
              </h3>
              <p className="mb-2">
                Consider these easier alternatives in the same area:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Mirador del Macho Montés:</strong> Easy 1.3km walk
                  through olive groves, great views — perfect for families
                </li>
                <li>
                  <strong>Cruz de Juanar:</strong> About 1 hour each way, good
                  training hike
                </li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>Best Season & Weather</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">When to Hike</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-green-600">✓ Autumn:</strong> Ideal
                  conditions, comfortable temperatures, clear views
                </li>
                <li>
                  <strong className="text-green-600">✓ Winter:</strong> Soft
                  climate due to coastal influence, no extreme cold
                </li>
                <li>
                  <strong className="text-green-600">✓ Spring:</strong>{" "}
                  Beautiful wildflowers (May-June), rosemary in bloom
                </li>
                <li>
                  <strong className="text-red-600">✗ Summer:</strong> NOT
                  RECOMMENDED — extreme heat (35°C+), high UV radiation, health
                  services advise against it!
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Summer Alternative</h3>
              <p>
                In summer, we offer <strong>sunset hikes</strong> starting at
                5:00 PM, returning by moonlight or with headlamps when
                temperatures are optimal. This is actually a magical experience
                — watching the sunset from the ridge!
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Weather Warnings</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>No clouds or strong wind:</strong> Essential for a
                  safe hike
                </li>
                <li>
                  <strong>Wet conditions:</strong> The rocky ridge can be
                  slippery and dangerous
                </li>
                <li>
                  <strong>Rain possible:</strong> November to March
                </li>
                <li>Always check the weather forecast before heading out!</li>
              </ul>
            </div>

            <div className="bg-red-50 p-4 rounded-lg mt-2">
              <p className="text-red-800">
                <strong>🌡️ Heat warning:</strong> From mid-May to end of
                September, temperatures can exceed 35°C with high UV radiation.
                Local health services officially advise against hiking La Concha
                during these months. If you must go, start at dawn or do our
                sunset hike!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>
            Sierra de las Nieves National Park
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Spain&apos;s Newest National Park
              </h3>
              <p className="mb-2">
                La Concha sits within the <strong>Sierra de las Nieves</strong>,
                which was designated as Spain&apos;s newest National Park in{" "}
                <strong>2021</strong>. It&apos;s also a UNESCO Biosphere Reserve
                — making it one of only three National Parks in all of
                Andalusia!
              </p>
              <p>
                The park&apos;s name (&quot;Mountains of the Snows&quot;) comes
                from the snow that historically covered its highest peaks
                year-round. This snow was stored in &quot;neveros&quot; (snow
                wells) and distributed to villages across Málaga during summer.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Flora & Fauna</h3>
              <p className="mb-2">
                The Sierra Blanca is home to diverse wildlife:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Spanish Ibex (Cabra Montés):</strong> Often seen on
                  the ridges
                </li>
                <li>
                  <strong>Birds of prey:</strong> Eagles, vultures circling
                  above
                </li>
                <li>
                  <strong>Wild goats:</strong> Hopping along the rocky ridges
                </li>
                <li>
                  <strong>Fox:</strong> Occasional sightings
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                The Spanish Fir (Pinsapo)
              </h3>
              <p>
                The real star of these mountains is the{" "}
                <strong>Abies Pinsapo</strong> — a rare endemic fir tree
                discovered in 1837 that only grows in this region of the
                Mediterranean. While the main pinsapo forests are in the Sierra
                de las Nieves proper, hiking La Concha gives you access to this
                unique ecosystem.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg mt-2">
              <p className="text-green-800">
                <strong>🌲 Unique ecosystem:</strong> The forests you&apos;ll
                walk through include Monterrey pines, chestnuts, eucalyptus,
                olive groves, and Mediterranean scrub with rosemary, gorse, and
                ferns.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger>Combine with Other Activities</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              Make the most of your time in the Sierra Blanca area!
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-3">After Your Hike</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Cold beer at Refugio de Juanar:</strong> The perfect
                  reward after your summit!
                </li>
                <li>
                  <strong>Visit Ojén:</strong> Charming white village on the way
                  back
                </li>
                <li>
                  <strong>Marbella Old Town:</strong> Dinner and tapas in the
                  historic centre
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                Other Adventure Activities
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Canyoning Guadalmina:</strong> Water adventure near
                  Marbella (different day!)
                </li>
                <li>
                  <strong>Via Ferrata Casares:</strong> 35 min from Marbella
                </li>
                <li>
                  <strong>Canyoning Rio Verde:</strong> Our most popular canyon
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Alternative Hikes</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Cruz de Juanar:</strong> Easier alternative, ~1 hour
                  each way
                </li>
                <li>
                  <strong>Mirador del Macho Montés:</strong> Short family walk
                </li>
                <li>
                  <strong>Istán route:</strong> Steeper, more demanding approach
                  to La Concha
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg mt-4">
              <p className="text-orange-800">
                <strong>📦 Private tours:</strong> We offer private guided hikes
                for your group — perfect for families, corporate events, or
                those who want a more personalized experience. Contact us for
                availability!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default LaConchaDescription;
