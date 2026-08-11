import { portfolioData } from "../data/portfolio";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import type { Project } from "../types";

interface ProjectsSectionProps {
  onSelectProject?: (project: Project) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  return (
    <section id="proyectos" className="mt-20 scroll-mt-24 flex flex-col gap-[15px] md:mt-16 xl:mt-[99px]">
      <SectionTitle>Proyectos</SectionTitle>
      <div className="grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-2">
        {portfolioData.projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onSelect={() => onSelectProject?.(project)}
          />
        ))}
      </div>
    </section>
  );
}
