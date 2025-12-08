import Image from "next/image";

// Team member data
const officeTeam = [
  {
    name: "Jose Moreno",
    role: "CEO TUUR Adventure Experts",
    credentials: [
      "TD Medium Mountain",
      "TD Canyoning",
      "TD Kayaking",
      "Sport & Classic Climbing Expert",
    ],
    image: "/team/jose-moreno.jpg",
  },
  {
    name: "Ancor Rodríguez",
    role: "Marketing & Advertising CMO",
    credentials: ["Team Building Logistics", "IT Manager"],
    image: "/team/ancor-rodriguez.jpg",
  },
  {
    name: "Lluis Sabater",
    role: "Sales Director CSO",
    credentials: ["Tourism Diploma", "Client Relations Manager"],
    image: "/team/lluis-sabater.jpg",
  },
  {
    name: "Raffaele Fusco",
    role: "Sales Director CSO",
    credentials: ["Customer Service Director", "Tourism & Public Relations"],
    image: "/team/raffaele-fusco.jpg",
  },
];

const actionTeam = [
  {
    name: "Jose Cecilia",
    role: "TUUR Activities Director",
    credentials: [
      "TECO Training Professor",
      "Canyoning & MTB Expert",
      "TECO Certified",
    ],
    image: "/team/jose-cecilia.jpg",
  },
  {
    name: "Israel Navarro",
    role: "Beach Activities Director",
    credentials: ["TECO Certified", "Ski Instructor", "Sport Climbing Expert"],
    image: "/team/israel-navarro.jpg",
  },
  {
    name: "Juan Antonio Salas",
    role: "TUUR Safety Coordinator",
    credentials: ["TD Canyoning", "TECO Certified"],
    image: "/team/juan-antonio-salas.jpg",
  },
  {
    name: "Jose Carlos Rodríguez",
    role: "Technical Canyoning Coordinator",
    credentials: [
      "TD Canyoning",
      "TD Medium Mountain",
      "TD Speleology",
      "Andalusian Canyoning Champion",
    ],
    image: "/team/jose-carlos-rodriguez.jpg",
  },
  {
    name: "Sixto Serrano",
    role: "TUUR Technical Coordinator",
    credentials: [
      "Sports Science Degree",
      "TD Speleology",
      "TD Canyoning",
      "Andalusian Speleology School Professor",
    ],
    image: "/team/sixto-serrano.jpg",
  },
  {
    name: "Daniel G. Beck",
    role: "TUUR Logistics Director",
    credentials: [
      "TD Speleology",
      "TD Canyoning",
      "MTB Expert",
      "TECO Certified",
    ],
    image: "/team/daniel-beck.jpg",
  },
];

export default function Page() {
  return (
    <main>
      {/* Hero Banner Section */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="/about-hero.jpg"
          alt="TUUR Adventure team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            About TUUR Adventure
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl opacity-90 max-w-2xl mx-auto">
            Professional mountain guides specialized in adventure experiences
            across Andalusia, Menorca and the Pyrenees
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>TUUR Adventure Experts</strong> is the union of a
                professional team of mountain guides with various specialist
                fields, based in Andalucía, Menorca and The Pyrenees, who offer
                their teachings and services as guides in natural environments
                and all types of mountainous terrain.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>TUUR Canyoning</strong> is a part of this team,
                specialized in canyoning guide services, canyoning courses,
                children activities and special programs related with river
                sports.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our passion for nature and adventure drives us to deliver
                unforgettable experiences while maintaining the highest safety
                standards in the industry.
              </p>
            </div>
            <div className="relative h-80 lg:h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about-team-adventure.jpg"
                alt="TUUR team in action"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Where We Work Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about-map.jpg"
                alt="TUUR operations map"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Where We Work
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We have several operations centres: one based in{" "}
                <strong>Andalucía</strong>, in the city of Marbella on the Costa
                del Sol, another in <strong>Menorca</strong> (Ciudadela), and in
                the city of <strong>Barcelona</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                From these cities we plan our activities towards the natural
                parks and areas of Andalucía, Balearic Islands (Formentera,
                Ibiza, Mallorca and Menorca), Pyrenees, or traveling abroad to
                France, Italy, or Morocco.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Marbella",
                  "Málaga",
                  "Granada",
                  "Sevilla",
                  "Barcelona",
                  "Menorca",
                ].map((location) => (
                  <span
                    key={location}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Team Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Office Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The professionals behind the scenes who make every adventure
              possible
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {officeTeam.map((member) => (
              <div
                key={member.name}
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-56">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <ul className="space-y-1">
                    {member.credentials.map((credential, index) => (
                      <li
                        key={index}
                        className="text-gray-600 text-xs flex items-start"
                      >
                        <span className="text-blue-500 mr-2">•</span>
                        {credential}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Team Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Action Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our certified guides and instructors who lead you through every
              adventure
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {actionTeam.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <ul className="space-y-1">
                    {member.credentials.map((credential, index) => (
                      <li
                        key={index}
                        className="text-gray-600 text-xs flex items-start"
                      >
                        <span className="text-green-500 mr-2">•</span>
                        {credential}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Registered for Active Tourism
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We are an adventure tourism company which complies with all
                rules and legislations in force in each of the Autonomous
                Communities where we perform our activities.
              </p>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <span className="text-green-600">✓</span>
                    </span>
                    Andalucía
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm ml-11">
                    <li>
                      Registered in &quot;Registro de Turismo Activo&quot; No:
                      RTA AT/MA00141
                    </li>
                    <li>Civil Liability Insurance Policy No: RC/0316/1</li>
                    <li>Accident Insurance (voluntary)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <span className="text-green-600">✓</span>
                    </span>
                    Catalonia / Aragon
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm ml-11">
                    <li>
                      Workers qualified as Sports Technicians for mountain
                      sports
                    </li>
                    <li>
                      Registered on Official Register for Sports Professionals
                    </li>
                    <li>Civil Liability Insurance coverage</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Quality & Credentials
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                All our canyoning guides have the highest qualifications in
                their specialist field, issued by The Ministry of Education
                (Sports Technicians). We also belong to <strong>AEGM</strong>{" "}
                (Asociación Española de Guías de Montaña) and{" "}
                <strong>UIMLA</strong> (Union of International Mountain
                Leaders).
              </p>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-3">
                  What is a Canyoning Guide?
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  A canyoning guide is a person qualified to guide groups and
                  teach in any field pertaining to canyoning activities. Our
                  guides are trained to make decisions in different situations,
                  using evaluation skills and technical knowledge. It&apos;s the
                  best guarantee of safety and success.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                  <span className="text-2xl">🏔️</span>
                  <span className="text-sm font-medium text-gray-700">
                    AEGM Member
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                  <span className="text-2xl">🌍</span>
                  <span className="text-sm font-medium text-gray-700">
                    UIMLA Member
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                  <span className="text-2xl">📜</span>
                  <span className="text-sm font-medium text-gray-700">
                    State Certified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join us for an unforgettable experience in the most beautiful
            natural landscapes of Spain. Our professional team is ready to guide
            you safely through every adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/activities"
              className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors"
            >
              Explore Activities
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-gray-900 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
