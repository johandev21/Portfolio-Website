interface ProjectPlaceholderCardProps {
  title?: string;
  subtitle?: string;
}

export default function ProjectPlaceholderCard({
  title = "Próximo proyecto",
  subtitle = "Espacio reservado para un nuevo proyecto.",
}: ProjectPlaceholderCardProps) {
  const titleId = "upcoming-project-title";

  return (
    <div
      aria-labelledby={titleId}
      className="project-card flex h-full w-full flex-col gap-4 border border-dashed border-border p-4 select-none"
    >
      <div
        className="flex h-[140px] w-full shrink-0 items-center justify-center border border-border bg-surface"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted">
          Próximamente
        </span>
      </div>

      <div className="flex w-full flex-col gap-1.5">
        <h3 id={titleId} className="w-full text-base leading-normal text-text">
          {title}
        </h3>
        <p className="w-full text-sm leading-normal text-text-soft">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
