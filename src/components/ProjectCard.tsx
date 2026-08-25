import type { KeyboardEvent } from "react";
import type { Project } from "../types";
import projectBackground from "../assets/project-background.avif";
import gestorRadLogo from "../assets/project-logos/Gestor RAD.svg";
import memsystemsLogo from "../assets/project-logos/Memsystems.svg";
import tasklaneLogo from "../assets/project-logos/Tasklane.svg";
import threadNestLogo from "../assets/project-logos/ThreadNest.svg";
import Icon from "./Icon";
import Placeholder from "./Placeholder";
import Tooltip from "./Tooltip";
import { preloadProjectDetailPage } from "../pages/projectDetailRouteComponent";

interface ProjectCardProps {
  project: Project;
  onSelect?: () => void;
}

const projectLogos: Record<string, string> = {
  memsystems: memsystemsLogo,
  tasklane: tasklaneLogo,
  threadnest: threadNestLogo,
  "gestor-rad": gestorRadLogo,
};

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const projectLogo = project.slug ? projectLogos[project.slug] : undefined;
  const projectTitleId = `project-${
    project.slug ?? project.title.toLowerCase().replaceAll(" ", "-")
  }-title`;

  const preloadDetails = () => {
    if (!onSelect) return;
    void preloadProjectDetailPage().catch(() => undefined);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!onSelect || event.repeat) return;
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    onSelect();
  };

  return (
    <div
      onClick={onSelect}
      onFocus={preloadDetails}
      onKeyDown={onSelect ? handleKeyDown : undefined}
      onPointerEnter={preloadDetails}
      onPointerDown={preloadDetails}
      role={onSelect ? "button" : undefined}
      tabIndex={onSelect ? 0 : undefined}
      aria-labelledby={onSelect ? projectTitleId : undefined}
      className={`project-card group isolate flex h-full w-full flex-col gap-4 border border-border p-4 ${
        onSelect ? "project-card-interactive cursor-pointer" : ""
      }`}
    >
      {projectLogo ? (
        <div className="project-media relative z-[1] flex h-[140px] w-full shrink-0 items-center justify-center overflow-hidden bg-surface">
          <div
            aria-hidden="true"
            className="project-media-image absolute inset-0 bg-[length:100%_100%] bg-no-repeat"
            style={{ backgroundImage: `url("${projectBackground}")` }}
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
    </div>
  );
}
