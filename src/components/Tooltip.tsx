import { useId, type ReactNode } from "react";

interface TooltipProps {
  label: string;
  description?: string;
  children: ReactNode;
}

export default function Tooltip({ label, description, children }: TooltipProps) {
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
        className={`pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 border-border bg-surface opacity-0 shadow-lg transition-motion group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100 motion-reduce:transition-none after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-border after:content-[''] ${description ? "w-56 max-w-[calc(100vw-2rem)] rounded-lg border p-3 text-left" : "whitespace-nowrap rounded border px-2 py-1 text-xs leading-none"}`}
      >
        <span className="block text-xs font-semibold leading-tight text-text">{label}</span>
        {description ? (
          <span className="mt-1 block text-xs leading-relaxed text-muted">{description}</span>
        ) : null}
      </span>
    </span>
  );
}
