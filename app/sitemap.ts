import { existsSync } from "node:fs";
import path from "node:path";
import { MetadataRoute } from "next";
import { activityPath, excursions } from "@/app/data";
import { blogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

// Built once at build time: the page-existence check below reads the source tree.
export const dynamic = "force-static";

// Indexable pages that are not activities or blog posts.
// Not listed on purpose: /hero, /team-building-test, /confirmation and
// /blog/adventure-packing-guides (all noindex).
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
  "/privacy-policy",
  "/terms-and-conditions",
  "/cookie-policy",
];

// Activity pages that exist but are not listed in `excursions`.
const EXTRA_ACTIVITY_PATHS = ["/canyoning/zarzalones"];

// `excursions` also lists activities that have no page yet (they would 404).
const hasPage = (urlPath: string) =>
  existsSync(path.join(process.cwd(), "app", "(routes)", urlPath, "page.tsx"));

const absolute = (urlPath: string) =>
  urlPath === "/" ? siteConfig.url : `${siteConfig.url}${urlPath}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const activityPaths = [
    ...excursions.filter((exc) => exc.categoryPath).map((exc) => activityPath(exc)),
    ...EXTRA_ACTIVITY_PATHS,
  ].filter(hasPage);

  return [
    ...STATIC_PATHS.map((urlPath) => ({ url: absolute(urlPath) })),
    ...[...new Set(activityPaths)].map((urlPath) => ({ url: absolute(urlPath) })),
    ...blogPosts
      .filter((post) => !post.isPlaceholder)
      .map((post) => ({
        url: absolute(post.slug),
        // Publication date: the only real date we have for articles.
        lastModified: new Date(post.date),
      })),
  ];
}
