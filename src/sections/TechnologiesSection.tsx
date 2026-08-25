import { portfolioData } from "../data/portfolio";
import SectionTitle from "../components/SectionTitle";
import TechRow from "../components/TechRow";
import Reveal from "../components/Reveal";

export default function TechnologiesSection() {
  return (
    <section id="tecnologias" className="mt-20 scroll-mt-24 flex flex-col gap-4 md:mt-16 xl:mt-[95px]">
      <Reveal variant="heading">
        <SectionTitle>Tecnologías</SectionTitle>
      </Reveal>
      <div className="flex w-full flex-col gap-4">
        {portfolioData.techCategories.map((category, index) => (
          <Reveal key={category.label} delay={(index % 3) * 45}>
            <TechRow category={category} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
