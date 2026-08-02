import { useId, type ReactNode } from "react";

interface TooltipProps {
  label: string;
  children: ReactNode;
}

export default function Tooltip({ label, children }: TooltipProps) {
  const tooltipId = useId();

  return (
    <span
      className="group/tooltip relative inline-flex focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
      tabIndex={0}
      aria-describedby={tooltipId}
    >
      {children}
      <span
        id={tooltipId}
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded border border-border bg-surface px-2 py-1 text-xs leading-none text-text opacity-0 shadow-lg transition-motion group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100 motion-reduce:transition-none after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-border after:content-['']"
      >
        {label}
      </span>
    </span>
  );
}
