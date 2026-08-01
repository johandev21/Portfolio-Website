import { portfolioData } from "../data/portfolio";
import SectionTitle from "../components/SectionTitle";
import ContactCard from "../components/ContactCard";

export default function ContactSection() {
  const { contact } = portfolioData;
  return (
    <section className="mt-12 bg-gradient-to-b from-bg via-bg/90 to-bg pb-16 md:mt-16 xl:mt-[111px] xl:pb-[122px]">
      <div className="flex w-full flex-col gap-4 pt-[76px]">
        <SectionTitle>Contacto</SectionTitle>
        <div className="flex w-full flex-col items-center gap-4">
          <ContactCard contact={contact} />
          <p className="text-center text-sm leading-normal text-muted">
            {contact.helperText}
          </p>
        </div>
      </div>
    </section>
  );
}
