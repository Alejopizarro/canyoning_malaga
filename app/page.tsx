import Bokun from "@/components/bokun";
import Description from "@/components/description";
import Hero from "@/components/hero";
import Itinerary from "@/components/itinerary";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <div className="relative">
        <svg
          className="w-full rotate-360 h-16 sm:h-24 text-gray-100 bg-gray-50"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          <path
            d="M0,20 C300,10 600,30 900,60 C1000,75 1100,85 1200,95 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="bg-[url('/background-leave.png')] bg-no-repeat bg-cover">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-semibold">About Guadalmina Canyon</h2>
            <div className="relative w-full aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/S3E0cKEYCSQ"
                title="Guadalmina Canyon Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-gray-700 leading-relaxed">
                The Guadalmina Canyon (also known as{" "}
                <strong>The Narrowest Canyon</strong>) is located in the town of
                Benahavis, very close to Marbella.
              </p>

              <p className="text-gray-700 leading-relaxed">
                It &apos;s a perfect activity for all levels of experience,
                where everyone, from children to adults, can enjoy an amazing
                and fun activity every day of the year, even in the winter
                season, thanks to its temperate waters.
              </p>

              <p className="text-gray-700 leading-relaxed">
                For all these reasons, we can say that this is{" "}
                <strong>the best canyoning experience near Marbella!</strong>
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Activity Highlights:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Jumps:</strong> 5-7 of 6m max (all optional)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Rappels:</strong> 1 of 4m max
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span className="text-gray-700">
                      <strong>Slides:</strong> 1 of 2m
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <Description />
            <Itinerary />
          </div>{" "}
          <Bokun />
        </div>
      </div>
    </div>
  );
}
