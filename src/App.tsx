import { MotionConfig } from "motion/react";
import IntroSection from "./sections/IntroSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import TechnologiesSection from "./sections/TechnologiesSection";
import ContactSection from "./sections/ContactSection";
import Reveal from "./components/Reveal";
import BackToTop from "./components/BackToTop";
import Header from "./components/Header";

function Portfolio() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen w-full bg-bg font-sans text-text">
        <Header />
        <div className="mx-auto flex w-full max-w-full flex-col items-stretch px-6 pt-28 md:px-8 md:pt-[132px] lg:max-w-[812px] lg:px-0">
          <Reveal>
            <IntroSection />
          </Reveal>
          <Reveal>
            <ExperienceSection />
          </Reveal>
          <Reveal>
            <ProjectsSection />
          </Reveal>
          <Reveal>
            <TechnologiesSection />
          </Reveal>
        </div>
        <ContactSection />
        <BackToTop />
      </main>
    </MotionConfig>
  );
}

function App() {
  return <Portfolio />;
}

export default App;
