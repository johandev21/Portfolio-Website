import { portfolioData } from "../data/portfolio";
import SectionTitle from "../components/SectionTitle";
import ContactCard from "../components/ContactCard";
import Reveal from "../components/Reveal";
/* Contact background image temporarily disabled.
import crows640Avif from "../assets/crows-640.avif";
import crows1280Avif from "../assets/crows-1280.avif";
import crows1920Avif from "../assets/crows-1920.avif";
import crows640Webp from "../assets/crows-640.webp";
import crows1280Webp from "../assets/crows-1280.webp";
import crows1920Webp from "../assets/crows-1920.webp";
*/

export default function ContactSection() {
  const { contact } = portfolioData;
  return (
    <section id="contacto" className="relative mt-20 scroll-mt-24 overflow-hidden pb-16 md:mt-16 xl:mt-[111px] xl:pb-[122px]">
      {/*
      <picture className="pointer-events-none absolute inset-0">
        <source
          type="image/avif"
          srcSet={`${crows640Avif} 640w, ${crows1280Avif} 1280w, ${crows1920Avif} 1920w`}
          sizes="100vw"
        />
        <source
          type="image/webp"
          srcSet={`${crows640Webp} 640w, ${crows1280Webp} 1280w, ${crows1920Webp} 1920w`}
          sizes="100vw"
        />
        <img
          src={crows1280Webp}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover mix-blend-luminosity"
        />
      </picture>
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,var(--color-bg)_0%,var(--color-bg)_15%,var(--contact-overlay)_50%,var(--color-bg)_85%,var(--color-bg)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-bg)_95%)]"
      />
      <div aria-hidden="true" className="contact-pattern pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-[812px] px-6 md:px-8 lg:px-0">
        <div className="flex w-full flex-col gap-4 pt-[76px]">
          <Reveal variant="heading">
            <SectionTitle>Contacto</SectionTitle>
          </Reveal>
          <div className="flex w-full flex-col items-center gap-4">
            <Reveal className="w-full" delay={55}>
              <ContactCard contact={contact} />
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
