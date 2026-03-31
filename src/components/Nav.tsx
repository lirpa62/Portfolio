"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/theme-context";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useTheme();
  const toggleBaseBg = dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)";
  const toggleHoverBg = dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)";
  const toggleHoverShadow = dark
    ? "0 8px 20px rgba(0,0,0,0.35)"
    : "0 8px 20px rgba(0,0,0,0.12)";

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const items = [
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Blog", href: "/#blog" },
    { label: "Skills", href: "/#skills" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? dark
            ? "rgba(10,10,10,0.85)"
            : "rgba(250,250,250,0.88)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? `1px solid ${dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}`
          : "none",
      }}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center py-4 px-6">
        <Link
          href="/"
          className="font-bold text-sm tracking-wide"
          style={{ color: "var(--text)" }}
        >
          Lirpa
        </Link>
        <div className="flex items-center gap-6">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs tracking-wide cursor-pointer transition-colors text-[var(--text-muted)] hover:text-[var(--text)]"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggle}
            className="p-1.5 rounded-lg transition-all duration-200 ml-1 cursor-pointer"
            style={{
              color: "var(--text-sub)",
              background: toggleBaseBg,
              boxShadow: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = toggleHoverBg;
              e.currentTarget.style.boxShadow = toggleHoverShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = toggleBaseBg;
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
