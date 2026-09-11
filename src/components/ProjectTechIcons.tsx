import type { Technology } from "../types";
import Icon from "./Icon";
import Tooltip from "./Tooltip";

/**
 * The technology icon strip is hydrated separately so the rest of the project
 * detail page stays server-rendered with zero JavaScript.
 */
export default function ProjectTechIcons({ icons }: { icons: Technology[] }) {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-2">
      {icons.map((technology) => (
        <Tooltip key={technology.icon} label={technology.name}>
          <Icon name={technology.icon} size={20} />
        </Tooltip>
      ))}
    </div>
  );
}
