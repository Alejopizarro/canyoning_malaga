import Image from "next/image";
import Link from "next/link";
import { getSeasonLabel } from "@/lib/season";
import { getTop3Excursions } from "@/lib/activities";

const levelConfig = {
  easy: "All Levels",
  moderate: "Moderate",
  advanced: "Advanced",
};

const TopActivitiesHome = async () => {
  const topActivities = await getTop3Excursions();

  const sortedActivities = [...topActivities.slice(0, 3)].sort((a, b) => {
    if (a.isMostPopular) return -1;
    if (b.isMostPopular) return 1;
    return 0;
  });

  return (
    <section id="top-activities" className="relative z-21 w-full bg-background">
      <div className="max-w-[1440px] pt-24 pb-8  mx-auto px-4 md:px-8 flex flex-col items-center justify-start">
        {/* Header */}
        <div className="relative text-center mb-10">
          <span className="block text-md md:text-xl mb-2">
            {getSeasonLabel()}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Top Outdoor Activities Of
            <br />
            The Season
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="relative w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {sortedActivities.map((activity, index) => (
            <Link
              key={activity.slug}
              href={`/${activity.categoryPath}/${activity.slug}`}
              className={`group ${
                index === 0
                  ? "order-1 md:order-2"
                  : index === 1
                    ? "order-2 md:order-1"
                    : "order-3"
              }`}
            >
              <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                  <Image
                    src={activity.mainImage.src}
                    alt={activity.mainImage.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Most Popular Badge */}
                  {activity.isMostPopular && (
                    <div className="absolute top-3 -right-12 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md flex items-start gap-1">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="text-teal-500"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs mt-0.5 font-semibold text-gray-800">
                        Most Popular
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex flex-col gap-1 mb-3">
                    <p className="text-gray-500 text-sm font-medium">
                      {!activity.subcategory
                        ? activity.category
                        : activity.subcategory}
                    </p>

                    <div className="flex justify-between items-baseline">
                      <h4 className="text-2xl font-bold text-gray-900">
                        {activity.title}
                      </h4>
                      <div className="flex items-center gap-1">
                        <span className="text-sm text-gray-500">From</span>
                        <span className="text-2xl font-bold ml-1 -mt-2 text-primary">
                          {activity.price}€{activity.specialPrice ? "*" : ""}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:h-20 my-2">
                    <p className="text-sm text-gray-500 leading-snug mb-3">
                      {activity.description}
                    </p>

                    {activity.specialPrice && (
                      <p className="text-sm text-primary font-medium mb-3">
                        * {activity.specialPrice}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-3 pt-3 border-t border-gray-100">
                    <span className="flex bg-gray-200 px-2 py-1 rounded-lg items-center gap-1 text-xs font-semibold text-gray-500">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-gray-500"
                      >
                        <path d="M3 3v18h18" />
                        <path d="M18 9l-5 5-4-4-3 3" />
                      </svg>
                      {levelConfig[activity.level]}
                    </span>

                    <span className="flex bg-gray-200 px-2 py-1 rounded-lg items-center gap-1 text-xs font-semibold text-gray-500">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-gray-500"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      {activity.duration} hr
                    </span>

                    <span className="flex bg-gray-200 px-2 py-1 rounded-lg items-center gap-1 text-xs font-semibold text-gray-500">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-gray-500"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {activity.ubication}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopActivitiesHome;
