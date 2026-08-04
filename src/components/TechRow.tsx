import type { TechCategory } from "../types";
import { technologyDescriptions } from "../data/technologies";
import Icon from "./Icon";
import Tooltip from "./Tooltip";

interface TechRowProps {
  category: TechCategory;
}

export default function TechRow({ category }: TechRowProps) {
  return (
    <div className="group flex w-full flex-col items-start gap-4 border border-border p-3 transition-motion hover:bg-surface/60 motion-reduce:transition-none sm:flex-row sm:items-center sm:justify-between">
      <span className="whitespace-nowrap text-base leading-normal text-text">
        {category.label}
      </span>
      <div className="flex w-full flex-wrap flex-row items-center gap-3 sm:w-fit sm:shrink-0">
        {category.technologies.map((tech) => (
          <Tooltip
            key={tech.name}
            label={tech.name}
            description={technologyDescriptions[tech.icon]}
          >
            <Icon
              name={tech.icon}
              size={24}
            />
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
