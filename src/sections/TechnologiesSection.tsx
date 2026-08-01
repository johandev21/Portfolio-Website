import { portfolioData } from "../data/portfolio";
import SectionTitle from "../components/SectionTitle";
import TechRow from "../components/TechRow";

export default function TechnologiesSection() {
  return (
    <section className="mt-12 flex flex-col gap-4 md:mt-16 xl:mt-[95px]">
      <SectionTitle>Tecnologías</SectionTitle>
      <div className="flex w-full flex-col gap-4">
        {portfolioData.techCategories.map((category) => (
          <TechRow key={category.label} category={category} />
        ))}
      </div>
    </section>
  );
}
