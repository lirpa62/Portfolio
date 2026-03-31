import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { BlogSection } from "@/components/BlogSection";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <BlogSection />
      <Footer />
    </main>
  );
}
