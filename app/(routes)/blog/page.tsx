import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | TUUR Adventure - Canyoning & Outdoor Activities",
  description:
    "Discover tips, guides and stories about canyoning, via ferrata, hiking and outdoor adventures in Andalusia. Expert advice from professional guides.",
  keywords: [
    "canyoning blog",
    "outdoor activities blog",
    "adventure tips",
    "Andalusia travel",
    "canyoning guides",
  ],
};

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  isPlaceholder?: boolean;
}

const blogPosts: BlogPost[] = [
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
    title: "Essential Equipment for Your First Canyoning Adventure",
    slug: "/blog/canyoning-equipment",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    image: "",
    category: "Equipment",
    date: "Coming Soon",
    readTime: "6 min read",
    isPlaceholder: true,
  },
  {
    title: "Top 5 Via Ferratas in Andalusia You Must Try",
    slug: "/blog/best-via-ferratas-andalusia",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    image: "",
    category: "Via Ferrata",
    date: "Coming Soon",
    readTime: "5 min read",
    isPlaceholder: true,
  },
];

const BlogCard = ({ post }: { post: BlogPost }) => (
  <Link
    href={post.isPlaceholder ? "#" : post.slug}
    className={`group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${
      post.isPlaceholder ? "cursor-not-allowed opacity-75" : ""
    }`}
  >
    {/* Image */}
    <div className="relative h-52 overflow-hidden">
      {post.image ? (
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <svg
            className="w-16 h-16 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}

      {/* Category Badge */}
      <div className="absolute top-4 left-4">
        <span className="bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full">
          {post.category}
        </span>
      </div>

      {/* Coming Soon Badge */}
      {post.isPlaceholder && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <span className="bg-white text-gray-800 text-sm font-bold px-4 py-2 rounded-full">
            Coming Soon
          </span>
        </div>
      )}
    </div>

    {/* Content */}
    <div className="p-6">
      {/* Meta */}
      <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
        <span>{post.date}</span>
        <span className="w-1 h-1 bg-gray-300 rounded-full" />
        <span>{post.readTime}</span>
      </div>

      {/* Title */}
      <h2
        className={`text-xl font-bold text-gray-900 mb-3 line-clamp-2 ${
          !post.isPlaceholder ? "group-hover:text-teal-600" : ""
        } transition-colors`}
      >
        {post.title}
      </h2>

      {/* Excerpt */}
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
        {post.excerpt}
      </p>

      {/* Read More */}
      {!post.isPlaceholder && (
        <div className="mt-4 flex items-center gap-2 text-teal-600 font-medium text-sm group-hover:gap-3 transition-all">
          Read Article
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      )}
    </div>
  </Link>
);

export default function BlogPage() {
  return (
    <main className="pt-20 min-h-screen">
      {/* Hero Section */}
      <header className="border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 py-16 md:py-24">
          <p className="text-teal-600 font-medium mb-3">Our Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Adventure Stories & Guides
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Tips, guides and stories about canyoning, via ferrata, hiking and
            outdoor adventures in Andalusia from our team of professional
            guides.
          </p>
        </div>
      </header>

      {/* Blog Grid */}
      <section className="max-w-[1440px] mx-auto px-4 py-12 md:py-16">
        {/* Featured Post */}
        <div className="mb-12">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
            Featured Article
          </h2>
          <Link
            href={blogPosts[0].slug}
            className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="md:flex">
              {/* Image */}
              <div className="relative h-64 md:h-auto md:w-1/2">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {blogPosts[0].category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                  <span>{blogPosts[0].date}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-2 text-teal-600 font-medium group-hover:gap-3 transition-all">
                  Read Article
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* More Articles */}
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
            More Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.slice(1).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
