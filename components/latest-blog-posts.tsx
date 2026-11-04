import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog";

// blogPosts is ordered newest first, so the first three are the latest.
const latestPosts = blogPosts.filter((post) => !post.isPlaceholder).slice(0, 3);

export default function LatestBlogPosts() {
  return (
    <section className="relative z-20 bg-background">
      <div className="pt-16 sm:pt-24 px-4 sm:px-8 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              From Our Blog
            </h2>
            <p className="text-gray-600 max-w-xl">
              Guides, tips and stories about canyoning and outdoor adventures in
              Andalusia from our team of professional guides.
            </p>
          </div>
          <Link
            href="/blog"
            title="Read all articles on the TUUR Adventure blog"
            className="self-start sm:self-auto shrink-0 border-2 border-gray-900 rounded-lg font-semibold px-4 py-3"
          >
            View all articles
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={post.slug}
              title={post.title}
              className="group"
            >
              <article className="h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    title={post.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-snug line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto pt-3 border-t border-gray-100 flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    Read article
                    <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
