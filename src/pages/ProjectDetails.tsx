import { useState } from "react";
import ReactMarkdown from "react-markdown";
import type { Project, MediaItem } from "../types";
import Icon from "../components/Icon";
import Tooltip from "../components/Tooltip";

interface ProjectDetailsProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetails({ project, onBack }: ProjectDetailsProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "sections" | "media">("overview");

  const renderMediaBox = (item?: MediaItem, sizeClass = "aspect-video w-full") => {
    const isVideo = item?.type === "video";
    const title = item?.title || "Vista Previa del Proyecto";
    const caption = item?.caption || "Muestra de la interfaz principal";

    return (
      <div
        className={`flex w-full flex-col justify-between border border-border bg-bg p-3 md:p-4 text-xs text-muted ${sizeClass}`}
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-accent">
            {isVideo ? "[REPRODUCTOR_VIDEO]" : "[CAPTUAS_GALERIA]"}
          </span>
          <span className="text-xs text-muted">{isVideo ? "01:45" : "HD"}</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-1 my-auto text-center px-2">
          <span className="font-mono text-sm md:text-base text-text">{title}</span>
          <span className="text-xs md:text-sm text-muted">{caption}</span>
        </div>

        {isVideo ? (
          <div className="flex flex-col gap-1.5 pt-2">
            <div className="h-1 w-full bg-border">
              <div className="h-1 w-1/3 bg-accent" />
            </div>
            <div className="flex items-center justify-between text-xs md:text-sm text-muted">
              <span>▶ REPRODUCIR</span>
              <span>00:35 / 01:45</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between text-xs md:text-sm text-muted pt-2">
            <span>ZOOM</span>
            <span>1920x1080</span>
          </div>
        )}
      </div>
    );
  };

  const renderTechIcons = () => (
    <div className="flex flex-wrap items-center gap-2">
      {project.icons.map((tech) => (
        <Tooltip key={tech.icon} label={tech.name}>
          <Icon name={tech.icon} size={20} />
        </Tooltip>
      ))}
    </div>
  );

  return (
    <section className="w-full pb-20">
      <div className="mx-auto w-full max-w-4xl">
        <article className="group flex w-full flex-col gap-4 border border-border p-4 transition-motion-slow hover:bg-surface/60 md:p-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="font-serif text-2xl md:text-3xl font-normal text-text">
                {project.title}
              </h1>
              <p className="text-sm md:text-base text-text-soft">{project.subtitle}</p>
            </div>
            <button
              type="button"
              onClick={onBack}
              className="text-xs md:text-sm text-muted transition-motion hover:text-text cursor-pointer"
            >
              &lt; Volver a proyectos
            </button>
          </div>

          <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between md:flex-wrap">
            {renderTechIcons()}
            <div className="flex items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs md:text-sm text-accent font-medium transition-motion underline-offset-4 hover:underline"
                >
                  Ver sitio
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs md:text-sm text-accent font-medium transition-motion underline-offset-4 hover:underline"
                >
                  Ver código
                </a>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => setActiveTab("overview")}
              className={`px-3 py-1 text-sm transition-motion cursor-pointer ${
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
              className={`px-3 py-1 text-sm transition-motion cursor-pointer ${
                activeTab === "sections"
                  ? "bg-accent text-bg font-medium"
                  : "text-muted hover:text-text"
              }`}
            >
              Detalles
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("media")}
              className={`px-3 py-1 text-sm transition-motion cursor-pointer ${
                activeTab === "media"
                  ? "bg-accent text-bg font-medium"
                  : "text-muted hover:text-text"
              }`}
            >
              Multimedia
            </button>
          </div>

          <div className="h-112 w-full overflow-y-auto pr-1">
            {activeTab === "overview" && (
              <div className="flex flex-col gap-3">
                {renderMediaBox(project.media?.[0], "aspect-video w-full")}
                {project.description && (
                  <p className="text-sm md:text-base leading-relaxed text-text-soft">
                    {project.description}
                  </p>
                )}
              </div>
            )}

            {activeTab === "sections" && (
              <div className="border border-border bg-bg p-4 md:p-6">
                <div className="typeset text-sm md:text-base">
                  <ReactMarkdown>
                    {project.detailsMarkdown || project.description || ""}
                  </ReactMarkdown>
                </div>
              </div>
            )}

            {activeTab === "media" && (
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.media?.map((m) => (
                    <div key={m.title} className="w-full">
                      {renderMediaBox(m, "aspect-video w-full")}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
