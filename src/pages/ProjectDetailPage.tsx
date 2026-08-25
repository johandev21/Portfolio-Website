import { useNavigate, useParams } from "@tanstack/react-router";
import ProjectDetails from "./ProjectDetails";
import { portfolioData } from "../data/portfolio";
import Reveal from "../components/Reveal";

export default function ProjectDetailPage() {
  const { slug } = useParams({ from: "/project/$slug" });
  const navigate = useNavigate();

  const activeProject =
    portfolioData.projects.find((p) => p.slug === slug) ||
    portfolioData.projects[0];

  return (
    <div className="mx-auto flex w-full max-w-full flex-col items-stretch px-6 pt-28 md:px-8 md:pt-32">
      <Reveal>
        <ProjectDetails
          project={activeProject}
          onBack={() => {
            navigate({ to: "/" });
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </Reveal>
    </div>
  );
}
