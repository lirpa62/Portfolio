import { notFound } from "next/navigation";
import { projects } from "@/data/resume";
import { ProjectDetailView } from "@/components/ProjectDetail";
import type { Project } from "@/types/project";

function getAllProjects(): Project[] {
  return Object.values(projects).flat();
}

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getAllProjects().find((p) => p.id === id);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.name} | 남기성`,
    description: project.desc,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getAllProjects().find((p) => p.id === id);
  if (!project) notFound();

  return <ProjectDetailView project={project} />;
}
