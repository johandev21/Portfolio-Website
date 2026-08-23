import type { Project } from "../types";
import Icon from "./Icon";
import Placeholder from "./Placeholder";
import Tooltip from "./Tooltip";
import { preloadProjectDetailPage } from "../pages/projectDetailRouteComponent";

interface ProjectCardProps {
  project: Project;
  onSelect?: () => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const preloadDetails = () => {
    if (!onSelect) return;
    void preloadProjectDetailPage().catch(() => undefined);
  };

  return (
    <article
      onClick={onSelect}
      onPointerEnter={preloadDetails}
      onPointerDown={preloadDetails}
      className={`group flex w-full flex-col gap-4 border border-border p-4 transition-motion-slow hover:-translate-y-[3px] hover:bg-surface/60 active:translate-y-[1px] motion-reduce:hover:translate-none motion-reduce:active:translate-none motion-reduce:transition-none ${
        onSelect ? "cursor-pointer" : ""
      }`}
    >
      <Placeholder
        label="PROJECT IMAGE"
        className="h-[140px] w-full"
      />
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <h3 className="w-full text-base leading-normal text-text">{project.title}</h3>
          </div>
          <p className="w-full text-sm leading-normal text-text-soft transition-motion hoverable:group-hover:text-text">
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
    </article>
  );
}
