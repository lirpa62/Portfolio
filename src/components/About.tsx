import { GraduationCap } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 scroll-mt-24"
      style={{ background: "var(--bg-alt)" }}
    >
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2
            className="text-sm tracking-[0.3em] uppercase mb-10"
            style={{ color: "#6ee7b7" }}
          >
            About
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p
            className="text-lg leading-loose"
            style={{ color: "var(--text-sub)" }}
          >
            사용자 입장에서{" "}
            <span className="font-medium" style={{ color: "var(--text)" }}>
              불편한 지점을 빠르게 발견하고 실제로 쓰이는 도구로 해결하는 개발
            </span>
            을 좋아합니다. 브라우저 확장 프로그램부터 데스크톱 앱, 모바일 앱,
            데이터 기반 웹 프로젝트까지 다양한 플랫폼에서 만들고 있습니다.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div
            className="mt-10 flex items-center gap-3"
            style={{ color: "var(--text-muted)" }}
          >
            <GraduationCap size={18} />
            <span className="text-sm">
              B.S. Computer Engineering, Pukyong National University
            </span>
          </div>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div
            className="mt-8 p-5 rounded-xl"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-sub)" }}
            >
              모든 Featured Projects는{" "}
              <span className="text-emerald-400">AI-assisted</span> 방식으로
              개발했습니다. 문제 정의, 기능 설계, 프롬프트 설계, 생성 코드
              검증·통합, UX 조정, 테스트, 배포, 사용자 피드백 반영은 직접
              담당합니다.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
