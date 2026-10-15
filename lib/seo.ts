import { siteConfig } from "./site-config";

// JSON-LD helpers shared by the activity pages.

interface Crumb {
  name: string;
  /** Site-relative path, e.g. "/activities?category=canyoning". */
  path: string;
}

/**
 * schema.org BreadcrumbList for an activity page. Mirrors the visible
 * breadcrumb in the Hero (activities > category > activity) so every item
 * points to a URL that exists; there are no /canyoning, /via-ferrata or
 * /hiking index pages.
 */
export function activityBreadcrumbJsonLd({
  name,
  path,
  category,
}: {
  name: string;
  path: string;
  /** Omit for activities without their own category filter. */
  category?: { name: string; categoryPath: string };
}) {
  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: "Activities", path: "/activities" },
    ...(category
      ? [
          {
            name: category.name,
            path: `/activities?category=${category.categoryPath}`,
          },
        ]
      : []),
    { name, path },
  ];

  return {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.path === "/" ? siteConfig.url : `${siteConfig.url}${crumb.path}`,
    })),
  };
}
