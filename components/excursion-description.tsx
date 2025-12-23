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
  };
}

const ExcursionDescription = (props: ExcursionDescriptionProps) => {
  const { excursion } = props;
  return (
    <>
      <div className="w-full flex justify-between">
        <h2 className="flex flex-col gap-2">
          <p className="text-lg text-gray-600">{excursion.category}</p>
          <p className="text-4xl font-semibold">{excursion.title}</p>{" "}
        </h2>
        <div className="text-primary flex flex-col items-end justify-center gap-2">
          <p className="text-lg">{excursion.days}</p>
          <p className="text-5xl font-extrabold">{excursion.price}€</p>
        </div>
      </div>
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
