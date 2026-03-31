"use client";

import { ChevronLeft, Clock, Tag } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { useColors } from "@/hooks/useColors";

interface BlogDetailPost {
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

interface BlogDetailProps {
  post: BlogDetailPost;
  onBack: () => void;
}

export function BlogDetail({ post, onBack }: BlogDetailProps) {
  const c = useColors();

  return (
    <div className="min-h-screen pt-20 pb-28 px-6" style={{ background: c.bg }}>
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <button
            onClick={onBack}
            className="flex items-center gap-2 mb-10 text-sm transition-colors cursor-pointer"
            style={{ color: c.textSub }}
          >
            <ChevronLeft size={16} /> 돌아가기
          </button>
        </FadeIn>
        <FadeIn delay={0.05}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm" style={{ color: c.textMuted }}>
              {post.date}
            </span>
            <span
              className="flex items-center gap-1 text-sm"
              style={{ color: c.textMuted }}
            >
              <Clock size={13} /> {post.readTime}
            </span>
          </div>
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: c.text }}
          >
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-10">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full"
                style={{ background: c.accentSoft, color: c.accent }}
              >
                <Tag size={10} /> {tag}
              </span>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div
            className="text-base leading-loose whitespace-pre-line"
            style={{ color: c.textSub }}
          >
            {post.content}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
