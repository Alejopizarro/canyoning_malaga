import Bokun from "@/components/bokun";
import Hero from "@/components/hero";
import ReviewsCarousel from "@/components/ui/reviews-carousel";
import ExcursionDescription from "@/components/excursion-description";
import Faqs, { Faq } from "../../activities/components/faqs";
import { excursions } from "@/app/data";
import CalzadillasDescription from "./calzadillas-description";

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
  const calzadillas = excursions[7];
  const excursionHero = {
    mainImage: calzadillas.mainImage,
    images: calzadillas.images,
    title: calzadillas.title,
    subtitle: calzadillas.subtitle,
    categoryPath: calzadillas.categoryPath,
    categoryText: calzadillas.category,
    rating: {
      value: calzadillas.rating.value,
      totalReviews: calzadillas.rating.reviews,
    },
  };
  const excursionDescription = {
    title: calzadillas.title,
    category: calzadillas.category,
    price: calzadillas.price,
    days: calzadillas.days,
    minimumAge: calzadillas.minimumAge,
    ubication: calzadillas.ubication,
    duration: calzadillas.duration,
    level: calzadillas.level,
  };

  return (
    <div>
      <Hero excursion={excursionHero} />
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-x-16 px-4 sm:px-16 py-4 sm:py-8">
        <div className="flex flex-col gap-8">
          <ExcursionDescription excursion={excursionDescription} />
          <CalzadillasDescription />
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
