import { createElement } from "react";
import { Download, Mail, MapPin } from "lucide";
import css from "../assets/icons/thesvg/CSS.svg";
import django from "../assets/icons/thesvg/Django.svg";
import drizzle from "../assets/icons/thesvg/Drizzle.svg";
import github from "../assets/icons/thesvg/GitHub.svg";
import html5 from "../assets/icons/thesvg/HTML.svg";
import javascript from "../assets/icons/thesvg/JavaScript.svg";
import linkedin from "../assets/icons/thesvg/Linkedin.svg";
import mysql from "../assets/icons/thesvg/MySQL.svg";
import nestjs from "../assets/icons/thesvg/NestJS.svg";
import nextjs from "../assets/icons/thesvg/Nextjs.svg";
import postgresql from "../assets/icons/thesvg/Postgresql.svg";
import prisma from "../assets/icons/thesvg/Prisma.svg";
import python from "../assets/icons/thesvg/Python.svg";
import react from "../assets/icons/thesvg/React.svg";
import shadcn from "../assets/icons/thesvg/Shadcn.svg";
import tailwind from "../assets/icons/thesvg/Tailwind.svg";
import tanstackQuery from "../assets/icons/thesvg/Tanstack Query.svg";
import typescript from "../assets/icons/thesvg/TypeScript.svg";
import zod from "../assets/icons/thesvg/Zod.svg";
import type { IconName } from "../types";

const sizes = {
  16: "h-4 w-4",
  20: "h-5 w-5",
  24: "h-6 w-6",
} as const;

const icons = {
  cv: Download,
  mail: Mail,
  pin: MapPin,
} as const;

const brandIcons = {
  css,
  django,
  drizzle,
  github,
  html5,
  javascript,
  linkedin,
  mysql,
  nestjs,
  nextjs,
  postgresql,
  prisma,
  python,
  react,
  shadcn,
  tailwind,
  "tanstack-query": tanstackQuery,
  typescript,
  zod,
} as const;

type IconNode = readonly (readonly [string, Record<string, string | number | undefined>])[];

function renderIcon(iconNode: IconNode) {
  return createElement(
    "svg",
    {
      "aria-hidden": true,
      className: "h-full w-full",
      fill: "none",
      height: 24,
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      viewBox: "0 0 24 24",
      width: 24,
    },
    iconNode.map(([tag, attributes], index) =>
      createElement(tag, { ...attributes, key: index }),
    ),
  );
}

interface IconProps {
  name: IconName;
  size: 16 | 20 | 24;
  className?: string;
}

export default function Icon({ name, size, className = "" }: IconProps) {
  const isLibraryIcon = name in icons || name in brandIcons;

  return (
    <span
      className={`flex shrink-0 items-center justify-center overflow-hidden transition-motion ${isLibraryIcon ? "" : "border border-border bg-surface"} ${sizes[size]} ${className}`}
    >
      {name in icons ? (
        <span className="h-full w-full text-text-soft">
          {renderIcon(icons[name as keyof typeof icons])}
        </span>
      ) : name in brandIcons ? (
        <span
          className="h-full w-full text-text-soft [&>svg]:h-full [&>svg]:w-full"
          aria-hidden="true"
        >
          <img
            src={brandIcons[name as keyof typeof brandIcons]}
            alt=""
            className="h-full w-full"
            style={{ filter: "var(--icon-filter)" }}
          />
        </span>
      ) : (
        <span className="px-0.5 text-[8px] uppercase leading-none tracking-wide text-text">
          {name.replace(/-/g, " ").toUpperCase()}
        </span>
      )}
    </span>
  );
}
