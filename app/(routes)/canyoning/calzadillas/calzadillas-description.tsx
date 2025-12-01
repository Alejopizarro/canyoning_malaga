import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CalzadillasDescription = () => {
  return (
    <>
      {/* Hero Description */}
      <div className="flex flex-col gap-4">
        <p className="text-gray-700 leading-relaxed">
          Calzadillas is a beautiful canyon and{" "}
          <strong>the best option if you are near Seville</strong>. Located in
          the Natural Park of Sierra Norte de Sevilla (Almadén de la Plata), it
          is one of the <strong>few granite canyons in Andalusia</strong>.
        </p>

        <p className="text-gray-700 leading-relaxed">
          This canyon is specially recommended in{" "}
          <strong>autumn, winter and spring</strong>, when it has good water
          flow and the abseiling experience under the three spectacular
          waterfalls gets more exciting!
        </p>

        <p className="text-gray-700 leading-relaxed">
          Perfect whether you are a beginner in canyoning or if you have already
          tried other canyons and want to explore new routes. A privileged
          natural environment less than an hour from Seville city.
        </p>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-900 mb-3">
            Activity Highlights:
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-emerald-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Swimming level:</strong> 2/4
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Jumps:</strong> Several (3m, 5m, 8m - all optional)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Rappels:</strong> 3 (15m + 15m + 12m under waterfalls)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Slides:</strong> Shuttle slide option for extra
                adrenaline
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Min. age:</strong> 10 years old
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Duration:</strong> 3-4 hours
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Best season:</strong> Autumn, Winter & Spring
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Location:</strong> Almadén de la Plata, Sevilla
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg mt-2">
          <p className="text-emerald-800">
            <strong>🪨 Unique feature:</strong> One of the few granite canyons
            in Andalusia! The rock formations are completely different from the
            limestone canyons near Málaga and Granada.
          </p>
        </div>
      </div>

      {/* Accordion Sections */}
      <Accordion type="single" collapsible className="mt-6">
        <AccordionItem value="item-1">
          <AccordionTrigger>Description</AccordionTrigger>
          <AccordionContent className="flex flex-col text-gray-600 gap-y-4">
            <h3 className="text-lg font-semibold text-gray-950 my-2">
              The Best Canyoning Near Seville
            </h3>
            <p>
              Calzadillas canyon is a beautiful canyoning trip and the best
              option if you are located near Seville. It is recommended whether
              you are a beginner in this sport or if you have already tried
              other canyons.
            </p>
            <p>
              Located in the Natural Park of the Sierra Norte de Sevilla
              (Almadén de la Plata), near the historic route known as Vía de la
              Plata, this is a peculiar canyon as it is one of the few granite
              canyons in Andalusia.
            </p>

            <h3 className="text-lg font-semibold text-gray-950 my-2">
              Three Spectacular Waterfalls
            </h3>
            <p>
              In this privileged natural environment you will learn or
              strengthen your canyoning progression techniques through three
              impressive rappels under waterfalls:
            </p>
            <ul className="list-disc pl-6 space-y-1 my-2">
              <li>
                <strong>First rappel:</strong> 15 metres
              </li>
              <li>
                <strong>Second rappel:</strong> 15 metres
              </li>
              <li>
                <strong>Third rappel:</strong> 12 metres
              </li>
            </ul>
            <p>
              You&apos;ll also enjoy jumps of 3, 5 or 8 metres (all optional)
              and a shuttle sliding option if you want an extra adrenaline kick!
            </p>

            <h3 className="text-lg font-semibold text-gray-950 my-2">
              The Final Waterfall
            </h3>
            <p className="mb-2">
              The last waterfall drop is spectacular! Many visitors to the
              canyon take advantage of the final pool for a refreshing swim
              after completing the descent. It&apos;s the perfect way to
              celebrate your adventure!
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Best Season</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
              <p className="text-emerald-800">
                <strong>🍂 Best time to visit:</strong> This canyon is specially
                recommended in <strong>autumn, winter and spring</strong> when
                it has good water flow and the experience is most exciting!
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Why these seasons?</h3>
              <p className="mb-2">
                Unlike Mediterranean canyons that are best in summer,
                Calzadillas relies on seasonal rainfall to create its
                spectacular waterfalls:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Autumn:</strong> After the first autumn rains, the
                  waterfalls come alive with perfect flow
                </li>
                <li>
                  <strong>Winter:</strong> Consistent rainfall keeps water
                  levels ideal (wetsuit keeps you warm!)
                </li>
                <li>
                  <strong>Spring:</strong> Beautiful season with good flow and
                  pleasant temperatures
                </li>
                <li>
                  <strong>Summer:</strong> Can be done but waterfalls may have
                  reduced flow
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Weather Note</h3>
              <p>
                The Sierra Norte de Sevilla has a more Atlantic climate than
                coastal Andalusia, which means more rainfall and greener
                landscapes — perfect for canyoning! We monitor conditions
                closely and will advise on optimal dates.
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
                <li>Wetsuit/neoprene</li>
                <li>Canyoning harness</li>
                <li>Helmet</li>
                <li>Rappel equipment</li>
                <li>Professional certified guide</li>
                <li>Accident and civil liability insurance</li>
                <li>Photo report!</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Optional Extras</h3>
              <p className="mb-2">
                <strong>Canyoning shoes:</strong> Professional canyoning shoes
                rental for 9€/person. Highly recommended for the granite rock!
              </p>
              <p className="text-sm text-gray-600 italic mb-4">
                *Note: Water shoes and flip-flops are not allowed for canyoning.
                If you use your own shoes, remember that they will get wet and
                you will need an extra pair for afterwards.
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
                  , as you could easily slip on the granite rock.
                </li>
              </ul>
              <p className="mt-4 font-semibold text-orange-600">
                Granite can be slippery when wet — professional canyoning shoes
                with good grip are recommended!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
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
                <strong>Water and snacks</strong> to recharge energy
              </li>
              <li>
                <strong>Warm clothes</strong> for after the activity (can be
                cool in autumn/winter/spring)
              </li>
              <li>
                <strong>Sunscreen</strong> even in cooler months
              </li>
            </ul>

            <div className="bg-blue-50 p-4 rounded-lg mt-2">
              <p className="text-blue-800">
                <strong>💡 Tip:</strong> Since this canyon is best in cooler
                months, bring warm clothes to change into after the activity.
                The wetsuit keeps you warm in the water, but you&apos;ll
                appreciate dry, warm clothes afterwards!
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
                <strong>Petrol Station</strong>
              </p>
              <p className="mb-2 text-gray-600">
                C-421 Km. 113.8 I, 41240 Almadén de la Plata, Sevilla
              </p>
              <p className="mb-4">
                Easy to find and with parking available. We&apos;ll confirm the
                exact meeting time when you book.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Schedule</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Meeting:</strong> At the petrol station (time to be
                  confirmed)
                </li>
                <li>
                  <strong>Drive:</strong> Short drive to the canyon access point
                </li>
                <li>
                  <strong>Equipment distribution</strong> and safety briefing
                </li>
                <li>
                  <strong>3-4 hours:</strong> Canyoning activity with 3 rappels
                </li>
                <li>
                  <strong>Return:</strong> Back to vehicles
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Distances from major cities
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>From Seville city:</strong> ~40-50 minutes
                </li>
                <li>
                  <strong>From Huelva:</strong> ~1 hour 15 minutes
                </li>
                <li>
                  <strong>From Badajoz:</strong> ~1 hour 30 minutes
                </li>
                <li>
                  <strong>From Córdoba:</strong> ~1 hour 45 minutes
                </li>
                <li>
                  <strong>From Marbella:</strong> ~2 hours 30 minutes
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg mt-2">
              <p className="text-green-800">
                <strong>🚗 Transport:</strong> Sometimes we can help with
                transport, especially from Marbella. Tell us if you need it and
                we&apos;ll recommend a transport service or send you an offer!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>Physical Requirements</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              Calzadillas is a <strong>moderate level canyon</strong> perfect
              for beginners and those with some experience alike.
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-3">Requirements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Minimum age:</strong> 10 years old
                </li>
                <li>
                  <strong>Swimming ability:</strong> All participants must be
                  able to swim
                </li>
                <li>
                  <strong>Physical fitness:</strong> Moderate level. No previous
                  canyoning experience required
                </li>
                <li>
                  <strong>No severe vertigo:</strong> Rappels of up to 15m
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                Who is this canyon for?
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Beginners wanting to learn canyoning techniques</li>
                <li>Families with children (10+ years)</li>
                <li>Groups of friends looking for adventure near Seville</li>
                <li>Corporate team building activities</li>
                <li>Experienced canyoneers exploring new granite terrain</li>
                <li>Anyone visiting Seville wanting an outdoor adventure</li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-4 rounded-lg mt-4">
              <p className="text-emerald-800">
                <strong>✅ Perfect for learning:</strong> The guides will teach
                you all the rappelling techniques you need. No previous
                experience required!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>Sierra Norte de Sevilla</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">
                A Different Andalusia
              </h3>
              <p className="mb-2">
                The Sierra Norte de Sevilla Natural Park offers a completely
                different landscape from coastal Andalusia:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Granite rock formations:</strong> Unlike the limestone
                  of Málaga and Granada
                </li>
                <li>
                  <strong>Dense oak forests:</strong> Cork oaks and holm oaks
                </li>
                <li>
                  <strong>Rolling green hills:</strong> Especially beautiful in
                  spring
                </li>
                <li>
                  <strong>Atlantic climate influence:</strong> More rainfall,
                  greener landscapes
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                Almadén de la Plata
              </h3>
              <p className="mb-2">
                The canyon is located near the historic town of Almadén de la
                Plata, along the ancient Vía de la Plata — the Roman silver
                route that connected Seville to the north of Spain.
              </p>
              <p>
                This area was popular with Sevillanos during recent years and is
                known for its natural beauty, rural charm, and outdoor
                activities.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Wildlife & Nature</h3>
              <p className="mb-2">
                The Natural Park is home to diverse wildlife:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Black storks</li>
                <li>Iberian lynx (rare sightings)</li>
                <li>Wild boar</li>
                <li>Deer</li>
                <li>Various birds of prey</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger>Looking for More Challenge?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              If you wish to enjoy a canyon of higher level, also close to
              Seville, we recommend:
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Risco Blanco (Level 3)
              </h3>
              <p className="mb-2">
                Located next to Calzadillas in the same Natural Park, Risco
                Blanco is an impressive and technical ravine. It is one of the
                best options to enjoy canyoning in Andalusia and without a doubt
                the best option if you want higher level canyoning near Seville.
              </p>
              <p className="mb-2">In Risco Blanco you will enjoy:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>A zip line</li>
                <li>Numerous rappels up to 19 metres</li>
                <li>Jumps of 4m, 5m and 10m (all optional)</li>
                <li>A 6-metre slide</li>
                <li>Shuttle option slides</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mt-4">
              <p className="text-amber-800">
                <strong>📈 Progression suggestion:</strong> Complete Calzadillas
                first to learn the basic techniques, then graduate to Risco
                Blanco for more technical challenges!
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                Calzadillas vs Risco Blanco
              </h3>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2 text-left">Feature</th>
                    <th className="border p-2 text-left">Calzadillas</th>
                    <th className="border p-2 text-left">Risco Blanco</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Level</td>
                    <td className="border p-2">2/4</td>
                    <td className="border p-2">3/4</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Max rappel</td>
                    <td className="border p-2">15m</td>
                    <td className="border p-2">19m</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Max jump</td>
                    <td className="border p-2">8m</td>
                    <td className="border p-2">10m</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Zip line</td>
                    <td className="border p-2">No</td>
                    <td className="border p-2">Yes</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Best for</td>
                    <td className="border p-2">Beginners/Families</td>
                    <td className="border p-2">Intermediate+</td>
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

export default CalzadillasDescription;
