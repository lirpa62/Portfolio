"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FadeIn } from "./FadeIn";
import { ExternalLink, ChevronLeft } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";
import { useColors } from "@/hooks/useColors";
import type { Project } from "@/types/project";

interface ProjectDetailViewProps {
  project: Project;
}

export function ProjectDetailView({ project }: ProjectDetailViewProps) {
  const router = useRouter();
  const c = useColors();
  const isGif = project.image?.toLowerCase().endsWith(".gif") ?? false;
  const sections = [
    { icon: "🔍", title: "문제", content: project.problem },
    { icon: "💡", title: "해결", content: project.solution },
    { icon: "✅", title: "결과", content: project.result },
  ];

  return (
    <div className="min-h-screen pt-20 pb-28 px-6" style={{ background: c.bg }}>
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <button
            onClick={() => router.push("/#projects")}
            className="flex items-center gap-2 mb-10 text-sm transition-colors duration-200 cursor-pointer text-[var(--text-muted)] hover:text-[var(--text)]"
          >
            <ChevronLeft size={16} /> 돌아가기
          </button>
        </FadeIn>
        <FadeIn delay={0.05}>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full"
                style={{ background: c.tagBg, color: c.tagText }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h1
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ color: c.text }}
          >
            {project.name}
          </h1>
          <p className="text-lg mb-2" style={{ color: c.textSub }}>
            {project.desc}
          </p>
          <div className="mt-4 mb-12 flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center md:gap-4">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="text-sm" style={{ color: c.textMuted }}>
                {project.period}
              </span>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm transition-colors"
                style={{ color: c.accent }}
              >
                <GithubIcon size={14} /> GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm transition-colors"
                  style={{ color: c.accent }}
                >
                  <ExternalLink size={14} /> Live
                </a>
              )}
            </div>
            {(project.chromeId || project.whaleGistId) && (
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                {project.chromeId && (
                  <img
                    src={`https://img.shields.io/chrome-web-store/users/${project.chromeId}?logo=googlechrome&logoColor=white&label=CHROME%20USERS&color=4285F4`}
                    alt="Chrome Web Store Users"
                    loading="lazy"
                    className="h-5 w-auto max-w-full"
                  />
                )}
                {project.whaleGistId && (
                  <img
                    src={`https://img.shields.io/endpoint?logo=naver&logoColor=white&label=WHALE%20USERS&&url=https%3A%2F%2Fgist.githubusercontent.com%2Flirpa62%2F${project.whaleGistId}%2Fraw%2F${project.gistTitle}.json`}
                    alt="Whale Web Store Users"
                    loading="lazy"
                    className="h-5 w-auto max-w-full"
                  />
                )}
              </div>
            )}
          </div>
        </FadeIn>

        {project.image && (
          <FadeIn delay={0.08}>
            <div
              className="mb-8 rounded-xl overflow-hidden"
              style={{ border: `1px solid ${c.border}` }}
            >
              <Image
                src={project.image}
                alt={project.name}
                width={1600}
                height={900}
                sizes="(max-width: 768px) 100vw, 768px"
                unoptimized={isGif}
                className="w-full h-auto max-h-[70vh] object-contain bg-[var(--bg-alt)]"
              />
            </div>
          </FadeIn>
        )}

        {sections.map((sec, i) => (
          <FadeIn key={sec.title} delay={0.1 + i * 0.08}>
            <div
              className="mb-8 p-6 rounded-xl"
              style={{ background: c.bgAlt, border: `1px solid ${c.border}` }}
            >
              <h3
                className="text-base font-semibold mb-3"
                style={{ color: c.text }}
              >
                <span className="mr-2">{sec.icon}</span>
                {sec.title}
              </h3>
              <p
                className="text-sm leading-relaxed whitespace-pre-line"
                style={{ color: c.textSub }}
              >
                {sec.content ?? "정리 중입니다."}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
