import type { PortfolioData, Technology } from "../types";
import memsystemsNotebook from "../assets/projects/memsystems-notebook.webp";
import memsystemsMindmap from "../assets/projects/memsystems-mindmap.webp";
import memsystemsLibrary from "../assets/projects/memsystems-library.webp";
import memsystemsFlashcards from "../assets/projects/memsystems-flashcards.webp";
import memsystemsQuiz from "../assets/projects/memsystems-quiz.webp";
import tasklaneBoard from "../assets/projects/tasklane-board.webp";
import tasklaneCardDetail from "../assets/projects/tasklane-card-detail.webp";
import tasklaneDashboard from "../assets/projects/tasklane-dashboard.webp";
import tasklaneDark from "../assets/projects/tasklane-dark.webp";
import tasklanePreview from "../assets/projects/tasklane-preview.webp";
import nimboCatalog from "../assets/projects/nimbo-catalog.webp";
import nimboDetail from "../assets/projects/nimbo-detail.webp";
import nimboHome from "../assets/projects/nimbo-home.webp";
import nimboDark from "../assets/projects/nimbo-dark.webp";
import nimboCart from "../assets/projects/nimbo-cart.webp";

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
  { name: "Bun", icon: "bun" },
  { name: "Elysia", icon: "elysia" },
  { name: "Better Auth", icon: "better-auth" },
  { name: "SQLite", icon: "sqlite" },
  { name: "Drizzle", icon: "drizzle" },
  { name: "TypeScript", icon: "typescript" },
] satisfies Technology[];

