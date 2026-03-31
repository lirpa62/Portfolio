import { getAllPosts } from "@/lib/posts";
import { BlogCard } from "@/components/BlogCard";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata = {
  title: "Blog | 남기성",
  description: "개발 경험과 기술을 기록합니다.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-24 pb-28 px-6 bg-[var(--bg)]">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 mb-10 text-sm text-[var(--text-sub)] hover:text-[var(--text)] transition-colors"
        >
          <ChevronLeft size={16} /> Home
        </Link>

        <h1 className="text-3xl font-bold text-[var(--text)] mb-2">Blog</h1>
        <p className="text-[var(--text-sub)] mb-12">
          개발 경험과 기술을 기록합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <BlogCard post={post} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
