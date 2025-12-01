import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TajoDeRondaDescription = () => {
  return (
    <>
      {/* Hero Description */}
      <div className="flex flex-col gap-4">
        <p className="text-gray-700 leading-relaxed">
          The Tajo de Ronda canyon is <strong>unique in all of Spain</strong>{" "}
          because it crosses completely through the thousand-year-old city of
          Ronda, offering privileged views of its mythical gorge, monuments,
          bridges, and hanging houses.
        </p>

        <p className="text-gray-700 leading-relaxed">
          This canyon features one of the{" "}
          <strong>most beautiful abseils in Andalusia</strong> — a breathtaking
          35-metre descent under a waterfall, right beneath the iconic Puente
          Nuevo bridge. An experience out of reach for the simple tourist!
        </p>

        <p className="text-gray-700 leading-relaxed">
          Explore Ronda&apos;s hidden treasures from below: the main bridge, the
          famous &quot;Balcón del Coño&quot;, the hanging gardens, and the old
          Arabic baths — all from a perspective most visitors never see.
        </p>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-900 mb-3">
            Activity Highlights:
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-rose-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Swimming level:</strong> 2/4
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Jumps:</strong> Several optional jumps
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Rappels:</strong> 2 (main one is 35m under waterfall!)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Canyon length:</strong> ~600m
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Min. age:</strong> 13 years old
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Duration:</strong> 3-4 hours
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Best season:</strong> All year (water level dependent)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-rose-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Location:</strong> Ronda city centre, Málaga
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-lg mt-2">
          <p className="text-rose-800">
            <strong>🏛️ Unique experience:</strong> This is the only canyon in
            Spain that crosses through a historic city centre. You&apos;ll be
            the envy of tourists watching you from the bridge above!
          </p>
        </div>
      </div>

      {/* Accordion Sections */}
      <Accordion type="single" collapsible className="mt-6">
        <AccordionItem value="item-1">
          <AccordionTrigger>Description</AccordionTrigger>
          <AccordionContent className="flex flex-col text-gray-600 gap-y-4">
            <h3 className="text-lg font-semibold text-gray-950 my-2">
              A Canyon Like No Other in Spain
            </h3>
            <p>
              The Tajo de Ronda canyon is unique in all of Spain because it
              crosses completely through the old city of Ronda and offers
              privileged views of its mythical gorge, monuments, ancient
              bridges, hanging houses, irrigation ditches, and water mills —
              completely out of reach for the simple tourist.
            </p>
            <p>
              You will have the chance to visit Ronda and some of its important
              icons from a completely different perspective: the main bridge,
              the &quot;Balcón del Coño&quot;, the hanging gardens, and the old
              Arabic baths, amongst others.
            </p>

            <h3 className="text-lg font-semibold text-gray-950 my-2">
              The Most Beautiful Abseil in Andalusia
            </h3>
            <p>
              This canyon features one of the most beautiful abseils in
              Andalusia — a breathtaking 35-metre descent under a waterfall. The
              first abseil is exceptional as it is found just under the iconic
              Puente Nuevo bridge. That&apos;s just amazing!
            </p>
            <p>
              It is a dynamic and fun canyon: jumps, rappels and corners of
              great beauty that make you forget you are right under the famous
              Tajo de Ronda. You won&apos;t stop having fun for a single moment!
            </p>

            <h3 className="text-lg font-semibold text-gray-950 my-2">
              The River Guadalevín
            </h3>
            <p>
              The river of this canyon is called Guadalevín. Its name originates
              from an Arabic word (Wadi-al-Laban) which means &quot;River of
              Milk&quot;.
            </p>
            <p className="mb-2">
              This river is born in the Sierra de las Nieves in the Cuerno gorge
              (where the famous Pinsapo trees grow), then joins the Fuenfría
              stream. It is the river that sculpted in the rock the famous Tajo
              that divides the city of Ronda in two. And finally it ends at the
              Guadiaro river (the river of the Buitreras canyon).
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
                <li>Canyoning harness with safety lanyard</li>
                <li>Approved canyoning helmet</li>
                <li>Rappel equipment (descender, carabiners)</li>
                <li>Professional certified guide</li>
                <li>Accident and civil liability insurance</li>
                <li>Full photo report!</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Optional Extras</h3>
              <p className="mb-2">
                <strong>Canyoning shoes:</strong> You can use your own sports
                shoes* or hire our professional canyoning shoes when booking
                (9€/person).
              </p>
              <p className="mb-2">
                <strong>Neoprene socks:</strong> Available for 1€/person.
              </p>
              <p className="text-sm text-gray-600 italic mb-4">
                *Note: Water shoes and flip-flops are not allowed for canyoning.
                If you use your own shoes, remember that they will get wet and
                you will need an extra pair to change afterwards.
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
                Due to the technical 35m rappel, we strongly recommend renting
                professional canyoning shoes for this canyon.
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
              </li>
              <li>
                <strong>Change of clothes</strong> for exploring Ronda
                afterwards
              </li>
            </ul>

            <div className="bg-rose-50 p-4 rounded-lg mt-2">
              <p className="text-rose-800">
                <strong>💡 Tip:</strong> Bring comfortable clothes for walking
                around Ronda after the activity — you&apos;ll want to explore
                this beautiful city!
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
                <strong>Mirador La Hoya del Tajo</strong>
              </p>
              <p className="mb-2 text-gray-600">
                Ctra. de los Molinos, S/N, 29400 Ronda, Málaga
              </p>
              <p className="mb-4">
                We&apos;ll confirm the exact meeting time when you book.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Access</h3>
              <p className="mb-2">
                This canyon has a very comfortable and quick access from the
                meeting point — <strong>barely 5 minutes walking</strong> to the
                start. The return to the vehicles is also comfortable, around
                2-10 minutes depending on where the cars are parked.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Schedule</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Meeting:</strong> At the viewpoint (time to be
                  confirmed)
                </li>
                <li>
                  <strong>5 min:</strong> Walk to canyon entrance
                </li>
                <li>
                  <strong>Equipment distribution</strong> and safety briefing
                </li>
                <li>
                  <strong>3-4 hours:</strong> Canyoning activity
                </li>
                <li>
                  <strong>Return:</strong> Short walk back to vehicles
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
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-2">
              <p className="text-blue-800">
                <strong>🚗 Transport:</strong> If you don&apos;t have transport,
                ask about our transfer service availability!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Physical Requirements</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              We recommend this canyon for those who do not have uncontrollable
              vertigo and have a certain degree of agility or previous
              rappelling experience.
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-3">Requirements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Minimum age:</strong> 13 years old
                </li>
                <li>
                  <strong>Swimming ability:</strong> All participants must be
                  able to swim
                </li>
                <li>
                  <strong>Physical fitness:</strong> Medium level. If you do
                  sports with some regularity, you will feel very comfortable
                </li>
                <li>
                  <strong>No uncontrollable vertigo:</strong> The 35m rappel
                  requires comfort with heights
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                Who is this canyon for?
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Adventurers wanting a unique urban canyoning experience</li>
                <li>
                  History and culture lovers seeking a different perspective
                </li>
                <li>Groups of friends and families (13+ years)</li>
                <li>Stag and hen parties looking for something special</li>
                <li>
                  Anyone visiting Ronda who wants an unforgettable adventure
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mt-4">
              <p className="text-yellow-800">
                <strong>⚠️ Note:</strong> The first abseil under the waterfall
                is quite extreme! If you&apos;re new to canyoning, consider
                starting with <strong>Guadalmina</strong> first to learn the
                basic techniques.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>Combine with Other Activities</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              Make the most of your day in the beautiful city of Ronda!
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Via Ferrata in the Tajo
              </h3>
              <p className="mb-4">
                For those who want to continue the adventure on this incredible
                big wall, we have the option to climb a{" "}
                <strong>Via Ferrata in the same Tajo</strong>, where tourists
                can see you astonished from the bridge level. The perfect
                combination of canyoning and climbing!
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Lunch at El Molino</h3>
              <p className="mb-4">
                We recommend reserving a paella at the{" "}
                <strong>Albergue El Molino</strong> from Ángeles. This beautiful
                old grain mill is located right at the end of the tour, next to
                the river Guadalevín and next to the parking lot. You will be
                hungry by then and it will be the perfect moment to enjoy its
                terrace and relaxed atmosphere. The full menu is around 13€ per
                person — we can help organise it for you!
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Explore Ronda</h3>
              <p className="mb-2">
                After your adventure, explore the thousand-year-old city of
                Ronda:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Walk across the iconic Puente Nuevo (New Bridge)</li>
                <li>Visit the famous bullring — one of the oldest in Spain</li>
                <li>Explore the Arab Baths</li>
                <li>Stroll through the hanging gardens</li>
                <li>Enjoy tapas and local wine in the old town</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg mt-4">
              <p className="text-green-800">
                <strong>📦 Check our packs:</strong> We offer a{" "}
                <strong>Canyoning + Via Ferrata pack</strong> that combines the
                Tajo de Ronda canyon with the Via Ferrata for the ultimate
                adventure day in Ronda!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>Wildlife & History</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Birdlife</h3>
              <p className="mb-2">
                The Tajo de Ronda is home to many species of birds that nest in
                its impressive walls:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Red-billed chough</li>
                <li>Lesser kestrel</li>
                <li>Peregrine falcon</li>
                <li>Various swift species</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Geological History</h3>
              <p className="mb-2">
                The Tajo de Ronda is the name given to the set of two plateaus
                on which the city of Ronda is set. They are separated by a{" "}
                <strong>100-metre deep gorge</strong> that was originated by a
                seismic movement more than 5 million years ago.
              </p>
              <p>
                The area comprises two different spaces: the first is a narrow
                gorge that is 500m long and 100m deep reaching the river
                Guadalevín. The second is a sheer scarp that opens up to La
                Caldera, a circular-shaped dip in the landscape.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Cultural Heritage</h3>
              <p>
                The Tajo de Ronda was declared a{" "}
                <strong>Natural Monument of Andalusia in 2019</strong>,
                recognising both its geological significance and its cultural
                importance to the city of Ronda.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default TajoDeRondaDescription;
