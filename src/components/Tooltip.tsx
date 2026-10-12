import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import {
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
  type ReactElement,
  useRef,
  useState,
} from "react";

interface TooltipProps {
  label: string;
  description?: string;
  children: ReactElement;
}

export default function Tooltip({ label, description, children }: TooltipProps) {
  const [open, setOpen] = useState(false);
  const pointerTypeRef = useRef<string | null>(null);

  const isSelfOrChildLink =
    Boolean(children.type === "a" || (children.props as { href?: string })?.href);

  const handlePointerDown = (event: PointerEvent<HTMLSpanElement>) => {
    pointerTypeRef.current = event.pointerType;
  };

  const handleClick = (event: MouseEvent<HTMLSpanElement>) => {
    const hasInteractiveChild =
      isSelfOrChildLink ||
      Boolean((event.currentTarget as HTMLElement).querySelector("a[href], button"));

    if (hasInteractiveChild) {
      return;
    }

    // Prevent navigation when the tooltip is nested inside a clickable container (e.g. ProjectCard <a>)
    event.preventDefault();
    event.stopPropagation();

    // On touch devices, toggle open/close. For mouse/keyboard, ensure it opens.
    if (pointerTypeRef.current === "touch") {
      setOpen((prev) => !prev);
    } else if (!open) {
      setOpen(true);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (isSelfOrChildLink) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpen((prev) => !prev);
    }
  };

  return (
    <BaseTooltip.Provider delay={0} closeDelay={0}>
      <BaseTooltip.Root open={open} onOpenChange={setOpen}>
        <BaseTooltip.Trigger
          closeOnClick={false}
          render={
            <span
              className="focus-tooltip group/tooltip relative inline-flex touch-manipulation select-none"
              role={isSelfOrChildLink ? undefined : "button"}
              tabIndex={isSelfOrChildLink ? undefined : 0}
              onPointerDown={handlePointerDown}
              onClick={handleClick}
              onKeyDown={handleKeyDown}
            />
          }
        >
          {children}
        </BaseTooltip.Trigger>
        <BaseTooltip.Portal>
          <BaseTooltip.Positioner sideOffset={8} collisionPadding={16}>
            <BaseTooltip.Popup
              className={`z-50 border-border/50 bg-surface shadow-lg transition-motion data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 ${description ? "w-56 max-w-[calc(100vw-2rem)] border p-3 text-left" : "whitespace-nowrap border px-2 py-1 text-xs leading-none"}`}
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
