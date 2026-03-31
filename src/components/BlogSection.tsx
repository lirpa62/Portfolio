import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import { BlogCard } from "./BlogCard";
import { FadeIn } from "./FadeIn";

export function BlogSection() {
  // 최신 3개만 표시
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="blog" className="py-28 px-6 bg-[var(--bg-alt)] scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-xs tracking-[0.3em] uppercase font-medium text-emerald-400">
              Blog
            </h2>
            <Link
              href="/blog"
              className="flex items-center gap-1 text-sm text-[var(--text-sub)] hover:text-[var(--text)] transition-colors duration-200"
            >
              전체 보기 <ArrowRight size={14} />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.08}>
              <Link href={`/blog/${post.slug}`}>
                <BlogCard post={post} />
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
