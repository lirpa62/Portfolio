import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Nav } from "@/components/Nav";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "남기성 | Frontend Developer",
  description:
    "불편한 지점을 빠르게 발견하고, 실제로 쓰이는 도구로 해결합니다.",
  openGraph: {
    title: "남기성 | Frontend Developer",
    description:
      "불편한 지점을 빠르게 발견하고, 실제로 쓰이는 도구로 해결합니다.",
    url: "https://your-domain.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="bg-(--bg) text-(--text) antialiased">
        <Providers>
          <Nav />
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
