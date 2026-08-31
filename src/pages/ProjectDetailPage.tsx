import { useNavigate, useParams } from "@tanstack/react-router";
import Reveal from "../components/Reveal";
import { portfolioData } from "../data/portfolio";
import ProjectDetails from "./ProjectDetails";

export default function ProjectDetailPage() {
  const { slug } = useParams({ from: "/project/$slug" });
  const navigate = useNavigate();
  const projectIndex = portfolioData.projects.findIndex((project) => project.slug === slug);
  const project = portfolioData.projects[projectIndex];

  const returnToProjects = () => {
    navigate({ to: "/", hash: "proyectos" });
  };

  return (
    <div className="mx-auto flex w-full max-w-full flex-col items-stretch px-3 pt-10 md:px-8 md:pt-14 lg:px-0">
      {project ? (
        <ProjectDetails
          project={project}
          onBack={returnToProjects}
        />
      ) : (
        <ProjectNotFound onBack={returnToProjects} />
      )}
    </div>
  );
}

function ProjectNotFound({ onBack }: { onBack: () => void }) {
  return (
    <Reveal>
      <section className="mx-auto w-full max-w-2xl pb-24">
        <p className="font-mono text-xs tracking-[0.08em] text-muted uppercase">404</p>
        <h1 className="mt-3 font-serif text-4xl text-text md:text-5xl">
          Proyecto no encontrado
        </h1>
        <p className="mt-4 max-w-xl leading-7 text-text-soft">
          El proyecto que buscas no existe o cambió de dirección.
        </p>
        <button
          type="button"
          onClick={onBack}
          className="focus-link mt-8 cursor-pointer rounded-none text-sm font-medium text-accent underline underline-offset-4 transition-motion motion-reduce:transition-none"
        >
          Volver a proyectos
        </button>
      </section>
    </Reveal>
  );
}
