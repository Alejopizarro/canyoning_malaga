// lib/complementary-data.ts

import { Excursion } from "./activities";

type ComplementaryData = Omit<
  Excursion,
  | "id"
  | "slug"
  | "title"
  | "price"
  | "isMostPopular"
  | "isTop3"
  | "linkBokun"
  | "linkFotos"
  | "linkDescripcion"
>;

export const complementaryData: Record<string, ComplementaryData> = {
  // ==================== CANYONING ====================
  guadalmina: {
    subtitle: "The Best Canyoning Experience Near Marbella",
    description:
      "Perfect canyoning descent for beginners. Close to Marbella, ideal for families. Available all year round. Fun guaranteed!",
    videoYoutube: "https://www.youtube.com/watch?v=S3E0cKEYCSQ",
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
    specialPrice: "Special Open Group Price: Every Day!",
    isOffer: false,
    rating: { value: 4.8, reviews: 2087 },
    level: "easy",
    ubication: "Marbella, Málaga",
    duration: 3,
    minimumAge: 6,
    province: "Málaga",
    category: "Canyoning",
    categoryPath: "canyoning",
  },

  "rio-verde": {
    subtitle:
      "Rio Verde Canyoning: Turquoise Water Jumps Near Granada & Málaga",
    description:
      "One of the best canyons in Andalusia. Turquoise waters, optional jumps and rappelling. Fun guaranteed.",
    videoYoutube: "",
    days: "From March 1st to November 30th",
    mainImage: {
      src: "/rio-verde-1.webp",
      alt: "Rio Verde canyon - One of the best canyons in Andalusia",
    },
    images: [
      {
        src: "/rio-verde-2.webp",
        alt: "Rio Verde canyon - Turquoise waters in rio verde canyon",
      },
      {
        src: "/rio-verde-3.webp",
        alt: "Rio Verde canyon - Rappelling down a waterfall in rio verde canyon",
      },
      {
        src: "/rio-verde-4.webp",
        alt: "Rio Verde canyon - Jumping into a natural pool in rio verde canyon",
      },
      {
        src: "/rio-verde-5.webp",
        alt: "Rio Verde canyon - Sliding down a natural water slide in rio verde canyon",
      },
      {
        src: "/rio-verde-6.webp",
        alt: "Rio Verde canyon - Beautiful landscapes in rio verde canyon",
      },
      {
        src: "/rio-verde-7.webp",
        alt: "Rio Verde canyon - Adventurers in rio verde canyon",
      },
      {
        src: "/rio-verde-8.webp",
        alt: "Rio Verde canyon - Crystal clear waters in rio verde canyon",
      },
      {
        src: "/rio-verde-9.webp",
        alt: "Rio Verde canyon - Nature in rio verde canyon",
      },
      {
        src: "/rio-verde-10.webp",
        alt: "Rio Verde canyon - Canyon walls in rio verde canyon",
      },
    ],
    isOffer: false,
    rating: { value: 4, reviews: 5 },
    level: "moderate",
    province: "Granada",
    duration: 4.5,
    ubication: "Otivar, Granada",
    minimumAge: 9,
    category: "Canyoning",
    categoryPath: "canyoning",
  },

  zarzalones: {
    subtitle:
      "Conquer Zarzalones: The 21m Waterfall Canyoning Near Marbella & Málaga",
    description:
      "Experience the thrill of Zarzalones canyon with its impressive 21m waterfall. Perfect for adventure seekers near Marbella & Málaga.",
    videoYoutube: "",
    days: "Thursday",
    mainImage: {
      src: "/zarzalones-1.webp",
      alt: "Zarzalones canyon - The 21m Waterfall Canyoning Near Marbella & Málaga",
    },
    images: [
      {
        src: "/zarzalones-2.webp",
        alt: "Zarzalones canyon - The 21m Waterfall Canyoning Near Marbella & Málaga",
      },
      {
        src: "/zarzalones-4.webp",
        alt: "Zarzalones canyon - Jumping into a natural pool in zarzalones canyon",
      },
      {
        src: "/zarzalones-5.webp",
        alt: "Zarzalones canyon - Sliding down a natural water slide in zarzalones canyon",
      },
      {
        src: "/zarzalones-6.webp",
        alt: "Zarzalones canyon - Beautiful landscapes in zarzalones canyon",
      },
      {
        src: "/zarzalones-8.webp",
        alt: "Zarzalones canyon - Crystal clear waters in zarzalones canyon",
      },
      {
        src: "/zarzalones-9.webp",
        alt: "Zarzalones canyon - Nature in zarzalones canyon",
      },
      {
        src: "/zarzalones-10.webp",
        alt: "Zarzalones canyon - Canyon walls in zarzalones canyon",
      },
      {
        src: "/zarzalones-11.webp",
        alt: "Zarzalones canyon - Canyon walls in zarzalones canyon",
      },
      {
        src: "/zarzalones-12.webp",
        alt: "Zarzalones canyon - Canyon walls in zarzalones canyon",
      },
      {
        src: "/zarzalones-13.webp",

        alt: "Zarzalones canyon - Canyon walls in zarzalones canyon",
      },
    ],
    isOffer: false,
    rating: { value: 4.9, reviews: 100 },
    level: "moderate",
    province: "Málaga",
    duration: 4,
    minimumAge: 9,
    ubication: "Yunquera, Málaga",
    category: "Canyoning",
    categoryPath: "canyoning",
  },

  "rio-verde-xpro": {
    subtitle:
      "Advanced Canyoning in Rio Verde - Higher Jumps and Technical Rappelling",
    description:
      "Advanced version of Rio Verde. Pure adrenaline with higher jumps and technical rappelling. For experienced adventurers.",
    videoYoutube: "",
    days: "All year",
    mainImage: {
      src: "/rioverde-xpro-1.webp",
      alt: "Rio Verde canyon - One of the best canyons in Andalusia",
    },
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
    rating: { value: 5, reviews: 2 },
    level: "advanced",
    province: "Granada",
    duration: 7,
    minimumAge: 15,
    ubication: "Otivar, Granada",
    category: "Canyoning",
    categoryPath: "canyoning",
  },

  "sima-del-diablo": {
    subtitle: "Sima del Diablo in Málaga: a canyon for all ages",
    description:
      "Technical canyon near the Smurf Village. Higher rappels than Guadalmina. Ideal for intermediate level.",
    videoYoutube: "",
    days: "All year",
    mainImage: {
      src: "/casares-4.webp",
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
    rating: { value: 4.7, reviews: 20 },
    level: "easy",
    province: "Málaga",
    category: "Canyoning",
    categoryPath: "canyoning",
    duration: 4,
    minimumAge: 8,
    ubication: "Júzcar",
  },

  buitreras: {
    subtitle: "Buitreras Canyon in Malaga: an astonishing environment",
    description:
      "The Cathedral of Andalusian Canyons. Walls over 100 meters high. An unprecedented visual experience.",
    videoYoutube: "",
    days: "15/6 to 30/11",
    mainImage: {
      src: "/buitreras-1.webp",
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
    rating: { value: 4.8, reviews: 5 },
    level: "moderate",
    province: "Cádiz",
    category: "Canyoning",
    categoryPath: "canyoning",
    duration: 6,
    ubication: "Colm. de la Fra., Málaga",
    minimumAge: 8,
  },

  // Slug actualizado según Sheet: "tajo-ronda" en vez de "tajo-de-ronda"
  "tajo-ronda": {
    subtitle:
      "Tajo River Canyon in Ronda: adventures in a thousand-year-old city",
    description:
      "Cross through the ancient city of Ronda. Privileged views of the New Bridge and historical monuments.",
    videoYoutube: "",
    days: "Mar to Jun & Sep to Nov",
    mainImage: {
      src: "/ronda-vf-1.webp",
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
    rating: { value: 4.6, reviews: 20 },
    level: "moderate",
    province: "Málaga",
    category: "Canyoning",
    categoryPath: "canyoning",
    duration: 4,
    minimumAge: 8,
    ubication: "Ronda, Málaga",
  },

  trevelez: {
    subtitle:
      "Trevelez Canyon in Granada: An intense canyon in the foothills of Sierra Nevada",
    description:
      "The highest level technical canyon in Andalusia. 14 rappels in Sierra Nevada. Only August and September.",
    videoYoutube: "",
    days: "September",
    mainImage: {
      src: "/zarzalones-11.webp",
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
    rating: { value: 4.4, reviews: 5 },
    level: "advanced",
    province: "Granada",
    category: "Canyoning",
    categoryPath: "canyoning",
    duration: 8,
    minimumAge: 18,
    ubication: "Órgiva",
  },

  calzadillas: {
    subtitle:
      "Calzadillas Canyon in Seville: The Best Place to Learn Canyoning",
    description:
      "Granite canyon in Sierra Norte. Three spectacular rappels. Perfect for autumn, winter and spring.",
    videoYoutube: "",
    days: "Winter",
    mainImage: {
      src: "/guadalmina-4.webp",
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
    rating: { value: 0, reviews: 0 },
    level: "moderate",
    province: "Sevilla",
    category: "Canyoning",
    categoryPath: "canyoning",
    duration: 4.5,
    minimumAge: 11,
    ubication: "Almadén Plate",
  },

  // ==================== VIA FERRATA ====================
  ronda: {
    subtitle:
      "Via Ferrata in Ronda (Malaga) - This is the ideal via ferrata for families",
    description:
      "Family-friendly via ferrata at Tajo de Ronda. Spectacular views of the New Bridge. Ideal for beginners from 7 years old.",
    videoYoutube: "",
    days: "All year",
    mainImage: {
      src: "/ronda-vf-1.webp",
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
    rating: { value: 0, reviews: 0 },
    level: "easy",
    province: "Málaga",
    category: "Via Ferrata",
    categoryPath: "via-ferrata",
    duration: 2.5,
    minimumAge: 7,
    ubication: "Ronda, Málaga",
  },

  casares: {
    subtitle:
      "Via Ferrata in Casares with Stunning Views of Africa and Gibraltar",
    description:
      "Intermediate level with views of Africa and Gibraltar. Two monkey bridges and aerial traverses. 35 min from Marbella.",
    videoYoutube: "",
    days: "Mon | Fri",
    mainImage: {
      src: "/casares-1.webp",
      alt: "Via Ferrata Casares - Intermediate level with views of Africa",
    },
    images: [
      {
        src: "/casares-2.webp",
        alt: "Via Ferrata Casares - Spectacular views in via ferrata casares",
      },
      {
        src: "/casares-3.webp",
        alt: "Via Ferrata Casares - Crossing a monkey bridge in via ferrata casares",
      },
      {
        src: "/casares-4.webp",
        alt: "Via Ferrata Casares - Rappelling down a waterfall in via ferrata casares",
      },
      {
        src: "/casares-5.webp",
        alt: "Via Ferrata Casares - Adventurers in via ferrata casares",
      },
      {
        src: "/casares-6.webp",
        alt: "Via Ferrata Casares - Nature in via ferrata casares",
      },
      {
        src: "/casares-7.webp",
        alt: "Via Ferrata Casares - Canyon walls in via ferrata casares",
      },
    ],
    specialPrice: "If we reach a minimum of 3 participants",
    isOffer: false,
    rating: { value: 5, reviews: 2473 },
    level: "moderate",
    province: "Málaga",
    category: "Via Ferrata",
    categoryPath: "via-ferrata",
    duration: 2.5,
    minimumAge: 11,
    ubication: "Casares, Málaga",
  },

  "el-chorro": {
    subtitle:
      "Via Ferrata el Chorro (Malaga): One of the most complete and aerial Vias Ferratas in Southern Andalusia",
    description:
      "The best via ferrata in Andalusia. Next to Caminito del Rey. 35-meter zipline and +180m elevation gain.",
    videoYoutube: "",
    days: "All year",
    mainImage: {
      src: "/el-chorro-1.webp",
      alt: "Via Ferrata El Chorro - The best via ferrata in Andalusia",
    },
    images: [
      {
        src: "/el-chorro-7.webp",
        alt: "Via Ferrata El Chorro - Spectacular views in el chorro via ferrata",
      },
      {
        src: "/el-chorro-8.webp",
        alt: "Via Ferrata El Chorro - Rappelling down a waterfall in el chorro via ferrata",
      },
      {
        src: "/el-chorro-9.webp",
        alt: "Via Ferrata El Chorro - Crossing a monkey bridge in el chorro via ferrata",
      },
      {
        src: "/el-chorro-10.webp",
        alt: "Via Ferrata El Chorro - Ziplining in el chorro via ferrata",
      },
      {
        src: "/el-chorro-11.webp",
        alt: "Via Ferrata El Chorro - Adventurers in el chorro via ferrata",
      },
    ],
    isOffer: false,
    rating: { value: 0, reviews: 0 },
    level: "advanced",
    province: "Málaga",
    category: "Via Ferrata",
    categoryPath: "via-ferrata",
    duration: 4,
    minimumAge: 14,
    ubication: "El Chorro, Málaga",
  },

  // ==================== HIKING ====================
  "la-concha": {
    subtitle: "Hiking La Concha - Ascent to Marbella's most iconic peak",
    description:
      "Ascent to Marbella's most iconic peak (1,215m). Panoramic views of Costa del Sol, Gibraltar and Africa.",
    days: "All year!",
    mainImage: {
      src: "/la-concha-1.webp",
      alt: "Hiking La Concha - Ascent to Marbella's most iconic peak",
    },
    images: [
      {
        src: "/la-concha-2.webp",
        alt: "Hiking La Concha - Panoramic views from la concha peak",
      },
      {
        src: "/la-concha-3.webp",
        alt: "Hiking La Concha - Trail leading to la concha peak",
      },
      {
        src: "/la-concha-4.webp",
        alt: "Hiking La Concha - Hikers enjoying the ascent to la concha peak",
      },
      {
        src: "/la-concha-5.webp",
        alt: "Hiking La Concha - Scenic landscapes on the way to la concha peak",
      },
      {
        src: "/la-concha-6.webp",
        alt: "Hiking La Concha - Summit of la concha peak with stunning views",
      },
      {
        src: "/la-concha-7.webp",
        alt: "Hiking La Concha - Natural beauty surrounding la concha peak",
      },
      {
        src: "/la-concha-8.webp",
        alt: "Hiking La Concha - Adventurers at la concha peak",
      },
      {
        src: "/la-concha-9.webp",
        alt: "Hiking La Concha - Flora and fauna near la concha peak",
      },
      {
        src: "/la-concha-10.webp",
        alt: "Hiking La Concha - Breathtaking views from la concha peak",
      },
      {
        src: "/la-concha-11.webp",
        alt: "Hiking La Concha - Hiking trail to la concha peak",
      },
      {
        src: "/la-concha-12.webp",
        alt: "Hiking La Concha - Nature surrounding la concha peak",
      },
      {
        src: "/la-concha-13.webp",
        alt: "Hiking La Concha - Hikers enjoying the journey to la concha peak",
      },
      {
        src: "/la-concha-14.webp",
        alt: "Hiking La Concha - Majestic views from la concha peak",
      },
      {
        src: "/la-concha-15.webp",
        alt: "Hiking La Concha - Adventure awaits at la concha peak",
      },
      {
        src: "/la-concha-16.webp",
        alt: "Hiking La Concha - Exploring the trails to la concha peak",
      },
      {
        src: "/la-concha-17.webp",
        alt: "Hiking La Concha - Serene landscapes near la concha peak",
      },
    ],
    specialPrice: "Minimum 2, price per person.",
    videoYoutube: "https://www.youtube.com/watch?v=lFEBPOm6354",
    isOffer: false,
    rating: { value: 0, reviews: 0 },
    level: "advanced",
    province: "Málaga",
    category: "Hiking",
    categoryPath: "hiking",
    duration: 6.5,
    minimumAge: 11,
    ubication: "Marbella, Málaga",
  },

  // Slug actualizado según Sheet: "istan" en vez de "hiking-istan"
  istan: {
    subtitle: "Hiking Istán - Ancient Moorish Irrigation Channels",
    description:
      "Route through ancient Moorish irrigation channels to the white village of Istán. Cork oak forests and Andalusian culture.",
    videoYoutube: "",
    days: "All year!",
    mainImage: {
      src: "/la-concha-10.webp",
      alt: "Hiking Istán - Route through ancient Moorish irrigation channels",
    },
    images: [],
    isOffer: false,
    rating: { value: 0, reviews: 0 },
    level: "easy",
    province: "Málaga",
    category: "Hiking",
    categoryPath: "hiking",
    duration: 3,
    minimumAge: 8,
    ubication: "Istán",
  },

  // Slug actualizado según Sheet: "juanar-forest" en vez de "hiking-juanar"
  "juanar-forest": {
    subtitle: "Hiking Juanar Forest - Family Adventure in Nature",
    description:
      "Family hiking through Juanar forests. Pines, eucalyptus and centuries-old olive trees. Perfect for children.",
    videoYoutube: "",
    days: "All year!",
    mainImage: {
      src: "/zarzalones-2.webp",
      alt: "Hiking Juanar Forest - Family hiking through Juanar forests",
    },
    images: [],
    isOffer: false,
    rating: { value: 0, reviews: 0 },
    level: "easy",
    province: "Málaga",
    category: "Hiking",
    categoryPath: "hiking",
    duration: 2,
    minimumAge: 6,
    ubication: "Ojén",
  },

  // ==================== MORE ACTIVITIES ====================
  "kayak-puerto-banus": {
    subtitle: "Guided Kayak Sunrise Tour in Puerto Banús, Marbella",
    description:
      "Sunrise kayak tour from Puerto Banús. Enjoy Marbella's coast with calm waters and beautiful views.",
    videoYoutube: "",
    days: "Tue | Thu | Sat",
    mainImage: {
      src: "/banus-kayak-1.webp",
      alt: "Kayak Puerto Banús - Sunrise kayak tour from Puerto Banús",
    },
    images: [
      {
        src: "/kayak-banus-2.png",
        alt: "Kayak Puerto Banús - Kayaking along Marbella's coast",
      },
    ],
    isOffer: false,
    rating: { value: 0, reviews: 0 },
    level: "easy",
    province: "Málaga",
    category: "More Activities",
    subcategory: "Kayak",
    categoryPath: "more-activities",
    duration: 2,
    ubication: "Marbella, Málaga",
    minimumAge: 3,
  },

  "kayak-guadiaro": {
    subtitle: "Kayak Guadiaro River - Where River Meets the Sea",
    description:
      "Kayaking at the mouth of the Guadiaro River. Where the river meets the Mediterranean. Spectacular landscapes.",
    videoYoutube: "",
    days: "All year!",
    mainImage: {
      src: "/zarzalones-4.webp",
      alt: "Kayak Guadiaro River - Kayaking at the mouth of the Guadiaro River",
    },
    images: [],
    isOffer: false,
    rating: { value: 0, reviews: 0 },
    level: "easy",
    province: "Cádiz",
    category: "More Activities",
    categoryPath: "more-activities",
    subcategory: "Kayak",
    duration: 2,
    minimumAge: 6,
    ubication: "Guadiaro",
  },

  "e-bike-marbella": {
    subtitle: "E-Bike Marbella - Explore Sierra Blanca on Electric Wheels",
    description:
      "Electric bike route through Sierra Blanca to Istán. Incredible coastal views. Tapas included in the village.",
    videoYoutube: "",
    days: "All year!",
    mainImage: {
      src: "/la-concha-12.webp",
      alt: "E-Bike Marbella - Electric bike route through Sierra Blanca",
    },
    images: [],
    isOffer: false,
    rating: { value: 0, reviews: 0 },
    level: "moderate",
    province: "Málaga",
    category: "More Activities",
    subcategory: "E-Bike",
    categoryPath: "more-activities",
    duration: 4,
    minimumAge: 12,
    ubication: "Marbella, Málaga",
  },

  "buggy-tour-marbella": {
    subtitle: "Buggy Tour Marbella - Off-Road Adventure with Coastal Views",
    description:
      "Buggy tour with panoramic coastal views. Adrenaline and spectacular landscapes. Off-road experience.",
    videoYoutube: "",
    days: "All year!",
    mainImage: {
      src: "/la-concha-13.webp",
      alt: "Buggy Tour Marbella - Buggy tour with panoramic coastal views",
    },
    images: [],
    isOffer: false,
    rating: { value: 0, reviews: 0 },
    level: "moderate",
    province: "Málaga",
    category: "More Activities",
    subcategory: "Buggy",
    categoryPath: "more-activities",
    duration: 3,
    minimumAge: 18,
    ubication: "Marbella, Málaga",
  },

  "jet-ski-marbella": {
    subtitle: "Jet Ski Marbella - High-Speed Coastal Adventure",
    description:
      "Guided jet ski tours from the Marina. Search for dolphins and explore Marbella's coast with adrenaline.",
    videoYoutube: "",
    days: "All year!",
    mainImage: {
      src: "/zarzalones-11.webp",
      alt: "Jet Ski Marbella - Guided jet ski tours from the Marina",
    },
    images: [],
    isOffer: false,
    rating: { value: 0, reviews: 0 },
    level: "moderate",
    province: "Málaga",
    category: "More Activities",
    subcategory: "Jet Ski",
    categoryPath: "more-activities",
    duration: 2,
    minimumAge: 16,
    ubication: "Marbella, Málaga",
  },

  "gymkhana-marbella": {
    subtitle: "Gymkhana Marbella - Interactive Scavenger Hunt Adventure",
    description:
      "Fun scavenger hunt through Marbella's old town. 12 challenges, tapas included. Perfect for groups and families.",
    videoYoutube: "",
    days: "All year!",
    mainImage: {
      src: "/zarzalones-12.webp",
      alt: "Gymkhana Marbella - Fun scavenger hunt through Marbella's old town",
    },
    images: [],
    isOffer: false,
    rating: { value: 0, reviews: 0 },
    level: "easy",
    province: "Málaga",
    category: "More Activities",
    categoryPath: "more-activities",
    subcategory: "Gymkhana",
    duration: 3,
    minimumAge: 8,
    ubication: "Marbella, Málaga",
  },

  "caving-experience": {
    subtitle: "Caving Experience - Explore Málaga's Underground Wonders",
    description:
      "Family caving adventure. Discover Málaga's incredible underground world. From 7 years old.",
    videoYoutube: "",
    days: "All year!",
    mainImage: {
      src: "/la-concha-14.webp",
      alt: "Caving Experience - Family caving adventure",
    },
    images: [],
    isOffer: false,
    rating: { value: 0, reviews: 0 },
    level: "moderate",
    province: "Málaga",
    category: "More Activities",
    subcategory: "Caving",
    categoryPath: "more-activities",
    duration: 4,
    minimumAge: 7,
    ubication: "Málaga",
  },
  "caving-igualeja": {
    subtitle: "Caving Experience - Explore Málaga's Underground Wonders",
    description:
      "Family caving adventure. Discover Málaga's incredible underground world. From 7 years old.",
    videoYoutube: "",
    days: "All year!",
    mainImage: {
      src: "/rio-verde-3.webp",
      alt: "Caving Igualeja - Family caving adventure",
    },
    images: [],
    isOffer: false,
    rating: { value: 0, reviews: 0 },
    level: "moderate",
    province: "Málaga",
    category: "More Activities",
    subcategory: "Caving",
    categoryPath: "more-activities",
    duration: 4,
    minimumAge: 7,
    ubication: "Igualeja",
  },
};

// Datos por defecto para excursiones que no tengan datos complementarios
export const defaultComplementaryData: ComplementaryData = {
  subtitle: "",
  description: "",
  videoYoutube: "",
  days: "All year!",
  mainImage: { src: "/guadalmina-2.webp", alt: "Excursion image" },
  images: [],
  isOffer: false,
  rating: { value: 0, reviews: 0 },
  level: "moderate",
  ubication: "",
  duration: 3,
  minimumAge: 8,
  province: "Málaga",
  category: "More Activities",
  categoryPath: "activities",
};
