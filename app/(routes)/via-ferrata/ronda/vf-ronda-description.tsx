import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const VfRondaDescription = () => {
  return (
    <>
      {/* Hero Description */}
      <div className="flex flex-col gap-4">
        <p className="text-gray-700 leading-relaxed">
          The Via Ferrata Tajo de Ronda is a{" "}
          <strong>family-friendly adventure</strong> located at the foot of the
          iconic Puente Nuevo bridge. Enjoy spectacular views of Ronda&apos;s
          famous 100-metre deep gorge while climbing the historic iron steps.
        </p>

        <p className="text-gray-700 leading-relaxed">
          This via ferrata is <strong>perfect for beginners</strong> and
          families with children from 7 years old. The route follows the
          original paths built by workers in 1920 to secure the cliffs near the
          old flour mills — a unique piece of Ronda&apos;s history!
        </p>

        <p className="text-gray-700 leading-relaxed">
          Climb through vertical walls using iron steps and steel cables while
          enjoying panoramic views of Puente Nuevo, the Guadalevín river, and
          the stunning Hoya de Ronda valley. An unforgettable experience in one
          of Spain&apos;s most visited destinations!
        </p>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-900 mb-3">
            Activity Highlights:
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-violet-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Difficulty:</strong> K1-K2 (Easy - Beginner friendly)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Route length:</strong> ~75m equipped (900m total)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Elevation gain:</strong> 70-80m
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Routes:</strong> 2 (La Sevillana + Escalerilla de la
                Muerte)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Min. age:</strong> 7 years old
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Duration:</strong> 2-3 hours (both routes)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Best season:</strong> All year round
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Location:</strong> Tajo de Ronda, Málaga
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-violet-50 border-l-4 border-violet-500 p-4 rounded-r-lg mt-2">
          <p className="text-violet-800">
            <strong>👨‍👩‍👧‍👦 Perfect for families:</strong> This is the ideal via
            ferrata to introduce children and beginners to the sport, with
            incredible views of Ronda&apos;s most iconic landmark — the Puente
            Nuevo!
          </p>
        </div>
      </div>

      {/* Accordion Sections */}
      <Accordion type="single" collapsible className="mt-6">
        <AccordionItem value="item-1">
          <AccordionTrigger>Description</AccordionTrigger>
          <AccordionContent className="flex flex-col text-gray-600 gap-y-4">
            <h3 className="text-lg font-semibold text-gray-950 my-2">
              The Perfect Introduction to Via Ferrata
            </h3>
            <p>
              The Via Ferrata Tajo de Ronda is an adventure itinerary where you
              can traverse vertical walls with the help of iron steps and steel
              cables. At all times you&apos;ll be secured with your ferrata
              equipment to the lifeline installed along the entire route.
            </p>
            <p>
              This activity actually consists of two via ferratas that can be
              done separately or combined into one circular route. Both share
              the same access and return, with their exits at the same point —
              the Mirador del Tajo de Ronda viewpoint.
            </p>

            <h3 className="text-lg font-semibold text-gray-950 my-2">
              Two Routes, One Adventure
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Route 1: La Sevillana (K1-K2)
                </h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Length: 74m equipped</li>
                  <li>Elevation: 56m</li>
                  <li>Time: ~30 minutes</li>
                  <li>Features: 2 small overhangs, no bridges</li>
                  <li>The easier of the two routes</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Route 2: Escalerilla de la Muerte (K1-K2)
                </h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Slightly longer and more vertical</li>
                  <li>Time: ~20 minutes</li>
                  <li>
                    Features: Staircase sections combined with ferrata steps
                  </li>
                  <li>More challenging but still beginner-friendly</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-950 my-2">
              Spectacular Views
            </h3>
            <p className="mb-2">
              Both routes offer incredible views of the most visited site in
              Málaga province: the Tajo de Ronda — a gorge approximately 100
              metres deep carved by the Guadalevín river — and the famous Puente
              Nuevo bridge, a true emblem of this historic city.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>History</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Origins: From Workers&apos; Path to Adventure Route
              </h3>
              <p className="mb-2">
                The origins of the Via Ferrata Tajo de Ronda date back to{" "}
                <strong>1917</strong>, when a terrible earthquake struck the
                area. The tremor caused rockfalls that endangered the flour
                mills of the electric company located in the gorge.
              </p>
              <p className="mb-2">
                In <strong>1920</strong>, Sevillian workers (hence the name
                &quot;La Sevillana&quot;) built the iron steps and walls to
                secure the terrain and prevent further rockfalls. These were the
                vertical shortcuts that local farmers used to reach the town
                more quickly.
              </p>
              <p>
                In <strong>2010</strong>, the city of Ronda invested in active
                tourism, adding modern safety equipment and cables to transform
                this historic path into an official via ferrata — making this
                piece of history accessible to everyone!
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">The Old Mills</h3>
              <p>
                The iron steps are supported largely on walls built to secure
                the terrain around the ruins of old flour mills, which were
                abandoned after the 1917 earthquake. One of the via ferratas
                starts from the ruins of these mills — you&apos;ll actually walk
                through an old mill building to access Route 2!
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mt-2">
              <p className="text-amber-800">
                <strong>🏛️ Historical significance:</strong> These are
                considered the original &quot;ferratas of Málaga&quot; — built
                over 100 years ago and still in use today!
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
                <li>Via ferrata kit with energy dissipator (zipper)</li>
                <li>Professional certified mountain guide</li>
                <li>Civil liability and accident insurance</li>
                <li>Photo report!</li>
                <li>Snack and drink at the end</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">What You Need</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Comfortable closed shoes</strong> — hiking boots or
                  trainers with good grip
                </li>
                <li>
                  <strong>Comfortable clothing</strong> that allows movement
                </li>
                <li>
                  <strong>Small backpack</strong> for personal items
                </li>
                <li>
                  <strong>Water</strong> — especially in warm months
                </li>
                <li>
                  <strong>Sunscreen and sunglasses</strong>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-2">
              <p className="text-blue-800">
                <strong>📸 Bonus:</strong> Your guide will take photos
                throughout the activity so you can remember this amazing
                experience!
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
                <strong>Calle Marbella</strong>, Ronda (near Cepsa San Francisco
                petrol station)
              </p>
              <p className="mb-4">
                Typical meeting time: <strong>10:00 AM</strong>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Access to the Via Ferrata
              </h3>
              <p className="mb-2">Two options to reach the start:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>From the meeting point:</strong> Short walk down to
                  the via ferrata entrance (~15 min)
                </li>
                <li>
                  <strong>From Puente Nuevo:</strong> Walk down from Plaza de
                  María Auxiliadora via Cuesta de la Risa to the Mirador del
                  Tajo
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Schedule</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>10:00 AM:</strong> Meeting point
                </li>
                <li>
                  <strong>15 min:</strong> Walk to via ferrata start
                </li>
                <li>
                  <strong>Equipment fitting</strong> and safety briefing
                </li>
                <li>
                  <strong>1-3 hours:</strong> Via ferrata (one or both routes)
                </li>
                <li>
                  <strong>Return:</strong> 5 minutes back to viewpoint
                </li>
                <li>
                  <strong>End:</strong> Between 13:00-14:00
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Distances from major cities
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>From Marbella:</strong> ~1 hour
                </li>
                <li>
                  <strong>From Málaga city:</strong> ~1 hour 15 minutes
                </li>
                <li>
                  <strong>From Seville:</strong> ~1 hour 30 minutes
                </li>
                <li>
                  <strong>From Jerez de la Frontera:</strong> ~1 hour 15 minutes
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg mt-2">
              <p className="text-green-800">
                <strong>🅿️ Parking:</strong> Plenty of parking options in Ronda,
                both public and private. The via ferrata viewpoints have nearby
                parking at Carretera de los Molinos.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Physical Requirements</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              The Via Ferrata Tajo de Ronda is very accessible and{" "}
              <strong>perfect for beginners</strong>. It has no highly technical
              sections, making it ideal for first-timers and families.
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-3">Requirements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Minimum age:</strong> 7 years old (accompanied by
                  adults)
                </li>
                <li>
                  <strong>Physical fitness:</strong> Basic level — no special
                  fitness required
                </li>
                <li>
                  <strong>No severe vertigo:</strong> You&apos;ll be at heights,
                  but with full safety equipment
                </li>
                <li>
                  <strong>No prior experience:</strong> Beginners welcome!
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                Who is this activity for?
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Families with children (7+ years)</li>
                <li>Beginners wanting to try via ferrata for the first time</li>
                <li>Couples looking for a unique date experience</li>
                <li>Groups of friends seeking adventure</li>
                <li>
                  Anyone visiting Ronda wanting more than just sightseeing
                </li>
                <li>Those who want to see Puente Nuevo from a unique angle</li>
              </ul>
            </div>

            <div className="bg-violet-50 p-4 rounded-lg mt-4">
              <p className="text-violet-800">
                <strong>✅ First time?</strong> Don&apos;t worry! Our guides are
                experienced with beginners and children. They&apos;ll explain
                everything step by step and stay with you throughout the entire
                route.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>Combine with Other Activities</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              The Via Ferrata Tajo de Ronda can be combined with other
              activities for a full adventure day!
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Canyoning Tajo de Ronda
              </h3>
              <p className="mb-4">
                Complete your adventure by descending the same gorge where you
                just climbed! The Tajo de Ronda canyon features a spectacular
                35-metre rappel under a waterfall, right beneath the Puente
                Nuevo. Check our <strong>Canyoning + Via Ferrata pack</strong>{" "}
                for the best price!
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Other Via Ferratas Nearby
              </h3>
              <p className="mb-2">
                The Serranía de Ronda has several via ferratas you can combine:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Via Ferrata Benaoján (K3):</strong> More technical,
                  beautiful setting
                </li>
                <li>
                  <strong>Via Ferrata Montejaque (K4):</strong> For experienced
                  climbers
                </li>
                <li>
                  <strong>Via Ferrata Atajate:</strong> Another option in the
                  area
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Explore Ronda</h3>
              <p className="mb-2">
                After your adventure, explore the beautiful city of Ronda:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Walk across the iconic Puente Nuevo bridge</li>
                <li>Visit the historic bullring</li>
                <li>Explore the Arab Baths</li>
                <li>Enjoy tapas in the old town</li>
                <li>Visit Casa del Rey Moro and hanging gardens</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg mt-4">
              <p className="text-orange-800">
                <strong>📦 Pack offer:</strong> Both Via Ferratas (La Sevillana
                + Escalerilla de la Muerte) for a special price of{" "}
                <strong>50€/person</strong>!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>The Tajo de Ronda</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">A Natural Wonder</h3>
              <p className="mb-2">
                The Tajo de Ronda is a gorge approximately{" "}
                <strong>100 metres deep</strong> that divides the city of Ronda
                in two. Carved over millions of years by the Guadalevín river,
                it&apos;s one of the most spectacular geological formations in
                Andalusia.
              </p>
              <p>
                The via ferrata is situated at the confluence of the limits
                between two natural parks: <strong>Sierra de Grazalema</strong>{" "}
                and <strong>Sierra de las Nieves</strong>.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">The Puente Nuevo</h3>
              <p className="mb-2">
                The famous New Bridge was completed in <strong>1793</strong>{" "}
                after 34 years of construction. At the time, it was one of the
                highest viaducts in the world. From the via ferrata, you&apos;ll
                enjoy views that most tourists never see — looking up at this
                engineering marvel from below!
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Wildlife</h3>
              <p className="mb-2">The gorge is home to various bird species:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Lesser kestrels</li>
                <li>Peregrine falcons</li>
                <li>Red-billed choughs</li>
                <li>Various swift species</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-2">
              <p className="text-blue-800">
                <strong>📍 Fun fact:</strong> The Tajo de Ronda is the most
                visited natural attraction in the entire province of Málaga!
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
                    <th className="border p-2 text-left font-semibold">
                      Ronda
                    </th>
                    <th className="border p-2 text-left">Casares</th>
                    <th className="border p-2 text-left">El Chorro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Difficulty</td>
                    <td className="border p-2 font-semibold">K1-K2 (Easy)</td>
                    <td className="border p-2">K2-K3 (Medium)</td>
                    <td className="border p-2">K3 (Medium-High)</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Elevation</td>
                    <td className="border p-2 font-semibold">70-80m</td>
                    <td className="border p-2">150m</td>
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
                    <td className="border p-2">2</td>
                    <td className="border p-2">2</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Min. age</td>
                    <td className="border p-2 font-semibold">7 years</td>
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
                    <td className="border p-2 font-semibold">
                      Families/Beginners
                    </td>
                    <td className="border p-2">Intermediate</td>
                    <td className="border p-2">Adventure seekers</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Iconic view</td>
                    <td className="border p-2 font-semibold">Puente Nuevo</td>
                    <td className="border p-2">Africa/Gibraltar</td>
                    <td className="border p-2">El Chorro reservoir</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-violet-50 p-4 rounded-lg mt-4">
              <p className="text-violet-800">
                <strong>🎯 Our recommendation:</strong> Via Ferrata Ronda is the
                perfect starting point for families and beginners. The views of
                Puente Nuevo are absolutely spectacular, and the easy difficulty
                means everyone can enjoy it!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default VfRondaDescription;
