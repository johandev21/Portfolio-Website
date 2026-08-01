interface PlaceholderProps {
  label: string;
  aspect?: "square" | "16/9";
  className?: string;
  labelClassName?: string;
}

export default function Placeholder({
  label,
  aspect = "16/9",
  className = "",
  labelClassName = "",
}: PlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center border border-border bg-surface ${
        aspect === "square" ? "aspect-square" : "aspect-video"
      } ${className}`}
    >
      <span
        className={`text-[10px] uppercase tracking-[0.2em] text-muted ${labelClassName}`}
      >
        {label}
      </span>
    </div>
  );
}
