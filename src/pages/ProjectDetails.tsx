import ReactMarkdown from "react-markdown";
import type { MediaItem, Project } from "../types";
import Icon from "../components/Icon";
import ProjectMedia from "../components/ProjectMedia";
import Reveal from "../components/Reveal";
import Tooltip from "../components/Tooltip";

interface ProjectDetailsProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetails({
  project,
  onBack,
}: ProjectDetailsProps) {
  const [heroMedia, ...additionalMedia] = project.media ?? [];
  const additionalVideos = additionalMedia.filter(
    (item) => item.type === "video" && item.src,
  );

  return (
    <article className="mx-auto w-full max-w-4xl pb-24">
      <Reveal variant="heading">
        <ProjectHeader project={project} onBack={onBack} />
      </Reveal>

      {heroMedia?.type === "video" && heroMedia.src && (
        <Reveal className="mt-8 md:mt-10" delay={45} variant="image">
          <ProjectMedia item={heroMedia} />
        </Reveal>
      )}

      <Reveal className="mt-10 md:mt-14" delay={90}>
        <ProjectStory project={project} />
      </Reveal>

      {additionalVideos.length > 0 && (
        <Reveal className="mt-14 md:mt-20">
          <AdditionalMedia media={additionalVideos} />
        </Reveal>
      )}

    </article>
  );
}

interface ProjectHeaderProps {
  project: Project;
  onBack: () => void;
}

function ProjectHeader({ project, onBack }: ProjectHeaderProps) {
  return (
    <header>
      <button
        type="button"
        onClick={onBack}
        className="focus-link group inline-flex cursor-pointer items-center gap-2 rounded-none text-sm leading-none text-muted transition-motion motion-reduce:transition-none"
      >
        <Icon
          name="arrow-left"
          size={16}
          className="transition-motion hoverable:group-hover:-translate-x-0.5 motion-reduce:transition-none"
        />
        <span className="transition-motion hoverable:group-hover:text-text">
          Volver a proyectos
        </span>
      </button>

      <div className="mt-6 md:mt-7">
        <div className="max-w-2xl">
          <h1 className="font-serif text-3xl leading-tight font-normal text-text md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-2 text-sm leading-normal text-text-soft md:text-base">
            {project.subtitle}
          </p>
          <div className="mt-4">
            <ProjectActions project={project} />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {project.icons.map((technology) => (
            <Tooltip key={technology.icon} label={technology.name}>
              <Icon name={technology.icon} size={20} />
            </Tooltip>
          ))}
        </div>
      </div>
    </header>
  );
}

function ProjectActions({ project }: { project: Project }) {
  if (!project.liveUrl && !project.githubUrl) return null;

  return (
    <div className="flex shrink-0 items-center gap-5">
      {project.liveUrl && <ExternalProjectLink href={project.liveUrl}>Ver sitio</ExternalProjectLink>}
      {project.githubUrl && (
        <ExternalProjectLink href={project.githubUrl}>Ver código</ExternalProjectLink>
      )}
    </div>
  );
}

interface ExternalProjectLinkProps {
  children: string;
  href: string;
}

function ExternalProjectLink({ children, href }: ExternalProjectLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="focus-link group inline-flex items-center gap-1.5 rounded-none text-sm leading-none font-medium text-accent underline decoration-transparent underline-offset-4 transition-motion hoverable:hover:decoration-current motion-reduce:transition-none"
    >
      {children}
    </a>
  );
}

function ProjectStory({ project }: { project: Project }) {
  const details = project.detailsMarkdown || project.description || "";

  return (
    <div className="mr-auto w-full max-w-3xl">
      {details && (
        <section aria-label="Detalles del proyecto">
          <div className="typeset project-detail-prose text-sm md:text-base">
            <ReactMarkdown>{details}</ReactMarkdown>
          </div>
        </section>
      )}
    </div>
  );
}

function AdditionalMedia({ media }: { media: MediaItem[] }) {
  return (
    <section aria-labelledby="project-media-title">
      <h2
        id="project-media-title"
        className="font-serif text-2xl leading-normal font-normal text-text"
      >
        Multimedia
      </h2>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        {media.map((item) => (
          <ProjectMedia key={`${item.title}-${item.src}`} item={item} />
        ))}
      </div>
    </section>
  );
}
