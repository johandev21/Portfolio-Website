import type { Project } from "../types";
import Icon from "./Icon";
import Placeholder from "./Placeholder";

const iconStagger = [
  "",
  "hoverable:group-hover:[transition-delay:35ms]",
  "hoverable:group-hover:[transition-delay:70ms]",
  "hoverable:group-hover:[transition-delay:105ms]",
  "hoverable:group-hover:[transition-delay:140ms]",
  "hoverable:group-hover:[transition-delay:175ms]",
  "hoverable:group-hover:[transition-delay:210ms]",
];

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex w-full flex-col gap-4 border border-border p-4 transition-motion-slow hover:-translate-y-[3px] hover:bg-surface/60 active:translate-y-[1px] motion-reduce:hover:translate-none motion-reduce:active:translate-none motion-reduce:transition-none">
      <Placeholder
        label="PROJECT IMAGE"
        className="h-[140px] w-full"
        labelClassName="transition-motion hoverable:group-hover:tracking-[0.28em]"
      />
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full flex-col gap-1.5">
          <h3 className="w-full text-base leading-normal text-text">{project.title}</h3>
          <p className="w-full text-sm leading-normal text-text-soft transition-motion hoverable:group-hover:text-text">
            {project.subtitle}
          </p>
        </div>
        <div className="flex w-fit flex-row items-center gap-2">
          {project.icons.map((icon, index) => (
            <Icon
              key={icon}
              name={icon}
              size={20}
              className={`hoverable:group-hover:scale-110 ${iconStagger[index] ?? ""}`}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
