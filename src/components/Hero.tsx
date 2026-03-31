"use client";

import { Mail, ChevronDown } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { FadeIn } from "./FadeIn";
import { useTheme } from "@/context/theme-context";

export function Hero() {
  const { dark } = useTheme();

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center relative"
      style={{
        background: dark
          ? "linear-gradient(165deg, #0a0a0a 0%, #111 50%, #1a1a2e 100%)"
          : "linear-gradient(165deg, #fafafa 0%, #f0f0f0 50%, #e8eff8 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"} 1px, transparent 0)`,
          backgroundSize: "44px 44px",
        }}
      />
      <FadeIn className="text-center z-10 px-6">
        <p
          className="text-sm tracking-[0.35em] uppercase mb-5"
          style={{ color: "#6ee7b7" }}
        >
          Frontend Developer
        </p>
        <h1
          className="text-5xl md:text-7xl font-bold mb-4"
          style={{
            fontFamily: "'Pretendard', sans-serif",
            color: "var(--text)",
            letterSpacing: "-0.03em",
          }}
        >
          남기성
          <span
            className="font-light ml-3 text-3xl md:text-4xl"
            style={{ color: "var(--text-muted)" }}
          >
            (Lirpa)
          </span>
        </h1>
        <p
          className="text-lg md:text-xl mt-6 max-w-xl mx-auto leading-relaxed"
          style={{ color: "var(--text-sub)" }}
        >
          불편한 지점을 빠르게 발견하고,
          <br />
          실제로 쓰이는 도구로 해결합니다.
        </p>
        <div className="flex gap-5 justify-center mt-10">
          <a
            href="https://github.com/lirpa62"
            className="hover:text-white transition-colors"
            style={{ color: "var(--text-sub)" }}
          >
            <GithubIcon size={22} />
          </a>
          <a
            href="mailto:danielnam426@gmail.com"
            className=" hover:text-white transition-colors"
            style={{ color: "var(--text-sub)" }}
          >
            <Mail size={22} />
          </a>
        </div>
      </FadeIn>
      <div className="absolute bottom-10 animate-bounce">
        <ChevronDown size={24} style={{ color: "var(--text-muted)" }} />
      </div>
    </section>
  );
}
