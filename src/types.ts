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
  | "tanstack-router"
  | "better-auth"
  | "bun"
  | "clerk"
  | "convex"
  | "sqlite"
  | "vite"
  | "elysia"
  | "linkedin"
  | "github"
  | "mail"
  | "pin"
  | "send"
  | "cv";

export type TechnologyIconName = Exclude<
  IconName,
  "linkedin" | "github" | "mail" | "pin" | "send" | "cv"
>;

export type BulletPoint = string;

export interface Technology {
  name: string;
  icon: TechnologyIconName;
}

export interface TechCategory {
  label: string;
  technologies: Technology[];
}

export interface ProjectSection {
  title: string;
  content: string;
  bullets?: string[];
}

export interface MediaItem {
  type: "image" | "video";
  title: string;
  caption?: string;
}

export interface Project {
  slug?: string;
  title: string;
  subtitle: string;
  description?: string;
  detailsMarkdown?: string;
  sections?: ProjectSection[];
  media?: MediaItem[];
  year?: string;
  role?: string;
  liveUrl?: string;
  githubUrl?: string;
  icons: Technology[];
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
  email: string;
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
