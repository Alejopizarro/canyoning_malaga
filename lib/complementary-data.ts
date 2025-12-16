// lib/complementary-data.ts

import { Excursion } from "./activities";

type ComplementaryData = Omit<
  Excursion,
  | "id"
  | "slug"
  | "category"
  | "title"
  | "subtitle"
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
    description:
      "Perfect canyoning descent for beginners. Close to Marbella, ideal for families. Available all year round.",
    videoYoutube: "",
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
        src: "/guadalmina-3.web",
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
    rating: { value: 4.8, reviews: 2087 },
    level: "easy",
    ubication: "Marbella",
    duration: 3,
    minimumAge: 6,
    province: "Málaga",
    categoryPath: "canyoning",
  },

  "rio-verde": {
    description:
      "One of the best canyons in Andalusia. Turquoise waters, optional jumps and rappelling. Fun guaranteed.",
    videoYoutube: "",
    days: "Wednesday",
    mainImage: {
      src: "/rio-verde-1.jpg",
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
        src: "/rio-verde-4.jpg",
        alt: "Rio Verde canyon - Jumping into a natural pool in rio verde canyon",
      },
      {
        src: "/rio-verde-5.jpg",
        alt: "Rio Verde canyon - Sliding down a natural water slide in rio verde canyon",
      },
    ],
    isOffer: false,
    rating: { value: 4, reviews: 5 },
    level: "moderate",
    province: "Granada",
    duration: 4.5,
    ubication: "Otivar",
    minimumAge: 9,
    categoryPath: "canyoning",
  },

  "rio-verde-xpro": {
    description:
      "Advanced version of Rio Verde. Pure adrenaline with higher jumps and technical rappelling. For experienced adventurers.",
    videoYoutube: "",
    days: "All year",
    mainImage: {
      src: "/rio-verde-4.jpg",
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
    ubication: "Otivar",
    categoryPath: "canyoning",
  },

  "sima-del-diablo": {
    description:
      "Technical canyon near the Smurf Village. Higher rappels than Guadalmina. Ideal for intermediate level.",
    videoYoutube: "",
    days: "All year",
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
    rating: { value: 4.7, reviews: 20 },
    level: "easy",
    province: "Málaga",
    categoryPath: "canyoning",
    duration: 4,
    minimumAge: 8,
    ubication: "Júzcar",
  },

  buitreras: {
    description:
      "The Cathedral of Andalusian Canyons. Walls over 100 meters high. An unprecedented visual experience.",
    videoYoutube: "",
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
    rating: { value: 4.8, reviews: 5 },
    level: "moderate",
    province: "Cádiz",
    categoryPath: "canyoning",
    duration: 6,
    ubication: "Colm. de la Fra.",
    minimumAge: 8,
  },

  // Slug actualizado según Sheet: "tajo-ronda" en vez de "tajo-de-ronda"
  "tajo-ronda": {
    description:
      "Cross through the ancient city of Ronda. Privileged views of the New Bridge and historical monuments.",
    videoYoutube: "",
    days: "Mar to Jun & Sep to Nov",
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
    rating: { value: 4.6, reviews: 20 },
    level: "moderate",
    province: "Málaga",
    categoryPath: "canyoning",
    duration: 4,
    minimumAge: 8,
    ubication: "Ronda",
  },

  trevelez: {
    description:
      "The highest level technical canyon in Andalusia. 14 rappels in Sierra Nevada. Only August and September.",
    videoYoutube: "",
    days: "September",
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
    rating: { value: 4.4, reviews: 5 },
    level: "advanced",
    province: "Granada",
    categoryPath: "canyoning",
    duration: 8,
    minimumAge: 18,
    ubication: "Órgiva",
  },

  calzadillas: {
    description:
      "Granite canyon in Sierra Norte. Three spectacular rappels. Perfect for autumn, winter and spring.",
    videoYoutube: "",
    days: "Winter",
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
    rating: { value: 0, reviews: 0 },
    level: "moderate",
    province: "Sevilla",
    categoryPath: "canyoning",
    duration: 4.5,
    minimumAge: 11,
    ubication: "Almadén Plate",
  },

  // ==================== VIA FERRATA ====================
  ronda: {
    description:
      "Family-friendly via ferrata at Tajo de Ronda. Spectacular views of the New Bridge. Ideal for beginners from 7 years old.",
    videoYoutube: "",
    days: "All year",
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
    rating: { value: 0, reviews: 0 },
    level: "easy",
    province: "Málaga",
    categoryPath: "via-ferrata",
    duration: 2.5,
    minimumAge: 7,
    ubication: "Ronda",
  },

  casares: {
    description:
      "Intermediate level with views of Africa and Gibraltar. Two monkey bridges and aerial traverses. 35 min from Marbella.",
    videoYoutube: "",
    days: "Mon | Fri",
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
    rating: { value: 5, reviews: 2473 },
    level: "moderate",
    province: "Málaga",
    categoryPath: "via-ferrata",
    duration: 2.5,
    minimumAge: 11,
    ubication: "Casares",
  },

  "el-chorro": {
    description:
      "The best via ferrata in Andalusia. Next to Caminito del Rey. 35-meter zipline and +180m elevation gain.",
    videoYoutube: "",
    days: "All year",
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
    rating: { value: 0, reviews: 0 },
    level: "advanced",
    province: "Málaga",
    categoryPath: "via-ferrata",
    duration: 4,
    minimumAge: 14,
    ubication: "El Chorro",
  },

  // ==================== HIKING ====================
  "la-concha": {
    description:
      "Ascent to Marbella's most iconic peak (1,215m). Panoramic views of Costa del Sol, Gibraltar and Africa.",
    videoYoutube: "",
    days: "All year!",
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
    rating: { value: 0, reviews: 0 },
    level: "advanced",
    province: "Málaga",
    categoryPath: "hiking",
    duration: 6.5,
    minimumAge: 11,
    ubication: "Marbella",
  },

  // Slug actualizado según Sheet: "istan" en vez de "hiking-istan"
  istan: {
    description:
      "Route through ancient Moorish irrigation channels to the white village of Istán. Cork oak forests and Andalusian culture.",
    videoYoutube: "",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/hiking-istan/main.jpg",
      alt: "Hiking Istán - Route through ancient Moorish irrigation channels",
    },
    images: [],
    isOffer: false,
    rating: { value: 0, reviews: 0 },
    level: "easy",
    province: "Málaga",
    categoryPath: "hiking",
    duration: 3,
    minimumAge: 8,
    ubication: "Istán",
  },

  // Slug actualizado según Sheet: "juanar-forest" en vez de "hiking-juanar"
  "juanar-forest": {
    description:
      "Family hiking through Juanar forests. Pines, eucalyptus and centuries-old olive trees. Perfect for children.",
    videoYoutube: "",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/hiking-juanar/main.jpg",
      alt: "Hiking Juanar Forest - Family hiking through Juanar forests",
    },
    images: [],
    isOffer: false,
    rating: { value: 0, reviews: 0 },
    level: "easy",
    province: "Málaga",
    categoryPath: "hiking",
    duration: 2,
    minimumAge: 6,
    ubication: "Ojén",
  },

  // ==================== MORE ACTIVITIES ====================
  "kayak-puerto-banus": {
    description:
      "Sunrise kayak tour from Puerto Banús. Enjoy Marbella's coast with calm waters and beautiful views.",
    videoYoutube: "",
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
    rating: { value: 0, reviews: 0 },
    level: "easy",
    province: "Málaga",
    categoryPath: "more-activities",
    duration: 2,
    ubication: "Marbella",
    minimumAge: 3,
  },

  "kayak-guadiaro": {
    description:
      "Kayaking at the mouth of the Guadiaro River. Where the river meets the Mediterranean. Spectacular landscapes.",
    videoYoutube: "",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/kayak-guadiaro/main.jpg",
      alt: "Kayak Guadiaro River - Kayaking at the mouth of the Guadiaro River",
    },
    images: [],
    isOffer: false,
    rating: { value: 0, reviews: 0 },
    level: "easy",
    province: "Cádiz",
    categoryPath: "more-activities",
    duration: 2,
    minimumAge: 6,
    ubication: "Guadiaro",
  },

  "e-bike-marbella": {
    description:
      "Electric bike route through Sierra Blanca to Istán. Incredible coastal views. Tapas included in the village.",
    videoYoutube: "",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/e-bike-marbella/main.jpg",
      alt: "E-Bike Marbella - Electric bike route through Sierra Blanca",
    },
    images: [],
    isOffer: false,
    rating: { value: 0, reviews: 0 },
    level: "moderate",
    province: "Málaga",
    categoryPath: "more-activities",
    duration: 4,
    minimumAge: 12,
    ubication: "Marbella",
  },

  "buggy-tour-marbella": {
    description:
      "Buggy tour with panoramic coastal views. Adrenaline and spectacular landscapes. Off-road experience.",
    videoYoutube: "",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/buggy-tour-marbella/main.jpg",
      alt: "Buggy Tour Marbella - Buggy tour with panoramic coastal views",
    },
    images: [],
    isOffer: false,
    rating: { value: 0, reviews: 0 },
    level: "moderate",
    province: "Málaga",
    categoryPath: "more-activities",
    duration: 3,
    minimumAge: 18,
    ubication: "Marbella",
  },

  "jet-ski-marbella": {
    description:
      "Guided jet ski tours from the Marina. Search for dolphins and explore Marbella's coast with adrenaline.",
    videoYoutube: "",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/jet-ski-marbella/main.jpg",
      alt: "Jet Ski Marbella - Guided jet ski tours from the Marina",
    },
    images: [],
    isOffer: false,
    rating: { value: 0, reviews: 0 },
    level: "moderate",
    province: "Málaga",
    categoryPath: "more-activities",
    duration: 2,
    minimumAge: 16,
    ubication: "Marbella",
  },

  "gymkhana-marbella": {
    description:
      "Fun scavenger hunt through Marbella's old town. 12 challenges, tapas included. Perfect for groups and families.",
    videoYoutube: "",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/gymkhana-marbella/main.jpg",
      alt: "Gymkhana Marbella - Fun scavenger hunt through Marbella's old town",
    },
    images: [],
    isOffer: false,
    rating: { value: 0, reviews: 0 },
    level: "easy",
    province: "Málaga",
    categoryPath: "more-activities",
    duration: 3,
    minimumAge: 8,
    ubication: "Marbella",
  },

  "caving-experience": {
    description:
      "Family caving adventure. Discover Málaga's incredible underground world. From 7 years old.",
    videoYoutube: "",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/caving-experience/main.jpg",
      alt: "Caving Experience - Family caving adventure",
    },
    images: [],
    isOffer: false,
    rating: { value: 0, reviews: 0 },
    level: "moderate",
    province: "Málaga",
    categoryPath: "more-activities",
    duration: 4,
    minimumAge: 7,
    ubication: "Málaga",
  },

  // ==================== COMBO PACKS ====================
  "pack-canyoning-via-ferrata": {
    description:
      "Pure Adrenaline Pack: combine canyoning and via ferrata in one day. The most complete adventure experience.",
    videoYoutube: "",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/pack-canyoning-via-ferrata/main.jpg",
      alt: "Canyoning + Via Ferrata - Pure Adrenaline Pack",
    },
    images: [],
    isOffer: false,
    rating: { value: 0, reviews: 0 },
    level: "moderate",
    province: "Málaga",
    categoryPath: "more-activities",
    duration: 8,
    minimumAge: 11,
    ubication: "Marbella",
  },

  "pack-canyoning-ebike": {
    description:
      "Discover Deep Andalusia: canyoning in the morning and e-bike route in the afternoon. Nature and culture.",
    videoYoutube: "",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/pack-canyoning-ebike/main.jpg",
      alt: "Canyoning + E-Bike - Discover Deep Andalusia",
    },
    images: [],
    isOffer: false,
    rating: { value: 0, reviews: 0 },
    level: "moderate",
    province: "Málaga",
    categoryPath: "more-activities",
    duration: 7,
    minimumAge: 12,
    ubication: "Marbella",
  },

  "pack-canyoning-survival": {
    description:
      "Family adventure pack: canyoning and survival workshop in the forest. Unforgettable vacation for everyone.",
    videoYoutube: "",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/pack-canyoning-survival/main.jpg",
      alt: "Canyoning + Survival Workshop - Family adventure pack",
    },
    images: [],
    isOffer: false,
    rating: { value: 0, reviews: 0 },
    level: "moderate",
    province: "Málaga",
    categoryPath: "more-activities",
    duration: 6,
    minimumAge: 10,
    ubication: "Marbella",
  },

  "pack-canyoning-boat": {
    description:
      "Complete water adventure: canyoning and exclusive boat tour along Estepona's coast. Relaxation and adrenaline.",
    videoYoutube: "",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/pack-canyoning-boat/main.jpg",
      alt: "Canyoning + Boat Tour - Complete water adventure",
    },
    images: [],
    isOffer: false,
    rating: { value: 0, reviews: 0 },
    level: "moderate",
    province: "Málaga",
    categoryPath: "more-activities",
    duration: 7,
    minimumAge: 8,
    ubication: "Estepona",
  },

  "pack-canyoning-hiking": {
    description:
      "Combine canyoning with hiking through white villages. Adventure, culture and Andalusian gastronomy in one day.",
    videoYoutube: "",
    days: "All year!",
    mainImage: {
      src: "/images/excursions/pack-canyoning-hiking/main.jpg",
      alt: "Canyoning + Hiking - Adventure, culture and gastronomy",
    },
    images: [],
    isOffer: false,
    rating: { value: 0, reviews: 0 },
    level: "moderate",
    province: "Málaga",
    categoryPath: "more-activities",
    duration: 6,
    minimumAge: 10,
    ubication: "Ronda",
  },
};

// Datos por defecto para excursiones que no tengan datos complementarios
export const defaultComplementaryData: ComplementaryData = {
  description: "",
  videoYoutube: "",
  days: "All year!",
  mainImage: { src: "/barrancos.jpg", alt: "Excursion image" },
  images: [],
  isOffer: false,
  rating: { value: 0, reviews: 0 },
  level: "moderate",
  ubication: "",
  duration: 3,
  minimumAge: 8,
  province: "Málaga",
  categoryPath: "activities",
};
