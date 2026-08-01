export type IconName =
  | "nestjs"
  | "django"
  | "postgresql"
  | "mysql"
  | "prisma"
  | "drizzle"
  | "react"
  | "nextjs"
  | "shadcn"
  | "tailwind"
  | "html5"
  | "css"
  | "javascript"
  | "typescript"
  | "python"
  | "zod"
  | "tanstack-query"
  | "linkedin"
  | "github"
  | "mail"
  | "pin"
  | "send"
  | "cv";

export type BulletPoint = string;

export interface Technology {
  name: string;
  icon: IconName;
}

export interface TechCategory {
  label: string;
  technologies: Technology[];
}

export interface Project {
  title: string;
  subtitle: string;
  icons: IconName[];
}

export interface Experience {
  title: string;
  company: string;
  start: string;
  end: string;
  bullets: BulletPoint[];
}

export interface HeroData {
  greeting: string;
  name: string;
  location: string;
  description: string;
}

export interface ContactSocial {
  icon: IconName;
  href: string;
}

export interface ContactButton {
  icon: IconName;
  label: string;
}

export interface ContactData {
  social: ContactSocial[];
  buttons: ContactButton[];
  placeholder: string;
  helperText: string;
}

export interface PortfolioData {
  hero: HeroData;
  experience: Experience[];
  projects: Project[];
  techCategories: TechCategory[];
  contact: ContactData;
}
