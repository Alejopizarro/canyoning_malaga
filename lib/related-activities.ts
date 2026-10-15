import { complementaryData } from "./complementary-data";

// Cards for the "Similar Activities" block on activity pages.
// The link titles are descriptive anchor texts (activity + place) for internal
// linking; they don't replace the activity names in complementary-data.ts.

const LINK_TITLES = {
  guadalmina: "Guadalmina Canyoning in Benahavís",
  "rio-verde": "Río Verde Canyoning in Granada",
  "rio-verde-xpro": "Río Verde Integral Canyoning X-Pro",
  zarzalones: "Zarzalones Canyoning in Sierra de las Nieves",
  buitreras: "Buitreras Canyoning near Ronda",
  "tajo-ronda": "Tajo de Ronda Canyoning",
  ronda: "Via Ferrata Ronda",
  "el-chorro": "Via Ferrata El Chorro",
  casares: "Via Ferrata Casares",
  "la-concha": "La Concha Hike in Marbella",
  "kayak-puerto-banus": "Kayak Tour in Puerto Banús",
} as const;

export type RelatedSlug = keyof typeof LINK_TITLES;

export function relatedActivities(slugs: RelatedSlug[]) {
  return slugs.map((slug) => {
    const data = complementaryData[slug];
    return {
      title: LINK_TITLES[slug],
      description: data.description,
      image: data.mainImage,
      href: `/${data.categoryPath}/${slug}`,
      category: data.category,
    };
  });
}
