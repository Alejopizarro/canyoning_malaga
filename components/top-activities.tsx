import { FlipCard, FlipCardData } from "./ui/flip-card";

const SpringActivities: FlipCardData[] = [
  {
    name: "Puerto Banus",
    username: "Kayaking",
    image: "/guadalmina-canyon.jpg",
    bio: "Experience the stunning coastline of Puerto Banus with our kayaking tours. Suitable for all skill levels, perfect for a spring adventure.",
    stats: { level: "All levels", duration: "2hs", ubication: "Marbella" },
    price: { days: "Tue | Thu | Sat", cost: "40€" },
  },
  {
    name: "Casares",
    username: "Via Ferrata",
    image: "/guadalmina-canyon.jpg",
    bio: "Explore the thrilling Via Ferrata routes in Casares this spring. Enjoy breathtaking views and an adrenaline-pumping experience suitable for all levels.",
    stats: { level: "Moderate", duration: "2.5hs", ubication: "Casares" },
    price: { days: "Every day", cost: "45€" },
  },
  {
    name: "Guadalmina",
    username: "Canyoning",
    image: "/guadalmina-canyon.jpg",
    bio: "Enjoy the best spring canyoning experience near Marbella with Guadalmina canyon. Perfect for families and beginners, available all year round.",
    stats: { level: "All levels", duration: "3hs", ubication: "Marbella" },
    price: { days: "Fridays", cost: "45€" },
  },
];

const TopActivities = () => {
  const activities = SpringActivities;
  return (
    <div className="max-w-6xl py-4 sm:py-8 px-4 mx-auto flex flex-col items-center text-center">
      <p className="text-gray-600 font-lg">Spring is here!</p>
      <h2 className="text-5xl font-semibold my-4">
        Top Outdoor Activities Of The Season
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4 md:gap-8 mt-8">
        {activities.map((activity, index) => (
          <FlipCard key={index} data={activity} />
        ))}
      </div>
    </div>
  );
};

export default TopActivities;
