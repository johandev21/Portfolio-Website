import type { PortfolioData, Technology } from "../types";

const projectIcons = [
  { name: "NestJS", icon: "nestjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Zod", icon: "zod" },
  { name: "React", icon: "react" },
  { name: "TanStack Query", icon: "tanstack-query" },
  { name: "Next.js", icon: "nextjs" },
  { name: "shadcn", icon: "shadcn" },
] satisfies Technology[];

export const portfolioData: PortfolioData = {
  hero: {
    greeting: "Hola, soy",
    name: "Johan Carrasco",
    location: "Rancagua, Chile",
    description:
      "Ingeniero de Software enfocado en desarrollar aplicaciones web escalables y confiables de extremo a extremo. Con experiencia llevando proyectos a producción, priorizando la calidad, la mantenibilidad y una sólida experiencia de usuario.",
  },
  experience: [
    {
      title: "Practica de Ingeniería de Software",
      company: "Hospital Dr. Franco Ravera Zunino",
      start: "Enero 2026",
      end: "Marzo 2026",
      bullets: [
        "Participé en el diseño y desarrollo de una aplicación web para producción para el departamento de Relación Asistencial Docente (RAD), reemplazando un flujo de trabajo manual basado en Excel por un sistema centralizado con control de acceso por roles.",
        "Contribuí al desarrollo del proyecto desde sus primeras etapas hasta su despliegue en producción, trabajando en un equipo de cinco integrantes.",
        "Diseñé la arquitectura de datos y desarrollé los módulos principales del sistema.",
        "Implementé autenticación, autorización por roles y validaciones de datos de extremo a extremo.",
        "Colaboré con el personal del hospital para transformar procesos operativos en soluciones de software.",
      ],
    },
  ],
  projects: [
    {
      title: "Insight",
      subtitle: "Convierte datos en decisiones accionables.",
      icons: [...projectIcons],
    },
    {
      title: "Gridly",
      subtitle: "Organiza datos con rapidez y claridad.",
      icons: [...projectIcons],
    },
    {
      title: "MetricHub",
      subtitle: "Visualiza indicadores desde un solo lugar.",
      icons: [...projectIcons],
    },
    {
      title: "CloudDesk",
      subtitle: "Espacio de trabajo centralizado en la nube.",
      icons: [...projectIcons],
    },
  ],
  techCategories: [
    {
      label: "Backend y Base de Datos",
      technologies: [
        { name: "NestJS", icon: "nestjs" },
        { name: "Django", icon: "django" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MySQL", icon: "mysql" },
        { name: "Prisma", icon: "prisma" },
        { name: "Drizzle", icon: "drizzle" },
      ],
    },
    {
      label: "Frontend",
      technologies: [
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "shadcn", icon: "shadcn" },
        { name: "Tailwind", icon: "tailwind" },
        { name: "HTML5", icon: "html5" },
        { name: "CSS", icon: "css" },
        { name: "JavaScript", icon: "javascript" },
      ],
    },
    {
      label: "Lenguajes",
      technologies: [
        { name: "TypeScript", icon: "typescript" },
        { name: "Python", icon: "python" },
        { name: "JavaScript", icon: "javascript" },
      ],
    },
  ],
  contact: {
    social: [
      { icon: "linkedin", href: "https://www.linkedin.com/in/johandev21/" },
      { icon: "github", href: "https://github.com/johandev21" },
    ],
    buttons: [
      { icon: "mail", label: "Correo" },
      { icon: "cv", label: "CV" },
    ],
    email: "johandev21@gmail.com",
    placeholder:
      "Un puesto, un proyecto, una idea o simplemente un saludo. Cuéntame qué tienes en mente.",
    helperText: "Todos los mensajes llegan directamente a mi correo",
  },
};
