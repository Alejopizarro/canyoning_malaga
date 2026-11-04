import { existsSync } from "node:fs";
import path from "node:path";
import { MetadataRoute } from "next";
import { activityPath, excursions } from "@/app/data";
import { blogPosts } from "@/lib/blog";
import { complementaryData } from "@/lib/complementary-data";
import { siteConfig } from "@/lib/site-config";

// Built once at build time: the page-existence check below reads the source tree.
export const dynamic = "force-static";

// Indexable pages that are not activities or blog posts.
// Not listed on purpose: /hero, /team-building-test, /confirmation and
// /blog/adventure-packing-guides (all noindex), and the legal pages
// (/privacy-policy, /terms-and-conditions, /cookie-policy), which stay
// indexable but are not worth promoting in the sitemap.
const STATIC_PATHS = [
  "/",
  "/activities",
  "/team-building",
  "/summer-camp",
  "/campamento-de-verano",
  "/about-us",
  "/contact",
  "/faqs",
  "/blog",
];

// Last real content change per page (ISO date). Update the date here whenever
// you change a page's content; pages not listed get no lastModified. Never use
// the build date: it would tell Google every page changed on every deploy.
const PAGE_UPDATED: Record<string, string> = {
  "/": "2026-11-04",
  "/activities/e-bike-marbella": "2026-11-04",
  "/canyoning/guadalmina": "2026-11-04",
  "/hiking/la-concha": "2026-11-04",
  "/activities/kayak-puerto-banus": "2026-11-04",
  "/via-ferrata/casares": "2026-11-04",
};

const lastModifiedFor = (urlPath: string) =>
  PAGE_UPDATED[urlPath] ? { lastModified: PAGE_UPDATED[urlPath] } : {};

// The summer camp has an English and a Spanish version of the same page.
const summerCampLanguages = {
  en: `${siteConfig.url}/summer-camp`,
  es: `${siteConfig.url}/campamento-de-verano`,
  "x-default": `${siteConfig.url}/summer-camp`,
};

const alternatesFor = (urlPath: string) =>
  urlPath === "/summer-camp" || urlPath === "/campamento-de-verano"
    ? { alternates: { languages: summerCampLanguages } }
    : {};

// Activity pages that exist but are not listed in `excursions`.
const EXTRA_ACTIVITY_PATHS = ["/canyoning/zarzalones"];

// `excursions` also lists activities that have no page yet (they would 404).
const hasPage = (urlPath: string) =>
  existsSync(path.join(process.cwd(), "app", "(routes)", urlPath, "page.tsx"));

const absolute = (urlPath: string) =>
  urlPath === "/" ? siteConfig.url : `${siteConfig.url}${urlPath}`;

// "November 4, 2026" parses as local midnight, which in Spain is the previous
// day in UTC. Keep the calendar day the article was published.
const toUtcDate = (date: string) => {
  const local = new Date(date);
  return new Date(
    Date.UTC(local.getFullYear(), local.getMonth(), local.getDate()),
  );
};

const hasPublicFile = (src: string) =>
  existsSync(path.join(process.cwd(), "public", src));

// Absolute URLs of an activity's photos, from complementary-data (keyed by
// the last segment of its path). Placeholders and missing files are skipped.
const activityImages = (urlPath: string) => {
  const data = complementaryData[urlPath.split("/").pop() ?? ""];
  if (!data) return {};
  const images = [data.mainImage, ...data.images]
    .map((image) => image?.src)
    .filter(
      (src): src is string =>
        Boolean(src) && src !== "/empty.webp" && hasPublicFile(src),
    )
    .map(absolute);
  return images.length ? { images: [...new Set(images)] } : {};
};

export default function sitemap(): MetadataRoute.Sitemap {
  const activityPaths = [
    ...excursions.filter((exc) => exc.categoryPath).map((exc) => activityPath(exc)),
    ...EXTRA_ACTIVITY_PATHS,
  ].filter(hasPage);

  return [
    ...STATIC_PATHS.map((urlPath) => ({
      url: absolute(urlPath),
      ...lastModifiedFor(urlPath),
      ...alternatesFor(urlPath),
    })),
    ...[...new Set(activityPaths)].map((urlPath) => ({
      url: absolute(urlPath),
      ...lastModifiedFor(urlPath),
      ...activityImages(urlPath),
    })),
    ...blogPosts
      .filter((post) => !post.isPlaceholder)
      .map((post) => ({
        url: absolute(post.slug),
        // Last content update if there is one, otherwise the publication date.
        lastModified: toUtcDate(post.updated ?? post.date),
      })),
  ];
}
