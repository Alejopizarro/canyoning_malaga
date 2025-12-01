import Bokun from "@/components/bokun";
import Description from "@/components/description";
import Hero from "@/components/hero";
import Itinerary from "@/components/itinerary";
import ReviewsCarousel from "@/components/ui/reviews-carousel";
import ExcursionDescription from "@/components/excursion-description";
import Faqs, { Faq } from "../../activities/components/faqs";
import { excursions } from "@/app/data";

export const faqs: Faq[] = [
  {
    question: "What should I bring for the canyoning activity?",
    answer:
      "You should bring swimwear, a towel, water shoes or sturdy sandals, sunscreen, and a change of clothes.",
  },
  {
    question: "Is prior experience necessary for canyoning?",
    answer:
      "No prior experience is necessary. Our guides will provide all the necessary instructions and safety briefings.",
  },
  {
    question: "What is the age limit for participating in canyoning?",
    answer:
      "Participants must be at least 10 years old. Minors must be accompanied by an adult.",
  },
  {
    question: "Are there any health restrictions for canyoning?",
    answer:
      "Participants should be in good health. Those with heart conditions, pregnancy, or severe mobility issues should consult with us beforehand.",
  },
];

export default function Page() {
  const guadalmina = excursions[0];
  const excursionHero = {
    mainImage: guadalmina.mainImage,
    images: guadalmina.images,
    title: guadalmina.title,
    subtitle: guadalmina.subtitle,
    categoryPath: guadalmina.categoryPath,
    categoryText: guadalmina.category,
    rating: {
      value: guadalmina.rating.value,
      totalReviews: guadalmina.rating.reviews,
    },
  };
  const excursionDescription = {
    title: guadalmina.title,
    category: guadalmina.category,
    price: guadalmina.price,
    days: guadalmina.days,
    minimumAge: guadalmina.minimumAge,
    ubication: guadalmina.ubication,
    duration: guadalmina.duration,
    level: guadalmina.level,
  };

  return (
    <div>
      <Hero excursion={excursionHero} />
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-x-16 px-4 sm:px-16 py-4 sm:py-8">
        <div className="flex flex-col gap-8">
          <ExcursionDescription excursion={excursionDescription} />
          <div className="flex flex-col gap-4">
            <p className="text-gray-700 leading-relaxed">
              The Guadalmina Canyon (also known as{" "}
              <strong>The Narrowest Canyon</strong>) is located in the town of
              Benahavis, very close to Marbella.
            </p>

            <p className="text-gray-700 leading-relaxed">
              It &apos;s a perfect activity for all levels of experience, where
              everyone, from children to adults, can enjoy an amazing and fun
              activity every day of the year, even in the winter season, thanks
              to its temperate waters.
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
        </div>
        <div className="flex flex-col space-y-8">
          <Bokun />
          <div className="relative w-full aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/S3E0cKEYCSQ"
              title="Guadalmina Canyon Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <ReviewsCarousel />
      <Faqs faqs={faqs} />
    </div>
  );
}
