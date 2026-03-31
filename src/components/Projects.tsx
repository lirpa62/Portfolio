"use client";

import { FadeIn } from "./FadeIn";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/resume";
import type { Project } from "@/types/project";

const projectEntries = Object.entries(projects) as Array<
  [keyof typeof projects, Project[]]
>;

export function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6 scroll-mt-24"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2
            className="text-sm tracking-[0.3em] uppercase mb-14"
            style={{ color: "#6ee7b7" }}
          >
            Projects
          </h2>
        </FadeIn>
        {projectEntries.map(([category, items]) => (
          <div key={category} className="mb-12">
            <FadeIn>
              <h3
                className="text-lg font-medium mb-5"
                style={{ color: "var(--text)" }}
              >
                {category}
              </h3>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {items.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
