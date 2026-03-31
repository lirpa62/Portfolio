import { Clock, Tag } from "lucide-react";
import type { PostMeta } from "@/lib/posts";

interface Props {
  post: PostMeta;
}

export function BlogCard({ post }: Props) {
  return (
    <div className="p-5 rounded-xl border border-(--border) bg-(--bg-card) hover:border-(--border-hover) hover:bg-(--bg-card-hover) transition-all duration-300 cursor-pointer h-full">
      <div className="flex items-center gap-3 mb-3">
        <time className="text-xs text-(--text-muted)">{post.date}</time>
        <span className="flex items-center gap-1 text-xs text-(--text-muted)">
          <Clock size={11} /> {post.readTime}
        </span>
      </div>

      <h3 className="font-semibold text-(--text) mb-2">{post.title}</h3>

      {post.excerpt && (
        <p className="text-sm text-(--text-sub) mb-3 line-clamp-2">
          {post.excerpt}
        </p>
      )}

      <div className="flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400"
          >
            <Tag size={10} /> {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
