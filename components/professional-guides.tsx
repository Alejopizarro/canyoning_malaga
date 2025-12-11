import Image from "next/image";
import Carousel from "./ui/carousel";

interface Guide {
  name: string;
  role: string;
  description: string;
  image: string;
}

const guides: Guide[] = [
  {
    name: "Sixto Serrano",
    role: "Safety and Rescue Expert",
    description:
      "Sixto is one of our most experienced and technical guides, an expert in speleology and high altitude rescue. He has a degree in Physical Activity and Sports Science and is a Sports Technician in Speleology and Canyoning. He is also a director at the Andalusian Speleology School and a member of the Andalusian Speleo-Rescue Team. He is also a World Champion in High Altitude Rescue.",
    image: "/team/sixto-serrano.jpg",
  },
  {
    name: "Adrian Jimenez",
    role: "Canyoning and Rescue Expert",
    description:
      "Although Adrian's physical appearance can be intimidating, he is one of our most responsible and fun guides... as long as you do what he tells you to do. He is a Sports Technician in Canyoning and a Higher Technician in Physical and Sports Activities. He is also a firefighter and could cosplay Kratos from God of War.",
    image: "/team/adrian-jimenez.jpg",
  },
  {
    name: "Juan Carlos Higuera",
    role: "Canyoning and MTB Guide",
    description:
      "Juanchi is our most recent acquisition. He is a young but very professional mountain guide. He is a Technician in Conduction of Physical-Sports Activities in the Natural Environment and a Higher Technician Animation of Physical and Sports Activities. He is also a Snowboard and Ski Sports Technician. He is a ski instructor in Sierra Nevada, passionate about MTB and a paddle tennis player at national level.",
    image: "/team/juan-carlos-higuera.jpg",
  },
  {
    name: "Kevin Niemcansky",
    role: "Product Manager",
    description:
      "Kevin is part of our office team and is responsible for the design and management of TUUR's activities. He is an Industrial Designer, specializing in UX/UI design and Digital Products. He is also a former university lecturer and a semi-outdoor enthusiast, which is why he sometimes helps us with large group activities. Don't let the name and his looks fool you. He's Argentinian.",
    image: "/team/kevin-niemcansky.jpg",
  },
  {
    name: "Jose Moreno",
    role: "CEO & Lead Guide",
    description:
      "Jose is the founder and CEO of TUUR Adventure. With over 15 years of experience in outdoor activities, he leads our team with passion and expertise. He holds certifications in Medium Mountain, Canyoning, and Kayaking, and is an expert in sport and classic climbing.",
    image: "/team/jose-moreno.jpg",
  },
];

const GuideCard = ({ guide }: { guide: Guide }) => (
  <article className="bg-white">
    {/* Image */}
    <div className="relative h-48 bg-gray-200 rounded-full w-48 mx-auto mb-4 overflow-hidden">
      <Image src={guide.image} alt={guide.name} fill className="object-cover" />
    </div>

    {/* Content */}
    <div className="text-left">
      <h3 className="text-base font-bold text-gray-900">{guide.name}</h3>
      <p className="text-sm text-emerald-600 font-medium mb-3">{guide.role}</p>
      <p className="text-xs text-gray-500 leading-relaxed line-clamp-6">
        {guide.description}
      </p>
    </div>
  </article>
);

export default function ProfessionalGuides() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
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
            href="/careers"
            className="inline-flex items-center px-5 py-2.5 border-2 border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
          >
            Open positions
          </a>
        </div>
      </div>
    </section>
  );
}