const nimboIcons = [
  { name: "TanStack Start", icon: "tanstack-router" },
  { name: "React", icon: "react" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "shadcn", icon: "shadcn" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Drizzle", icon: "drizzle" },
  { name: "Zod", icon: "zod" },
  { name: "TypeScript", icon: "typescript" },
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

1. **Identidad y Sesiones**: Registro e inicio de sesión seguro con Better Auth, gestionando sesiones persistentes y control de acceso.
2. **Dashboard**: Vista general de tableros del usuario, con creación rápida y flujos guiados para nuevos proyectos.
3. **Boards, Lists y Cards**: CRUD completo con reordenamiento drag & drop, movimiento dinámico entre listas y edición inline.
4. **Detalle de Card**: Descripción enriquecida en Markdown, etiquetas por disciplina, fechas límite, asignación de miembros y comentarios.
5. **Colaboración en Tiempo Real**: Sincronización instantánea de eventos y presencia activa de miembros en el tablero mediante WebSockets.

## Stack Tecnológico

- **Frontend**: TanStack Start (React 19) con renderizado en servidor (SSR) y enrutamiento tipado de extremo a extremo.
- **Diseño**: Tailwind CSS y componentes accesibles basados en shadcn/ui.
- **Backend**: API de alto rendimiento con Bun y Elysia, optimizada para baja latencia.
- **Base de Datos y ORM**: SQLite con Drizzle ORM para consultas tipadas, migraciones declarativas y máxima velocidad en I/O.
- **Autenticación**: Better Auth para autenticación moderna, manejo seguro de sesiones y control directo de la persistencia.
- **Tiempo Real**: Sincronización bidireccional basada en WebSockets nativos de Bun y Elysia.

## Decisiones de Arquitectura

El desarrollo prioriza simplicidad, rendimiento y control total sobre el stack:

1. **Runtime y Servidor de Alto Desempeño**: Bun y Elysia proporcionan un arranque casi instantáneo, mínimo consumo de memoria y soporte nativo para WebSockets de alta concurrencia.
2. **Persistencia Tipada y Ligera**: SQLite y Drizzle ORM garantizan cero latencia de red en consultas locales, tipos TypeScript estrictos desde el esquema y migraciones predecibles.
3. **Autenticación Autónoma**: Better Auth elimina la dependencia de servicios SaaS externos para autenticación, manteniendo los datos de usuario y sesiones bajo control directo de la base de datos.
4. **Enrutamiento y SSR Tipado**: TanStack Start unifica la carga de datos del servidor con la interactividad del cliente, logrando transiciones instantáneas sin sacrificar SEO ni rendimiento inicial.`;

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

const nimboMarkdown = `## Contexto del Proyecto

Nimbo es una tienda web de cómics y mangas diseñada para ofrecer una experiencia de compra rápida, fluida y sin fricción en el mercado chileno. El proyecto nace para solucionar la lentitud y complejidad visual típica de los catálogos editoriales tradicionales, implementando un diseño editorial limpio con arquitectura moderna de renderizado en servidor.

La plataforma unifica catálogo reactivo, filtros dinámicos, gestión de carrito persistente y checkout estructurado mediante tipos de datos compartidos de extremo a extremo.

### Funcionalidades Principales

1. **Catálogo Facetado**: Exploración y búsqueda en tiempo real de más de 40 títulos editoriales con filtros combinados por editorial (Norma, Panini, Ivrea, DC), género, formato y rango de precio.
2. **Detalle de Producto Enriquecido**: Vistas de producto con control de stock en tiempo real, selector de unidades, información editorial completa y recomendaciones contextuales basadas en género.
3. **Carrito Reactivo y Persistente**: Estado global con Zustand y persistencia en almacenamiento local para preservar los pedidos entre sesiones del usuario.
4. **Pipeline Automatizado de Assets**: Almacenamiento desacoplado con claves compatibles con buckets de objetos y generación automática de variantes responsivas en formatos modernos AVIF y WebP.

## Stack Tecnológico

- **Frontend**: TanStack Start (React 19) con SSR, enrutamiento basado en archivos y renderizado optimizado con Nitro.
- **API y Tipado**: tRPC con React Query para comunicación tipada de extremo a extremo sin duplicar interfaces.
- **Base de Datos y ORM**: PostgreSQL local administrado con Drizzle ORM, migraciones declarativas y consultas SQL tipadas.
- **Gestión de Estado**: Zustand con middleware de persistencia para el carrito de compras.
- **Diseño y Estilos**: Tailwind CSS v4, componentes accesibles shadcn/ui y tipografía dual (Space Grotesk y Oxanium).
- **Validación**: Zod para esquemas de datos tanto en cliente como en servidor.

## Decisiones de Arquitectura

1. **Tipado Unificado con tRPC**: Garantiza que cualquier cambio en el esquema de la base de datos o en los procedimientos del servidor se refleje inmediatamente en el cliente, previniendo errores en tiempo de compilación.
2. **Pipeline de Portadas Desacoplado**: Las imágenes de catálogo se gestionan mediante claves abstractas de almacenamiento de objetos, generando variantes optimizadas en resolución y formato para minimizar el consumo de ancho de banda.
3. **Estado Híbrido Servidor-Cliente**: La carga de catálogo se beneficia de renderizado en servidor para velocidad de carga inicial, mientras que el carrito opera de forma reactiva en el cliente con sincronización local inmediata.`;

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
      githubUrl: "https://github.com/johandev21/Memsystems-AI",
      icons: [...memsystemsIcons],
      sections: [
        {
          title: "Ecosistema de Estudio",
          content:
            "Notebooks, fuentes de información, chat contextual y materiales de estudio generados por IA, unificados en una sola aplicación.",
        },
      ],
      media: [
        {
          type: "image",
          title: "Espacio de trabajo y chat contextual con RAG",
          caption:
            "Consulta de fuentes con streaming y citación en tiempo real.",
          src: memsystemsNotebook.src,
        },
        {
          type: "image",
          title: "Generación de mapas mentales interactivos",
          caption: "Visualización de conceptos clave extraídos mediante IA.",
          src: memsystemsMindmap.src,
        },
        {
          type: "image",
          title: "Biblioteca de notebooks organizada por carpetas",
          caption:
            "Portadas construidas a partir de los banners y fuentes de cada notebook.",
          src: memsystemsLibrary.src,
        },
        {
          type: "image",
          title: "Repaso con tarjetas de estudio",
          caption:
            "Sesión activa con pregunta, solución y navegación entre tarjetas generadas desde el notebook.",
          src: memsystemsFlashcards.src,
        },
        {
          type: "image",
          title: "Cuestionarios de práctica generados por IA",
          caption:
            "Preguntas con alternativas y progreso de avance sobre el contenido de las fuentes.",
          src: memsystemsQuiz.src,
        },
      ],
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
      githubUrl: "https://github.com/johandev21/Tasklane",
      icons: [...tasklaneIcons],
      sections: [
        {
          title: "Colaboración Instantánea",
          content:
            "Cada cambio realizado por un miembro se refleja de inmediato en las pantallas de todos los usuarios conectados, sin recargar la página.",
        },
      ],
      media: [
        {
          type: "image",
          title: "Tablero colaborativo Kanban en tiempo real",
          caption:
            "Gestión de tareas, etiquetas por disciplina y presencia de usuarios.",
          src: tasklaneBoard.src,
        },
        {
          type: "image",
          title: "Detalle de tarjeta con descripción en Markdown",
          caption:
            "Responsables, etiquetas, descripción y comentarios en una sola vista.",
          src: tasklaneCardDetail.src,
        },
        {
          type: "image",
          title: "Panel general de tableros y telemetría",
          caption:
            "Resumen de tableros, tarjetas en curso, listas y miembros por tablero.",
          src: tasklaneDashboard.src,
        },
        {
          type: "image",
          title: "Tablero en modo oscuro",
          caption:
            "Tema oscuro con la misma jerarquía visual y estados de las tarjetas.",
          src: tasklaneDark.src,
        },
        {
          type: "image",
          title: "Vista general y arquitectura de producto",
          caption: "Landing page y previsualización interactiva de tableros.",
          src: tasklanePreview.src,
        },
      ],
    },
    {
      slug: "nimbo",
      title: "Nimbo",
      subtitle: "Tienda chilena de cómics y mangas con catálogo reactivo.",
      description:
        "Plataforma de e-commerce con TanStack Start, React 19, tRPC, PostgreSQL y Drizzle ORM, con búsqueda facetada, carrito persistente y pipeline de imágenes responsivas.",
      detailsMarkdown: nimboMarkdown,
      year: "2026",
      role: "Desarrollo Full Stack",
      githubUrl: "https://github.com/johandev21/nimbo",
      icons: [...nimboIcons],
      sections: [
        {
          title: "Experiencia Editorial y E-Commerce",
          content:
            "Catálogo en tiempo real, filtros facetados, carrito persistente con Zustand y pipeline automatizado de imágenes AVIF y WebP.",
        },
      ],
      media: [
        {
          type: "image",
          title: "Catálogo interactivo y búsqueda facetada",
          caption:
            "Filtrado por editorial, género y formato con actualización instantánea.",
          src: nimboCatalog.src,
        },
        {
          type: "image",
          title: "Ficha de producto y gestión de compra",
          caption:
            "Detalle con control de stock, selector de unidades y sugerencias contextuales.",
          src: nimboDetail.src,
        },
        {
          type: "image",
          title: "Portada y selección editorial destacada",
          caption:
            "Acceso directo al catálogo y títulos destacados con portadas optimizadas.",
          src: nimboHome.src,
        },
        {
          type: "image",
          title: "Catálogo en modo oscuro",
          caption:
            "Filtros facetados y grilla de productos con contraste adaptado al tema oscuro.",
          src: nimboDark.src,
        },
        {
          type: "image",
          title: "Carrito con subtotal y control de cantidades",
          caption:
            "Productos seleccionados, cantidades y resumen del pedido antes del checkout.",
          src: nimboCart.src,
        },
      ],
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
      icons: [...radIcons],
      sections: [
        {
          title: "Gestión de Rotaciones",
          content:
            "Registro de centros formadores, capacidad formadora, nóminas de alumnos, eventos adversos y repositorio de documentos.",
        },
      ],
      media: [],
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
      { icon: "file-user", label: "CV" },
    ],
    email: "johandev21@gmail.com",
    placeholder:
      "Un puesto, un proyecto, una idea o simplemente un saludo. Cuéntame qué tienes en mente.",
    helperText: "Todos los mensajes llegan directamente a mi correo",
  },
};
