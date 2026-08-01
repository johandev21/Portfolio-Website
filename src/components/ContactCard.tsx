import type { ContactData } from "../types";
import Icon from "./Icon";

interface ContactCardProps {
  contact: ContactData;
}

export default function ContactCard({ contact }: ContactCardProps) {
  return (
    <form className="flex w-full flex-col items-center justify-end gap-2 border border-border p-2 pt-4 transition-motion hover:bg-surface/60 motion-reduce:transition-none">
      <div className="flex w-full flex-wrap flex-row items-center justify-between px-4">
        <div className="flex flex-row items-center gap-[13px]">
          {contact.social.map((social) => (
            <a
              key={social.icon}
              href={social.href}
              className="group inline-flex rounded-sm transition-motion focus-visible:ring-2 focus-visible:ring-text-soft focus-visible:ring-offset-2 focus-visible:ring-offset-bg motion-reduce:transition-none"
            >
              <Icon
                name={social.icon}
                size={16}
                className="hoverable:group-hover:-translate-y-[1px] hoverable:group-hover:border-text-soft"
              />
            </a>
          ))}
        </div>
        <div className="flex flex-row items-center gap-4">
          {contact.buttons.map((button) => (
            <button
              key={button.label}
              type="button"
              className="group flex cursor-pointer flex-row items-center gap-1 rounded-sm transition-motion active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-text-soft focus-visible:ring-offset-2 focus-visible:ring-offset-bg motion-reduce:active:scale-none motion-reduce:transition-none"
            >
              <Icon
                name={button.icon}
                size={16}
                className="hoverable:group-hover:border-text-soft"
              />
              <span className="whitespace-nowrap text-sm leading-normal text-muted transition-motion hoverable:group-hover:text-text">
                {button.label}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="relative flex min-h-[97px] w-full flex-row items-start justify-between bg-surface/60 p-3 px-4 backdrop-blur-sm sm:h-[97px]">
        <span className="pr-12 text-sm leading-normal text-muted lg:pr-0">
          {contact.placeholder}
        </span>
        <button
          type="button"
          className="group absolute bottom-2 right-[7px] flex h-[28px] w-[28px] cursor-pointer items-center justify-center bg-[#c0c0c0] transition-motion hover:brightness-110 active:scale-95 focus-visible:ring-2 focus-visible:ring-text-soft focus-visible:ring-offset-2 focus-visible:ring-offset-bg motion-reduce:active:scale-none motion-reduce:transition-none"
        >
          <svg
            viewBox="0 0 12 6"
            className="h-[4.5px] w-[9px] transition-motion hoverable:group-hover:translate-x-[1px]"
          >
            <path
              d="M12 6L6 0L0 6"
              fill="none"
              stroke="#0d1011"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
