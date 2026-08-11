import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import type { ReactElement } from "react";

interface TooltipProps {
  label: string;
  description?: string;
  children: ReactElement;
}

export default function Tooltip({ label, description, children }: TooltipProps) {
  return (
    <BaseTooltip.Provider delay={0} closeDelay={0}>
      <BaseTooltip.Root>
        <BaseTooltip.Trigger
          render={
            <span
              className="group/tooltip relative inline-flex focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              tabIndex={0}
            />
          }
        >
          {children}
        </BaseTooltip.Trigger>
        <BaseTooltip.Portal>
          <BaseTooltip.Positioner sideOffset={8} collisionPadding={16}>
            <BaseTooltip.Popup
              className={`border-border/50 bg-surface shadow-lg transition-motion data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 ${description ? "w-56 max-w-[calc(100vw-2rem)] border p-3 text-left" : "whitespace-nowrap border px-2 py-1 text-xs leading-none"}`}
            >
              <span className="block text-xs font-medium leading-tight text-text">{label}</span>
              {description ? (
                <span className="mt-1 block text-xs leading-relaxed text-muted">{description}</span>
              ) : null}
            </BaseTooltip.Popup>
          </BaseTooltip.Positioner>
        </BaseTooltip.Portal>
      </BaseTooltip.Root>
    </BaseTooltip.Provider>
  );
}
