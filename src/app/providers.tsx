"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "@/context/theme-context";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
