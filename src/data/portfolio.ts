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
      slug: "insight",
      title: "Insight",
      subtitle: "Convierte datos en decisiones accionables.",
      description:
        "Plataforma web de analítica avanzada orientada a la toma de decisiones. Centraliza datos dispersos en paneles interactivos que responden en tiempo real a las necesidades del negocio.",
      year: "2026",
      role: "Desarrollo Full Stack",
      liveUrl: "https://example.com/insight",
      githubUrl: "https://github.com/johandev21/insight",
      icons: [...projectIcons],
      sections: [
        {
          title: "Visión General y Contexto",
          content:
            "El objetivo de Insight es eliminar la fricción al analizar grandes conjuntos de datos. Permite a los usuarios crear vistas personalizadas sin requerir conocimientos técnicos complejos.",
        },
        {
          title: "Desafíos y Soluciones",
          content:
            "Garantizar baja latencia con actualización continua de datos requerió estructurar una capa de cache optimizada.",
          bullets: [
            "Procesamiento asíncrono de eventos de alta frecuencia",
            "Gestión eficiente del estado global en el cliente con TanStack Query",
            "Validación estricta del esquema de datos mediante Zod en ambas capas",
          ],
        },
        {
          title: "Arquitectura & Stack",
          content:
            "Desarrollado sobre un monorepo modular con NestJS en el servidor y Next.js en la capa de interfaz, priorizando mantenibilidad a largo plazo.",
        },
      ],
      media: [
        {
          type: "video",
          title: "Demostración de flujo interactivo",
          caption: "Demostración en video del panel en vivo con actualización en tiempo real",
        },
        {
          type: "image",
          title: "Vista de métricas generales",
          caption: "Tablero ejecutivo con gráficos de rendimiento y agregaciones",
        },
        {
          type: "image",
          title: "Configuración de filtros",
          caption: "Interfaz de filtrado avanzado por rangos y categorías",
        },
      ],
    },
    {
      slug: "gridly",
      title: "Gridly",
      subtitle: "Organiza datos con rapidez y claridad.",
      description:
        "Sistema interactivo de tablas de datos enfocado en la manipulación rápida de información masiva con mínima sobrecarga visual.",
      year: "2026",
      role: "Desarrollo Frontend",
      liveUrl: "https://example.com/gridly",
      githubUrl: "https://github.com/johandev21/gridly",
      icons: [...projectIcons],
      sections: [
        {
          title: "Manipulación de Datos Eficiente",
          content:
            "Gridly permite realizar búsquedas instantáneas, reordenamiento de columnas y edición en celda garantizando un rendimiento constante incluso con miles de registros.",
        },
        {
          title: "Experiencia de Usuario",
          content:
            "Diseñado con atajos de teclado y animaciones sutiles para ofrecer una sensación nativa y fluida durante el flujo de trabajo continuo.",
        },
      ],
      media: [
        {
          type: "video",
          title: "Vista previa de interacción",
          caption: "Video corto demostrando edición masiva y navegación por teclado",
        },
        {
          type: "image",
          title: "Captura de tabla extendida",
          caption: "Vista de cuadrícula con grupos y columnas personalizadas",
        },
      ],
    },
    {
      slug: "metrichub",
      title: "MetricHub",
      subtitle: "Visualiza indicadores desde un solo lugar.",
      description:
        "Panel centralizado de monitoreo distribuido para alertas e indicadores críticos de infraestructura y servicios web.",
      year: "2025",
      role: "Arquitectura & Backend",
      liveUrl: "https://example.com/metrichub",
      githubUrl: "https://github.com/johandev21/metrichub",
      icons: [...projectIcons],
      sections: [
        {
          title: "Monitoreo en Tiempo Real",
          content:
            "Agrega logs y métricas de rendimiento procedentes de múltiples servidores reduciendo el tiempo de respuesta ante incidentes.",
        },
        {
          title: "Sistema de Alertas",
          content:
            "Reglas configurables de notificación automática basadas en umbrales de uso de recursos y estados de salud.",
        },
      ],
      media: [
        {
          type: "image",
          title: "Panel principal de servidores",
          caption: "Indicadores de CPU, memoria y tasa de peticiones",
        },
        {
          type: "video",
          title: "Simulación de alerta en directo",
          caption: "Video demostrativo de detección automática de anomalías",
        },
      ],
    },
    {
      slug: "clouddesk",
      title: "CloudDesk",
      subtitle: "Espacio de trabajo centralizado en la nube.",
      description:
        "Entorno digital para gestión colaborativa de documentos y permisos en equipos distribuidos.",
      year: "2025",
      role: "Desarrollo Full Stack",
      liveUrl: "https://example.com/clouddesk",
      githubUrl: "https://github.com/johandev21/clouddesk",
      icons: [...projectIcons],
      sections: [
        {
          title: "Gestión Documental",
          content:
            "Organización estructurada de carpetas con control de acceso específico por usuario y nivel de autorización.",
        },
      ],
      media: [
        {
          type: "image",
          title: "Explorador de archivos",
          caption: "Interfaz de navegación por carpetas y vista previa de documentos",
        },
      ],
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
