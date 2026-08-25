import { portfolioData } from "../data/portfolio";
import SectionTitle from "../components/SectionTitle";
import ExperienceCard from "../components/ExperienceCard";
import Reveal from "../components/Reveal";

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="mt-20 scroll-mt-24 flex flex-col gap-4 md:mt-16 xl:mt-[95px]">
      <Reveal variant="heading">
        <SectionTitle>Experiencia</SectionTitle>
      </Reveal>
      {portfolioData.experience.map((experience, index) => (
        <Reveal key={experience.title} delay={55 + index * 55}>
          <ExperienceCard experience={experience} />
        </Reveal>
      ))}
    </section>
  );
}
