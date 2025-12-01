import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TrevelezDescription = () => {
  return (
    <>
      {/* Hero Description */}
      <div className="flex flex-col gap-4">
        <p className="text-gray-700 leading-relaxed">
          Trevelez is a truly impressive canyon,{" "}
          <strong>unique in Andalusia and Spain</strong>, located in the
          Alpujarra of Granada, on the southern foothills of Sierra Nevada. It
          is the <strong>Mecca of canyoning</strong> for enthusiasts in our
          region.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Its high vertical walls of red and black slate with high iron content
          give it a mysterious,{" "}
          <strong>wild &quot;Golden Cathedral&quot; appearance</strong>. The
          ferruginous waters take on an intense earthy, Mars-like colour — a
          visual experience like no other canyon.
        </p>

        <p className="text-gray-700 leading-relaxed">
          This is our <strong>highest technical level descent</strong> with 14
          rappels, including abseils of up to 30 metres, aerial exits, and
          technical handrails. The crown jewel for experienced canyoneers!
        </p>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-900 mb-3">
            Activity Highlights:
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-red-700 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Swimming level:</strong> 3/4
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-700 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Rappels:</strong> 14 total (up to 30m!)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-700 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Handrails:</strong> 20m + 8m + flying handrail
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-700 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Canyon length:</strong> 4-5 km
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-700 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Min. age:</strong> 16 years old
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-700 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Duration:</strong> 5-6 hours (+ 1h approach)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-700 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Best season:</strong> August - September only
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-700 font-bold mr-2">•</span>
              <span className="text-gray-700">
                <strong>Location:</strong> Alpujarra, Granada (Sierra Nevada)
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-red-100 border-l-4 border-red-700 p-4 rounded-r-lg mt-2">
          <p className="text-red-900">
            <strong>⚠️ Expert Level (4/4):</strong> This canyon requires
            previous canyoning experience, familiarity with abseiling, agility,
            and excellent physical condition. Not suitable for beginners.
          </p>
        </div>
      </div>

      {/* Accordion Sections */}
      <Accordion type="single" collapsible className="mt-6">
        <AccordionItem value="item-1">
          <AccordionTrigger>Description</AccordionTrigger>
          <AccordionContent className="flex flex-col text-gray-600 gap-y-4">
            <h3 className="text-lg font-semibold text-gray-950 my-2">
              The Greatest Exponent of Andalusian Canyoning
            </h3>
            <p>
              Trevelez canyon is the greatest exponent of Andalusian canyoning
              and one of the most technical in Spain. It stands out for being a
              canyon with a steep slope, with high vertical walls of red and
              black slate with a lot of iron content which gives it a
              mysterious, wild, or &quot;golden cathedral&quot; appearance.
            </p>
            <p>
              Its ferruginous waters, like its walls, are of an intense earthy
              colour due to the high iron content of the slate. Although you
              might think from the photos that it is earth or clay, this unique
              colouration makes it look like you&apos;re descending on Mars!
            </p>

            <h3 className="text-lg font-semibold text-gray-950 my-2">
              Technical Paradise
            </h3>
            <p>This is our most technical descent, featuring:</p>
            <ul className="list-disc pl-6 space-y-1 my-2">
              <li>1 hour uphill approach with significant slope</li>
              <li>14 very varied vertical drops</li>
              <li>Abseils of up to 30 metres</li>
              <li>Abseiling with aerial exits</li>
              <li>A 20-metre handrail</li>
              <li>An 8-metre handrail</li>
              <li>A flying handrail</li>
              <li>Spectacular rappels under waterfalls</li>
            </ul>
            <p>
              Due to the narrowness of some of its sections, even with an
              acceptable water flow, it requires considerable agility on the
              part of the athlete. The difficulty will vary according to the
              water flow rate at which it is approached.
            </p>

            <h3 className="text-lg font-semibold text-gray-950 my-2">
              The Rappel Sequence
            </h3>
            <p className="mb-2">
              The 14 rappels measure: 28m, 8m, 8m, 5m, 5m, 14m, 5m, 4m, 7m, 13m,
              9m, 8m, 13m, and 11m. If you are fond of photography, you will be
              able to take some incredible pictures, especially during the two
              stunning rappels under waterfalls!
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Season & Availability</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-red-800">
                <strong>⚠️ Very Limited Season:</strong> This canyon is only
                possible in the months of <strong>August and September</strong>{" "}
                (or close to those months), when the thawing season in Sierra
                Nevada normally ends and the water level drops.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Why so limited?</h3>
              <p className="mb-2">
                The Trevelez river is fed by Sierra Nevada&apos;s snowmelt.
                During most of the year, the water level is too high and
                dangerous for descent. Only after the summer thaw is complete
                does the canyon become accessible.
              </p>
              <p>
                Our sports technicians will inform you when it is the best time
                to tackle it — the season fluctuates slightly each year
                depending on snowfall and temperatures.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                Weather Considerations
              </h3>
              <p>
                Even during the season, the difficulty will vary according to
                the water flow rate. Heavy rainfall can make the canyon
                impractical. We monitor conditions closely and will advise on
                the best dates.
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mt-2">
              <p className="text-amber-800">
                <strong>📅 Book early:</strong> Due to the very short season and
                high demand from experienced canyoneers, we recommend booking
                well in advance for August and September dates.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Experience Requirements</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              Trevelez is one of the most coveted canyons and the{" "}
              <strong>Mecca of canyoning</strong> in our region for fans of this
              sport. To tackle it, you need to have accumulated technique and
              experience.
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Who is Trevelez for?
              </h3>
              <p className="mb-2">
                The Trevelez canyon is suitable for those who:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Have had previous canyoning experiences</li>
                <li>Are very familiar with abseiling</li>
                <li>Are agile and in good physical condition</li>
                <li>Feel comfortable in situations with water flow</li>
                <li>Can abseil without the help of auxiliary ropes</li>
                <li>
                  Know how to perform basic manoeuvres with ropes and descender
                </li>
                <li>Abseil with a lot of fluidity</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                Not ready yet? We can help!
              </h3>
              <p className="mb-2">
                If you want to enjoy the incredible experience of doing a
                technical canyon such as Trevelez but don&apos;t yet have the
                required autonomy, we offer{" "}
                <strong>canyoning improvement courses</strong> with our
                certified technicians.
              </p>
              <p>
                In these courses you will learn all the techniques of canyoning
                progression and accumulate experience in different canyons to
                have autonomy and prepare for level 4 descents.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <p className="text-blue-800">
                <strong>🎓 Progression path:</strong> We recommend completing
                these canyons before Trevelez: Guadalmina → Rio Verde → Rio
                Verde X-PRO → Buitreras → Trevelez
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>What&apos;s Included</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Includes</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Long wetsuit/neoprene (required)</li>
                <li>Canyoning harness with double anchors</li>
                <li>Approved safety canyoning helmet</li>
                <li>Rappel equipment (descender, carabiners)</li>
                <li>Technical ropes and group equipment</li>
                <li>
                  Professional certified canyoning technician (small groups)
                </li>
                <li>Accident and civil liability insurance</li>
                <li>Free photo report!</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Optional Extras</h3>
              <p className="mb-2">
                <strong>Canyoning shoes:</strong> Professional canyoning shoes
                rental for 9€/person
              </p>
              <p className="mb-2">
                <strong>Neoprene socks:</strong> Available for 1€/person
              </p>
              <p className="mb-2">
                <strong>Video:</strong> Professional video recording available
              </p>
              <p className="text-sm text-gray-600 italic mb-4">
                *Note: For this technical canyon, professional canyoning shoes
                are HIGHLY recommended for maximum grip and safety.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg mt-2">
              <p className="text-red-800">
                <strong>🥾 Important:</strong> Due to the technical nature of
                this canyon with narrow sections and slippery slate, we strongly
                recommend renting our professional canyoning shoes.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>What to Bring</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              This is a long, demanding activity at altitude. Come well
              prepared!
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
                <strong>Dry underwear and towel</strong> to change at the end
              </li>
              <li>
                If you didn&apos;t rent our canyoning shoes, bring{" "}
                <strong>hiking boots with excellent grip</strong>
              </li>
              <li>
                <strong>Plenty of water</strong> (minimum 2L recommended)
              </li>
              <li>
                <strong>High-energy food</strong> — sandwiches, energy bars,
                nuts, chocolate
              </li>
              <li>
                <strong>Sunscreen and cap</strong> for the 1-hour approach
              </li>
              <li>
                <strong>Warm layer</strong> for after the activity (altitude can
                be cool)
              </li>
              <li>
                <strong>Complete change of clothes</strong> including shoes
              </li>
            </ul>

            <div className="bg-yellow-50 p-4 rounded-lg mt-2">
              <p className="text-yellow-800">
                <strong>💪 Physical preparation:</strong> Get a good
                night&apos;s sleep, eat a substantial breakfast, and make sure
                you&apos;re well-hydrated before the activity. This is a
                full-day, high-intensity experience!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>Meeting Point & Logistics</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Meeting Point</h3>
              <p className="mb-2">
                Meeting point in the <strong>Alpujarra region</strong>, near
                Órgiva, Granada. Exact location will be confirmed upon booking.
              </p>
              <p className="mb-4">
                We recommend arriving <strong>early morning</strong> to make the
                most of daylight hours.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Schedule</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Early morning:</strong> Meeting at designated point
                </li>
                <li>
                  <strong>~1 hour:</strong> Uphill approach walk (significant
                  slope)
                </li>
                <li>
                  <strong>Equipment distribution</strong> and safety briefing
                </li>
                <li>
                  <strong>5-6 hours:</strong> Canyon descent (14 rappels!)
                </li>
                <li>
                  <strong>Return walk</strong> to vehicles
                </li>
                <li>
                  <strong>Total time:</strong> 6-7+ hours
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Location</h3>
              <p className="mb-2">
                Trevelez canyon is located in the{" "}
                <strong>Alpujarra of Granada</strong>, on the southern foothills
                of <strong>Sierra Nevada National Park</strong>.
              </p>
              <p>
                The area is known for its stunning mountain landscapes, white
                villages, and the famous Trevelez ham (the village is
                Spain&apos;s highest municipality!).
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg mt-2">
              <p className="text-green-800">
                <strong>🚗 Transport:</strong> Sometimes we can help with
                transport, especially from Marbella. Ask about our transfer
                service when booking!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>The Unique Environment</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Mars on Earth: The Iron Canyon
              </h3>
              <p className="mb-2">
                Trevelez is unique for its geological characteristics. The high
                vertical walls are made of red and black slate with exceptional
                iron content, giving the canyon its distinctive appearance:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Ferruginous waters:</strong> Intense earthy,
                  orange-red colour
                </li>
                <li>
                  <strong>Slate walls:</strong> Red and black with golden
                  reflections
                </li>
                <li>
                  <strong>&quot;Golden Cathedral&quot; appearance:</strong>{" "}
                  Mysterious and wild atmosphere
                </li>
                <li>
                  <strong>Mars-like landscape:</strong> Unlike any other canyon
                  in Spain
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Sierra Nevada</h3>
              <p className="mb-2">
                The canyon is nestled in the heart of Sierra Nevada National
                Park, home to the highest peaks in the Iberian Peninsula
                (Mulhacén at 3,479m). The surrounding landscape features:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dramatic mountain scenery</li>
                <li>Traditional Alpujarran white villages</li>
                <li>Unique high-altitude flora and fauna</li>
                <li>Crystal-clear mountain air</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">The Alpujarra</h3>
              <p>
                The Alpujarra region is famous for its traditional architecture,
                local crafts, and gastronomy. Don&apos;t miss trying the famous{" "}
                <strong>Jamón de Trevelez</strong> — ham cured at high altitude
                in Spain&apos;s highest village!
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mt-4">
              <p className="text-amber-800">
                <strong>📸 Photography tip:</strong> The unique iron-rich
                colours make for incredible photos, especially during the
                waterfall rappels. Bring a waterproof camera or ask about our
                photo/video service!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger>Training & Courses</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-4">
            <p className="mb-2">
              Want to tackle Trevelez but need more experience? We offer
              comprehensive training to get you ready!
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Canyoning Improvement Courses
              </h3>
              <p className="mb-2">
                Our certified canyoning technicians offer courses where you will
                learn:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All techniques of canyoning progression</li>
                <li>Autonomous abseiling without auxiliary ropes</li>
                <li>Basic rope manoeuvres and descender techniques</li>
                <li>Fluid abseiling in various conditions</li>
                <li>Safety protocols and self-rescue basics</li>
                <li>Water flow management and reading canyon conditions</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">
                Progressive Canyon Experience
              </h3>
              <p className="mb-2">
                Build your skills through our progression of canyons:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Level 1:</strong> Guadalmina (Marbella)
                </li>
                <li>
                  <strong>Level 1.5:</strong> Sima del Diablo (Júzcar)
                </li>
                <li>
                  <strong>Level 2:</strong> Rio Verde (Otívar)
                </li>
                <li>
                  <strong>Level 2.5:</strong> Buitreras (El Colmenar)
                </li>
                <li>
                  <strong>Level 3:</strong> Rio Verde X-PRO (Otívar)
                </li>
                <li>
                  <strong>Level 4:</strong> Trevelez & Poqueira (Alpujarra)
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <p className="text-blue-800">
                <strong>🎯 Your goal:</strong> Contact us about our improvement
                courses and we&apos;ll create a personalised progression plan to
                get you ready for Trevelez!
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default TrevelezDescription;
