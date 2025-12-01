import Bokun from "@/components/bokun";
import Hero from "@/components/hero";
import ReviewsCarousel from "@/components/ui/reviews-carousel";
import ExcursionDescription from "@/components/excursion-description";
import Faqs, { Faq } from "../../activities/components/faqs";
import { excursions } from "@/app/data";
import SimaDelDiabloDescription from "./sima-diablo-description";

const faqs: Faq[] = [
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
  const simaDiablo = excursions[3];
  const excursionHero = {
    mainImage: simaDiablo.mainImage,
    images: simaDiablo.images,
    title: simaDiablo.title,
    subtitle: simaDiablo.subtitle,
    categoryPath: simaDiablo.categoryPath,
    categoryText: simaDiablo.category,
    rating: {
      value: simaDiablo.rating.value,
      totalReviews: simaDiablo.rating.reviews,
    },
  };
  const excursionDescription = {
    title: simaDiablo.title,
    category: simaDiablo.category,
    price: simaDiablo.price,
    days: simaDiablo.days,
    minimumAge: simaDiablo.minimumAge,
    ubication: simaDiablo.ubication,
    duration: simaDiablo.duration,
    level: simaDiablo.level,
  };

  return (
    <div>
      <Hero excursion={excursionHero} />
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-x-16 px-4 sm:px-16 py-4 sm:py-8">
        <div className="flex flex-col gap-8">
          <ExcursionDescription excursion={excursionDescription} />
          <SimaDelDiabloDescription />
        </div>
        <div className="flex flex-col space-y-8">
          <Bokun />
        </div>
      </div>
      <ReviewsCarousel />
      <Faqs faqs={faqs} />
    </div>
  );
}
