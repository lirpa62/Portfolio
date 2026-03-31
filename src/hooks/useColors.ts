"use client";

import { useTheme } from "@/context/theme-context";

export function useColors() {
  const { dark } = useTheme();

  return {
    bg: dark ? "#0a0a0a" : "#fafafa",
    bgAlt: dark ? "#0f0f0f" : "#f0f0f0",
    bgCard: dark ? "rgba(17,17,17,0.6)" : "rgba(255,255,255,0.8)",
    bgCardHover: dark ? "rgba(25,25,25,0.8)" : "rgba(255,255,255,1)",
    border: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
    borderHover: dark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)",
    text: dark ? "#ffffff" : "#111111",
    textSub: dark ? "#a1a1aa" : "#6d6d5b",
    textMuted: dark ? "#6d6d5b" : "#a1a1aa",
    accent: "#34d399",
    accentSoft: dark ? "rgba(52,211,153,0.12)" : "rgba(16,185,129,0.1)",
    navBg: dark ? "rgba(10,10,10,0.85)" : "rgba(250,250,250,0.88)",
    codeBg: dark ? "#1a1a2e" : "#f5f5f5",
    tagBg: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)",
    tagText: "#71717a",
    quoteBg: dark ? "rgba(52,211,153,0.06)" : "rgba(16,185,129,0.06)",
    quoteBorder: dark ? "rgba(52,211,153,0.2)" : "rgba(16,185,129,0.25)",
  };
}
