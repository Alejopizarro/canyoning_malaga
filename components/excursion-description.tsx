import InfoBanner from "./info-banner";

interface ExcursionDescriptionProps {
  excursion: {
    title: string;
    category: string;
    price: number;
    days?: string;
    minimumAge?: number;
    ubication?: string;
    duration: number;
    province?: string;
    level: "easy" | "moderate" | "advanced";
    specialPrice?: string;
  };
}

const ExcursionDescription = (props: ExcursionDescriptionProps) => {
  const { excursion } = props;
  return (
    <>
      <div className="w-full flex items-end justify-between">
        <h2 className="flex flex-col gap-2">
          <p className="text-lg text-gray-600">{excursion.category}</p>
          <p className="text-4xl md:text-5xl font-bold">{excursion.title}</p>
        </h2>
        <div className="text-primary flex items-center gap-2">
          <span className="text-xl text-gray-600 mt-1.5">From</span>
          <p className="text-4xl md:text-5xl font-extrabold">
            {excursion.price}€{excursion.specialPrice ? "*" : ""}
          </p>
        </div>
      </div>
      {excursion.specialPrice && (
        <p className="text-md text-primary font-medium">
          * {excursion.specialPrice}
        </p>
      )}
      <InfoBanner
        ubication={excursion.ubication}
        duration={excursion.duration}
        minimumAge={excursion.minimumAge}
        province={excursion.province}
        level={excursion.level}
      />
    </>
  );
};

export default ExcursionDescription;
