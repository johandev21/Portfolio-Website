import { portfolioData } from "../data/portfolio";
import Icon from "../components/Icon";
import myselfImageMobile from "../assets/myself-160.jpg";
import myselfImageDesktop from "../assets/myself-240.jpg";

export default function IntroSection() {
  const { hero } = portfolioData;
  return (
    <section id="inicio" className="scroll-mt-24 flex flex-col gap-4">
      <div className="flex flex-col items-center gap-5 md:flex-row">
          <div className="h-20 w-20 overflow-hidden border border-border md:h-[120px] md:w-[120px]">
            <picture>
              <source media="(min-width: 768px)" srcSet={myselfImageDesktop} />
              <img
                src={myselfImageMobile}
                alt="Johan Carrasco"
                width="240"
                height="240"
                sizes="(max-width: 767px) 80px, 120px"
                decoding="async"
                className="h-full w-full scale-[1.12] object-cover blur-[0.25px]"
              />
            </picture>
          </div>
        <div className="flex w-full flex-col items-center gap-2 md:w-[352px] md:shrink-0 md:items-start">
          <div className="flex w-full flex-col gap-0.5">
            <p className="w-full text-center font-serif text-[clamp(16px,calc(16px_+_(100vw_-_375px)_*_0.00299),17.94px)] leading-none text-text-soft md:text-left">
              {hero.greeting}
            </p>
            <h1 className="w-full bg-linear-to-r from-text to-accent bg-clip-text text-center font-serif text-4xl leading-none text-transparent md:text-left md:text-5xl md:leading-none">
              {hero.name}
            </h1>
          </div>
          <div className="flex w-fit flex-row items-start gap-2">
            <Icon name="pin" size={20} />
            <span className="whitespace-nowrap text-sm leading-normal text-text-soft">
              {hero.location}
            </span>
          </div>
        </div>
      </div>
      <p className="w-full text-base leading-normal text-text text-center md:text-left lg:w-[773px]">
        {hero.description}
      </p>
    </section>
  );
}
