import IntroSection from "./sections/IntroSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import TechnologiesSection from "./sections/TechnologiesSection";
import ContactSection from "./sections/ContactSection";

function Portfolio() {
  return (
    <main className="min-h-screen w-full bg-bg font-sans text-text">
      <div className="mx-auto flex w-full max-w-full flex-col items-stretch px-6 pt-12 md:px-8 md:pt-[132px] lg:max-w-[812px] lg:px-0">
        <IntroSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechnologiesSection />
        <ContactSection />
      </div>
    </main>
  );
}

function App() {
  return <Portfolio />;
}

export default App;
