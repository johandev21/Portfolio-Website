import type { Experience } from "../types";

const bulletStagger = [
  "",
  "hoverable:group-hover:[transition-delay:40ms]",
  "hoverable:group-hover:[transition-delay:80ms]",
  "hoverable:group-hover:[transition-delay:120ms]",
  "hoverable:group-hover:[transition-delay:160ms]",
];

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="group flex w-full flex-col gap-6 border border-border p-4 transition-motion-slow hover:-translate-y-[2px] hover:bg-surface/60 active:translate-y-[1px] motion-reduce:hover:translate-none motion-reduce:active:translate-none motion-reduce:transition-none">
      <div className="flex w-full flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-[146px]">
        <div className="flex w-full flex-col gap-1.5 md:w-[275px] md:shrink-0">
          <h3 className="w-full text-base leading-normal text-text">{experience.title}</h3>
          <p className="w-full text-sm leading-normal text-text-soft">{experience.company}</p>
        </div>
        <p className="whitespace-nowrap text-sm leading-normal text-[#d1d1d1]">
          {experience.start} – {experience.end}
        </p>
      </div>
      <ul className="flex w-full flex-col gap-3">
        {experience.bullets.map((bullet, index) => (
          <li key={bullet} className="flex w-full flex-row items-start gap-3">
            <span
              className={`flex h-[20px] w-fit shrink-0 items-center p-1 transition-motion hoverable:group-hover:scale-105 ${bulletStagger[index] ?? ""}`}
            >
              <svg viewBox="0 0 12 12" className="h-[7px] w-[7px]">
                <circle
                  cx="6"
                  cy="6"
                  r="5.5"
                  fill="none"
                  stroke="#e1e1e1"
                  strokeWidth="1.2"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </span>
            <p className="flex-1 text-sm leading-normal text-text-soft">{bullet}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
