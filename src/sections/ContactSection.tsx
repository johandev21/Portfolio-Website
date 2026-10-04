import { portfolioData } from "../data/portfolio";
import SectionTitle from "../components/SectionTitle";
import ContactIsland from "../components/ContactIsland";
import Reveal from "../components/Reveal";
import contactBg640Avif from "../assets/contact-background-640.avif";
import contactBg1280Avif from "../assets/contact-background-1280.avif";
import contactBg1920Avif from "../assets/contact-background-1920.avif";
import contactBg640Webp from "../assets/contact-background-640.webp";
import contactBg1280Webp from "../assets/contact-background-1280.webp";
import contactBg1920Webp from "../assets/contact-background-1920.webp";

export default function ContactSection() {
  const { contact } = portfolioData;
  return (
    <section
      id="contacto"
      className="contact-section mt-20 scroll-mt-24 pb-16 md:mt-16 xl:mt-[111px] xl:pb-[122px]"
    >
      <picture className="contact-bg-picture">
        <source
          type="image/avif"
          srcSet={`${contactBg640Avif.src} 640w, ${contactBg1280Avif.src} 1280w, ${contactBg1920Avif.src} 1920w`}
          sizes="100vw"
        />
        <source
          type="image/webp"
          srcSet={`${contactBg640Webp.src} 640w, ${contactBg1280Webp.src} 1280w, ${contactBg1920Webp.src} 1920w`}
          sizes="100vw"
        />
        <img
          src={contactBg1280Webp.src}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1280}
          loading="lazy"
          decoding="async"
          className="contact-bg-image"
        />
      </picture>
      <div aria-hidden="true" className="contact-bg-overlay" />
      <div className="relative mx-auto max-w-[812px] px-3 md:px-8 lg:px-0">
        <div className="flex w-full flex-col gap-4 pt-[76px]">
          <Reveal variant="heading">
            <SectionTitle>Contacto</SectionTitle>
          </Reveal>
          <div className="flex w-full flex-col items-center gap-4">
            <Reveal className="w-full" delay={55}>
              <ContactIsland contact={contact} />
            </Reveal>
            <Reveal delay={110}>
              <p className="text-center text-sm leading-normal text-muted">
                {contact.helperText}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
