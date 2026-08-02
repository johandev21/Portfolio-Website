import { createElement } from "react";
import { ChevronUp } from "lucide";
import type { ContactData } from "../types";
import Icon from "./Icon";

interface ContactCardProps {
  contact: ContactData;
}

export default function ContactCard({ contact }: ContactCardProps) {
  return (
    <form className="flex w-full flex-col items-center justify-end gap-2 border border-border/50 bg-bg/60 p-2 pt-4 backdrop-blur-[1.75px] transition-motion motion-reduce:transition-none">
      <div className="flex w-full flex-wrap flex-row items-center justify-between px-4">
        <div className="flex flex-row items-center gap-[13px]">
          {contact.social.map((social) => (
            <a
              key={social.icon}
              href={social.href}
              aria-label={social.icon === "linkedin" ? "LinkedIn" : "GitHub"}
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
      <div className="relative flex min-h-[97px] w-full flex-row items-start justify-between bg-surface/60 p-3 px-4 backdrop-blur-[1.75px] sm:h-[97px]">
        <textarea
          id="contact-message"
          name="message"
          rows={3}
          required
          spellCheck
          placeholder={contact.placeholder}
          aria-label="Mensaje"
          className="h-full min-h-[73px] w-full resize-none bg-transparent pr-12 pb-10 text-sm leading-normal text-text outline-none placeholder:text-muted focus-visible:ring-0"
        />
        <button
          type="submit"
          aria-label="Enviar mensaje"
          className="group absolute bottom-2 right-[7px] flex h-[28px] w-[28px] cursor-pointer items-center justify-center bg-action transition-motion hover:brightness-110 active:scale-95 focus-visible:ring-2 focus-visible:ring-text-soft focus-visible:ring-offset-2 focus-visible:ring-offset-bg motion-reduce:active:scale-none motion-reduce:transition-none"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-[18px] w-[18px] text-action-foreground transition-motion hoverable:group-hover:translate-x-[1px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {ChevronUp.map(([tag, attributes], index) =>
              createElement(tag, { ...attributes, key: index }),
            )}
          </svg>
        </button>
      </div>
    </form>
  );
}
