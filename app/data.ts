export interface Rating {
  value: number;
  reviews: number;
}

export interface Image {
  src: string;
  alt: string;
}

export interface Excursion {
  title: string;
  route: string;
  subtitle?: string;
  description: string;
  videoYoutube: string;
  days?: string;
  price: string;
  mainImage: Image;
  images: Image[];
  isOffer: boolean;
  isMostPopular: boolean;
  rating: Rating;
  minimumAge?: number;
  ubication?: string;
  duration: number; // in hours
  level: "easy" | "moderate" | "advanced";
  province: string;
  category: string;
  categoryPath?: string;
}

export const excursions: Excursion[] = [
  // CANYONING
  {
    title: "Guadalmina",
    route: "guadalmina",
    subtitle: "The Best Canyoning Experience Near Marbella",
    description:
      "Perfect canyoning descent for beginners. Close to Marbella, ideal for families. Available all year round.",
    videoYoutube: "",
    price: "45€",
    days: "Every day!",
    mainImage: {
      src: "/guadalmina-1.webp",
      alt: "Guadalmina canyon - The Best Canyoning Experience Near Marbella",
    },
    images: [
      {
        src: "/guadalmina-2.webp",
        alt: "Guadalmina canyon - The narrowest canyon, guadalmina",
      },
      {
        src: "/guadalmina-3.webp",
        alt: "Guadalmina canyon - Jump into the guadalmina canyon",
      },
      {
        src: "/guadalmina-4.webp",
        alt: "Guadalmina canyon - Rapelling down a waterfall in guadalmina canyon",
      },
      {
        src: "/guadalmina-5.webp",
        alt: "Guadalmina canyon - Slide down natural water slides in guadalmina canyon",
      },
    ],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 4.8,
      reviews: 2087,
    },
    level: "easy",
    ubication: "Marbella",
    duration: 3,
    minimumAge: 6,
    province: "Málaga",
    category: "Canyoning",
    categoryPath: "canyoning",
  },
  {
    title: "Rio Verde",
    route: "rio-verde",
    subtitle: "Rio Verde Granada Canyoning - Adventures in Crystaline Waters",
    description:
      "One of the best canyons in Andalusia. Turquoise waters, optional jumps and rappelling. Fun guaranteed.",
    videoYoutube: "",
    price: "75€",
    days: "Wednesday",
    mainImage: {
      src: "/rio-verde-1.jpg",
      alt: "Rio Verde canyon - One of the best canyons in Andalusia",
    },
    categoryPath: "canyoning",
    category: "Canyoning",
    images: [
      {
        src: "/rio-verde-2.jpg",
        alt: "Rio Verde canyon - Turquoise waters in rio verde canyon",
      },
      {
        src: "/rio-verde-3.jpg",
        alt: "Rio Verde canyon - Rappelling down a waterfall in rio verde canyon",
      },
      {
        src: "/rio-verde-4.jpg",
        alt: "Rio Verde canyon - Jumping into a natural pool in rio verde canyon",
      },
      {
        src: "/rio-verde-5.jpg",
        alt: "Rio Verde canyon - Sliding down a natural water slide in rio verde canyon",
      },
    ],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 4,
      reviews: 5,
    },
    level: "moderate",
    province: "Granada",
    duration: 4.5,
    ubication: "Otivar",
    minimumAge: 9,
  },
  {
    title: "Rio Verde X-PRO",
    route: "rio-verde-xpro",
    subtitle:
      "Advanced Canyoning in Rio Verde - Higher Jumps and Technical Rappelling",
    description:
      "Advanced version of Rio Verde. Pure adrenaline with higher jumps and technical rappelling. For experienced adventurers.",
    videoYoutube: "",
    price: "79€",
    days: "All year",
    mainImage: {
      src: "/rio-verde-4.jpg",
      alt: "Rio Verde canyon - One of the best canyons in Andalusia",
    },
    categoryPath: "canyoning",
    category: "Canyoning",
    images: [
      {
        src: "/rio-verde-2.jpg",
        alt: "Rio Verde canyon - Turquoise waters in rio verde canyon",
      },
      {
        src: "/rio-verde-3.jpg",
        alt: "Rio Verde canyon - Rappelling down a waterfall in rio verde canyon",
      },
      {
        src: "/rio-verde-1.jpg",
        alt: "Rio Verde canyon - Jumping into a natural pool in rio verde canyon",
      },
      {
        src: "/rio-verde-5.jpg",
        alt: "Rio Verde canyon - Sliding down a natural water slide in rio verde canyon",
      },
    ],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 5,
      reviews: 2,
    },
    level: "advanced",
    province: "Granada",
    duration: 7,
    minimumAge: 15,
    ubication: "Otivar",
  },
  {
    title: "Sima del Diablo (Guadiaro Gorge)",
    route: "sima-del-diablo",
    subtitle: "Sima del Diablo in Málaga: a canyon for all ages",
    days: "All year",
    description:
      "Technical canyon near the Smurf Village. Higher rappels than Guadalmina. Ideal for intermediate level.",
    videoYoutube: "",
    price: "59€",
    mainImage: {
      src: "/sima-del-diablo.jpg",
      alt: "Sima del Diablo - Technical canyon near the Smurf Village",
    },
    images: [
      {
        src: "/sima-del-diablo.jpg",
        alt: "Sima del Diablo - Technical canyon near the Smurf Village",
      },
      {
        src: "/sima-del-diablo.jpg",
        alt: "Sima del Diablo - Technical canyon near the Smurf Village",
      },
      {
        src: "/sima-del-diablo.jpg",
        alt: "Sima del Diablo - Technical canyon near the Smurf Village",
      },
      {
        src: "/sima-del-diablo.jpg",
        alt: "Sima del Diablo - Technical canyon near the Smurf Village",
      },
    ],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 4.7,
      reviews: 20,
    },
    level: "easy",
    province: "Málaga",
    category: "Canyoning",
    categoryPath: "canyoning",
    duration: 4,
    minimumAge: 8,
    ubication: "Júzcar",
  },
  {
    title: "Buitreras",
    route: "buitreras",
    subtitle: "Buitreras Canyon in Malaga: an astonishing environment",
    description:
      "The Cathedral of Andalusian Canyons. Walls over 100 meters high. An unprecedented visual experience.",
    videoYoutube: "",
    price: "69€",
    days: "15/6 to 30/11",
    mainImage: {
      src: "/buitreras-1.png",
      alt: "Buitreras canyon - The Cathedral of Andalusian Canyons",
    },
    images: [
      {
        src: "/buitreras-2.png",
        alt: "Buitreras canyon - Narrow passage in buitreras canyon",
      },
      {
        src: "/buitreras-3.png",
        alt: "Buitreras canyon - Rappelling down a waterfall in buitreras canyon",
      },
      {
        src: "/buitreras-4.png",
        alt: "Buitreras canyon - Jumping into a natural pool in buitreras canyon",
      },

      {
        src: "/buitreras-5.png",
        alt: "Buitreras canyon - Sliding down a natural water slide in buitreras canyon",
      },
      {
        src: "/buitreras-6.png",
        alt: "Buitreras canyon - Spectacular walls in buitreras canyon",
      },
      {
        src: "/buitreras-7.png",
        alt: "Buitreras canyon - Beautiful landscapes in buitreras canyon",
      },
      {
        src: "/buitreras-8.png",
        alt: "Buitreras canyon - Adventurers in buitreras canyon",
      },
      {
        src: "/buitreras-9.png",
        alt: "Buitreras canyon - Crystal clear waters in buitreras canyon",
      },
      {
        src: "/buitreras-10.png",
        alt: "Buitreras canyon - Nature in buitreras canyon",
      },
    ],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 4.8,
      reviews: 5,
    },
    level: "moderate",
    province: "Cádiz",
    category: "Canyoning",
    categoryPath: "canyoning",
    duration: 6,
    ubication: "Colm. de la Fra.",
    minimumAge: 8,
  },
  {
    title: "Tajo de Ronda",
    route: "tajo-de-ronda",
    subtitle:
      "Tajo River Canyon in Ronda: adventures in a thousand-year-old city",
    days: "Mar to Jun & Sep to Nov",
    description:
      "Cross through the ancient city of Ronda. Privileged views of the New Bridge and historical monuments.",
    videoYoutube: "",
    price: "69€",
    mainImage: {
      src: "/Tajo-ronda-1.jpg",
      alt: "Tajo de Ronda - Cross through the ancient city of Ronda",
    },
    images: [
      {
        src: "/Tajo-ronda-2.jpg",
        alt: "Tajo de Ronda - Spectacular views of the New Bridge in Ronda canyon",
      },
      {
        src: "/Tajo-ronda-3.jpg",
        alt: "Tajo de Ronda - Rappelling down a waterfall in Ronda canyon",
      },
      {
        src: "/Tajo-ronda-4.jpg",
        alt: "Tajo de Ronda - Jumping into a natural pool in Ronda canyon",
      },
      {
        src: "/Tajo-ronda-5.jpg",
        alt: "Tajo de Ronda - Sliding down a natural water slide in Ronda canyon",
      },
      {
        src: "/Tajo-ronda-6.jpg",
        alt: "Tajo de Ronda - Beautiful landscapes in Ronda canyon",
      },
      {
        src: "/Tajo-ronda-7.jpg",
        alt: "Tajo de Ronda - Adventurers in Ronda canyon",
      },
      {
        src: "/Tajo-ronda-8.jpg",
        alt: "Tajo de Ronda - Crystal clear waters in Ronda canyon",
      },
      {
        src: "/Tajo-ronda-9.jpg",
        alt: "Tajo de Ronda - Nature in Ronda canyon",
      },
      {
        src: "/Tajo-ronda-10.jpg",
        alt: "Tajo de Ronda - Canyon walls in Ronda canyon",
      },
    ],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 4.6,
      reviews: 20,
    },
    level: "moderate",
    province: "Málaga",
    category: "Canyoning",
    categoryPath: "canyoning",
    duration: 4,
    minimumAge: 8,
    ubication: "Ronda",
  },
  {
    title: "Trevelez",
    route: "trevelez",
    subtitle:
      "Trevelez Canyon in Granada: An intense canyon in the foothills of Sierra Nevada",
    days: "September",
    description:
      "The highest level technical canyon in Andalusia. 14 rappels in Sierra Nevada. Only August and September.",
    videoYoutube: "",
    price: "120€",
    mainImage: {
      src: "/trevelez-1.jpg",
      alt: "Trevelez canyon - The highest level technical canyon in Andalusia",
    },
    images: [
      {
        src: "/trevelez-2.jpg",
        alt: "Trevelez canyon - Narrow passage in trevelez canyon",
      },
      {
        src: "/trevelez-3.jpg",
        alt: "Trevelez canyon - Rappelling down a waterfall in trevelez canyon",
      },
      {
        src: "/trevelez-4.jpg",
        alt: "Trevelez canyon - Jumping into a natural pool in trevelez canyon",
      },
      {
        src: "/trevelez-5.jpg",
        alt: "Trevelez canyon - Sliding down a natural water slide in trevelez canyon",
      },
      {
        src: "/trevelez-6.jpg",
        alt: "Trevelez canyon - Spectacular walls in trevelez canyon",
      },
    ],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 4.4,
      reviews: 5,
    },
    level: "advanced",
    province: "Granada",
    category: "Canyoning",
    categoryPath: "canyoning",
    duration: 8,
    minimumAge: 18,
    ubication: "Órgiva",
  },
  {
    title: "Calzadillas",
    route: "calzadillas",
    subtitle:
      "Calzadillas Canyon in Seville: The Best Place to Learn Canyoning",
    description:
      "Granite canyon in Sierra Norte. Three spectacular rappels. Perfect for autumn, winter and spring.",
    videoYoutube: "",
    days: "Winter",
    price: "69€",
    mainImage: {
      src: "/Calzadillas-1.jpg",
      alt: "Calzadillas canyon - Granite canyon in Sierra Norte",
    },
    images: [
      {
        src: "/Calzadillas-2.jpg",
        alt: "Calzadillas canyon - Rappelling down a waterfall in calzadillas canyon",
      },
      {
        src: "/Calzadillas-3.jpg",
        alt: "Calzadillas canyon - Jumping into a natural pool in calzadillas canyon",
      },
      {
        src: "/Calzadillas-4.jpg",
        alt: "Calzadillas canyon - Sliding down a natural water slide in calzadillas canyon",
      },
      {
        src: "/Calzadillas-5.jpg",
        alt: "Calzadillas canyon - Beautiful landscapes in calzadillas canyon",
      },
      {
        src: "/Calzadillas-6.jpg",
        alt: "Calzadillas canyon - Adventurers in calzadillas canyon",
      },
      {
        src: "/Calzadillas-7.jpg",
        alt: "Calzadillas canyon - Crystal clear waters in calzadillas canyon",
      },
    ],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 0,
      reviews: 0,
    },
    level: "moderate",
    province: "Sevilla",
    category: "Canyoning",
    categoryPath: "canyoning",
    duration: 4.5,
    minimumAge: 11,
    ubication: "Almadén Plate",
  },

  // VIA FERRATA
  {
    title: "Via Ferrata Ronda",
    route: "ronda",
    subtitle:
      "Via Ferrata in Ronda (Malaga) - This is the ideal via ferrata for families",
    days: "All year",
    description:
      "Family-friendly via ferrata at Tajo de Ronda. Spectacular views of the New Bridge. Ideal for beginners from 7 years old.",
    videoYoutube: "",
    price: "44€",
    mainImage: {
      src: "/VF-Ronda-1.jpg",
      alt: "Via Ferrata Ronda - Family-friendly via ferrata at Tajo de Ronda",
    },
    images: [
      {
        src: "/VF-Ronda-2.jpg",
        alt: "Via Ferrata Ronda - Spectacular views of the New Bridge in via ferrata ronda",
      },
      {
        src: "/VF-Ronda-3.jpg",
        alt: "Via Ferrata Ronda - Crossing a monkey bridge in via ferrata ronda",
      },
      {
        src: "/VF-Ronda-4.jpg",
        alt: "Via Ferrata Ronda - Rappelling down a waterfall in via ferrata ronda",
      },
      {
        src: "/VF-Ronda-5.jpg",
        alt: "Via Ferrata Ronda - Adventurers in via ferrata ronda",
      },
      {
        src: "/VF-Ronda-6.jpg",
        alt: "Via Ferrata Ronda - Nature in via ferrata ronda",
      },
      {
        src: "/VF-Ronda-7.jpg",
        alt: "Via Ferrata Ronda - Canyon walls in via ferrata ronda",
      },
      {
        src: "/VF-Ronda-8.jpg",
        alt: "Via Ferrata Ronda - Spectacular landscapes in via ferrata ronda",
      },
      {
        src: "/VF-Ronda-9.jpg",
        alt: "Via Ferrata Ronda - Aerial views in via ferrata ronda",
      },
      {
        src: "/VF-Ronda-10.jpg",
        alt: "Via Ferrata Ronda - Excitement in via ferrata ronda",
      },
    ],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 0,
      reviews: 0,
    },
    level: "easy",
    province: "Málaga",
    category: "Via Ferrata",
    categoryPath: "via-ferrata",
    duration: 2.5,
    minimumAge: 7,
    ubication: "Ronda",
  },
  {
    title: "Via Ferrata Casares",
    route: "casares",
    subtitle:
      "Via Ferrata in Casares with Stunning Views of Africa and Gibraltar",
    days: "Mon | Fri",
    description:
      "Intermediate level with views of Africa and Gibraltar. Two monkey bridges and aerial traverses. 35 min from Marbella.",
    videoYoutube: "",
    price: "45€",
    mainImage: {
      src: "/Casares-1.jpg",
      alt: "Via Ferrata Casares - Intermediate level with views of Africa",
    },
    images: [
      {
        src: "/Casares-2.jpg",
        alt: "Via Ferrata Casares - Spectacular views in via ferrata casares",
      },
      {
        src: "/Casares-3.jpg",
        alt: "Via Ferrata Casares - Crossing a monkey bridge in via ferrata casares",
      },
      {
        src: "/Casares-4.jpg",
        alt: "Via Ferrata Casares - Rappelling down a waterfall in via ferrata casares",
      },
      {
        src: "/Casares-5.jpg",
        alt: "Via Ferrata Casares - Adventurers in via ferrata casares",
      },
      {
        src: "/Casares-6.jpg",
        alt: "Via Ferrata Casares - Nature in via ferrata casares",
      },
      {
        src: "/Casares-7.jpg",
        alt: "Via Ferrata Casares - Canyon walls in via ferrata casares",
      },
      {
        src: "/Casares-8.jpg",
        alt: "Via Ferrata Casares - Spectacular landscapes in via ferrata casares",
      },
      {
        src: "/Casares-9.jpg",
        alt: "Via Ferrata Casares - Aerial views in via ferrata casares",
      },
      {
        src: "/Casares-10.jpg",
        alt: "Via Ferrata Casares - Excitement in via ferrata casares",
      },
    ],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 5,
      reviews: 2473,
    },
    level: "moderate",
    province: "Málaga",
    category: "Via Ferrata",
    categoryPath: "via-ferrata",
    duration: 2.5,
    minimumAge: 11,
    ubication: "Casares",
  },
  {
    title: "Via Ferrata El Chorro",
    route: "el-chorro",
    subtitle:
      "Via Ferrata el Chorro (Malaga): One of the most complete and aerial Vias Ferratas in Southern Andalusia",
    days: "All year",
    description:
      "The best via ferrata in Andalusia. Next to Caminito del Rey. 35-meter zipline and +180m elevation gain.",
    videoYoutube: "",
    price: "69€",
    mainImage: {
      src: "/el-chorro-1.jpg",
      alt: "Via Ferrata El Chorro - The best via ferrata in Andalusia",
    },
    images: [
      {
        src: "/el-chorro-2.jpg",
        alt: "Via Ferrata El Chorro - Spectacular views in el chorro via ferrata",
      },
      {
        src: "/el-chorro-3.jpg",
        alt: "Via Ferrata El Chorro - Rappelling down a waterfall in el chorro via ferrata",
      },
      {
        src: "/el-chorro-4.jpg",
        alt: "Via Ferrata El Chorro - Crossing a monkey bridge in el chorro via ferrata",
      },
      {
        src: "/el-chorro-5.jpg",
        alt: "Via Ferrata El Chorro - Ziplining in el chorro via ferrata",
      },
      {
        src: "/el-chorro-6.jpg",
        alt: "Via Ferrata El Chorro - Adventurers in el chorro via ferrata",
      },
      {
        src: "/el-chorro-7.jpg",
        alt: "Via Ferrata El Chorro - Nature in el chorro via ferrata",
      },
      {
        src: "/el-chorro-8.jpg",
        alt: "Via Ferrata El Chorro - Canyon walls in el chorro via ferrata",
      },
    ],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 0,
      reviews: 0,
    },
    level: "advanced",
    province: "Málaga",
    category: "Via Ferrata",
    categoryPath: "via-ferrata",
    duration: 4,
    minimumAge: 14,
    ubication: "El Chorro",
  },

  // HIKING
  {
    title: "Hiking La Concha",
    route: "la-concha",
    subtitle: "Hiking La Concha - Ascent to Marbella's most iconic peak",
    description:
      "Ascent to Marbella's most iconic peak (1,215m). Panoramic views of Costa del Sol, Gibraltar and Africa.",
    videoYoutube: "",
    price: "49€",
    mainImage: {
      src: "/la-concha-1.jpg",
      alt: "Hiking La Concha - Ascent to Marbella's most iconic peak",
    },
    images: [
      {
        src: "/la-concha-2.jpg",
        alt: "Hiking La Concha - Panoramic views from la concha peak",
      },
      {
        src: "/la-concha-3.jpg",
        alt: "Hiking La Concha - Trail leading to la concha peak",
      },
      {
        src: "/la-concha-4.jpg",
        alt: "Hiking La Concha - Hikers enjoying the ascent to la concha peak",
      },
      {
        src: "/la-concha-5.jpg",
        alt: "Hiking La Concha - Scenic landscapes on the way to la concha peak",
      },
      {
        src: "/la-concha-6.jpg",
        alt: "Hiking La Concha - Summit of la concha peak with stunning views",
      },
      {
        src: "/la-concha-7.jpg",
        alt: "Hiking La Concha - Natural beauty surrounding la concha peak",
      },
    ],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 0,
      reviews: 0,
    },
    level: "advanced",
    province: "Málaga",
    category: "Hiking",
    categoryPath: "hiking",
    duration: 6.5,
    days: "All year!",
    minimumAge: 11,
    ubication: "Marbella",
  },
  {
    title: "Hiking Istán",
    route: "hiking-istan",
    subtitle: "Hiking Istán - Ancient Moorish Irrigation Channels",
    description:
      "Route through ancient Moorish irrigation channels to the white village of Istán. Cork oak forests and Andalusian culture.",
    videoYoutube: "",
    price: "39€",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/hiking-istan/main.jpg",
      alt: "Hiking Istán - Route through ancient Moorish irrigation channels",
    },
    images: [],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 0,
      reviews: 0,
    },
    level: "easy",
    province: "Málaga",
    category: "Hiking",
    categoryPath: "hiking",
    duration: 3,
    minimumAge: 8,
    ubication: "Istán",
  },
  {
    title: "Hiking Juanar Forest",
    route: "hiking-juanar",
    subtitle: "Hiking Juanar Forest - Family Adventure in Nature",
    description:
      "Family hiking through Juanar forests. Pines, eucalyptus and centuries-old olive trees. Perfect for children.",
    videoYoutube: "",
    price: "39€",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/hiking-juanar/main.jpg",
      alt: "Hiking Juanar Forest - Family hiking through Juanar forests",
    },
    images: [],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 0,
      reviews: 0,
    },
    level: "easy",
    province: "Málaga",
    category: "Hiking",
    categoryPath: "hiking",
    duration: 2,
    minimumAge: 6,
    ubication: "Ojén",
  },

  // MORE ACTIVITIES
  {
    title: "Kayak Puerto Banús",
    route: "kayak-puerto-banus",
    subtitle: "Guided Kayak Sunrise Tour in Puerto Banús, Marbella",
    description:
      "Sunrise kayak tour from Puerto Banús. Enjoy Marbella's coast with calm waters and beautiful views.",
    videoYoutube: "",
    price: "40€",
    days: "Tue | Thu | Sat",
    mainImage: {
      src: "/kayak-banus-1.png",
      alt: "Kayak Puerto Banús - Sunrise kayak tour from Puerto Banús",
    },
    images: [
      {
        src: "/kayak-banus-2.png",
        alt: "Kayak Puerto Banús - Kayaking along Marbella's coast",
      },
    ],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 0,
      reviews: 0,
    },
    level: "easy",
    province: "Málaga",
    category: "More Activities",
    categoryPath: "activities",
    duration: 2,
    ubication: "Marbella",
    minimumAge: 3,
  },
  {
    title: "Kayak Guadiaro River",
    route: "kayak-guadiaro",
    subtitle: "Kayak Guadiaro River - Where River Meets the Sea",
    description:
      "Kayaking at the mouth of the Guadiaro River. Where the river meets the Mediterranean. Spectacular landscapes.",
    videoYoutube: "",
    price: "45€",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/kayak-guadiaro/main.jpg",
      alt: "Kayak Guadiaro River - Kayaking at the mouth of the Guadiaro River",
    },
    images: [],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 0,
      reviews: 0,
    },
    level: "easy",
    province: "Cádiz",
    category: "More Activities",
    categoryPath: "activities",
    duration: 2,
    minimumAge: 6,
    ubication: "Guadiaro",
  },
  {
    title: "E-Bike Marbella",
    route: "e-bike-marbella",
    subtitle: "E-Bike Marbella - Explore Sierra Blanca on Electric Wheels",
    description:
      "Electric bike route through Sierra Blanca to Istán. Incredible coastal views. Tapas included in the village.",
    videoYoutube: "",
    price: "55€",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/e-bike-marbella/main.jpg",
      alt: "E-Bike Marbella - Electric bike route through Sierra Blanca",
    },
    images: [],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 0,
      reviews: 0,
    },
    level: "moderate",
    province: "Málaga",
    category: "More Activities",
    categoryPath: "activities",
    duration: 4,
    minimumAge: 12,
    ubication: "Marbella",
  },
  {
    title: "Buggy Tour Marbella",
    route: "buggy-tour-marbella",
    subtitle: "Buggy Tour Marbella - Off-Road Adventure with Coastal Views",
    description:
      "Buggy tour with panoramic coastal views. Adrenaline and spectacular landscapes. Off-road experience.",
    videoYoutube: "",
    price: "120€",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/buggy-tour-marbella/main.jpg",
      alt: "Buggy Tour Marbella - Buggy tour with panoramic coastal views",
    },
    images: [],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 0,
      reviews: 0,
    },
    level: "moderate",
    province: "Málaga",
    category: "More Activities",
    categoryPath: "activities",
    duration: 3,
    minimumAge: 18,
    ubication: "Marbella",
  },
  {
    title: "Jet Ski Marbella",
    route: "jet-ski-marbella",
    subtitle: "Jet Ski Marbella - High-Speed Coastal Adventure",
    description:
      "Guided jet ski tours from the Marina. Search for dolphins and explore Marbella's coast with adrenaline.",
    videoYoutube: "",
    price: "180€",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/jet-ski-marbella/main.jpg",
      alt: "Jet Ski Marbella - Guided jet ski tours from the Marina",
    },
    images: [],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 0,
      reviews: 0,
    },
    level: "moderate",
    province: "Málaga",
    category: "More Activities",
    categoryPath: "activities",
    duration: 2,
    minimumAge: 16,
    ubication: "Marbella",
  },
  {
    title: "Gymkhana Marbella",
    route: "gymkhana-marbella",
    subtitle: "Gymkhana Marbella - Interactive Scavenger Hunt Adventure",
    description:
      "Fun scavenger hunt through Marbella's old town. 12 challenges, tapas included. Perfect for groups and families.",
    videoYoutube: "",
    price: "35€",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/gymkhana-marbella/main.jpg",
      alt: "Gymkhana Marbella - Fun scavenger hunt through Marbella's old town",
    },
    images: [],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 0,
      reviews: 0,
    },
    level: "easy",
    province: "Málaga",
    category: "More Activities",
    categoryPath: "activities",
    duration: 3,
    minimumAge: 8,
    ubication: "Marbella",
  },
  {
    title: "Caving Experience",
    route: "caving-experience",
    subtitle: "Caving Experience - Explore Málaga's Underground Wonders",
    description:
      "Family caving adventure. Discover Málaga's incredible underground world. From 7 years old.",
    videoYoutube: "",
    price: "50€",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/caving-experience/main.jpg",
      alt: "Caving Experience - Family caving adventure",
    },
    images: [],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 0,
      reviews: 0,
    },
    level: "moderate",
    province: "Málaga",
    category: "More Activities",
    categoryPath: "activities",
    duration: 4,
    minimumAge: 7,
    ubication: "Málaga",
  },

  // COMBO PACKS
  {
    title: "Canyoning + Via Ferrata",
    route: "pack-canyoning-via-ferrata",
    subtitle: "Canyoning + Via Ferrata - Pure Adrenaline Combo Pack",
    description:
      "Pure Adrenaline Pack: combine canyoning and via ferrata in one day. The most complete adventure experience.",
    videoYoutube: "",
    price: "95€",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/pack-canyoning-via-ferrata/main.jpg",
      alt: "Canyoning + Via Ferrata - Pure Adrenaline Pack",
    },
    images: [],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 0,
      reviews: 0,
    },
    level: "moderate",
    province: "Málaga",
    category: "More Activities",
    categoryPath: "activities",
    duration: 8,
    minimumAge: 11,
    ubication: "Marbella",
  },
  {
    title: "Canyoning + E-Bike",
    route: "pack-canyoning-ebike",
    subtitle: "Canyoning + E-Bike - Discover Deep Andalusia",
    description:
      "Discover Deep Andalusia: canyoning in the morning and e-bike route in the afternoon. Nature and culture.",
    videoYoutube: "",
    price: "99€",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/pack-canyoning-ebike/main.jpg",
      alt: "Canyoning + E-Bike - Discover Deep Andalusia",
    },
    images: [],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 0,
      reviews: 0,
    },
    level: "moderate",
    province: "Málaga",
    category: "More Activities",
    categoryPath: "activities",
    duration: 7,
    minimumAge: 12,
    ubication: "Marbella",
  },
  {
    title: "Canyoning + Survival Workshop",
    route: "pack-canyoning-survival",
    subtitle: "Canyoning + Survival Workshop - Family Adventure Pack",
    description:
      "Family adventure pack: canyoning and survival workshop in the forest. Unforgettable vacation for everyone.",
    videoYoutube: "",
    price: "110€",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/pack-canyoning-survival/main.jpg",
      alt: "Canyoning + Survival Workshop - Family adventure pack",
    },
    images: [],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 0,
      reviews: 0,
    },
    level: "moderate",
    province: "Málaga",
    category: "More Activities",
    categoryPath: "activities",
    duration: 6,
    minimumAge: 10,
    ubication: "Marbella",
  },
  {
    title: "Canyoning + Boat Tour",
    route: "pack-canyoning-boat",
    subtitle: "Canyoning + Boat Tour - Complete Water Adventure",
    description:
      "Complete water adventure: canyoning and exclusive boat tour along Estepona's coast. Relaxation and adrenaline.",
    videoYoutube: "",
    price: "105€",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/pack-canyoning-boat/main.jpg",
      alt: "Canyoning + Boat Tour - Complete water adventure",
    },
    images: [],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 0,
      reviews: 0,
    },
    level: "moderate",
    province: "Málaga",
    category: "More Activities",
    categoryPath: "activities",
    duration: 7,
    minimumAge: 8,
    ubication: "Estepona",
  },
  {
    title: "Canyoning + Hiking",
    route: "pack-canyoning-hiking",
    subtitle: "Canyoning + Hiking - Adventure, Culture and Gastronomy",
    description:
      "Combine canyoning with hiking through white villages. Adventure, culture and Andalusian gastronomy in one day.",
    videoYoutube: "",
    price: "89€",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/pack-canyoning-hiking/main.jpg",
      alt: "Canyoning + Hiking - Adventure, culture and gastronomy",
    },
    images: [],
    isOffer: false,
    isMostPopular: false,
    rating: {
      value: 0,
      reviews: 0,
    },
    level: "moderate",
    province: "Málaga",
    category: "More Activities",
    categoryPath: "activities",
    duration: 6,
    minimumAge: 10,
    ubication: "Ronda",
  },
];

// Utility functions to filter excursions
export const getExcursionsByCategory = (category: Excursion["category"]) => {
  return excursions.filter((excursion) => excursion.category === category);
};

export const getExcursionsByLevel = (level: Excursion["level"]) => {
  return excursions.filter((excursion) => excursion.level === level);
};

export const getExcursionsByProvince = (province: string) => {
  return excursions.filter((excursion) => excursion.province === province);
};

export const getExcursionByRoute = (route: string) => {
  return excursions.find((excursion) => excursion.route === route);
};

export const getAllProvinces = () => {
  return Array.from(new Set(excursions.map((excursion) => excursion.province)));
};

export const getAllCategories = () => {
  return Array.from(new Set(excursions.map((excursion) => excursion.category)));
};

export const getOfferExcursions = () => {
  return excursions.filter((excursion) => excursion.isOffer);
};

export const getMostPopularExcursions = () => {
  return excursions.filter((excursion) => excursion.isMostPopular);
};

export const getExcursionsByRating = (minRating: number) => {
  return excursions.filter((excursion) => excursion.rating.value >= minRating);
};
