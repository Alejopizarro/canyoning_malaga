import { FormController } from "@/components/form-controller";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      {/* Hero Banner Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/team-building-bg.jpg"
          alt="Team building activities in Malaga"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Team Building in Nature
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl opacity-90 max-w-2xl mx-auto">
            Strengthen your team bonds with unique adventure experiences in
            Malaga and Costa del Sol
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Adventure Team Building Experts
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At TUUR Adventure, we are specialized guides in nature
                experiences and adventure sports. We have developed unique
                programs for companies looking to strengthen their team bonds in
                a fun and memorable way.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                From canyoning to via ferratas, hiking, kayaking and much more.
                We create personalized experiences that foster cooperation,
                communication and motivation among participants.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We operate in{" "}
                <strong>Marbella, Malaga, Seville, Granada</strong> and
                throughout Andalusia, adapting to the specific needs of each
                group.
              </p>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/tuur-canyoning-team.jpg"
                alt="Team building group doing canyoning"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Activities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide variety of activities adaptable to all levels and
              group sizes
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Activity Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/guadalmina-1.jpg"
                  alt="Canyoning team building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Canyoning
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Descend through canyons, jump into crystal-clear pools and
                  work as a team to overcome natural obstacles.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">⏱️ 2h30 - 4h</span>
                  <span>👥 All year</span>
                </div>
              </div>
            </div>

            {/* Activity Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/VF-Ronda-1.jpg"
                  alt="Via Ferrata team building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Via Ferratas
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Climb vertical walls with safety equipment. An experience that
                  overcomes fears and builds trust.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">⏱️ 2h30 - 4h</span>
                  <span>👥 All year</span>
                </div>
              </div>
            </div>

            {/* Activity Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/kayak-banus-2.png"
                  alt="Kayak team building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Kayak & Paddle Surf
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Water activities on the best beaches of Marbella and Puerto
                  Banus. Ideal for large groups.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">⏱️ 2h - 3h</span>
                  <span>👥 All year</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/team-building-benefits.jpg"
                alt="Team building benefits"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Team Buildings?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Interpersonal Relationships
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Strengthen bonds between colleagues in a relaxed
                      environment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Cooperation & Strategy
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Activities that require teamwork to overcome challenges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Motivation & Fun
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Memorable experiences that increase team engagement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Customized Programs
                    </h4>
                    <p className="text-gray-600 text-sm">
                      We adapt each activity to your company&apos;s needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let&apos;s Plan Your Event
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Tell us about your team and we&apos;ll help you design the perfect
              experience. We also work with event agencies.
            </p>
          </div>

          <div className="bg-white max-w-2xl mx-auto rounded-2xl p-6 sm:p-8 lg:p-10">
            <FormController />
          </div>
        </div>
      </section>
    </main>
  );
}
