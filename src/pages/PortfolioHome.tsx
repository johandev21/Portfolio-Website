import { useNavigate } from "@tanstack/react-router";
import IntroSection from "../sections/IntroSection";
import ExperienceSection from "../sections/ExperienceSection";
import ProjectsSection from "../sections/ProjectsSection";
import TechnologiesSection from "../sections/TechnologiesSection";
import ContactSection from "../sections/ContactSection";

export default function PortfolioHome() {
  const navigate = useNavigate();

  return (
    <>
      <div
        id="inicio"
        className="mx-auto flex w-full max-w-full flex-col items-stretch px-3 pt-11 md:px-8 md:pt-15 lg:max-w-4xl lg:px-0"
      >
        <IntroSection />
        <ExperienceSection />
        <ProjectsSection
          onSelectProject={(project) => {
            const slug = project.slug || project.title.toLowerCase();
            navigate({ to: "/project/$slug", params: { slug } });
            // window.scrollTo({ top: 0, behavior: "smooth" });
            window.scrollTo({ top: 0 });
          }}
        />
        <TechnologiesSection />
      </div>
      <ContactSection />
    </>
  );
}
