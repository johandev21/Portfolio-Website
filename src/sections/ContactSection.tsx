import { portfolioData } from "../data/portfolio";
import SectionTitle from "../components/SectionTitle";
import ContactCard from "../components/ContactCard";
import Reveal from "../components/Reveal";
import crowsImage from "../assets/crows.jpg";

export default function ContactSection() {
  const { contact } = portfolioData;
  return (
    <section className="relative mt-12 overflow-hidden pb-16 md:mt-16 xl:mt-[111px] xl:pb-[122px]">
      <img
        src={crowsImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg via-bg/90 to-bg"
      />
      <div className="relative mx-auto max-w-[812px] px-6 md:px-8 lg:px-0">
        <Reveal>
          <div className="flex w-full flex-col gap-4 pt-[76px]">
            <SectionTitle>Contacto</SectionTitle>
            <div className="flex w-full flex-col items-center gap-4">
              <ContactCard contact={contact} />
              <p className="text-center text-sm leading-normal text-muted">
                {contact.helperText}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
