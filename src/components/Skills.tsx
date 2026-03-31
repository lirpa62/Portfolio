import { Code2, Server, Package, Bot } from "lucide-react";
import type { ReactElement } from "react";
import { FadeIn } from "./FadeIn";
import { skills } from "@/data/resume";

type SkillCategory = keyof typeof skills;
type SkillItems = (typeof skills)[SkillCategory];

const skillEntries = Object.entries(skills) as Array<
  [SkillCategory, SkillItems]
>;

export function Skills() {
  const iconMap = {
    Frontend: <Code2 size={16} />,
    "Backend & Infra": <Server size={16} />,
    Others: <Package size={16} />,
    "AI Workflow": <Bot size={16} />,
  } satisfies Record<SkillCategory, ReactElement>;

  return (
    <section
      id="skills"
      className="py-28 px-6 scroll-mt-24"
      style={{ background: "var(--bg-alt)" }}
    >
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2
            className="text-sm tracking-[0.3em] uppercase mb-14"
            style={{ color: "#6ee7b7" }}
          >
            Skills
          </h2>
        </FadeIn>
        {skillEntries.map(([category, items], ci) => (
          <FadeIn key={category} delay={ci * 0.12}>
            <div className="mb-10">
              <div
                className="flex items-center gap-2 mb-4"
                style={{ color: "var(--text-sub)" }}
              >
                {iconMap[category]}
                <span className="text-sm font-medium">{category}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s.name}
                    className="text-xs font-medium px-3 py-1.5 rounded-full cursor-default transition-transform hover:scale-105"
                    style={{
                      backgroundColor: s.color + "18",
                      color: s.color,
                      border: `1px solid ${s.color}30`,
                    }}
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
