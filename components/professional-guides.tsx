"use client";

import Image from "next/image";
import Carousel from "./ui/carousel";
import { useState } from "react";

interface Guide {
  name: string;
  role: string;
  description: string;
  image: string;
}

const guides: Guide[] = [
  {
    name: "José Moreno",
    role: "CEO & Lead Guide",
    description:
      "José has over 20 years experience in outdoor activities and is the founder of TUUR. He has professional qualifications and extensive experience in Medium Mountain Activities, Canyoning, Kayaking and is an expert and extremely passionate in Sport and Classical Climbing (he appears in more than one climbing magazine). An architect by profession and an entrepreneur at heart, he also plays the clarinet and is a native French speaker.",
    image: "/jose-moreno.webp",
  },
  {
    name: "José Cecilia",
    role: "Activities Coordinator",
    description:
      "'Ceci' is our Activities Coordinator, always paying attention to detail and ensuring that all protocols are followed for a safe and enjoyable experience. He is an expert in canyoning and MTB and a professional grade instructor of 'Technician in Conducting Physical-Sports Activities in the Natural Environment'. He has taken part in several MTB competitions and loves outdoor activities and camping in his van with his family and two dogs, Haki and Hoko.",
    image: "/jose-cecilia.webp",
  },
  {
    name: "Juan Antonio Salas",
    role: "Canyoning and Hiking Expert",
    description:
      "Juan Antonio is one of our most experienced guides, but don't let the grey hair fool you, he is one of the fittest! He is a qualified sports technician in canyoning and in leading physical activities in the natural environment, as well as being an expert in mountain trekking, water activities and outdoor survival. His many years of experience guiding groups has given him great leadership skills, with a great mix of responsibility and fun.",
    image: "/juan-antonio-salas.webp",
  },
  {
    name: "Jose Carlos Rodríguez",
    role: "Technical Coordinator Canyoning",
    description:
      "'Txus' specialises in advanced canyoning techniques and loves to challenge himself and others. He is a Sport Technician in Canyoning, Medium Mountain and Caving, as well as a Superior Grade Technician in Physical and Sport Activities. He is also one of the Andalusian Champions of Canyoning.",
    image: "/jose-carlos-rodriguez.webp",
  },
  {
    name: "Isra Navarro",
    role: "Beach Activities Coordinator",
    description:
      "Isra loves outdoor activities and leading teams with professionalism and a lot of humour. He is a certified canyoning guide, Technician in Conducting Physical-Sport Activities in the Natural Environment, Ski instructor, and a Sport Climbing expert. He is also a dog trainer, has his own brand of steel jewellery and is a STAG and HEN party entertainer.",
    image: "/israel-navarro.webp",
  },
  {
    name: "Krishna Salleras",
    role: "Canyoning and MTB Guide",
    description:
      "Krishna brings sense and calm to the group, probably thanks to his psychologist side. He is a Technician in Conduction of Physical-Sport Activities in the Natural Environment, Expert in MTB, Canyoning, Mechanics and Construction of Mountain Refuges. He has an organic vegetable garden and speaks French and German.",
    image: "/krishna-salleras.webp",
  },
  {
    name: "Alejandro Pavón",
    role: "Youth Camp Coordinator",
    description:
      "'Alex' is one of our youngest and friendliest guide, but no less professional. He is an expert in Physical Activities and Sports Programmes, a Certified Canyoning and Speleology Guide. He's also a Ski Instructor in Sierra Nevada. He also speaks French and could have been a magazine model... Quite a catch!",
    image: "/alejandro-pavon.webp",
  },
  {
    name: "Juan Carlos Higuera",
    role: "Canyoning Guide",
    description:
      "'Juanka' is a highly professional young mountain guide. He is a certified Technician in Physical and Sports Activities in Natural Environments and a Senior Technician in Physical and Sports Activities Facilitation. He is also a Snowboard and Ski Technician. He is a ski instructor in Sierra Nevada, a mountain bike enthusiast, and a national-level paddle tennis player.",
    image: "/juan-carlos-higuera.webp",
  },
  {
    name: "Juan Gil",
    role: "Canyoning Guide",
    description:
      "Juan Gil is one of our dedicated canyoning guides, bringing enthusiasm and professionalism to every adventure.",
    image: "/juan-gil.webp",
  },
  {
    name: "Flor Hervas",
    role: "Canyoning and MTB Guide",
    description:
      "Don't let her size fool you, Flor is one of our most experienced and professional canyoning and mountain biking guides. She is a Technician in Leading Physical Sports Activities in the Natural Environment and Leisure, and an expert in mountain and MTB routes. She is also a mother, entrepreneur and cross-fitter. A true role model!",
    image: "/flor-hervas.webp",
  },
  {
    name: "Andrés Ortiz",
    role: "Canyoning Guide",
    description:
      "'Andy' is a versatile and enthusiastic member of our team. He brings a unique blend of skills and experiences to ensure your canyoning experience is both thrilling and safe. He is a certified ICAN Canyoning Guide and also has a diverse work background, including working as a horseback riding guide in the Pyrenees. His personal interests include climbing and surfing, reflecting his love for the outdoors. He is currently completing his Mechanical Engineering degree.",
    image: "/andres-ortiz.webp",
  },
  {
    name: "Tomás Loring",
    role: "Canyoning Guide",
    description:
      "'Tomy' is one of our most recent acquisitions. With a passion for the outdoors and a dedication to safety, he ensures every trip is unforgettable. He holds a degree in Sports Science and a Master's in Education. His extensive background in sports includes competitive triathlon and tennis, alongside his specialization in climbing, where he's also an instructor. Before joining us, Tomy lived in Scotland for three years.",
    image: "/tomas-loring.webp",
  },
  {
    name: "Benjamín",
    role: "Canyoning Guide",
    description:
      "'Benja' is from Chile and is passionate about the environment. He studied ecotourism in South America and travelled in Brazil before moving to Spain. He is a certified ICAN Canyoning Guide and Climbing Instructor, has experience as a climbing monitor in Málaga, both in climbing gyms and in natural environments. When he's not leading groups through canyons, he likes to relax by playing football and exploring Spain on foot to find new climbing spots.",
    image: "/benjamin.webp",
  },
  {
    name: "Adrián Giménez",
    role: "Canyoning and Rescue Expert",
    description:
      "Although Adrian's physical appearance can be intimidating, he is one of our most responsible and fun guides... as long as you do what he tells you to do. He is a Sports Technician in Canyoning and a Higher Technician in Physical and Sports Activities. He is also a firefighter and could cosplay Kratos from God of War.",
    image: "/adrian-gimenez.webp",
  },
  {
    name: "Sixto Serrano",
    role: "Safety and Rescue Expert",
    description:
      "Sixto is one of our most experienced and technical guides, an expert in speleology and high-altitude rescue. He has a degree in Physical Activity and Sports Science and is a Sports Technician in Speleology and Canyoning. He is also a teacher at the Andalusian Speleology School and a member of the Andalusian Speleo-Rescue Team. He is also a World Champion in High Altitude Rescue.",
    image: "/sixto-serrano.webp",
  },
  {
    name: "Francisco Delgado",
    role: "Expert in Maritime Activities",
    description:
      "Fran was one of our youngest canyoning apprentices, and today he is already a professional. In addition to being a canyoning guide, he is a Yachtmaster, Yacht Skipper and Jet Ski instructor.",
    image: "/francisco-delgado.webp",
  },
  {
    name: "Kevin Nemcansky",
    role: "Product Manager",
    description:
      "Kevin is part of our office team and is responsible for the design and management of TUUR's activities. He is an Industrial Designer, specialising in UX/UI design and Digital Products. He is also a former university lecturer and a keen outdoor enthusiast, which is why he sometimes helps us with large group activities. Don't let his name and his looks fool you, he's Argentinian.",
    image: "/kevin-nemcansky.webp",
  },
];

