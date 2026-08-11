import { useState } from "react";
import type { Project, MediaItem, ProjectSection } from "../types";
import Icon from "../components/Icon";
import Tooltip from "../components/Tooltip";
import PrototypeSwitcher, {
  type VariantKey,
  type PreviewOption,
  type DensityOption,
} from "../components/PrototypeSwitcher";

interface ProjectDetailsPrototypeProps {
  project: Project;
  onBack: () => void;
  initialVariant?: VariantKey;
}

export default function ProjectDetailsPrototype({
  project,
  onBack,
  initialVariant = "A",
}: ProjectDetailsPrototypeProps) {
  const [variant, setVariant] = useState<VariantKey>(initialVariant);
  const [previewMode, setPreviewMode] = useState<PreviewOption>("media");
  const [densityMode, setDensityMode] = useState<DensityOption>("comfortable");
  const [activeTab, setActiveTab] = useState<"overview" | "sections" | "media">("overview");

  const isCompact = densityMode === "compact";

  const renderMediaBox = (item?: MediaItem, heightClass = isCompact ? "h-48" : "h-64") => {
    const isVideo = item?.type === "video";
    const title = item?.title || "Vista Previa del Proyecto";
    const caption = item?.caption || "Muestra de la interfaz principal";

    if (previewMode === "text") {
      return (
        <div
          className={`flex w-full flex-col justify-center border border-border bg-surface text-xs text-muted ${heightClass} ${
            isCompact ? "p-4" : "p-6"
          }`}
        >
          <span className="font-mono text-xs font-semibold text-accent">
            {isVideo ? "[VISTA_TEXTO_VIDEO]" : "[VISTA_TEXTO_IMAGEN]"}
          </span>
          <p className="mt-2 text-sm text-text-soft font-medium">{title}</p>
          <p className="mt-1 text-xs text-muted">{caption}</p>
        </div>
      );
    }

    if (previewMode === "wireframe") {
      return (
        <div
          className={`flex w-full flex-col items-center justify-center border border-dashed border-border bg-bg text-xs font-mono text-muted ${heightClass} ${
            isCompact ? "p-3" : "p-4"
          }`}
        >
          <span>{isVideo ? "[ESQUEMA_REPRODUCTOR_VIDEO]" : "[ESQUEMA_CAPTUAS]"}</span>
          <span className="mt-1 text-text-soft">{title}</span>
        </div>
      );
    }

    return (
      <div
        className={`flex w-full flex-col justify-between border border-border bg-surface text-xs text-muted ${heightClass} ${
          isCompact ? "p-3" : "p-4"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-accent">
            {isVideo ? "[REPRODUCTOR_VIDEO]" : "[CAPTUAS_GALERIA]"}
          </span>
          <span className="text-xs text-muted">{isVideo ? "01:45" : "HD"}</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-1 my-auto">
          <span className="font-mono text-sm text-text">{title}</span>
          <span className="text-xs text-muted">{caption}</span>
        </div>

        {isVideo ? (
          <div className="flex flex-col gap-1.5 pt-2">
            <div className="h-1 w-full bg-border">
              <div className="h-1 w-1/3 bg-accent" />
            </div>
            <div className="flex items-center justify-between text-xs text-muted">
              <span>▶ REPRODUCIR</span>
              <span>00:35 / 01:45</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between text-xs text-muted pt-2">
            <span>ZOOM</span>
            <span>1920x1080</span>
          </div>
        )}
      </div>
    );
  };

  const renderTechIcons = (showLabels = true) => (
    <div className="flex flex-wrap items-center gap-2">
      {project.icons.map((tech) => (
        <div
          key={tech.name}
          className="flex items-center gap-2 border border-border bg-surface px-2.5 py-1 rounded-sm"
        >
          <Tooltip label={tech.name}>
            <Icon name={tech.icon} size={20} />
          </Tooltip>
          {showLabels && <span className="text-xs text-text">{tech.name}</span>}
        </div>
      ))}
    </div>
  );

  const renderSectionsList = (sections?: ProjectSection[]) => {
    if (!sections || sections.length === 0) return null;
    return (
      <div className={`flex flex-col ${isCompact ? "gap-4" : "gap-6"}`}>
        {sections.map((sec) => (
          <div
            key={sec.title}
            className={`flex flex-col gap-2 border border-border bg-surface ${
              isCompact ? "p-3" : "p-4"
            }`}
          >
            <h3 className="font-serif text-lg font-normal text-text">{sec.title}</h3>
            <p className="text-sm leading-relaxed text-text-soft">{sec.content}</p>
            {sec.bullets && sec.bullets.length > 0 && (
              <ul className="flex flex-col gap-1 pl-4 text-xs text-text-soft">
                {sec.bullets.map((b) => (
                  <li key={b} className="list-disc">
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="w-full pb-32">
      <div className="mx-auto w-full max-w-4xl px-4 md:px-6">
        {/* VARIANT A: Vertical Editorial */}
        {variant === "A" && (
          <article
            className={`flex w-full flex-col ${
              isCompact ? "gap-4" : "gap-6"
            }`}
          >
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={onBack}
                className="text-xs text-muted transition-motion hover:text-text cursor-pointer"
              >
                &lt; Volver a proyectos
              </button>
              {project.year && (
                <span className="text-xs text-muted">{project.year}</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="font-serif text-3xl font-normal text-text">
                {project.title}
              </h1>
              <p className="text-base text-text-soft">{project.subtitle}</p>
              {project.role && (
                <p className="text-xs text-accent font-medium">{project.role}</p>
              )}
            </div>

            {renderTechIcons(true)}

            {renderMediaBox(project.media?.[0], isCompact ? "h-56" : "h-72")}

            {project.description && (
              <p className="text-sm leading-relaxed text-text-soft">
                {project.description}
              </p>
            )}

            {renderSectionsList(project.sections)}

            {project.media && project.media.length > 1 && (
              <div className="flex flex-col gap-3 pt-2">
                <h3 className="text-xs font-semibold text-muted">MULTIMEDIA ADICIONAL</h3>
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 ${
                    isCompact ? "gap-3" : "gap-4"
                  }`}
                >
                  {project.media.slice(1).map((m) => (
                    <div key={m.title} className="w-full">
                      {renderMediaBox(m, "h-44")}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-border bg-surface px-3 py-1.5 text-xs text-text transition-motion hover:bg-border"
                >
                  Ver sitio
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-border bg-surface px-3 py-1.5 text-xs text-text transition-motion hover:bg-border"
                >
                  Ver código
                </a>
              )}
            </div>
          </article>
        )}

        {/* VARIANT B: Asymmetric Split */}
        {variant === "B" && (
          <article className="flex w-full flex-col gap-6">
            <button
              type="button"
              onClick={onBack}
              className="w-fit text-xs text-muted transition-motion hover:text-text cursor-pointer"
            >
              &lt; Volver a proyectos
            </button>

            <div
              className={`grid grid-cols-1 md:grid-cols-12 ${
                isCompact ? "gap-4" : "gap-8"
              }`}
            >
              <div className="flex flex-col gap-6 md:col-span-5">
                <div className="flex flex-col gap-1">
                  <h1 className="font-serif text-3xl font-normal text-text">
                    {project.title}
                  </h1>
                  <p className="text-sm text-text-soft">{project.subtitle}</p>
                </div>

                <div className="flex flex-col gap-1 text-xs text-muted">
                  {project.role && <span>Rol: {project.role}</span>}
                  {project.year && <span>Año: {project.year}</span>}
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-muted">TECNOLOGÍAS</span>
                  {renderTechIcons(true)}
                </div>

                {project.media && project.media.length > 1 && (
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-muted">MULTIMEDIA</span>
                    <div className="flex flex-col gap-2">
                      {project.media.slice(1).map((m) => (
                        <div key={m.title} className="w-full">
                          {renderMediaBox(m, "h-36")}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2 pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-border bg-surface px-3 py-1.5 text-xs text-text transition-motion hover:bg-border"
                    >
                      Ver sitio
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-border bg-surface px-3 py-1.5 text-xs text-text transition-motion hover:bg-border"
                    >
                      Ver código
                    </a>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-6 md:col-span-7">
                {renderMediaBox(project.media?.[0], isCompact ? "h-64" : "h-80")}
                {project.description && (
                  <p className="text-sm leading-relaxed text-text-soft">
                    {project.description}
                  </p>
                )}
                {renderSectionsList(project.sections)}
              </div>
            </div>
          </article>
        )}

        {/* VARIANT C: Framed Tabbed Summary Panel */}
        {variant === "C" && (
          <article
            className={`flex w-full flex-col border border-border bg-surface ${
              isCompact ? "gap-4 p-4" : "gap-6 p-6"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <h1 className="font-serif text-2xl font-normal text-text">
                  {project.title}
                </h1>
                <p className="text-xs text-text-soft">{project.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={onBack}
                className="text-xs text-muted transition-motion hover:text-text cursor-pointer"
              >
                &lt; Volver
              </button>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-3">
              {renderTechIcons(false)}
              <div className="flex items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-accent hover:underline"
                  >
                    Sitio
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-accent hover:underline"
                  >
                    Código
                  </a>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 border-t border-border pt-4">
              <button
                type="button"
                onClick={() => setActiveTab("overview")}
                className={`px-3 py-1 text-xs transition-motion cursor-pointer ${
                  activeTab === "overview"
                    ? "bg-accent text-bg font-medium"
                    : "text-muted hover:text-text"
                }`}
              >
                Visión General
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("sections")}
                className={`px-3 py-1 text-xs transition-motion cursor-pointer ${
                  activeTab === "sections"
                    ? "bg-accent text-bg font-medium"
                    : "text-muted hover:text-text"
                }`}
              >
                Detalles y Secciones
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("media")}
                className={`px-3 py-1 text-xs transition-motion cursor-pointer ${
                  activeTab === "media"
                    ? "bg-accent text-bg font-medium"
                    : "text-muted hover:text-text"
                }`}
              >
                Multimedia ({project.media?.length || 0})
              </button>
            </div>

            {activeTab === "overview" && (
              <div className="flex flex-col gap-4">
                {renderMediaBox(project.media?.[0], isCompact ? "h-48" : "h-64")}
                {project.description && (
                  <p className="text-xs leading-relaxed text-text-soft">
                    {project.description}
                  </p>
                )}
              </div>
            )}

            {activeTab === "sections" && (
              <div className="flex flex-col gap-4">
                {renderSectionsList(project.sections)}
              </div>
            )}

            {activeTab === "media" && (
              <div className="flex flex-col gap-4">
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 ${
                    isCompact ? "gap-3" : "gap-4"
                  }`}
                >
                  {project.media?.map((m) => (
                    <div key={m.title} className="w-full">
                      {renderMediaBox(m, "h-44")}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
        )}
      </div>

      <PrototypeSwitcher
        currentVariant={variant}
        onVariantChange={setVariant}
        previewMode={previewMode}
        onPreviewChange={setPreviewMode}
        densityMode={densityMode}
        onDensityChange={setDensityMode}
      />
    </section>
  );
}
