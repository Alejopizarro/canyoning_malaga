// Blog articles listed on /blog and included in the sitemap.
// Add new articles here so they show up in both places.

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  isPlaceholder?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    title: "The Best Activities in Marbella & Surroundings | 2026 Guide",
    slug: "/blog/best-activities-marbella",
    excerpt:
      "Discover the best activities in Marbella: canyoning, via ferrata, hiking, kayaking & more. Your complete guide to outdoor adventures on the Costa del Sol.",
    image: "/marbella-drone-1.webp",
    category: "Guides",
    date: "March 4, 2026",
    readTime: "15 min read",
  },
  {
    title: "What is Canyoning, Canyoneering or Kloofing?",
    slug: "/blog/what-is-canyoneering",
    excerpt:
      "Discover everything you need to know about canyoning, from basic techniques like rappelling and jumping to the best canyons in Andalusia. The complete guide for beginners and experts.",
    image: "/rio-verde-4.webp",
    category: "Guides",
    date: "January 15, 2025",
    readTime: "8 min read",
  },
  {
    title: "What is the Basic Equipment for Canyoning?",
    slug: "/blog/what-is-basic-equipment-for-canyoning",
    excerpt:
      "Discover the essential equipment for canyoning: wetsuit, helmet, harness, shoes and more. A complete guide to stay safe and comfortable in your canyoning adventures.",
    image: "/basic-equipment-1.webp",
    category: "Equipment",
    date: "April 8, 2025",
    readTime: "10 min read",
  },
];