const GuideCard = ({ guide }: { guide: Guide }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="flex flex-col h-full">
      {/* Image */}
      <div className="relative h-48 bg-gray-200 rounded-full w-48 mx-auto mb-4 overflow-hidden flex-shrink-0">
        <Image
          src={guide.image}
          alt={guide.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="text-left flex-1 flex flex-col">
        <h3 className="text-base font-bold text-gray-900">{guide.name}</h3>
        <p className="text-sm text-primary font-medium mb-3">{guide.role}</p>
        <div className="flex-1">
          <p
            className={`text-xs text-gray-500 leading-relaxed ${
              isExpanded ? "" : "line-clamp-6"
            }`}
          >
            {guide.description}
          </p>
          {guide.description.length > 200 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-xs text-primary hover:text-primary-dark font-semibold transition-colors"
            >
              {isExpanded ? "See less" : "See more"}
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default function ProfessionalGuides() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 max-w-[1440px] mx-auto bg-background">
      <div>
        {/* Header */}
        <div className="mb-10">
          <p className="text-gray-500 text-sm mb-2">Our Team</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Professional Guides
          </h2>
          <p className="text-gray-600 max-w-xl">
            We are proud to work with the best professional local guides,
            internationally certified in canyoning.
          </p>
        </div>

        {/* Carousel */}
        <Carousel itemWidth="w-[220px] md:w-[250px]" maxDots={5}>
          {guides.map((guide, index) => (
            <GuideCard key={index} guide={guide} />
          ))}
        </Carousel>

        {/* Hiring Banner */}
        <div className="mt-16 pt-10 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            We&apos;re hiring!
          </h3>
          <p className="text-gray-600 mb-4">
            Explore exciting career opportunities with us.
          </p>
          <a
            href="mailto:tuurcanyoning@gmail.com"
            className="inline-flex items-center px-5 py-2.5 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-colors"
          >
            Send Us Your CV
          </a>
        </div>
      </div>
    </section>
  );
}
