import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { MdxContent } from "@/components/MdxContent";
import Link from "next/link";
import { ChevronLeft, Clock, Tag } from "lucide-react";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} | 남기성`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen pt-24 pb-28 px-6 bg-[var(--bg)]">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="flex items-center gap-2 mb-10 text-sm text-[var(--text-sub)] hover:text-[var(--text)] transition-colors"
        >
          <ChevronLeft size={16} /> Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <time className="text-sm text-[var(--text-muted)]">
              {post.date}
            </time>
            <span className="flex items-center gap-1 text-sm text-[var(--text-muted)]">
              <Clock size={13} /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-lg text-[var(--text-sub)] mb-6">
              {post.excerpt}
            </p>
          )}

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400"
              >
                <Tag size={10} /> {tag}
              </span>
            ))}
          </div>
        </header>

        <hr className="border-[var(--border)] mb-12" />

        <MdxContent source={post.content} />
      </div>
    </div>
  );
}
