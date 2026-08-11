import { useEffect, useState } from "react";
import IntroSection from "./sections/IntroSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import TechnologiesSection from "./sections/TechnologiesSection";
import ContactSection from "./sections/ContactSection";
import Reveal from "./components/Reveal";
import BackToTop from "./components/BackToTop";
import Header from "./components/Header";
import ToastProvider from "./components/ToastProvider";
import ProjectDetailsPrototype from "./pages/ProjectDetailsPrototype";
import { portfolioData } from "./data/portfolio";
import type { Project } from "./types";
import type { VariantKey } from "./components/PrototypeSwitcher";

function getSlugFromUrl(): string | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  const project = params.get("project");
  if (project) return project;
  if (params.get("view") === "project") return "insight";
  return null;
}

function getVariantFromUrl(): VariantKey {
  if (typeof window === "undefined") return "A";
  const params = new URLSearchParams(window.location.search);
  const variant = params.get("variant");
  if (variant === "B" || variant === "C") return variant;
  return "A";
}

function Portfolio() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(() => getSlugFromUrl());

  useEffect(() => {
    const handlePopState = () => {
      setSelectedSlug(getSlugFromUrl());
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleSelectProject = (project: Project) => {
    const slug = project.slug || project.title.toLowerCase();
    const url = new URL(window.location.href);
    url.searchParams.set("project", slug);
    if (!url.searchParams.has("variant")) {
      url.searchParams.set("variant", "A");
    }
    window.history.pushState({}, "", url.toString());
    setSelectedSlug(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToPortfolio = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete("project");
    url.searchParams.delete("view");
    url.searchParams.delete("variant");
    window.history.pushState({}, "", url.toString());
    setSelectedSlug(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const activeProject =
    portfolioData.projects.find((p) => p.slug === selectedSlug) ||
    portfolioData.projects[0];

  return (
    <main className="min-h-screen w-full bg-bg font-sans text-text">
      <Header />
      {selectedSlug ? (
        <div className="mx-auto flex w-full max-w-full flex-col items-stretch px-6 pt-28 md:px-8 md:pt-32">
          <ProjectDetailsPrototype
            project={activeProject}
            onBack={handleBackToPortfolio}
            initialVariant={getVariantFromUrl()}
          />
        </div>
      ) : (
        <>
          <div className="mx-auto flex w-full max-w-full flex-col items-stretch px-6 pt-28 md:px-8 md:pt-32 lg:max-w-4xl lg:px-0">
            <Reveal>
              <IntroSection />
            </Reveal>
            <Reveal>
              <ExperienceSection />
            </Reveal>
            <Reveal>
              <ProjectsSection onSelectProject={handleSelectProject} />
            </Reveal>
            <Reveal>
              <TechnologiesSection />
            </Reveal>
          </div>
          <ContactSection />
        </>
      )}
      <BackToTop />
    </main>
  );
}

function App() {
  return (
    <ToastProvider>
      <Portfolio />
    </ToastProvider>
  );
}

export default App;
