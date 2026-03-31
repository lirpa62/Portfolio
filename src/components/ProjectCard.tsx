"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { useColors } from "@/hooks/useColors";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const router = useRouter();
  const c = useColors();

  return (
    <FadeIn delay={index * 0.08}>
      <div
        onClick={() => router.push(`/projects/${project.id}`)}
        className="group block p-5 rounded-xl cursor-pointer transition-all duration-300"
        style={{ border: `1px solid ${c.border}`, background: c.bgCard }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = c.borderHover;
          e.currentTarget.style.background = c.bgCardHover;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = c.border;
          e.currentTarget.style.background = c.bgCard;
        }}
      >
        {project.image && (
          <div className="relative w-full h-36 mb-3 overflow-hidden rounded-t-xl">
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-cover object-top"
            />
          </div>
        )}
        <div className="flex justify-between items-start mb-2">
          <h4
            className="font-semibold group-hover:text-emerald-400 transition-colors"
            style={{ color: c.text }}
          >
            {project.name}
          </h4>
          <span
            className="text-xs whitespace-nowrap ml-3"
            style={{ color: c.textMuted }}
          >
            {project.period}
          </span>
        </div>
        <p className="text-sm mb-3" style={{ color: c.textSub }}>
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full"
              style={{ background: c.tagBg, color: c.tagText }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 mt-3">
          {project.live && (
            <span
              className="flex items-center gap-1 text-xs"
              style={{ color: c.accent }}
            >
              <ExternalLink size={11} /> Live
            </span>
          )}
          <span
            className="flex items-center gap-1 text-xs"
            style={{ color: c.textMuted }}
          >
            <ArrowRight size={11} /> 상세 보기
          </span>
        </div>
      </div>
    </FadeIn>
  );
}
