import { createElement } from "react";
import { ArrowLeft, Download, ExternalLink, Mail, MapPin } from "lucide";
import betterAuth from "../assets/icons/thesvg/better-auth.svg?raw";
import bun from "../assets/icons/thesvg/bun.svg?raw";
import clerk from "../assets/icons/thesvg/clerk.svg?raw";
import convex from "../assets/icons/thesvg/convex.svg?raw";
import css from "../assets/icons/thesvg/CSS.svg?raw";
import django from "../assets/icons/thesvg/Django.svg?raw";
import drizzle from "../assets/icons/thesvg/Drizzle.svg?raw";
import elysiajs from "../assets/icons/thesvg/elysiajs.svg?raw";
import github from "../assets/icons/thesvg/GitHub.svg?raw";
import html5 from "../assets/icons/thesvg/HTML.svg?raw";
import javascript from "../assets/icons/thesvg/JavaScript.svg?raw";
import linkedin from "../assets/icons/thesvg/linkedin.svg?raw";
import mysql from "../assets/icons/thesvg/mysql.svg?raw";
import nestjs from "../assets/icons/thesvg/NestJS.svg?raw";
import nextjs from "../assets/icons/thesvg/nextjs.svg?raw";
import postgresql from "../assets/icons/thesvg/Postgresql.svg?raw";
import prisma from "../assets/icons/thesvg/Prisma.svg?raw";
import python from "../assets/icons/thesvg/Python.svg?raw";
import react from "../assets/icons/thesvg/React.svg?raw";
import shadcn from "../assets/icons/thesvg/Shadcn.svg?raw";
import sqlite from "../assets/icons/thesvg/sqlite.svg?raw";
import tailwind from "../assets/icons/thesvg/Tailwind.svg?raw";
import tanstackQuery from "../assets/icons/thesvg/Tanstack Query.svg?raw";
import tanstackRouter from "../assets/icons/thesvg/tanstack.svg?raw";
import typescript from "../assets/icons/thesvg/TypeScript.svg?raw";
import vite from "../assets/icons/thesvg/vite.svg?raw";
import zod from "../assets/icons/thesvg/Zod.svg?raw";
import type { IconName } from "../types";

const sizes = {
  16: "h-4 w-4",
  20: "h-5 w-5",
  24: "h-6 w-6",
} as const;

const icons = {
  "arrow-left": ArrowLeft,
  cv: Download,
  "external-link": ExternalLink,
  mail: Mail,
  pin: MapPin,
} as const;

const brandIcons = {
  "better-auth": betterAuth,
  bun,
  clerk,
  convex,
  css,
  django,
  drizzle,
  elysia: elysiajs,
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
  sqlite,
  tailwind,
  "tanstack-query": tanstackQuery,
  "tanstack-router": tanstackRouter,
  typescript,
  vite,
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

function themeBrandSvg(svg: string) {
  return svg
    .replace(/fill="#F1F1F1"/g, 'fill="var(--color-text)"')
    .replace(/fill="#0D1011"/g, 'fill="var(--color-bg)"')
    .replace(/fill="#9C9A9A"/g, 'fill="var(--color-muted)"')
    .replace(/stop-color="#0D1011"/g, 'stop-color="var(--color-bg)"')
    .replace(/fill="none"(?= xmlns)/, 'fill="var(--color-bg)"');
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
      className={`flex shrink-0 items-center justify-center overflow-hidden leading-none transition-motion ${isLibraryIcon ? "" : "border border-border bg-surface"} ${sizes[size]} ${className}`}
    >
      {name in icons ? (
        <span className="h-full w-full text-current">
          {renderIcon(icons[name as keyof typeof icons])}
        </span>
      ) : name in brandIcons ? (
        <span
          className="h-full w-full text-text-soft [&>svg]:h-full [&>svg]:w-full"
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html: themeBrandSvg(brandIcons[name as keyof typeof brandIcons]),
          }}
        />
      ) : (
        <span className="px-0.5 text-[8px] uppercase leading-none tracking-wide text-text">
          {name.replace(/-/g, " ").toUpperCase()}
        </span>
      )}
    </span>
  );
}
