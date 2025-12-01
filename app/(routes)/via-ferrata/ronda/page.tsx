import Bokun from "@/components/bokun";
import Hero from "@/components/hero";
import ReviewsCarousel from "@/components/ui/reviews-carousel";
import ExcursionDescription from "@/components/excursion-description";
import Faqs, { Faq } from "../../activities/components/faqs";
import { excursions } from "@/app/data";
import VfRondaDescription from "./vf-ronda-description";

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
  const ronda = excursions[8];
  const excursionHero = {
    mainImage: ronda.mainImage,
    images: ronda.images,
    title: ronda.title,
    subtitle: ronda.subtitle,
    categoryPath: ronda.categoryPath,
    categoryText: ronda.category,
    rating: {
      value: ronda.rating.value,
      totalReviews: ronda.rating.reviews,
    },
  };
  const excursionDescription = {
    title: ronda.title,
    category: ronda.category,
    price: ronda.price,
    days: ronda.days,
    minimumAge: ronda.minimumAge,
    ubication: ronda.ubication,
    duration: ronda.duration,
    level: ronda.level,
  };

  return (
    <div>
      <Hero excursion={excursionHero} />
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-x-16 px-4 sm:px-16 py-4 sm:py-8">
        <div className="flex flex-col gap-8">
          <ExcursionDescription excursion={excursionDescription} />
          <VfRondaDescription />
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
