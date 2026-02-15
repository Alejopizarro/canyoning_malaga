import Link from "next/link";
import GridHero from "./grid-hero";
import StarRating from "./ui/stars-rating";
import { Image } from "@/app/data";
import { Star } from "lucide-react";

interface Excursion {
  mainImage: Image;
  images: Image[];
  title: string;
  subtitle?: string;
  categoryPath?: string;
  categoryText: string;
  isMostPopular?: boolean;
  rating: {
    value: number;
    totalReviews: number;
  };
  videoYoutube?: string;
}

interface HeroProps {
  excursion: Excursion;
}

const Hero = (props: HeroProps) => {
  const { excursion } = props;

  return (
    <div className="flex flex-col justify-center max-w-[1440px] mx-auto space-y-4 px-4 sm:px-16 py-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-sm inline-flex text-gray-500 mb-2">
            <Link
              href="/activities"
              className="pr-1 hover:text-gray-700 transition-colors"
            >
              activities
            </Link>
            {excursion.categoryPath && (
              <>
                {" > "}
                <span className="px-1">{excursion.categoryPath}</span>
              </>
            )}
            {" > "}
            <Link
              href={`/activities/${excursion.categoryPath?.toLowerCase()}/${excursion.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="pl-1 font-semibold hover:text-gray-700 transition-colors"
            >
              {excursion.title.toLowerCase()}
            </Link>
          </p>
          <h1 className="text-4xl font-extrabold mb-2 tracking-tight">
            {!excursion.subtitle ? excursion.title : excursion.subtitle}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-xl ">
            <StarRating
              value={excursion.rating.value}
              totalReviews={excursion.rating.totalReviews}
            />

            {excursion.isMostPopular ? (
              <p className="text-sm flex items-center bg-gray-200 px-2 py-1 font-semibold text-gray-700 ">
                <Star size={12} className="mr-1" />
                Most Popular
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <GridHero
        mainImage={excursion.mainImage}
        videoYoutube={excursion.videoYoutube}
        images={excursion.images}
      />
    </div>
  );
};
export default Hero;
