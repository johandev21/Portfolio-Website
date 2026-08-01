import type { IconName } from "../types";

const sizes = {
  16: "h-4 w-4",
  20: "h-5 w-5",
  24: "h-6 w-6",
} as const;

interface IconProps {
  name: IconName;
  size: 16 | 20 | 24;
  className?: string;
}

export default function Icon({ name, size, className = "" }: IconProps) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center overflow-hidden border border-border bg-surface transition-motion ${sizes[size]} ${className}`}
    >
      <span className="px-0.5 text-[8px] uppercase leading-none tracking-wide text-text">
        {name.replace(/-/g, " ").toUpperCase()}
      </span>
    </span>
  );
}
