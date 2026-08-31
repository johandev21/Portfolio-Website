import type { PortfolioData, Technology } from "../types";
import projectVideoPoster from "../assets/project-background.jpg";
import projectVideo from "../assets/project-videos/from-music-festivals-to-developer.mp4";

const testProjectVideo = {
  type: "video",
  title: "De festivales de música a desarrollador",
  caption: "Video de presentación del proyecto",
  poster: projectVideoPoster,
  src: projectVideo,
} as const;

const memsystemsIcons = [
  { name: "React", icon: "react" },
  { name: "Vite", icon: "vite" },
  { name: "TanStack Router", icon: "tanstack-router" },
  { name: "NestJS", icon: "nestjs" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Drizzle", icon: "drizzle" },
  { name: "Better Auth", icon: "better-auth" },
  { name: "TypeScript", icon: "typescript" },
] satisfies Technology[];

const tasklaneIcons = [
  { name: "TanStack Start", icon: "tanstack-router" },
  { name: "React", icon: "react" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "shadcn", icon: "shadcn" },
  { name: "Convex", icon: "convex" },
  { name: "Clerk", icon: "clerk" },
  { name: "Zod", icon: "zod" },
  { name: "TypeScript", icon: "typescript" },
] satisfies Technology[];

const threadnestIcons = [
  { name: "Bun", icon: "bun" },
  { name: "Elysia", icon: "elysia" },
  { name: "Better Auth", icon: "better-auth" },
  { name: "SQLite", icon: "sqlite" },
  { name: "Drizzle", icon: "drizzle" },
  { name: "Next.js", icon: "nextjs" },
  { name: "React", icon: "react" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "TanStack Query", icon: "tanstack-query" },
] satisfies Technology[];

const radIcons = [
  { name: "Next.js", icon: "nextjs" },
  { name: "Prisma", icon: "prisma" },
  { name: "MariaDB", icon: "mysql" },
  { name: "Better Auth", icon: "better-auth" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "shadcn", icon: "shadcn" },
  { name: "Zod", icon: "zod" },
  { name: "TypeScript", icon: "typescript" },
] satisfies Technology[];

const memsystemsMarkdown = `## Contexto del Proyecto

Memsystems es una aplicación para organizar notebooks, consultar fuentes y generar materiales de estudio con modelos de inteligencia artificial. Busca reunir en un solo lugar la investigación, el contexto y las herramientas de estudio que un usuario necesita.

Para lograrlo, el proyecto se organizó como un monorepo con una interfaz web desarrollada con React, Vite y TanStack Router, y una API construida con NestJS, PostgreSQL y Drizzle ORM.

### Funcionalidades Principales

1. **Notebooks**: Espacios de trabajo con título, descripción, ícono e imagen de banner personalizados, además de búsqueda y listado.
2. **Fuentes de información**: Asociadas al notebook, permiten añadir texto, importar contenido desde una URL, subir archivos y consultar fuentes mediante búsqueda web.
3. **Chat contextual**: Chat persistente por notebook para interactuar con sus fuentes, con respuestas en streaming, selección de modelo e historial de mensajes.
4. **Materiales de estudio**: Cuestionarios, tarjetas de estudio, rutas de aprendizaje y mapas mentales, organizados en carpetas y con papelera de recuperación.

## Proveedores y Modelos de IA

La aplicación integra múltiples proveedores (OpenAI, DeepSeek, Anthropic, Google Gemini y Kimi) y permite consultar los modelos disponibles desde la interfaz. Las claves se configuran mediante variables de entorno o desde los ajustes de usuario.

La autenticación y las sesiones se gestionan con Better Auth, mientras que la persistencia de notebooks, fuentes, chats y configuraciones se almacena en PostgreSQL.

## Despliegue e Infraestructura

Docker ofrece dos flujos aislados: un modo de desarrollo con recarga automática y un stack local similar a producción que sirve el frontend con nginx y ejecuta el backend compilado.

- **Frontend**: Vite con HMR activo.
- **Backend**: NestJS con reinicio automático al detectar cambios.
- **Persistencia**: PostgreSQL y almacenamiento local, S3, R2 o MinIO mediante una interfaz compatible con S3.

## Estado del Proyecto

El proyecto se encuentra en desarrollo. Algunas funciones y configuraciones pueden cambiar mientras evoluciona la aplicación.`;

const tasklaneMarkdown = `## Contexto del Proyecto

Tasklane es una aplicación web de gestión visual del trabajo diseñada para equipos de alto rendimiento. Su objetivo central es ofrecer una experiencia de colaboración fluida e instantánea: cualquier cambio realizado por un miembro se refleja de forma inmediata en las pantallas de todos los usuarios conectados sin necesidad de recargar la página.

La aplicación se estructura mediante tableros, listas y tarjetas, y sigue un lenguaje ubicuo estricto para garantizar consistencia entre el código, la base de datos y la interfaz de usuario.

### Funcionalidades Principales

1. **Identidad**: Registro e inicio de sesión con email y contraseña mediante Clerk.
2. **Dashboard**: Vista de todos los Boards del usuario, con creación y estados vacíos guiados.
3. **Boards, Lists y Cards**: CRUD completo con reordenamiento drag & drop, movimiento entre listas y edición en línea.
4. **Detalle de Card**: Descripción con Markdown, etiquetas, fecha límite, asignación de miembros y hilo de comentarios.
5. **Presence en tiempo real**: Franja de avatares con indicador de los miembros que están viendo el tablero.

## Stack Tecnológico

- **Frontend**: TanStack Start (React 19) con renderizado en servidor y enrutamiento tipado.
- **Diseño**: Tailwind CSS v4 y shadcn/ui.
- **Backend**: Convex como base de datos reactiva y funciones serverless.
- **Identidad**: Clerk con validación de tokens JWT en el backend.
- **Pruebas**: Vitest con convex-test para pruebas en memoria.

## Decisiones de Arquitectura

El desarrollo se fundamenta en Registros de Decisiones Arquitectónicas (ADRs) documentados en \`docs/adr/\`:

1. **Stack Unificado**: Convex centraliza persistencia, funciones de servidor y suscripciones reactivas.
2. **Autenticación Delegada**: Clerk gestiona las credenciales y Convex verifica la firma JWT.
3. **Tiempo Real y Ordenamiento**: Reordenamiento basado en anclas posicionales resueltas en el servidor y presencia mediante latidos periódicos.`;

const threadnestMarkdown = `## Contexto del Proyecto

ThreadNest es un clon ligero de Reddit. Las comunidades se llaman **nests**, las publicaciones viven dentro de los nests y los hilos de comentarios se anidan dentro de cada publicación.

El proyecto es un monorepo con dos aplicaciones: una API REST con Elysia.js (autenticación, base de datos SQLite y WebSockets) y un frontend con Next.js (App Router).

### Funcionalidades Principales

1. **Nests**: Comunidades con slug, descripción y contador de miembros y publicaciones.
2. **Publicaciones**: De tipo texto o enlace dentro de cada nest.
3. **Comentarios anidados**: Respuestas ilimitadas.
4. **Sistema de votos**: Positivo, negativo o neutro sobre publicaciones y comentarios.
5. **Feed**: Ordenamiento por populares, recientes o mejor votados, con paginación por cursor.
6. **Tiempo real**: Actualizaciones vía WebSockets sin recargar la página.

## Stack Tecnológico

- **Runtime**: Bun.
- **Backend**: Elysia.js.
- **Autenticación**: Better Auth (correo y contraseña).
- **Base de datos**: SQLite mediante el driver nativo \`bun:sqlite\`.
- **ORM**: Drizzle ORM con drizzle-kit para migraciones.
- **Type safety**: Eden Treaty para un cliente de API tipado de extremo a extremo.
- **Frontend**: Next.js 16 (App Router), React 19.
- **UI**: shadcn/ui, Tailwind CSS 4 y lucide-react.
- **Estado de datos**: TanStack Query v5.

## API y Tiempo Real

El servidor expone grupos de ruta bajo \`/api\` para salud, autenticación, nests, posts, comments y votes. El módulo \`realtime/hub.ts\` implementa un registro de temas con helpers de difusión mediante los WebSockets nativos de Elysia, lo que permite sincronizar votos, comentarios y actividad en tiempo real.`;

const radMarkdown = `## Contexto del Proyecto

Sistema de gestión para la Relación Asistencial Docente (RAD) del Hospital Regional de Rancagua. Diseñado para centralizar y optimizar el control de alumnos, rotaciones, servicios clínicos y centros formadores, reemplazando un flujo de trabajo manual basado en Excel.

### Funcionalidades Principales

1. **Centros Formadores y Carreras**: Registro y control de convenios.
2. **Capacidad Formadora**: Gestión de cupos por servicio clínico, jornada y nivel de formación.
3. **Gestión de Alumnos**: Carga masiva de nóminas y seguimiento individual.
4. **Eventos Adversos**: Registro seguro de incidentes con carga de evidencia protegida.
5. **Repositorio de Documentos**: Biblioteca centralizada para normativas y guías.

## Stack Tecnológico

- **Frontend y Backend**: Next.js 16 (App Router, Server Components).
- **Base de datos**: MariaDB con Prisma ORM.
- **Autenticación**: Better-Auth.
- **Estilos**: Tailwind CSS y shadcn/ui.
- **Validación**: Zod.

## Seguridad y Almacenamiento

Los archivos sensibles se almacenan en el directorio \`.storage/\` fuera de la carpeta pública. El acceso se gestiona mediante tokens cifrados y validación de sesión para garantizar la privacidad de la información clínica.

## Despliegue

El repositorio incluye utilidades en \`/scripts\`, como un generador de archivos Excel para pruebas de carga masiva y un script de despliegue automatizado.`;

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
      slug: "memsystems",
      title: "Memsystems",
      subtitle: "Organiza tu conocimiento y genera materiales de estudio con IA.",
      description:
        "Plataforma para organizar notebooks, consultar fuentes y generar materiales de estudio (cuestionarios, tarjetas y mapas mentales) con modelos de inteligencia artificial.",
      detailsMarkdown: memsystemsMarkdown,
      year: "2026",
      role: "Desarrollo Full Stack",
      liveUrl: "https://example.com/memsystems",
      githubUrl: "https://github.com/johandev21/Memsystems-AI",
      icons: [...memsystemsIcons],
      sections: [
        {
          title: "Ecosistema de Estudio",
          content:
            "Notebooks, fuentes de información, chat contextual y materiales de estudio generados por IA, unificados en una sola aplicación.",
        },
      ],
      media: [testProjectVideo],
    },
    {
      slug: "tasklane",
      title: "Tasklane",
      subtitle: "Gestión visual de proyectos y colaboración en tiempo real.",
      description:
        "Aplicación web de gestión visual del trabajo mediante tableros, listas y tarjetas, con colaboración instantánea y presencia en tiempo real.",
      detailsMarkdown: tasklaneMarkdown,
      year: "2026",
      role: "Desarrollo Full Stack",
      liveUrl: "https://example.com/tasklane",
      githubUrl: "https://github.com/johandev21/Tasklane",
      icons: [...tasklaneIcons],
      sections: [
        {
          title: "Colaboración Instantánea",
          content:
            "Cada cambio realizado por un miembro se refleja de inmediato en las pantallas de todos los usuarios conectados, sin recargar la página.",
        },
      ],
      media: [],
    },
    {
      slug: "threadnest",
      title: "ThreadNest",
      subtitle: "Comunidades y conversaciones anidadas.",
      description:
        "Clon ligero de Reddit donde las comunidades (nests) alojan publicaciones y los hilos de comentarios se anidan dentro de cada una.",
      detailsMarkdown: threadnestMarkdown,
      year: "2026",
      role: "Desarrollo Full Stack",
      liveUrl: "https://example.com/threadnest",
      githubUrl: "https://github.com/johandev21/ThreadNest",
      icons: [...threadnestIcons],
      sections: [
        {
          title: "Comunidades y Votos",
          content:
            "Nests, publicaciones de texto o enlace, comentarios anidados ilimitados y sistema de votos con feed en tiempo real.",
        },
      ],
      media: [testProjectVideo],
    },
    {
      slug: "gestor-rad",
      title: "Gestor RAD",
      subtitle: "Control centralizado de la relación asistencial docente.",
      description:
        "Sistema de gestión para la Relación Asistencial Docente (RAD) del Hospital Regional de Rancagua, que centraliza el control de alumnos, rotaciones, servicios clínicos y centros formadores.",
      detailsMarkdown: radMarkdown,
      year: "2026",
      role: "Desarrollo Full Stack",
      liveUrl: "https://example.com/gestor-rad",
      githubUrl: "https://github.com/johandev21/proyecto-rad-hospital-rancagua",
      icons: [...radIcons],
      sections: [
        {
          title: "Gestión de Rotaciones",
          content:
            "Registro de centros formadores, capacidad formadora, nóminas de alumnos, eventos adversos y repositorio de documentos.",
        },
      ],
      media: [testProjectVideo],
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
        { name: "SQLite", icon: "sqlite" },
      ],
    },
    {
      label: "Frontend",
      technologies: [
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "Vite", icon: "vite" },
        { name: "shadcn", icon: "shadcn" },
        { name: "Tailwind", icon: "tailwind" },
        { name: "HTML5", icon: "html5" },
        { name: "CSS", icon: "css" },
        { name: "JavaScript", icon: "javascript" },
      ],
    },
    {
      label: "Lenguajes y Runtimes",
      technologies: [
        { name: "TypeScript", icon: "typescript" },
        { name: "Python", icon: "python" },
        { name: "JavaScript", icon: "javascript" },
        { name: "Bun", icon: "bun" },
      ],
    },
    {
      label: "Frameworks y APIs",
      technologies: [
        { name: "Elysia", icon: "elysia" },
        { name: "NestJS", icon: "nestjs" },
        { name: "TanStack Router", icon: "tanstack-router" },
      ],
    },
    {
      label: "Herramientas",
      technologies: [
        { name: "TanStack Query", icon: "tanstack-query" },
        { name: "TanStack Router", icon: "tanstack-router" },
        { name: "Better Auth", icon: "better-auth" },
        { name: "Clerk", icon: "clerk" },
        { name: "Convex", icon: "convex" },
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
