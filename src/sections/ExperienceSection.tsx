import { portfolioData } from "../data/portfolio";
import SectionTitle from "../components/SectionTitle";
import ExperienceCard from "../components/ExperienceCard";

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="mt-20 scroll-mt-24 flex flex-col gap-4 md:mt-16 xl:mt-[95px]">
      <SectionTitle>Experiencia</SectionTitle>
      {portfolioData.experience.map((experience) => (
        <ExperienceCard key={experience.title} experience={experience} />
      ))}
    </section>
  );
}
