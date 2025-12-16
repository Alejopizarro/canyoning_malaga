import Image from "next/image";
import Link from "next/link";

interface Activity {
  category: string;
  categoryPath: string;
  title: string;
  slug: string;
  days: string;
  price: string;
  description: string;
  image: string;
  level: "easy" | "moderate" | "advanced";
  duration: string;
  location: string;
  isMostPopular?: boolean;
}

const topActivities: Activity[] = [
  {
    category: "Kayaking",
    categoryPath: "more-activities",
    title: "Puerto Banús",
    slug: "kayak-puerto-banus",
    days: "Tue | Thu | Sat",
    price: "40 €",
    description: "Enjoy a beautiful sunrise over the Mediterranean waters.",
    image: "/kayak-banus-2.png",
    level: "easy",
    duration: "2 hr",
    location: "Marbella",
    isMostPopular: false,
  },
  {
    category: "Canyoning",
    categoryPath: "canyoning",
    title: "Guadalmina",
    slug: "guadalmina",
    days: "Every Day!",
    price: "45 €",
    description:
      "Enjoy the best canyoning experience near Marbella, all year round and for all levels.",
    image: "/guadalmina-1.webp",
    level: "easy",
    duration: "3 hr",
    location: "Marbella",
    isMostPopular: true,
  },
  {
    category: "Via Ferrata",
    categoryPath: "via-ferrata",
    title: "Casares",
    slug: "casares",
    days: "Fridays",
    price: "45 €",
    description: "Explore Málaga White Villages from another angle.",
    image: "/Casares-1.jpg",
    level: "moderate",
    duration: "2.5 hr",
    location: "Casares",
    isMostPopular: false,
  },
];

const levelConfig = {
  easy: "All Levels",
  moderate: "Moderate",
  advanced: "Advanced",
};

const TopActivitiesHome = () => {
  return (
    <section className="relative w-full min-h-screen bg-[rgb(101,67,33)] flex flex-col items-center justify-start pt-[10vh] pb-0 px-4">
      {/* Header */}
      <div className="relative text-center text-white mb-10">
        <span className="block text-sm md:text-base text-white/60 mb-2">
          Spring is here!
        </span>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Top Outdoor Activities Of
          <br />
          The Season
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 pb-16">
        {topActivities.map((activity) => (
          <Link
            key={activity.slug}
            href={`/${activity.categoryPath}/${activity.slug}`}
            className="group"
          >
            <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              {/* Image Container */}
              <div className="relative h-44 sm:h-52 overflow-hidden">
                <Image
                  src={activity.image}
                  alt={`${activity.title} - ${activity.category}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Most Popular Badge */}
                {activity.isMostPopular && (
                  <div className="absolute top-3 left-18 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="text-teal-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs font-semibold text-gray-800">
                      Most Popular
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Row 1: Category & Days */}
                <div className="flex justify-between items-baseline mb-0.5">
                  <span className="text-teal-600 text-sm font-medium">
                    {activity.category}
                  </span>
                  <span className="text-teal-600 text-xs font-semibold">
                    {activity.days}
                  </span>
                </div>

                {/* Row 2: Title & Price */}
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-lg font-bold text-gray-900">
                    {activity.title}
                  </h3>
                  <span className="text-lg font-bold text-gray-900">
                    {activity.price}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-snug line-clamp-1 mb-3">
                  {activity.description}
                </p>

                {/* Footer */}
                <div className="flex gap-3 pt-3 border-t border-gray-100">
                  {/* Level */}
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-300"
                    >
                      <path d="M3 3v18h18" />
                      <path d="M18 9l-5 5-4-4-3 3" />
                    </svg>
                    {levelConfig[activity.level]}
                  </span>

                  {/* Duration */}
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-300"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    {activity.duration}
                  </span>

                  {/* Location */}
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-300"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {activity.location}
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopActivitiesHome;
