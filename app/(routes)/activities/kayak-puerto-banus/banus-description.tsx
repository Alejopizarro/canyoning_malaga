import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const KayakBanusDescription = () => {
  return (
    <>
      {/* Hero Description */}
      <div className="flex flex-col gap-4">
        <p className="text-gray-700 leading-relaxed">
          Discover the <strong>glamorous coast of Puerto Banús</strong> from a
          unique perspective — paddling through the Mediterranean waters with
          the majestic Sierra Blanca and La Concha peak as your backdrop!
        </p>

        <p className="text-gray-700 leading-relaxed">
          This <strong>2-hour guided kayak tour</strong> is perfect for all ages
          and skill levels. Explore the beautiful beaches of Rodeito and Duque,
          paddle past luxurious yachts entering the famous marina, and capture
          stunning photos as the sun paints the sky with golden hues.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Whether you&apos;re looking for a{" "}
          <strong>
            family adventure, a fun outing with friends, or a romantic sunrise
            experience
          </strong>
          , this kayak tour offers the perfect blend of nature, glamour, and
          Mediterranean magic!
        </p>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-900 mb-3">
            Activity Highlights:
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-cyan-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Difficulty:</strong> Level 1/4 (Easy - All levels)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Route:</strong> 3.5 km along the coast
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Duration:</strong> 2 hours
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Min. age:</strong> 2 years old (with parents)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Best season:</strong> All year round
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Beaches:</strong> Rodeito, Duque, La Siesta
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Highlight:</strong> Puerto Banús marina entrance
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-600 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Location:</strong> Puerto Banús, Marbella
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded-r-lg mt-2">
          <p className="text-cyan-800">
            <strong>👨‍👩‍👧‍👦 Perfect for families:</strong> Children from 2 years old
            can join, sitting on the kayak with their parents. Our guides make
            it fun for everyone with games and interactive dynamics!
          </p>
        </div>
      </div>

      {/* Accordion Sections */}
      <Accordion type="single" collapsible className="mt-6">
        <AccordionItem value="item-1">
          <AccordionTrigger>Description</AccordionTrigger>
          <AccordionContent className="flex flex-col text-gray-600 gap-y-4">
            <h3 className="text-lg font-semibold text-gray-950 my-2">
              A Unique Encounter with the Marbella Coast
            </h3>
            <p>
              Discover the fascination of Marbella with our exclusive kayak
              route exploring the Rodeito beaches, the Duque beaches, and the
              entrance to the famous José Banús marina!
            </p>
            <p>
              During this 2-hour, expertly guided tour, you&apos;ll learn
              paddling techniques while taking in the majesty of the Sierra
              Blanca and the iconic La Concha peak as a backdrop. You&apos;ll
              explore the coastline and be captivated by the elegance of Puerto
              Banús from the unique perspective of your kayak.
            </p>

            <h3 className="text-lg font-semibold text-gray-950 my-2">
              The Route
            </h3>
            <p>
              Starting from Ventura del Mar beach, we&apos;ll paddle along the
              stunning coastline, crossing different beaches:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                <strong>El Rodeito Beach:</strong> Our starting point
              </li>
              <li>
                <strong>Playas del Duque:</strong> Beautiful sandy shores
              </li>
              <li>
                <strong>La Siesta Beach:</strong> Calm waters
              </li>
              <li>
                <strong>Puerto Banús entrance:</strong> Watch luxury yachts
                coming and going!
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-950 my-2">
              The Experience
            </h3>
            <p>
              You will have the exclusive opportunity to witness the entry of
              luxurious boats into the port of Banús, adding a touch of glamour
              to your trip. Paddle into the sea and immerse yourself in a unique
              encounter with the nature of the region.
            </p>
            <p>
              This trip fuses paddling, learning, and the natural wonder of the
              coast, offering you an unforgettable experience on the Marbella
              Coast.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Sunrise & Sunset Tours</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              Experience the magic of Puerto Banús at the most beautiful times
              of day!
            </p>

            <div className="space-y-4">
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-900 mb-2">
                  🌅 Sunrise Tour (7:15 AM)
                </h4>
                <p className="text-amber-800">
                  Perfect to enjoy a beautiful sunrise! Watch as the sun rises
                  over the Mediterranean, painting the sky with spectacular
                  colors. The calm morning waters and peaceful atmosphere create
                  a magical experience.
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-2">
                  ☀️ Morning Tour (9:30 AM)
                </h4>
                <p className="text-orange-800">
                  Enjoy the calm weather in the morning — not too hot and not
                  too crowded. Perfect conditions for a relaxed paddle along the
                  coast with ideal lighting for photos.
                </p>
              </div>

              <div className="bg-rose-50 p-4 rounded-lg">
                <h4 className="font-semibold text-rose-900 mb-2">
                  🌇 Sunset Tour
                </h4>
                <p className="text-rose-800">
                  As the sun dips below the horizon, the sky transforms into
                  hues of orange, pink, and purple. The Mediterranean waters
                  reflect these bright colors, creating an unforgettable
                  spectacle — the ideal time for memorable photos!
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-2">
              <p className="text-blue-800">
                <strong>📸 Photo tip:</strong> The sunrise and sunset tours
                offer the best lighting for stunning photos with La Concha and
                Sierra Blanca as your backdrop!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>For Families</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              This is the <strong>perfect activity for families</strong> to
              share special moments together on the water!
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Family-Friendly Features
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Children from 2 years old:</strong> Little ones sit
                  safely on the kayak with their parents
                </li>
                <li>
                  <strong>Calm, sheltered waters:</strong> Protected from waves
                  for a safe experience
                </li>
                <li>
                  <strong>Fun games and dynamics:</strong> Our guides keep kids
                  entertained throughout
                </li>
                <li>
                  <strong>Learning experience:</strong> Kids discover the magic
                  of nature and marine life
                </li>
                <li>
                  <strong>Safe equipment:</strong> Life jackets for all ages
                  included
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                Summer Family Offers
              </h3>
              <p className="mb-2">
                We have special family-friendly pricing during summer:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Children under 7:</strong> FREE participation
                </li>
                <li>
                  <strong>Children 8-12:</strong> Reduced prices
                </li>
                <li>
                  Family groups paired with other families for the best
                  experience
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg mt-2">
              <p className="text-green-800">
                <strong>👶 Good to know:</strong> Older children and teenagers
                will be thrilled as they paddle in calm waters, learning basic
                sailing techniques through games while having a great time!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>For Friends & Groups</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              Looking for an exciting experience with your friends? Our kayak
              tour is the ideal option!
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-3">Group Experience</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Friendly races:</strong> Challenge your mates to a
                  paddle competition!
                </li>
                <li>
                  <strong>Fun sailing games:</strong> Interactive dynamics
                  throughout the tour
                </li>
                <li>
                  <strong>Team activities:</strong> Learn paddling techniques
                  together
                </li>
                <li>
                  <strong>Shared memories:</strong> Enjoy laughs and anecdotes
                  on the water
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Group Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Open group tours with maximum 20 people</li>
                <li>Groups are paired by age/type for best experience</li>
                <li>Perfect for team building events</li>
                <li>Stag/hen parties welcome!</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg mt-2">
              <p className="text-purple-800">
                <strong>🎉 Group tip:</strong> Our guides explain basic paddling
                techniques in a creative and fun way through games, creating
                lasting memories as you immerse yourself in nature and have fun
                as a team!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>What&apos;s Included</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Includes</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Self-bailing kayak (double kayaks available)</li>
                <li>Paddles</li>
                <li>Life jacket</li>
                <li>Watertight container for valuables</li>
                <li>Professional kayak guide</li>
                <li>Civil liability and accident insurance</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                What You Need to Bring
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Swimsuit:</strong> Wear it under your clothes
                </li>
                <li>
                  <strong>Clothes that can get wet:</strong> You may get
                  splashed!
                </li>
                <li>
                  <strong>Sun protection:</strong> Sunscreen, sunglasses, cap
                </li>
                <li>
                  <strong>Water:</strong> 0.5L per person
                </li>
                <li>
                  <strong>Snacks:</strong> Fruit or energy bars
                </li>
                <li>
                  <strong>Towel:</strong> For after the activity
                </li>
                <li>
                  <strong>Dry clothes & shoes:</strong> To change into
                  afterwards
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mt-2">
              <p className="text-yellow-800">
                <strong>💡 Pro tip:</strong> Bring a waterproof phone case or
                GoPro to capture amazing photos of Puerto Banús from the water!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>Meeting Point & Schedule</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Meeting Point</h3>
              <p className="mb-2">
                <strong>Ventura del Mar Beach</strong>, Puerto Banús
              </p>
              <p className="mb-4">
                Look for the orange & yellow kayaks and guides wearing TUUR logo
                T-shirts.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Summer Schedule (Special Offer)
              </h3>
              <p className="mb-2">
                Every <strong>Tuesday, Thursday, and Saturday</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>7:15 AM:</strong> Sunrise tour — watch the beautiful
                  sunrise!
                </li>
                <li>
                  <strong>9:30 AM:</strong> Morning tour — calm weather, not too
                  hot
                </li>
              </ul>
              <p className="mt-2 text-sm text-gray-500">
                Additional departure times available on other days — contact us!
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">How to Get There</h3>
              <p className="mb-2">
                Puerto Banús is located in Marbella, easily accessible from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Marbella centre:</strong> ~10 minutes by car
                </li>
                <li>
                  <strong>Málaga city:</strong> ~45 minutes by car
                </li>
                <li>
                  <strong>Málaga airport:</strong> ~50 minutes
                </li>
                <li>
                  <strong>Estepona:</strong> ~15 minutes
                </li>
              </ul>
            </div>

            <div className="bg-cyan-50 p-4 rounded-lg mt-2">
              <p className="text-cyan-800">
                <strong>🚗 Need transport?</strong> We can help arrange pickup
                and drop-off from your accommodation in Marbella. Just ask when
                booking!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>About Puerto Banús</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">
                The Glamour of the Costa del Sol
              </h3>
              <p className="mb-2">
                Puerto Banús is a marina located in Marbella, renowned for its
                glamorous atmosphere, luxurious yachts, and opulent lifestyle.
                Nestled amidst the captivating Costa del Sol, Puerto Banús
                exudes an air of exclusivity, attracting a global clientele of
                celebrities, socialites, and discerning travellers.
              </p>
              <p>
                The marina itself serves as a dazzling spectacle, lined with an
                array of high-end boutiques, designer stores, and
                Michelin-starred restaurants. Sleek yachts and extravagant
                vessels adorn the harbour, their polished decks reflecting the
                vibrant energy of the surrounding establishments.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">The Coastline</h3>
              <p>
                Beyond the marina&apos;s allure, Puerto Banús boasts a
                captivating coastline, fringed with pristine beaches and
                inviting waters. The palm-lined promenade offers mesmerizing
                views of the Mediterranean Sea, while the golden sands invite
                you to relax before or after your kayak adventure.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                Things to Do After Your Kayak
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Stroll along the marina and admire the superyachts</li>
                <li>Enjoy breakfast or brunch at a waterfront restaurant</li>
                <li>Browse designer boutiques and luxury shops</li>
                <li>Relax on the beach</li>
                <li>Explore Marbella Old Town (10 min drive)</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-2">
              <p className="text-blue-800">
                <strong>🌴 Fun fact:</strong> Puerto Banús was founded by José
                Banús and opened in 1970. It was designed to give Marbella a
                super-luxury marina, and today it&apos;s one of the most famous
                ports in the Mediterranean!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger>Other Water Activities</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              Love the water? Check out our other aquatic adventures in Marbella
              and beyond!
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                More Water Sports in Marbella
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Jet Ski tours:</strong> Guided tours along the coast,
                  dolphin sightings possible!
                </li>
                <li>
                  <strong>Paddle surfing (SUP):</strong> Stand-up paddleboarding
                  in calm waters
                </li>
                <li>
                  <strong>Boat trips:</strong> Catamaran and sailboat tours from
                  Puerto Banús
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                Canyoning Adventures
              </h3>
              <p className="mb-2">
                Looking for more adrenaline? Try our canyoning experiences:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Canyoning Guadalmina:</strong> Near Marbella, perfect
                  for beginners
                </li>
                <li>
                  <strong>Canyoning Rio Verde:</strong> Our most popular canyon
                  with jumps and rappels
                </li>
                <li>
                  <strong>Canyoning Sima del Diablo:</strong> Near the Smurfs
                  Village
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Land Adventures</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Hiking La Concha:</strong> See the mountain from your
                  kayak, then climb it!
                </li>
                <li>
                  <strong>Via Ferrata Casares:</strong> Views of Africa and
                  Gibraltar
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg mt-4">
              <p className="text-orange-800">
                <strong>📦 Adventure packs:</strong> Ask about combining
                activities for the best value! Perfect for families or groups
                wanting multiple adventures.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default KayakBanusDescription;
