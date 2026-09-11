import type { Project } from "../types";
import projectBackground from "../assets/project-background.avif";
import gestorRadLogo from "../assets/project-logos/Gestor RAD.svg";
import memsystemsLogo from "../assets/project-logos/Memsystems.svg";
import tasklaneLogo from "../assets/project-logos/Tasklane.svg";
import threadNestLogo from "../assets/project-logos/ThreadNest.svg";
import Icon from "./Icon";
import Placeholder from "./Placeholder";
import Tooltip from "./Tooltip";

interface ProjectCardProps {
  project: Project;
}

const projectLogos: Record<string, string> = {
  memsystems: memsystemsLogo.src,
  tasklane: tasklaneLogo.src,
  threadnest: threadNestLogo.src,
  "gestor-rad": gestorRadLogo.src,
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const projectLogo = project.slug ? projectLogos[project.slug] : undefined;
  const projectTitleId = `project-${
    project.slug ?? project.title.toLowerCase().replaceAll(" ", "-")
  }-title`;

  return (
    <a
      href={`/project/${project.slug}`}
      aria-labelledby={projectTitleId}
      className={`project-card project-card-interactive focus-surface group isolate flex h-full w-full flex-col gap-4 border border-border p-4`}
    >
      {projectLogo ? (
        <div className="project-media relative z-[1] flex h-[140px] w-full shrink-0 items-center justify-center overflow-hidden bg-surface">
          <div
            aria-hidden="true"
            className="project-media-image absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${projectBackground.src}")` }}
          />
          <div
            aria-hidden="true"
            className="project-media-overlay absolute inset-0"
          />
          <div
            aria-hidden="true"
            className="project-media-noise absolute inset-0"
          />
          <div
            role="img"
            aria-label={`Logo de ${project.title}`}
            className="project-logo relative z-10 h-[98px] w-[84px]"
            style={{
              maskImage: `url("${projectLogo}")`,
              WebkitMaskImage: `url("${projectLogo}")`,
            }}
          />
        </div>
      ) : (
        <Placeholder
          label="PROJECT IMAGE"
          className="relative z-[1] h-[140px] w-full"
        />
      )}
      <div className="relative z-[1] flex w-full flex-col gap-4">
        <div className="flex w-full flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <h3 id={projectTitleId} className="w-full text-base leading-normal text-text">
              {project.title}
            </h3>
          </div>
          <p className="project-card-copy w-full text-sm leading-normal text-text-soft hoverable:group-hover:text-text">
            {project.subtitle}
          </p>
        </div>
        <div className="flex w-fit flex-row items-center gap-2">
          {project.icons.map((technology) => (
            <Tooltip key={technology.icon} label={technology.name}>
              <Icon
                name={technology.icon}
                size={20}
              />
            </Tooltip>
          ))}
        </div>
      </div>
    </a>
  );
}
