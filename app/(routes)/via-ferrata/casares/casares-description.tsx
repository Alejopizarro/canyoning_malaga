import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CasaresDescription = () => {
  return (
    <>
      {/* Hero Description */}
      <div className="flex flex-col gap-4">
        <p className="text-gray-700 leading-relaxed">
          The Via Ferrata Casares is one of the{" "}
          <strong>most scenic via ferratas in southern Spain</strong>, offering
          breathtaking panoramic views of the Mediterranean, the African
          coastline, and the iconic Rock of Gibraltar!
        </p>

        <p className="text-gray-700 leading-relaxed">
          Located on the limestone wall of Tajo de La Planá, this intermediate
          level adventure features <strong>two monkey bridges</strong> (25m and
          12m), vertical ascents, and aerial traverses — ending at the ruins of
          the historic Casares Castle at the highest point of the village.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Only 35 minutes from Marbella, this is the perfect adventure for those
          seeking an adrenaline rush combined with stunning views. Finish your
          climb with traditional{" "}
          <strong>tapas in the charming village square</strong>!
        </p>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-900 mb-3">
            Activity Highlights:
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary-dark font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Difficulty:</strong> K2-K3 (Moderate)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-dark font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Route length:</strong> ~180m total (two routes)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-dark font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Elevation gain:</strong> ~150m
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-dark font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Monkey bridges:</strong> 2 (25m + 12m)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-dark font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Min. age:</strong> 10-12 years (min. height 155cm)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-dark font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Duration:</strong> 2.5-3 hours
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-dark font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Best season:</strong> All year round
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-dark font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Location:</strong> Casares, Málaga (35 min from
                Marbella)
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-primary-light border-l-4 border-primary0 p-4 rounded-r-lg mt-2">
          <p className="text-primary-dark">
            <strong>🌍 Incredible views:</strong> On clear days, you can see the
            African coastline and the Rock of Gibraltar from this via ferrata —
            a truly unique perspective!
          </p>
        </div>
      </div>

      {/* Accordion Sections */}
      <Accordion type="single" collapsible className="mt-6">
        <AccordionItem value="item-1">
          <AccordionTrigger>Description</AccordionTrigger>
          <AccordionContent className="flex flex-col text-gray-600 gap-y-4">
            <h3 className="text-lg font-semibold text-gray-950 my-2">
              A Scenic Adventure to Casares Castle
            </h3>
            <p>
              The Via Ferrata Casares (also known as Via Ferrata La Planá) is
              located on the limestone wall of Tajo de La Planá, where the ruins
              of the historic Casares Castle stand. The route ends at the
              highest point of the village, inside the castle walls!
            </p>
            <p>
              This is a wonderful medium-level via ferrata where you will find
              vertical ascents, horizontal traverses, and two exciting monkey
              bridges — all with magnificent views of Gibraltar and the African
              coast.
            </p>

            <h3 className="text-lg font-semibold text-gray-950 my-2">
              Two Routes Available
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Route 1: La Planá I (K3)
                </h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Length: ~75m equipped</li>
                  <li>Features: 2 overhangs, more aerial sections</li>
                  <li>Time: ~35 minutes</li>
                  <li>The more challenging of the two routes</li>
                  <li>Starts with a vertical climb to good height</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Route 2: La Planá II (K2)
                </h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Slightly easier than Route 1</li>
                  <li>Features: Monkey bridges, lateral traverses</li>
                  <li>Both routes end at the castle ruins</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-950 my-2">
              The Route Experience
            </h3>
            <p className="mb-2">
              Divided into two distinct sections, the climb offers an
              exhilarating mix of:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Vertical ascents up limestone walls</li>
              <li>Two monkey bridges (25m and 12m long)</li>
              <li>Horizontal traverses along the rock face</li>
              <li>Overhangs that provide an extra thrill</li>
              <li>Breathtaking panoramic views throughout</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>The Views</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              Due to its unique location and orientation, the Via Ferrata
              Casares offers some of the most spectacular views of any via
              ferrata in Andalusia!
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                What You&apos;ll See
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>The Rock of Gibraltar:</strong> The iconic landmark
                  visible on clear days
                </li>
                <li>
                  <strong>African coastline:</strong> See Morocco across the
                  Strait of Gibraltar!
                </li>
                <li>
                  <strong>The Mediterranean:</strong> Stunning views of the sea
                </li>
                <li>
                  <strong>Sierra Bermeja:</strong> The beautiful red mountain
                  range
                </li>
                <li>
                  <strong>Málaga coast:</strong> Panoramic views of the Costa
                  del Sol
                </li>
                <li>
                  <strong>Casares village:</strong> The picturesque white
                  village below
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Best Conditions</h3>
              <p>
                The clearest views are typically in the morning or after rain
                has cleared the air. Autumn and winter often offer the best
                visibility for seeing Africa across the strait!
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-2">
              <p className="text-blue-800">
                <strong>📸 Photo tip:</strong> Bring your camera! The views from
                the monkey bridges are particularly spectacular — you&apos;ll
                want to capture this unique perspective.
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
                <li>Professional certified guide</li>
                <li>Civil liability and accident insurance</li>
                <li>Photo and video report!</li>
                <li>Snack and drink at the end</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">What You Need</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Comfortable sports shoes</strong> — preferably hiking
                  boots with good grip
                </li>
                <li>
                  <strong>Light, comfortable clothing</strong> that allows
                  movement
                </li>
                <li>
                  <strong>Water bottle</strong> or isotonic drink
                </li>
                <li>
                  <strong>Energy snacks</strong> — nuts, chocolate, energy bars
                </li>
                <li>
                  <strong>Sunscreen and sunglasses</strong>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mt-2">
              <p className="text-yellow-800">
                <strong>👟 Footwear note:</strong> Good shoes with proper grip
                are essential for the limestone rock. Hiking boots are ideal,
                but sturdy trainers will work too.
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
                Meeting point in <strong>Casares village</strong>. Exact
                location will be confirmed upon booking.
              </p>
              <p className="mb-4">
                <strong>Schedule options:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Winter:</strong> 10:30 AM - 1:00 PM
                </li>
                <li>
                  <strong>Summer:</strong> 5:30 PM - 8:00 PM (to avoid midday
                  heat)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Schedule</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Meeting:</strong> At designated point in Casares
                </li>
                <li>
                  <strong>10 min:</strong> Walk to via ferrata start
                </li>
                <li>
                  <strong>Equipment fitting</strong> and safety briefing
                </li>
                <li>
                  <strong>2-2.5 hours:</strong> Via ferrata route
                </li>
                <li>
                  <strong>10 min:</strong> Return to village
                </li>
                <li>
                  <strong>Tapas time!</strong> Celebrate in the village square
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Distances from major cities
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>From Marbella:</strong> ~35 minutes
                </li>
                <li>
                  <strong>From Estepona:</strong> ~25 minutes
                </li>
                <li>
                  <strong>From Málaga city:</strong> ~1 hour 15 minutes
                </li>
                <li>
                  <strong>From Gibraltar:</strong> ~45 minutes
                </li>
                <li>
                  <strong>From Ronda:</strong> ~45 minutes
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg mt-2">
              <p className="text-green-800">
                <strong>🍽️ After the adventure:</strong> The via ferrata ends
                right at the castle ruins. From there, walk down to the village
                square for well-deserved tapas — Russian salad and a cold drink
                are the perfect way to celebrate!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Physical Requirements</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              The Via Ferrata Casares is rated as{" "}
              <strong>moderate difficulty (K2-K3)</strong>. It requires a good
              level of physical fitness and agility, but no previous climbing
              experience is needed.
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-3">Requirements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Minimum age:</strong> 10-12 years old
                </li>
                <li>
                  <strong>Minimum height:</strong> 155cm (for safety equipment
                  fit)
                </li>
                <li>
                  <strong>Physical fitness:</strong> Good general condition,
                  regular sports activity recommended
                </li>
                <li>
                  <strong>No severe vertigo:</strong> Some sections are quite
                  high and exposed
                </li>
                <li>
                  <strong>Agility:</strong> Ability to move comfortably on
                  vertical terrain
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                Who is this activity for?
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Adventurous beginners with good fitness</li>
                <li>Families with older children (12+ recommended)</li>
                <li>Groups of friends seeking an exciting experience</li>
                <li>Team building events</li>
                <li>Anyone wanting to get into via ferrata sport</li>
                <li>
                  Visitors looking for unique views of Gibraltar and Africa
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mt-4">
              <p className="text-amber-800">
                <strong>⚠️ Important:</strong> This via ferrata is not
                recommended for those with severe fear of heights, as some
                sections are quite exposed. If unsure, consider starting with
                the easier Via Ferrata Ronda (K1-K2) first.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>Casares Village</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">
                A Charming White Village
              </h3>
              <p className="mb-2">
                Casares is one of the most picturesque white villages (pueblos
                blancos) in Andalusia. Perched on a hillside between Sierra
                Bermeja and Sierra Crestillina, it offers stunning views and
                authentic Andalusian charm.
              </p>
              <p>
                The village is famous for its whitewashed houses cascading down
                the hillside, crowned by the ruins of the ancient castle where
                your via ferrata adventure ends!
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                The Castle of Casares
              </h3>
              <p>
                The Casares Castle dates back to the 13th century and sits at
                the highest point of the village. The via ferrata takes you
                directly to these historic ruins, offering a unique way to
                &quot;assault&quot; the castle walls — just like medieval
                soldiers, but with modern safety equipment!
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                Things to Do in Casares
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Explore the narrow cobblestone streets</li>
                <li>Visit the castle ruins (where you&apos;ll finish!)</li>
                <li>Enjoy tapas in the village square</li>
                <li>Visit the church of La Encarnación</li>
                <li>Take photos of the stunning views</li>
                <li>Browse local artisan shops</li>
              </ul>
            </div>

            <div className="bg-primary-light p-4 rounded-lg mt-2">
              <p className="text-primary-dark">
                <strong>🍷 Local tip:</strong> After your climb, head to one of
                the bars in the Plaza de España for traditional tapas. The
                &quot;ensaladilla rusa&quot; (Russian salad) and local wines are
                particularly good!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>Combine with Other Activities</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              The Via Ferrata Casares can easily be combined with other
              adventures in the beautiful Genal Valley and surrounding area!
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Other Via Ferratas Nearby
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Via Ferrata Ronda (K1-K2):</strong> ~45 min away,
                  easier option with Puente Nuevo views
                </li>
                <li>
                  <strong>Via Ferrata El Chorro (K3):</strong> ~1 hour away,
                  more challenging with zipline
                </li>
                <li>
                  <strong>Via Ferrata Benaoján (K3):</strong> In the Genal
                  Valley, technical route
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Canyoning Options</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Sima del Diablo:</strong> Near Júzcar (Smurfs Village)
                </li>
                <li>
                  <strong>Tajo de Ronda:</strong> Combine with Via Ferrata Ronda
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Explore the Area</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Visit other white villages: Gaucín, Genalguacil, Júzcar</li>
                <li>Explore Sierra Bermeja natural park</li>
                <li>Day trip to Ronda (~45 min)</li>
                <li>Beach time in Estepona (~25 min)</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg mt-4">
              <p className="text-orange-800">
                <strong>📦 Adventure packs:</strong> Ask about our Canyoning +
                Via Ferrata combination packs for the best value!
              </p>
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
                    <th className="border p-2 text-left font-semibold">
                      Casares
                    </th>
                    <th className="border p-2 text-left">El Chorro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Difficulty</td>
                    <td className="border p-2">K1-K2 (Easy)</td>
                    <td className="border p-2 font-semibold">K2-K3 (Medium)</td>
                    <td className="border p-2">K3 (Medium-High)</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Elevation</td>
                    <td className="border p-2">70-80m</td>
                    <td className="border p-2 font-semibold">~150m</td>
                    <td className="border p-2">250m</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Zipline</td>
                    <td className="border p-2">No</td>
                    <td className="border p-2">No</td>
                    <td className="border p-2">Yes (35m)</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Bridges</td>
                    <td className="border p-2">No</td>
                    <td className="border p-2 font-semibold">
                      2 monkey bridges
                    </td>
                    <td className="border p-2">2 (Tibetan + Monkey)</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Min. age</td>
                    <td className="border p-2">7 years</td>
                    <td className="border p-2 font-semibold">10-12 years</td>
                    <td className="border p-2">14 years</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Duration</td>
                    <td className="border p-2">2-3h</td>
                    <td className="border p-2">2.5-3h</td>
                    <td className="border p-2">3-4h</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Best for</td>
                    <td className="border p-2">Families/Beginners</td>
                    <td className="border p-2 font-semibold">Intermediate</td>
                    <td className="border p-2">Adventure seekers</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Iconic view</td>
                    <td className="border p-2">Puente Nuevo</td>
                    <td className="border p-2 font-semibold">
                      Africa/Gibraltar
                    </td>
                    <td className="border p-2">El Chorro reservoir</td>
                  </tr>
                  <tr>
                    <td className="border p-2">From Marbella</td>
                    <td className="border p-2">1 hour</td>
                    <td className="border p-2 font-semibold">35 min</td>
                    <td className="border p-2">1h 15min</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-primary-light p-4 rounded-lg mt-4">
              <p className="text-primary-dark">
                <strong>🎯 Our recommendation:</strong> Via Ferrata Casares is
                the perfect &quot;middle ground&quot; — more challenging than
                Ronda but not as demanding as El Chorro. Plus, it&apos;s the
                closest to Marbella and offers those incredible views of Africa!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default CasaresDescription;
