"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question:
      "I've never done canyoning or via ferrata before. Do I need previous experience?",
    answer:
      "Not at all! Most of our popular activities in Marbella and Málaga, such as the Guadalmina Canyon or the Ronda Via Ferrata, are specifically designed for beginners. Our certified professional guides will teach you all the necessary techniques (rappelling, jumping, and progression) in a safe and controlled environment. We adapt the pace to your level so you can focus on the fun!",
  },
  {
    question:
      "Can I bring my children? What is the minimum age for adventure activities?",
    answer:
      "Yes! We are specialists in family adventure. For canyoning in Benahavís, children as young as 6 years old can join the fun, provided they can swim. For via ferratas, the minimum age starts at 6-7 years in Ronda or Benaoján. We provide specialized technical gear for smaller sizes to ensure their total safety.",
  },
  {
    question:
      "Is the equipment included, and what kind of shoes should I wear?",
    answer:
      "We provide all technical safety gear: high-quality wetsuits, helmets, and harnesses, all regularly inspected. You can find what you need to bring in the description of each activity. Regarding footwear, for canyoning you must wear closed sports shoes with good grip that can get wet (no flip-flops or water shoes). If you prefer, we offer professional canyoning boots for rent as an optional extra for maximum safety and comfort.",
  },
  {
    question: "How and when will I receive the photos of my activity?",
    answer:
      "You don't need to risk your phone in the water! We include a full photo report for free with every activity. Your guide will capture the best moments of your adventure, and we will send you a download link via WhatsApp within 24 hours.",
  },
  {
    question:
      "What happens if it rains on the day of my canyoning or adventure activity?",
    answer:
      "Adventure doesn't stop for a bit of rain! In fact, during the rainy season, canyons like Guadalmina offer an extra component of adventure that many of our guests love. It is perfectly possible to enjoy canyoning on a calm rainy day with our high-quality, regularly inspected neoprene and safety gear. However, your safety is our absolute commitment. Our certified professional guides have the definitive authority to modify or suspend any activity if weather conditions pose a danger to the group. In the event of heavy rain or adverse weather (Force Majeure), we follow this protocol: 1) Postponement: We will first make every effort to reschedule the activity for a new date. 2) Alternatives: We may offer an alternative adventure route that is safer under current conditions. 3) Refunds: If rescheduling or alternatives are not possible, a 100% refund will be made (excluding any non-refundable external services like transport or restaurant bookings already confirmed). We will always keep you informed of the weather conditions in the specific activity location before we begin.",
  },
  {
    question: "Can I book any of your activities at any time?",
    answer:
      "We offer a wide range of outdoor activities (more than 100) and their availability depends on several factors: time of year, weather conditions, availability of guides… That's why we make a selection of Top Activities of the Season, which you can book at any time during the season. We have special offers for these activities. If you are interested in any of our other activities, we will need to confirm that we are able to carry them out. Please contact us to check availability and prices.",
  },
  {
    question: "Are the activities available all year round?",
    answer:
      "Most of our activities, like Guadalmina canyoning and Puerto Banús kayaking, are available every day of the year thanks to the mild climate of the Costa del Sol. Some technical canyons like Río Verde or Buitreras have specific seasons from March to November to ensure optimal water levels.",
  },
  {
    question:
      "Where can I leave my belongings during the activity? Is it safe to leave things in my car?",
    answer:
      "For your peace of mind, we offer free storage space in our company vans for your small personal belongings during all our tours in Marbella, Málaga, and beyond. While meeting points are generally safe, we strongly advise against leaving valuables inside your vehicle. Please note that TUUR Adventure Experts is not responsible for any theft or damage to personal items left in cars or at the site. We recommend bringing only the essentials and manually checking that your car is locked before we start the adventure.",
  },
  {
    question: "What happens if I am running late for the meeting point?",
    answer:
      "Punctuality is essential for the safety and organization of the group. Important Timetable Note: Participants must arrive 15 minutes before the start time for the briefing. We grant a 15-minute courtesy waiting time for accidental delays; after this limit, the activity will commence without absent participants to avoid incurring extra operational costs, resulting in the forfeiture of service rights.",
  },
  {
    question: "What happens if the weather is bad on the day of the tour?",
    answer:
      "Safety is Our Commitment. Our certified guides have the definitive authority to modify or suspend an activity if conditions pose a danger. In case of heavy rain, we offer an alternative route, a new date, or a 100% refund.",
  },
  {
    question: "Where are the meeting points located?",
    answer:
      "We operate in the most iconic spots of Andalusia, including Marbella, Ronda, Otívar (Granada), and the Sierra de las Nieves. Upon booking, you will receive the exact location link and clear instructions for arrival.",
  },
  {
    question: "Do you offer transport from Marbella or Malaga?",
    answer:
      "Generally, customers make their own way to the meeting point. However, we can sometimes offer transport services from Marbella and premium packages with private transfers for activities such as Río Verde X-Pro. For large groups, we have agreements with local transport companies, so please ask us for details!",
  },
  {
    question: "Do I need to know how to swim to go canyoning?",
    answer:
      "Basic swimming skills are required for all aquatic activities. Most canyons feature natural pools and sections where floating or swimming is necessary for progression. However, our wetsuits provide buoyancy assistance and we offer free life jackets upon request for those who don't feel confident enough.",
  },
  {
    question: "Do I have to jump from the rocks?",
    answer:
      "Never! All jumps (even the 9-metre ones in Buitreras) are optional. There is always an alternative via abseiling, sliding or simply walking/swimming.",
  },
  {
    question: "Do I need to report any medical conditions?",
    answer:
      "Yes. It is mandatory to declare any illnesses, allergies or relevant medication before starting. Furthermore, it is not permitted to participate in the activity under the influence of alcohol or narcotics.",
  },
  {
    question: "Can I wear glasses or contact lenses for canyoning?",
    answer:
      "Yes, you can! However, to ensure you enjoy the stunning views of Guadalmina or Río Verde safely, we have specific recommendations based on our 15 years of experience as certified mountain guides. Contact Lenses (The Best Choice): We highly recommend wearing contact lenses if possible. They offer the best field of vision and are the safest option for vertical and aquatic progression. Pro Tip: To prevent them from moving or being washed away, simply remember to close your eyes tightly when performing water jumps, using natural slides, or during a rappel under a waterfall. Wearing Glasses (Precautions): If you must wear glasses, please follow these safety guidelines: If you only need glasses for reading and can see the ground clearly while walking on uneven terrain, it is safer to leave them in your vehicle or our secure storage van. Sports Straps are Mandatory: If you need them to move safely, you must use a neoprene sports strap or a secure cord that keeps them tight to your head to prevent them from falling into deep pools or down a cliff. Action Moments: We strongly recommend removing your glasses and handing them to your guide (or tucking them inside your wetsuit) specifically during jumps and slides. The impact of the water can easily knock them off, even with a strap. Expert Advice for Athletes: For technical routes like Buitreras or Río Verde X-Pro, if you use glasses, bringing a spare pair to leave in the van is a smart move. Safety is Our Commitment. Before starting any activity in Málaga, Ronda, or Granada, your professional guide will help you secure your gear to ensure you don't miss a single detail of the adventure.",
  },
  {
    question:
      "What is your cancellation policy if I can't make it? Can I cancel my booking and receive a refund?",
    answer:
      "For groups of less than 20 people, you will receive a 100% refund if you cancel more than 36 hours in advance. For large groups (+20 people), the policy varies depending on the resources already blocked (see general conditions). For cancellations due to Force Majeure (such as heavy rain or flooded river), we will first try to reschedule; if that's not possible, a full refund will be issued.",
  },
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <span className="ml-4 text-2xl text-gray-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
