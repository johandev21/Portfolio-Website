import { useNavigate } from "@tanstack/react-router";
import IntroSection from "../sections/IntroSection";
import ExperienceSection from "../sections/ExperienceSection";
import ProjectsSection from "../sections/ProjectsSection";
import TechnologiesSection from "../sections/TechnologiesSection";
import ContactSection from "../sections/ContactSection";
import Reveal from "../components/Reveal";

export default function PortfolioHome() {
  const navigate = useNavigate();

  return (
    <>
      <div
        id="inicio"
        className="mx-auto flex w-full max-w-full flex-col items-stretch px-6 pt-28 md:px-8 md:pt-32 lg:max-w-4xl lg:px-0"
      >
        <Reveal>
          <IntroSection />
        </Reveal>
        <Reveal>
          <ExperienceSection />
        </Reveal>
        <Reveal>
          <ProjectsSection
            onSelectProject={(project) => {
              const slug = project.slug || project.title.toLowerCase();
              navigate({ to: "/project/$slug", params: { slug } });
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </Reveal>
        <Reveal>
          <TechnologiesSection />
        </Reveal>
      </div>
      <ContactSection />
    </>
  );
}
